<template>
    <v-app>
        <v-main class="pa-0 ma-0">
            <v-container fluid class="pa-0 ma-0" style="height: 100vh; overflow: hidden;">
                <v-row style="height: 102vh;" no-gutters>
                    <v-col cols="6" class="bg-primary"></v-col>
                    <v-col cols="6" class="h-100 align-center">
                        <v-row no-gutters class="text-center h-100" align-content="center">
                            <v-col cols="12" class="d-flex flex-column align-center justify-center">
                                <v-img src="@/Images/pict-logo.jpg" style="width:15%"></v-img>
                                <h1 class="text-h5 font-weight-bold text-primary my-5">TNP PORTAL</h1>
                                <v-card class="text-justify pa-5" style="width:70%">
                                    <h1 class="text-h5 font-weight-bold text-primary mb-1">Welcome Back</h1>
                                    <v-form @submit.prevent="loginform" class="pa-3 mt-3">
                                        <!-- Registration Number -->
                                        <v-text-field v-model="Admin_Email" label="Admin Email" class="mb-1 pa-1"
                                            placeholder="Enter your Admin Mail" append-inner-icon="mdi-login"
                                            variant="underlined" color="primary"
                                            style="color:rgba(8, 30, 127)"></v-text-field>

                                        <!-- Password -->
                                        <v-text-field v-model="admin_password" label="Password" class="mb-1 pa-1"
                                            :type="show2 ? 'text' : 'password'" placeholder="Enter your password"
                                            :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" variant="underlined"
                                            color="primary" style="color:rgba(8, 30, 127)"
                                            @click:append-inner="show2 = !show2"></v-text-field>

                                        <v-btn class="mt-2 bg-primary" text="Login Now" type="submit" block :loading="loading"></v-btn>
                                    </v-form>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>


</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading:false,
            Admin_Email: null,
            admin_password: '',
            show2: false,
        }
    },
    methods: {
        loginform() {
            const adminCredentials = {
                email: this.Admin_Email,
                password: this.admin_password,
            }
            this.loading=true
            axios.post('https://tnp-portal-backend-tpx5.onrender.com/api/v1/admins/login', adminCredentials)
                .then(response => {
                    console.log('Login successful:', response.data);
                    //Storing Token in Backend
                    localStorage.setItem('adminAuth', response.data.token)
                    this.$router.push('/addcompany')
                    this.loading=false
                })
                .catch(error => {
                    console.error('Login failed:', error);
                    this.loading=false
                })
        }
    }
}
</script>

<style scoped></style>
<template>
    <v-container class="px-15 px-xs-0">
        <v-row class="d-flex justify-center" align="center" style="height: 90vh;">
            <v-col cols="6" class="text-center">
                <v-row class="d-flex justify-center">
                    <v-col cols="4">
                        <v-img src="@/Images/pict-logo.jpg" cover></v-img>
                    </v-col>
                </v-row>
                <h1 class="text-primary my-3">TNP ADMINISTRATOR PORTAL</h1>
                <v-progress-linear indeterminate color="primary" :height="5"></v-progress-linear>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
        const token = localStorage.getItem("adminAuth");
        if (token) {
            this.$router.push("/addcompany"); 
        }
        else{
            this.$router.push("/login"); 
        }
        }, 4700);
    }
}
</script>

<!-- eslint-disable vue/no-unused-vars -->
<template>
    <nav-drawer></nav-drawer>
    <v-container class="px-15">
        <h1 class="text-h5 font-weight-bold text-primary mb-3">View All Students</h1>
        <p class="text-justify text-subtitle-1" style="color: rgba(8, 30, 127, 0.6)">
            Through this page, you can see all the students registered on this portal for the placement opportunities.
            Click on View Details to check each and every student details.
        </p>
        <v-data-table :headers="table_headers" :items="unverified_students" class="text-left text-primary"
            :loading="loading">
            <!-- eslint-disable vue/valid-v-slot -->
            <template v-slot:item.actions="{ item }">
                <v-btn color="primary" @click="studentdetails(item.id)">Details</v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import axios from 'axios';
import NavDrawer from '../BaseComponents/NavDrawer.vue';
export default {
    components: {
        'nav-drawer': NavDrawer
    },
    data() {
        return {
            loading: true,
            unverified_students: [],
            table_headers: [
                { title: 'Student Name', key: 'fullName' },
                { title: 'Registration Number', key: 'pictRegistrationId' },
                { title: 'University PRN Number', key: 'universityPRN' },
                { title: 'View Verified Student Details', key: 'actions' },
            ],
        };
    },
    mounted() {
        this.fetchverifiedStudents()
    },
    methods: {
        async fetchverifiedStudents() {
            try {
                const response = await axios.get(
                    "https://tnp-portal-backend-tpx5.onrender.com/api/v1/students/verified"
                );
                this.unverified_students = response.data.students;
                console.log(this.unverified_students);
            } catch (err) {
                console.log(err);
            } finally {
                this.loading = false;
            }
        },
        studentdetails(studentID) {
            this.$router.push({ name: "StudentDetails", params: { id: studentID } });
        },
    }
};
</script>

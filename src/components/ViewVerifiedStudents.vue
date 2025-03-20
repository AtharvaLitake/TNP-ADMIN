<template>
    <nav-drawer></nav-drawer>
    <v-container class="px-15">
        <h1 class="text-h5 font-weight-bold text-primary mb-3">View All Students</h1>
        <p class="text-justify text-h6" style="color: rgba(8, 30, 127, 0.6)">
            Through this page, you can see all the students registered on this portal for the placement opportunities.
            Click on View Details to check each and every student details.
        </p>
        <v-text-field v-model="search" class="text-primary mt-5 mb-1 text-body-1" color="primary" append-inner-icon="mdi-magnify"
            label="Search by Name, Registration_ID or PRN" variant="outlined" clearable></v-text-field>
        <v-data-table :headers="table_headers" :items="filteredStudents" class="text-left text-primary"
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
            search: "",
            table_headers: [
                { title: 'Student Name', key: 'fullName' },
                { title: 'Registration Number', key: 'pictRegistrationId' },
                { title: 'University PRN Number', key: 'universityPRN' },
                { title: 'View Verified Student Details', key: 'actions' },
            ],
        };
    },
    computed: {
        filteredStudents() {
            if (!this.search) return this.unverified_students;
            return this.unverified_students.filter(student =>
                student.fullName.toLowerCase().includes(this.search.toLowerCase()) ||
                student.pictRegistrationId.toLowerCase().includes(this.search.toLowerCase()) ||
                student.universityPRN.toLowerCase().includes(this.search.toLowerCase())
            );
        }
    },
    mounted() {
        this.fetchverifiedStudents();
    },
    methods: {
        async fetchverifiedStudents() {
            try {
                const response = await axios.get(
                    "https://tnp-portal-backend-tpx5.onrender.com/api/v1/students/verified"
                );
                this.unverified_students = response.data.students;
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

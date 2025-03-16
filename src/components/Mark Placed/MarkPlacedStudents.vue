<!-- eslint-disable vue/valid-v-slot -->
<template>
    <nav-drawer></nav-drawer>
    <v-container class="px-10 py-5">
        <h1 class="text-h5 font-weight-bold text-primary mb-3">
            Mark Students as Applied
        </h1>
        <p class="text-justify text-subtitle-1" style="color: rgba(8, 30, 127, 0.6)">
            This page displays a list of students who have applied to the company. The admin can mark students as Placed
            by selecting the corresponding checkboxes to manage the hiring status effectively.
        </p>
        <v-row align="center" justify="end" class="my-3">
            <v-col cols="auto">
                <v-btn variant="flat" class="bg-primary" @click="markPlacedStudents" block>
                    Mark As Placed
                </v-btn>
            </v-col>
        </v-row>
        <v-data-table :headers="table_headers" :items="applied_students" class="text-left text-primary"
            :loading="loading">
            <!-- eslint-disable vue/valid-v-slot -->
            <template v-slot:item.actions="{ item }">
                <v-checkbox v-model="student_ids" :value="item.id" class="d-flex align-center">
                </v-checkbox>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import axios from "axios";
import NavDrawer from "../../BaseComponents/NavDrawer.vue";

export default {
    components: {
        "nav-drawer": NavDrawer,
    },
    data() {
        return {
            appliedStudentId: null,
            loading: true,
            applied_students: [],
            student_ids: [],
            table_headers: [
                { title: "Student Name", key: "fullName" },
                { title: "Registration Number", key: "pictRegistrationId" },
                { title: "University PRN Number", key: "universityPRN" },
                { title: "CGPA", key: "cgpa" },
                { title: "Mark as Placed", key: "actions" },
            ],
        };
    },
    created() {
        this.appliedStudentId = this.$route.params.id;
    },
    mounted() {
        this.fetchUnverifiedStudents();
    },
    methods: {
        async fetchUnverifiedStudents() {
            try {
                const response = await axios.get(
                    `https://tnp-portal-backend-tpx5.onrender.com/api/v1/jobs/${this.appliedStudentId}/applied-students`
                );
                this.applied_students = response.data.students;
            } catch (err) {
                console.log(err);
            } finally {
                this.loading = false;
            }
        },
        toggleStudentSelection(studentId, event) {
            if (event) {
                this.student_ids.push(studentId);
            } else {
                this.student_ids = this.student_ids.filter(id => id !== studentId);
            }
        },
        async markPlacedStudents() {
            console.log("Selected Student IDs:", this.student_ids);
        },
    },
};
</script>

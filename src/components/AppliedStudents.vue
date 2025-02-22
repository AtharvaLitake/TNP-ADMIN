<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/valid-v-slot -->
<template>
  <nav-drawer></nav-drawer>
  <v-container class="px-15">
    <h1 class="text-h5 font-weight-bold text-primary mb-3">
      Check Applied Students
    </h1>
    <p class="text-justify text-subtitle-1" style="color: rgba(8, 30, 127, 0.6)">
      Check the list of students who have applied for job opportunities. This
      allows you to track applicants and review their details for the
      recruitment process.
    </p>
    <v-row no-gutters class="d-flex justify-end my-3">
      <v-col cols="3">
        <v-btn variant="flat" prepend-icon="mdi-download" class="bg-primary" @click="exportStudentData" block>
          Export Student Data
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table :headers="table_headers" :items="applied_students" class="text-left text-primary" :loading="loading">
    </v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";
import NavDrawer from "../BaseComponents/NavDrawer.vue";
export default {
  components: {
    "nav-drawer": NavDrawer,
  },
  data() {
    return {
      appliedStudentId: null,
      loading: true,
      applied_students: [],
      table_headers: [
        { title: "Student Name", key: "fullName" },
        { title: "Registration Number", key: "pictRegistrationId" },
        { title: "University PRN Number", key: "universityPRN" },
        { title: "CGPA", key: "cgpa" }
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
    async exportStudentData() {
      try {
        const response = await axios.get(
          `https://tnp-portal-backend-tpx5.onrender.com/api/v1/jobs/${this.appliedStudentId}/applied-students/csv`
        );
        const blob = new Blob([response.data], { type: "text/csv" });
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "applied_students.csv"); // Suggested filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

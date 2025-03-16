<template>
  <v-navigation-drawer expand-on-hover rail class="bg-primary">
    <v-list>
      <v-list-item :prepend-avatar="require('@/Images/pict-logo.jpg')" subtitle="Administrator Portal"
        title="TNP ADMIN"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" to="/dashboard"></v-list-item>
      <v-list-item prepend-icon="mdi-home-city" title="Add Job Opportunity" value="addCompany"
        to="/addcompany"></v-list-item>
      <v-list-item prepend-icon="mdi-bell" title="Send Notices" value="addNotifications"
        to="/addnotification"></v-list-item>
      <v-list-item prepend-icon="mdi-clipboard-check" title="Listed Jobs" value="listedJobs"
        to="/listedjobs"></v-list-item>
      <v-list-item prepend-icon="mdi-account-plus" title="View Registered Students" value="registeredStudents"
        to="/registeredstudent"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="View All Students" value="verifiedStudents"
        to="/students"></v-list-item>
      <v-list-item prepend-icon="mdi-creation" title="Mark as Placed" value="MarkPlaced"
        to="/markplaced"></v-list-item>
        <v-list-item prepend-icon="mdi-check-circle-outline" title="Mark as Shortlisted" value="MarkPlaced"
        to="/testcompanies"></v-list-item>
      <v-list-item prepend-icon="mdi-forum" title="Help & Support" value="HelpSupport" to="/help"></v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list density="compact" nav>
        <v-list-item class="mb-3" prepend-icon="mdi-logout" title="Logout" value="logout"
          @click="adminLogout"></v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      loader: false,
    }
  },
  methods: {
    async adminLogout() {
      this.loader = true
      try {
        await axios.post(
          "https://tnp-portal-backend-tpx5.onrender.com/api/v1/admins/logout");
        localStorage.removeItem("adminAuth");
        this.loader = false;
        this.$router.push("/login")
      } catch (error) {
        console.error("Error uploading:", error);
      }
    }
  }
}
</script>

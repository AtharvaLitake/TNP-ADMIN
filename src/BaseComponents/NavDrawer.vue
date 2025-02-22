<template>
      <v-navigation-drawer
        expand-on-hover
        rail
        class="bg-primary"
      >
        <v-list>
          <v-list-item
            :prepend-avatar="require('@/Images/pict-logo.jpg')"
            subtitle="Administrator Portal"
            title="TNP ADMIN"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-home-city" title="Add Job Opportunity" value="addCompany" to="/addcompany"></v-list-item>
          <v-list-item prepend-icon="mdi-bell" title="Send Notices" value="addNotifications" to="/addnotification"></v-list-item>
          <v-list-item prepend-icon="mdi-clipboard-check" title="Listed Jobs" value="listedJobs" to="/listedjobs"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="View Registered Students" value="registeredStudents" to="/registeredstudent"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="Help & Support" value="HelpSupport" to="/"></v-list-item>
        </v-list>

        <template v-slot:append>
      <!---<div class="d-flex justify-center pb-6">
        <v-btn>
          <v-list-item class="font-weight-bold text-primary" prepend-icon="mdi-logout" title="LOGOUT" value="logout"></v-list-item>
        </v-btn>
      </div>-->
      <v-list-item class="mb-3" prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
    </template>
      </v-navigation-drawer>  
</template>

<script>
</script>

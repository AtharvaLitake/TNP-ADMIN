<template>
    <nav-drawer></nav-drawer>
    <v-container class="px-15">
        <h1 class="text-h5 font-weight-bold text-primary mb-3">Admin Dashboard</h1>
        <p class="text-justify text-h6" style="color: rgba(8, 30, 127, 0.6)">Welcome to Dashboard! You can view all placement statistics here.</p>

        <v-row class="d-flex justify-space-between mt-2">
        <v-col cols="12" sm="2" class="d-flex flex-column" align-self="center">
          <v-card class="custom-card mx-auto" style="width: 230px; height: 185px;">
            <h3 class="text-blue mt-2" style="font-weight: 700;">Total Students</h3>
            <v-icon size="70" class=" mt-2 mr-2 text-blue">mdi-account-multiple</v-icon>
            <h1 class="text-blue mt-1" style="font-size: 40px;">720</h1>
          </v-card>
        </v-col>
        <v-col cols="12" sm="2" class="d-flex flex-column" align-self="center">
          <v-card class="custom-card mx-auto" style="width: 230px; height: 185px;">
            <h3 class="text-blue mt-2" style="font-weight: 700;">Placed Students</h3>
            <v-icon size="70" class=" mt-2 mr-2 text-blue">mdi-account-star</v-icon>
            <h1 class="text-blue mt-1" style="font-size: 40px;">410</h1>
          </v-card>
        </v-col>
        <v-col cols="12" sm="2" class="d-flex flex-column" align-self="center">
          <v-card class="custom-card mx-auto" style="width: 230px; height: 185px;">
            <h3 class="text-blue mt-2" style="font-weight: 700;">Companies Visited</h3>
            <v-icon size="70" class=" mt-2 mr-2 text-blue">mdi-bank</v-icon>
            <h1 class="text-blue mt-1" style="font-size: 40px;">79</h1>
          </v-card>
        </v-col>
        <v-col cols="12" sm="2" class="d-flex flex-column" align-self="center">
          <v-card class="custom-card mx-auto" style="width: 230px; height: 185px;">
            <h3 class="text-blue mt-2" style="font-weight: 700;">Dream Package</h3>
            <v-icon size="70" class=" mt-1 mr-2 text-blue">mdi-cash-multiple</v-icon>
            <h1 class="text-blue mt-1" style="font-size: 40px;">33 CTC</h1>
          </v-card>
        </v-col>

        
      </v-row>
    </v-container>
</template>
<script>
import NavDrawer from "../BaseComponents/NavDrawer.vue";

export default {
    name: "AdminDashboard",
    components: {
    "nav-drawer": NavDrawer,
  },
}
</script>
<style scoped>

  .custom-card {
    background-color: #fff !important; 
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    border: 2px solid #081E7F;
  }
  .text-blue {
    color: #081E7F !important;
  }
  </style>

<template>
  <nav-drawer></nav-drawer>
  <div
    class="custom_loader d-flex flex-column justify-center align-center"
    v-if="loading"
  >
    <v-progress-circular
      :size="62"
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
  <v-container v-else>
  <div class="mx-auto my-2 pa-2 ml-15" max-width="900">
    <h1 class="text-h5 font-weight-bold text-primary mb-3 ml-3">
      Student Details
    </h1>
    <v-divider class="mb-4" color="primary" :thickness="3"></v-divider>

    <!-- Display based on current page -->
    <v-container class="pa-0 ml-3">
      <v-row>
        <template v-for="(key) in getCurrentPageKeys()" :key="key">
          <v-col cols="6">
            <v-row dense>
              <!-- Label Column (40%) -->
              <v-col cols="5" class="font-weight-bold text-primary" style="font-size: 18px;">
                {{ formatKey(key) }}:
              </v-col>

              <!-- Value Column (60%) -->
              <v-col cols="7">
                <template v-if="isPdfUrl(key)">
                  <v-btn
                    color="primary"
                    :href="studentDetails[key]"
                    target="_blank"
                    download
                    style="min-width: 180px; text-align: center;"
                  >
                    {{ getButtonLabel(key) }}
                  </v-btn>
                </template>
                <template v-else>
                  <span class="text-justify" style="color: rgba(8, 30, 127, 0.6); font-size: 18px; font-weight: 500;">
                    {{ formatValue(key, studentDetails[key]) }}
                  </span>
                </template>
              </v-col>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </v-container>

    <!-- Validate Button on Page 2 -->
    <v-row v-if="currentPage === 2" class="d-flex justify-center pa-6 mt-8">
      <v-col cols="3">
        <v-btn class="bg-primary" size="x-large" type="submit" block :loading="btnloading" @click="validateStudent(studentId)">
          Validate
        </v-btn>
      </v-col>
    </v-row>

    <!-- Pagination -->
    <v-pagination v-model="currentPage" :length="2" color="primary" class="mt-4"></v-pagination>
  </div>
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
      studentId: null,
      studentDetails: {},
      loading: true,
      btnloading:false,
      error: null,
      currentPage: 1,

      studentKeys: [
        [
          "fullName",
          "primaryEmail",
          "alternateEmail",
          "primaryMobileNumber",
          "alternateMobileNumber",
          "dateOfBirth",
          "gender",
          "currentAddress",
          "city",
          "state",
          "permanentAddress",
          "branch",
          "division",
          "rollNumber",
          "universityPRN",
          "pictRegistrationId",
          "percentage10th",
          "board10th",
          "passingYear10th",
          "noOfGapYearsAfter10th",
          "reasonOfGapAfter10th",
          "after10thAppearedFor",
          "percentage12th",
          "board12th",
          "passingYear12th",
          "noOfGapYearsAfter12th",
          "reasonOfGapAfter12th",
          "percentageDiploma",
        ],
        [
          "universityOfDiploma",
          "passingYearDiploma",
          "noOfGapYearsAfterDiploma",
          "reasonOfGapAfterDiploma",
          "percentileCet",
          "percentileJee",
          "collegeStartedYear",
          "sgpaFeSem1",
          "sgpaFeSem2",
          "sgpaSeSem1",
          "sgpaSeSem2",
          "sgpaTeSem1",
          "sgpaTeSem2",
          "activeBacklogs",
          "activeBacklogSemesters",
          "passiveBacklogs",
          "yearDown",
          "aadharNumber",
          "panNumber",
          "passportNumber",
          "citizenship",
          "elqScore",
          "automataScore",
          "documentsURL",
          "amcatResultURL",
          "beReceiptURL",
        ],
      ],
    };
  },
  created() {
    this.studentId = this.$route.params.id;
  },
  mounted() {
    this.fetchStudentDetails(this.studentId);
  },
  methods: {
    async fetchStudentDetails(id) {
      try {
        const response = await axios.get(
          `https://tnp-portal-backend-tpx5.onrender.com/api/v1/students/${id}`
        );
        this.studentDetails = response.data.student;
        console.log("studentDetails:", this.studentDetails);
      } catch (err) {
        this.error = "Failed to fetch student details";
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    async validateStudent(studentId){
      this.btnloading=true;
      try {
        await axios.post(
          `https://tnp-portal-backend-tpx5.onrender.com/api/v1/students/${studentId}/verify`
        );
        this.$router.push("/registeredstudent")
      } catch (err) {
        this.error = "Failed to Validate student details";
        console.error(err);
      }
    },
    isPdfUrl(key) {
      return ["documentsURL", "amcatResultURL", "beReceiptURL"].includes(key);
    },
    getButtonLabel(key) {
      const labels = {
        documentsURL: "View Documents",
        amcatResultURL: "View Amcat PDF",
        beReceiptURL: "View BE Receipt",
      };
      return labels[key] || "Download File";
    },
    getCurrentPageKeys() {
      return this.studentKeys[this.currentPage - 1] || [];
    },
    formatValue(key, value) {
    if (key === "dateOfBirth" && value) {
      const date = new Date(value);
      return date.toLocaleDateString("en-GB"); 
    }
    return value || "N/A";
  },
    formatKey(key) {
      return key
        .replace(/_/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/\b\w/g, (char) => char.toUpperCase());
    },
  },
};
</script>

<style scoped>
.custom_loader {
  height: 90vh;
}
</style>
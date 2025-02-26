<template>
  <nav-drawer></nav-drawer>
  <v-container class="px-15">
    <v-row class="d-flex justify center">
      <v-col cols="12" class="d-flex flex-column" align-self="center">
        <h1 class="text-h5 font-weight-bold text-primary mb-3">Add Company</h1>
        <p class="text-justify text-h6" style="color: rgba(8, 30, 127, 0.6)">
          Through this page, you can add details about companies that are going
          to conduct placement drives in the college, helping students stay
          informed about upcoming opportunities and recruitment processes.
        </p>
        <v-form @submit.prevent="addlisting" class="mt-4">
          <v-row class="d-flex justify-space-between">
            <v-col cols="5">
              <v-text-field
                label="Company Name"
                class="mb-1 pa-1"
                placeholder="Enter Company Name"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="company_name"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-text-field
                label="Enter the Package of Company"
                class="mb-1 pa-1"
                placeholder="Enter Company Name"
                variant="underlined"
                color="primary"
                type="number"
                :min="0"
                style="color: rgba(8, 30, 127)"
                v-model="company_package"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-file-input
                label="Company Logo File"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="company_logo"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-file-input>
              <v-text-field
                label="Job Role"
                class="mb-1 pa-1"
                placeholder="Enter Job Role"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="job_role"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-text-field
                label="Job Location"
                class="mb-1 pa-1"
                placeholder="Enter Job Location"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="job_location"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-textarea
                label="Company Description"
                rows="6"
                flat
                counter="100"
                class="text-primary font-weight-medium mb-4"
                hint="Maximum 100 characters allowed"
                persistent-hint
                v-model="company_desc"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-textarea>
              <v-text-field
                label="Company Webiste URL"
                class="mb-1 pa-1"
                variant="underlined"
                color="primary"
                type="url"
                placeholder="Enter the Company URL"
                style="color: rgba(8, 30, 127)"
                v-model="company_website_url"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-text-field
                label="Application Deadline"
                class="mb-1 pa-1"
                variant="underlined"
                color="primary"
                type="datetime-local"
                placeholder="Select Date & Time"
                style="color: rgba(8, 30, 127)"
                v-model="application_deadline"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <p
                class="text-justify text-h7 pa-1"
                style="color: rgba(8, 30, 127, 0.6)"
              >
                Select Eligible Branches
              </p>
              <br>
              <v-checkbox
                v-for="branch in ['CE', 'IT', 'ENTC']"
                :key="branch"
                v-model="eligible_branches"
                :label="branch"
                :value="branch"
                color="primary"
                class="mt-n10"
                style="color: rgba(8, 30, 127, 0.6)"
               :rules="[(v) => !!v || 'This is required field']"
              ></v-checkbox>
              <v-select
                label="If Dream Company ?"
                class="mb-1 text-primary font-weight-medium"
                :items="['Yes', 'No']"
                v-model="dream_company"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-select>
            </v-col>
            <v-col cols="5">
              <v-text-field
                label="10th Percentage Criteria"
                class="mb-1 pa-1"
                placeholder="Enter 10th Percentage Criteria"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="percentage_10th"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-text-field
                label="12th Percentage Criteria"
                class="mb-1 pa-1"
                placeholder="Enter 12th Percentage Criteria"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="percentage_12th"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-text-field
                label="Diploma Percentage Criteria"
                class="mb-1 pa-1"
                placeholder="Enter 12th Percentage Criteria"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="percentage_diploma"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-text-field
                label="CGPA Criteria"
                class="mb-1 pa-1"
                placeholder="Enter CGPA Criteria"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="cgpa"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-text-field
                label="Active Backlog"
                class="mb-1 pa-1"
                placeholder="Enter CGPA Criteria"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="active_backlogs"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-text-field
                label="Passive Backlog"
                class="mb-1 pa-1"
                placeholder="Enter CGPA Criteria"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="passive_backlogs"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-text-field
                label="Automata Score"
                class="mb-1 pa-1"
                placeholder="Enter Automata Criteria (if not applicable specify 0)"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="automata_score"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-text-field
                label="ELQ Score"
                class="mb-1 pa-1"
                placeholder="Enter ELQ Criteria (if not applicable specify 0)"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="elq_score"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-text-field>
              <v-textarea
                label="Selection Process Description"
                rows="6"
                flat
                counter="100"
                class="text-primary font-weight-medium mb-2"
                hint="Maximum 100 characters allowed"
                persistent-hint
                v-model="selection_process"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-textarea>
              <v-file-input
                label="Job Description File"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="company_jd"
                :rules="[(v) => !!v || 'This is required field']"
              ></v-file-input>
              <v-btn
                class="mt-4 bg-primary"
                text="Add Company"
                size="x-large"
                type="submit"
                block
              ></v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import NavDrawer from "../BaseComponents/NavDrawer.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  components: {
    "nav-drawer": NavDrawer,
  },
  data() {
    return {
      company_name: "",
      company_package: null,
      company_logo: null,
      job_role: "",
      job_location: "",
      company_desc: "",
      application_deadline: null,
      eligible_branches: [],
      company_website_url: null,
      dream_company: "",
      percentage_10th: null,
      percentage_12th: null,
      percentage_diploma: null,
      cgpa: null,
      active_backlogs: null,
      passive_backlogs: null,
      automata_score: null,
      elq_score: null,
      company_jd: null,
      selection_process: "",
    };
  },
  methods: {
    async addlisting() {
      const formData = new FormData();
      formData.append("company_name", this.company_name);
      formData.append("company_package", this.company_package);
      formData.append("company_logo", this.company_logo);
      formData.append("job_role", this.job_role);
      formData.append("job_location", this.job_location);
      formData.append("company_desc", this.company_desc);
      formData.append("application_deadline", this.application_deadline);
      formData.append("eligible_branches", this.eligible_branches);
      formData.append("company_website_url", this.company_website_url);
      formData.append("dream_company", this.dream_company);
      formData.append("percentage_10th", this.percentage_10th);
      formData.append("percentage_12th", this.percentage_12th);
      formData.append("percentage_diploma", this.percentage_diploma);
      formData.append("cgpa", this.cgpa);
      formData.append("automata_score", this.automata_score);
      formData.append("elq_score", this.elq_score);
      formData.append("active_backlogs", this.active_backlogs);
      formData.append("passive_backlogs", this.passive_backlogs);
      formData.append("company_jd", this.company_jd);
      formData.append("selection_process", this.selection_process);

      try {
        const response = await axios.post("https://tnp-portal-backend-tpx5.onrender.com/api/v1/jobs", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${localStorage.getItem("adminAuth")}`
          },
        });
        toast.success("Form submitted successfully!", {
          position: "top-center",
          autoClose: 4000,
          style: {
            width: "600px",
            height: "400px",
            fontSize: "18px",
            padding: "20px",
            textAlign: "center",
          },
        });
        this.$router.push('/listedjobs')
      } catch (error) {
        console.error(
          "Error adding company:",
          error.response ? error.response.data : error.message
        );
        toast.error("⚠️ Please fill all fields!", {
          position: "top-center",
          autoClose: 4000,
          style: {
            width: "600px",
            height: "400px",
            fontSize: "18px",
            padding: "20px",
            textAlign: "center",
          },
        });
        return;
      }
    },
  },
};
</script>

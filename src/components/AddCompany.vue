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
              ></v-text-field>
              <v-file-input
                label="Company Logo File"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="company_logo"
              ></v-file-input>
              <v-text-field
                label="Job Role"
                class="mb-1 pa-1"
                placeholder="Enter Job Role"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="job_role"
              ></v-text-field>
              <v-text-field
                label="Job Location"
                class="mb-1 pa-1"
                placeholder="Enter Job Location"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="job_location"
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
              ></v-textarea>
              <v-text-field
                label="Company Webiste URL"
                class="mb-1 pa-1"
                variant="underlined"
                color="primary"
                type="url"
                placeholder="Enter the Company URL"
                style="color: rgba(8, 30, 127)"
                v-model="company_url"
              ></v-text-field>
              <v-text-field
                label="Application Deadline"
                class="mb-1 pa-1"
                variant="underlined"
                color="primary"
                type="datetime-local"
                placeholder="Select Date & Time"
                style="color: rgba(8, 30, 127)"
                v-model="app_deadline"
              ></v-text-field>
              <v-select
                label="Select Eligible Branches"
                class="mb-1 text-primary font-weight-medium"
                :items="['CE', 'IT', 'ENTC','CE & IT','ALL']"
                v-model="eligible_branch"
              ></v-select>
            </v-col>
            <v-col cols="5">
              <v-select
                label="If Dream Company ?"
                class="mb-1 text-primary font-weight-medium"
                :items="['Yes', 'No']"
                v-model="dream_company"
              ></v-select>
              <v-text-field
                label="10th Percentage Criteria"
                class="mb-1 pa-1"
                placeholder="Enter 10th Percentage Criteria"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="percentage_10th"
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
              ></v-text-field>
              <v-text-field
                label="Automata Score"
                class="mb-1 pa-1"
                placeholder="Enter Automata Criteria (if not applicable specify 0)"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="automata"
              ></v-text-field>
              <v-text-field
                label="ELQ Score"
                class="mb-1 pa-1"
                placeholder="Enter ELQ Criteria (if not applicable specify 0)"
                variant="underlined"
                color="primary"
                type="number"
                style="color: rgba(8, 30, 127)"
                v-model="elq"
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
              ></v-textarea>
              <v-file-input
                label="Job Description File"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="company_jd"
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
import NavDrawer from "../BaseComponents/NavDrawer.vue";
export default {
  components:{
    'nav-drawer':NavDrawer,
  },
  data() {
    return {
      company_name: "",
      company_package: null,
      company_logo: null,
      job_role: "",
      job_location: "",
      company_desc: "",
      app_deadline: null,
      eligible_branch: "",
      company_url:null,
      dream_company: "",
      percentage_10th: null,
      percentage_12th: null,
      cgpa: null,
      automata: null,
      elq: null,
      company_jd: null,
      selection_process: "",
    };
  },
  methods: {
    addlisting() {
      console.log({
        company_name: this.company_name,
        company_package: this.company_package,
        company_logo: this.company_logo,
        job_role: this.job_role,
        job_location: this.job_location,
        company_desc: this.company_desc,
        app_deadline: this.app_deadline,
        eligible_branch: this.eligible_branch,
        dream_company: this.dream_company,
        percentage_10th: this.percentage_10th,
        percentage_12th: this.percentage_12th,
        cgpa: this.cgpa,
        automata: this.automata,
        elq: this.elq,
        company_jd: this.company_jd,
        selection_process: this.selection_process,
      });
    },
  },
};
</script>

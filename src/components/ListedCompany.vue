<template>
    <nav-drawer />
    <div class="custom_loader d-flex flex-column justify-center align-center" v-if="loader">
        <v-progress-circular :size="62" indeterminate color="primary"></v-progress-circular>
    </div>
    <v-container class="px-15" v-if="!loader">
        <h1 class="text-h5 font-weight-bold text-primary mb-5">Listed Job Opportunities</h1>
        <p class="text-justify text-h6" style="color: rgba(8, 30, 127, 0.6)">
            This page shows all the job opportunities listed by the TNP Administrator. Upon clicking on "View Applied
            Students," you can see the list of students who have applied for the job opportunity.
        </p>
        <v-row no-gutters v-for="job in listedjobs" :key="job.id" justify="space-between"
            class="mb-2 border-b-sm">
            <v-col cols="2" class="d-flex align-center">
                <v-img :src="job.companyLogoURL" transition width="120" height="120" />
            </v-col>
            <v-col cols="5" class="d-flex flex-column justify-center text-left ">
                <p class="text-h6 font-weight-bold text-primary mb-2">{{ job.companyName }}</p>
                <p class="font-weight-medium text-primary">CTC - {{ job.companyPackage }} LPA</p>
            </v-col>
            <v-col cols="4" class="d-flex flex-column justify-center align-center">
                <v-btn class="mb-2" variant="outlined" size="x-large" color="primary" @click="getAppliedStudent(job.id)">View Applied Student</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <app-footer></app-footer>
</template>

<script>
import axios from 'axios';
import NavDrawer from "../BaseComponents/NavDrawer.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
    components: {
        "nav-drawer": NavDrawer,
    },
    mounted() {
        this.fetchlistedjobs()
    },
    data() {
        return {
            listedjobs: [],
            loader: false
        }
    }, methods: {
        async fetchlistedjobs() {
            this.loader = true;
            try {
                const response = await axios.get(
                    "https://tnp-portal-backend-tpx5.onrender.com/api/v1/jobs"
                );
                this.listedjobs = response.data.jobs;
                console.log(this.listedjobs)
            } catch (err) {
                toast.error("Error in loading jobs. Please try again later.", {
            position: "top-center",
            autoClose: 4000,
            style: {
              width: "500px",
              height: "200px",
              fontSize: "16px",
              padding: "10px",
              textAlign: "center",
            },
          });
                console.log(err);
            } finally {
                this.loader = false
            }
        },
        getAppliedStudent(jobId)
        {
            this.$router.push({ name: "AppliedStudents", params: { id: jobId } });
        }
    }
}

</script>

<style scoped>
.custom_loader {
    height: 100vh;
}
</style>
<template>
    <nav-drawer></nav-drawer>
    <div class="custom_loader d-flex flex-column justify-center align-center" v-if="loading">
        <v-progress-circular :size="62" indeterminate color="primary"></v-progress-circular>
    </div>
</template>

<script>
import axios from "axios";
import NavDrawer from '../BaseComponents/NavDrawer.vue';
export default {
    components: {
        "nav-drawer": NavDrawer,
    },
    data() {
        return {
            studentId: null,
            studentDetails: {},
            loading: true,
            error: null,
        };
    },
    created() {
        this.studentId = this.$route.params.id;
    },
    mounted() {
        this.fetchJobDetails(this.studentId);
    },
    methods: {
        async fetchJobDetails(id) {
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
    },
};
</script>

<style scoped>
.custom_loader {
  height: 90vh;
}
</style>
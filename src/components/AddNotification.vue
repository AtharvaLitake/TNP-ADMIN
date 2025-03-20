<template>
  <nav-drawer></nav-drawer>
  <v-container class="px-15">
    <h1 class="text-h5 font-weight-bold text-primary mb-3">Send Notices</h1>
    <p class="text-justify text-h6" style="color: rgba(8, 30, 127, 0.6)">
      Through this page, you can send notices about placement opportunities to
      all individuals, ensuring they stay informed about upcoming recruitment
      drives and job openings.
    </p>
    <v-form @submit.prevent="addnotice">
      <v-text-field label="Notice Title" class="mb-4 pa-1 mt-2" placeholder="Enter Notice Title Here"
        variant="underlined" color="primary" style="color: rgba(8, 30, 127)"
        v-model="notification_title"></v-text-field>
      <v-textarea label="Notice Description" rows="6" flat counter="100" class="text-primary font-weight-medium mb-4"
        hint="Maximum 100 characters allowed" persistent-hint v-model="notification_body"></v-textarea>
      <v-row class="d-flex justify-end">
        <v-col cols="3">
          <v-btn class="mt-4 bg-primary" :loading="loading" text="Send Notice" size="x-large" type="submit"
            block></v-btn>
        </v-col>
      </v-row>
    </v-form>
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
      notification_title: "",
      notification_body: "",
      loading: false,
    };
  },
  methods: {
    async addnotice() {
      if (!this.notification_title || !this.notification_body) {
        toast.error("Please fill in all fields.", {
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
        return;
      }
      this.loading = true;
      try {
        await axios.post("https://tnp-portal-backend-tpx5.onrender.com/api/v1/notices", {
          title: this.notification_title,
          description: this.notification_body,
        });
        /*alert("Notice sent successfully!");*/
        toast.success("Notice sent successfully!", {
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
        this.notification_title = "";
        this.notification_body = "";
      } catch (error) {
        toast.error("Error in sending notice. Please try again later.", {
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
        console.error("Error sending notice:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
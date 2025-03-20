<template>
    <h1 class="text-h5 font-weight-bold text-primary mb-4">Notices</h1>
    <div class="custom_loader d-flex flex-column justify-center align-center" v-if="loading">
        <v-progress-circular :size="62" indeterminate color="primary"></v-progress-circular>
    </div>
    <v-row no-gutters class="py-3 border-b-sm " v-for="notification in notifications" :key='notification.id'>
        <v-col cols="10" class="text-left">
            <p class="text-h6 text-primary">{{ notification.title }}</p>
            <p class="custom_colors">{{ notification.description }}</p>
        </v-col>
        <v-col cols="2" class="text-right">
            <v-icon color="primary" @click="deletenotices(notification.id)">mdi-delete</v-icon>
        </v-col>
    </v-row>
    <br><br><br><br><br>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
            notifications: []
        }
    },
    mounted() {
        this.fetchnotices()
    },
    methods: {
        async fetchnotices() {
            this.loading = true
            try {
                const response = await axios.get("https://tnp-portal-backend-tpx5.onrender.com/api/v1/notices/admin");
                this.notifications = response.data.notices
            } catch (err) {
                console.error(err);
            } finally {
                this.loading = false;
            }
        },
        async deletenotices(noticeId) {
            try {
                const response = await axios.delete(`https://tnp-portal-backend-tpx5.onrender.com/api/v1/notices/${noticeId}`);
                console.log("Notice deleted:", response.data);
                this.notifications = this.notifications.filter(notice => notice.id !== noticeId);
            } catch (err) {
                console.error("Error deleting notice:", err);
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
.custom_colors {
    color: rgba(8, 30, 127, 0.6);
}

.custom_loader {
    height: 25vh;
}
</style>
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
      <v-text-field
        label="Notice Title"
        class="mb-4 pa-1 mt-2"
        placeholder="Enter Notice Title Here"
        variant="underlined"
        color="primary"
        style="color: rgba(8, 30, 127)"
        v-model="notification_title"
      ></v-text-field>
      <v-textarea
        label="Notice Description"
        rows="6"
        flat
        counter="100"
        class="text-primary font-weight-medium mb-4"
        hint="Maximum 100 characters allowed"
        persistent-hint
        v-model="notification_body"
      ></v-textarea>
      <v-row class="d-flex justify-end">
        <v-col cols="3">
          <v-btn
            class="mt-4 bg-primary"
            text="Send Notice"
            size="x-large"
            type="submit"
            block
          ></v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import NavDrawer from '../BaseComponents/NavDrawer.vue';
export default {
  components:{
    'nav-drawer':NavDrawer
  },
  data() {
    return {
      notification_title: "",
      notification_body: "",
    };
  },
  methods: {
    addnotice() {},
  },
};
</script>
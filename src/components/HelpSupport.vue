7 <template>
  <nav-drawer></nav-drawer>
  <v-container class="px-15">
    <h1 class="text-h5 font-weight-bold text-primary mb-3">Help & Support</h1>
    <p class="text-justify text-h6" style="color: rgba(8, 30, 127, 0.6)">
      This section is designed for resolving student queries directly by TNP,
      ensuring quick communication and efficient resolution of placement-related
      concerns.
    </p>
    <div class="d-flex justify-end">
      <v-btn
        class="mt-4 bg-primary"
        text="Summarize Queries"
        size="x-large"
        type="submit"
      ></v-btn>
    </div>
    <h1 class="text-h6 font-weight-bold text-primary mb-1 mt-2">
      Student Queries:
    </h1>
    <v-col cols="12" md="12">
      <v-sheet class="pa-1 mb-3 rounded-lg" outlined>
        <v-expansion-panels flat class="mt-2">
          <v-expansion-panel color="#F7F7F7">
            <v-expansion-panel-title>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center">
                  <v-icon size="20" class="mr-2 text-primary"
                    >mdi-account</v-icon
                  >
                  <span
                    class="text-h7 font-weight-bold mt-1"
                    style="color: rgba(8, 30, 127, 0.6)"
                    >Apurva Kulkarni</span
                  >
                </div>

                <div
                  class="text-h7 font-weight-bold mt-2 pa-1"
                  style="color: rgba(8, 30, 127, 0.6)"
                >
                  <!--{{ userQuery }}-->
                  <p>
                    I got logged in to the test but not able to go ahead showing
                    error. How to resolve this?
                  </p>
                </div>
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-primary" style="width: 100%">
              <v-textarea
                v-model="userInput"
                label="Reply here"
                outlined
                color="primary"
                rows="2"
                auto-grow
                class="custom-textarea"
              ></v-textarea>
              <div class="d-flex justify-end">
                <v-btn
                  class="mt-0 bg-primary"
                  text="send reply"
                  size="large"
                  type="submit"
                ></v-btn>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-sheet>
    </v-col>
  </v-container>
</template>
<script>
import NavDrawer from "../BaseComponents/NavDrawer.vue";
export default {
  components: {
    "nav-drawer": NavDrawer,
  },
};
</script>
<style scoped>
.custom-textarea .v-input__control {
  background-color: #c8d3f5 !important; 
  border-radius: 8px; 
  width: 100% !important; 
  max-width: 800px; 
}
</style>

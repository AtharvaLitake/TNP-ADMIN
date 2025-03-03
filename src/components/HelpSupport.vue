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
      <v-btn class="mt-2 bg-primary" text="Summarize Queries" size="large" @click="summarizequeries"
        :loading="summary_loader"></v-btn>
    </div>
    <div v-if="summarize_text.length != 0" class="text-justify my-3" style="color: rgba(8, 30, 127, 0.6)">
      <p class="text-body-1">{{ summarize_text }}</p>
    </div>
    <h1 class="text-h6 font-weight-bold text-primary mb-1">Student Queries:</h1>
    <v-col cols="12" md="12" v-for="query in queries" :key="query.id">
      <v-sheet class="mb-3 rounded-lg" outlined>
        <v-expansion-panels flat>
          <v-expansion-panel color="#F7F7F7">
            <v-expansion-panel-title>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center">
                  <v-icon size="30" class="mr-2 text-primary">mdi-account</v-icon>
                  <span class="text-h6" style="color: rgba(8, 30, 127, 0.6)">{{ query.student.fullName }}</span>
                </div>
                <div class="text-body-1 mt-2 pa-1" style="color: rgba(8, 30, 127, 0.6)">
                  <p>
                    {{ query.description }}
                  </p>
                </div>
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-primary mt-3">
              <v-textarea v-model="userInput" label="Reply here" outlined color="primary" rows="2"
                class="custom-textarea"></v-textarea>
              <div class="d-flex justify-end">
                <v-btn class="mt-0 mr-2 bg-primary" text="Delete Query" size="large"
                  @click="deletequery(query.id)"></v-btn>
                <v-btn class="mt-0 bg-primary" text="Send Reply" size="large" type="submit"></v-btn>
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
import axios from "axios";
export default {
  data() {
    return {
      summarize_text: "",
      summary_loader: false,
      queries: [],
    };
  },
  components: {
    "nav-drawer": NavDrawer,
  },
  mounted() {
    this.fetchqueries()
  },
  methods: {
    async summarizequeries() {
      this.summary_loader = true;
      try {
        const response = await axios.get(
          "https://tnp-portal-backend-tpx5.onrender.com/api/v1/queries/summary"
        );
        this.summarize_text = response.data.summary;
      } catch (err) {
        console.log(err);
      } finally {
        this.summary_loader = false;
      }
    },
    async fetchqueries() {
      try {
        const response = await axios.get(
          "https://tnp-portal-backend-tpx5.onrender.com/api/v1/queries"
        );
        this.queries = response.data.queries;
        console.log(this.queries)
      } catch (err) {
        console.log(err);
      }
    },
    async deletequery(queryId) {
      try {
        await axios.delete(`https://tnp-portal-backend-tpx5.onrender.com/api/v1/queries/${queryId}`);
        this.queries = this.queries.filter(q => q.id !== queryId);
        console.log(`Query with ID ${queryId} deleted successfully.`);
      } catch (error) {
        console.error("Error deleting query:", error);
        alert("Failed to delete query. Please try again.");
      }
    }


  },
};
</script>
<style scoped>
:deep(.v-expansion-panel-text__wrapper) {
  padding: 0 !important;
}
</style>

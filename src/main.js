import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
loadFonts()
//router imports
import { createRouter, createWebHistory } from "vue-router";
//component imports
import AddCompany from './components/AddCompany.vue'
import AddNotification from './components/AddNotification.vue'
//router setup
const routes = [
  { path: "/addcompany", name: "AddCompany", component: AddCompany },
  { path: "/addnotification", name: "AddNotification", component: AddNotification },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
loadFonts()
//router imports
import { createRouter, createWebHistory } from "vue-router";
//component imports
import AddCompany from './components/AddCompany.vue'
//router setup
const routes = [
  { path: "/addcompany", name: "AddCompany", component: AddCompany },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')

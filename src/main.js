import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
loadFonts();
//router imports
import { createRouter, createWebHistory } from "vue-router";
//component imports
import AddCompany from "./components/AddCompany.vue";
import AddNotification from "./components/AddNotification.vue";
import LoginPage from "./components/LoginPage.vue";
import ViewRegisteredStudent from "./components/ViewRegisteredStudent.vue";
import LockPage from "./components/LockPage.vue";
import VerifyStudent from "./components/VerifyStudent.vue";
//router setup
//axios setup
import axios from 'axios'

//Attaching header
const token = localStorage.getItem("adminAuth");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const routes = [
  {
    path: "/addcompany",
    name: "AddCompany",
    component: AddCompany,
  },
  {
    path: "/addnotification",
    name: "AddNotification",
    component: AddNotification,
  },
  { path: "/", name: "LoginPage", component: LoginPage },
  {
    path: "/registeredstudent",
    name: "ViewRegisteredStudent",
    component: ViewRegisteredStudent,
  },
  { path: "/lockpage", name: "LockPage", component: LockPage },
  {
    path: "/verifystudent/:id",
    name: "verifyStudent",
    component: VerifyStudent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//guard for login
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("adminAuth");
  if (to.path !== "/" && to.path !== "/lockpage") {
    to.meta.requiresAuth = true;
  }
  if (
    to.meta.requiresAuth &&
    (!token || token == "null" || token == "undefined")
  ) {
    next("/lockpage");
  } else {
    next();
  }
});

createApp(App).use(vuetify).use(router).mount("#app");

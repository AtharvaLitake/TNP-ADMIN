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
import ListedCompany from "./components/ListedCompany.vue";
import AppliedStudents from "./components/AppliedStudents.vue";
import SplashScreen from "./BaseComponents/SplashScreen.vue";
import NotFound from "./BaseComponents/NotFound.vue"
import HelpSupport from "./components/HelpSupport.vue";
import AdminDashboard from "./components/AdminDashboard.vue";
import ViewVerifiedStudents from "./components/ViewVerifiedStudents.vue"
import StudentsDetails from "./components/StudentsDetails.vue";
import MarkPlaced from "./components/Mark Placed/MarkPlaced.vue";
import MarkPlacedStudents from "./components/Mark Placed/MarkPlacedStudents.vue";
import TestCompanies from "./components/Test Shortlist/TestCompanies.vue";
import TestShortlist from "./components/Test Shortlist/TestShortlist.vue";
//axios setup
import axios from "axios";

//Attaching header
const token = localStorage.getItem("adminAuth");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

//router setup
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
  { path: "/login", name: "LoginPage", component: LoginPage },
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
  {
    path: "/listedjobs",
    name: "ListedCompany",
    component: ListedCompany,
  },
  {
    path: "/help",
    name: "HelpSupport",
    component: HelpSupport,
  },
  {
    path: "/dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
  {
    path: "/appliedstudents/:id",
    name: "AppliedStudents",
    component: AppliedStudents,
  },
  {
    path: "/students",
    name: "ViewVerifiedStudents",
    component: ViewVerifiedStudents,
  },
  {
    path: "/students/:id",
    name: "StudentDetails",
    component: StudentsDetails,
  },
  {
    path: "/markplaced",
    name: "MarkPlaced",
    component: MarkPlaced,
  },
  {
    path: "/markplaced/:id",
    name: "MarkPlacedStudents",
    component: MarkPlacedStudents,
  },
  {
    path: "/testcompanies",
    name: "TestCompany",
    component: TestCompanies,
  },
  {
    path: "/testshortlist/:id",
    name: "TestShortlist",
    component: TestShortlist,
  },
  { path: "/", name: "SplashScreen", component: SplashScreen },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//guard for login
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("adminAuth");
  if (to.path !== "/" && to.path !== "/lockpage" && to.path !== "/login") {
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

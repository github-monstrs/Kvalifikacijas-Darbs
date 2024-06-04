import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Hero.vue";
import Contacts from "@/views/Contacts.vue";
import Projects from "@/views/Projects.vue";
import MemoryGame from "@/views/MemoryGame.vue";
import Dashboard from "@/views/dashboard.vue";
import Login from "@/views/LogIn.vue";
import Register from "@/views/Register.vue";
import Leaderboard from "@/views/Leaderboard.vue";
import ForgotPwd from "@/views/ForgotPwd.vue";
import ResetPassword from "@/views/ResetPassword.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/projects/memory-game",
    name: "projects/memory-game",
    component: MemoryGame,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,

  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/leaderboard",
    name: "leaderboard",
    component: Leaderboard,
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPwd,
  },
  {
    path: "/password-reset/:token",
    name: "password-reset",
    component: ResetPassword,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
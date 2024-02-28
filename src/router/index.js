import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Hero.vue";
import Contacts from "@/views/Contacts.vue";
import Projects from "@/views/Projects.vue";
import MemoryGame from "@/views/MemoryGame.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
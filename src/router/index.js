import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory("#"),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/projects",
      name: "project",
      component: () => import("../views/Project.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Contact.vue"),
    },
  ],
});

export default router;

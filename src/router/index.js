import { createRouter, createWebHistory } from "vue-router";
import nprogress from "nprogress";
import { auth } from "../store/auth.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
      meta: { test: "Default" },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("@/views/Dashobard.vue"),
      meta: { test: "AuthLayout", requiresAuth: true },
    },
  ],
});
router.beforeEach((from, to, next) => {
  const test = auth();
  if (from.meta.requiresAuth) {
    if (test.getTest) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});
router.afterEach((to) => {
  // nprogress.done();
});
export default router;

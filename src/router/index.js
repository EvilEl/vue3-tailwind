import { createRouter, createWebHistory } from "vue-router";
import nprogress from "nprogress";

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
      meta: { test: "AuthLayout" },
    },
  ],
});
router.beforeEach((from, to, next) => {
  // nprogress.start();
  next();
});
router.afterEach((to) => {
  // nprogress.done();
});
export default router;

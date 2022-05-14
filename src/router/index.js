import { createRouter, createWebHistory } from "vue-router";
import nprogress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  routes: [
    {
      path: "/",
      name: "AuthLayout",
      component: () => import("@/AuthLayout.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/Dashobard.vue"),
    },
  ],
});
router.beforeEach((from, to, next) => {
  nprogress.start();
  next();
});
router.afterEach((to) => {
  nprogress.done();
});
export default router;

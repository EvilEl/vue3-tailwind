const layouts = [
  { name: "AuthLayout", component: () => import("@/layouts/AuthLayout.vue") },
  { name: "Default", component: () => import("@/layouts/Default.vue") },
];
export default layouts;

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./css/tailwind.css";
import "nprogress/nprogress.css";
const app = createApp(App);

import layouts from "@/layouts/layouts.js";
import { defineAsyncComponent } from "vue";
/**
 * создаем динамические компоненты для лаюута
 */
layouts.forEach((layoutComponent) => {
  const [name, component] = Object.values(layoutComponent);
  const AsyncComp = defineAsyncComponent(() => component());
  app.component(name, AsyncComp);
});
app.use(createPinia());
app.use(router);
app.mount("#app");

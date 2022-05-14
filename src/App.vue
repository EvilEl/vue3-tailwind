<template>
  <AuthLayout />
</template>
<script>
import AuthLayout from "./layouts/AuthLayout.vue";
import { auth } from "./store/auth";
export default {
  components: { AuthLayout },
  setup() {
    const storeAuth = auth();
    return {
      storeAuth,
    };
  },
};
</script>
<style></style>

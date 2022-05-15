<template>
  <div class="auth-layout bg-cyan-500">
    <router-link to="/">Home</router-link>
  </div>
  <slot></slot>
</template>
<script>
import { computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRoute();
    return {};
  },
};
</script>
<style lang="scss"></style>

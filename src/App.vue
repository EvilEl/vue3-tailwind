<template>
  <component :is="meta">
    <router-view></router-view>
  </component>
</template>
<script>
import { computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRoute();
    const meta = computed(() => router.meta.test);

    return { meta, router };
  },
};
</script>
<style></style>

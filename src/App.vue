<template>
  <Default>
    <router-view></router-view>
  </Default>
  <div ref="container"></div>
</template>
<script>
import Default from "@/layouts/default.vue";
export default {
  components: { Default },
  setup() {
    return {};
  },
};
</script>
<style></style>

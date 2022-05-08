<template>
  <div class="defaut">
    <div class="grid defaut__header p-5 bg-cyan-400 flex justify-between">
      <router-link
        class="text-amber-300 duration-100 hover:text-amber-700"
        :to="{ name: 'task' }"
        >Todo Open</router-link
      >
      <router-link
        class="text-amber-300 duration-100 hover:text-amber-700"
        :to="{ name: 'home' }"
        >Back</router-link
      >
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>

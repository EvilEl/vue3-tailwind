<template>
  <div class="auth-layout bg-cyan-500">
    <router-link to="Dashboard">Dashboard</router-link>
    <!-- <router-link to="auth"> auth </router-link> -->
    <!-- <ul class="auth-layout__list flex p-10">
      <li
        class="auth-layout__item ml-3 first:ml-0 text-gray-50 hover:text-gray-500 border-2 p-2 rounded-md"
        v-for="link in links"
        :key="link.title"
      >
        <router-link @click="checkStatusUser" :to="link.name">
          {{ link.title }}
        </router-link>
      </li>
    </ul> -->
  </div>
  <slot></slot>
</template>
<script>
import { computed, onMounted, onBeforeUnmount } from "vue";
import { auth } from "@/store/auth.js";
export default {
  setup() {
    const storeAuth = auth();
    const getTest = computed(() => storeAuth.getTest);
    onMounted(() => {
      window.localStorage.setItem("user", true);
    });
    onBeforeUnmount(() => {
      //   window.localStorage.setItem("user", false);
    });
    // const links = [
    //   {
    //     title: "Sign In",
    //     name: "dashboard",
    //   },
    //   {
    //     title: "Sign Up",
    //     name: "Sign Up",
    //   },
    // ];
    const checkStatusUser = storeAuth.checkStatusUser;
    return {
      // links,
      getTest,
      checkStatusUser,
    };
  },
};
</script>
<style></style>

<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <h1 class="home__tite">Супер кресло</h1>
        <p class="home__description">
          Текст акции всегда отражает суть, а не просто болтовню, поэтому
          внимательнее
        </p>
        <router-link @click="isLogin" class="home__link" to="Dashboard">
          Подробнее
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { auth } from "@/store/auth.js";
export default {
  setup() {
    const storeAuth = auth();
    const isLogin = storeAuth.isLogin;
    return { isLogin };
  },
};
</script>
<style lang="scss">
.home {
  height: 100vh;
  width: 100%;
  background: url("@/assets/images/dashboards/bg.png") no-repeat center / cover;
  background-position: 60% 25%;
  &__content {
    padding-top: 192px;
  }
  &__tite {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #ffffff;
  }
  &__description {
    margin-top: 50px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #ffffff;
  }
  &__link {
    display: inline-block;
    margin-top: 50px;
    background: #f13c6e;
    border: 2px solid #ffffff;
    border-radius: 40px;
    padding: 13px 27px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
  }
}
</style>

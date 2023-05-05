<template>
  <div class="user-layout">
    <login-header />
    <div class="user-layout-bg">
      <router-view />
    </div>
  </div>
</template>

<script>
import LoginHeader from '@/components/LoginHeader';

export default {
  components: {
    LoginHeader
  }
};
</script>

<style lang="scss">
.user-layout {
  height: 100%;
  width: 100%;

  .user-layout-bg {
    height: 100%;
    width: 100%;
    background: url("~@/assets/bg-login.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
  }
}
</style>

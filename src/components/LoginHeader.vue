<template>
  <header-title class="login-header" />
</template>

<script>
import HeaderTitle from '@/components/layout/HeaderTitle';

export default {
  name: 'LoginHeader',
  components: {
    HeaderTitle
  }
};
</script>

<style>
.login-header {
  position: fixed;
  top: 16px;
  left: 32px;
}
</style>

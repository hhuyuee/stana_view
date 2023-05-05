<template>
  <div class="layout">
    <menu-header />
    <transition name="fade">
      <router-view class="router-container"></router-view>
    </transition>
  </div>
</template>

<script>
import MenuHeader from './Header';

export default {
  name: 'layout',
  components: { MenuHeader },
};
</script>

<style lang="scss">
@import "variable";
.layout {
  // height: 100%;
  position: relative;
  .router-container {
    box-sizing: border-box;
    // padding-top 50px
    position: relative;
    overflow: hidden;
    height: calc(100% - 48px);
  }
}
</style>

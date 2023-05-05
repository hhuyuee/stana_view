<template>

</template>

<script>
export default {
  name: 'menu-item',
  props: {
    router: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    parentRoute() {
      const arr = this.router.children || [];
      return arr.filter(i => i.children);
    },
    leafRoute() {
      const arr = this.router.children || [];
      return arr.filter(i => !i.children);
    },
    defaultActive() {
      return this.$route.name || 'community';
    }
  },
  methods: {
    clickRoute() {


    }
  }
};
</script>

<style lang="scss">
@import "variable";
.menu {
  float: left;
  position: relative;
  border-bottom-width: 0 !important;
  a {
    color: $--color-black;
    font-size: 18px !important;
  }
  .is-active {
    &::before {
      content: "";
      width: 100%;
      height: 4px;
      left: 0;
      top: 0;
      position: absolute;
      background-color: $--color-primary;
    }
  }
  .el-submenu {
    // 菜单组样式
    height: $height-header;
    .el-submenu__title {
      line-height: $height-header !important;
      height: $height-header !important;
      border-bottom-width: 0 !important;
      padding-left: 10px;
      padding-right: 10px;

      .el-submenu__icon-arrow {
        margin-left: 0;
      }
    }
  }
  .el-menu-item {
    // 单一菜单样式
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom-width: 0 !important;
    height: $height-header !important;
    line-height: $height-header !important;
    a {
      color: $--color-black;
    }
  }
}
.popper-menu {
  font-family: NotoSansSC;
  a {
    color: $--color-black;
    font-size: 16px;
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  .el-menu--popup {
    min-width: 107px;
  }
  .el-menu--popup-bottom-start {
    margin-top: 0 !important;
  }
  .el-menu-item {
    padding: 0 !important;
    width: 105px;
  }
  .router-link-active {
    color: $--color-primary;
  }
}
</style>

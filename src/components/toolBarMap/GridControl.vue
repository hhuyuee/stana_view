<template lang="pug">
  div.grid-control
    //- 显示网格按钮
    div.toggle-btn(
      :class="{gridShown}"
    )
      el-button(type="text" @click="toggleGrid")
        grid-icon
        span.text 显示网格
</template>
<script>
import GridIcon from '@/components/GridIcon';

export default {
  name: 'grid-control',
  components: {
    GridIcon
  },
  data() {
    return { gridShown: false };
  },
  methods: {
    toggleGrid() {
      this.gridShown = !this.gridShown;
      this.$emit('gridControl:toggle', this.gridShown);
    }
  }
};
</script>
<style lang="scss">
.grid-control {
  z-index: 2000;
  position: absolute;
  bottom: 5px;
  left: 20px;
  .toggle-btn {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.32);
    border-radius: 4px;
    padding-left: 6px;
    padding-right: 6px;

    .el-button>span{
      display: flex;
      align-items: baseline;
      // vertical-align: middle;
    }
  }
}
</style>

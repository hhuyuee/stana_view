<template>
  <span class="legend-item">
    <span class="color-block" :style="{ 'background-color': color }"></span>
    <el-tooltip :content="label" :open-delay="300" placement="top">
      <span class="label f-toe1">{{ label }}</span>
    </el-tooltip>
  </span>
</template>

<script>
import { Tooltip } from 'element-ui';

export default {
  name: 'legend-item',
  components: {
    [Tooltip.name]: Tooltip
  },
  props: {
    color: {
      type: String,
      default: '',
      required: true
    },
    label: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
@import "~@/theme/index.scss";
.legend-item {
  line-height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .color-block {
    display: inline-block;
    width: 20px;
    height: 12px;
  }
  .label {
    margin-left: 4px;
    display: inline-block;
  }
}
.f-toe1 {
  overflow: hidden;
  word-wrap: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

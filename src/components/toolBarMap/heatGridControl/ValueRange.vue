<template lang="pug">
  div.value-range
    div.value-range-item.hvr-grow(
      v-for="(item, index) in activeRange"
      :key="index"
      :style="{'background-color': item.active ? colorBand[index] : colorBandCancle[index]}"
      @click="() => handleClick(item, index)"
    )
      span.label {{item.value}}
</template>
<script>
import { colorBand, valueRange, colorBandCancle } from '@/config';

export default {
  name: 'value-range',
  props: {
    ranges: {
      type: Array,
      default: () => valueRange
    },
    colorBand: {
      type: Array,
      default: () => colorBand
    },
    colorBandCancle: {
      type: Array,
      default: () => colorBandCancle
    }
  },
  data() {
    const activeRange = this.ranges.map(item => ({
      value: item,
      active: true
    }));
    return {
      activeRange
    };
  },
  methods: {
    resetRange() {
      this.activeRange = this.ranges.map(item => ({
        value: item,
        active: true
      }));
    },
    handleClick(item, index) {
      this.activeRange[index].active = !this.activeRange[index].active;
      this.$emit('select:range', {
        range: [item, this.ranges[index + 1]],
        index,
        active: this.activeRange[index].active
      });
    }
  }
};
</script>
<style lang="scss">
.value-range {
  display: flex;
  padding-bottom: 10px;
  font-weight: 500;
  .value-range-item {
    display: inline-block;
    width: 2.5em;
    line-height: 24px;
    cursor: pointer;
    position: relative;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 1px;
    &:last-child {
      width: 0;
    }
    &:hover {
      z-index: 3000;
      cursor: pointer;
    }
    .label {
      position: relative;
      top: 20px;
      left: -0.5em;
    }
  }
}

// https://github.com/IanLunn/Hover
/* Grow */
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.1);
}
</style>

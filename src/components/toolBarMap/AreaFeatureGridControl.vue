<template lang="pug">
  .area-feature-grid-control(v-if="areaFeatureGridControlActive")
    div.control(v-show="gridShown")
      div.type-btn
        span.type-btn-span(
          v-for="(btn,index) in allTypes"
          :key="btn.label"
        )
          span.color-block(
      :style="{'background-color':btn.active ? blockColorBand[index] : blockColorBandCancle[index]}"
          )
          el-button(
            size="small"
            type="text"
            @click="() => hanleClickType(btn.label)"
            :style="{color: btn.active ? '#2F54C9': '#000620'}"
          ) {{btn.label}}
    //- 显示网格按钮
    div.toggle-btn(
      :class="{gridShown}"
    )
      el-button(type="text" @click="toggleGrid") <i class="el-icon-menu"></i>显示网格

</template>
<script>
import { mapState } from 'vuex';
import { blockColorBand, blockColorBandCancle } from '@/config';

/**
 * 地块特征-网格图-控制区
 */
export default {
  name: 'area-feature-grid-control',
  props: {
    areaFeatureGridControlActive: {
      type: Boolean,
      default: false
    },
    activeType: {
      type: String,
      default: 'pop'
    },
    allTypes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // types: [],
      gridShown: false,
      blockColorBand,
      blockColorBandCancle
    };
  },
  computed: {
    ...mapState({
      cityCode: state => state.selectedCity.code
    })
  },
  watch: {
    cityCode() {
      this.gridShown = false;
    }
  },
  methods: {
    toggleGrid() {
      this.gridShown = !this.gridShown;
      this.$emit('areaFeatureGridToggle:grid', this.gridShown);
    },
    hanleClickType(type) {
      this.$emit('areaFeatureGridUpdate:activeType', type);
    }
  }
};
</script>
<style lang="scss">
.area-feature-grid-control {
  z-index: 2000;
  position: absolute;
  bottom: 50px;
  left: 20px;
  .type-btn {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.32);
    border-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .type-btn-span {
      display: flex;
      align-items: center;
    }
    .color-block {
      display: inline-block;
      height: 1em;
      width: 1em;
      margin-right: 1em;
    }
  }
  .toggle-btn {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.32);
    border-radius: 4px;
    width: 6em;
    display: flex;
    justify-content: center;
  }
}
</style>

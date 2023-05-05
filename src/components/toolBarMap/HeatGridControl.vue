<template lang="pug">
  div.heat-grid-control(v-if="areaFeatureGridControlActive")
    div.control(v-show="gridShown")
      div.type
        el-button(
          v-for="btn in types"
          :key="btn.key"
          size="small"
          :type="btn.key === activeType ? 'primary': ''"
          @click="() => hanleClickType(btn.key)"
        ) {{btn.label}}
      div.value-range
        value-range(@select:range="selectRange" ref="value-range")

    //- 显示网格按钮
    div.toggle-btn(
      :class="{gridShown}"
    )
      el-button(type="text" @click="toggleGrid") <i class="el-icon-menu"></i>显示网格
</template>
<script>
import { mapState } from 'vuex';
import ValueRange from './heatGridControl/ValueRange';

const types = [
  { key: 'pop', label: '综合' },
  { key: 'home', label: '居住' },
  { key: 'work', label: '工作' },
  { key: 'visit', label: '到访' }
];
export default {
  name: 'heat-grid-control',
  components: {
    ValueRange
  },
  props: {
    areaFeatureGridControlActive: {
      type: Boolean,
      default: false
    },
    types: {
      type: Array,
      default: () => types
    },
    activeType: {
      type: String,
      default: 'pop'
    }
  },
  data() {
    return {
      gridShown: false
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
    /**
     * 显示与隐藏网格
     */
    toggleGrid() {
      this.gridShown = !this.gridShown;
      this.$refs['value-range'].resetRange();
      this.$emit('heatGridToggle:grid', this.gridShown);
    },
    hanleClickType(type) {
      this.$refs['value-range'].resetRange();
      this.$emit('heatGridUpdate:activeType', type);
    },
    selectRange(args) {
      this.$emit('heatGridSelect:range', args);
    }
  }
};
</script>
<style lang="scss">
.heat-grid-control {
  z-index: 2000;
  position: absolute;
  bottom: 50px;
  left: 20px;
  .type {
    margin-bottom: 20px;
    .el-button {
      border: 0;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.32);
      border-radius: 4px;
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

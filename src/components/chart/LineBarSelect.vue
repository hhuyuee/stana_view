<template lang="pug">
  div.line-bar-select
    div.select-wrapper
      el-select(v-model="selectedType" @change="handleSelectChange" size="mini")
        el-option(
          v-for="item in allTypes"
          :key="item"
          :label="item"
          :value="item")
    line-bar(v-bind="$attrs" v-on="$listeners" :options="options")
</template>
<script>
import { chartOption } from '@/util';
import LineBar from './LineBar';

export default {
  name: 'line-bar-select',
  components: {
    LineBar
  },
  props: {
    allTypeCharts: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return { selectedType: '', options: {} };
  },
  computed: {
    allTypes() {
      return this.allTypeCharts.map(cf => cf.big);
    }
  },
  watch: {
    allTypes: {
      handler(val) {
        if (Array.isArray(val) && val.length > 0) {
          // eslint-disable-next-line prefer-destructuring
          this.selectedType = val[0];
          this.handleSelectChange(this.selectedType);
        }
      },
      deep: true
    }
  },
  methods: {
    handleSelectChange(selected) {
      const { children } =
        this.allTypeCharts.find(c => c.big === selected) || {};
      if (!children[0]) return;
      const demision = Array(children[0].length).fill('');
      this.options = chartOption({
        ...this.$attrs,
        data: children,
        demision
      });
    }
  }
};
</script>
<style lang="scss">
.line-bar-select {
  .select-wrapper {
    display: flex;
    justify-content: flex-end;
    z-index: 2100;
    position: relative;
    top: 24px;
    .el-select {
      width: 20%;
      height: 24px;
    }
  }
}
</style>

<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts';
import { addListener, removeListener } from 'resize-detector';
import debounce from 'lodash/debounce';
import merge from 'lodash/merge';
import echartsTheme from '@/config/echartsTheme.json';

const globalOptions = {
  backgroundColor: 'transparent'
};
export default {
  name: 'Chart',
  data() {
    return {
      chart: null
    };
  },
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    autoresize: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.init();
    this.$watch(
      'options',
      (val) => {
        this.chart.clear();
        this.chart.setOption(merge({}, globalOptions, val));
      },
      { deep: true }
    );
    if (this.autoresize) {
      this.resizeHandler = debounce(() => {
        this.chart.resize();
      });
      addListener(this.$el, this.resizeHandler);
    }
  },
  destroyed() {
    this.chart = null;
    if (this.autoresize) {
      removeListener(this.$el, this.resizeHandler);
    }
  },
  methods: {
    init() {
      const chart = echarts.init(this.$el, echartsTheme);
      chart.setOption(merge({}, globalOptions, this.options));
      this.chart = chart;
      Object.keys(this.$listeners).forEach((event) => {
        const handler = this.$listeners[event];
        if (event.indexOf('zr:') === 0) {
          this.chart.getZr().on(event.slice(3), handler);
        } else {
          this.chart.on(event, handler);
        }
      });
      this.$emit('load', chart);
    }
  }
};
</script>

<style>
.chart {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  /* border: px solid rgba(0, 6, 32, 0.08); */
}
</style>

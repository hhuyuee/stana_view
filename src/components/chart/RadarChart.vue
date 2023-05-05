<template>
  <div class="radar-chart">
    <!-- 透传绑定事件 -->
    <chart :options="localOptions" v-on="$listeners" />
  </div>
</template>

<script>
import 'echarts/lib/chart/radar';
import merge from 'lodash/merge';
import Chart from './Chart';

const defaultBaseOptions = {
  backgroundColor: 'transparent',
  radar: {
    silent: true,
    radius: '60%',
    name: {
      textStyle: {
        color: '#fff',
        borderRadius: 3
      }
    },
    splitNumber: 4,
    indicator: [
      { name: '人口', max: 100 },
      { name: '消费', max: 100 },
      { name: '业态', max: 100 },
      { name: '交通', max: 100 }
    ],
    axisLine: {
      show: false
    },
    splitArea: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: '#fff',
        opacity: 0.8
      }
    }
  },
  series: [
    {
      // name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      // label: {
      //   backgroundColor: 'red'
      // },
      symbol: 'none',
      areaStyle: {
        color: '#FFCB1F'
      },
      lineStyle: {
        color: 'transparent'
      },
      data: [
        {
          value: [0, 0, 0, 0]
          // value: [4300, 10000, 28000, 35000, 50000, 19000]
          // label: {
          //   color: '#fff',
          //   backgroundColor: 'transparent'
          // }
          //   name: '预算分配（Allocated Budget）'
        }
      ]
    }
  ]
};
export default {
  name: 'RadarChart',
  components: {
    Chart
  },
  data() {
    return {
      localOptions: defaultBaseOptions
    };
  },
  props: {
    options: {
      type: Object,
      default: () => defaultBaseOptions
    }
  },
  mounted() {
    this.$watch(
      'options',
      (val) => {
        this.localOptions = merge({}, defaultBaseOptions, val);
      },
      { deep: true }
    );
  }
};
</script>

<style lang="scss">
.radar-chart {
  height: 100%;
  width: 100%;
}
</style>

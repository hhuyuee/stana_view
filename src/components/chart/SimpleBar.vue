<template>
  <div class="simple-chart">
    <!-- 透传绑定事件 -->
    <chart :options="localOptions" v-on="$listeners" />
  </div>
</template>

<script>
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import merge from 'lodash/merge';
import Chart from './Chart';

const defaultBaseOptions = {
  title: {
    // textAlign: 'left', // 居中不生效?
    right: '30%', // 模拟居中
    text: '',
    show: true,
    textStyle: {
      color: '#fff',
      fontSize: '14px'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    // data: [],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#fff'
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      barMaxWidth: '16',
      type: 'bar',
      itemStyle: {
        color: '#FFCB1F'
      }
    }
  ]
};
export default {
  name: 'SimpleBar',
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

<style>
.simple-chart {
  width: 140px;
  height: 90px;
}
</style>

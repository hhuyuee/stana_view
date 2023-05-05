<template>
  <!-- 透传绑定事件 -->
  <chart v-if="show" :options="localOptions" v-on="$listeners" />
</template>

<script>
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import merge from 'lodash/merge';
import Chart from './Chart';

const defaultBaseOptions = {
  backgroundColor: '#fff',
  title: {
    textAlign: 'left',
    text: '',
    show: true,
    textStyle: {
      color: 'rgba(0,6,32,0.65)',
      fontWeight: '500',
      fontFamily: 'NotoSansSC',
      lineHeight: 30
    },
    top: 0
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    // data: []
    axisLabel: {
      interval: 0, // 坐标轴刻度标签的显示间隔(在类目轴中有效) 0:显示所有  1：隔一个显示一个 :3：隔三个显示一个...
      rotate: -40
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  }
};
const fullModeOptions = {
  grid: {
    left: '10%',
    top: 60,
    bottom: 60
  },
  title: {
    textStyle: {
      fontSize: 20
    }
  }
};
const sideModeOptions = {
  grid: {
    left: '15%',
    top: 50,
    bottom: 30
  },
  title: {
    textStyle: {
      fontSize: 12
    }
  }
};
export default {
  name: 'LineBar',
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
    },
    mode: {
      type: String,
      default: 'side' // 一共有side和full两种模式
    }
  },
  computed: {
    show() {
      return (
        this.options &&
        this.options.dataset &&
        this.options.dataset.source &&
        this.options.dataset.source.length > 1
      );
    }
  },
  watch: {
    mode(val) {
      if (val === 'full') {
        this.localOptions = merge(this.localOptions, fullModeOptions);
      } else {
        this.localOptions = merge(this.localOptions, sideModeOptions);
      }
    }
  },
  mounted() {
    this.$watch(
      'options',
      (val) => {
        this.localOptions = merge(
          {},
          defaultBaseOptions,
          this.mode === 'full' ? fullModeOptions : sideModeOptions,
          val
        );
      },
      { deep: true }
    );
  }
};
</script>

<style>
</style>

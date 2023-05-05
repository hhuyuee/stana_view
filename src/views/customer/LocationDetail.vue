// 地点详细信息 -> 对话框
<template>
  <div class="locationdiag">
    <!-- :modal-append-to-body=false 父元素遮罩 -->
    <el-dialog title="此地点详细信息"
              style="height:800px; "
               :visible="dialogVisible"
               :before-close="cancelDialog"
               :modal-append-to-body=false
               :lock-scroll=false
               :fullscreen=false
               center>
      <el-card class="box-card" style="width:900px; margin:0 auto;height:430px;">
       <el-scrollbar style="height:100%">
          <!-- 单个地点信息显示 -->
          <div class="content">
            <div class="loc">
              <p class="info">地理位置</p>
              <p>经度: {{dialogInfo.lng}}</p>
              <p>纬度: {{dialogInfo.lat}}</p>
            </div>

            <div class="visit">
              <p class="info">访问情况</p>
              <p>总访问次数: {{dialogInfo.visitSum}}次</p>
              <p>访问对象个数: {{dialogInfo.visitObj}}个</p>
              <p>平均访问时长: {{dialogInfo.durationAvg}}分钟</p>
              <p>平均访问频次: {{dialogInfo.freqMean.toFixed(2)}}次/天</p>
              <p>最常访问时间段: {{dialogInfo.timeSegment}}</p>
            </div>

            <div class="road">
              <p class="info">周围路网情况</p>
              <p>1级道路长度: {{dialogInfo.road1len}}米</p>
              <p>2级道路长度: {{dialogInfo.road2len}}米</p>
              <p>3级道路长度: {{dialogInfo.road3len}}米</p>
              <p>交叉路口数目: {{dialogInfo.intersection}}个</p>
            </div>

            <div id="charts">
              <!-- <p class="info">相关分布</p> -->
              <el-row :gutter="16">
                <el-col v-for="(item, index) in allCharts"
                        :key="index">
                  <line-bar-chart :options="item.options" />
                </el-col>
              </el-row>
            </div>
          </div>
         </el-scrollbar>
      </el-card>  
    </el-dialog>
  </div>

</template>

<script>
// components中表格

import Vue from 'vue';
import { Message } from 'element-ui';
import LineBarChart from '@/components/chart/LineBar';
import { color as themeColor } from '@/config/echartsTheme.json';
import { chartOption, formatAllChartsOption } from '@/util';
// import echarts from 'echarts'

const allChartsConfig = [
  {
    title: '访问时间分布(周)',
    inputKey: 'weekDistribute',
    type: 'bar',
    fullSpan: 12,
    sideSpan: 24
  },
  {
    title: '访问时间分布(日)',
    inputKey: 'timeDistribute',
    type: 'bar',
    fullSpan: 12,
    sideSpan: 24
  },
  {
    title: '周围50米POI分布',
    inputKey: 'poiDistribute',
    type: 'bar',
    fullSpan: 12,
    sideSpan: 24
  },
  {
    title: '访问时长分布(单位：分钟)',
    inputKey: 'durationDistribute',
    type: 'bar',
    fullSpan: 12,
    sideSpan: 24
  },
   {
    title: '访问频次分布(单位:天/次)',
    inputKey: 'freqDistribute',
    type: 'bar',
    fullSpan: 12,
    sideSpan: 24
  }
];

const formatData = v => Number(v * 100).toFixed(0);

const seriesFormat = v => `${Number(v).toFixed(0)}%`;

export default {
  // 引入子组件
  components: {
    LineBarChart
  },
  data () {
    return {
      sidebarVisible: true,
      // dialogVisible: false,
      // dialogInfo: "",
      loading: false,
      // 渲染的表格数据
      allCharts: Array(allChartsConfig.length).fill(chartOption(seriesFormat)), // 初始状态的双向绑定
    };
  },
  //从父组件的传值
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    dialogInfo: {
      type: Object,
      default: {}
    },

  },
  watch: {
    //监听弹窗显示， 可以用来写请求接口
    dialogVisible: function (newVal, oldVal) {
      console.log(23)
      if (newVal) {
        console.log(this.allCharts);
        console.log(1)
        console.log(newVal);
        // 显示表格
        console.log(this._props.dialogInfo.chartData);
        this.$nextTick().then(()=> {
          this.allCharts = formatAllChartsOption({
            chartsConfig: allChartsConfig,
            allRes: [this._props.dialogInfo.chartData],
            formatData,
            seriesFormat
          });
          console.log(this.allCharts);
        });
      
      } 
      // this.dialogVisible = false;
    }
  },
  mounted () {
    let _this = this;
    console.log(this._props.dialogInfo.chartData)
    // this.allCharts = formatAllChartsOption({
    //   chartsConfig: allChartsConfig,
    //   allRes: [this._props.dialogInfo.chartData],
    //   formatData,
    //   seriesFormat
    // });
    // console.log(this.allCharts)
    console.log(2)
  },
  methods: {
    //修改父组件传过来的值
    cancelDialog () {
      this.$emit("update:dialogVisible");
    }
  },
  name: "locationDetail"
}
</script>

<style lang="scss">
.el-dialog {
  height: 550px;
  // width:calc(80%);
  width:1100px;
  .el-card__body{
    height:500px;
  }
  .charts.el-col {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .info {
    font-size: 18px;
    font-weight: bold;
  }
  .loc {
    height: 90px;
    width: 400px;
  }
  .visit {
    height: 150px;
    width: 400px;
    position: relative;
    top: -90px;
    left: 600px;
  }
  .road {
    height: 130px;
    width: 400px;
    position: relative;
    top: -240px;
    left: 300px;
  }
  .chart {
    position: relative;
    top: -240px;
    left: 0px;
  }
  .el-scrollbar__wrap {
    overflow-x: auto;
  }
}
</style>
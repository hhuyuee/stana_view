<template>
  <div class="custom-feature"
       v-loading="loading">
    <tool-bar-map class="tool-bar-map"
                  @active="setActive"
                  @receive="handleMe"
                  @load="mapLoad" />
    <side-bar :visible="sidebarVisible">
      <template v-slot="{ isFullScreen }">

        <div :class="{ 'full-screen': isFullScreen }">
          <h3>地点信息：</h3>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;当前地点个数：{{ placeNum}} 个</span>

          <h3>地点列表：</h3>
          <div>
            <el-table :data="tableData"
                      height="300"
                      border
                      style="width: 100%">
              <el-table-column prop="id"
                               label="地点编号"
                               type="index"
                               width="80"
                               fixed>
              </el-table-column>
              <el-table-column prop="name"
                               label="地点名称"
                               width="180">
              </el-table-column>
              <el-table-column prop="visitSum"
                               label="总访问数(次)"
                               sortable
                               width="130">
              </el-table-column>
              <el-table-column prop="freqMean"
                               label="平均访问频次(次/天)"
                               sortable
                               width="180">
                <!-- 保留两位小数 -->
                <template slot-scope="scope"
                          v-if="!isNaN(scope.row.freqMean)">
                  {{scope.row.freqMean.toFixed(2) }}
                </template>
              </el-table-column>
              <el-table-column prop="visitObj"
                               label="访问对象个数(个)"
                               sortable
                               width="160">
              </el-table-column>
              <el-table-column prop="durationAvg"
                               label="平均访问时长(分钟)"
                               sortable
                               width="180">
              </el-table-column>
              <el-table-column prop="timeSegment"
                               label="最常访问时间段"
                               width="120">
              </el-table-column>
              <el-table-column prop="intersection"
                               label="交叉路口个数(个)"
                               sortable
                               width="160">
              </el-table-column>
              <el-table-column prop="road1len"
                               label="1级道路长度(米)"
                               sortable
                               width="150">
              </el-table-column>
              <el-table-column prop="road2len"
                               label="2级路网长度(米)"
                               sortable
                               width="160">
              </el-table-column>
              <el-table-column prop="road3len"
                               label="3级路网长度(米)"
                               sortable
                               width="150">
              </el-table-column>
              <el-table-column label="操作"
                               fixed="right">
                <template slot-scope="scope">
                  <el-button size="mini"
                             @click="viewDetail(scope.$index, scope.row)">显示地点</el-button>
                </template>
              </el-table-column>
            </el-table>

          </div>
          <hr>
          <h3>地点统计：</h3>
          <el-row :gutter="16">
            <el-col v-for="(item, index) in allCharts"
                    :key="index"
                    :span="isFullScreen ? item.fullSpan : item.sideSpan">
              <line-bar-chart :options="item.options"
                              :mode="isFullScreen ? 'full' : 'side'" />
            </el-col>
          </el-row>
          <!-- 父组件绑定的两个值 -->
          <location-detail :dialogVisible="dialogVisible"
                           :dialogInfo="dialogInfo"
                           @update:dialogVisible="dialogVisibles"></location-detail>
        </div>
      </template>
    </side-bar>
  </div>
</template>

<script>
// 人口特征
import L from 'leaflet';
import gcoord from 'gcoord';
import Vue from 'vue';
import { Message } from 'element-ui';
import ToolBarMap from '@/components/toolBarMap';
import * as api from '@/api/customer';
import SideBar from '@/components/SideBar';
import LineBarChart from '@/components/chart/LineBar';
import Collection from '@/components/Collection';
import LegendItem from '@/components/legend/LegendItem';
import activeTypeMixin from '@/mixin/activeType';
import { bd2wgs, wgs2bd, gcj2bd, gcj2wgs, last } from '@/util';
import mapMixin from '@/mixin/map';
import { color as themeColor } from '@/config/echartsTheme.json';
import { chartOption, formatAllChartsOption } from '@/util';
// 导入位置详细信息对话框
//例如：import 《组件名称》 from '《组件路径》';
import LocationDetail from './LocationDetail'
import parse from 'wellknown' //$ npm install -g wellknown
const allChartsConfig = [
  {
    title: '访问次数分布(单位：次)',
    inputKey: 'visitSumDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24
  },
  {
    title: '平均访问频次分布(单位：次/天)',
    inputKey: 'freqMeanDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24
  },
  {
    title: '平均访问时长分布(单位：分钟)',
    inputKey: 'durationAvgDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24
  },
  {
    title: '访问对象个数分布(单位：个)',
    inputKey: 'visitObjStatDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24
  },
  {
    title: '访问时间分布（日）',
    inputKey: 'timeSegDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24
  },
  {
    title: '周围50米POI分布',
    inputKey: 'poiTypeDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24
  },
  {
    title: '周围100米交叉路口分布(单位：个)',
    inputKey: 'intersectDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24
  },
  {
    title: '周围200米1级道路长度分布(单位：米)',
    inputKey: 'road1lenDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24
  },
  {
    title: '周围200米2级道路长度分布(单位：米)',
    inputKey: 'road2lenDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24
  },
  {
    title: '周围200米3级道路长度分布(单位：米)',
    inputKey: 'road3lenDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24
  }
];
const formatData = v => Number(v * 100).toFixed(0);

const seriesFormat = v => `${Number(v).toFixed(0)}%`;

export default {
  name: 'Feature',
  mixins: [activeTypeMixin],
  // 引入子组件
  components: {
    ToolBarMap,
    SideBar,
    LineBarChart,
    Collection,
    LegendItem,
    LocationDetail
  },
  data () {
    return {
      sidebarVisible: true,
      loading: false,
      allCharts: Array(allChartsConfig.length).fill(chartOption(seriesFormat)), // 初始状态的双向绑定
      comparedAreas: [], // 用于对比的地块
      legends: [],
      placeNum: 0,
      currentPage: 1, //初始页
      pagesize: 5,    //    每页的数据　
      tableData: [],// 表格数据
      //控制弹窗 显示
      dialogVisible: false,
      //点击查看按钮  这条数据详细信息
      dialogInfo: {},
      eps: 10,//填写的距离
      minpts: 1000,//填写的最少点数
      res: {},
      str_con: '',
      conditionList: [],
      place_obj: {},
      placelist: [],
      layers: [], // 驻留点marker
      points: []
    };
  },
  props: {

  },
  mounted () {

  },
  methods: {
    dofilter (position, condition) {
      if (condition.length === 0) {
        return position;
      } else {
        for (let con of condition) {
          position = position.filter(function (item) {
            if (con.type === '总访问数') {
              return item.visitSum >= con.low && item.visitSum < con.high;
            }
            else if (con.type === '平均访问频次') {
              return item.freqMean >= con.low && item.freqMean < con.high;
            }
            else if (con.type === '访问对象个数') {
              return item.visitObj >= con.low && item.visitObj < con.high;
            }
            else if (con.type === '平均访问时长') {
              return item.durationAvg >= con.low && item.durationAvg < con.high;
            }
          });
        }
        return position;
      }
    },
    async handleMe (item1, item2) {
      // if(this.str_con===item2)//条件是否已有
      // {
      //     console.log('一样');
      //      alert('两次筛选的条件相同');
      // }
      if (item2.length === 0) {
        this.tableData = [];
        this.res = this.$route.params.result;
        this.getData();
        // console.log(1);
      }
      else {
        this.conditionList = item1;
        this.str_con = item2;
        console.log(this.conditionList);
        console.log(this.str_con);
        this.res = this.$route.params.result;
        this.points = this.dofilter(this.res.candidatePlaceVos, this.conditionList);
        this.res = await api.placeInfo(this.points);
        // console.log(this.res);
        this.getData();
      }
    },

    mapLoad (map) {
      console.log('map', map);
      this.map = map;
      this.res = this.$route.params.result;
      this.getData();
    },
    // 在地图和表格中显示数据 
    async getData () {
      this.tableData = [];
      this.points = [];
      this.loading = true;
      this.layers.forEach((layer) =>
        this.map.removeLayer(layer)
      );
      this.layers = [];
      // 获取地点的信息 res
      // const res = await api.location(data);
      this.placeNum = this.res.placeNum;
      this.res.candidatePlaceVos.forEach((element, index) => {
        this.points[index] = element;
      })
      this.points.forEach((currentValue) => {
        if (!currentValue.concaveHull) {
          return;
        }
        const feature = parse(currentValue.concaveHull);
        const latlngs = feature.coordinates[0].map(i => i.reverse());
        // console.log(feature);
        // 将polygon 渲染到地图上
        // console.log(latlngs);
        var marker = L.marker([currentValue.lat, currentValue.lng]);
        var polygon = L.polygon(latlngs, { color: '#1296db' });
        // 给polygon添加绑定事件 => 弹出弹框
        polygon.addEventListener('click', () => {
          console.log(currentValue)
          this.dialogVisible = true;
          this.dialogInfo = currentValue;
        });


        //          polygon.addEventListener('mouseover', function (e) {
        //           console.log(e)
        //           polygon.bindPopup('点击此区域可查看详细信息').openPopup(this.map);
        //         });
        marker.addEventListener('click', () => {
          // console.log(currentValue)
          this.dialogVisible = true;
          this.dialogInfo = currentValue;
        });
        marker.addTo(this.map);
        polygon.addTo(this.map);
        this.layers.push(marker);
        this.layers.push(polygon);
        this.tableData.push(
          currentValue
        );

      });

      if (!this.res) {
        Vue.$log.warn('response data: %s is falsy', this.res);
        Message.info('无数据');
        this.loading = false;
        return;
        // return; // TODO: 后台返回的数据格式不对, 嵌套不正确,如何处理
      }
      this.allCharts = formatAllChartsOption({
        chartsConfig: allChartsConfig,
        allRes: [this.res.chartData],
        formatData,
        seriesFormat
      });
      // console.log(this.allCharts)
      this.sidebarVisible = true;
      this.loading = false;
    },
    // 显示地点详情页
    viewDetail (index, row) {
      // 显示详细信息
      console.log(index, row);
      // 显示父组件传给子组件的值
      this.dialogVisible = false;
      // 显示行信息
      // if(isNaN(row.freqMean)) {
      //   console.log('空');
      //   console.log(row);
      //   row.freqMean=9999;
      //   }
      this.dialogInfo = row;
      // var centerLat = row.lat;
      // var centerLag = row.lng;
      console.log("纬度" + row.lat);
      this.map.flyTo([row.lat, row.lng], 18);
      console.log("地图跳转");
      // this.map.flyTo([36.52, 120.31]);


    },
    //子组件传 过来的 数据
    dialogVisibles () {
      this.dialogVisible = false;
    },
    // 分页
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize);  //每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage);  //点击第几页
    }

  }
};
</script>

<style lang="scss">
.custom-feature {
  .tool-bar-map {
    // height: 100%;
    width: 100%;
  }
  .side-bar {
    // 靠右
    right: 0px;
    .chart {
      height: 166px;
      width: 100%;
    }
    .full-screen .chart {
      height: 260px;
    }
    .el-col {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .legend {
      margin: 10px 0;
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>

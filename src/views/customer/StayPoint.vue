<template>
  <div class="custom-feature"
       v-loading="loading">
    <tool-bar-map class="tool-bar-map"
                  @active="setActive"
                  @load="mapLoad"
                  @receive="handleMe"
                  @receivelocMode1="handlocMode1"
                  @receivelocMode2="handlocMode2" />
    <side-bar :visible="sidebarVisible">
      <template v-slot="{ isFullScreen }">
        <div :class="{ 'full-screen': isFullScreen }">
          <h3>驻留点信息：</h3>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;当前驻留点个数：{{ visitNum }}个</span>
          <hr>
          <h3>驻留点预处理：</h3>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;数据选择：</span>
          <el-select v-model="value"
                     size="small"
                     style="width:40%;"
                     @change="datachange">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;数据时间范围：{{ startTime }}~{{ endTime }}</span>
          <br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;驻留点定义：</span>
          <br>
          <!-- <div v-if="this.value1==='行人轨迹'"> -->
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;停留时长 > 15分钟</span>
          <br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;停留范围 {{juli}}米</span>
          <hr>
          <!-- </div> -->
          <h3>驻留点统计：</h3>
          <!-- <span>Top10驻留POI</span> -->
          <!-- <el-tooltip placement="top">
                          <i class="el-icon-question"></i>
                          <div slot="content">本排名存在并列的情况</div>
                        </el-tooltip> -->
          <!-- <el-select v-model="choosepoi"
                     size="small"
                     style="width:40%; float:right;"
                     @change="poiChange">
            <el-option v-for="item in poiTypetop10"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select> -->
          <!-- <template>
            <el-table :data="tableData"
                      height="300"
                      border
                      style="width: 100%; margin-top:20px;">
              <el-table-column fixed
                               type="index"
                               min-width="5%">
              </el-table-column>
              <el-table-column prop="poiName"
                               label="POI名称"
                               min-width="45%">
              </el-table-column>
              <el-table-column prop="count"
                               label="访问次数"
                               min-width="23%">
              </el-table-column>
              <el-table-column label="操作"
                               min-width="27%">
                <template slot-scope="scope">
                  <el-button @click="viewDetail(scope.$index, scope.row)"
                             size="small">显示地点</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template> -->
          <el-row>
            <span>分布：</span>
          </el-row>

          <el-row :gutter="16">

            <el-col v-for="(item, index) in allCharts"
                    :key="index"
                    :span="isFullScreen ? item.fullSpan : item.sideSpan">
              <line-bar-chart :options="item.options"
                              :mode="isFullScreen ? 'full' : 'side'" />
            </el-col>
          </el-row>
        </div>
      </template>
    </side-bar>
  </div>
</template>

<script>
// 人口特征
import L, { marker } from 'leaflet'
import { mapMutations, mapState, mapActions } from 'vuex';
import gcoord from 'gcoord'
import Vue from 'vue'
import { Message } from 'element-ui'
import ToolBarMap from '@/components/toolBarMap'
import * as api from '@/api/customer'
import SideBar from '@/components/SideBar'
import LineBarChart from '@/components/chart/LineBar'
import Collection from '@/components/Collection'
import LegendItem from '@/components/legend/LegendItem'
import activeTypeMixin from '@/mixin/activeType'
import { bd2wgs, wgs2bd, gcj2bd, gcj2wgs, last } from '@/util'
import mapMixin from '@/mixin/map'
import { color as themeColor } from '@/config/echartsTheme.json'
import { chartOption, formatAllChartsOption } from '@/util'
import { data as res_fir } from '@/assets/geolife.json'
import { data as res_driverfir } from '@/assets/tdriver.json'
import { data as res_hctfir } from '@/assets/hct.json'


const allChartsConfig = [
  {
    title: '访问时长分布(单位：分钟)',
    inputKey: 'durationDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24,
  },
  {
    title: '访问星期分布',
    inputKey: 'weekdayDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24,
  },
  {
    title: '访问时间段分布',
    inputKey: 'timeDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24,
  },
  {
    title: '周围100米交叉路口分布(单位：个)',
    inputKey: 'intersectDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24,
  },
  {
    title: '周围50米POI分布',
    inputKey: 'poiDistribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24,
  },
  {
    title: '周围200米1级路网分布(单位：米)',
    inputKey: 'road1Distribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24,
  },
  {
    title: '周围200米2级路网分布(单位：米)',
    inputKey: 'road2Distribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24,
  },
  {
    title: '周围200米3级路网分布(单位：米)',
    inputKey: 'road3Distribute',
    type: 'bar',
    fullSpan: 11,
    sideSpan: 24,
  },
]
const formatData = (v) => Number(v * 100).toFixed(0)

const seriesFormat = (v) => `${Number(v).toFixed(0)}%`

export default {
  name: 'Feature',
  mixins: [activeTypeMixin],
  components: {
    ToolBarMap,
    SideBar,
    LineBarChart,
    Collection,
    LegendItem,
  },

  data () {
    return {
      sidebarVisible: true,
      juli: '< 100',
      choosepoi: '宾馆酒店',
      poiTypetop10: [{
        value: '宾馆酒店',
        label: '宾馆酒店'
      }, {
        value: '餐厅',
        label: '餐厅'
      }, {
        value: '超市商场',
        label: '超市商场'
      }, {
        value: '风景区',
        label: '风景区'
      }, {
        value: '公共厕所',
        label: '公共厕所'
      }, {
        value: '加油站',
        label: '加油站'
      }, {
        value: '停车场',
        label: '停车场'
      }, {
        value: '学校',
        label: '学校'
      }, {
        value: '医院',
        label: '医院'
      }, {
        value: '银行',
        label: '银行'
      }, {
        value: '邮局物流',
        label: '邮局物流'
      }, {
        value: '运动场馆',
        label: '运动场馆'
      }, {
        value: '住宅区',
        label: '住宅区'
      }, {
        value: '公园广场',
        label: '公园广场'
      }, {
        value: '地铁站',
        label: '地铁站'
      }, {
        value: '车辆管理',
        label: '车辆管理'
      }],
      tableData: [],
      loading: true,
      allCharts: Array(allChartsConfig.length).fill(chartOption(seriesFormat)), // 初始状态的双向绑定
      comparedAreas: [], // 用于对比的地块
      legends: [],
      tableName: 'geolife_15_100',
      // tableName: 'tdrive_15_100',
      stayPointVos: [],
      visitNum: 0,
      startTime: '',
      endTime: '',
      arr: [],
      conditionList: [],
      obj: {},
      obj1: {},
      obj2: {},
      obj3: {},
      // result: {},
      str_con: '12312',
      stayPoints: [],
      st: 0,
      eps: 100, //填写的距离
      minpts: 10, //填写的最少点数
      mode: "", // 地点模式
      type: "", // 地点类型
      layers: [], // 驻留点marker
      options: [{
        value: 'Geolife轨迹',
        label: 'Geolife轨迹'
      }, {
        value: 'T-drive轨迹',
        label: 'T-drive轨迹'
      }, {
        value: '南通危化品车辆轨迹',
        label: '南通危化品车辆轨迹'
      }],
      value: '',
      hotelList: [],
      restList: [],
      marketList: [],
      travelList: [],
      toiletList: [],
      gasList: [],
      parkList: [],
      schoolList: [],
      hospList: [],
      bankList: [],
      postList: [],
      gymList: [],
      residentList: [],
      squareList: [],
      railwayList: [],
      carList: [],
      marker: {}
    }
  },
  props: {

  },
  mounted () {
    this.value = this.value1;
  },
  computed: {
    ...mapState(['result', 'value1']),
  },
  methods: {
    ...mapMutations({
      setResult: 'SET_RESULT',
      setValue: 'SET_VALUE'
    }),
    poiChange () {
      this.tableData = [];
      switch (this.choosepoi) {
        case '宾馆酒店':
          this.tableData = this.hotelList;
          break;
        case '餐厅':
          this.tableData = this.restList;
          break;
        case '超市商场':
          this.tableData = this.marketList;
          break;
        case '风景区':
          this.tableData = this.travelList;
          break;
        case '公共厕所':
          this.tableData = this.toiletList;
          break;
        case '加油站':
          this.tableData = this.gasList;
          break;
        case '停车场':
          this.tableData = this.parkList;
          break;
        case '学校':
          this.tableData = this.schoolList;
          break;
        case '医院':
          this.tableData = this.hospList;
          break;
        case '银行':
          this.tableData = this.bankList;
          break;
        case '邮局物流':
          this.tableData = this.postList;
          break;
        case '运动场馆':
          this.tableData = this.gymList;
          break;
        case '住宅区':
          this.tableData = this.residentList;
          break;
        case '公园广场':
          this.tableData = this.squareList;
          break;
        case '地铁站':
          this.tableData = this.railwayList;
          break;
        case '车辆管理':
          this.tableData = this.carList;
          break;
        default:
          break;
      }
    },
    // 显示地点详情页
    viewDetail (index, row) {
      this.map.removeLayer(this.marker);
      // 显示详细信息
      console.log(index, row);
      console.log("纬度" + row.lat);
      this.marker = L.marker([row.lat, row.lng]);
      this.marker.addTo(this.map);
      this.map.flyTo([row.lat, row.lng], 18);
      console.log("地图跳转");
      // this.map.flyTo([36.52, 120.31]);


    },
    datachange () {
      if (this.value === 'Geolife轨迹') {
        this.show(res_fir);
        this.setResult(res_fir);
        this.juli = '< 100';

      }
      else if (this.value === 'T-drive轨迹') {
        this.show(res_driverfir);
        this.setResult(res_driverfir);
        this.juli = '< 50';
      }
      else if (this.value === '南通危化品车辆轨迹') {
        this.show(res_hctfir);
        this.setResult(res_hctfir);
        this.map.flyTo([32.016212, 120.864608])
        this.juli = '< 100';
      }
    },
    // 聚类
    async handlocMode1 (item1, item2, item3) {
      this.mode = item1
      this.minpts = item3
      this.eps = item2
      const { mode, minpts, eps, stayPoints } = this
      this.obj2 = {
        mode,
        minpts,
        eps,
        stayPoints,
      }
      console.log(mode)
      this.loading = true
      const res = await api.location(this.obj2)
      if (res.placeNum === 0) {
        alert('当前参数下无地点生成');
        this.show(this.result);
      }
      else {
        this.$router.push({ name: 'location', params: { result: res } })
        this.setValue(this.value);
      }
    },
    // 
    async handlocMode2 (item1, item2) {
      this.mode = item1
      this.type = item2
      const { mode, type, stayPoints } = this
      this.obj2 = {
        mode,
        type,
        stayPoints,
      }

      this.loading = true
      const res = await api.location(this.obj2)
      if (res.placeNum === 0) {
        alert('当前参数下无地点生成');
        this.show(this.result);
      }
      else {
        this.$router.push({ name: 'location', params: { result: res } })
        this.setValue(this.value);
      }
    },
    transTotable (arr) {
      this.hotelList = [];
      this.restList = [];
      this.marketList = [];
      this.travelList = [];
      this.toiletList = [];
      this.gasList = [];
      this.parkList = [];
      this.schoolList = [];
      this.hospList = [];
      this.bankList = [];
      this.postList = [];
      this.gymList = [];
      this.residentList = [];
      this.squareList = [];
      this.railwayList = [];
      this.carList = [];
      arr.forEach((element, index) => {
        if (element.poiType === '宾馆酒店') {
          this.hotelList = element.poiInfos;
        } else if (element.poiType === '餐厅') {
          this.restList = element.poiInfos;
        } else if (element.poiType === '超市商场') {
          this.marketList = element.poiInfos;
        } else if (element.poiType === '风景区') {
          this.travelList = element.poiInfos;
        } else if (element.poiType === '公共厕所') {
          this.toiletList = element.poiInfos;
        } else if (element.poiType === '加油站') {
          this.gasList = element.poiInfos;
        } else if (element.poiType === '停车场') {
          this.parkList = element.poiInfos;
        } else if (element.poiType === '学校') {
          this.schoolList = element.poiInfos;
        } else if (element.poiType === '医院') {
          this.hospList = element.poiInfos;
        } else if (element.poiType === '银行') {
          this.bankList = element.poiInfos;
        } else if (element.poiType === '邮局物流') {
          this.postList = element.poiInfos;
        } else if (element.poiType === '运动场馆') {
          this.gymList = element.poiInfos;
        } else if (element.poiType === '住宅区') {
          this.residentList = element.poiInfos;
        } else if (element.poiType === '公园广场') {
          this.squareList = element.poiInfos;
        } else if (element.poiType === '地铁站') {
          this.railwayList = element.poiInfos;
        } else if (element.poiType === '车辆管理') {
          this.carList = element.poiInfos;
        }
      })
      // console.log(this.hotelList);
      // console.log(this.restList);
      // console.log(this.marketList);
      // console.log(this.travelList);
      // console.log(this.toiletList);
      // console.log(this.gasList);
      // console.log(this.parkList);
      // console.log(this.schoolList);
      // console.log(this.hospList);
      // console.log(this.bankList);
      // console.log(this.postList);
      // console.log(this.gymList);
      // console.log(this.residentList);
    },
    //随机采样 
    getRandomSubarray (arr, size) {
      var shuffled = arr.slice(0),
        i = arr.length,
        temp,
        index
      while (i--) {
        index = Math.floor((i + 1) * Math.random())
        temp = shuffled[index]
        shuffled[index] = shuffled[i]
        shuffled[i] = temp
      }
      return shuffled.slice(0, size)
    },


    async handleMe (item1, item2) {
      this.loading = true
      // if (this.str_con === item2) {
      //   alert('两次筛选的条件相同');
      //   this.loading = false
      // } 
      if (item2.length === 0) {
        if (this.value === '轨迹') {
          this.show(res_fir);
          this.setResult(res_fir);
        }
        else if (this.value === '北京市出租车轨迹') {
          this.show(res_driverfir);
          this.setResult(res_driverfir);
        }
        // console.log(1);
      }
      else {
        this.conditionList = item1
        this.str_con = item2
        this.layers.forEach((layer) =>
          this.map.removeLayer(layer)
        );
        this.layers = [];
        if (this.value === 'Geolife轨迹') this.tableName = 'geolife_15_100';
        else if (this.value === 'T-drive轨迹') this.tableName = 'tdrive_15_50';
        else if (this.value === '南通危化品车辆轨迹') this.tableName = 'nantong_sp_an';
        const { conditionList, tableName } = this
        this.obj = {
          conditionList,
          tableName,
        }
        this.setValue(this.value);
        this.getData(this.obj)
      }
    },
    mapLoad (map) {
      this.map = map
      // this.st=this.$route.params.st;
      // if(Object.keys(this.$route.params).length === 0)
      // {
      if (this.$route.params.st === 1) {
        this.loading = true;
        console.log(this.result)
        this.show(this.result)
        return;
      }
      if (this.value1 === '行人轨迹') {
        this.show(res_fir);
        this.setResult(res_fir);
        console.log('走走走')
      } else if (this.value1 === '北京市出租车轨迹') {
        this.show(res_driverfir);
        this.setResult(res_driverfir);
        console.log('走走走123')
      }
    },

    async show (res) {
      this.layers.forEach((layer) =>
        this.map.removeLayer(layer)
      );
      // this.map.flyTo([39.9, 116.5], 12);
      this.map.removeLayer(this.marker);
      this.layers = [];
      this.visitNum = res.visitNum
      this.startTime = res.startTime.substring(0, 11)
      this.endTime = res.endTime.substring(0, 11)
      this.stayPoints = res.stayPointVos
      this.transTotable(res.poiNameTop);
      this.tableData = this.hotelList;
      this.choosepoi = '宾馆酒店'
      if (res.visitNum > 500) {
        const x = this.getRandomSubarray(this.stayPoints, 500);
        console.log("随机加点");
        x.forEach((currentValue) => {
          var layer = L.circleMarker([currentValue.lat, currentValue.lng], {
            stroke: true,
            color: '#d81e06',
            weight: 1,
            opacity: 1,
            fillColor: '#d81e06',
            fillOpacity: 1,
            radius: 8,
          });
          this.map.addLayer(layer);
          layer.bindPopup(
            '<b>纬度：' +
            currentValue.lat +
            '</b></br><b>经度：' +
            currentValue.lng +
            '</b></br><b>时间：' +
            currentValue.midTime +
            '</b></br><b>停留时间：' +
            currentValue.duration.toFixed(1) +
            '分钟'
          );
          this.layers.push(layer);
        })
        this.loading = false
      } else {
        res.stayPointVos.forEach((currentValue) => {
          var layer = L.circleMarker([currentValue.lat, currentValue.lng], {
            stroke: true,
            color: '#d81e06',
            weight: 1,
            opacity: 1,
            fillColor: '#d81e06',
            fillOpacity: 1,
            radius: 8,
          });
          layer.addTo(this.map)
            .bindPopup(
              '<b>经度：' +
              currentValue.lat +
              '</b></br><b>纬度：' +
              currentValue.lng +
              '</b></br><b>时间：' +
              currentValue.midTime +
              '</b></br><b>停留时间：' +
              currentValue.duration.toFixed(1) +
              '分钟'
            );
          this.layers.push(layer);
        })
      }
      if (!res) {
        Vue.$log.warn('response data: %s is falsy', res)
        Message.info('无数据')
        this.loading = false
        return
        // return; // TODO: 后台返回的数据格式不对, 嵌套不正确,如何处理
      }
      this.allCharts = formatAllChartsOption({
        chartsConfig: allChartsConfig,
        allRes: [res.chartData],
        formatData,
        seriesFormat,
      })
      this.sidebarVisible = true
      this.loading = false
    },
    async getData (data) {
      // this.loading = true;
      console.log('data', data)
      const res = await api.staypoint(data)
      if (res === '查询结果为空') { alert('查询结果为空'); this.show(this.result); }
      else {
        this.setResult(res);
        // this.result = res
        console.log(this.result)
        this.show(this.result)
      }


    },
  },
}
</script>

<style lang="scss">
.custom-feature {
  .tool-bar-map {
    height: 100%;
    width: 100%;
  }
  .side-bar {
    .chart {
      height: 180px;
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

<template lang="pug">
  .suggest-overview
    .location
      .star-icon(@click="toggleCollect")
        uc-svg-icon(:name="localIsStar ? 'star': 'unstar'" size="24px")
      span.address.f-toe2(:title="address") {{address}}
      .score
        span 综合得分
        span.score-value {{score | integer}}
    el-divider
    .info
      .prop
        .label 属性
        .value {{attribute}}
      .walk-time
        .label 步行时间
        //- .value {{walkTime}}
        .value 10mins
      .service-area
        .label 服务区域
        .value {{Number(area).toFixed(2)}} KM^2
    el-divider
    .chart-container(v-loading="loading")
      .rader-chart-container(v-show="detailStatus==='DETAIL'")
        radar-chart(:options="radarOptions")
      .bar-chart-container(v-show="detailStatus==='OVERVIEW'")
        .simple-bar-container
          simple-bar(
            v-for="(options, index) in chartsOptions"
            :key="index"
            :options="options"
          )
      span.detail-btn(@click="toggleDetail") {{detailStatus=== 'DETAIL' ? '详情>>' : '概览>>'}}
</template>
<script>
import { Divider, Message } from 'element-ui';
import RadarChart from '@/components/chart/RadarChart';
import SimpleBar from '@/components/chart/SimpleBar';
import * as popApi from '@/api/pop';
import * as customerApi from '@/api/customer';
import * as areaApi from '@/api/area';
import * as transportApi from '@/api/transport';
import * as api from '@/api/base';
import { chartOption } from '@/util';

const indexs = [
  { title: '人口热力', api: popApi.heatMapIndex },
  { title: '客群洞察', api: customerApi.customerAnalysis },
  { title: '环境业态', api: areaApi.areaPoi },
  { title: '交通路网', api: transportApi.analysis }
];

export default {
  name: 'suggest-overview',
  components: {
    [Divider.name]: Divider,
    RadarChart,
    SimpleBar
  },
  props: {
    isStar: { type: Boolean, default: false },
    address: { default: '未知' },
    score: { type: Number, default: 0 }, // ?
    attribute: { default: '社区' },
    walkTime: { default: 0 }, // ?
    area: { type: Number, default: 0 },
    scoreDetail: { type: Array, default: () => [] },
    starId: { default: '' },
    latitude: { default: '' },
    longitude: { default: '' }
  },
  computed: {
    radarOptions() {
      const indicator = this.scoreDetail.map(sd => ({
        name: sd.name,
        max: 100
      }));
      const value = this.scoreDetail.map(sd => Math.min(sd.value, 100));
      return {
        radar: { indicator },
        series: [{ data: [{ value }] }]
      };
    },
    placeChange() {
      return this.latitude + this.longitude;
    }
  },
  watch: {
    async placeChange() {
      try {
        this.loading = true;
        this.chartsOptions = await Promise.all(indexs.map(async (item) => {
          let data = await item.api({
            areas: [[{ latitude: this.latitude, longitude: this.longitude }]]
          });
          if (!data) return {};
          if (item.title === '客群洞察') {
            data = data.onlineConsumeIndex;
          }
          if (item.title === '环境业态') {
            data = data.convenienceIndex;
          }
          if (item.title === '交通路网') {
            data = [data.convenienceIndex];
          }
          const source = data.map(d => [d.name || '', d.value || 0]);
          return {
            title: {
              text: item.title
            },
            dataset: {
              source: [['', ''], ...source]
            }
          };
        }));
        this.loading = false;
      } catch (error) {
        this.loading = false;
        Message.error(error.message);
      }
    },
    isStar(val) {
      this.localIsStar = val;
    },
    starId(val) {
      this.localStarId = val;
    }
  },
  data() {
    return {
      detailStatus: 'DETAIL',
      chartsOptions: Array(4).fill(chartOption()),
      loading: false,
      localIsStar: this.isStar,
      localStarId: this.starId
    };
  },
  filters: {
    integer(v) {
      return Number(v).toFixed(0);
    }
  },
  methods: {
    async toggleDetail() {
      this.detailStatus =
        this.detailStatus === 'DETAIL' ? 'OVERVIEW' : 'DETAIL';
    },
    // 收藏或者取消收藏区域
    async toggleCollect() {
      try {
        if (this.localIsStar) {
          await api.deleteCollect(this.localStarId);
          this.localIsStar = false;
        } else {
          await this.collectMarker();
        }
      } catch (error) {
        Message.error(error.message);
      }
    },
    async collectMarker() {
      const data = {
        name: this.address,
        type: 'select',
        polygon: [[{ latitude: this.latitude, longitude: this.longitude }]]
      };
      try {
        this.localStarId = await api.addCollect(data);
        this.localIsStar = true;
      } catch (error) {
        Message.error(error.message);
      }
    }
  }
};
</script>
<style lang="scss">
@import "variable";
.suggest-overview {
  background: linear-gradient(
    135deg,
    rgba(0, 192, 255, 0.96) 0%,
    rgba(0, 140, 255, 0.96) 100%
  );
  box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.32);
  border-radius: 4px 4px 0px 0px;
  width: 346px;
  color: $--color-white;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;

  .location,
  .info {
    display: flex;
  }
  .location {
    height: 72px;
    align-items: center;
    .star-icon {
      width: 10%;
    }
    .address {
      width: 60%;
    }
    .score {
      width: 30%;
      display: flex;
      align-items: center;
      .score-value {
        font-size: 16px;
        display: inline-block;
        height: 32px;
        width: 32px;
        background-color: rgba(#fff, 0.3);
        border-radius: 16px;
        text-align: center;
        line-height: 32px;
        vertical-align: middle;
      }
    }
  }
  .info {
    height: 74px;
    justify-content: space-between;
    align-items: center;
    .label {
      padding-bottom: 8px;
    }
  }
  .el-divider {
    background-color: rgba(#fff, 0.16);
    margin: 0;
  }
  .prop,
  .walk-time,
  .service-area {
    .label {
      font-size: 10px;
    }
    .value {
      font-size: 14px;
    }
  }
  .chart-container {
    position: relative;
    height: 172px;
    .rader-chart-container {
      // display: flex;
      height: 100%;
      // width: 100%;
      width: 250px;
      // margin: 0 auto;
    }
    .detail-btn {
      position: absolute;
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
    .simple-bar-container {
      display: flex;
      flex-wrap: wrap;
    }
    .el-loading-mask {
      background-color: transparent;
    }
  }
}
</style>

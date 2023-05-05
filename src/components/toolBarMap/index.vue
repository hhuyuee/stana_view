<template>
  <div class="map-wrapper">
    <div class="map"
         ref="lmap"></div>
    <tool-bar v-if="this.$route.path==='/customer/StayPoint'"
              ref="tool-bar"
              :map="map"
              @receiveMe="handleMe"
              @active="setActiveLayer"
              @receiveMelocMode1="handlocMode1"
              @receiveMelocMode2="handlocMode2"
              v-bind="$attrs.toolbarProps" />
    <tool-bar-location v-if="this.$route.path==='/customer/location'"
                       ref="tool-bar"
                       :map="map"
                       :datas="conditionList"
                       @receiveMecon="handleMeloccon"
                       @active="setActiveLayer"
                       v-bind="$attrs.toolbarProps" />

  </div>
</template>
<script>
import L from 'leaflet';
import Vue from 'vue';
import { mapState } from 'vuex';
import { Message } from 'element-ui';
import {
  wgs2bd,
  castObj2Arr,
  convertSvg2Uri,
  getGeojsonsByCodes
} from '@/util';
import { color as themeColors } from '@/config/echartsTheme.json';
import redSvgIcon from '@/assets/icon/svg/red1.svg';
import { defaultLeafletIconSize } from '@/config';
import mapMixin from '@/mixin/map';
import drawMixin from '@/mixin/draw';
import selectDialogMixin from '@/mixin/selectDialog';
import markerMixin from '@/mixin/marker';
import geohashGridMixin from '@/mixin/geohashGrid';
import ToolBar from './ToolBar';
import ToolBarLocation from './ToolBarLocation';
import SelectDialog from './SelectDialog';
import DrawRect from './drawCustom/DrawRect';
import DrawReach from './drawCustom/DrawReach';
import DrawFence from './drawCustom/DrawFence';
import HeatGirdControl from './HeatGridControl';
import AreaFeatureGridControl from './AreaFeatureGridControl';
import GridControl from './GridControl';

const selectedMarker = {
  latlng: [],
  address: '' // 选中的点数据
};
// 地图选中之后传出的参数
// const emitedData = {
//   areas: [
//     [
//       {
//         latitude: 23.3,
//         longitude: 116.3
//       }
//     ]
//   ],
//   countyCodes: ['string'],
//   poiIds: [0]
// };

/**
 * 带有toolbar的地图
 */
export default {
  mixins: [
    mapMixin,
    drawMixin,
    selectDialogMixin,
    markerMixin,
    geohashGridMixin
  ],
  components: {
    ToolBar,
    ToolBarLocation,
    SelectDialog,
    DrawRect,
    DrawReach,
    DrawFence,
    [HeatGirdControl.name]: HeatGirdControl,
    AreaFeatureGridControl,
    // GridControl
  },
  props: {
    /**
     * 用于对比的地块,每个元素都是一个地块(区县,特征,自定义)
     */
    comparedAreas: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      selectedMarker, // 选中的点数据
      selectedMarkerLayer: null, // 选中的点的图层
      comparedAreasLayers: null,// 对比地块图层集合
      conditionList: [],
      modeType: "",
      eps: 100,//填写的距离
      minpts: 10,//填写的最少点数
      placeType: "",
      str_con: ''
      // path:''

    };
  },
  computed: {
    ...mapState({
      cityCode: state => state.selectedCity.code
    }),
    heatGridControlListener () {
      const listener = {};
      Object.keys(this.$listeners).forEach((listenerKey) => {
        if (listenerKey.includes('heatGrid')) {
          listener[listenerKey] = this.$listeners[listenerKey];
        }
      });
      return listener;
    },
    areaFeatureGridControlListener () {
      const listener = {};
      Object.keys(this.$listeners).forEach((listenerKey) => {
        if (listenerKey.includes('areaFeatureGrid')) {
          listener[listenerKey] = this.$listeners[listenerKey];
        }
      });
      return listener;
    }
  },
  watch: {
    async cityCode (newVal) {
      try {
        await this.setMapViewByCode(newVal, true);
        this.clearMap();
        this.$refs['tool-bar'].searchInput = '';
      } catch (e) {
        Message.error(e.message);
      }
    },
    async comparedAreas (areas) {
      Vue.$log.info('comparedAreas -> areas', areas);
      if (areas.length > 0) {
        this.clearMap();
        if (this.comparedAreasLayers) {
          this.comparedAreasLayers.clearLayers();
        } else {
          this.comparedAreasLayers = L.featureGroup().addTo(this.map);
        }
        // 注意此处异步的处理
        const layers = await Promise.all(areas.map(async (p, index) => {
          const option = { color: themeColors[index] };
          return await this.renderAreas2Layer(p, option);
        }));
        layers.forEach(layer => this.comparedAreasLayers.addLayer(layer));
        const bounds = this.comparedAreasLayers.getBounds();
        this.map.fitBounds(bounds);
      }
    }
  },

  methods: {
    handleMeloccon (item1, item2) {
      this.conditionList = item1;
      this.str_con = item2;
      // console.log(this.str_con);
      // console.log(this.conditionList);
      this.$emit('receive', this.conditionList, this.str_con);
    },
    handleMe (item1, item2) {
      this.conditionList = item1;
      this.str_con = item2;
      console.log(this.str_con);
      console.log(this.conditionList);
      this.$emit('receive', this.conditionList, this.str_con);
      // this.path=window.location.pathname;
      console.log(this.$route.path);
    },
    // 要修改
    handlocMode1 (item1, item2, item3) {
      this.modeType = item1;
      this.minpts = item3;
      this.eps = item2;
      console.log(this.eps);
      console.log(this.minpts);
      this.$emit('receivelocMode1', this.modeType, this.eps, this.minpts);
    },

    // 要修改
    handlocMode2 (item1, item2) {
      this.modeType = item1;
      this.placeType = item2;
      // this.eps=item3;
      console.log(this.placeType);
      // console.log(this.minpts);
      this.$emit('receivelocMode2', this.modeType, this.placeType);
    },


    // 当前选中激活的是区域还是点
    setActiveLayer (type) {
      // eslint-disable-next-line no-unused-expressions
      // this.comparedAreasLayers && this.comparedAreasLayers.clearLayers(); // 清空对比图
      switch (type) {
        case 'marker':
          this.map.fitBounds(this.selectedMarkerLayer.getBounds());
          this.$emit('active', 'marker');
          break;
        case 'area':
          this.map.fitBounds(this.selectedAreaLayer.getBounds());
          this.$emit('active', 'area');
          break;
        default:
          break;
      }
    },

    /**
     * 将一个地块(多个polygon和多个codes)生成多个图层
     */
    async renderAreas2Layer ({ polygon: multiPolygon, countyCodes }, option) {
      Vue.$log.info(multiPolygon);
      const layers = L.featureGroup();
      if (Array.isArray(multiPolygon)) {
        // 只有行政区, 没有polygon(特征区域和自定义区域)
        multiPolygon.forEach((polygon) => {
          const latlngs = polygon.map(item =>
            wgs2bd(castObj2Arr(item, ['longitude', 'latitude'])).reverse());
          if (latlngs.length === 1) {
            // 如果polygon只有一个,就说明是一个点
            const iconUrl = convertSvg2Uri(redSvgIcon.content, {
              order: '',
              color: option.color
            });
            const icon = L.icon({
              iconUrl,
              iconSize: defaultLeafletIconSize
            });
            layers.addLayer(L.marker(latlngs[0], { icon }));
          } else {
            layers.addLayer(L.polygon(latlngs, option));
          }
        });
      }
      if (Array.isArray(countyCodes)) {
        const allCountyGeojson = await getGeojsonsByCodes(countyCodes);
        layers.addLayer(L.geoJSON(allCountyGeojson, { style: option }));
      }

      return layers;
    }
  }
};
</script>
<style lang="scss">
$height-tool: 48px;
$tool-gutter: 16px;

.map-wrapper {
  position: relative;
  .map {
    width: 100%;
    height: calc(100vh);
    // min-height:900px
  }
}
</style>

import L from 'leaflet';
import { getGeojsonsByCodes, wgs2bd } from '@/util';

export default {
  data() {
    return {
      selectDialogShow: false, // 选择区域对话框是否可见
      drawFenceVis: false, // 地理围栏显示与否
      selectedArea: {}, // 选中区域
      selectedAreaNameList: '',
      selectedAreaLayer: null, // 选中区域图层
    };
  },
  methods: {
    // 选择区域-选中之后回调
    select(area) {
      // eslint-disable-next-line no-unused-expressions
      this.comparedAreasLayers && this.comparedAreasLayers.clearLayers(); // 清空对比图
      this.selectedArea = area;
      const { country, customArea, featureArea } = area;
      this.selectedAreaNameList = [
        ...country.map(i => i.name),
        ...featureArea.map(i => i.name),
        ...customArea.map(i => i.name)
      ].join('∪');
      const countyCodes = country.map(c => c.code);
      const customAreaPolygon = customArea.map(c => c.polygon);
      const featureAreaPolygon = featureArea.map(f => f.poi);
      this.renderSelectedArea(area);
      this.$emit('select', {
        label: this.selectedAreaNameList,
        countyCodes,
        areas: [...customAreaPolygon, ...featureAreaPolygon],
        type: 'area',
      });
    },
    // 开始draw自定义区域
    addCustomArea(type) {
      switch (type) {
        case 'rect':
          this.$refs['draw-rect'].draw();
          break;
        case 'reach':
          this.$refs['draw-reach'].draw();
          break;
        case 'fence':
          this.drawFenceVis = true;
          break;
        default:
          break;
      }
    },
    // 显示区域选择对话框
    showSelectDialog() {
      this.selectDialogShow = true;
    },
    // 渲染已选择区域: 区县,特征,自定义区域
    async renderSelectedArea(area) {
      if (!this.selectedAreaLayer) {
        this.selectedAreaLayer = L.featureGroup().addTo(this.map);
      } else {
        this.selectedAreaLayer.clearLayers();
      }

      const { country, customArea, featureArea } = area;
      // 渲染行政区域
      const codes = country.map(c => c.code);
      const allCountyGeojson = await getGeojsonsByCodes(codes);
      await this.selectedAreaLayer.addLayer(L.geoJSON(allCountyGeojson));

      // 渲染特征区域
      const featureAreaLayers = L.featureGroup(); // 特征区域图层
      featureArea.forEach(({ poi }) => {
        const points = poi.map(p =>
          wgs2bd([p.longitude, p.latitude]).reverse()); // 转换为点数组, 经纬度互换, 坐标转换
        featureAreaLayers.addLayer(L.polygon(points));
      });
      this.selectedAreaLayer.addLayer(featureAreaLayers);

      // 渲染自定义区域
      const customAreaLayers = L.featureGroup(); // 自定义区域图层
      customArea.forEach(({ polygon }) => {
        const points = polygon.map(p =>
          wgs2bd([p.longitude, p.latitude]).reverse()); // 转换为点数组, 经纬度互换, 坐标转换
        customAreaLayers.addLayer(L.polygon(points));
      });
      this.selectedAreaLayer.addLayer(customAreaLayers);

      this.map.fitBounds(this.selectedAreaLayer.getBounds());
    },
  },
};

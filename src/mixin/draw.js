// import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import drawLocales from 'leaflet-draw-locales';
// import { mapMutations } from 'vuex';
// import { bd2wgs } from '@/util';

export default {
  data() {
    return {
      // drawnItems: null
    };
  },
  // provide() {
  //   return {
  //     drawRect: this.drawRect,
  //     drawMarker: this.drawMarker,
  //     clearDraw: this.clearDraw
  //   };
  // },
  mounted() {
    /**
     * 使用方法
     *  var s = new L.Draw.Polygon(map); // 开启绘制
     *  s.enable(); //  获取绘制图层
     */
    this.initDraw();
  },
  methods: {
    // ...mapMutations({
    //   setRect: 'SET_RECT'
    // }),
    initDraw() {
      // this.drawnItems = L.featureGroup().addTo(this.map);
      // 翻译为中文
      this.locale();
      // this.map.on(L.Draw.Event.CREATED, (event) => {
      //   this.drawnItems.addLayer(event.layer); // 绘制的图层添加到地图
      //   // this.$emit('draw:end', this.drawnItems);
      //   const [latlngs] = event.layer.getFullLatLngs();
      //   const wgsLatLngs = latlngs.map(({ lat, lng }) => {
      //     const [lngTmp, latTmp] = bd2wgs(lng, lat);
      //     return { lat: latTmp, lng: lngTmp };
      //   });
      //   this.setRect(wgsLatLngs); // 获取的rect的坐标是一个二维数组
      // });
    },
    locale() {
      const locale = drawLocales('en');
      locale.draw.handlers.rectangle.tooltip.start =
        '摁住鼠标左键并拖拽绘制矩形';
      locale.draw.handlers.simpleshape.tooltip.end = '松开鼠标完成绘制';
    }
    // drawRect() {
    //   this.clearDraw();
    //   const p = new L.Draw.Rectangle(this.map, { showArea: false });
    //   p.enable();
    // },
    // drawMarker() {
    //   this.clearDraw();
    //   const p = new L.Draw.Marker(this.map);
    //   p.enable();
    // },
    // clearDraw() {
    //   this.drawnItems.clearLayers();
    //   this.setRect([]);
    // }
  }
};

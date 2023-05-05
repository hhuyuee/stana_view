import L from 'leaflet';
import { bd2wgs } from '@/util';
import * as bmapApi from '@/api/bmap';
import { Message } from 'element-ui';

export default {
  methods: {
    // 开始draw一个点
    drawMarker() {
      if (!this.selectedMarkerLayer) {
        this.selectedMarkerLayer = L.featureGroup().addTo(this.map);
      } else {
        this.selectedMarkerLayer.clearLayers();
      }

      new L.Draw.Marker(this.map).enable();

      this.map.on(L.Draw.Event.CREATED, async ({ layer }) => {
        // eslint-disable-next-line no-unused-expressions
        this.comparedAreasLayers && this.comparedAreasLayers.clearLayers(); // 清空对比图
        this.selectedMarkerLayer.addLayer(layer); // draw的图层添加到地图
        const { lat, lng } = layer.getLatLng();
        this.map.off(L.Draw.Event.CREATED);
        const latlng = bd2wgs([lng, lat]).reverse(); // 返回一个数组
        try {
          // eslint-disable-next-line camelcase
          const { formatted_address } = await bmapApi.reverseGeocoding(latlng);
          this.selectedMarker = {
            latlng,
            address: formatted_address,
          };
          this.$emit('select', {
            label: formatted_address,
            areas: [
              [
                {
                  latitude: latlng[0],
                  longitude: latlng[1],
                }
              ]
            ],
            type: 'marker',
          });
        } catch (e) {
          Message.error(e.message);
        }
        // this.$emit('draw:marker', this.selectedMarker);
      });
    },
    //  输入框选中一个点之后
    selectMaker(point) {
      // eslint-disable-next-line no-unused-expressions
      this.comparedAreasLayers && this.comparedAreasLayers.clearLayers(); // 清空对比图
      const { location } = point;
      if (!this.selectedMarkerLayer) {
        this.selectedMarkerLayer = L.featureGroup().addTo(this.map);
      } else {
        this.selectedMarkerLayer.clearLayers();
      }

      const latlng = [location.lng, location.lat].reverse(); // bd坐标
      this.selectedMarkerLayer.addLayer(L.marker(latlng));
      this.map.fitBounds(this.selectedMarkerLayer.getBounds());
      this.selectedMarker = {
        latlng,
        address: point.name,
      };
      this.$emit('select', {
        label: point.name,
        areas: [
          [
            {
              latitude: latlng[0],
              longitude: latlng[1],
            }
          ]
        ],
        type: 'marker',
      });
    },
  },
};

import L from 'leaflet';
import 'leaflet.gridline';

export default {
  data() {
    return {
      gridLayer: L.gridlineLayer(),
      gridLayerShown: false,
    };
  },
  methods: {
    toggleGrid(show) {
      if (show) {
        this.gridLayer.addTo(this.map);
      } else {
        this.gridLayer.remove();
      }
      this.gridLayerShown = show;
    },
  },
};

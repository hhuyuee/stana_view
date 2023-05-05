import L from 'leaflet';

export default {
  props: {
    map: Object
  },
  methods: {
    draw() {
      this.drawnItems = L.featureGroup().addTo(this.map);

      // this.drawnItems.clearLayers();
      this.initDraw();
    },
    redraw() {
      this.dialogShow = false;

      // eslint-disable-next-line no-unused-expressions
      this.drawnItems && this.drawnItems.clearLayers();
      this.initDraw();
    },
    handleClose(done) {
      // this.$confirm('确认关闭？').then(() => {
      done();

      // eslint-disable-next-line no-unused-expressions
      this.drawnItems && this.drawnItems.clearLayers();
      this.$emit('finish');
      // });
    }
  }
};

export default {
  methods: {
    /**
     * 设置当前激活类别
     * @param {String}
     */
    setActive(type) {
      switch (type) {
        case 'marker':
          this.allCharts = this.markerAllCharts;
          break;
        case 'area':
          this.allCharts = this.areaAllCharts;
          break;
        default:
          break;
      }
    },
  },
};

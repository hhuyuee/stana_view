import L from 'leaflet';

L.Polyline.include({
  /**
   * 获取首尾相连的LatLng
   */
  getFullLatLngs() {
    const area = this.getLatLngs();
    const fullArea = area.map((a) => {
      a.push(a[0]);
      return a;
    });
    return fullArea;
  }
});

L.Map.include({
  getSouthWest() {
    const bounds = this.getBounds();
    return bounds.getSouthWest();
  },
  getNorthEast() {
    const bounds = this.getBounds();
    return bounds.getNorthEast();
  },
});

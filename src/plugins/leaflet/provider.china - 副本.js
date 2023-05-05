/**
 * usage:
 *
 * normal:
 *  const map = L.map('map', {
 *    crs: L.CRS.Baidu, // if use baidu
 *    center: [31.59, 120.29],
 *    zoom: 12,
 *    maxZoom: 18,
 *    minZoom: 5
 *  })
 *  L.tileLayer.chinaProvider('TianDiTu.Normal.Map').addTo(map)
 *  L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion').addTo(map)
 *
 */
/* eslint-disable */
import L from 'leaflet';
import 'proj4leaflet';

L.TileLayer.ChinaProvider = L.TileLayer.extend({
  initialize: function (type, options = {}) { // (type, Object)
    const { url, options: opt } = L.TileLayer.ChinaProvider.getProviderConf(type, options)
    L.TileLayer.prototype.initialize.call(this, url, opt);
  }
});

L.TileLayer.ChinaProvider.getProviderConf = function (type, options = {}) {
  const [providerName, mapName, mapType] = type.split('.');
  const { subdomains, [mapName]: mapConf } = L.TileLayer.ChinaProvider.providers[providerName]
  const url = mapConf[mapType];
  const {options: mapOptions = {}} = mapConf;
  if(providerName === 'Baidu') {
    const { styles } = mapOptions
    if(typeof styles === 'function') {
      mapOptions.styles = styles(options)
    }
    options = Object.assign(mapOptions, {
      name: options.name,
      tms: true
    }, options)
  }
  options.subdomains = mapOptions.subdomains || subdomains
  return { url, options }
}

L.TileLayer.ChinaProvider.providers = {
  Baidu: {
    // 公网百度
    Normal: {
      Map: 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles={styles}&scaler=1&p=1',
      options: {
        styles: ({ bigfont }) => bigfont ? 'ph' : 'pl'
      }
    },
    subdomains: '0123456789'
  }
};

L.tileLayer.chinaProvider = function (type, options) {
  return new L.TileLayer.ChinaProvider(type, options);
};


L.CRS.Baidu = new L.Proj.CRS(
  'EPSG:900913',
  `+proj=merc
    +a=6378206
    +b=6356584.314245179
    +lat_ts=0.0
    +lon_0=0.0
    +x_0=0
    +y_0=0
    +k=1.0
    +units=m
    +nadgrids=@null
    +wktext
    +no_defs`, {
  resolutions: function () {
    var res = [],
      level = 19;
    res[0] = Math.pow(2, 18);
    for (var i = 1; i < level; i++) {
      res[i] = Math.pow(2, (18 - i))
    }
    return res;
  }(),
  origin: [0, 0],
  bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
});

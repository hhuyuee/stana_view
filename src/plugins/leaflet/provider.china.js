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

L.TencentLayer = L.TileLayer.extend({
  options: {
    subdomains: [0, 1, 2]
  },

  //type: ROADMAP(普通地图), RealROADMAP(路网), SATELLITE(卫星), TERRAIN(地形)
  //如果实现HYBRID效果则需要叠加RealROADMAP和SATELLITE两个图层
  initialize: function(type, options) {
    L.Util.setOptions(this, options);

    this._type = type || 'ROADMAP';
  },

  getTileUrl: function(tilePoint) {

    this._url =
      "http://rt{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style={t}";

    var urlArgs = {
      z: tilePoint.z,
      x: tilePoint.x,
      y: Math.pow(2, tilePoint.z) - 1 - tilePoint.y
    };

    switch (this._type) {
      case 'ROADMAP':
        this._url = this._url.replace('{t}', 0);
        break;
      case 'RealROADMAP':
        this._url = this._url.replace('{t}', 1);
        break;
      case 'SATELLITE':
        this._url = "http://p{s}.map.gtimg.com/sateTiles/{z}/{x16}/{y16}/{x}_{y}.jpg";
        urlArgs.x16 = Math.floor(tilePoint.x / 16);
        urlArgs.y16 = Math.floor((Math.pow(2, tilePoint.z) - 1 - tilePoint.y) / 16);
        break;
      case 'TERRAIN':
        this._url = "http://p{s}.map.gtimg.com/demTiles/{z}/{x16}/{y16}/{x}_{y}.jpg";
        urlArgs.x16 = Math.floor(tilePoint.x / 16);
        urlArgs.y16 = Math.floor((Math.pow(2, tilePoint.z) - 1 - tilePoint.y) / 16);
    }

    return L.Util.template(this._url, L.extend(urlArgs, this.options, {
      s: this._getSubdomain(tilePoint)
    }));
  }
});

L.tencentLayer = function(key, options) {
  return new L.TencentLayer(key, options);
};

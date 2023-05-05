import gcoord from 'gcoord';
import L from 'leaflet';
import Vue from 'vue';
import { barChart, lineChart } from '@/config';
import * as uicApi from '@/api/uic2';
import { flatten, uniq, unionBy } from 'lodash';

export * from './excel';

/**
 * 返回数组和类似数组结构的最后一个值
 */
export function last(input) {
  const array = Array.from(input);
  if (!Array.isArray(array)) throw new Error('not Array or Array alike');
  const { length } = array;
  if (length === 0) return undefined;
  return array[length - 1];
}

/**
 * 将bd09转换为wgs84,传入和传出都是经度在前, 纬度在后
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @return {number[]} 转换后的经纬度,经度在前, 纬度在后
 */
export const bd2wgs = input =>
  gcoord.transform(input, gcoord.BD09, gcoord.WGS84);

/**
 * 将bd09转换为wgs84,传入和传出都是经度在前, 纬度在后
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @return {number[]} 转换后的经纬度,经度在前, 纬度在后
 */
export const wgs2bd = input =>
  gcoord.transform(input, gcoord.WGS84, gcoord.BD09);

/**
 * 将bd09转换为wgs84,传入和传出都是经度在前, 纬度在后
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @return {number[]} 转换后的经纬度,经度在前, 纬度在后
 */
export const gcj2bd = input =>
  gcoord.transform(input, gcoord.GCJ02, gcoord.BD09);
/**
 * 将bd09转换为wgs84,传入和传出都是经度在前, 纬度在后
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @return {number[]} 转换后的经纬度,经度在前, 纬度在后
 */
export const gcj2wgs = input =>
  gcoord.transform(input, gcoord.GCJ02, gcoord.WGS84);

/**
 * get data type string
 * @param {any} target
 * @return {String} data type
 *
 * @example
 *  getType({})
 *  => 'Object'
 *
 * *  getType(1)
 *  => 'Number'
 *
 */
export const getType = target =>
  Object.prototype.toString.call(target).slice(8, -1);

/**
 *将对象的值映射为数组
 * @param {Object} obj 待转换的对象
 * @param {String[]} keys 对象的key
 */
export const castObj2Arr = (obj, keys = Object.keys(obj)) =>
  keys.map(key => obj[key]);

/**
 * 将svg字符串转换成数据
 * 只适合@/assets/icon/svg/red1.svg, 如果要给其他svg图标, 请务必小心
 * TODO: 通过<text></text> 添加文字,可以避免regex误杀
 * @param {String}} str svg字符串
 * @param {Number} order 序号 将@/assets/icon/svg/red1.svg生成带序号的svg
 */
export const convertSvg2Uri = (str, { order, color } = {}) => {
  function addNameSpace(data) {
    let nameSpaceStr = data;
    if (data.indexOf('http://www.w3.org/2000/svg') < 0) {
      nameSpaceStr = data.replace(
        /<svg/g,
        "<svg xmlns='http://www.w3.org/2000/svg'"
      );
    }
    return nameSpaceStr;
  }
  function encodeSVG(data) {
    const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g;
    let encodeSvgStr = data;
    encodeSvgStr = encodeSvgStr.replace(/>\s{1,}</g, '><');
    encodeSvgStr = encodeSvgStr.replace(/\s{2,}/g, ' ');
    return encodeSvgStr.replace(symbols, encodeURIComponent);
  }
  const orderPosSvg = str.replace(/>\d</g, `>${order}<`);
  const colorPosSvg = color
    ? orderPosSvg.replace(/(<path.*)fill="#\S+"/g, `$1fill="${color}"`)
    : orderPosSvg;
  const namespaced = addNameSpace(colorPosSvg); // 增加svg标签
  const escaped = encodeSVG(namespaced); // uri转义
  return `data:image/svg+xml,${escaped}`.replace(/symbol/g, 'svg'); // 组装成data uri
};

// eslint-disable-next-line no-unused-vars
export const fillArr = (
  arr,
  { nameKey = 'name', valueKey = 'value', defaultValue = 0 } = {}
) => {
  // get all name
  const nestedName = arr.map(item => item.map(i => i[nameKey]));
  const allName = uniq(flatten(nestedName));

  // 生成基础对象
  const baseObj = allName.map(n => ({
    [nameKey]: n,
    [valueKey]: defaultValue,
  }));

  const out = arr.map((item) => {
    // 根据name合并数据
    const union = unionBy(item, baseObj, nameKey);
    // 根据名字排序
    return allName.map(n => union.find(u => u[nameKey] === n));
  });
  return out;
};

/**
   * @param {[]} arr
    input:
    [
      [
        {name: "男", value: 0.82},
        {name: "女", value: 0.18}
      ],
      [
        {name: "男", value: 0.82},
        {name: "女", value: 0.18}
      ],
      [
        {name: "男", value: 0.82},
        {name: "女", value: 0.18}
      ]
    ]

    output:
    [
      ["男", 0.82, 0.82, 0.82]
      ["女", 0.18, 0.18, 0.18]
    ]
    */
export const arrObj2Arr = (
  arr,
  { nameKey = 'name', valueKey = 'value', formatData = a => a } = {}
) => {
  if (!Array.isArray(arr)) {
    Vue.$log.warn('input %s must be an array', JSON.stringify(arr));
    return [];
  }
  let inputItemCorrectFlag = true;
  let lastFlagedItem;
  arr.forEach((item) => {
    if (!Array.isArray(item)) {
      lastFlagedItem = item;
      inputItemCorrectFlag = false;
    }
  });
  if (!inputItemCorrectFlag) {
    Vue.$log.warn('input item %s must be an array', lastFlagedItem);
    return [];
  }
  const firstOne = arr[0][0];
  const firstOneType = getType(firstOne || null);
  const inputKeys = Object.keys(firstOne || {});
  if (
    !firstOneType === 'Object' ||
    ![nameKey, valueKey].filter(v => inputKeys.includes(v))
  ) {
    Vue.$log.warn(
      'input item data keys are different from ',
      nameKey,
      valueKey
    );
    return [];
  }
  const names = arr[0].map(s => [s[nameKey]]);
  const values = names.map((d, index) =>
    d.concat(arr.map(as => formatData(as[index][valueKey]))));
  return values;
};

/**
 * @param {Object} param0
 */
export const chartOption = ({
  data = [],
  title,
  type = 'bar',
  demision = ['', '比例'],
  seriesFormat,
} = {}) => {
  const seriesType = getType(type);
  let series = [];
  switch (seriesType) {
    case 'String':
      series = demision
        .slice(1)
        .map((_, index) =>
          (type === 'bar'
            ? barChart(index, seriesFormat)
            : lineChart(index, seriesFormat)));
      break;
    case 'Array':
      series = type.map((t, index) =>
        (t === 'bar'
          ? barChart(index, seriesFormat)
          : lineChart(index, seriesFormat)));
      break;
    default:
      break;
  }
  return {
    title: {
      text: title,
    },
    dataset: {
      source: [demision, ...data],
    },
    series,
  };
};
export const formatAllChartsOption = ({
  chartsConfig,
  allRes,
  formatData = a => a,
  nameKey = 'name',
  valueKey = 'value',
  seriesFormat,
}) =>
  chartsConfig.map((config) => {
    const input = allRes.map(c => c[config.inputKey]);
    if (input.length > 0 && input.every(Boolean)) {
      const fillInput = fillArr(input);
      const data = arrObj2Arr(fillInput, { nameKey, valueKey, formatData });

      const options = chartOption({
        title: config.title,
        data,
        type: config.type,
        demision: [''].concat(Array(allRes.length).fill('')),
        seriesFormat,
      });
      return {
        options,
        sideSpan: config.sideSpan,
        fullSpan: config.fullSpan,
      };
    }
    return {};
  });

/**
 * 获取边界数组[Latlng]
 * @param {L.LatLngBounds} latLngBounds
 */
export const getBoundsLatLng = (latLngBounds) => {
  if (!(latLngBounds instanceof L.LatLngBounds)) {
    Vue.$log.error(latLngBounds, 'is not L.LatLngBounds');
  }
  const southWest = latLngBounds.getSouthWest();
  const northWest = latLngBounds.getNorthWest();
  const northEast = latLngBounds.getNorthEast();
  const sourthEast = latLngBounds.getSouthEast();
  return [southWest, northWest, northEast, sourthEast];
};

/**
 * 获取当前地图的边界(首尾相连)
 * @param {L.map} map Leaflet地图实例
 * @returns {{latitude, longitude}[]} 经纬度数组
 */
export const getMapFullBounds = (map) => {
  if (!(map instanceof L.Map)) {
    throw new Error('map', map, 'is not L.Map instance');
  }
  const bounds = map.getBounds();
  const latlngs = getBoundsLatLng(bounds);
  const polygon = latlngs.map(({ lat, lng }) => {
    const [longitude, latitude] = bd2wgs([lng, lat]);
    return {
      latitude,
      longitude,
    };
  });
  if (polygon.length > 0) polygon.push(polygon[0]);
  return polygon;
};

// const logErr = (info) => {
//   throw new Error('range', info, ' is falsy');
// };

/**
 * 将range转变成数组
 * @param {Number[]} range
 */
export const castRange2Arr = (range = []) => {
  // 边界处理
  if (!range) return [];
  if (!Array.isArray(range)) return [];
  const { length } = range;
  if (length === 0) return [];

  // 不改变原数组
  return range.slice(0, -1).map((item, index) => [item, range[index + 1]]);
};

/**
 * 通过地区编码获取这些地区的geojson
 */
export const getGeojsonsByCodes = async (codes = []) =>
  await Promise.all(codes.map(async (code) => {
    // 多个区县,并发处理
    const countryGeojson = await uicApi.getCountryGeojson(code);
    const {
      geometry: { coordinates },
    } = countryGeojson;
    countryGeojson.geometry.coordinates = coordinates.map(c =>
      c.map(p => gcj2bd(p.reverse()))); // 经纬度互换
    return countryGeojson;
  }));

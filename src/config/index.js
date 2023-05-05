// 必须使用commonjs规范
const merge = require('lodash/merge');
// domain 在 .env.[mode] 文件中添加
const getDomainByEnv = key =>
  process.env[`VUE_APP_DOMAINS_${key.toUpperCase()}`];
const BASE_URL = getDomainByEnv('base');

exports.getDomainByEnv = getDomainByEnv;

exports.domains = {
  base: BASE_URL,
  uic2: `${getDomainByEnv('uic2')}uic2/`,
  business: `${BASE_URL}business/hot-commodity/`,
  bmap: 'https://api.map.baidu.com/',
};

exports.DEBUG = process.env.NODE_ENV === 'development';

exports.mapType = 'Baidu.Normal.Map';

exports.bmapAk = 'wWcqKqwnTHRq0QUO2TcwXiaX9yVRkAz5';

// line 和 bar图表的公共配置项
const commonBarLineChart = (index, formatter) => ({
  label: {
    show: true,
    position: 'top',
    formatter({ data }) {
      if (data[index] === 0) return 0;
      if (formatter) {
        return formatter(data[index]);
      }
      return `${Number(data[index]).toFixed(2)}`;
    },
  },
});

// TODO: 不知道为啥不支持扩展运算符
exports.barChart = (seriesIndex, formatter) =>
  merge(
    {
      type: 'bar',
      barMaxWidth: '16',
    },
    commonBarLineChart(seriesIndex + 1, formatter)
  );

exports.lineChart = (seriesIndex, formatter) =>
  merge(
    {
      type: 'line',
    },
    commonBarLineChart(seriesIndex + 1, formatter)
  );

exports.defaultLeafletIconSize = [18, 22];

exports.colorBand = [
  '#ECDA9A',
  '#EFC47E',
  '#F3AD6A',
  '#F7945D',
  '#F97B57',
  '#F66356',
  '#EE4D5A'
];

exports.colorBandCancle = [
  '#D6D6D6',
  '#C8C8C8',
  '#BEBEBE',
  '#B4B4B4',
  '#ABABAB',
  '#A6A6A6',
  '#989898'
];

exports.blockColorBand = [
  '#202090',
  '#253494',
  '#225EA8',
  '#1D91C0',
  '#41B6C4',
  '#7FCDBB',
  '#C7E9B4',
  '#EDF8B1'
];
exports.blockColorBandCancle = [
  '#868686',
  '#989898',
  '#A6A6A6',
  '#ABABAB',
  '#B4B4B4',
  '#BEBEBE',
  '#C8C8C8',
  '#D6D6D6'
];

exports.valueRange = [0, 35, 60, 80, 90, 95, 98, 100];

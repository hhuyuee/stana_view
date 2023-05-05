import { bmapAk } from '@/config';
import { bmapAdapter } from './adapter';

// // 添加ak
// const injectAk = (params) => ({ ...params, ak: bmapAk });

/**
 * 百度逆地理解析: 根据经纬度获取周围的点信息
 * @external {百度逆地理解析} http://lbs.baidu.com/index.php?title=webapi/guide/webservice-geocoding-abroad
 * @param {Number[]} location 经纬度, 纬度在前, 经度在后
 * @example const { formatted_address } = await bmapApi.reverseGeocoding(castObj2Arr(poi, ['latitude', 'longitude']));
 */
export const reverseGeocoding = (location) => {
  const params = {
    ak: bmapAk,
    output: 'json',
    coordtype: 'wgs84ll', // 输入坐标
    location: location.join(',')
  };
  return bmapAdapter({
    url: 'reverse_geocoding/v3/',
    params
  });
};

/**
 * 地点输入提示
 * @param {Object} query
 */
export const placeSuggestion = (query) => {
  const params = {
    ak: bmapAk,
    output: 'json',
    city_limit: true,
    ...query,
  };
  return bmapAdapter({
    url: 'place/v2/suggestion',
    params
  });
};

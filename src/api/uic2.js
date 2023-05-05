import { uic2Adapter } from '@/api/adapter';
/**
 * 根据行政区县的code获取地理信息
 * @param {number} code 行政区县的code
 */
export const getCountryGeojson = code =>
  uic2Adapter({
    url: '/area/getAreaCodeBoundary',
    method: 'post',
    data: { areaCode: code }
  });

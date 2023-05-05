import { baseAdapter } from './adapter';

/**
获取人口指数明细
 */
export function heatMapIndex(data) {
  return baseAdapter({
    url: '/pop/heatMap/index',
    method: 'post',
    data
  });
}
/**
获取人口热力图数据
 */
export function heatMap(data) {
  return baseAdapter({
    url: '/pop/heatMap/',
    method: 'post',
    data
  });
}

import { baseAdapter } from './adapter';

/**
环境业态-周边业态
 */
export function areaPoi(data) {
  return baseAdapter({
    url: '/env/poi',
    method: 'post',
    data
  });
}

/**
环境业态-地块特征
 */
export function areaFeature(data) {
  return baseAdapter({
    url: '/area/feature',
    method: 'post',
    data
  });
}

/**
环境业态-地块特征-热力图
 */
export function featureMap(data) {
  return baseAdapter({
    url: '/area/feature-map',
    method: 'post',
    data
  });
}

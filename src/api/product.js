import store from '@/store';
import { baseAdapter } from './adapter';

const industryId = store.state.user.industry.id;
/**
 * 获取用户的自定义权重
 */
export function getWeight() {
  return baseAdapter({
    url: `/recommend/weight/${industryId}`,
  });
}
/**
 * 获取用户的默认权重
 */
export function getDefaultWeight() {
  return baseAdapter({
    url: `/recommend/weight/default/${industryId}`,
  });
}
/**
 * 设置用户的权重
 */
export function setWeight(data) {
  return baseAdapter({
    url: `/recommend/weight/${industryId}`,
    method: 'post',
    data
  });
}

/**
 * 获取用户推荐
 */
export function getSuggest(data) {
  return baseAdapter({
    url: `/recommend/location/${industryId}`,
    method: 'post',
    data
  });
}

/**
 * 获取详情
 */
export function getDetail(data) {
  return baseAdapter({
    url: '/recommend/location/overview',
    method: 'post',
    data
  });
}


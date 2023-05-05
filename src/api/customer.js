import { baseAdapter } from './adapter';

/**
 * 客群洞察-人口特征
 */
export function customerFeature(data) {
  return baseAdapter({
    url: '/pop/feature/',
    method: 'post',
    data
  });
}
/**
 * 驻留点筛选
 */
export function staypoint(data) {
  return baseAdapter({
    // url: 'http://10.222.54.190:8089/selectstaypointV3',
    url: 'http://localhost:8089/selectstaypointV3',
    // url: '/sta/StayPoint/',
    method: 'post',
    data
  });
}
/**
 * 地点筛选
 */
export function location(data) {
  return baseAdapter({
    url: 'http://localhost:8089/getprofile',
    // url: '/generate',
    method: 'post',
    data
  });
}
export function placeInfo(data) {
  return baseAdapter({
    url: 'http://localhost:8089/getinfo',
    // url: '/getinfo',
    method: 'post',
    data
  });
}

/**
 * 客群洞察-消费洞察
 */
export function customerAnalysis(data) {
  return baseAdapter({
    url: '/consume/analysis',
    method: 'post',
    data
  });
}
/**
 * 客群洞察-客群探索
 */
export function guestAnalysis(data) {
  return baseAdapter({
    url: '/guest/analysis',
    method: 'post',
    data
  });
}

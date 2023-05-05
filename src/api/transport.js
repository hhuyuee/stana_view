import { baseAdapter } from './adapter';

/**
 * 客群洞察-人口特征
 */
export function analysis(data) {
  return baseAdapter({
    url: '/transport/analysis',
    method: 'post',
    data
  });
}

import { baseAdapter } from './adapter';

/**
 * 登录
 * @param {Object} data
 * @param {String} data.username
 * @param {String} data.password
 */
export function login(data) {
  return baseAdapter({
    url: '/user/login',
    method: 'post',
    data
  });
}

/**
 * 登出
 */
export function logout() {
  return baseAdapter({
    url: '/user/logout',
    method: 'post'
  });
}

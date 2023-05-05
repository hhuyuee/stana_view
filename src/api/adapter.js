/**
 * axios
 * api: https://github.com/axios/axios
 */

import axios from 'axios';
import jsonp from 'jsonp';
import { domains } from '@/config';
import router from '@/router';
import store from '@/store';

export const getInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 60000,
    withCredentials: true
  });
  instance.interceptors.request.use(
    (config) => {
      config.headers = Object.assign({}, config.headers, {
        'header-city-code': store.state.selectedCity.code
      });
      return config;
    },
    error => Promise.reject(error)
  );
  instance.interceptors.response.use(
    (response = {}) => {
      const {
        data: { resultCode: code, data, resultMsg }
      } = response;
      if (code === 200) {
        if (!data) return Promise.reject(new Error('暂无数据'));
        return data;
      }
      if (code === 401) {
        router.push('/login');
      }
      if (code === 403) {
        router.push('/notAuth');
      }
      return Promise.reject(new Error(resultMsg));
    },
    error => Promise.reject(error)
  );
  return instance;
};

const getUic2Instance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 30000000,
    withCredentials: true
  });
  instance.interceptors.request.use(
    (config) => {
      config.headers = Object.assign({}, config.headers, {});
      return config;
    },
    error => Promise.reject(error)
  );
  instance.interceptors.response.use(
    (response = {}) => {
      const {
        data: { code, data }
      } = response;
      if (code === 200) {
        return data;
      }
      store.commit('SET_LOADING', true);
      setTimeout(() => {
        store.commit('SET_LOADING', false);
      }, 10);
      return Promise.reject(response.data);
    },
    error => Promise.reject(error)
  );
  return instance;
};

const formatParams = params =>
  Object.keys(params).reduce((pre, cur) => `${pre}&${cur}=${params[cur]}`, '?');

const getBmapInstance = baseURL => ({ url, params }) =>
  new Promise((resolve, reject) => {
    jsonp(baseURL + url + formatParams(params), null, (err, data) => {
      if (err) {
        reject(new Error('获取poi失败,请联系网站管理员'));
        return;
      }
      if (data.status !== 0) {
        reject(new Error('获取poi失败,请联系网站管理员'));
        return;
      }
      resolve(data.result);
    });
  });

export const uic2Adapter = getUic2Instance(domains.uic2);
export const baseAdapter = getInstance(domains.base);
export const bmapAdapter = getBmapInstance(domains.bmap);
export const businessAdapter = getInstance(domains.business);


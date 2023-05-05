import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

// 初始状态
const observer = {
  user: {
    name: '',
    power: 0,
    industry: {}
  },
  // 已选中的城市
  selectedCity: {
    name: '北京市',
    code: '110100'
  },
  allCityList: [], // 所有城市
  allIndustry: [], // 所有行业
  country: [], // 当前城市下的所有区县
  featureArea: [], // 当前城市下的所有特征区域
  customArea: [], // 当前城市下的所有自定义区域
  result:{}, //STAYPOint留下的
  conditionList:[],
  filterList:[],
  value1:'行人轨迹'
};

export default new Vuex.Store({
  // 持久化
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer(val) {
        return {
          user: val.user,
          selectedCity: val.selectedCity
        };
      }
    })
  ],
  state: observer,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
});

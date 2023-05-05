import * as api from '@/api/base';

// // 获取所有城市列表
// export const getAllCityList = async ({ commit }) => {
//   try {
//     const data = await api.getAllCityList();
//     commit('SET_ALL_CITY_LIST', data);
//   } catch (e) {
//     throw new Error(e.message);
//   }
// };

// 获取该城市下的所有所有区县
export const getCountry = async ({ commit }) => {
  try {
    const data = await api.getCountyOfCity();
    commit('SET_COUNTRY', data);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getFeatureArea = async ({ commit }, name) => {
  try {
    const data = await api.getFeatureArea(name);
    commit('SET_FEATURE_AREA', data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCustomArea = async ({ commit }) => {
  try {
    const data = await api.getCustomArea();
    commit('SET_CUSTOM_AREA', data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteCustomArea = async (state, params) => {
  try {
    await api.deleteCustomArea(params);
  } catch (error) {
    throw new Error(error.message);
  }
};


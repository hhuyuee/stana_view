export const SET_USER = ({ user }, data) => {
  Object.assign(user, data);
};

export const SET_ALL_CITY_LIST = (state, data) => {
  state.allCityList = data;
};

export const SET_SELECTED_CITY = (state, data) => {
  if (data.code === state.selectedCity.code) return;
  state.selectedCity = data;
};

// 当前城市下的区县
export const SET_COUNTRY = (state, data) => {
  state.country = data;
};
export const SET_FEATURE_AREA = (state, data) => {
  state.featureArea = data;
};
export const SET_CUSTOM_AREA = (state, data) => {
  state.customArea = data;
};

export const SET_ALL_INDUSTRY = (state, data) => {
  state.allIndustry = data;
};

export const SET_SELECTED_INDUSTRY = (state, data) => {
  state.user.industry = data;
};

export const SET_RESULT = (state, data) => {
  state.result = data;
};
export const SET_CONDITION = (state, data) => {
  state.conditionList = data;
};
export const SET_FILT = (state, data) => {
  state.filterList = data;
};
export const SET_VALUE = (state, data) => {
  state.value1 = data;
};

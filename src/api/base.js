import { baseAdapter } from './adapter';

/**
 * 获取所有城市列表
 */
// export const getAllCityList = () =>
//   baseAdapter({
//     url: '/base/city',
//     method: 'get',
//   });

/**
 * 查市下的区
 */
export const getCountyOfCity = () =>
  baseAdapter({ url: '/base/county', method: 'get' });

/**
 * 获取本市的特征区域,不传则默认前10条,name为模糊查询字段
 * @param {string} name 特征区域的名字
 */
export const getFeatureArea = (name) => {
  const url = name ? `/base/feature-area/${name}` : '/base/feature-area';
  return baseAdapter({ url, method: 'get' });
};

/**
 * 获取自定义区域
 */
export const getCustomArea = () =>
  baseAdapter({ url: '/user/customArea', method: 'get' });

/**
 * 删除自定义区域
 * @param {Number} ids 自定义区域的id
 */
export const deleteCustomArea = ids =>
  baseAdapter({ url: `/user/customArea/${ids}`, method: 'delete' });

/**
 *添加自定义区域
 */
export const addCustomArea = data =>
  baseAdapter({ url: '/user/customArea', method: 'post', data });

/**
 *获取可达区域
 */
export const getReachablePolygon = data =>
  baseAdapter({
    url: '/base/reachablePolygon/',
    method: 'post',
    data,
  });

/**
 * 删除收藏
 * @param {string} ids
 */
export const deleteCollect = ids =>
  baseAdapter({ url: `/user/favorite/${ids}`, method: 'delete' });

/**
 * 移动收藏
 * @param {object} param0
 * @param {string} param0.type
 * @param {string} param0.ids
 */
export const moveCollect = ({ targetType, ids }) =>
  baseAdapter({
    url: `/user/favorite/move/${targetType}/${ids}`,
    method: 'post',
  });

/**
 * 添加收藏
 * @param {object} data
 */
export const addCollect = data =>
  baseAdapter({ url: '/user/favorite', method: 'post', data });

/**
 * 获取收藏夹列表
 * @param {string} type 收藏夹的类型
 */
export const getCollectionList = (type = 'default') =>
  baseAdapter({ url: `/user/favorite/${type}` });
/**
 * 设置选中的城市或者行业
 * @param {Object} data
 * @param {Number} data.cityCode 城市code
 * @param {Number} data.industryId 行业id
 */
export const setCityIndustry = data =>
  baseAdapter({ url: '/base/setCityIndustry', data, method: 'post' });
/**
 * 获取行业
 */
export const getIndustryOptions = () => baseAdapter({ url: '/base/industry' });

/**
 * 设置行业
 */
export const setIndustry = () => baseAdapter({ url: '/base/setCityIndustry', method: 'post' });

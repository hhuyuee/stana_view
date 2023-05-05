import { businessAdapter, baseAdapter } from '@/api/adapter';

// 获取热销商品列表
export const hotCommodity = data =>
  businessAdapter({
    url: '',
    method: 'post',
    data
  });

// 获取直接供应商
export const directSupplier = query =>
  businessAdapter({
    url: `/supplier/${query}`
  });

// 获取潜在供应商
export const potentialSupplier = query =>
  businessAdapter({
    url: `/supplier/potential/${query}`
  });

// 获取本市的特征区域
export const featureArea = query =>
  baseAdapter({
    url: `/base/feature-area/${query}`
  });

// 下载数据时候日志记录
export const writeLog = data =>
  baseAdapter({
    url: '/business/hot-commodity/download-log',
    method: 'post',
    data
  });

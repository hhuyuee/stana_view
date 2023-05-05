/* eslint-disable */
import Mock, { Random } from 'mockjs';

// /mock/diagnose
Mock.mock(/\/recommend\/weight\/default.*/, {
  resultCode: 200,
  resultMsg: null,
  tid: 1586503463517,
  data: [
    { name: '人口', value: 80, industryId: null },
    { name: '消费', value: 80, industryId: null },
    { name: '环境业态', value: 80, industryId: null },
    { name: '交通路网', value: 80, industryId: null },
  ],
});

Mock.mock(/\/recommend\/location\/overview/, {
  resultCode: 200,
  resultMsg: null,
  tid: 1586522096489,
  data: {
    isStar: true,
    starId: 173,
    'attribute|1': ['住宅区', '红岸基地', '量子破碎'],
    range: 0.0,
    area: () => Random.float(0, 3),
    scoreDetail: [
      { name: '人口', value: () => Random.float(0, 100), industryId: null },
      { name: '消费', value: () => Random.float(0, 100), industryId: null },
      { name: '业态', value: () => Random.float(0, 100), industryId: null },
      { name: '交通', value: () => Random.float(0, 100), industryId: null },
    ],
  },
});

Mock.mock(/\/recommend\/location\/\d/, {
  resultCode: 200,
  resultMsg: null,
  tid: 1586504814605,
  'data|15-20': [
    {
      geohash: () => Random.word(7, 7),
      latitude: () => Random.float(22, 22.5),
      longitude: () => Random.float(113, 113.5),
      isStar: () => Random.boolean(),
      score: () => Random.float(100, 200),
      starId: null,
    },
  ],
});

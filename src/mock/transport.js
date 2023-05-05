/* eslint-disable */
import Mock from 'mockjs';
import { after, mergeOk } from './interceptor';

Mock.mock(
  /\/transport\/analysis/,
  mergeOk({
    convenienceIndex: {
      name: '交通便捷指数',
      value: 12
    },
    poiList: [
      {
        name: '景区',
        poi: [
          {
            latitude: 22.54911179620867,
            longitude: 114.09119767361756
          },
          {
            latitude: 22.551714573915273,
            longitude: 114.09119535656495
          },
          {
            latitude: 22.55168326618346,
            longitude: 114.09305276152948
          }
        ],
        value: 3
      },
      {
        name: '殡仪馆',
        poi: [
          {
            latitude: 22.14911179620867,
            longitude: 114.19119767361756
          },
          {
            latitude: 23.451714573915273,
            longitude: 114.09119535656495
          },
          {
            latitude: 22.55168326618346,
            longitude: 113.09305276152948
          }
        ],
        value: 3
      }
    ]
  })
);

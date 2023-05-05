/**
 * 每个菜单需要必定需要一个子路由
 * 一级路由禁止引用components（会被layout覆盖）
 * 如果需要一级路由，需要
 * (1)添加一个子路由并且设置path为''
 * (2)父路由需要一个redirect
 * 否则将无法正常路由跳转
 * meta参数：
 * title 菜单名字
 * hideInMenu 是否在菜单中隐藏
 * submenu 是否展开子菜单
 */

export const routes = [
  {
    path: '/customer',
    name: 'customer',
    redirect: '/customer/feature',
    meta: { title: '客群洞察', submenu: true },
    children: [
      // {
      //   path: '/customer/feature',
      //   name: 'customerFeature',
      //   meta: { title: '人口特征' },
      //   component: () => import('@/views/customer/Feature.vue'),
      // },
      // {
      //   path: '/customer/analysis',
      //   name: 'customerAnalysis',
      //   meta: { title: '消费洞察' },
      //   component: () => import('@/views/customer/Analysis.vue'),
      // },
      // {
      //   path: '/customer/guest-analysis',
      //   name: 'guestAnalysis',
      //   meta: { title: '客群探索' },
      //   component: () => import('@/views/customer/GuestAnalysis.vue'),
      // },
      {
        path: '/customer/StayPoint',
        name: 'StayPoint',
        meta: { title: '驻留点筛选' },
        component: () => import('@/views/customer/StayPoint.vue')
      },
      {
        path: '/customer/location',
        name: 'location',
        meta: { title: '地点筛选' },
        component: () => import('@/views/customer/location.vue')
      }
    ],
  }
  // {
  //   path: '/area',
  //   name: 'area',
  //   meta: { title: '环境业态', submenu: true },
  //   redirect: '/area/poi',
  //   children: [
  //     {
  //       path: '/area/poi',
  //       name: 'areaPoi',
  //       meta: { title: '周边业态' },
  //       component: () => import('@/views/area/Poi.vue'),
  //     },
  //     {
  //       path: '/area/feature',
  //       name: 'areaFeature',
  //       meta: { title: '地块特征' },
  //       component: () => import('@/views/area/Feature.vue'),
  //     }
  //   ],
  // },
  // {
  //   path: '/transport',
  //   name: 'transport',
  //   meta: { title: '交通路网', submenu: true },
  //   redirect: '/transport/analysis',
  //   children: [
  //     {
  //       path: '/transport/analysis',
  //       name: 'transportAnalysis',
  //       meta: { title: '交通便捷' },
  //       component: () => import('@/views/transport/Analysis.vue'),
  //     }
  //   ],
  // },
  // {
  //   path: '/pop',
  //   name: 'pop',
  //   meta: { title: '人口热力' },
  //   redirect: '/pop/heat',
  //   children: [
  //     {
  //       path: '/pop/heat',
  //       name: 'popHeat',
  //       component: () => import('@/views/pop/Heat.vue'),
  //     }
  //   ],
  // },
  // {
  //   path: '/product',
  //   name: 'product',
  //   meta: { title: '商业产品', submenu: true },
  //   redirect: '/product/recommend',
  //   children: [
  //     {
  //       path: '/product/recommend',
  //       name: '智能选址',
  //       component: () => import('@/views/production/Recommend.vue'),
  //     }
  //   ],
  // },
  // {
  //   path: '/community',
  //   name: 'community',
  //   redirect: '/community/',
  //   meta: { title: '社区产品' },
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/community/index.vue'),
  //     }
  //   ],
  // },
  // {
  //   path: '/bjconsume',
  //   name: 'bjconsume',
  //   redirect: '/bjconsume/',
  //   meta: { title: '城市消费驾仓' },
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/bjconsume/index.vue'),
  //     }
  //   ],
  // }
];

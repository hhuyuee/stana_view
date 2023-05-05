import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout';
import { routes } from './sideBarRoutes';

// router lazy load
Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/customer/StayPoint',
      name: 'StayPoint',
      meta: { title: '驻留点筛选' },
      component: () => import('@/views/customer/StayPoint.vue'),
      children: [
        {
          path: '/customer/StayPoint',
          name: 'StayPoint',
          meta: { title: '驻留点筛选' },
          component: () => import('@/views/customer/StayPoint.vue')
        },
        // {
        //   path: '/user/select-city',
        //   name: 'citySelect',
        //   component: () => import('@/views/CitySelect.vue')
        // },
        
      ]
    },
    ...routes.map(route => ({
      ...route,
      component: Layout
    })),
    {
      path: '*',
      redirect: '/customer/StayPoint'
    }
  ]
});

// 根据当前指标修改页面title
// TODO: 还无法兼容一级菜单
router.afterEach(({ meta }) => {
  // document.title = meta.title || '通用驻留点分析平台';
  document.title = '通用驻留点分析平台';
});

export default router;

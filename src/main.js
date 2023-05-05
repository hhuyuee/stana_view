import Vue from 'vue';
import dayjs from 'dayjs';
import '@/plugins/logger';
// import { DEBUG } from '@/config';
import '@/assets/icon';
import '@/directives';
import './theme/index.scss';
import './plugins/element/element.js';
import './plugins/leaflet';
import router from './router';
import store from './store';
import App from './App.vue';
import './mock';
import 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@/plugins/lib/leaflet-mapbox-gl';
// eslint-disable-next-line no-unused-expressions


Vue.prototype.$dayjs = dayjs;
Vue.config.productionTip = false;

Vue.$log.info('vue-eslint launch...');
new Vue({
  router,
  store,
  render(h) {
    return h(App);
  },
  async mounted() {
    this.$log.info('vue-eslint ready...');
  }
}).$mount('#app');

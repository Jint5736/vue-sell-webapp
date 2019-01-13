// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller.vue';

import './common/stylus/index.styl';

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

const routes = [
      { path: '/goods', component: goods },
      { path: '/ratings', component: ratings },
      { path: '/seller', component: seller }
];

const router = new VueRouter({
  'linkActiveClass': 'active',
  routes
});
let app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// router.push('/goods');
export default app;

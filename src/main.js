import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import init from './app.init';
import '@/common/style/theme-variables.less';
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout';

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.component('pro-layout', ProLayout);
Vue.component('page-container', PageHeaderWrapper);
Vue.component('page-header-wrapper', PageHeaderWrapper);

init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

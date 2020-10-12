import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import init from './app.init';
import '@/common/style/theme-variables.less';

Vue.config.productionTip = false;

Vue.use(Antd);

init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

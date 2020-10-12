import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/login/Login.vue';
import Page from '@/views/test/Page.vue';
import store from '@/store';
import http from '@/utils/http';
import axios from 'axios';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/test/page',
    component: Page
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// 获取当前用户信息
async function getCurrent() {
  let data = await http.get('api/v1/current');
  store.commit('updateUser', {
    permissions: data.permissions,
    userId: data.userId
  });
}

router.beforeEach(async (to, from, next) => {
  // 当前用户信息
  const user = store.getters.user;
  let hasCurrent = !!user.userId;

  // 白名单，只允许不登录时候访问
  let whiteRouteList = ['/login'];
  if (whiteRouteList.indexOf(to.path) !== -1) {
    if (!hasCurrent) {
      next();
    } else {
      // 禁止登录状态下访问login页面
      next({ path: '/' });
    }
    return;
  }

  // 没登录或者刷新时候清除了vuex
  if (!hasCurrent) {
    const token = localStorage.getItem('token');
    if (!token) {
      next('login');
      return;
    } else {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    await getCurrent();
    next();
  }

  next();
});

export default router;

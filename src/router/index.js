import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/login/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// 获取当前用户信息
async function getCurrent() {
  try {
    let response = await http.get(getCurrentUserUrl, {});
    store.commit('updateUser', response.admin);
    return;
  } catch (error) {
    throw new Error('ERR_GET_CURRENT: ');
  }
}

router.beforeEach(async (to, from, next) => {
  // 当前用户信息
  // const currentUser = store.getters.currentUser;

  // // 白名单，允许不登录访问
  // let whiteRouteList = [
  //   '/login',
  //   '/read',
  //   '/merchants/apply-for',
  //   '/qrPay4Order',
  //   '/qrPay4Oauth',
  //   '/qrPay4Code',
  //   '/merchants/qua',
  //   '/site/single-page'
  // ];

  // let hasCurrentUserInfo = !!currentUser.id;

  // // 没登录或者刷新时候清除了vuex
  // if (!hasCurrentUserInfo) {
  //   try {
  //     await getCurrent();
  //     await getAuth();
  //     /**
  //      * 走到这里说明是登录成功的
  //      */
  //     // 如果目标指向登录页, 跳转到主页
  //     if (to.path === '/login') {
  //       next({ path: '/' });
  //       return;
  //     }
  //     // 更新左侧菜单
  //     store.commit('Menu/updateRoutes', { routes: sideList[to.path.split('/')[1]] });
  //     // 更新激活路由
  //     store.commit('Menu/updateActivePath', { activePath: to.fullPath });
  //     next();
  //     return;
  //   } catch (error) {
  //     /**
  //      * 未登录, getCurrent会失败
  //      */
  //     console.warn('未登录');
  //     if (whiteRouteList.indexOf(to.path) !== -1) {
  //       next();
  //       return;
  //     }
  //     next({ path: '/login' });
  //     return;
  //   }
  // } else {
  //   /**
  //    * 已登录
  //    */
  //   // 防止登录后进入login页
  //   if (to.path === '/login') {
  //     next({ path: '/' });
  //     return;
  //   } else {
  //     /**
  //      * 这里是绝大部分的应用场景，通过顶级功能模块或者左侧菜单点击进入
  //      */
  //     // 路由为空或者根路由
  //     if (!store.getters['Menu/routes'][0] || to.path === '/') {
  //       // 更新左侧菜单
  //       store.commit('Menu/updateRoutes', { routes: sideList[to.path.split('/')[1]] });
  //     }
  //     // 更新激活路由
  //     store.commit('Menu/updateActivePath', { activePath: to.fullPath });
  //   }
  // }
  // 无论怎样都要进入下一页面
  next();
});

export default router;

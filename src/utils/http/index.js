import axios from 'axios';
import store from '@/store';
import router from '@/router';

// 拦截器
axios.interceptors.response.use(
  response => {
    const data = response.data;
    // 根据返回的code值来做不同的处理（和后端的私有约定）
    switch (data.code) {
      case '200':
        return data.data;
      default:
    }
    // 若不是正确的返回code，且已经登录，就抛出错误
    let err = new Error();
    err.data = data;
    throw err;
  },
  err => {
    // 这里是返回 http 状态码不为 200和304 时候的错误处理
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误';
          break;

        case 401:
          store.commit('updateUser', {});
          console.log('未登录获登录超时');
          err.message = '未授权，请登录';
          router.replace('/login');
          break;

        case 403:
          err.message = '拒绝访问';
          break;

        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`;
          break;

        case 408:
          err.message = '请求超时';
          break;

        case 500:
          err.message = '服务器内部错误';
          break;

        case 501:
          err.message = '服务未实现';
          break;

        case 502:
          err.message = '网关错误';
          break;

        case 503:
          err.message = '服务不可用';
          break;

        case 504:
          err.message = '网关超时';
          break;

        case 505:
          err.message = 'HTTP版本不受支持';
          break;

        default:
      }
      return Promise.reject(err);
    }
  }
);

export default {
  async get(url, params = {}) {
    return axios.get(url, { params: params });
  },
  async post(url, params = {}) {
    return axios.post(url, params);
  },
  async put(url, params = {}) {
    return axios.put(url, params);
  },
  async delete(url, params = {}) {
    return axios.delete(url, { data: params });
  }
};

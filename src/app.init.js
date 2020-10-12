import Vue from 'vue';
import http from '@/utils/http';
import urls from '@/common/urls';

export default function() {
  Vue.prototype.$http = http;
  Vue.prototype.$urls = urls;
}

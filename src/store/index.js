import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  user: {}
};

export default new Vuex.Store({
  strict: true,
  state,
  actions,
  getters,
  mutations,
  modules: {}
});

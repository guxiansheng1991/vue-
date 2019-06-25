import Vue from 'vue';
import Vuex from 'vuex';
import root from './root';
import home from './modules/home';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    root,
    home
  }
});

export default store;

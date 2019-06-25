import api from '../../api/index';

const state = {
  isLogin: false
};
const getters = {
  isLogin: state => state.isLogin
};
const mutations = {
  changeLoginState (state, data) {
    state.isLogin = data;
  }
};
const actions = {
  login (context, params) {
    // 可做异步请求
    // setTimeout(() => {
    //   // context.state.isLogin = true;
    //   context.commit('changeLoginState', true);
    // }, 2000);

    return new Promise((resolve, reject) => {
      api.ajaxGetMethod(params).then(res => {
        if (true) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

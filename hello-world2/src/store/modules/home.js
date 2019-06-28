const state = {
  pwd: '123456'
}
const getters = {
  pwd: state => state.pwd
}
const mutations = {}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

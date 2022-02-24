import Vue from 'vue'
import Vuex from 'vuex'
// import navigation from './navigation'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    navigation: {
      name: {
        namespaced: true
      },
      state: {
        cutperson: 0,//创建人物
        cutgoods: 0,
        cutscene: 0
      },
      getters: {
      }
    }
  }
})

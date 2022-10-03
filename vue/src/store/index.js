import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      userInfo:{
          userID:'',
          isAdmin: 0,
          name: ''
      }
  },
  getters: {
  },
  mutations: {
    updateUserSelect(state,setOP){
      state.UserSource = setOP
    },
    updateUserMS(state,setS){
      state.UserMultiS = setS
    },
    updateUserTF(state,core){
      state.UserTF = core
    },
  },
  actions: {
  },
  modules: {
  }
})

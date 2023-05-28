import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
        name:"",
        age:"",
        kids:[
          
        ]
    }
  },
  getters: {
    user: s => s.user,
  },
  mutations: {
    SET_USER(state,data) {
      state.user = data
      console.log(state.user) 
    }
  },
  actions: {
  },
  modules: {
  }
})

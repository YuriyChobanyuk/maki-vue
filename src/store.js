import Vue from 'vue'
import Vuex from 'vuex'
import cart from './store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerSearchClassObject: {
      inputClassObject: {
        'search-is-active': false
      },
      buttonClassObject: {
        'submit-btn-is-active': false
      }
    }
  },
  mutations: {
    setHeaderSearchClass(state, classObj){
      state.headerSearchClassObject = classObj;
    }
  },
  actions: {
    changeHeaderSearchClass(store, classObj){
      store.commit('setHeaderSearchClass', classObj);
    }
  },
  getters: {

  },
  modules: {
    cart
  }
})

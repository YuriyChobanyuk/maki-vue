import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: []
  },
  mutations: {
    addToCart(item){
      this.state.cartItems.push(item);
      this.$store.commit('addToCard', item);
    }
  },
  actions: {

  }
})

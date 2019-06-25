import axios from 'axios'
export default {
  actions: {
    async fetchProducts(ctx){
      var path = 'http://localhost:4000/products';
      //var params = `limit=${ctx.state.limit}`; //${this.limit}
      // if(this.$route.query.page){
      //   params = [params, 'page=' + this.$route.query.page].join('&');
      // }
      // if(this.limit){
      //   path = [path, params].join('?');
      // }
      axios.get(path)
      .then(
        (res)=>{
          ctx.commit('updateProducts', res.data.docs)
        }
      )
      .catch(
        (err)=>{
          err.message = 'cant fetch products';
        }
      )
    }
  },
  mutations: {
    updateProducts(state, products){
      state.products = products;
    }
  },
  state: {
    products: []
  },
  getters: {
    allProducts: function(state){
      return state.products;
    }
  }
}

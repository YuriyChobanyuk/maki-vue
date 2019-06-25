export default {
  state: {
    cartItems: []
  },
  mutations: {
    addToCart(state, item){
      var found = false;
      state.cartItems.forEach(function(cartItem){
        if(cartItem.id == item.id){
          cartItem.count += 1;
          found = true;
        }
      })
      if(!found){
        state.cartItems.push(item);
      }
    },
    removeFromCart(state, item){
      state.cartItems.forEach(function(cartItem){
        if(cartItem.id == item.id){
          if(item.count != 0){
            cartItem.count -= 1;
          } else {
            state.cartItems.splice(state.cartItems.indexOf(item), 1);
          }
        }
      })
    }
  },
  actions: {

  },
  getters: {
    getCartItems(state){
      return state.cartItems;
    },
    getProducts(state){
      var result = [];
      state.cartItems.forEach(item => result.push(item.product));
      return result;
    },
    getProductLenght(state){
      var lenght = 0;
      state.cartItems.forEach(item => lenght += item.count);
      return lenght;
    },
    getTotalPrice(state){
      var price = 0;
      state.cartItems.forEach(item => price += +item.product.price * item.count);
      return price.toFixed(2);
    }
  }
}

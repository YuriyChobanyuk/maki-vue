<template lang="pug">
.bucket
  a(href="#").cart-button.m-t-30
    i.sprite-icon-cart.sprite
    |КОРЗИНА
  .headertext
    span
      strong#counter {{cartItemsL}}
      | товаров
    span
      |
      |на сумму
      |
      strong#price {{totalPrice}}
      | руб.
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'CartButton',
  computed: {
    cartItemsL(){
      return this.$store.state.cartItems.length;
    },
    totalPrice(){
      var result = 0;
      this.$store.state.cartItems.forEach(item => result += +item.price)
      return result;
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/headerbtn'
</style>

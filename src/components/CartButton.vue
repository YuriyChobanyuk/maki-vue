<template lang="pug">
.bucket
  router-link(to="order").cart-button.m-t-30
    i.sprite-icon-cart.sprite
    |КОРЗИНА
  .headertext
    span
      strong#counter {{getProductLenght}}
      | товаров
    span
      |
      |на сумму
      |
      strong#price {{getTotalPrice}}
      | руб.
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'CartButton',
  computed: {
    ...mapGetters(['getProductLenght', 'getTotalPrice'])
  }
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/headerbtn'
</style>

<template lang="pug">
.order-list
  .wrapper
    .row
      .cartItem(v-for='item in cartItemsList')
        .cartItem__description {{item.product.description}}
        .cartItem__price {{item.product.price}}
        .minus(@click="removeFromCart(item)")
          span
        .cartItem__count {{item.count}}
        .plus(@click="addToCart(item)")
          span.first
          span.second
  .totalPrice {{total}}
</template>

<script>
import Product from '@/components/Product.vue'
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: "OrderList",
  computed: {
    ...mapGetters({cartItemsList: 'getCartItems', total: 'getTotalPrice'})
  },
  methods: {
    ...mapMutations(['addToCart', 'removeFromCart'])
  }
}
</script>

<style lang="sass" scoped>
.cartItem
  padding: 10px
  border: 1px solid black
  margin-top: 5px
  display: flex
  width: 50%
  justify-content: space-between

  &>div
    padding: 5px
    border: 1px solid red

.minus
  width: 30px
  height: 30px
  background-color: #f66a69
  position: relative
  cursor: pointer
  border: none

  span
    width: 20px
    height: 6px
    background-color: white
    top: calc(50% - 3px)
    left: 4px
    position: absolute

.plus
  width: 30px
  height: 30px
  background-color: #f66a69
  position: relative
  cursor: pointer
  border: none

  span.first
    width: 20px
    height: 6px
    background-color: white
    top: calc(50% - 3px)
    left: 5px
    position: absolute

  span.second
    width: 6px
    height: 20px
    background-color: white
    left: 12px
    top: 4px
    position: absolute

</style>

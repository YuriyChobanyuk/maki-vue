<template lang="pug">
.product.relative.m-b-30
  a(href="#").product__link
    .product__labels
      div(v-for='label in product.labels', :class='classObject(label)')
    .product__image
      img(src='../assets/product-1.png', alt="product image")
    .product__description {{product.description}}
    .product__price {{product.price}}
  .product__button
    a(@click.prevent='addToCart()' href="#" data-price=rndPrice).hover-order
      |ЗАКАЗАТЬ
</template>

<script>
const axios = require('axios');
export default {
  props: {
    product: {
      type: Object,
      default: function(){
        return{
          description: 'default description\n default description\n default description',
          price: 'default price',
          img_path: '../assets/product-2.png',
          labels: ['new', 'hit', 'action']
        }
      }
    }
  },
  name: 'Product',
  data(){
    return{
      animationStyle: 'opacity: 1'
    }
  },
  methods: {
    classObject: function(label){
      var classArray = ['product__modificator'];
      classArray.push('product__modificator_' + label);
      return classArray;
    },
    addToCart: function(){
      this.$store.state.cartItems.push(this.product);
    }
  },
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/product'

.cart-button
  background-image: linear-gradient(to bottom, #ffaaaa, #ffa6a6, #ffa2a2, #ff9e9e, #ff9a9a)
  padding: 9px 18px
  font-family: 'Open Sans', sans-serif
  color: #fff
  font-size: 15px
  display: inline-block
  text-decoration: none
  margin-bottom: 15px
  i
    margin-right: 10px
.hover-order, .hover-send
  padding: 14px 29px
  border: 1px solid #959595
  font-family: 'Open Sans', sans-serif
  font-size: 21px
  color:#333
  transition: ease background-image
  display: inline-block
  text-decoration: none

.hover-order:hover
  background-image: linear-gradient(to bottom, #ffaaaa, #ffa6a6, #ffa2a2, #ff9e9e, #ff9a9a)
  border: none
  color: #fff
  border: 1px solid transparent

</style>

<template lang="pug">
.bucket
  a(href="#").cart-button.m-t-30
    i.sprite-icon-cart.sprite
    |КОРЗИНА
  .headertext
    span
      strong#counter 0
      | товаров
    span
      |
      |на сумму
      |
      strong#price 0
      | руб.
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/headerbtn'
</style>

<template lang="pug">
.top-nav
  -
    var menuItems = ["Доставка", "Оплата", "Гарантии", "Контакты", "Статус заказа"];
  ul
    each item in menuItems
      li
        a(href="#") #{item}
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/top-nav'
</style>

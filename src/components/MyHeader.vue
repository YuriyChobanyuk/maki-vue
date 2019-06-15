<template lang="pug">
header.MyHeader

  .header.m-b-90
    .header__top
      .wrapper
        .row.justify-between
          TopNav
          HeaderSearch
    .header__mid
      .wrapper
        .row
          .column-laptop-1-4
            MainLogo
          .column-phablet-1-1.column-tablet-1-1.column-laptop-1-2.t-center
            HeaderContact
          .column-laptop-1-4
            CartButton
    .header__bottom
      .wrapper
        MenuCard
</template>

<script>
import HeaderSearch from './HeaderSearch.vue';
import MainLogo from './MainLogo.vue';
import MenuCard from './MenuCard.vue';
import HeaderContact from './HeaderContact.vue';
import TopNav from './TopNav.vue';
import CartButton from './CartButton.vue';
export default {
  name: 'MyHeader',
  components: {
    HeaderSearch,
    MainLogo,
    MenuCard,
    HeaderContact,
    TopNav,
    CartButton
  }
}
</script>

<style lang="sass" scoped>

span
  color: #82817f
  font-size: 12px

@import '../sass_chunks/_header'
@import '../sass_chunks/_headerbtn'
@import '../sass_chunks/_menu-opener'
</style>

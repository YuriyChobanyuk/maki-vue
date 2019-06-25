<template lang="pug">
#order
  Breadcrumbs
  MyHeader
  OrderList(:products="cartItems")
  Footer
</template>

<script>
import {mapState} from 'vuex';
import OrderList from '@/components/OrderList.vue';
import MyHeader from '@/components/MyHeader.vue';
import Footer from '@/components/Footer.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
export default {
  name: "Order",
  components: {
    OrderList,
    MyHeader,
    Footer,
    Breadcrumbs
  },
  computed: {
    ...mapState['cartItems'],
  }
}
</script>

<style lang="sass" scoped>
</style>

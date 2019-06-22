<template lang="pug">
.containerDefault
  Breadcrumbs
  MyHeader
  .wrapper
    Catalog(:limit='6', :paginate='true')
  Footer
</template>

<script>
import MyHeader from '../components/MyHeader.vue';
import Footer from '../components/Footer.vue';
import Catalog from '../components/Catalog.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import axios from 'axios';
export default {
  name: 'containerDefault',
  components: {
    MyHeader,
    Footer,
    Catalog,
    Breadcrumbs
  }
}
</script>

<style lang="sass" scoped>

</style>

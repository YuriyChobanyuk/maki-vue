<template lang="pug">
#news-page
  Breadcrumbs
  MyHeader
  ArticleListing(:limit='6', :paginate='true')
  Footer
</template>

<script>
import ArticleListing from '@/components/ArticleListing.vue';
import MyHeader from '@/components/MyHeader.vue';
import Footer from '@/components/Footer.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
export default {
  components: {
    ArticleListing,
    MyHeader,
    Footer,
    Breadcrumbs
  }
}
</script>

<style lang="css" scoped>
</style>

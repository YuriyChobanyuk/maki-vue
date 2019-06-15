<template lang="pug">
#news-page
  MyHeader
  ArticleListing(:limit='6', :paginate='true')
  Footer
</template>

<script>
import ArticleListing from '@/components/ArticleListing.vue';
import MyHeader from '@/components/MyHeader.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    ArticleListing,
    MyHeader,
    Footer
  }
}
</script>

<style lang="css" scoped>
</style>

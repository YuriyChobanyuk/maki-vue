<template lang="pug">
.about
  Breadcrumbs
  MyHeader
  h1(v-on:click="getAlert") This is an about page
  Footer
</template>

<script>
import MyHeader from '../components/MyHeader.vue';
import Footer from '../components/Footer.vue';
import Breadcrumbs from '../components/Breadcrumbs.vue';
export default {
  components: {
    MyHeader,
    Footer,
    Breadcrumbs
  },
  methods: {
    getAlert: function(){
      alert('clicked');
    }
  }
}
</script>

<style lang='css' scoped>

</style>

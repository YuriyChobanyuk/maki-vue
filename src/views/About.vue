<template lang="pug">
.about
  MyHeader
  h1(v-on:click="getAlert") This is an about page
  Footer
</template>

<script>
import MyHeader from '../components/MyHeader.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {
    MyHeader,
    Footer
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

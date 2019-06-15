<template lang="pug">
.containerDefault
  MyHeader
  Footer
</template>

<script>
import MyHeader from '../components/MyHeader.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
export default {
  name: 'containerDefault',
  components: {
    MyHeader,
    Footer
  },
  data(){
    return {
      products: []
    }
  },
  methods: {
    getProducts(){
      axios.get('http://localhost:4000/products')
      .then(
        (res)=>{
          this.products = res.data.docs;
          console.log(res.data.docs[0]);
        }
      )
      .catch(
        (err)=>{
          console.log(err);
        }
      )
    }
  },
  mounted(){
    this.getProducts()
  }
}
</script>

<style lang="sass" scoped>

</style>

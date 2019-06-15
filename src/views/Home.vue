<template lang='pug'>
.home
  MyHeader
  .wrapper
    Catalog(:limit='6', :paginate='true')
  .wrapper
    .row
      .column-phablet-1-2.column-phablet-1-3.m-b-30(v-for='item in news')
        Article(:info='item')
  Footer
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Catalog from '@/components/Catalog.vue';
import MyHeader from '@/components/MyHeader.vue';
import Article from '@/components/Article.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'home',
  components: {
    Catalog,
    MyHeader,
    Article,
    Footer
  },
  data(){
    return{
      news: []
    }
  },
  mounted: function(){
    axios.get('http://localhost:4000/articles')
    .then(
      (res)=>{
        this.news = res.data.docs;
      }
    )
    .catch(
      (err)=>{
        console.log(err);
      }
    )
  }
}
</script>

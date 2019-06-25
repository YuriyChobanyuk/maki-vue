<template lang='pug'>
.home
  Breadcrumbs
  MyHeader
  .wrapper
    .row
      .column-laptop-3-4
        Catalog(:limit='6', :paginate='true')
      .column-laptop-1-4
        Sidebar
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
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Sidebar from '@/components/Sidebar.vue';
export default {
  name: 'home',
  components: {
    Catalog,
    MyHeader,
    Article,
    Footer,
    Breadcrumbs,
    Sidebar
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

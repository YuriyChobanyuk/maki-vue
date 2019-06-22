<template lang="pug">
.article-listing
  .wrapper
    .row
      .column-phablet-1-2.column-phablet-1-3.m-b-30(v-for='item in news')
        Article(:info='item')
    Pagination(v-if='paginate', :pagination='{page: page, pages: pages, path: "/news"}')
</template>

<script>
import Article from './Article.vue';
import Pagination from '@/components/Pagination.vue';
import axios from 'axios';
export default {
  props: ['limit', 'paginate'],
  components: {
    Article,
    Pagination
  },
  data(){
    return{
      page: 1,
      pages: 0,
      news: []
    }
  },
  methods:{
    getNews: function(){
      var path = 'http://localhost:4000/articles';
      var params = `limit=1`; //${this.limit}
      if(this.$route.query.page){
        params = [params, 'page=' + this.$route.query.page].join('&');
      }
      if(this.limit){
        path = [path, params].join('?');
      }

      axios.get(path)
      .then(
        (res)=>{
          this.news = res.data.docs;
          this.page = res.data.page;
          this.pages = res.data.totalPages;
        }
      )
      .catch(
        (err)=>{
          console.log(err);
        }
      )
    }
  },
  watch:{
    $route: function(){
      this.getNews();
    }
  },
  mounted: function(){
    this.getNews();
  }
}
</script>

<style lang="css" scoped>
</style>

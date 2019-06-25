<template lang="pug">
.catalog
  .row.m-b-20
    .column-laptop-1-3.column-tablet-1-2.bottom-line.m-b-50(v-for='prod in products')
      Product(:product='prod')
    .column.top-line-remove
  Pagination(v-if='paginate', :pagination='{page: page, pages: pages, path: pagePath}')
</template>

<script>
import Product from '@/components/Product.vue';
import Pagination from '@/components/Pagination.vue';
import axios from 'axios';
export default {
  name: 'Catalog',
  props: ['limit', 'paginate'],
  components: {
    Product,
    Pagination
  },
  data(){
    return {
      page: 1,
      pages: 0,
      products: [],
      pagePath: this.$router.history.current.path
    }
  },
  methods: {
    getProducts: function(){
      var path = 'http://localhost:4000/products';
      var params = `limit=${this.limit}`; //${this.limit}
      if(this.$route.query.page){
        params = [params, 'page=' + this.$route.query.page].join('&');
      }
      if(this.limit){
        path = [path, params].join('?');
      }
      axios.get(path)
      .then(
        (res)=>{
          this.products = res.data.docs;
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
  mounted: function(){
    this.getProducts();
  },
  watch: {
    $route: function(){
      this.getProducts();
    }
  }
}
</script>

<style lang="sass" scoped>
.top-line-remove
  height: 1px
  margin-top: -51px
  background-color: white

.relative
  position: relative

.bottom-line
  border-bottom: 1px solid #f0f0f0

.m-b-50
  margin-bottom: 50px
</style>

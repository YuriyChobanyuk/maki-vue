<template lang="pug">
.full-article
  Breadcrumbs
  MyHeader
  Article(:info='article')
  Footer
</template>

<script>
import axios from 'axios';
import MyHeader from '@/components/MyHeader.vue';
import Footer from '@/components/Footer.vue';
import Article from '@/components/Article.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
export default {
  name: 'FullArticle',
  components: {
    MyHeader,
    Footer,
    Article,
    Breadcrumbs
  },
  data(){
    return{
      article:{

      }
    }
  },
  mounted: function(){
    let id = this.$route.params.id;
    console.log(id);
    axios.get('http://localhost:4000/articles/' + id)
    .then(
      (res) => {
        this.article = res.data;
      }
    )
    .catch(
      (err) => {

      }
    )
  }
}
</script>

<style lang="css" scoped>
</style>

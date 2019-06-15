<template lang="pug">
.news-item
  .news-item__img
    img(src="../assets/news/1.png")
    .img-hover
      .img-hover__center
        router-link(:to='"/news/" + info._id')
          span Читать..."
  .news-item__date
    span {{info.pub_date | formatDate}}
  .news-item__text
    .title.title_2 {{info.title}}
</template>

<script>
import axios from 'axios';
export default {
  name: 'Article',
  props: {
    'info': {
      type: Object,
      default: function(){
        return {
          pub_date: Date.now(),
          title: "default title"
        }
      }
    }
  },


  // data(){
  //   return{
  //     text: this.info.text,
  //     date: this.info.date
  //   }
  // }
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/news'
</style>

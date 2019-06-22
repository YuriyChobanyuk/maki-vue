<template lang="pug">
ul.pagination.m-b-90
  li(v-for='index in pagination.pages', :key='index' @click='setActivePoint')
    router-link(:to='{path: pagination.path, query: {page: index}}') {{index}}
    span(v-if='checkCurrent(index)').active {{index}}
    span(v-else) {{index}}
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    setActivePoint: function(event){
      var pugItems = this.$el.querySelectorAll('li span');
      for(let item of pugItems){
        item.classList.remove('active');
      }
      var pugItem = event.target.parentElement.childNodes[1];
      pugItem.classList.add('active');
    },
    checkCurrent: function(index){
      if(this.$route.query.page){
        if(this.$route.query.page == index){
          return true;
        }
      } else if(index == 1) {
        return true;
      } else return false;
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/pagination'
</style>

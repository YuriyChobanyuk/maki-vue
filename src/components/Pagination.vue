<template lang="pug">
ul.pagination.m-b-90
  li(v-for='index in pagination.pages', :key='index')
    router-link(:to='{path: pagination.path, query: {page: index}}') {{index}}
</template>

<script>
export default {
  props: ['pagination'],
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/pagination'
</style>

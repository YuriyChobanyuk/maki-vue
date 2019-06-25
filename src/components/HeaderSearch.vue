<template lang="pug">
.header-search
  form(action="#")
    input(type="search" name="header-search", :class="inputClassObject").header-search-input
    .header-search-button(@click='searchButtonListen' :class='buttonClassObject')
      img(src="../assets/search-button-temp.png" alt='temp-search')
    button(name="header-submit" type="submit" @submit.prevent).header-submit-button
      img(src="../assets/search-button-temp.png" alt='temp-search')
</template>

<script>
export default {
  name: 'HeaderSearch',
  props: {
    classObject: {
      type: Object
    }
  },
  data(){
    return{
      inputClassObject: this.$store.state.headerSearchClassObject.inputClassObject,
      buttonClassObject: this.$store.state.headerSearchClassObject.buttonClassObject
    }
  },
  methods: {
    searchButtonListen: function(){
      this.$store.state.headerSearchClassObject.inputClassObject['search-is-active'] = true;
      this.$store.state.headerSearchClassObject.buttonClassObject['submit-btn-is-active'] = true;
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/_header-search'
</style>

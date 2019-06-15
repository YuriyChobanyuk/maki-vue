<template lang="pug">
.header-search
  form(action="#")
    input(type="search" name="header-search", :class="inputClassObject").header-search-input
    .header-search-button(@click="searchButtonListen", :class='buttonClassObject')
      img(src="../assets/search-button-temp.png" alt='temp-search')
    button(name="header-submit" type="submit" @submit.prevent).header-submit-button
      img(src="../assets/search-button-temp.png" alt='temp-search')
</template>

<script>
export default {
  name: 'HeaderSearch',
  props: {
    classObject: {
      type: Object,
      default: function(){
        return {
          inputClassObject: {
            'search-is-active': false
          },
          buttonClassObject: {
            'submit-btn-is-active': false
          }
        }
      }
    }
  },
  data(){
    return{
      inputClassObject: {
        'search-is-active': false
      },
      buttonClassObject: {
        'submit-btn-is-active': false
      }
    }
  },
  methods: {
    searchButtonListen: function(){
      var headerSearchInput = document.querySelector('.header-search-input');
      var headerSearchButton = document.querySelector('.header-search-button');
      headerSearchButton.classList.add('submit-btn-is-active');
      headerSearchInput.classList.add('search-is-active');
      // this.inputClassObject['search-is-active'] = true;
      // this.buttonClassObject['submit-btn-is-active'] = true;
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/_header-search'
</style>

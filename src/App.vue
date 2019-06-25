<template lang='pug'>
  #app(@click='removeClasses')
    #nav
      router-link(to='/') Home
      router-link(to='/about') About
      router-link(to="/products") Product
      router-link(to='/news') News
    router-view
</template>

<script>
export default {
  methods: {
    checkTarget: function(nodelist, target){
      var result = [].every.call(nodelist, function(item){
        return item != target;
      });
      return result;
    },

    removeClasses: function(e){
      var headerSearchComponent = document.querySelector('.header-search');
      var headerSearchChildrens = headerSearchComponent.getElementsByTagName('*');
      if(e.target != headerSearchComponent && this.checkTarget(headerSearchChildrens, e.target)){
        this.$store.state.headerSearchClassObject.inputClassObject['search-is-active'] = false;
        this.$store.state.headerSearchClassObject.buttonClassObject['submit-btn-is-active'] = false;
      }
    }
  }
}
</script>
<style lang='sass'>
@import './sass_chunks/vars'
@import './sass_chunks/mixins'
@import './sass_chunks/buttons'

*
  margin: 0
  padding: 0
  box-sizing: border-box


@import './sass_chunks/grid'
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: flex;
  justify-content: center;
  margin: 10px 0px 10px 0px;
}

#nav a{
  padding: 10px;
  border: 1px solid #c72f45;
  margin: 0px 10px;
  text-decoration: none;
  color: black;
  position: relative;
}
#nav a::before{
  content: '';
  width: calc(100% + 1px);
  height: 0px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transition: width 2s, height 0.25s;
  transition: width 2s, height 0.25s;
  background-color: rgba(209, 66, 88, 0.5);
}

#nav a:hover::before{
  height: calc(100% + 1px);
}
</style>

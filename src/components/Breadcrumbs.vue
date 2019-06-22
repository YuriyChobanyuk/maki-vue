<template lang="pug">
#breadcrumb
  ul(:pathMass='pathMass')
    li(v-for='item, index in pathMass')
      span(v-if='index == pathMassLeng') {{nameMass[index]}}
      router-link(v-else, :to='pathMass[index]') {{nameMass[index]}}
</template>

<script>
export default {
  data(){
    return{
      pathMass: [],
      nameMass: [],
      pathNameValue: '',
      pathMassLeng: 0
    }
  },
  methods: {
    detect: function(){
      this.nameMass = this.$router.history.current.path.split('/');
      this.pathMass = this.$router.history.current.path.split('/');
      if(!this.pathMass[this.pathMass.length - 1]){
        this.pathMass.shift();
        this.nameMass.shift();
      }
      this.pathMass.forEach((item, index, mass) => mass[index] = '/' + item);
      this.nameMass[0] = 'home';
      this.pathMassLeng = this.pathMass.length - 1;
    }
  },
  mounted: function(){
    this.detect();
  },
  beforeRouterUpdate: function(){
    this.detect();
  }
}
</script>

<style lang="sass" scoped>
#breadcrumb
  ul
    display: flex
    flex-direction: row
    margin-left: 30px
    list-style-type: none

    li
      border: 1px solid #ffad09
      padding: 5px
      margin-right: 10px

      &>*
        text-decoration: none
        display: block

</style>

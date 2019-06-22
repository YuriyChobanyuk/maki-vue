<template lang="pug">
.main-logo.m-t-30
  router-link(to='/')
    img(src="../assets/main-logo.png", alt="main-logo")
  span Интернет-магазин цветов
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/main-logo'
</style>

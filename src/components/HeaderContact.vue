<template lang="pug">
.header-contact.m-t-30
  span г. Челябинск,
  |ул. Воровского, 30А
  .header-contact__mail
    span e-mail:
    a(href="mailto:someone@example.com?Subject=Hello%20again" target="_top")
      span buket@mail.ru
  .header-contact__phone
    a(href="tel:(499) 943-20-94 ")
      i(class="fas fa-phone")
      span.cod 8(351)
      span 567 21 46
</template>

<script>
export default {
  name: 'HeaderContact'
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/_header-contact'
</style>

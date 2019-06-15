<template lang="pug">
.menu-card
  mixin card(item)
    a.card(class=item.mod?"card_"+item.mod:'' href="#")
      picture

        img(src="../assets/"+item.img alt="card img")
      .card__title=item.title
  -;
  -
    var cards = [
      'Букеты',
      'Цветы',
      'Розы',
      'Композиции',
      'Подарки',
      'Свадебные букеты'
        ]
  each item, index in cards
    -var num = index + 1
    +card({title: item, img: 'card'+num+'.png'})
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/_menu-card'
</style>

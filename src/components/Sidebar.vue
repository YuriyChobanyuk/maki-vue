<template lang="pug">
.sidebar
  .filter__button.m-b-30
  .filter
    .row
      section.column-phablet-1.column-laptop-1.m-b-40
        .title.title_2 Стоимость
        .range-slider
          input.range-slider__input.js-range-slider(type='text' name='my_range' value='')
          .range-slider__prices
            span.price-from 1000 руб.
            span.price-to 10000 руб.
      section.column-phablet-1-2.column-laptop-1.m-b-40
        .title.title_2.m-b-20 Букети с
        .row
          .column-1-2.m-b-10(v-for='item in makiWith')
            label.checkbox
              input(type="checkbox" :id="item.id" :name="item.id" :checked="item.status")
              span {{item.title}}
              span.checkmark

      section.column-phablet-1-2.column-laptop-1.m-b-40

        .title.title_2.m-b-20 Кому
        .row
          .column-1-2.m-b-10(v-for='item in makiWho')
            label.checkbox
              input(type="checkbox" :id="item.id" :name="item.id" :checked="item.status")
              span {{item.title}}
              span.checkmark
  .row
    section.column-phablet-1-2.column-laptop-1
      .title.title_2.m-b-20 Поиск
      div(class='search is-active')
        form.search__form
          input(type="search" name="search" placeholder="Что вы ищите?")
          button(type="submit")
            .btn-search
        button
      .m-b-40
</template>

<script>
export default {
  name: 'Sidebar',
  data(){
    return{
      makiWho: [
        {
          title: 'Мужчина',
          id: 'man',
          status: 'checked'
        },
        {
          title: 'Ребенок',
          id: 'child',
          status: 'checked'
        },
        {
          title: 'Женщина',
          id: 'woman'
        },
        {
          title: 'Семья',
          id: 'family'
        }
      ],
      makiWith: [
        {
          title: 'Роза',
          id: 'rose',
          status: 'checked'
        },
        {
          title: 'Орхидея',
          id: 'orch'
        },
        {
          title: 'Лилия',
          id: 'Lily'
        },
        {
          title: 'Гербер',
          id: 'gerber',
          status: 'checked'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/sidebar'
@import '../sass_chunks/checkbox'
@import '../sass_chunks/title'
@import '../sass_chunks/search'
@import '../sass_chunks/rangeSlider'
</style>

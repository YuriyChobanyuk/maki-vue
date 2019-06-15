<template lang="pug">
footer.footer
  .footer__top
    .wrapper
      .flex-container
        -
          var links = [["О магазине", "Почему мы?", "Отзывы", "Скидки"],
                        ["Гарантии", "Возврат денежных средств" ,"Корпоративные букеты", "и подарки"],
                        ["Доставка", "Доставка в праздничные дни", "Спецпредложения", "к праздникам"]];
        each block in links
          .links-block.m-r-140
            each item in block
              a(href="#").links-block__link #{item}
  .footer__bottom
    .wrapper
      .flex-container.justify-between.base-line
        .copyright
          |Служба доставки цветов  &copy;    2016
        .contacts
          .contacts__phone.m-r-10
            a(href="tel:83515672146")
              i.fas.fa-phone
              |8 (351)
              span
                |567 21 46
          .contacts__mail
            a(href="email:buket@mail.ru")
              i.fas.fa-envelope
              |e-mail: buket@mail.ru
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import '../sass_chunks/footer'
</style>

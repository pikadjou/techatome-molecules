# `<ta-swiper>` — `SwiperComponent`
**Quand l'utiliser** : Carousel natif basé sur Swiper.js pour contenus défilables.
**Template canonique** :
```html
<ta-swiper>
  <swiper-container>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
  </swiper-container>
</ta-swiper>
```
**Notes** : Pas d'inputs Angular. Utilise `CUSTOM_ELEMENTS_SCHEMA` et `ViewEncapsulation.None`. Pour un carousel léger en mobile uniquement, préférer `<ta-swiper-light>`.

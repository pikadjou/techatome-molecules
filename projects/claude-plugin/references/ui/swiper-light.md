# `<ta-swiper-light>` — `SwiperLightComponent`
**Quand l'utiliser** : Carousel horizontal scrollable sur mobile, layout grille sur desktop (adaptatif automatique).
**Template canonique** :
```html
<ng-template #itemTpl let-item>
  <ta-card>{{ item.name }}</ta-card>
</ng-template>

<ta-swiper-light
  [items]="myItems"
  [template]="itemTpl"
  [swiperClasses]="'g-space-sm'"
  [containerClasses]="'grid'"
/>
```
**Inputs** :
- `items` (required) : `any[]`
- `template` (required) : `TemplateRef<any>` — template de rendu pour chaque item
- `swiperClasses` : `string` — classes CSS en mode swiper mobile (`'g-space-sm'` par défaut)
- `containerClasses` : `string | undefined` — classes CSS en mode desktop
- `forced` : `boolean` — `false` — forcer le mode swiper même sur desktop

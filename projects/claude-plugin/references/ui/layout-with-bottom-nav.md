# `<ta-layout-with-bottom-nav>` — `LayoutWithBottomNavComponent`
**Quand l'utiliser** : Layout pour mobile avec barre de navigation fixe en bas.
**Template canonique** :
```html
<ta-layout-with-bottom-nav [type]="'main'">
  <div #bottomNavContainer>
    <!-- navigation bottom (onglets mobile) -->
  </div>
  <div #bottomLayoutContainer>
    <!-- contenu de la page -->
  </div>
</ta-layout-with-bottom-nav>
```
**Inputs** :
- `type` (required) : `string` — identifiant du type de layout

**Notes** : Extend `TaBaseComponent`. Ajuste le padding du contenu selon la hauteur de la barre de navigation.

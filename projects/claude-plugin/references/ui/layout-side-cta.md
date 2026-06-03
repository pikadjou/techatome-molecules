# `<ta-layout-side-cta>` — `LayoutSideCtaComponent`
**Quand l'utiliser** : Zone d'actions fixe en bas du panneau latéral.
**Template canonique** :
```html
<ta-layout-side-cta [background]="true" [rounded]="false">
  <ta-button (action)="save()">Enregistrer</ta-button>
</ta-layout-side-cta>
```
**Inputs** :
- `background` : `boolean` — `true` (défaut) — fond coloré
- `rounded` : `boolean` — `false` (défaut) — coins arrondis

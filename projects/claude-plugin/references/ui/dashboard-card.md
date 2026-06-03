# `<ta-dashboard-card>` — `DashboardCardComponent`
**Quand l'utiliser** : Carte de tableau de bord avec icône, titre et valeur (KPI, statistique).
**Template canonique** :
```html
<ta-dashboard-card [icon]="'groups'">
  <ta-title [level]="4">150</ta-title>
  <ta-text [size]="'sm'">Utilisateurs actifs</ta-text>
</ta-dashboard-card>
```
**Inputs** :
- `icon` (required) : `string` — icône Material affichée dans la carte

**Notes** : Sélecteur réel : `ta-dashboard-card` (pas `ta-dashboard`). Wrap `<ta-card>` + `<ta-card-content>`.

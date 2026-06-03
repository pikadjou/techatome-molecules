# `<ta-sale>` — `SaleComponent`
**Quand l'utiliser** : Affiche les CGU/conditions générales depuis Strapi avec une checkbox d'acceptation.
**Template canonique** :
```html
<ta-sale (acceptation)="onCguAccepted($event)"></ta-sale>
```
**Outputs** :
- `acceptation: boolean` — émet `true`/`false` quand l'utilisateur coche/décoche la checkbox

**Notes** : Charge automatiquement le contenu de vente via `TaSaleService`. Utilise `TENANT_CONFIG_TOKEN` pour le tenantId. La clé i18n de la checkbox est `strapi.sale.cguAcceptation`.

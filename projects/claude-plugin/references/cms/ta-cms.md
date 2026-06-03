# `<ta-cms>` — `CmsComponent`
**Quand l'utiliser** : Affiche un contenu CMS Strapi par type (texte riche, titre, etc.) avec états loading/error/empty.
**Template canonique** :
```html
<ta-cms [contentType]="'homepage-banner'"></ta-cms>
```
**Inputs** :
- `contentType: string` (required) — identifiant du type de contenu Strapi

**Notes** : Charge automatiquement le contenu via `TaCmsService.fetchCmsContents$()`. Utilise `TENANT_CONFIG_TOKEN` pour le tenantId. Affiche `<ta-loader>`, `<ta-error>`, `<ta-empty>` selon l'état.

# `<ta-banner>` — `BannerComponent`
**Quand l'utiliser** : Bandeau d'information ou d'alerte pleine largeur en haut de page.
**Template canonique** :
```html
<ta-banner [message]="'ui.maintenance.message'" />
```
**Inputs** :
- `message` (required) : `string` — clé i18n ou texte direct

**Notes** : Extend `TaBaseComponent`. Le message est traduit automatiquement via `TranslatePipe`.

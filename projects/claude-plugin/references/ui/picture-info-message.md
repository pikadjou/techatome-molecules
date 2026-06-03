# `<ta-picture-info-message>` — `PictureInfoMessageComponent`
**Quand l'utiliser** : Message d'information illustré avec une icône grande et un texte centré (état vide illustré, conseil).
**Template canonique** :
```html
<ta-picture-info-message
  [icon]="TaIconType.InfoCircle"
  [text]="'ui.help.tip'"
  [type]="'info'"
  [iconSize]="'xl'"
/>
```
**Inputs** :
- `icon` : `TaIconType | string | undefined` — icône Material ou locale
- `iconSize` : `TaSizes | 'xl' | undefined`
- `text` : `string | undefined` — clé i18n ou texte direct
- `type` : `MessageLevel | undefined` — `'info'` (défaut) | `'success'` | `'warning'` | `'danger'`

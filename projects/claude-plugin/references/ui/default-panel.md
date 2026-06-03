# `<ta-default-panel>` — `TaDefaultPanelComponent`
**Quand l'utiliser** : Panel générique utilisé en interne par `<ta-overlay-panel>`. Rarement utilisé directement.
**Template canonique** :
```html
<ta-default-panel [template]="myTemplate" />
```
**Inputs** :
- `template` : `TemplateRef<any> | undefined`

**Notes** : Reçoit aussi `MENU_TEMPLATE` et `MENU_MAX_HEIGHT` via injection DI (depuis `OverlayService`).

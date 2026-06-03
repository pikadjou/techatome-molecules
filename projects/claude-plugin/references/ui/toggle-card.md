# `<ta-toggle-card>` — `ToggleCardComponent`
**Quand l'utiliser** : Carte cliquable avec état actif/inactif (sélection d'option, paramètre on/off).
**Template canonique** :
```html
<ta-toggle-card
  [title]="'Notifications'"
  [description]="'Recevoir les alertes par email'"
  [icon]="'notifications'"
  [isActive]="settings.notifEnabled"
  [disabled]="false"
  (toggle)="onToggle($event)"
/>
```
**Inputs** :
- `title` : `string` — `''` par défaut
- `description` : `string | undefined`
- `icon` : `string | undefined` — icône Material
- `isActive` : `boolean` — `false` par défaut
- `disabled` : `boolean` — `false` par défaut

**Outputs** : `(toggle)` : `boolean` — nouvelle valeur active.

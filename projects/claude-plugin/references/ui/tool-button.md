# `<ta-button-tool>` — `ButtonToolComponent`
**Quand l'utiliser** : Bouton icône compact pour les actions secondaires (toolbar, actions de ligne).
**Template canonique** :
```html
<ta-button-tool [icon]="'edit'" [size]="'md'" (action)="onEdit()" />
<ta-button-tool [icon]="'delete'" [state]="'disabled'" [readonly]="true" />
```
**Inputs** :
- `icon` : `string | null`
- `size` : `TaSizes` — `'md'` (défaut)
- `state` : `TaState` — `'classic'` (défaut) | `'loading'` | `'disabled'`
- `type` : `'primary'` (défaut)
- `readonly` : `boolean` — `false` (défaut)
- `stopPropagationActivation` : `boolean` — `true` (défaut)

**Outputs** : `(action)` — émis uniquement si `state === 'classic'`.

**Notes** : Sélecteur réel : `ta-button-tool` (pas `ta-tool-button`).

# `<ta-button>` — `ButtonComponent`
**Quand l'utiliser** : Bouton principal d'action — CTA, validation, navigation.
**Template canonique** :
```html
<ta-button [type]="'primary'" [size]="'medium'" (action)="onSave()">
  Enregistrer
</ta-button>
<ta-button [type]="'secondary'" [icon]="'add'" (action)="onCreate()">
  Créer
</ta-button>
<ta-button [type]="'danger'" [state]="'loading'" (action)="onDelete()">
  Supprimer
</ta-button>
```
**Inputs** :
- `type` : `'primary'` (défaut) | `'secondary'` | `'tertiary'` | `'danger'`
- `size` : `'small'` | `'medium'` (défaut) | `'large'`
- `state` : `TaState` — `'classic'` (défaut) | `'loading'` | `'disabled'`
- `icon` : `string | null` — icône Material
- `options` : `{ class?, circular?, border? }` — personnalisation avancée
- `stopPropagationActivation` : `boolean` — `true` (défaut)

**Outputs** : `(action)` — émis uniquement si `state === 'classic'`.

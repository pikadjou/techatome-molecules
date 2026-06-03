# `<ta-action-button>` — `ActionButtonComponent`
**Quand l'utiliser** : Bouton flottant avec 1 ou plusieurs actions (FAB avec menu déroulant).
**Template canonique** :
```html
<ta-action-button [actions]="actions" />
```
**Setup TypeScript** :
```typescript
import { ActionButtonData } from '@ta/ui';

actions: ActionButtonData[] = [
  { icon: TaIconType.Add, label: 'Créer', callback: () => this.create() },
  { icon: 'edit', label: 'Modifier', callback: () => this.edit() },
];
```
**Inputs** :
- `actions` (required) : `ActionButtonData[]` — tableau d'actions `{ icon, label?, callback }`

**Notes** : Si 1 seule action → clic direct. Si plusieurs → ouvre un menu. `icon` accepte `TaIconType` ou chaîne Material.

# `<ta-edit-field>` — `EditFieldComponent`

**Quand l'utiliser** : Champ éditable inline — affiche une valeur en lecture et bascule en mode édition au clic. Idéal pour les pages de détail avec édition directe.

**Inputs (signal)** :
- `getInput = input.required<() => InputBase<any>>()` — factory retournant un nouvel input à chaque édition
- `changeEditMode$: Observable<boolean> | null` (défaut : `null`) — contrôle externe du mode édition
- `isLoading: boolean` (défaut : `false`) — affiche un loader, sort du mode édition quand repasse à `false`
- `withBorder: boolean` (défaut : `true`) — affiche une bordure autour du champ
- `disabled: boolean` (défaut : `false`)

**Output** :
- `newValue: OutputEmitterRef<unknown>` — émet la nouvelle valeur à la validation

**Comportement** :
- Clic sur le composant → bascule en mode édition
- Clic en dehors → valide automatiquement
- `isLoading` repasse à `false` → sort du mode édition

**Usage** :
```html
<ta-edit-field
  [getInput]="() => new InputTextBox({ key: 'name', value: item.name })"
  [isLoading]="isSaving"
  (newValue)="save($event)"
></ta-edit-field>
```

**Notes** : Étend `TaBaseComponent`. `renderInput` est un signal. `onFocusBehavior` (BehaviorSubject) focus le champ dès l'entrée en mode édition. `getInput` est une factory car l'input est recréé à chaque ouverture.

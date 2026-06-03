# `InputBase<T>` — classe de base de tous les modèles d'input

**Quand l'utiliser** : Base à étendre. Ne pas instancier directement sauf cas exceptionnel.

**Interface de config** :
```typescript
interface IInputBase<T> {
  key?: string;           // identifiant unique (auto-généré si omis)
  label?: string;         // clé i18n du libellé
  value?: T | null;       // valeur initiale
  value$?: Observable<T>; // valeur initiale asynchrone (ignorée si value déjà défini)
  validators?: ValidatorFn[];
  class?: string;         // classe CSS du conteneur (défaut : 'col-12')
  disabled?: boolean;
  children?: (InputBase<any> | InputLabel)[];
  visible$?: Observable<boolean>; // masque et désactive si false
  bindStatusToVisible?: boolean;  // défaut true — disable quand invisible
  message?: string;       // message d'aide ou d'erreur
}
```

**Champs publics** :
- `key: string`, `label: string`, `class: string`, `controlType: string`
- `formControl?: AbstractControl` — créé par `createFormControl()`
- `changeValue$: Subject<T | null>` — émet à chaque changement

**Méthodes** :
- `get/set value` — lit/écrit la valeur et synchronise le formControl
- `createFormControl(group?: FormGroup)` — appelé automatiquement par `<ta-form>`
- `launchChangeValue()` — émet `changeValue$` manuellement
- `disable()` / `enable()` — active/désactive récursivement
- `destroy()` — complète `changeValue$` et détruit les subscriptions

**Notes** : `visible$` avec `bindStatusToVisible` (défaut `true`) désactive automatiquement et remet la valeur à `null` quand l'input est masqué. Le `controlType` est utilisé par `<ta-inputs>` pour choisir le bon composant de rendu.

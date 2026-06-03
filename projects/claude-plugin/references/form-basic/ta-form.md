# `<ta-form>` — `FormComponent`

**Quand l'utiliser** : Conteneur de formulaire dynamique principal — rend automatiquement tous les inputs et gère la soumission.

**Template canonique** :
```html
<ta-form
  [inputs]="inputs"
  [loader]="isLoading"
  [error]="formError"
  (valid)="onSubmit($event)"
></ta-form>
```

**Inputs (signal)** :
- `inputs: InputBase<any>[]` (required) — liste des inputs à rendre
- `loader: boolean` (défaut : `false`) — affiche un loader, désactive le bouton
- `error: IInputsError` — `{ status: ENotificationCode; message: string }` — message d'erreur inline
- `border: boolean` (défaut : `true`) — bordure du conteneur
- `canDisplayButton: boolean` (défaut : `true`) — affiche le bouton de soumission
- `buttonTitle: string` (défaut : `'form.save'`) — clé i18n du bouton
- `onLive: boolean` (défaut : `false`) — soumet automatiquement à chaque changement (deep equal)
- `askValidation$: Observable<null>` — déclenche la soumission depuis l'extérieur
- `askOnDestroy: boolean` — soumet à la destruction du composant

**Outputs** :
- `valid: OutputEmitterRef<{}>` — émet `form.value` quand soumis et valide
- `isFormValid: OutputEmitterRef<boolean>` — émet à chaque changement de statut

**Méthodes publiques** :
- `onSubmit()` — soumet si valide
- `handleInvalidSubmit()` — marque tout comme touché si invalide
- `isValid(): boolean` — `form.valid && !loader()`
- `toFormGroup(inputs): FormGroup` — construit le ReactiveForm

**Notes** : Étend `TaBaseComponent`. `ngOnChanges` recrée le form si `inputs` change. `ngOnDestroy` appelle `input.destroy()` sur chaque input.

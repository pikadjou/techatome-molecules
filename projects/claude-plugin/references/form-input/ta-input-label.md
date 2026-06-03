# `<ta-form-label>` — `FormLabelComponent`

**Quand l'utiliser** : Label réutilisable interne aux composants form-input (checkbox, radio, toggle). Pas utilisé directement dans les templates applicatifs.

**Inputs** :
- `inputModel = input.required<{ label: string; validators: ValidatorFn[] }>({ alias: 'input' })` — le modèle minimal
- `withMarginBottom: boolean` (défaut : `true`)

**Notes** : Affiche le label traduit avec un astérisque si `Validators.required` est dans la liste. Utilisé en interne par `CheckboxComponent`, `RadioComponent`, `ToggleComponent`, `InputImagesComponent`, `InputLogoComponent`. Exporté depuis `@ta/form-input`.

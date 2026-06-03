# `<ta-inputs>` — `InputsComponent`

**Quand l'utiliser** : Rend un seul `InputBase` dans le bon composant selon son `controlType`. Utilisé en interne par `<ta-form>`. Peut aussi être utilisé seul pour rendre un input isolé.

**Inputs (signal)** :
- `inputModel = input.required<InputBase<any>>({ alias: 'input' })` — l'input à rendre
- `standaloneMode = input<boolean>(false, { alias: 'standalone' })` — mode standalone
- `onFocusObs = input<Observable<void>>({ alias: 'onFocus' })` — focus programmatique
- `space: boolean` (défaut : `true`) — espace bas

**Correspondances `controlType` → composant** :
| controlType | Composant |
|-------------|-----------|
| `textbox`, `timePicker` | `TextBoxComponent` |
| `textarea` | `TextareaComponent` |
| `dropdown` | `DropdownComponent` |
| `choices` | `InputChoicesComponent` |
| `checkbox` | `CheckboxComponent` |
| `toggle` | `ToggleComponent` |
| `radio` | `RadioComponent` |
| `datePicker` | `DatePickerComponent` |
| `slider` | `SliderComponent` |
| `switch` | `SwitchComponent` |
| `colorPicker` | `ColorPickerComponent` |
| `rating` | `RatingComponent` |
| `phone` | `InputPhoneComponent` |
| `wysiswyg` | `WysiswygComponent` |
| `upload` | `UploadComponent` |
| `images` | `InputImagesComponent` |
| `image` | `InputImageComponent` |
| `logo` | `InputLogoComponent` |
| `schema` | `InputSchemaComponent` |
| `culture` | `CultureComponent` |
| `component` | `ComponentInputComponent` |
| `label` | `LabelComponent` |
| `panel` | `PanelComponent` |
| `dynamic` | `DynamicComponent` |
| `translation` | `InputTranslationComponent` |
| `address` | `InputAddressComponent` |

**Usage direct** :
```html
<ta-inputs [input]="singleInput" [standalone]="true"></ta-inputs>
```

**Notes** : Utilise `MyErrorStateMatcher` pour les erreurs Angular Material (affiche erreur si dirty/touched/submitted). Exporté depuis `@ta/form-basic`.

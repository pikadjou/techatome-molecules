# `TaAbstractInputComponent<C, V>` — classe de base des composants d'input

**Quand l'utiliser** : Toujours étendre pour créer un nouveau composant de rendu d'input.

**Inputs (signal)** :
- `inputModel = input.required<C>({ alias: 'input' })` — le modèle `InputBase` à rendre
- `standaloneMode = input<boolean>(false, { alias: 'standalone' })` — crée son propre `FormControl` si `true`
- `onFocusObs = input<Observable<void>>({ alias: 'onFocus' })` — focus programmatique
- `matcher = input<ErrorStateMatcher>()` — stratégie d'affichage des erreurs Material

**Output** :
- `valueChanged = output<V>()` — émet à chaque changement de valeur

**Getters de compatibilité** : `input`, `standalone`, `onFocus`

**Comportement** :
- En mode non-standalone : `createFormControl()` est géré par `<ta-form>`/`<ta-inputs>`
- En mode standalone : crée son propre `FormControl` et appelle `input.destroy()` à la destruction
- Souscrit automatiquement à `input.changeValue$` → appelle `onChange(value)`

**Usage direct (mode standalone)** :
```html
<ta-input-textbox [input]="myInput" [standalone]="true"></ta-input-textbox>
```

**Usage standard (dans ta-form)** :
```html
<!-- géré automatiquement via ta-form ou ta-inputs -->
```

**Notes** : Étend `TaBaseComponent`. Le `@ViewChild('focusedElement')` permet le focus programmatique. Exporté depuis `@ta/form-input`.

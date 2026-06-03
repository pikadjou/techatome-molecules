# `<ta-input-wysiswyg>` — `WysiswygComponent`

**Quand l'utiliser** : Rendu d'un `InputWysiswyg`.

**Usage direct** :
```html
<ta-input-wysiswyg [input]="myWysiswyg" [standalone]="true"></ta-input-wysiswyg>
```

**Méthodes publiques** :
- `set(value: EditorInputSavedData)` — met à jour `input.value` avec les blocs
- `clear()` — remet `input.value` à `null`

**Notes** : Étend `TaAbstractInputComponent<InputWysiswyg>`. Utilise `EditorInputComponent` de `@ta/wysiswyg`. `enabledTools` et `placeholder` sont transmis depuis le modèle.

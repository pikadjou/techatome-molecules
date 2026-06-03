# `<ta-input-component>` — `ComponentInputComponent`

**Quand l'utiliser** : Rendu d'un `InputComponent` — ouvre une modal avec un template personnalisé pour sélectionner une valeur.

**Usage direct** :
```html
<ta-input-component [input]="myComponentInput" [standalone]="true"></ta-input-component>
```

**Méthodes publiques** :
- `open()` — ouvre la modal

**Notes** : Étend `TaAbstractInputComponent<InputComponent>`. `isModalOpen` est un signal. La modal `ComponentSelectorModal` expose `input.selectedValue$` au template via le contexte. La valeur est définie quand le template appelle `selectedValue$.next(value)`.

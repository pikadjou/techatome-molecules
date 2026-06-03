# `<ta-input-logo>` — `InputLogoComponent`

**Quand l'utiliser** : Rendu d'un `InputLogo` — upload d'un logo ou image unique.

**Usage direct** :
```html
<ta-input-logo [input]="myLogoInput" [standalone]="true"></ta-input-logo>
```

**Méthodes publiques** :
- `openDialog()` — ouvre la galerie pour sélectionner une image
- `removeLogo()` — remet `input.value` à `null`

**Notes** : Étend `TaAbstractInputComponent<InputLogo>`. Utilise `pickImages()` et prend uniquement le premier fichier. Upload avec description `'logo'`. Utilise `requestState` pour le chargement.

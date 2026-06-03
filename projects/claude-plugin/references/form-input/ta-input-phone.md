# `<ta-input-phone>` — `InputPhoneComponent`

**Quand l'utiliser** : Rendu d'un `InputPhone` avec sélecteur de pays intégré.

**Usage direct** :
```html
<ta-input-phone [input]="myPhoneInput" [standalone]="true"></ta-input-phone>
```

**Notes** : Étend `TaAbstractInputComponent<InputPhone>`. Intègre `intl-tel-input` (chargé lazy). Ajoute automatiquement `phoneValidator()` au `formControl`. La valeur émise est en format E.164. Le signal `isReady` indique si la lib est initialisée. Charge la CSS `intlTelInput.min.css` dynamiquement depuis CDN.

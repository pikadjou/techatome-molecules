# `<ta-input-slider>` — `SliderComponent`

**Quand l'utiliser** : Rendu d'un `InputSlider`.

**Usage direct** :
```html
<ta-input-slider [input]="mySliderInput" [standalone]="true"></ta-input-slider>
```

**Notes** : Étend `TaAbstractInputComponent<InputSlider>`. Utilise un `<input type="range">` natif lié au `formControl`. Les bornes `min` et `max` viennent du modèle.

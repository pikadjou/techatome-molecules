# `<ta-benefit-item>` — `BenefitItemComponent`
**Quand l'utiliser** : Élément de liste d'avantages/inconvénients avec icône colorée et texte.
**Template canonique** :
```html
<ta-benefit-item [type]="'success'" [text]="'Livraison gratuite'" />
<ta-benefit-item [type]="'warning'" [text]="'Délai de 3 jours'" />
```
**Inputs** :
- `type` : `ColorType` — `'success'` (défaut) | `'warning'` | `'alert'`
- `text` : `string` — texte affiché (`''` par défaut)

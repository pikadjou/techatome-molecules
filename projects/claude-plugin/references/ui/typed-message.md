# `<ta-typed-message>` — `TypedMessageComponent`
**Quand l'utiliser** : Message inline avec icône de niveau (info, succès, avertissement, erreur).
**Template canonique** :
```html
<ta-typed-message [text]="'Formulaire invalide'" [type]="'danger'" />
<ta-typed-message [text]="'ui.success.saved'" [type]="'success'" />
```
**Inputs** :
- `text` (required) : `string` — clé i18n ou texte direct
- `type` (required) : `MessageLevel` — `'info'` | `'success'` | `'warning'` | `'danger'`

**Notes** : Icônes automatiques : danger→`error_outline`, success→`check_circle_outline`, info→`help_outline`, warning→`warning_amber`.

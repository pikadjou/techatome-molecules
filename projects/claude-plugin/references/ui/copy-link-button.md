# `<ta-copy-link-button>` — `CopyLinkButtonComponent`
**Quand l'utiliser** : Bouton qui copie une valeur dans le presse-papier au clic.
**Template canonique** :
```html
<ta-copy-link-button [value]="shareUrl" [size]="'medium'" (action)="onCopied()" />
```
**Inputs** :
- `value` : `string | null` — texte à copier
- `size` : `'small'` | `'medium'` (défaut) | `'large'`
- `state` : `TaState` — `'classic'` (défaut)
- `stopPropagationActivation` : `boolean` — `true` (défaut)

**Outputs** : `(action)` — émis après la copie.

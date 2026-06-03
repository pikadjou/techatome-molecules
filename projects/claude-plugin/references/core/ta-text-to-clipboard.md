# `<ta-text-to-clipboard>` — `TextToClipboardComponent`
**Quand l'utiliser** : Icône cliquable pour copier une valeur dans le presse-papiers avec notification de succès/erreur.
**Template canonique** :
```html
<ta-text-to-clipboard [value]="textToCopy" [iconSize]="'sm'"></ta-text-to-clipboard>
```
**Inputs** :
- `value: string` (required) — texte à copier
- `iconSize: TaSizes` — taille de l'icône (défaut: `'sm'`)

**Notes** : Dépend de `LAZY_SERVICE_TOKEN` de `@ta/notification` pour afficher les notifications.

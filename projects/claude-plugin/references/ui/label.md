# `<ta-label>` — `LabelComponent`

**Quand l'utiliser** : Étiquette posée sur un fond teinté — un état, une catégorie, un compteur.
**Template canonique** :

```html
<ta-label type="success" size="md">Publié</ta-label>
<ta-label type="neutral" shape="pill" size="xs">3</ta-label>
<ta-label type="warning" icon="alert">À vérifier</ta-label>
```

**Inputs** :

- `size` : `TaSizes` — `'md'` (défaut) | `'xs'` | `'sm'` | `'lg'`
- `type` : `LabelType` = `ColorType | 'neutral'` — `'default'` (défaut) | `'secondary'` | `'success'` | `'warning'` | `'alert'` | `'purple'` | `'neutral'`
  - `secondary` : marque pleine, texte inversé (état actif d'un onglet)
  - `neutral` : gris sur gris — compteur ou pastille qui compte sans alerter
- `shape` : `'theme' | 'pill'` — `'theme'` (défaut) suit le rayon du thème, `'pill'` force la capsule
- `icon` : `string | undefined` — icône `ta-font-icon` affichée devant le contenu

**Notes** :

- Utilise `<ng-content>` pour le texte affiché.
- Couleurs par variante dans `_vars.scss` → `components.label.<type>.color|background|border` ; une nouvelle apparence = une nouvelle variante ici, **jamais** un `--ta-label-*` réassigné depuis le parent.
- Exemple d'usage : `ta-navigation` affiche son compteur d'onglet avec `[type]="this.isActive(item) ? 'secondary' : 'neutral'"` et `shape="pill"`.

# `<ta-link>` — `LinkComponent`
**Quand l'utiliser** : Lien textuel cliquable avec style configurable (souligné, gras, icône).
**Template canonique** :
```html
<ta-link [underline]="true" [bold]="false" [size]="'md'" (action)="onNavigate()">
  Voir le détail
</ta-link>
<ta-link [icon]="'open_in_new'" [state]="'disabled'">Lien désactivé</ta-link>
```
**Inputs** :
- `state` : `TaState` — `'classic'` (défaut) | `'loading'` | `'disabled'`
- `underline` : `boolean` — `true` (défaut)
- `bold` : `boolean` — `false` (défaut)
- `size` : `TaSizes` — `'md'` (défaut)
- `icon` : `string | null`

**Outputs** : `(action)` — émis si `state === 'classic'`.

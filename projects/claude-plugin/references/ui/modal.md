# `<ta-modal>` — `TaModalComponent`

**Quand l'utiliser** : conteneur de toute modale (fond, centrage, en-tête, slots). Il s'**embarque** dans un composant `XxxModal extends TaBaseModal<In, Out>` et se lie à son état ; il ne se pose pas nu dans une page.

**Template canonique** (dans le composant de modale) :

```html
<ta-modal [open]="this.isOpen()" size="medium" [title]="'my.modal.title' | translate" (closeEvent)="this.dismiss()">
  <div modal-content>…</div>
  <div modal-footer>
    <ta-button type="secondary" (action)="this.dismiss()">{{ 'common.cancel' | translate }}</ta-button>
    <ta-button type="primary" (action)="this.confirm(this.result)">{{ 'common.ok' | translate }}</ta-button>
  </div>
</ta-modal>
```

**Inputs** :

- `open` (required) : `boolean` — lier `this.isOpen()`
- `size` : `'small' | 'medium' | 'large' | 'fullscreen'` — 400 / 600 / 900 px / plein écran ; absent = piloté par le contenu
- `title` : `string` — chaîne déjà traduite (`[title]="'key' | translate"`)
- `overline` : `string` — surtitre en capitales au-dessus du titre
- `tone` : `'surface' | 'brand'` — `'surface'` par défaut ; `brand` = bandeau de marque plein, pour une modale bloquante
- `showClose` : `boolean` — `true` par défaut ; `false` : la modale projette sa propre action dans `[modal-header-action]`
- `closeOnBackdrop` : `boolean` — `true` par défaut
- `contentFit` : `boolean` — `false` par défaut ; le contenu remplit la hauteur (visionneuse, éditeur)

**Output** : `(closeEvent)` — croix ou fond → `this.dismiss()`.

**Slots** : `[modal-content]` (zone scrollable), `[modal-footer]` (pied fixe, masqué si vide), `[modal-header-action]`.

**Notes** : jamais de `TranslateModule` dans `ta-modal`, la traduction se fait dans le composant de modale. Pattern complet : `references/utils/ta-base-modal.md`, `references/utils/modal-state.md`.

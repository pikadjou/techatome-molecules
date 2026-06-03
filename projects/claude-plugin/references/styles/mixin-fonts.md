# Mixin `fonts` — typographie

**Import** :
```scss
@use "ta/utils/mixins/fonts";
```

---

## Mixins principaux

### `fonts.fontSizeHeader($scope, $bold: false)` — titres
```scss
@include fonts.fontSizeHeader(h1);  // 30px / 300
@include fonts.fontSizeHeader(h2);  // 24px / 300
@include fonts.fontSizeHeader(h3);  // 20px / 400
@include fonts.fontSizeHeader(h4);  // 18px / 400
@include fonts.fontSizeHeader(h2, true);  // 24px / 600 (bold)
```

### `fonts.fontSizeBody($scope, $bold: false)` — corps de texte
```scss
@include fonts.fontSizeBody(md);   // 15px / 400
@include fonts.fontSizeBody(sm);   // 13px / 400
@include fonts.fontSizeBody(xs);   // 10px / 400
@include fonts.fontSizeBody(md, true);  // 15px / 600 (bold)
```

### `fonts.fontSizeKey($scope, $bold: false)` — texte mis en avant (chiffres clés, labels)
```scss
@include fonts.fontSizeKey(xl);   // 36px / 500
@include fonts.fontSizeKey(lg);   // 20px / 400
@include fonts.fontSizeKey(md);   // 18px / 400
@include fonts.fontSizeKey(sm);   // 15px / 400
@include fonts.fontSizeKey(xs);   // 13px / 400
@include fonts.fontSizeKey(xxs);  // 10px / 400
@include fonts.fontSizeKey(lg, true);  // 20px / 600 (bold)
```

---

## Mixin interne `fonts.fontSize($scope, $sub, $bold)`
Applique `font-size` et `font-weight` depuis les tokens CSS. `fontSizeHeader`, `fontSizeBody` et `fontSizeKey` délèguent à ce mixin.

**Rappel** : `fontSizeHeader` → scope `''` (racine), `fontSizeBody` → scope `body`, `fontSizeKey` → scope `key`.

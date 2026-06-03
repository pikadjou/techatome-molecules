# Mixin `text` — utilitaires de texte

**Import** :
```scss
@use "ta/utils/mixins/text";
```

---

## `text.text-overflow()` — troncature avec ellipse

Tronque le texte avec `...` sur une seule ligne.

```scss
.my-element {
  @include text.text-overflow();
}
```

CSS généré :
```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

---

## `text.text-line-limit($line-limit)` — limiter à N lignes

Tronque le texte sur plusieurs lignes avec `-webkit-line-clamp`.

```scss
.description {
  @include text.text-line-limit(2);  // 2 lignes max
}
.excerpt {
  @include text.text-line-limit(3);  // 3 lignes max
}
```

CSS généré :
```css
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: N;
-webkit-box-orient: vertical;
```

**Notes** : Équivalent CSS des classes `.tov-e` et `.tll-2` / `.tll-3`. Utiliser les mixins dans les SCSS de composants, les classes CSS en template.

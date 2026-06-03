# Mixin `mediaQueriesRanges` — media queries responsive

**Import** :
```scss
@use "ta/utils/mixins/mediaQueriesRanges" as mq;
```

---

## Breakpoints disponibles (depuis `_vars.scss`)
| Clé | Valeur |
|-----|--------|
| `xs` | 0px |
| `sm` | 576px |
| `mobile` | 577px |
| `md` | 768px |
| `tablette` | 769px |
| `lg` | 992px |
| `desktop` | 991px |
| `xl` | 1200px |
| `xxl` | 1400px |
| `xxxl` | 1800px |

---

## `mq.from($breakpoint)` — min-width (desktop first progressif)

Styles appliqués **à partir de** la largeur donnée.

```scss
.my-element {
  font-size: 14px;  // mobile par défaut

  @include mq.from(768px) {
    font-size: 16px;  // tablette et plus
  }
  @include mq.from(992px) {
    font-size: 18px;  // desktop et plus
  }
}
```

---

## `mq.to($breakpoint)` — max-width (mobile first)

Styles appliqués **jusqu'à** la largeur donnée (max-width: N-1px).

```scss
.my-element {
  @include mq.to(768px) {
    display: none;  // caché en dessous de 768px
  }
}
```

---

## `mq.between($start, $end)` — plage spécifique

Styles appliqués entre deux breakpoints.

```scss
@include mq.between(576px, 992px) {
  // tablette seulement
}
```

---

## `mq.from-key($key)` et `mq.to-key($key)` — par nom de breakpoint

```scss
@include mq.from-key(md) {  // from 768px
  // ...
}
@include mq.to-key(lg) {    // to 991px
  // ...
}
```

---

## `mq.in-context($context)` — styles dans un contexte parent

```scss
@include mq.in-context('.dark-theme') {
  color: white;
}
```

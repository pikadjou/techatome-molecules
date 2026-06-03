# Mixin `flex` — flexbox

**Import** :
```scss
@use "ta/utils/mixins/flex";
```

---

## Mixins disponibles

| Mixin | CSS généré |
|-------|-----------|
| `flex.flex()` | `display: flex` |
| `flex.flex-row()` | `display: flex; flex-direction: row` |
| `flex.flex-column()` | `display: flex; flex-direction: column` |
| `flex.flex-full()` | `display: flex; flex: 1 1 100%` |
| `flex.flex-fill()` | `display: flex; flex: 1 1 auto` |
| `flex.space-between()` | `display: flex; flex-direction: row; justify-content: space-between` |
| `flex.space-around()` | `display: flex; flex-direction: row; justify-content: space-around` |
| `flex.flex-start()` | `display: flex; flex-wrap: wrap; justify-content: flex-start` |
| `flex.align-center()` | `display: flex; align-items: center` |
| `flex.align-end()` | `display: flex; align-items: flex-end; justify-content: end; margin-left: auto` |
| `flex.justify-center()` | `display: flex; justify-content: center; margin: auto` |
| `flex.justify-end()` | `display: flex; justify-content: flex-end; margin-left: auto` |
| `flex.full-width()` | `flex: 1; width: 100%` |
| `flex.simple-flex()` | `display: flex; flex-wrap: nowrap` |

**Exemple** :
```scss
@use "ta/utils/mixins/flex";

.my-container {
  @include flex.flex-column();
  gap: common.get-var(space, md);
}

.header {
  @include flex.space-between();
  @include flex.align-center();
}
```

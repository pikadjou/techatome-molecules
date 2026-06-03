# Classes CSS — Texte

## Transformation de texte

| Classe | CSS |
|--------|-----|
| `.tt-u` | `text-transform: uppercase` |
| `.tt-l` | `text-transform: lowercase` |
| `.tt-c` | `text-transform: capitalize` |
| `.tt-n` | `text-transform: none` |

## Alignement du texte

| Classe | CSS |
|--------|-----|
| `.ta-c` | `text-align: center` |
| `.ta-l` | `text-align: left` |
| `.ta-r` | `text-align: right` |

## Troncature / débordement

| Classe | Description |
|--------|-------------|
| `.tov-e` | Troncature 1 ligne avec ellipse (`overflow: hidden; text-overflow: ellipsis; white-space: nowrap`) |
| `.tll-2` | Limite à 2 lignes (webkit-line-clamp) |
| `.tll-3` | Limite à 3 lignes (webkit-line-clamp) |

## Style de police

| Classe | CSS |
|--------|-----|
| `.fs-i` | `font-style: italic` |
| `.fs-o` | `font-style: oblique` |

## Line height

| Classe | CSS |
|--------|-----|
| `.lh-0` | `line-height: 0` |
| `.lh-1` | `line-height: 1` |
| `.lh-3/2` | `line-height: 1.5` |

## Exemples

```html
<!-- Titre en majuscules centré -->
<h3 class="tt-u ta-c">Section</h3>

<!-- Texte tronqué 1 ligne -->
<p class="tov-e">Long texte qui sera tronqué...</p>

<!-- Description limitée à 2 lignes -->
<p class="tll-2">Description qui peut être longue mais sera limitée à deux lignes...</p>

<!-- Label formaté -->
<span class="tt-u fs-i ta-r">note</span>
```

# Design Tokens `@ta/styles` — `common.get-var()`

**Usage SCSS** :
```scss
@use "ta/utils/mixins/common";
color: common.get-var(text, primary);
```

---

## Couleurs de texte — `text`
| Token | Valeur approx. | Usage |
|-------|----------------|-------|
| `common.get-var(text, primary)` | `#1f2245` | Texte principal |
| `common.get-var(text, secondary)` | `#7d7d7d` | Texte secondaire |
| `common.get-var(text, tertiary)` | `#a9a9a9` | Texte désactivé |
| `common.get-var(text, body)` | `#3c3c3c` | Corps de texte |
| `common.get-var(text, brand, primary)` | `#121e38` | Texte brand foncé |
| `common.get-var(text, brand, secondary)` | `#f28700` | Texte brand secondaire |
| `common.get-var(text, invert, primary)` | `#ffffff` | Texte sur fond sombre |
| `common.get-var(text, success)` | `#38a172` | Texte succès |
| `common.get-var(text, warning)` | `#f39c12` | Texte avertissement |
| `common.get-var(text, alert)` | `#e74c3c` | Texte erreur |
| `common.get-var(text, link)` | `#192e50` | Texte lien |

## Surfaces — `surface`
| Token | Valeur approx. | Usage |
|-------|----------------|-------|
| `common.get-var(surface, primary)` | `#ffffff` | Fond principal (carte, panel) |
| `common.get-var(surface, secondary)` | `#f4f7f9` | Fond secondaire (zone grisée) |
| `common.get-var(surface, tertiary)` | `#e5e8ec` | Fond brand clair |
| `common.get-var(surface, default)` | `#dddddd` | Fond neutre |
| `common.get-var(surface, brand, primary)` | `#121e38` | Fond brand foncé |
| `common.get-var(surface, brand, secondary)` | `#f2c317` | Fond brand secondaire (doré) |
| `common.get-var(surface, brand, tertiary)` | `#bcc4d2` | Fond brand clair |
| `common.get-var(surface, hover, primary)` | `#f4f7f9` | Fond hover |
| `common.get-var(surface, invert)` | `#121e38` | Fond inversé |
| `common.get-var(surface, success)` | `#38a172` | Fond succès |
| `common.get-var(surface, alert)` | `#e74c3c` | Fond erreur |

## Bordures — `border`
| Token | Usage |
|-------|-------|
| `common.get-var(border, primary)` | Bordure principale (sombre) |
| `common.get-var(border, secondary)` | Bordure secondaire |
| `common.get-var(border, tertiary)` | Bordure légère (`#dddddd`) |
| `common.get-var(border, brand, primary)` | Bordure brand |
| `common.get-var(border, hover, primary)` | Bordure au hover |
| `common.get-var(border, disabled)` | Bordure désactivé |
| `common.get-var(border, success)` | Bordure succès |
| `common.get-var(border, alert)` | Bordure erreur |

## Icônes — `icon`
| Token | Usage |
|-------|-------|
| `common.get-var(icon, primary)` | Icône principale |
| `common.get-var(icon, secondary)` | Icône secondaire |
| `common.get-var(icon, brand, primary)` | Icône brand |
| `common.get-var(icon, invert, primary)` | Icône sur fond sombre |
| `common.get-var(icon, success)` | Icône succès |
| `common.get-var(icon, alert)` | Icône erreur |

## Brand — `brand` (palette de bleu)
| Token | Valeur |
|-------|--------|
| `common.get-var(brand, 900)` | `#121e38` |
| `common.get-var(brand, 800)` | `#192e50` |
| `common.get-var(brand, 700)` | `#1f375d` |
| `common.get-var(brand, 500)` | `#2d466f` |
| `common.get-var(brand, 300)` | `#6a7a95` |
| `common.get-var(brand, 100)` | `#bcc4d2` |
| `common.get-var(brand, 50)` | `#e5e8ec` |

## Sémantique — `semantic`
| Token | Valeur |
|-------|--------|
| `common.get-var(semantic, red)` | `#e74c3c` |
| `common.get-var(semantic, orange)` | `#f39c12` |
| `common.get-var(semantic, green)` | `#38a172` |
| `common.get-var(semantic, yellow)` | `#ffd166` |

## Espacement — `space` (grille de 8px)
| Token | Valeur |
|-------|--------|
| `common.get-var(space, xs)` | `4px` |
| `common.get-var(space, sm)` | `8px` |
| `common.get-var(space, md)` | `16px` |
| `common.get-var(space, lg)` | `24px` |
| `common.get-var(space, xl)` | `32px` |
| `common.get-var(space, xxl)` | `48px` |
| `common.get-var(space, xxxl)` | `104px` |

## Radius — `radius`
| Token | Valeur |
|-------|--------|
| `common.get-var(radius, minimal)` | `5px` |
| `common.get-var(radius, rounded)` | `10px` |
| `common.get-var(radius, label)` | `20px` |
| `common.get-var(radius, full)` | `40px` |

## Ombres — `shadow`
| Token | Usage |
|-------|-------|
| `common.get-var(shadow, black, sm)` | Ombre légère |
| `common.get-var(shadow, black, md)` | Ombre moyenne |
| `common.get-var(shadow, brand, lg)` | Ombre forte brand |
| `common.get-var(shadow, focus)` | Outline focus |

## Transitions — `transition`
| Token | Valeur |
|-------|--------|
| `common.get-var(transition, fast)` | `0.12s ease` |
| `common.get-var(transition, base)` | `0.18s ease` |
| `common.get-var(transition, slow)` | `0.28s ease` |

# Mixin `common` — fonctions SCSS fondamentales

**Import** :
```scss
@use "ta/utils/mixins/common";
```

---

## `common.get-var($name, $keys...)` — lire un token CSS

Retourne une variable CSS custom (`var(--ta-...)`) depuis la hiérarchie de tokens.

```scss
// Syntaxe : common.get-var(catégorie, clé...)
color: common.get-var(text, primary);
background: common.get-var(surface, brand, primary);
padding: common.get-var(space, md);
border-radius: common.get-var(radius, rounded);
box-shadow: common.get-var(shadow, black, sm);
transition: common.get-var(transition, base);
```

**Règle absolue** : Ne jamais coder en dur une couleur, un espacement ou un radius. Toujours utiliser `common.get-var()`.

---

## `common.generateMap($name, $map, $prefix)` — mixin interne

Génère des variables CSS custom depuis une map SCSS. Usage réservé au système de thème — ne pas utiliser dans les composants.

---

## `common.get-var-name($name, $keys)` — interne

Retourne le nom de variable CSS (`--ta-text-primary`). Usage interne uniquement.

---

**Rappel des catégories disponibles** :
`text`, `surface`, `border`, `icon`, `brand`, `second`, `neutral`, `semantic`, `space`, `radius`, `shadow`, `transition`, `font`

Voir `design-tokens.md` pour la liste complète des tokens.

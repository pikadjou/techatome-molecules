---
description: Assistant contextuel @ta/icons — catalogue compact + pointeurs vers references/icons/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/icons — Assistant contextuel

Tu es un expert de la librairie `@ta/icons` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, service, type…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/icons/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs ou l'API.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/icons`
- **Import path** : `@ta/icons`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/icons/`

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/icons/<name>.md`.

### Composants

- `ta-font-icon` (`FontIconComponent`) — icônes via police de caractères Remix Icon. **Composant principal à utiliser.**
- `ta-material-icon` (`MaterialIconComponent`) — icônes Material Design.
- `ta-local-icon` (`LocalIconComponent`) — icônes SVG locales via `TaIconType` enum. **Deprecated.**
- `ta-flag-icon` (`FlagIconComponent`) — drapeaux SVG par code langue (fr, en, nl, es, de, it, pt).

### Services

- `TaIconsService` — gestion des icônes locales (`getIcon(type: TaIconType)`).

### Types et helpers

- `TaIconType` — enum de toutes les icônes SVG locales.
- `isFontIcon(icon)` — vérifie si l'icône est un font icon (string).
- `isLocalIcon(icon)` — vérifie si l'icône est dans `TaIconType`.
- `getFontIcon(icon)` — résout le nom du font icon.

## Règle d'or

- Utiliser `ta-font-icon` pour la majorité des icônes (Remix Icon).
- Utiliser `ta-flag-icon` pour les drapeaux (pas `ta-local-icon`).
- `ta-local-icon` est **deprecated** — ne pas utiliser dans les nouveaux composants.

## Conventions

- **Standalone uniquement** — `standalone: true` toujours.
- **Sélecteur** : pattern `ta-*-icon`.
- **`inject()`** plutôt que constructor DI.

---
description: Assistant contextuel @ta/menu — catalogue compact + pointeurs vers references/menu/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/menu — Assistant contextuel

Tu es un expert de la librairie `@ta/menu` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, modèle, helper…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/menu/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, outputs ou la structure des modèles.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/menu`
- **Import path** : `@ta/menu`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/menu/`

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/menu/<name>.md`.

### Composants

- `ta-menu` (`MenuComponent`) — composant menu principal.
- `ta-menu-item` (`MenuItemComponent`) — élément de menu individuel.
- `ta-main-menu` (`MainMenuComponent`) — menu principal de l'application.
- `ta-navigation` (`NavigationComponent`) — barre de navigation.
- `ta-context-menu` (`ContextMenuComponent`) — menu contextuel (clic droit / actions).
- `ta-quick-actions` (`QuickActionsComponent`) — actions rapides.
- `ta-quick-actions-custom` (`QuickActionsCustomComponent`) — actions rapides personnalisées.
- `ta-toggle-navigation` (`ToggleNavigationComponent`) — toggle navigation.
- `ta-bottom-sheet-basic` (`BottomSheetTemplateBasicComponent`) — template bottom sheet basique (mobile).
- `ta-bottom-sheet-generic` (`BottomSheetTemplateGenericComponent`) — template bottom sheet générique (mobile).

### Modèles

- `Menu` — modèle de menu racine.
- `MenuBase` — modèle de base pour les éléments de menu.
- `MenuIcon` (`MenuItemIcon`) — modèle élément avec icône.
- `MenuCollapse` (`MenuItemCollapse`) — modèle élément repliable.
- `MenuPanel` (`MenuItemPanel`) — modèle élément panneau.
- `MenuAction` — modèle action de menu.
- `BottomSheetData` — données pour le bottom sheet.

### Helpers et types

- `taRoutes` / `Routes` — routes du menu (voir `/patterns` section 1 pour le routing).
- Fonctions utilitaires pour la construction du menu.

## Conventions

- Labels de menu = clés de traduction (via `@ta/translation`).
- Routes dans les éléments de menu = routes Angular existantes.
- Clés d'objets `MenuItemBase` triées alphabétiquement.
- Ne pas utiliser `MenuModule` (deprecated) — composants standalone.

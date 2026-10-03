---
description: Bonnes pratiques Angular pour techatome/techatome — conventions, routing, formulaires, menus, layout, AG Grid, services GraphQL, loading/error/empty
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# Bonnes pratiques & patterns — Application techatome/techatome

Tu es un expert des patterns Angular utilisés dans ce monorepo. Aide-moi avec le sujet suivant :

$ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le tableau des sections ci-dessous la ou les sections concernées.
2. **Lis la fiche de référence** via `Read` si une librairie spécifique est impliquée :
   - Composants : `references/ui/<selector>.md`, `references/form-basic/<name>.md`, etc.
   - Patterns GraphQL : `references/server/<name>.md`
   - Patterns de routing et de formulaires : **pas de fiche `references/patterns/` à ce jour** — fie-toi aux sections ci-dessous et aux sources de l'application.
3. **Réponds à partir de ce que tu as vérifié** — les références lues restent la **source de vérité**.

Si plusieurs sections sont concernées, vérifie-les toutes avant de répondre.

---

> **Référence complète** : utilise le skill **`techatome-patterns`** qui contient tous les patterns détaillés avec exemples de code.

## Sections disponibles

| # | Section | Contenu |
|---|---------|---------|
| 0 | Conventions Angular | `this.` obligatoire dans les templates, signal inputs/outputs, ordre des membres de classe |
| 0 | Composants @ta/* obligatoires | HTML natif interdit si équivalent @ta/* existe (voir aussi `/ta-first`) |
| 0b | SCSS obligatoire | `common.get-var()` pour tous les tokens, classes utilitaires (voir aussi `/styles`) |
| 1 | Routing | `taRoutes.addRoute()`, enums de routes, lazy loading, FeatureGuard |
| 2 | Formulaires | Service de formulaire dédié, InputBase, FormComponent, champs conditionnels |
| 3 | Menus | Menu latéral, MenuIcon, navigation, ajout d'entrée de menu |
| 4 | Layout de pages | `ta-layout-page`, header, content, nav, panel latéral |
| 5 | Modales | MatDialog + taBaseModal, taModalService, résultats |
| 6 | AG Grid | Colonnes, row actions, serverSide, pagination, filtres |
| 7 | Services GraphQL | HandleSimpleRequest, HandleComplexRequest, WhereType, enrichWith |
| 8 | Loading / Error / Empty | requestState, `ta-loader` > `ta-error` > `ta-empty` |
| 9 | Services — Patterns de données | Observables, cache, subjects, signal stores |
| 10 | Classes de base | TaAbstractComponent, BasePage, BaseListPage, BaseModal |
| 11 | Notifications | TaNotificationService, ENotificationCode |
| 12 | Checklist de revue | ESLint sort-keys, conventions Angular, patterns techatome |
| 13 | Structure d'une feature | Arborescence, fichiers à créer, ordre d'implémentation |

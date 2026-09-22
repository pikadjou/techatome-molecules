# techatome Claude Plugin

Plugin Claude Code pour le développement sur le monorepo Angular **techatome** et les applications utilisant les librairies `@ta/*`.

## Installation

```bash
/plugin install <url-git-de-ce-repo>
```

## Contenu du plugin

### Commands (28 slash-commands)

Un assistant contextuel par librairie `@ta/*` + un assistant patterns.

| Commande          | Librairie / Sujet                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------- |
| **`/ta-first`**   | **⭐ Règle prioritaire — composants `@ta/*` obligatoires + SCSS tokens**                                  |
| `/ui`             | `@ta/ui` — Cards, layouts, containers, listes                                                             |
| `/icons`          | `@ta/icons` — FontIcon, MaterialIcon, LocalIcon                                                           |
| `/styles`         | `@ta/styles` — Mixins SCSS, classes CSS, tokens de design                                                 |
| `/utils`          | `@ta/utils` — Pipes, directives, BaseComponent, helpers                                                   |
| `/translation`    | `@ta/translation` — i18n, TranslatePipe, fichiers JSON                                                    |
| `/server`         | `@ta/server` — taBaseService, GraphQL, HandleRequest                                                      |
| `/services`       | `@ta/services` — Services applicatifs partagés                                                            |
| `/menu`           | `@ta/menu` — taRoutes, MenuIcon, MenuCollapse, MenuPanel                                                  |
| `/notification`   | `@ta/notification` — Toast, ENotificationCode                                                             |
| `/form-model`     | `@ta/form-model` — InputBase, InputTextBox, InputChoices…                                                 |
| `/form-basic`     | `@ta/form-basic` — ta-form, FormComponent                                                                 |
| `/form-input`     | `@ta/form-input` — Champs individuels                                                                     |
| `/files-basic`    | `@ta/files-basic` — Upload de fichiers                                                                    |
| `/files-extended` | `@ta/files-extended` — Gestion fichiers avancée                                                           |
| `/charts`         | `@ta/charts` — Composants graphiques                                                                      |
| `/core`           | `@ta/core` — AG Grid, taGridMetaDataService, maps                                                         |
| `/user`           | `@ta/user` — Auth0, AuthGuard, FeatureGuard                                                               |
| `/cms`            | `@ta/cms` — Strapi CMS integration                                                                        |
| `/wysiswyg`       | `@ta/wysiswyg` — EditorJS WYSIWYG                                                                         |
| `/capacitor`      | `@ta/capacitor` — Mobile/Capacitor                                                                        |
| `/planning`       | `@ta/planning` — Feature planning                                                                         |
| `/project`        | `@ta/project` — Feature project                                                                           |
| `/testing`        | `@ta/testing` — Utilitaires de test                                                                       |
| `/patterns`       | Patterns & conventions — TOC vers le skill `techatome-patterns` (routing, forms, menus, layout, AG Grid…) |
| **`/strapi-multi-tenant`** | **⭐ Back-end — cloisonnement multi-tenant Strapi 5, contrôles d'accès, champs calculés** |
| **`/test-integrity`** | **⭐ Tests qui protègent réellement — mutation, fixtures, assertions** |

**Usage** : chaque commande accepte un argument libre

```
/ui Comment utiliser ta-card avec un footer personnalisé ?
/styles Quelles classes flex sont disponibles ?
/patterns Comment créer une page avec liste et panel latéral ?
/form-model Comment rendre un champ conditionnel selon la valeur d'un autre ?
```

### Agents

| Agent                 | Rôle                                                                                |
| --------------------- | ----------------------------------------------------------------------------------- |
| `techatome-explorer`  | Explore le monorepo pour trouver composants, exports et exemples existants          |
| `techatome-architect` | Conçoit le plan d'implémentation d'une feature en respectant toutes les conventions |
| `techatome-reviewer`  | Revue de code : vérifie ESLint, conventions Angular, patterns techatome             |

Les agents sont invoqués automatiquement par Claude Code via le `Task` tool ou peuvent être demandés explicitement.

### Skill

| Skill                   | Description                                                                                                                                                                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `techatome-patterns`    | **Source de vérité** pour tous les patterns Angular du projet : composants @ta/\* obligatoires, SCSS tokens, conventions de code, routing, formulaires, menus, layout, modales, AG Grid, GraphQL, états. Le command `/patterns` en est le point d'entrée. |
| `strapi-multi-tenant`   | **Source de vérité** pour la sécurité des back-ends Strapi 5 : document middlewares, les quatre trous du filtre générique (type racine, `update`, relations, `clone`), authentification déléguée, rôles, champs calculés, tables de référence. Chaque règle vient d'un défaut réellement survenu. Le command `/strapi-multi-tenant` en est le point d'entrée. |
| `test-integrity`        | Écrire des tests qui protègent réellement : tests de mutation, fixtures complètes, assertions qui échouent quand le code casse, harnais de bout en bout. À lire avant d'annoncer qu'un comportement est testé. Le command `/test-integrity` en est le point d'entrée. |

### Hooks

Un hook `PreToolUse` s'active avant chaque écriture de fichier Angular (`.ts`, `.component.html`, `.scss` hors `_vars.scss` / `_theme.scss`) et avertit sur :

- **`sort-keys`** — clés d'objets non triées alphabétiquement
- **Hardcoded URLs** — routes non passées par `taRoutes`
- **HttpClient direct** — sans `taBaseService`
- **`standalone: true` manquant** — dans le décorateur `@Component`
- **`host: { '[class.x]' }`** — variantes à poser par `[ngClass]="this.getClass()"` + SCSS
- **Subscriptions sans `_registerSubscription()`**
- **`this.` manquant** dans les templates HTML (les variables de bloc `@for`, `@if … as`, `@let` sont reconnues)
- **Assertion non-null `!`** dans les templates — `@if (…; as x)` à la place
- **Formats de date à la main** (`date: 'EEEE d MMMM'`, locale en argument) — formats prédéfinis ou `ta-hour-date-line` / `ta-time-ago`
- **SCSS** : `var(--ta-…)` écrit à la main, réassignation `--ta-*` d'un composant enfant, couleur brute (hex / `rgb()` / `rgba()`), px brut sur `padding` / `margin` / `gap`, `font-family` / `font-size` / `font-weight` / `letter-spacing` à la main, `display: flex` sans les mixins `flex.*`, `::ng-deep`

## Structure du plugin

```
claude-plugin/
├── .claude-plugin/
│   └── plugin.json          # Manifest du plugin
├── commands/                # 28 slash-commands (/ui, /styles, /patterns, …)
│   ├── ui.md
│   ├── styles.md
│   ├── patterns.md
│   └── …
├── agents/                  # Agents spécialisés
│   ├── ta-explorer.md         # Exploration du monorepo
│   ├── ta-architect.md        # Conception d'architecture
│   └── ta-reviewer.md         # Revue de code
├── hooks/                   # Hooks de qualité de code
│   ├── hooks.json
│   └── techatome_conventions_hook.py
├── skills/                  # Skills invocables
│   ├── techatome-patterns/
│   │   └── SKILL.md         # Référence complète des patterns Angular
│   ├── strapi-multi-tenant/
│   │   └── SKILL.md         # Sécurité et cloisonnement des back-ends Strapi
│   └── test-integrity/
│       └── SKILL.md         # Tests qui protègent réellement
└── README.md
```

## Mise à jour

Pour synchroniser les commandes après modification dans `techatome-back/.claude/commands/` :

```bash
cp .claude/commands/*.md projects/claude-plugin/commands/
```

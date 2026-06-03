---
description: Assistant contextuel @ta/ui — catalogue compact + pointeurs vers references/ui/<selector>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/ui — Assistant contextuel

Tu es un expert de la librairie `@ta/ui` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, service, modèle, pattern…).
2. **Lis la fiche de référence** via `Read` (chemin indiqué après chaque entrée du catalogue, typiquement `references/ui/<name>.md`).
3. **Réponds à partir du contenu lu**. Ne **devine pas** les inputs, outputs ou signatures — vérifie systématiquement dans la fiche.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de composer la réponse.

---

## Comment ce skill est organisé

Le pattern canonique de chaque composant (template + notes) vit dans un fichier dédié sous `references/ui/<selector>.md`. Pour répondre :

1. Repère le composant dans le catalogue ci-dessous.
2. Lis `references/ui/<selector>.md` pour le template canonique + les notes.
3. Pour les compositions (card, layout, list), lis aussi `references/ui/_composed/<famille>.md`.
4. Réponds à partir de ce contenu — ne devine pas, lis.

## Package

- **Package** : `@ta/ui`
- **Import path** : `@ta/ui`
- **Préfixe sélecteur** : `ta-`
- **Composants** : tous `standalone: true`

## Règle d'or

Interdiction d'utiliser un élément HTML natif ou un composant tiers s'il existe un équivalent `ta-*`. Pour la table des correspondances obligatoires, voir `/ta-first`.

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/ui/<selector>.md`.

### Composants standalone

- `ta-badge` (`BadgeComponent`) — Tag stylisé avec couleur sémantique et icône optionnelle.
- `ta-banner` (`BannerComponent`) — Bandeau d'information persistant.
- `ta-button` (`ButtonComponent`) — Bouton principal pour toute action.
- `ta-label` (`LabelComponent`) — Étiquette colorée fine.
- `ta-link` (`LinkComponent`) — Lien texte avec icônes optionnelles.
- `ta-text` (`TextComponent`) — **Tout** texte courant — remplace `<p>`/`<span>`.
- `ta-title` (`TitleComponent`) — **Tout** titre — remplace `<h1>`–`<h6>`.
- `ta-action-button` (`ActionButtonComponent`) — Menu d'actions (1 directe ou liste déroulante).
- `ta-dual-button` (`DualButtonComponent`) — Deux boutons côte à côte (toggle).
- `ta-tool-button` (`ToolButtonComponent`) — Bouton outil simple ou toolbar d'icônes.
- `ta-civility` (`CivilityComponent`) — Icône associée à une civilité.
- `ta-contact-information` (`ContactInformationComponent`) — Info de contact avec icône préfixée.
- `ta-criticity` (`CriticityComponent`) — Niveau de criticité en badge.
- `ta-culture` (`CultureComponent`) — Liste de langues avec sélection courante.
- `ta-duration` (`DurationComponent`) — Durée entre deux dates.
- `ta-expandable-text` (`ExpandableTextComponent`) — Texte long avec "voir plus".
- `ta-expansion-panel` (`ExpansionPanelComponent`) — Panneau dépliable.
- `ta-megaoctet` (`MegaoctetComponent`) — Taille de fichier en Mo.
- `ta-notification-badge` (`NotificationBadgeComponent`) — Pastille numérique (99+).
- `ta-progress-bar` (`ProgressBarComponent`) — Barre de progression.
- `ta-progress-bar-data` (`ProgressBarDataComponent`) — Barre de progression avec titre.
- `ta-progress-circle` (`ProgressCircleComponent`) — Pourcentage circulaire.
- `ta-time-ago` (`TimeAgoComponent`) — Affichage relatif d'une date.
- `ta-toast` (`ToastComponent`) — Toast typé inline.
- `ta-trigram` (`TrigramComponent`) — Pastille trigramme (fallback avatar).
- `ta-user-logo` (`UserLogoComponent`) — Avatar utilisateur.
- `ta-users-list` (`UsersListComponent`) — Liste d'avatars.
- `ta-swiper-light` (`SwiperLightComponent`) — Carrousel responsive.
- `ta-overlay-panel` (`TaOverlayPanelComponent`) — Panneau overlay.

### Module Card
Pattern composé : `references/ui/_composed/card.md`.

- `ta-card` (`CardComponent`) — Conteneur de contenu structuré.
- `ta-card-header` (`CardHeaderComponent`) — En-tête (tag + titre + sous-titre).
- `ta-card-title` (`CardTitleComponent`) — Titre principal.
- `ta-card-subtitle` (`CardSubtitleComponent`) — Sous-titre.
- `ta-card-content` (`CardContentComponent`) — Corps principal.
- `ta-card-cta` (`CardCtaComponent`) — Zone de boutons d'action.
- `ta-card-image` (`CardImageComponent`) — Image d'en-tête.
- `ta-card-tag` (`CardTagComponent`) — Badge dans l'en-tête.
- `ta-dashboard` (`DashboardComponent`) — Carte de dashboard.

### Module Layout
Patterns composés : `references/ui/_composed/layout-page.md`, `references/ui/_composed/layout-with-panel.md`.

- `ta-layout-page` (`LayoutPageComponent`) — Racine d'une page applicative.
- `ta-layout-header` (`LayoutHeaderComponent`) — Wrapper d'en-tête.
- `ta-layout-header-default` (`LayoutHeaderDefaultComponent`) — En-tête interne.
- `ta-layout-header-logo` (`LayoutHeaderLogoComponent`) — En-tête principal.
- `ta-layout-title` (`LayoutTitleComponent`) — Zone de titre de page.
- `ta-layout-content` (`LayoutContentComponent`) — Contenu principal.
- `ta-layout-side` (`LayoutSideComponent`) — Conteneur de panneau latéral.
- `ta-layout-side-content` (`LayoutSideContentComponent`) — Corps de panneau latéral.
- `ta-layout-side-cta` (`LayoutSideCtaComponent`) — Pied CTAs de panneau latéral.
- `ta-layout-nav` (`LayoutNavComponent`) — Barre de navigation.
- `ta-layout-panel` (`LayoutPanelComponent`) — Panneau coulissant.
- `ta-layout-full-panel` (`LayoutFullPanelComponent`) — Panneau plein écran.
- `ta-layout-with-panel` (`LayoutWithPanelComponent`) — Page avec drawer latéral.
- `ta-layout-with-bottom-nav` (`LayoutWithBottomNavComponent`) — Layout avec nav inférieure.
- `ta-layout-modal` (`LayoutModalComponent`) — Wrapper interne Material Dialog.
- `ta-layout-modal-container` (`LayoutModalContainerComponent`) — **Composant interne**.

### Module List
Pattern composé : `references/ui/_composed/list.md`.

- `ta-list-container` (`ListContainerComponent`) — Racine d'une liste.
- `ta-list-element` (`ListElementComponent`) — Élément de liste.
- `ta-list-title` (`ListTitleComponent`) — Titre d'un élément.
- `ta-list-sub-title` (`ListSubTitleComponent`) — Sous-titre.
- `ta-list-tag` (`ListTagComponent`) — Badge dans un élément.
- `ta-list-extra-information` (`ListExtraInformationComponent`) — Info secondaire.

### Module Container
Pattern composé : `references/ui/_composed/container.md`.

- `ta-empty` (`EmptyComponent`) — État vide.
- `ta-error` (`ErrorComponent`) — Erreur avec code HTTP.
- `ta-loader` (`LoaderComponent`) — Chargement.
- `ta-container-validation` (`ContainerValidationComponent`) — Bouton avec confirmation.
- `ta-modal-validation` (`ModalValidationComponent`) — **Composant interne**.

## Conventions

- **Standalone uniquement** — `standalone: true` toujours.
- **`sort-keys` ESLint** — clés d'objets triées alphabétiquement.
- **Préfixe sélecteur** : `ta-`.
- **`inject()`** plutôt que constructor DI.
- **Signals** : `input()` / `output()` pour toute I/O.

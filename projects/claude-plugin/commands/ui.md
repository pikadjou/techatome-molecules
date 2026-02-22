---
description: Assistant contextuel @ta/ui — cards, layouts, containers, lists, buttons, modals
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/ui — Assistant contextuel

Tu es un expert de la librairie `@ta/ui` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/ui`
**Import path** : `@ta/ui`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/ui/`

## Composants exportés

### Composants UI généraux (`ta-ui` module ou standalone)

- `taBadgeComponent` — `ta-badge`
- `taBulletComponent` — `ta-bullet`
- `taButtonComponent` — `ta-button`
- `taActionButtonComponent` — `ta-action-button`
- `taDualButtonComponent` — `ta-dual-button`
- `taToolComponent` — `ta-tool`
- `taCivilityComponent` — `ta-civility`
- `taContactInformationComponent` — `ta-contact-information`
- `taCriticityComponent` — `ta-criticity`
- `taCultureComponent` — `ta-culture`
- `taDepartmentsComponent` — `ta-departments`
- `taDepartmentIconListComponent` — `ta-department-icon-list`
- `taProfessionsComponent` — `ta-professions`
- `taDurationComponent` — `ta-duration`
- `taExpandableTextComponent` — `ta-expandable-text`
- `taExpansionPanelComponent` — `ta-expansion-panel`
- `taFileImageComponent` — `ta-file-image`
- `taHelloUserComponent` — `ta-hello-user`
- `taHourDateLineComponent` — `ta-hour-date-line`
- `taItemDisplayComponent` — `ta-item-display`
- `taLabelComponent` — `ta-label`
- `taLinkComponent` — `ta-link`
- `taLogoComponent` — `ta-logo`
- `taMegaoctetComponent` — `ta-megaoctet`
- `taNewComponent` — `ta-new`
- `taNotificationBadgeContainerComponent` — `ta-notification-badge-container`
- `taNotificationBadgeComponent` — `ta-notification-badge`
- `taPictureInfoMessageComponent` — `ta-picture-info-message`
- `taProfileDataComponent` — `ta-profile-data`
- `taInlineProfileDataComponent` — `ta-inline-profile-data`
- `taUiProfileDisplayComponent` — `ta-ui-profile-display`
- `taProgressBarComponent` — `ta-progress-bar`
- `taProgressCircleComponent` — `ta-progress-circle`
- `taProgressBarDataComponent` — `ta-progress-bar-data`
- `taPwaComponent` — `ta-pwa`
- `taTextComponent` — `ta-text`
- `taTimeAgoComponent` — `ta-time-ago`
- `taTitleComponent` — `ta-title`
- `taToastComponent` — `ta-toast`
- `taTrigramComponent` — `ta-trigram`
- `taTypedMessageComponent` — `ta-typed-message`
- `taUserLogoComponent` — `ta-user-logo`
- `taUsersListComponent` — `ta-users-list`
- `taBannerComponent` — `ta-banner`
- `taColorSetDisplayerComponent` — `ta-color-set-displayer`
- `taSectionLayoutComponent` — `ta-section-layout`
- `taStatComponent` — `ta-stat`
- `taStepProgressComponent` — `ta-step-progress`
- `taWrappedIconComponent` — `ta-wrapped-icon`

### Module Layout (`@ta/ui` — layout)

- `taLayoutContentComponent` — `ta-layout-content`
- `taLayoutTitleComponent` — `ta-layout-title`
- `taLayoutHeaderComponent` — `ta-layout-header`
- `taLayoutHeaderDefaultComponent` — `ta-layout-header-default`
- `taLayoutHeaderLogoComponent` — `ta-layout-header-logo`
- `taLayoutHeaderCtasComponent` — `ta-layout-header-ctas`
- `taLayoutSideComponent` — `ta-layout-side`
- `taLayoutSideCtaComponent` — `ta-layout-side-cta`
- `taLayoutSideContentComponent` — `ta-layout-side-content`
- `taLayoutNavComponent` — `ta-layout-nav`
- `taLayoutPanelComponent` — `ta-layout-panel`
- `taLayoutFullPanelComponent` — `ta-layout-full-panel`
- `taLayoutWithBottomNavComponent` — `ta-layout-with-bottom-nav`
- `taLayoutWithPanelComponent` — `ta-layout-with-panel`
- `taLayoutPageComponent` — `ta-layout-page`
- `taLayoutModalComponent` — `ta-layout-modal`
- `taLayoutModalContainerComponent` — `ta-layout-modal-container`
- `taNotFoundComponent` — `ta-not-found`

### Module Card

- `taCardComponent` — `ta-card`
- `taDashboardComponent` — `ta-dashboard`
- `taCardContentComponent` — `ta-card-content`
- `taCardCtaComponent` — `ta-card-cta`
- `taCardImageComponent` — `ta-card-image`
- `taCardHeaderComponent` — `ta-card-header`
- `taCardSubtitleComponent` — `ta-card-subtitle`
- `taCardTagComponent` — `ta-card-tag`
- `taCardTitleComponent` — `ta-card-title`

### Module List

- `taListElementComponent` — `ta-list-element`
- `taListContainerComponent` — `ta-list-container`
- `taListSubTitleComponent` — `ta-list-sub-title`
- `taListTagComponent` — `ta-list-tag`
- `taListTitleComponent` — `ta-list-title`
- `taListExtraInformationComponent` — `ta-list-extra-information`

### Module Container

- `taEmptyComponent` — `ta-empty`
- `taErrorComponent` — `ta-error`
- `taLoaderComponent` — `ta-loader`
- `taPlaceholderComponent` — `ta-placeholder`
- `taSwiperLightComponent` — `ta-swiper-light`
- `taContainerValidationComponent` — `ta-container-validation`
- `taModalValidationComponent` — `ta-modal-validation`

## Patterns d'utilisation

### Import dans un composant standalone

```typescript
import { taCardComponent, taCardHeaderComponent, taCardContentComponent } from '@ta/ui';

@Component({
  selector: 'ta-my-component',
  standalone: true,
  imports: [taCardComponent, taCardHeaderComponent, taCardContentComponent],
  template: `
    <ta-card>
      <ta-card-header>Titre</ta-card-header>
      <ta-card-content>Contenu</ta-card-content>
    </ta-card>
  `
})
```

### Layout de page type

```html
<ta-layout-page>
  <ta-layout-header>
    <ta-layout-header-default>
      <ta-layout-title>Mon titre</ta-layout-title>
    </ta-layout-header-default>
  </ta-layout-header>
  <ta-layout-content>
    <!-- contenu -->
  </ta-layout-content>
</ta-layout-page>
```

## Conventions

- Tous les composants sont `standalone: true`
- Les clés d'objets doivent être triées alphabétiquement (`sort-keys` ESLint)
- Selector prefix : `ta-`
- Chaque composant a un fichier `.stories.ts` pour Storybook
- Pas de génération automatique de `.spec.ts` (skipTests: true)

## Revue de code

- Vérifier que tous les imports de `@ta/ui` sont utilisés (no-unused-imports)
- Vérifier l'ordre des imports : Angular → RxJS → tiers → @ta → src → relative
- Vérifier que les clés d'objets dans les décorateurs sont triées alphabétiquement
- Préférer les composants standalone aux modules NgModule (deprecated)

## Création d'un nouveau composant dans @ta/ui

```bash
ng g component projects/ui/src/lib/components/ui/mon-composant --standalone --prefix ta
```

1. Créer le fichier `.component.ts`, `.component.html`, `.component.scss`
2. Exporter depuis le `public-api.ts` approprié
3. Ajouter un fichier `.stories.ts`
4. S'assurer que `standalone: true` et que les imports sont explicites

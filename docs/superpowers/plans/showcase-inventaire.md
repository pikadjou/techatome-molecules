# Inventaire des composants à documenter

Fichier **généré** — reflet de `COVERAGE.missing` au moment de sa production.
Régénérer après chaque paquet livré pour voir la liste fondre.
**180 composants à documenter**, répartis sur 14 paquets.


Pour chaque composant : son sélecteur, sa classe, son fichier source, le nombre
d'inputs / outputs / propriétés / méthodes que le tableau d'API affichera, et la
matière déjà écrite ailleurs dans le dépôt dont la démo peut s'inspirer.

## @ta/ui — 97 composants

- **ta-action-button** — `ActionButtonComponent` · 1i/0o/0p/4m · `projects/ui/src/lib/components/ui/button/action/action-button.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-buttons.case.ts · page: src/app/showcase/ui/ui.component.html
- **ta-address** — `AddressComponent` · 1i/0o/0p/0m · `projects/ui/src/lib/components/ui/address/address.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts
- **ta-badge** — `BadgeComponent` · 4i/1o/0p/2m · `projects/ui/src/lib/components/ui/badge/badge.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-badge.case.ts · page: src/app/showcase/features/features.component.html, src/app/showcase/ui/ui.component.html, src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-banner** — `BannerComponent` · 3i/0o/0p/1m · `projects/ui/src/lib/components/ui/banner/banner.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-basics.case.ts · page: src/app/showcase/ui/ui.component.html, src/app/showcase/ui-feedback/ui-feedback.component.html
- **ta-benefit-item** — `BenefitItemComponent` · 2i/0o/0p/2m · `projects/ui/src/lib/components/ui/benefit-item/benefit-item.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/benefit-item/benefit-item.stories.ts · harness: src/app/e2e-harness/cases/ui-basics.case.ts
- **ta-boolean-icon** — `BooleanIconComponent` · 2i/0o/0p/3m · `projects/ui/src/lib/components/ui/boolean-icon/boolean-icon.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/boolean-icon/boolean-icon.stories.ts · harness: src/app/e2e-harness/cases/ui-display.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-bullet** — `BulletComponent` · 2i/0o/0p/1m · `projects/ui/src/lib/components/ui/bullet/bullet.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/bullet/bullet.stories.ts · harness: src/app/e2e-harness/cases/ui-notification.case.ts · page: src/app/showcase/ui-feedback/ui-feedback.component.html
- **ta-button-tool** — `ButtonToolComponent` · 6i/1o/0p/2m · `projects/ui/src/lib/components/ui/button/tool/tool.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-buttons.case.ts · page: src/app/showcase/ui/ui.component.html
- **ta-card-content** — `CardContentComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/card/content/card-content.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/card/card.stories.ts, projects/ui/src/lib/modules/container/swiper-light/swiper-light.stories.ts, projects/ui/src/lib/modules/layout/layout-page/layout-page.stories.ts · harness: src/app/e2e-harness/cases/ui-card.case.ts · page: src/app/showcase/ui/ui.component.html, src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-card-cta** — `CardCtaComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/card/cta/card-cta.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/card/card.stories.ts · harness: src/app/e2e-harness/cases/ui-card.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-card-header** — `CardHeaderComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/card/header/card-header.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/card/card.stories.ts · harness: src/app/e2e-harness/cases/ui-card.case.ts · page: src/app/showcase/ui/ui.component.html, src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-card-image** — `CardImageComponent` · 1i/0o/0p/0m · `projects/ui/src/lib/modules/card/card-image/card-image.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-card.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-card-subtitle** — `CardSubtitleComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/card/subtitle/card-subtitle.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-card.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-card-tag** — `CardTagComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/card/tag/card-tag.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/card/card.stories.ts · harness: src/app/e2e-harness/cases/ui-card.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-card-title** — `CardTitleComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/card/title/card-title.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/card/card.stories.ts · harness: src/app/e2e-harness/cases/ui-card.case.ts · page: src/app/showcase/ui/ui.component.html, src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-civility** — `CivilityComponent` · 1i/0o/0p/1m · `projects/ui/src/lib/components/ui/civility/civility.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-contact-information** — `ContactInformationComponent` · 3i/0o/0p/0m · `projects/ui/src/lib/components/ui/contact-information/contact-information.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/contact-information/contact-information.stories.ts · harness: src/app/e2e-harness/cases/ui-display.case.ts
- **ta-container-validation** — `ContainerValidationComponent` · 3i/1o/0p/3m · `projects/ui/src/lib/modules/container/validation/cta/container-validation.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/container/validation/cta/container-validation.stories.ts · harness: src/app/e2e-harness/cases/ui-container.case.ts
- **ta-copy-link-button** — `CopyLinkButtonComponent` · 4i/1o/0p/3m · `projects/ui/src/lib/components/ui/button/copy-link/copy-link-button.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-buttons.case.ts
- **ta-criticity** — `CriticityComponent` · 1i/0o/0p/2m · `projects/ui/src/lib/components/ui/criticity/criticity.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-culture** — `CultureComponent` · 1i/0o/0p/0m · `projects/ui/src/lib/components/ui/culture/culture.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-dashboard-card** — `DashboardCardComponent` · 1i/0o/0p/0m · `projects/ui/src/lib/modules/card/dashboard/dashboard.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-card.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-default-panel** — `TaDefaultPanelComponent` · 1i/0o/0p/0m · `projects/ui/src/lib/modules/overlay-panel/default-panel/default-panel.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-overlay.case.ts
- **ta-department-icon-list** — `DepartmentIconListComponent` · 2i/0o/0p/0m · `projects/ui/src/lib/components/ui/departments/department-icon-list/department-icon-list.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/card/card.stories.ts · harness: src/app/e2e-harness/cases/ui-display.case.ts
- **ta-department-professions** — `DepartmentProfessionsComponent` · 3i/0o/1p/0m · `projects/ui/src/lib/components/ui/departments/professions/professions.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts
- **ta-departments** — `DepartmentsComponent` · 2i/0o/0p/0m · `projects/ui/src/lib/components/ui/departments/departments.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts
- **ta-dual-button** — `DualButtonComponent` · 4i/0o/0p/1m · `projects/ui/src/lib/components/ui/button/dual/dual-button.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/button/dual/dual-button.stories.ts · harness: src/app/e2e-harness/cases/ui-buttons.case.ts · page: src/app/showcase/ui/ui.component.html
- **ta-duration** — `DurationComponent` · 2i/0o/0p/0m · `projects/ui/src/lib/components/ui/duration/duration.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-empty** — `EmptyComponent` · 7i/0o/0p/0m · `projects/ui/src/lib/modules/container/empty/empty.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/container/empty/empty.stories.ts · harness: src/app/e2e-harness/cases/ui-container.case.ts · page: src/app/showcase/container/container.component.html
- **ta-error** — `ErrorComponent` · 4i/1o/0p/1m · `projects/ui/src/lib/modules/container/error/error.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/container/error/error.stories.ts · harness: src/app/e2e-harness/cases/ui-container.case.ts · page: src/app/showcase/container/container.component.html
- **ta-expandable-text** — `ExpandableTextComponent` · 1i/0o/3p/1m · `projects/ui/src/lib/components/ui/expandable-text/expandable-text.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/expandable-text/expandable-text.stories.ts · harness: src/app/e2e-harness/cases/ui-interactive.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-expansion-panel** — `TaExpansionPanelComponent` · 1i/0o/0p/0m · `projects/ui/src/lib/components/ui/expansion-panel/expansion-panel.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/expansion-panel/expansion-panel.stories.ts · harness: src/app/e2e-harness/cases/ui-interactive.case.ts · page: src/app/showcase/ui/ui.component.html
- **ta-file-image** — `FileImageComponent` · 2i/0o/1p/0m · `projects/ui/src/lib/components/ui/file-image/file-image.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts
- **ta-hour-date-line** — `HourDateLineComponent` · 2i/0o/0p/0m · `projects/ui/src/lib/components/ui/hour-date-line/hour-date-line.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/card/card.stories.ts · harness: src/app/e2e-harness/cases/ui-display.case.ts
- **ta-inline-profile-data** — `InlineProfileDataComponent` · 2i/0o/0p/0m · `projects/ui/src/lib/components/ui/profil-data/inline-profile-data/inline-profile-data.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/profil-data/inline-profile-data/inline-profile-data.stories.ts · harness: src/app/e2e-harness/cases/ui-display.case.ts
- **ta-itsme-button** — `ItsmeButtonComponent` · 4i/1o/0p/2m · `projects/ui/src/lib/components/ui/button/itsme/itsme-button.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-buttons.case.ts · page: src/app/showcase/ui/ui.component.html
- **ta-label** — `LabelComponent` · 2i/0o/0p/1m · `projects/ui/src/lib/components/ui/label/label.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/label/label.stories.ts · harness: src/app/e2e-harness/cases/ui-basics.case.ts · page: src/app/showcase/ui/ui.component.html
- **ta-layout-content** — `LayoutContentComponent` · 1i/0o/0p/0m · `projects/ui/src/lib/modules/layout/layout-content/layout-content.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/layout/with-panel/layout-with-panel.stories.ts · harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-flex** — `LayoutFlexComponent` · 1i/0o/0p/4m · `projects/ui/src/lib/modules/layout/layout-flex/layout-flex.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-full-panel** — `LayoutFullPanelComponent` · 2i/1o/0p/1m · `projects/ui/src/lib/modules/layout/layout-full-panel/layout-full-panel.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-header** — `LayoutHeaderComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/layout/layout-header/layout-header.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/layout/layout-header/layout-header-default/layout-header-default.stories.ts, projects/ui/src/lib/modules/layout/layout-header/layout-header-logo/layout-header-logo.stories.ts, projects/ui/src/lib/modules/layout/layout-page/layout-page.stories.ts · harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-header-default** — `LayoutHeaderDefaultComponent` · 3i/1o/0p/1m · `projects/ui/src/lib/modules/layout/layout-header/layout-header-default/layout-header-default.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/layout/layout-header/layout-header-default/layout-header-default.stories.ts, projects/ui/src/lib/modules/layout/layout-page/layout-page.stories.ts · harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-header-logo** — `LayoutHeaderLogoComponent` · 3i/0o/0p/4m · `projects/ui/src/lib/modules/layout/layout-header/layout-header-logo/layout-header-logo.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/layout/layout-header/layout-header-logo/layout-header-logo.stories.ts · harness: src/app/e2e-harness/cases/ui-layout.case.ts
- **ta-layout-modal** — `LayoutModalComponent` · 3i/1o/0p/1m · `projects/ui/src/lib/modules/layout/layout-modal/layout-modal.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-overlays.case.ts
- **ta-layout-nav** — `LayoutNavComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/layout/layout-nav/layout-nav.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/layout/layout-page/layout-page.stories.ts, projects/ui/src/lib/modules/layout/with-bottom-nav/layout-with-bottom-nav.stories.ts · harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-not-found** — `LayoutNotFoundComponent` · 0i/0o/0p/1m · `projects/ui/src/lib/modules/layout/layout-error/not-found/not-found.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-layout.case.ts
- **ta-layout-page** — `LayoutPageComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/layout/layout-page/layout-page.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/layout/layout-page/layout-page.stories.ts · harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-panel** — `LayoutPanelComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/layout/layout-panel/layout-panel.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/layout/with-panel/layout-with-panel.stories.ts · harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-side** — `LayoutSideComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/layout/layout-side/layout-side.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-side-content** — `LayoutSideContentComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/layout/layout-side/layout-side-content/layout-side-content.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-side-cta** — `LayoutSideCtaComponent` · 2i/0o/0p/0m · `projects/ui/src/lib/modules/layout/layout-side/layout-side-cta/layout-side-cta.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-title** — `LayoutTitleComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/layout/layout-title/layout-title.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/layout/layout-page/layout-page.stories.ts · harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-layout-with-bottom-nav** — `LayoutWithBottomNavComponent` · 1i/0o/0p/0m · `projects/ui/src/lib/modules/layout/with-bottom-nav/layout-with-bottom-nav.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/layout/with-bottom-nav/layout-with-bottom-nav.stories.ts · harness: src/app/e2e-harness/cases/ui-layout.case.ts
- **ta-layout-with-panel** — `LayoutWithPanelComponent` · 1i/0o/0p/1m · `projects/ui/src/lib/modules/layout/with-panel/layout-with-panel.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/layout/with-panel/layout-with-panel.stories.ts · harness: src/app/e2e-harness/cases/ui-layout.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-link** — `LinkComponent` · 5i/1o/0p/2m · `projects/ui/src/lib/components/ui/link/link.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/link/link.stories.ts · harness: src/app/e2e-harness/cases/ui-basics.case.ts · page: src/app/showcase/ui/ui.component.html
- **ta-list-container** — `ListContainerComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/list/list-container/list-container.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/list/list.stories.ts · harness: src/app/e2e-harness/cases/ui-list.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-list-element** — `ListElementComponent` · 2i/1o/0p/0m · `projects/ui/src/lib/modules/list/element/list-element.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/list/list.stories.ts · harness: src/app/e2e-harness/cases/ui-list.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-list-extra-information** — `ListExtraInformationComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/list/extra-information/list-extra-information.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/list/list.stories.ts · harness: src/app/e2e-harness/cases/ui-list.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-list-sub-title** — `ListSubTitleComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/list/sub-title/list-sub-title.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/list/list.stories.ts · harness: src/app/e2e-harness/cases/ui-list.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-list-tag** — `ListTagComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/list/tag/list-tag.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/list/list.stories.ts · harness: src/app/e2e-harness/cases/ui-list.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-list-title** — `ListTitleComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/modules/list/title/list-title.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/list/list.stories.ts · harness: src/app/e2e-harness/cases/ui-list.case.ts · page: src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-loader** — `LoaderComponent` · 4i/0o/0p/1m · `projects/ui/src/lib/modules/container/loader/loader.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-container.case.ts · page: src/app/showcase/container/container.component.html
- **ta-logo** — `LogoComponent` · 3i/0o/1p/1m · `projects/ui/src/lib/components/ui/logo/logo.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-basics.case.ts
- **ta-megaoctet** — `MegaoctetComponent` · 2i/0o/1p/0m · `projects/ui/src/lib/components/ui/megaoctet/megaoctet.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-messenger-button** — `MessengerButtonComponent` · 5i/1o/0p/2m · `projects/ui/src/lib/components/ui/button/messenger/messenger-button.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-buttons.case.ts · page: src/app/showcase/ui/ui.component.html
- **ta-modal** — `TaModalComponent` · 5i/1o/0p/3m · `projects/ui/src/lib/modules/layout/modal/modal.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-overlays.case.ts · page: src/app/showcase/ui-layout/ui-layout.component.html
- **ta-new** — `NewComponent` · 3i/0o/0p/0m · `projects/ui/src/lib/components/ui/new/new.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-basics.case.ts
- **ta-notification-badge** — `NotificationBadgeComponent` · 4i/0o/0p/1m · `projects/ui/src/lib/components/ui/notification-badge/notification-badge/notification-badge.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/notification-badge/notification-badge.stories.ts · harness: src/app/e2e-harness/cases/ui-notification.case.ts · page: src/app/showcase/ui-feedback/ui-feedback.component.html
- **ta-notification-badge-container** — `NotificationBadgeContainerComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/components/ui/notification-badge/notification-badge-container.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/notification-badge/notification-badge.stories.ts · harness: src/app/e2e-harness/cases/ui-notification.case.ts
- **ta-overlay-panel** — `TaOverlayPanelComponent` · 2i/1o/0p/2m · `projects/ui/src/lib/modules/overlay-panel/overlay-panel/overlay-panel.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-overlays.case.ts
- **ta-picture-info-message** — `PictureInfoMessageComponent` · 4i/0o/1p/3m · `projects/ui/src/lib/components/ui/picture-info-message/picture-info-message.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts
- **ta-progress** — `ProgressComponent` · 3i/0o/0p/2m · `projects/ui/src/lib/components/ui/progress/progress.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-progress.case.ts · page: src/app/showcase/ui/ui.component.html, src/app/showcase/ui-progress/ui-progress.component.html
- **ta-progress-bar** — `ProgressBarComponent` · 2i/0o/0p/0m · `projects/ui/src/lib/components/ui/progress-bar/progress-bar.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-progress.case.ts · page: src/app/showcase/ui-progress/ui-progress.component.html
- **ta-progress-bar-data** — `ProgressBarDataComponent` · 6i/0o/1p/0m · `projects/ui/src/lib/components/ui/progress/progress-bar-data/progress-bar-data.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-progress.case.ts · page: src/app/showcase/ui-progress/ui-progress.component.html
- **ta-progress-circle** — `ProgressCircleComponent` · 3i/0o/2p/0m · `projects/ui/src/lib/components/ui/progress/circle/progress-circle/progress-circle.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-progress.case.ts · page: src/app/showcase/ui/ui.component.html, src/app/showcase/ui-progress/ui-progress.component.html
- **ta-pwa** — `PwaComponent` · 0i/1o/0p/3m · `projects/ui/src/lib/components/ui/pwa/pwa.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/misc.case.ts
- **ta-rating** — `RatingComponent` · 8i/2o/1p/5m · `projects/ui/src/lib/components/ui/rating/rating.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-progress.case.ts · page: src/app/showcase/ui/ui.component.html, src/app/showcase/ui-progress/ui-progress.component.html
- **ta-share-button** — `ShareButtonComponent` · 6i/1o/0p/3m · `projects/ui/src/lib/components/ui/button/share/share-button.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-buttons.case.ts
- **ta-swiper** — `SwiperComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/components/ui/swiper/swiper.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/container/swiper-light/swiper-light.stories.ts · harness: src/app/e2e-harness/cases/ui-container.case.ts · page: src/app/showcase/ui-progress/ui-progress.component.html
- **ta-swiper-light** — `SwiperLightComponent` · 5i/0o/0p/0m · `projects/ui/src/lib/modules/container/swiper-light/swiper-light.component.ts`
  - matière existante — story: projects/ui/src/lib/modules/container/swiper-light/swiper-light.stories.ts · harness: src/app/e2e-harness/cases/ui-container.case.ts · page: src/app/showcase/ui-progress/ui-progress.component.html
- **ta-template-modal-container** — `TemplateModalContainer` · 4i/1o/0p/1m · `projects/ui/src/lib/modules/layout/layout-modal/layout-modal-container/layout-modal-container.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-overlays.case.ts
- **ta-text** — `TextComponent` · 3i/0o/0p/1m · `projects/ui/src/lib/components/ui/text/text.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/text/text.stories.ts · harness: src/app/e2e-harness/cases/core.case.ts, src/app/e2e-harness/cases/ui-text.case.ts · page: src/app/showcase/charts/charts.component.html, src/app/showcase/container/container.component.html, src/app/showcase/features/features.component.html, src/app/showcase/files/files.component.html, src/app/showcase/icons/icons.component.html, src/app/showcase/theme/theme.component.html, src/app/showcase/ui/ui.component.html, src/app/showcase/ui-cards-lists/ui-cards-lists.component.html, src/app/showcase/ui-display/ui-display.component.html, src/app/showcase/ui-feedback/ui-feedback.component.html, src/app/showcase/ui-layout/ui-layout.component.html, src/app/showcase/ui-navigation/ui-navigation.component.html, src/app/showcase/ui-progress/ui-progress.component.html, src/app/showcase/user/user.component.html, src/app/showcase/utils/utils.component.html, src/app/showcase/wysiswyg/wysiswyg.component.html
- **ta-time-ago** — `TimeAgoComponent` · 2i/0o/2p/1m · `projects/ui/src/lib/components/ui/time-ago/time-ago.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-title** — `TitleComponent` · 4i/0o/0p/0m · `projects/ui/src/lib/components/ui/title/title.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/title/title.stories.ts · harness: src/app/e2e-harness/cases/ui-title.case.ts · page: src/app/showcase/charts/charts.component.html, src/app/showcase/container/container.component.html, src/app/showcase/features/features.component.html, src/app/showcase/files/files.component.html, src/app/showcase/form/form.component.html, src/app/showcase/icons/icons.component.html, src/app/showcase/theme/theme.component.html, src/app/showcase/ui/ui.component.html, src/app/showcase/ui-cards-lists/ui-cards-lists.component.html, src/app/showcase/ui-display/ui-display.component.html, src/app/showcase/ui-feedback/ui-feedback.component.html, src/app/showcase/ui-layout/ui-layout.component.html, src/app/showcase/ui-navigation/ui-navigation.component.html, src/app/showcase/ui-progress/ui-progress.component.html, src/app/showcase/user/user.component.html, src/app/showcase/utils/utils.component.html, src/app/showcase/wysiswyg/wysiswyg.component.html
- **ta-toast** — `ToastComponent` · 1i/0o/0p/0m · `projects/ui/src/lib/components/ui/toast/toast.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-notification.case.ts
- **ta-toggle-card** — `ToggleCardComponent` · 5i/1o/0p/1m · `projects/ui/src/lib/components/ui/toggle-card/toggle-card.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-interactive.case.ts · page: src/app/showcase/ui/ui.component.html, src/app/showcase/ui-cards-lists/ui-cards-lists.component.html
- **ta-tree-children** — `TaTreeChildrenComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/components/ui/tree/tree-children/tree-children.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-tree.case.ts · page: src/app/showcase/ui-navigation/ui-navigation.component.html
- **ta-tree-container** — `TaTreeContainerComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/components/ui/tree/tree-container/tree-container.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/tree/tree.stories.ts · harness: src/app/e2e-harness/cases/ui-tree.case.ts · page: src/app/showcase/ui-navigation/ui-navigation.component.html
- **ta-tree-item** — `TaTreeItemComponent` · 0i/0o/0p/0m · `projects/ui/src/lib/components/ui/tree/tree-item/tree-item.component.ts`
  - matière existante — story: projects/ui/src/lib/components/ui/tree/tree.stories.ts · harness: src/app/e2e-harness/cases/ui-tree.case.ts · page: src/app/showcase/ui-navigation/ui-navigation.component.html
- **ta-trigram** — `TrigramComponent` · 2i/0o/0p/1m · `projects/ui/src/lib/components/ui/trigram/trigram.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-typed-message** — `TypedMessageComponent` · 2i/0o/1p/0m · `projects/ui/src/lib/components/ui/typed-message/typed-message.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts
- **ta-user-logo** — `UserLogoComponent` · 4i/0o/1p/1m · `projects/ui/src/lib/components/ui/user-logo/user-logo.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-users-list** — `UsersListComponent` · 1i/0o/0p/0m · `projects/ui/src/lib/components/ui/users-list/users-list.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts · page: src/app/showcase/ui-display/ui-display.component.html
- **ta-validation-modal** — `ValidationModal` · 2i/2o/2p/2m · `projects/ui/src/lib/modules/container/validation/modal/modal-validation.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-overlays.case.ts
- **ta-veriff-button** — `VeriffButtonComponent` · 4i/1o/0p/2m · `projects/ui/src/lib/components/ui/button/veriff/veriff-button.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-buttons.case.ts
- **ta-whatsapp-button** — `WhatsappButtonComponent` · 5i/1o/0p/2m · `projects/ui/src/lib/components/ui/button/whatsapp/whatsapp-button.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-buttons.case.ts · page: src/app/showcase/ui/ui.component.html
- **ta-wrapped-icon** — `WrappedIconComponent` · 3i/0o/0p/1m · `projects/ui/src/lib/components/ui/wrapped-icon/wrapped-icon.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/ui-display.case.ts

## @ta/form-input — 25 composants

- **ta-component-selector-modal** — `ComponentSelectorModal` · 2i/1o/0p/1m · `projects/form/form-input/src/lib/components/input/component/component.component.ts`
  - _aucune matière existante_
- **ta-form-label** — `FormLabelComponent` · 2i/0o/0p/0m · `projects/form/form-input/src/lib/components/label/label.component.ts`
  - _aucune matière existante_
- **ta-input-checkbox** — `CheckboxComponent` · 0i/0o/0p/0m · `projects/form/form-input/src/lib/components/input/checkbox/checkbox.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-choices** — `InputChoicesComponent` · 0i/0o/0p/4m · `projects/form/form-input/src/lib/components/input/choices/choices.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-color-picker** — `ColorPickerComponent` · 0i/0o/0p/1m · `projects/form/form-input/src/lib/components/input/color-picker/color-picker.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-component** — `ComponentInputComponent` · 0i/0o/0p/1m · `projects/form/form-input/src/lib/components/input/component/component.component.ts`
  - _aucune matière existante_
- **ta-input-culture** — `CultureComponent` · 0i/0o/0p/0m · `projects/form/form-input/src/lib/components/input/culture/culture.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-date-picker** — `DatePickerComponent` · 0i/0o/0p/1m · `projects/form/form-input/src/lib/components/input/date-picker/date-picker.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-dropdown** — `DropdownComponent` · 1i/0o/0p/6m · `projects/form/form-input/src/lib/components/input/dropdown/dropdown.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-image** — `InputImageComponent` · 0i/0o/3p/0m · `projects/form/form-input/src/lib/components/input/image/input-image.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs-media.case.ts
- **ta-input-images** — `InputImagesComponent` · 0i/0o/0p/3m · `projects/form/form-input/src/lib/components/input/images/input-images.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs-media.case.ts
- **ta-input-label** — `LabelComponent` · 0i/0o/0p/0m · `projects/form/form-input/src/lib/components/input/label/label.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-logo** — `InputLogoComponent` · 0i/0o/0p/3m · `projects/form/form-input/src/lib/components/input/logo/input-logo.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs-media.case.ts
- **ta-input-phone** — `InputPhoneComponent` · 0i/0o/0p/2m · `projects/form/form-input/src/lib/components/input/phone/input-phone.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-radio** — `RadioComponent` · 0i/0o/0p/3m · `projects/form/form-input/src/lib/components/input/radio/radio.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-rating** — `RatingComponent` · 0i/0o/0p/1m · `projects/form/form-input/src/lib/components/input/rating/rating.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-schema** — `InputSchemaComponent` · 0i/0o/3p/2m · `projects/form/form-input/src/lib/components/input/schema/input-schema.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs-media.case.ts
- **ta-input-slider** — `SliderComponent` · 0i/0o/0p/0m · `projects/form/form-input/src/lib/components/input/slider/slider.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-switch** — `SwitchComponent` · 0i/0o/0p/0m · `projects/form/form-input/src/lib/components/input/switch/switch.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-textarea** — `TextareaComponent` · 0i/0o/0p/0m · `projects/form/form-input/src/lib/components/input/textarea/textarea.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-time-picker** — `TimePickerComponent` · 0i/0o/0p/0m · `projects/form/form-input/src/lib/components/input/time-picker/time-picker.component.ts`
  - matière existante — story: projects/form/form-input/src/lib/components/input/time-picker/time-picker.stories.ts · harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-toggle** — `ToggleComponent` · 0i/0o/0p/0m · `projects/form/form-input/src/lib/components/input/toggle/toggle.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs.case.ts
- **ta-input-upload** — `UploadComponent` · 0i/1o/0p/9m · `projects/form/form-input/src/lib/components/input/upload/upload.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs-media.case.ts
- **ta-input-wysiswyg** — `WysiswygComponent` · 0i/0o/0p/2m · `projects/form/form-input/src/lib/components/input/wysiswyg/wysiswyg.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/form-inputs-media.case.ts
- **ta-search-field** — `SearchFieldComponent` · 4i/1o/0p/3m · `projects/form/form-input/src/lib/components/input/search-field/search-field.component.ts`
  - matière existante — story: projects/form/form-input/src/lib/components/input/search-field/search-field.stories.ts · harness: src/app/e2e-harness/cases/form-inputs.case.ts

## @ta/files-basic — 9 composants

- **ta-documents-list** — `DocumentsListComponent` · 5i/2o/1p/4m · `projects/files/files-basic/src/lib/components/documents/list/list.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/documents.case.ts · page: src/app/showcase/files/files.component.html
- **ta-excel-viewer** — `ExcelViewerComponent` · 1i/0o/0p/0m · `projects/files/files-basic/src/lib/components/preview/viewers/excel-viewer/excel-viewer.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/files.case.ts
- **ta-files-edit** — `FileEditComponent` · 2i/1o/0p/15m · `projects/files/files-basic/src/lib/components/edit/files-edit.component.ts`
  - matière existante — story: projects/files/files-basic/src/lib/components/edit/files-edit.stories.ts · harness: src/app/e2e-harness/cases/files-edit.case.ts
- **ta-files-list** — `FileListComponent` · 2i/3o/0p/4m · `projects/files/files-basic/src/lib/components/list/files-list.component.ts`
  - matière existante — story: projects/files/files-basic/src/lib/components/list/files-list.stories.ts · harness: src/app/e2e-harness/cases/files.case.ts · page: src/app/showcase/files/files.component.html
- **ta-files-preview** — `FilesPreviewComponent` · 1i/0o/0p/1m · `projects/files/files-basic/src/lib/components/preview/preview.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/files.case.ts · page: src/app/showcase/files/files.component.html
- **ta-files-preview-modal** — `PreviewModal` · 2i/1o/0p/0m · `projects/files/files-basic/src/lib/components/preview/preview.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/files.case.ts · page: src/app/showcase/files/files.component.html
- **ta-image-viewer** — `ImageViewerComponent` · 1i/0o/0p/0m · `projects/files/files-basic/src/lib/components/preview/viewers/image-viewer/image-viewer.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/files.case.ts
- **ta-pdf-viewer** — `PdfViewerComponent` · 1i/0o/0p/0m · `projects/files/files-basic/src/lib/components/preview/viewers/pdf-viewer/pdf-viewer.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/files.case.ts
- **ta-word-viewer** — `WordViewerComponent` · 1i/0o/0p/0m · `projects/files/files-basic/src/lib/components/preview/viewers/word-viewer/word-viewer.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/files.case.ts

## @ta/core — 8 composants

- **ta-filter-container** — `FilterContainerComponent` · 1i/1o/0p/3m · `projects/core/src/lib/components/filters/filter-container/filter-container.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/core.case.ts
- **ta-filter-displayer** — `FilterDisplayerComponent` · 3i/1o/2p/3m · `projects/core/src/lib/components/filters/filter-displayer/filter-displayer.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/core.case.ts
- **ta-filters-container** — `FiltersContainerComponent` · 2i/2o/0p/2m · `projects/core/src/lib/components/filters/container/filters-container.component.ts`
  - matière existante — story: projects/core/src/lib/components/filters/container/filters-container.stories.ts · harness: src/app/e2e-harness/cases/core.case.ts
- **ta-filters-tag** — `FiltersTagComponent` · 1i/1o/0p/1m · `projects/core/src/lib/components/filters/tag/filters-tag.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/core.case.ts
- **ta-google-maps** — `MapComponent` · 0i/0o/0p/4m · `projects/core/src/lib/modules/maps/components/map/map.component.ts`
  - _aucune matière existante_
- **ta-search-displayer** — `SearchDisplayerComponent` · 3i/1o/1p/2m · `projects/core/src/lib/components/historical-research/search-displayer.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/core.case.ts
- **ta-search-history-displayer** — `SearchHistoryDisplayerComponent` · 3i/1o/2p/1m · `projects/core/src/lib/components/historical-research/search-history-displayer/search-history-displayer.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/core.case.ts
- **ta-text-to-clipboard** — `TextToClipboardComponent` · 2i/0o/0p/0m · `projects/core/src/lib/components/text-to-clipboard/text-to-clipboard.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/core.case.ts

## @ta/features — 8 composants

- **ta-grid** — `TaGridComponent` · 3i/2o/7p/8m · `projects/features/src/lib/features/grid/components/grid/grid.component.ts`
  - matière existante — page: src/app/showcase/features/features.component.html
- **ta-grid-container** — `TaGridContainerComponent` · 4i/0o/0p/0m · `projects/features/src/lib/features/grid/components/container/container.component.ts`
  - matière existante — page: src/app/showcase/features/features.component.html
- **ta-grid-control** — `TaGridControlComponent` · 2i/0o/7p/5m · `projects/features/src/lib/features/grid/components/control/control.component.ts`
  - matière existante — page: src/app/showcase/features/features.component.html
- **ta-grid-filters-panel** — `TaGridFiltersPanel` · 0i/1o/1p/1m · `projects/features/src/lib/features/grid/components/control/control.component.ts`
  - _aucune matière existante_
- **ta-grid-form** — `TaGridFormComponent` · 5i/0o/0p/3m · `projects/features/src/lib/features/grid/components/form/form.component.ts`
  - matière existante — page: src/app/showcase/features/features.component.html
- **ta-grid-highlight-filters** — `TaGridHighlightFiltersComponent` · 2i/0o/0p/2m · `projects/features/src/lib/features/grid/components/highlight-filters/highlight-filters.component.ts`
  - matière existante — page: src/app/showcase/features/features.component.html
- **ta-grid-search** — `TaGridSearchComponent` · 1i/0o/0p/1m · `projects/features/src/lib/features/grid/components/search/search.component.ts`
  - matière existante — page: src/app/showcase/features/features.component.html
- **ta-grid-tags** — `TaGridTagsComponent` · 0i/0o/3p/5m · `projects/features/src/lib/features/grid/components/tags/tags.component.ts`
  - matière existante — page: src/app/showcase/features/features.component.html

## @ta/menu — 7 composants

- **ta-bottom-sheet-template-basic** — `BottomSheetTemplateBasicComponent` · 0i/0o/0p/0m · `projects/menu/src/lib/components/bottom-sheet/templates/basic/bottom-sheet-template-basic.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/menu-bottom-sheets.case.ts
- **ta-bottom-sheet-template-generic** — `BottomSheetTemplateGenericComponent` · 0i/0o/0p/0m · `projects/menu/src/lib/components/bottom-sheet/templates/generic/bottom-sheet-template-generic.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/menu-bottom-sheets.case.ts
- **ta-context-menu** — `ContextMenuComponent` · 1i/0o/0p/6m · `projects/menu/src/lib/components/context-menu/context-menu.component.ts`
  - matière existante — story: projects/menu/src/lib/components/context-menu/context-menu.stories.ts · harness: src/app/e2e-harness/cases/menu.case.ts · page: src/app/showcase/ui-navigation/ui-navigation.component.html
- **ta-main-menu** — `MainMenuComponent` · 4i/0o/0p/4m · `projects/menu/src/lib/components/main-menu/main-menu.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/menu.case.ts
- **ta-menu** — `MenuComponent` · 2i/0o/1p/0m · `projects/menu/src/lib/components/menu/menu.component.ts`
  - matière existante — story: projects/menu/src/lib/components/menu/menu.stories.ts, projects/menu/src/lib/components/navigation/navigation.stories.ts, projects/ui/src/lib/modules/layout/layout-page/layout-page.stories.ts, projects/ui/src/lib/modules/layout/with-bottom-nav/layout-with-bottom-nav.stories.ts · harness: src/app/e2e-harness/cases/menu.case.ts · page: src/app/showcase/ui-navigation/ui-navigation.component.html, src/app/showcase/user/user.component.html
- **ta-menu-item** — `MenuItemComponent` · 2i/0o/0p/11m · `projects/menu/src/lib/components/menu/item/menu-item.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/menu.case.ts
- **ta-menu-navigation** — `NavigationComponent` · 5i/0o/0p/4m · `projects/menu/src/lib/components/navigation/navigation.component.ts`
  - matière existante — story: projects/menu/src/lib/components/navigation/navigation.stories.ts · harness: src/app/e2e-harness/cases/menu.case.ts · page: src/app/showcase/ui-navigation/ui-navigation.component.html, src/app/showcase/user/user.component.html

## @ta/charts — 5 composants

- **ta-bar-chart** — `TaChartBarComponent` · 0i/0o/0p/0m · `projects/charts/src/lib/components/bar-chart.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/charts.case.ts · page: src/app/showcase/charts/charts.component.html
- **ta-doughnut-chart** — `TaChartDoughnutComponent` · 0i/0o/0p/0m · `projects/charts/src/lib/components/doughnut-chart.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/charts.case.ts · page: src/app/showcase/charts/charts.component.html
- **ta-line-chart** — `TaChartLineComponent` · 0i/0o/0p/0m · `projects/charts/src/lib/components/line-chart.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/charts.case.ts · page: src/app/showcase/charts/charts.component.html
- **ta-mixed-chart** — `TaChartMixedComponent` · 0i/0o/0p/0m · `projects/charts/src/lib/components/mixed-chart.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/charts.case.ts · page: src/app/showcase/charts/charts.component.html
- **ta-pie-chart** — `TaChartPieComponent` · 1i/0o/0p/0m · `projects/charts/src/lib/components/pie-chart.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/charts.case.ts · page: src/app/showcase/charts/charts.component.html

## @ta/user — 5 composants

- **ta-guard** — `GuardComponent` · 5i/0o/1p/3m · `projects/user/src/lib/modules/user/components/guard/guard.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/user.case.ts
- **ta-login-card** — `LoginCardComponent` · 0i/0o/0p/1m · `projects/user/src/lib/modules/user/components/login/login-card.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/user.case.ts
- **ta-my-account** — `MyAccountComponent` · 3i/2o/1p/4m · `projects/user/src/lib/modules/user/components/my-account/my-account.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/user.case.ts
- **ta-switch-language** — `SwitchLanguageComponent` · 1i/0o/0p/2m · `projects/user/src/lib/modules/user/components/switch-language/switch-language.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/user.case.ts · page: src/app/showcase/user/user.component.html
- **ta-switch-language-cta** — `SwitchLanguageCtaComponent` · 0i/0o/0p/0m · `projects/user/src/lib/modules/user/components/switch-language/switch-language-cta/switch-language-cta.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/user.case.ts · page: src/app/showcase/user/user.component.html

## @ta/icons — 4 composants

- **ta-flag-icon** — `FlagIconComponent` · 2i/0o/0p/1m · `projects/icons/src/lib/components/flag-icon/flag-icon.component.ts`
  - _aucune matière existante_
- **ta-font-icon** — `FontIconComponent` · 2i/0o/0p/0m · `projects/icons/src/lib/components/font-icon/font-icon.component.ts`
  - matière existante — story: projects/icons/src/lib/components/font-icon/font-icon.stories.ts, projects/ui/src/lib/components/ui/button/button.stories.ts · page: src/app/showcase/icons/icons.component.html
- **ta-local-icon** — `LocalIconComponent` · 3i/0o/0p/2m · `projects/icons/src/lib/components/local-icon/local-icon.component.ts`
  - _aucune matière existante_
- **ta-material-icon** — `MaterialIconComponent` · 5i/0o/0p/2m · `projects/icons/src/lib/components/material-icon/material-icon.component.ts`
  - matière existante — story: projects/icons/src/lib/components/material-icon/material-icon.stories.ts, projects/ui/src/lib/modules/layout/layout-header/layout-header-default/layout-header-default.stories.ts · page: src/app/showcase/icons/icons.component.html

## @ta/form-basic — 3 composants

- **ta-edit-field** — `EditFieldComponent` · 5i/1o/0p/3m · `projects/form/form-basic/src/lib/components/edit-field/edit-field.component.ts`
  - _aucune matière existante_
- **ta-form** — `FormComponent` · 9i/2o/0p/4m · `projects/form/form-basic/src/lib/components/form.component.ts`
  - matière existante — page: src/app/showcase/form/form.component.html, src/app/showcase/wysiswyg/wysiswyg.component.html
- **ta-inputs** — `InputsComponent` · 4i/0o/0p/0m · `projects/form/form-basic/src/lib/components/inputs/inputs.component.ts`
  - _aucune matière existante_

## @ta/notification — 3 composants

- **ta-notification-box** — `NotificationBoxComponent` · 0i/0o/0p/1m · `projects/notification/src/lib/components/popup/box/notification-box.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/notification.case.ts
- **ta-notification-bullet** — `BulletComponent` · 1i/0o/1p/0m · `projects/notification/src/lib/components/bullet/bullet.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/notification.case.ts
- **ta-notification-inline** — `NotificationInlineComponent` · 3i/1o/4p/6m · `projects/notification/src/lib/components/popup/inline/notification-inline.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/notification.case.ts · page: src/app/showcase/ui-feedback/ui-feedback.component.html

## @ta/cms — 2 composants

- **ta-cms** — `CmsComponent` · 1i/0o/1p/0m · `projects/cms/src/lib/modules/strapi/components/cms/cms.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/cms.case.ts, src/app/e2e-harness/cases/wysiwyg.case.ts · page: src/app/showcase/wysiswyg/wysiswyg.component.html
- **ta-sale** — `SaleComponent` · 0i/1o/1p/0m · `projects/cms/src/lib/modules/strapi/components/sale/sale.component.ts`
  - _aucune matière existante_

## @ta/wysiswyg — 2 composants

- **ta-cms-editor-blocks** — `BlockTextComponent` · 1i/0o/0p/0m · `projects/wysiswyg/src/lib/modules/wysiswyg/components/block-text/block-text.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/wysiwyg.case.ts · page: src/app/showcase/wysiswyg/wysiswyg.component.html
- **ta-cms-editor-input** — `EditorInputComponent` · 9i/2o/0p/2m · `projects/wysiswyg/src/lib/modules/wysiswyg/components/input/input.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/wysiwyg.case.ts · page: src/app/showcase/wysiswyg/wysiswyg.component.html

## @ta/files-extended — 2 composants

- **ta-files-display** — `FilesDisplayComponent` · 5i/3o/2p/1m · `projects/files/files-extended/src/lib/components/display/files-display.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/files-extended.case.ts
- **ta-files-upload** — `UploadComponent` · 3i/1o/1p/0m · `projects/files/files-extended/src/lib/components/upload/files-upload.component.ts`
  - matière existante — harness: src/app/e2e-harness/cases/files-extended.case.ts · page: src/app/showcase/files/files.component.html

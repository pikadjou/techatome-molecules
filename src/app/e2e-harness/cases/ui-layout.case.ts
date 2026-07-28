import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  LayoutContentComponent,
  LayoutFlexComponent,
  LayoutFullPanelComponent,
  LayoutHeaderComponent,
  LayoutHeaderDefaultComponent,
  LayoutHeaderLogoComponent,
  LayoutNavComponent,
  LayoutNotFoundComponent,
  LayoutPageComponent,
  LayoutPanelComponent,
  LayoutSideComponent,
  LayoutSideContentComponent,
  LayoutSideCtaComponent,
  LayoutTitleComponent,
  LayoutWithBottomNavComponent,
  LayoutWithPanelComponent,
} from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « layout » @ta/ui — briques de mise en page.
 * Route: /e2e-harness/ui-layout
 */
@Component({
  standalone: true,
  selector: "app-case-ui-layout",
  imports: [
    LayoutContentComponent,
    LayoutFlexComponent,
    LayoutFullPanelComponent,
    LayoutHeaderComponent,
    LayoutHeaderDefaultComponent,
    LayoutHeaderLogoComponent,
    LayoutNavComponent,
    LayoutNotFoundComponent,
    LayoutPageComponent,
    LayoutPanelComponent,
    LayoutSideComponent,
    LayoutSideContentComponent,
    LayoutSideCtaComponent,
    LayoutTitleComponent,
    LayoutWithBottomNavComponent,
    LayoutWithPanelComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-layout-page taTestId="ta-layout-page">
      <ta-layout-header taTestId="ta-layout-header">
        <ta-layout-header-logo taTestId="ta-layout-header-logo"></ta-layout-header-logo>
        <ta-layout-title taTestId="ta-layout-title">Titre</ta-layout-title>
      </ta-layout-header>
      <ta-layout-header-default taTestId="ta-layout-header-default"></ta-layout-header-default>
      <ta-layout-nav taTestId="ta-layout-nav"></ta-layout-nav>
      <ta-layout-content taTestId="ta-layout-content">Contenu</ta-layout-content>
      <ta-layout-flex taTestId="ta-layout-flex">Flex</ta-layout-flex>
      <ta-layout-side taTestId="ta-layout-side">
        <ta-layout-side-content taTestId="ta-layout-side-content">Latéral</ta-layout-side-content>
        <ta-layout-side-cta taTestId="ta-layout-side-cta">CTA</ta-layout-side-cta>
      </ta-layout-side>
      <ta-layout-panel taTestId="ta-layout-panel">Panneau</ta-layout-panel>
      <ta-layout-full-panel taTestId="ta-layout-full-panel">Panneau plein</ta-layout-full-panel>
    </ta-layout-page>
    <ta-layout-with-bottom-nav taTestId="ta-layout-with-bottom-nav" [type]="'default'"></ta-layout-with-bottom-nav>
    <ta-layout-with-panel taTestId="ta-layout-with-panel" [open]="false"></ta-layout-with-panel>
    <ta-layout-not-found taTestId="ta-layout-not-found"></ta-layout-not-found>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLayoutCase {}

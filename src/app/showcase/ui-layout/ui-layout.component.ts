import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  ButtonComponent,
  LayoutContentComponent,
  LayoutFlexComponent,
  LayoutFullPanelComponent,
  LayoutHeaderComponent,
  LayoutHeaderDefaultComponent,
  LayoutNavComponent,
  LayoutPageComponent,
  LayoutPanelComponent,
  LayoutSideComponent,
  LayoutSideContentComponent,
  LayoutSideCtaComponent,
  LayoutTitleComponent,
  TextComponent,
  TitleComponent,
} from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    ButtonComponent,
    LayoutContentComponent,
    LayoutFlexComponent,
    LayoutFullPanelComponent,
    LayoutHeaderComponent,
    LayoutHeaderDefaultComponent,
    LayoutNavComponent,
    LayoutPageComponent,
    LayoutPanelComponent,
    LayoutSideComponent,
    LayoutSideContentComponent,
    LayoutSideCtaComponent,
    LayoutTitleComponent,
    PageLayoutComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./ui-layout.component.html",
  styleUrl: "./ui-layout.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLayoutPage {}

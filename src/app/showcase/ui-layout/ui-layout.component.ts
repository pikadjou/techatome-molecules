import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

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
  LayoutWithPanelComponent,
  ModalSize,
  TaModalComponent,
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
    LayoutWithPanelComponent,
    PageLayoutComponent,
    TaModalComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./ui-layout.component.html",
  styleUrl: "./ui-layout.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLayoutPage {
  public showFullPanel = signal(false);
  public showWithPanel = signal(false);
  public activeModal = signal<ModalSize | 'flexible' | null>(null);

  public openModal(size: ModalSize | 'flexible'): void {
    this.activeModal.set(size);
  }

  public closeModal(): void {
    this.activeModal.set(null);
  }
}

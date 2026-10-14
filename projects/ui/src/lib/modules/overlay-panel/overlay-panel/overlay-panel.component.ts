import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  TemplateRef,
  ViewEncapsulation,
  output,
  contentChild,
  viewChild,
} from "@angular/core";

import { Logger } from "@ta/server";
import { TaBaseComponent } from "@ta/utils";

import { TaDefaultPanelComponent } from "../default-panel/default-panel.component";
import { OverlayMenuConfig, TaOverlayService } from "../overlay.service";

@Component({
  selector: "ta-overlay-panel",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./overlay-panel.component.html",
  styleUrl: "./overlay-panel.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class TaOverlayPanelComponent
  extends TaBaseComponent
  implements AfterViewInit
{
  triggerTpl = contentChild<TemplateRef<unknown>>("panelTrigger");
  contentTpl = contentChild<TemplateRef<unknown>>("panelContent");

  triggerHostRef = viewChild.required<ElementRef<HTMLElement>>("triggerHost");

  panelConfig = input.required<OverlayMenuConfig>();

  position = input<"default" | "right">("default");

  closed = output<void>();

  private _configWithDefaults: OverlayMenuConfig<unknown> | null = null;

  private _overlayService = inject(TaOverlayService);

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    const config = this.panelConfig();
    if (!config) {
      Logger.LogWarning("Missing panelConfig");
      return;
    }
    if (!this.contentTpl()) {
      Logger.LogWarning("Missing panelContent");
      return;
    }
    if (!this.triggerTpl()) {
      Logger.LogWarning("Missing panelTrigger");
      return;
    }

    if (this.position() === "right") {
      config.positions = [
        {
          // Position à droite du déclencheur
          originX: "end",
          originY: "center",
          overlayX: "start",
          overlayY: "center",
        },
        {
          // Position à gauche du déclencheur (fallback)
          originX: "start",
          originY: "center",
          overlayX: "end",
          overlayY: "center",
        },
      ];
    }

    this._configWithDefaults = {
      ...config,
      menuComponent: config.menuComponent ?? TaDefaultPanelComponent,
      triggerElement: this.triggerHostRef().nativeElement,
      template: this.contentTpl(),
    };

    this._registerSubscription(
      this._overlayService.onClose$.subscribe(() => {
        this.closed.emit();
      })
    );
  }

  public open(manual = false) {
    if (
      !manual &&
      this._configWithDefaults &&
      this._configWithDefaults.manualTrigger === true
    ) {
      return;
    }
    if (!this._configWithDefaults?.triggerElement) {
      Logger.LogWarning("OverlayPanel: no trigger element resolved");
      return;
    }
    this._overlayService.openMenu(this._configWithDefaults);
  }
  public close() {
    this._overlayService.closeMenu();
  }
}

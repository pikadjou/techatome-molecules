import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  input,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

import { TaBaseComponent } from "@ta/utils";

import { TaDefaultPanelComponent } from "../default-panel/default-panel.component";
import { OverlayMenuConfig, OverlayService } from "../overlay.service";

@Component({
  selector: "ta-overlay-panel",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./overlay-panel.component.html",
  styleUrls: ["./overlay-panel.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TaOverlayPanelComponent
  extends TaBaseComponent
  implements AfterViewInit
{
  @ContentChild("panelTrigger") triggerTpl!: TemplateRef<any>;
  @ContentChild("panelContent") contentTpl!: TemplateRef<any>;

  @ViewChild("triggerHost", { static: true })
  triggerHostRef!: ElementRef<HTMLElement>;

  panelConfig = input.required<OverlayMenuConfig>();

  position = input<"default" | "right">("default");

  @Output() closed = new EventEmitter<void>();

  private _configWithDefaults: OverlayMenuConfig<unknown> | null = null;

  constructor(private overlayService: OverlayService) {
    super();
  }

  ngAfterViewInit(): void {
    const config = this.panelConfig();
    if (!config) {
      console.log("Missing panelConfig");
      return;
    }
    if (!this.contentTpl) {
      console.log("Missing panelContent");
      return;
    }
    if (!this.triggerTpl) {
      console.log("Missing panelTrigger");
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
      triggerElement: this.triggerHostRef?.nativeElement,
      template: this.contentTpl,
    };

    this._registerSubscription(
      this.overlayService.onClose$.subscribe(() => {
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
      console.log("OverlayPanel: no trigger element resolved");
      return;
    }
    this.overlayService.openMenu(this._configWithDefaults);
  }
  public close() {
    this.overlayService.closeMenu();
  }
}

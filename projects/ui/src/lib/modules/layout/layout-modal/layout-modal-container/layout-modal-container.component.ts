import { NgTemplateOutlet } from "@angular/common";
import { Component, TemplateRef, input, output } from "@angular/core";

import { Observable } from "rxjs";

import { TaBaseComponent } from "@ta/utils";

import { TaModalComponent } from "../../modal/modal.component";
import { ModalStyle } from "../layout-modal.component";

export interface TemplateModalContainerData {
  template: TemplateRef<any>;
  askClosing$?: Observable<null>;
  style?: ModalStyle;
}

@Component({
  selector: "ta-template-modal-container",
  template: `
    <ta-modal
      [open]="this.open()"
      [size]="this.modalSize()"
      title=""
      (closeEvent)="this.closeEvent.emit()"
    >
      <div modal-content>
        @if (this.template()) {
          <ng-template [ngTemplateOutlet]="this.template()!"></ng-template>
        }
      </div>
    </ta-modal>
  `,
  standalone: true,
  imports: [TaModalComponent, NgTemplateOutlet],
})
export class TemplateModalContainerComponent extends TaBaseComponent {
  open = input.required<boolean>();
  template = input<TemplateRef<any> | null>(null);
  style = input<ModalStyle>("full");
  askClosing$ = input<Observable<null> | undefined>(undefined);

  closeEvent = output<void>();

  public modalSize() {
    const s = this.style();
    if (s === 'full') return 'fullscreen' as const;
    if (s === 'big') return 'large' as const;
    if (s === 'small') return 'small' as const;
    return 'medium' as const;
  }

  constructor() {
    super();
    // askClosing$ subscription handled by caller via (closeEvent)
  }
}

/** @deprecated utiliser TemplateModalContainerComponent */
export { TemplateModalContainerComponent as TemplateModalContainer };

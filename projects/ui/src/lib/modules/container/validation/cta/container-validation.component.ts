import { Component, EventEmitter, inject, input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { TaBaseComponent } from "@ta/utils";

import { openModal } from "../common-modal";

@Component({
  selector: "ta-container-validation",
  templateUrl: "./container-validation.component.html",
  standalone: true,
})
export class ContainerValidationComponent extends TaBaseComponent {
  disabled = input<boolean>(false);

  @Output()
  validated = new EventEmitter();

  public _dialog = inject(MatDialog);

  constructor() {
    super();
  }

  openModal(): void {
    if (this.disabled()) {
      return;
    }

    this._registerSubscription(
      openModal(this._dialog).subscribe((result) => {
        if (result) {
          this.validated.emit();
        }
      })
    );
  }
}

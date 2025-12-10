import { NgTemplateOutlet } from "@angular/common";
import { Component, Inject, TemplateRef } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { Observable } from "rxjs";

import { TaBaseModal } from "@ta/utils";

import { LayoutModalComponent, ModalStyle } from "../layout-modal.component";

export interface TemplateModalContainerData {
  template: TemplateRef<any>;
  askClosing$?: Observable<null>;
  style?: ModalStyle;
}
@Component({
  selector: "",
  template:
    '<ta-layout-modal [style]="this.style"><ng-template [ngTemplateOutlet]="this.data.template"></ng-template></ta-layout-modal>',
  standalone: true,
  imports: [LayoutModalComponent, NgTemplateOutlet],
})
export class TemplateModalContainer extends TaBaseModal {
  get style(): ModalStyle {
    return this.data.style ?? "full";
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TemplateModalContainerData,
    public dialogRef: MatDialogRef<any>
  ) {
    super();

    if (this.data.askClosing$) {
      this._registerSubscription(
        this.data.askClosing$.subscribe((_) => this.dialogRef.close())
      );
    }
  }
}

import { NgIf } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TemplateModalContainer, TemplateModalContainerData } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

import { CommunicationType } from '../../../services/dto/communication';
import { TemplateVariant } from '../../../services/dto/template';

@Component({
selector: 'ta-communication-template-choice',
  templateUrl: './choice.component.html',,
  standalone: true,
  imports: [NgIf],
})
export class CommunicationTemplateChoiceComponent extends TaBaseComponent implements AfterViewInit {
  @Input()
  type!: CommunicationType;

  @Output()
  closed = new EventEmitter();

  @Output()
  selected = new EventEmitter<TemplateVariant>();

  @ViewChild('template', { read: TemplateRef })
  template!: TemplateRef<void>;

  readonly modal = inject(MatDialog);

  constructor() {
    super();
  }

  ngAfterViewInit() {
    this.openDialog();
  }

  public select(variant: TemplateVariant) {
    this.selected.emit(variant);
    this.modal.closeAll();
  }
  public openDialog(): void {
    this._registerSubscription(
      this.modal
        .open<TemplateModalContainer, TemplateModalContainerData>(TemplateModalContainer, {
          data: {
            template: this.template,
            style: 'classic',
          },
        })
        .afterClosed()
        .subscribe({
          next: () => this.closed.emit(),
        })
    );
  }
}

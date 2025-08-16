import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  TemplateModalContainer,
  TemplateModalContainerData,
} from '@camelot/ui';
import { CamBaseComponent } from '@camelot/utils';

import { CommunicationType } from '../../../services/dto/communication';
import { TemplateVariant } from '../../../services/dto/template';

@Component({
  selector: 'cam-communication-template-choice',
  templateUrl: './choice.component.html',
})
export class CommunicationTemplateChoiceComponent
  extends CamBaseComponent
  implements AfterViewInit
{
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
        .open<TemplateModalContainer, TemplateModalContainerData>(
          TemplateModalContainer,
          {
            data: {
              template: this.template,
              style: 'classic',
            },
          }
        )
        .afterClosed()
        .subscribe({
          next: () => this.closed.emit(),
        })
    );
  }
}

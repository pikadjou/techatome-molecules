import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CamBaseComponent } from '@camelot/utils';

import { ENotificationCode } from '../../../enum';
import { openErrorModal } from '../../error-box/error-box.component';

@Component({
  selector: 'cam-notification-inline',
  templateUrl: './notification-inline.component.html',
  styleUrls: ['./notification-inline.component.scss'],
})
export class NotificationInlineComponent extends CamBaseComponent {
  @Input() set message(value: string) {
    this._message = value;
    this.showMessage = !!value;
  }

  @Input()
  code: ENotificationCode = ENotificationCode.information;

  @Input()
  showClose = true;

  @Output()
  askClose: EventEmitter<null> = new EventEmitter();

  private _matDialog = inject(MatDialog);

  public showMessage = false;

  get message(): string {
    return this._message;
  }
  get isError(): boolean {
    return this.code === ENotificationCode.error;
  }
  get isWarning(): boolean {
    return this.code === ENotificationCode.warning;
  }
  get isInformation(): boolean {
    return this.code === ENotificationCode.information;
  }
  get isSuccess(): boolean {
    return this.code === ENotificationCode.success;
  }

  private _message!: string;

  constructor() {
    super();
  }

  public close = () => {
    this.askClose.emit();
  };

  public getIcon(): string {
    if (this.isError) {
      return 'close-tool';
    }
    if (this.isWarning) {
      return 'warning';
    }
    if (this.isSuccess) {
      return 'checked';
    }
    return 'help';
  }
  public getTypeClass(): string {
    if (this.isError) {
      return 'danger';
    } else if (this.isWarning) {
      return 'warning';
    } else if (this.isInformation) {
      return 'info';
    } else if (this.isSuccess) {
      return 'success';
    } else {
      return '';
    }
  }

  public openErrorBox() {
    openErrorModal(this._matDialog);
  }
}

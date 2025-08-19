import { ENotificationCode } from '../../enum';
import { LAZY_SERVICE_TOKEN } from '../../services/notification.service';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CamServerErrorService, ServerError } from '@ta/server';
import { ButtonComponent, ExpandableTextComponent, LayoutModalComponent, TextComponent, TitleComponent } from '@ta/ui';
import { CamBaseModal, copyTextToClipboard } from '@ta/utils';

@Component({
  selector: 'ta-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent,
    ExpandableTextComponent,
    JsonPipe,
    LayoutModalComponent,
    TextComponent,
    TitleComponent
  ],
})
export class ErrorBoxModal extends CamBaseModal {
  protected _notificationService = inject(LAZY_SERVICE_TOKEN);

  private readonly _errorService = inject(CamServerErrorService);

  public readonly errorList = this._errorService.notifications;

  public copyContent = async (entity: ServerError) => {
    const successNotification = (message: string) => {
      this._notificationService.addNotification(message, ENotificationCode.success);
    };
    const errorNotification = (message: string) => {
      this._notificationService.addNotification(message, ENotificationCode.error);
    };

    await copyTextToClipboard(this._formatEntityForClipboard(entity), successNotification, errorNotification);
  };

  private _formatEntityForClipboard(entity: ServerError): string {
    const errorMessages = entity.errorsMessage?.map(m => `- ${m.message}`).join('\n') ?? 'No error messages';

    return `
      🔴 Error Name:
      ${entity.error?.name ?? 'N/A'}
      
      💬 Message:
      ${entity.error?.message ?? 'N/A'}
      
      📜 Stack:
      ${entity.error?.stack ?? 'N/A'}
      
      📄 Query:
      ${entity.query ?? 'N/A'}
      
      📦 Variables:
      ${JSON.stringify(entity.variables, null, 2)}
      
      🧾 Error Messages:
      ${errorMessages}
      `.trim();
  }
}

export function openErrorModal(dialog: MatDialog) {
  return dialog.open(ErrorBoxModal, {
    width: '600px',
    maxHeight: '80vh'
  });
}

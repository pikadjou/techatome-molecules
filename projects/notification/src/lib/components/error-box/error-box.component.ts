import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { CamServerErrorService, ServerError } from '@camelot/server';
import { CamLayoutModule, CamUiModule } from '@camelot/ui';
import { CamBaseModal, copyTextToClipboard } from '@camelot/utils';

import { ENotificationCode } from '../../enum';
import { LAZY_SERVICE_TOKEN } from '../../services/notification.service';

export const openErrorModal = <T>(dialog: MatDialog): Observable<T> => {
  return dialog.open(ErrorBoxModal).afterClosed();
};

@Component({
  selector: '',
  standalone: true,
  imports: [CamLayoutModule, CamUiModule, JsonPipe],
  templateUrl: './error-box.component.html',
  styleUrl: './error-box.component.scss',
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

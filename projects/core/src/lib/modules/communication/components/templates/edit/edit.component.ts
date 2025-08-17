import { NgIf, AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, inject } from '@angular/core';

import { InputBase } from '@ta/form-model';
import { ENotificationCode, LAZY_SERVICE_TOKEN } from '@ta/notification';
import { TaBaseComponent } from '@ta/utils';
import { Observable } from 'rxjs';

import { Template } from '../../../services/dto/template';
import { CamCommunicationsTemplateFormService } from '../../../services/form/template.service';
import { CamCommunicationsTemplatesService } from '../../../services/templates.service';

@Component({
selector: 'ta-communication-template-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],,
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class CommunicationTemplateEditComponent extends TaBaseComponent implements OnChanges {
  @Input()
  id: string | null = null;

  protected _notificationService = inject(LAZY_SERVICE_TOKEN);

  readonly communicationsTemplateFormService = inject(CamCommunicationsTemplateFormService);
  readonly communicationsTemplateService = inject(CamCommunicationsTemplatesService);

  public template$: Observable<Template> | null = null;
  public form: InputBase<any>[] | null = null;

  ngOnChanges(): void {
    if (this.id) {
      this._fetch();
    } else {
      this.setForm();
    }
  }

  public setForm(template?: Template) {
    this.form = this.communicationsTemplateFormService.getTemplateForm(template);
  }

  public createTemplate(data: any) {
    this.requestState.asked();
    if (!this.id) {
      const template = this.communicationsTemplateFormService.formatTemplateForm(data);

      this.communicationsTemplateService.createTemplate$(template).subscribe({
        next: ({ id }) => {
          this.id = id;
          this._fetch();
        },
        complete: () => {
          this._notificationService.addNotification('notification.common.success', ENotificationCode.success);
          this.requestState.completed();
        },
        error: () => {
          this.requestState.completed();
          this._notificationService.addNotification('notification.common.error', ENotificationCode.error);
        },
      });
    } else {
      const template = {
        ...this.communicationsTemplateFormService.formatTemplateForm(data),
        ...{ id: this.id },
      };

      this.communicationsTemplateService.updateTemplate$(template).subscribe({
        complete: () => {
          this._notificationService.addNotification('notification.common.success', ENotificationCode.success);
          this.requestState.completed();
        },
        error: () => {
          this.requestState.completed();
          this._notificationService.addNotification('notification.common.error', ENotificationCode.error);
        },
      });
    }
  }

  private _fetch() {
    if (!this.id) {
      return;
    }
    this.template$ = this.communicationsTemplateService.communicationTemplate.get$(this.id);

    this.requestState.asked();

    this.communicationsTemplateService.fetchConversationTemplate$(this.id).subscribe({
      next: template => {
        this.setForm(template);
      },
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }
}

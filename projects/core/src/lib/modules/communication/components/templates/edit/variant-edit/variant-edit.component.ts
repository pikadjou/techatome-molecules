import { Component, Input, OnInit, inject } from '@angular/core';

import { Observable, combineLatest } from 'rxjs';

import { InputBase } from '@camelot/form-model';
import { ENotificationCode, LAZY_SERVICE_TOKEN } from '@camelot/notification';
import { CamBaseComponent } from '@camelot/utils';

import { TemplateVariant } from '../../../../services/dto/template';
import { CamCommunicationsTemplateFormService } from '../../../../services/form/template.service';
import { CamCommunicationsTemplatesService } from '../../../../services/templates.service';

@Component({
  selector: 'cam-communication-template-variant-edit',
  templateUrl: './variant-edit.component.html',
  styleUrls: ['./variant-edit.component.scss'],
})
export class VariantEditComponent extends CamBaseComponent implements OnInit {
  @Input()
  id!: string;

  @Input()
  variants: TemplateVariant[] = [];

  protected _notificationService = inject(LAZY_SERVICE_TOKEN);

  readonly communicationsTemplateFormService = inject(
    CamCommunicationsTemplateFormService
  );
  readonly communicationsTemplateService = inject(
    CamCommunicationsTemplatesService
  );

  public templateKeys$: Observable<string[] | null>;
  public form: InputBase<any>[] | null = null;

  constructor() {
    super();
    this.templateKeys$ = this.communicationsTemplateService.templateKeys.get$();
    this.communicationsTemplateService
      .fetchConversationTemplateKeys$()
      .subscribe();
  }
  ngOnInit() {
    this.setForm(this.variants);
  }
  public setForm(variants?: TemplateVariant[]) {
    this.form = this.communicationsTemplateFormService.getTemplateVariantForm(
      variants ?? []
    );
  }

  public createVariants(data: any) {
    this.requestState.asked();

    const variants =
      this.communicationsTemplateFormService.formatTemplatevariantForm(data);

    const request$ = variants.map((variant) => {
      const findVariant = this.variants.find(
        (v) => v.culture === variant.culture
      );

      if (findVariant) {
        return this.communicationsTemplateService.updateVariants$({
          ...variant,
          ...{ id: findVariant.id },
        });
      }

      return this.communicationsTemplateService.createVariants$({
        ...variant,
        ...{ templateId: this.id },
      });
    });

    combineLatest(request$).subscribe({
      complete: () => {
        this.requestState.completed();
        this._notificationService.addNotification(
          'notification.common.success',
          ENotificationCode.success
        );
      },
      error: () => {
        this.requestState.completed();
        this._notificationService.addNotification(
          'notification.common.error',
          ENotificationCode.error
        );
      },
    });
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';

import { Observable } from 'rxjs';

import { CamBaseComponent } from '@camelot/utils';

import { CommunicationType } from '../../../../services/dto/communication';
import { Template, TemplateVariant } from '../../../../services/dto/template';
import { CamCommunicationsTemplatesService } from '../../../../services/templates.service';

@Component({
  selector: '',
  template: '',
})
export class CommunicationTemplateAbstractChoiceComponent
  extends CamBaseComponent
  implements OnInit
{
  @Input()
  type!: CommunicationType;

  @Output()
  selected = new EventEmitter<TemplateVariant>();

  readonly communicationsTemplateService = inject(
    CamCommunicationsTemplatesService
  );

  public list$: Observable<Template[]> | null = null;
  public showTemplate: Template | null = null;

  constructor() {
    super();
  }
  ngOnInit() {
    this.list$ =
      this.communicationsTemplateService.communicationTemplatesByComminucationType.get$(
        this.type.toString()
      );

    this._fetch();
  }

  public select(variant: TemplateVariant) {
    this.selected.emit(variant);
  }

  public hover(template: Template) {
    this.showTemplate = template;
  }
  private _fetch() {
    this.requestState.asked();
    this.communicationsTemplateService
      .fetchConversationTemplatesByComminucationType$(this.type)
      .subscribe({
        complete: () => {
          this.requestState.completed();
        },
        error: (error: HttpErrorResponse) =>
          this.requestState.onError(error.status, error.statusText),
      });
  }
}

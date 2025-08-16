import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

import { CamBaseComponent } from '@camelot/utils';

@Component({
  selector: 'cam-layout-header-default',
  templateUrl: './layout-header-default.component.html',
  styleUrls: ['./layout-header-default.component.scss'],
})
export class LayoutHeaderDefaultComponent extends CamBaseComponent {
  @Input()
  showBack: boolean = true;

  @Input()
  menuTemplate?: TemplateRef<any>;

  @Input()
  title?: string;

  @Output()
  backEvent = new EventEmitter();

  public showBackAction() {
    this._location.back();
    this.backEvent.emit();
  }
}

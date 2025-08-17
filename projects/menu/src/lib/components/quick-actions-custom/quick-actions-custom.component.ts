import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

import { SwiperData, SwiperComponent } from '@ta/ui';

@Component({
selector: 'ta-quick-actions-custom',
  templateUrl: './quick-actions-custom.component.html',
  styleUrls: ['./quick-actions-custom.component.scss'],
  standalone: true,
  imports: [NgIf, SwiperComponent],
})
export class QuickActionsCustomComponent {
  @Input()
  public elementPerPage: number = 3.5;

  @Input()
  public swipeTemplate!: TemplateRef<any>;
  @Input()
  public slidesPerGroup: number = 1;

  @Input()
  public isFreeMode: boolean = true;

  @Output()
  public onSlideChanged = new EventEmitter<number>();

  @Input()
  public elements!: SwiperData[];
}

import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { CamDeviceInfoService } from '@ta/capacitor';
import { TaBaseComponent } from '@ta/utils';

@Component({
  selector: 'ta-swiper-light',
  templateUrl: './swiper-light.component.html',
  styleUrls: ['./swiper-light.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, NgClass, AsyncPipe],
})
export class SwiperLightComponent extends TaBaseComponent implements OnInit {
  @Input()
  items!: any[];

  @Input()
  template!: TemplateRef<any>;

  @Input()
  swiperClasses = 'g-space-sm';

  @Input()
  containerClasses?: string;

  @Input()
  forced?: boolean = false;

  public classes: string = '';

  constructor(private _deviceInfoService: CamDeviceInfoService) {
    super();
  }

  ngOnInit() {
    if (this.forced) {
      this.classes = `items ${this.swiperClasses ?? ''}`;
    } else {
      this._registerSubscription(
        this._deviceInfoService.os$.subscribe(os => {
          this.classes = this._deviceInfoService.isMobileOs(os)
            ? `items ${this.swiperClasses ?? ''}`
            : (this.containerClasses ?? '');
        })
      );
    }
  }

  public track = (_: any, item: any) => {
    if (item.hasOwnProperty('id')) {
      return this.trackById(_, item);
    }
    if (item.hasOwnProperty('key')) {
      return this.trackByKey(_, item);
    }
    return item;
  };
}

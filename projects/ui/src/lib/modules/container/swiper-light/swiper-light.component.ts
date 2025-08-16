import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { CamDeviceInfoService } from '@camelot/capacitor';
import { CamBaseComponent } from '@camelot/utils';

@Component({
  selector: 'cam-swiper-light',
  templateUrl: './swiper-light.component.html',
  styleUrls: ['./swiper-light.component.scss'],
})
export class SwiperLightComponent extends CamBaseComponent implements OnInit {
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
        this._deviceInfoService.os$.subscribe((os) => {
          this.classes = this._deviceInfoService.isMobileOs(os)
            ? `items ${this.swiperClasses ?? ''}`
            : this.containerClasses ?? '';
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

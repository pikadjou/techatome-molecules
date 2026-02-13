import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs';

export interface SwiperData {
  visible$: Observable<boolean>;
  key: string;
}

@Component({
  selector: 'ta-swiper',
  standalone: true,
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
})
export class SwiperComponent {}

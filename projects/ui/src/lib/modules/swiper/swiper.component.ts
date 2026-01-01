import { CommonModule } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  EventEmitter,
  input,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

import { Observable } from "rxjs";
import { Swiper } from "swiper/types";

export interface SwiperData {
  visible$: Observable<boolean>;
  key: string;
}

@Component({
  selector: "ta-swiper",
  standalone: true,
  templateUrl: "./swiper.component.html",
  styleUrls: ["./swiper.component.scss"],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
})
export class SwiperComponent {
  swipeTemplate = input.required<TemplateRef<any>>();

  slides = input.required<SwiperData[]>();

  slidesPerPage = input<number>(3.5);

  slidesPerGroup = input<number>(1);

  isFreeMode = input<boolean>(true);

  startAt = input<number>(1);

  @Output()
  public onSlideChanged = new EventEmitter<number>();

  @ViewChild("swiperContainer", { static: false })
  swiperContainer!: ElementRef<{ swiper: Swiper }>;

  constructor() {}

  ngAfterViewInit() {
    if (this.startAt()) {
      this.swiperContainer.nativeElement.swiper.slideTo(this.startAt());
    }
  }

  public trackByKey(_: any, item: SwiperData): string {
    return item.key;
  }

  public slideChanged($event: any) {
    if ($event.detail) this.onSlideChanged.emit($event.detail[0].activeIndex);
  }
}

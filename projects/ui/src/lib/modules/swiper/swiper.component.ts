import { CommonModule } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  EventEmitter,
  Input,
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
  @Input()
  public swipeTemplate!: TemplateRef<any>;

  @Input()
  public slides!: SwiperData[];

  @Input()
  public slidesPerPage: number = 3.5;

  @Input()
  public slidesPerGroup: number = 1;

  @Input()
  public isFreeMode: boolean = true;

  @Input()
  public startAt: number = 1;

  @Output()
  public onSlideChanged = new EventEmitter<number>();

  @ViewChild("swiperContainer", { static: false })
  swiperContainer!: ElementRef<{ swiper: Swiper }>;

  constructor() {}

  ngAfterViewInit() {
    if (this.startAt) {
      this.swiperContainer.nativeElement.swiper.slideTo(this.startAt);
    }
  }

  public trackByKey(_: any, item: SwiperData): string {
    return item.key;
  }

  public slideChanged($event: any) {
    if ($event.detail) this.onSlideChanged.emit($event.detail[0].activeIndex);
  }
}

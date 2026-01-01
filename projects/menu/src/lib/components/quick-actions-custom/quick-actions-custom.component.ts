import { NgIf } from "@angular/common";
import {
  Component,
  EventEmitter,
  input,
  Output,
  TemplateRef,
} from "@angular/core";

import { SwiperData, SwiperComponent } from "@ta/ui";

@Component({
  selector: "ta-quick-actions-custom",
  templateUrl: "./quick-actions-custom.component.html",
  styleUrls: ["./quick-actions-custom.component.scss"],
  standalone: true,
  imports: [NgIf, SwiperComponent],
})
export class QuickActionsCustomComponent {
  elementPerPage = input<number>(3.5);

  swipeTemplate = input.required<TemplateRef<any>>();
  slidesPerGroup = input<number>(1);

  isFreeMode = input<boolean>(true);

  @Output()
  public onSlideChanged = new EventEmitter<number>();

  elements = input.required<SwiperData[]>();
}

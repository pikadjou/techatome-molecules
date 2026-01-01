import { AsyncPipe, NgClass, NgFor, NgIf } from "@angular/common";
import { Component, input, OnInit, TemplateRef } from "@angular/core";

import { TaDeviceInfoService } from "@ta/capacitor";
import { TaBaseComponent } from "@ta/utils";

@Component({
  selector: "ta-swiper-light",
  templateUrl: "./swiper-light.component.html",
  styleUrls: ["./swiper-light.component.scss"],
  standalone: true,
  imports: [NgIf, NgFor, NgClass, AsyncPipe],
})
export class SwiperLightComponent extends TaBaseComponent implements OnInit {
  items = input.required<any[]>();

  template = input.required<TemplateRef<any>>();

  swiperClasses = input<string>("g-space-sm");

  containerClasses = input<string | undefined>(undefined);

  forced = input<boolean>(false);

  public classes: string = "";

  constructor(private _deviceInfoService: TaDeviceInfoService) {
    super();
  }

  ngOnInit() {
    if (this.forced()) {
      this.classes = `items ${this.swiperClasses() ?? ""}`;
    } else {
      this._registerSubscription(
        this._deviceInfoService.os$.subscribe((os) => {
          this.classes = this._deviceInfoService.isMobileOs(os)
            ? `items ${this.swiperClasses() ?? ""}`
            : this.containerClasses() ?? "";
        })
      );
    }
  }

  public track = (_: any, item: any) => {
    if (item.hasOwnProperty("id")) {
      return this.trackById(_, item);
    }
    if (item.hasOwnProperty("key")) {
      return this.trackByKey(_, item);
    }
    return item;
  };
}

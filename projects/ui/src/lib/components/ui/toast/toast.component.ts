import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

import { ENotificationCode, getTypeClass } from "../../../enum";

@Component({
  selector: "ta-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.scss"],
  standalone: true,
  imports: [NgClass],
})
export class ToastComponent {
  code = input<ENotificationCode>(ENotificationCode.information);

  readonly getTypeClass = getTypeClass;
}

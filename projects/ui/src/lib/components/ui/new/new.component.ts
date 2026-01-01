import { NgIf } from "@angular/common";
import { Component, input } from "@angular/core";

import { TaSizes } from "@ta/styles";

import { BulletComponent } from "../bullet/bullet.component";

@Component({
  selector: "ta-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"],
  standalone: true,
  imports: [NgIf, BulletComponent],
})
export class NewComponent {
  visible = input<boolean>(false);

  isRelative = input<boolean>(false);

  size = input<TaSizes>("md");
}

import { Component, input } from "@angular/core";

@Component({
  selector: "ta-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.scss"],
  standalone: true,
})
export class LogoComponent {
  /**
   * If set, logo white or black version will be taken
   */
  color = input<"white" | "black" | undefined>(undefined);

  /**
   * If set, logo oneline version will be taken
   */
  type = input<"oneline" | undefined>(undefined);

  /**
   * Set the logo width in %
   */
  widthPercentage = input<number>(100);

  get imageWidth(): string {
    return this.widthPercentage() + "%";
  }

  constructor() {}

  public getImagePath(): string {
    return `assets/partners/logo/logo${this.type() ? `-${this.type()}` : ""}${
      this.color() ? `-${this.color()}` : ""
    }.png`;
  }
}

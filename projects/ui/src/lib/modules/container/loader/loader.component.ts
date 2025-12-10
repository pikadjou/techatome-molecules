import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { TaSizes } from "@ta/styles";

import {
  Placeholder,
  PlaceholderConfig,
  getPlaceholderConfig,
} from "../placeholder/config";
import { PlaceholderComponent } from "../placeholder/placeholder.component";

export type LoaderSize = "sm" | "md" | "lg";

@Component({
  selector: "ta-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
  standalone: true,
  imports: [NgClass, MatProgressSpinnerModule, PlaceholderComponent],
})
export class LoaderComponent {
  @Input()
  isLoading = false;

  @Input()
  skeleton: PlaceholderConfig | null = null;

  @Input()
  size: TaSizes = "lg";

  @Input()
  text: string = "container.loading.light-message";

  constructor() {
    this.isLoading = true;
  }

  public getPlaceholder(): Placeholder {
    return getPlaceholderConfig(this.skeleton || "default");
  }
}

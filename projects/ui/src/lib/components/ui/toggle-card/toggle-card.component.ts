import { NgClass } from "@angular/common";
import { Component, input, output } from "@angular/core";

@Component({
  selector: "ta-toggle-card",
  templateUrl: "./toggle-card.component.html",
  styleUrl: "./toggle-card.component.scss",
  standalone: true,
  imports: [NgClass],
})
export class ToggleCardComponent {
  title = input<string>("");

  description = input<string | undefined>(undefined);

  icon = input<string | undefined>(undefined);

  isActive = input<boolean>(false);

  disabled = input<boolean>(false);

  toggle = output<boolean>();

  public onToggle() {
    if (!this.disabled()) {
      this.toggle.emit(!this.isActive());
    }
  }
}

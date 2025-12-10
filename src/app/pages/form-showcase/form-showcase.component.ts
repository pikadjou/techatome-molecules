import { Component } from "@angular/core";
import { TitleComponent, TextComponent } from "@ta/ui";

@Component({
  selector: "app-form-showcase",
  standalone: true,
  imports: [TitleComponent, TextComponent],
  templateUrl: "./form-showcase.component.html",
  styleUrl: "./form-showcase.component.scss",
})
export class FormShowcaseComponent {}

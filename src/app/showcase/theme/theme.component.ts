import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [PageLayoutComponent, TitleComponent, TextComponent],
  templateUrl: "./theme.component.html",
  styleUrl: "./theme.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemePage {}

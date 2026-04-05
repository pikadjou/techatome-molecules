import { ChangeDetectionStrategy, Component } from "@angular/core";

import { FontIconComponent, LocalIconComponent, MaterialIconComponent } from "@ta/icons";
import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    FontIconComponent,
    LocalIconComponent,
    MaterialIconComponent,
    PageLayoutComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./icons.component.html",
  styleUrl: "./icons.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsPage {}

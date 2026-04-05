import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";
import {
  FileSizePipe,
  JoinPipe,
  PluralTranslatePipe,
  SafePipe,
  StopPropagationDirective,
} from "@ta/utils";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    FileSizePipe,
    JoinPipe,
    PageLayoutComponent,
    SafePipe,
    StopPropagationDirective,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./utils.component.html",
  styleUrl: "./utils.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsPage {
  fileSizeBytes = 1048576;
  fileSizeLarge = 2147483648;
  joinArray = ["Angular", "React", "Vue", "Svelte"];
  htmlContent = '<strong>Bold text</strong> and <em>italic text</em>';
  stopPropClicked = false;

  onParentClick(): void {
    this.stopPropClicked = false;
  }

  onChildClick(): void {
    this.stopPropClicked = true;
  }
}

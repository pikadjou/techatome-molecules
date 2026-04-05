import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import {
  ButtonComponent,
  EmptyComponent,
  ErrorComponent,
  LoaderComponent,
  TextComponent,
  TitleComponent,
} from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    ButtonComponent,
    EmptyComponent,
    ErrorComponent,
    LoaderComponent,
    PageLayoutComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./container.component.html",
  styleUrl: "./container.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerPage {
  errorMessage = signal("Une erreur inattendue s'est produite");

  onRetry(): void {
    this.errorMessage.set("");
    setTimeout(() => {
      this.errorMessage.set("Une erreur inattendue s'est produite");
    }, 1500);
  }
}

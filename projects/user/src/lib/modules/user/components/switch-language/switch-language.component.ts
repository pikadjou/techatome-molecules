import { Component, inject } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { TaTranslationService, TranslatePipe } from "@ta/translation";
import {
  ListContainerComponent,
  ListElementComponent,
  ListTagComponent,
  ListTitleComponent,
  LoaderComponent,
} from "@ta/ui";

@Component({
  selector: "ta-switch-language",
  templateUrl: "./switch-language.component.html",
  styleUrls: ["./switch-language.component.scss"],
  standalone: true,
  imports: [
    FontIconComponent,
    ListTagComponent,
    LoaderComponent,
    ListContainerComponent,
    ListElementComponent,
    ListTitleComponent,
    TranslatePipe,
  ],
})
export class SwitchLanguageComponent {
  private _translateService = inject(TaTranslationService);
  readonly languages = [
    { id: "fr", name: "Français" },
    { id: "nl", name: "Nederlands" },
    { id: "en", name: "English" },
    { id: "es", name: "Español" },
  ];

  public activeLanguage = this._translateService.getLanguage();
  public changeLanguageAsked: boolean = false;

  public changeLanguage(language: string) {
    if (this.activeLanguage != language) {
      this.activeLanguage = language;
      this.changeLanguageAsked = true;
      this._translateService.use(language);
    }
  }
}

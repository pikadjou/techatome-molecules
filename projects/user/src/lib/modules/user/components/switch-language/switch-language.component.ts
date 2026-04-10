import { NgClass } from "@angular/common";
import { Component, InjectionToken, inject, input } from "@angular/core";

import { FlagIconComponent, FontIconComponent } from "@ta/icons";
import { TaTranslationService, TranslatePipe } from "@ta/translation";
import {
  ListContainerComponent,
  ListElementComponent,
  ListTagComponent,
  ListTitleComponent,
} from "@ta/ui";

export type TaLanguageConfig = { id: string; name: string };

export const TA_LANGUAGES = new InjectionToken<TaLanguageConfig[]>(
  "TaLanguages",
  {
    factory: () => [
      { id: "fr", name: "Français" },
      { id: "en", name: "English" },
    ],
  }
);

@Component({
  selector: "ta-switch-language",
  templateUrl: "./switch-language.component.html",
  styleUrls: ["./switch-language.component.scss"],
  standalone: true,
  imports: [
    FlagIconComponent,
    FontIconComponent,
    ListContainerComponent,
    ListElementComponent,
    ListTagComponent,
    ListTitleComponent,
    NgClass,
    TranslatePipe,
  ],
})
export class SwitchLanguageComponent {
  mode = input<"inline" | "dropdown">("inline");

  private _translateService = inject(TaTranslationService);
  readonly languages = inject(TA_LANGUAGES);

  public activeLanguage = this._translateService.getLanguage();
  public dropdownOpen = false;

  public toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  public changeLanguage(language: string) {
    if (this.activeLanguage !== language) {
      this.activeLanguage = language;
      this.dropdownOpen = false;
      this._translateService.use(language);
    }
  }
}

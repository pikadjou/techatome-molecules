import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaTranslationService } from "@ta/translation";
import { SwitchLanguageCtaComponent, TA_LANGUAGES, TaLanguageConfig } from "@ta/user";

import { ComponentDemo } from "../../demo.types";

const DEMO_LANGUAGES: TaLanguageConfig[] = [
  { id: "fr", name: "Français" },
  { id: "en", name: "English" },
];

/**
 * `SwitchLanguageCtaComponent` embarque un `ta-switch-language mode="modal"`, qui lit
 * `TaTranslationService.getLanguage()`/`.use()`. Le vrai service pilote la langue de
 * toute l'application ; ce mock isole l'exemple pour ne pas la changer au clic. Voir la
 * démo `ta-switch-language` pour le détail.
 */
class DemoTranslationService {
  getLanguage(): string {
    return "fr";
  }

  use(_lang: string): void {
    // no-op : voir le commentaire ci-dessus.
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-switch-language-cta-default",
  imports: [SwitchLanguageCtaComponent],
  providers: [
    { provide: TA_LANGUAGES, useValue: DEMO_LANGUAGES },
    { provide: TaTranslationService, useClass: DemoTranslationService },
  ],
  template: `<ta-switch-language-cta></ta-switch-language-cta>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaSwitchLanguageCtaDefaultExample {}

export const DEMO: ComponentDemo = {
  id: "ta-switch-language-cta",
  group: "Authentification",
  summary: "Bouton d'accès rapide au changement de langue : un simple alias de `ta-switch-language` figé en `mode=\"modal\"`.",
  examples: [{ title: "Utilisation", component: TaSwitchLanguageCtaDefaultExample }],
  notes:
    "Composant sans input ni sortie propre — voir `switch-language-cta.component.ts` : son template est intégralement `<ta-switch-language mode=\"modal\"></ta-switch-language>`. La démo `ta-switch-language` couvre les trois modes et le rôle de `TA_LANGUAGES`.",
};

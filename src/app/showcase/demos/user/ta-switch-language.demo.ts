import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaTranslationService } from "@ta/translation";
import { TextComponent } from "@ta/ui";
import { SwitchLanguageComponent, TA_LANGUAGES, TaLanguageConfig } from "@ta/user";

import { ComponentDemo } from "../../demo.types";

const DEMO_LANGUAGES: TaLanguageConfig[] = [
  { id: "fr", name: "Français" },
  { id: "en", name: "English" },
];

/**
 * `SwitchLanguageComponent` lit la langue active via `TaTranslationService.getLanguage()`
 * et bascule via `.use()`. Le vrai service est un singleton `providedIn: 'root'` qui pilote
 * la langue de toute l'application — cliquer une langue dedans changerait celle de la vitrine
 * entière, y compris les autres pages ouvertes ensuite. Ce mock isole chaque exemple.
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
  selector: "app-ex-ta-switch-language-modes",
  imports: [SwitchLanguageComponent, TextComponent],
  providers: [
    { provide: TA_LANGUAGES, useValue: DEMO_LANGUAGES },
    { provide: TaTranslationService, useClass: DemoTranslationService },
  ],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-switch-language mode="inline"></ta-switch-language>
      <ta-text size="sm">inline</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-switch-language mode="dropdown"></ta-switch-language>
      <ta-text size="sm">dropdown</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-switch-language mode="modal"></ta-switch-language>
      <ta-text size="sm">modal</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaSwitchLanguageModesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-switch-language",
  group: "Authentification",
  summary: "Sélecteur de langue, dans l'une de trois présentations : liste de pastilles en ligne, menu déroulant ou panneau modal.",
  examples: [
    {
      title: "Modes d'affichage",
      description: "`mode` accepte `inline` (liste de pastilles, l'une active), `dropdown` (déclencheur + panneau ancré) et `modal` (déclencheur + panneau superposé). `dropdown` et `modal` s'ouvrent au clic sur le déclencheur ; ils sont montrés ici fermés.",
      component: TaSwitchLanguageModesExample,
    },
  ],
  notes:
    "`languages` (`TaLanguageConfig[]`) n'est pas un input : il vient du jeton d'injection `TA_LANGUAGES`, fourni ici avec deux langues. `changeLanguage()` appelle `TaTranslationService.use()` pour propager le choix à `@ngx-translate/core` — mocké ci-dessus en no-op pour ne pas changer la langue réelle de la vitrine au clic.",
};

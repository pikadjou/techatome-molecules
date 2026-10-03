import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CultureComponent } from "@ta/form-input";
import { InputCulture } from "@ta/form-model";
import { Culture } from "@ta/utils";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-culture-basic",
  imports: [CultureComponent],
  template: ` <ta-input-culture [input]="this.model" [standalone]="true"></ta-input-culture> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputCultureBasicExample {
  model = new InputCulture({ key: "culture", label: "Langue", value: Culture.FR_FR.toString() });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-culture-disabled",
  imports: [CultureComponent],
  template: ` <ta-input-culture [input]="this.model" [standalone]="true"></ta-input-culture> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputCultureDisabledExample {
  model = new InputCulture({ key: "culture-locked", label: "Langue imposée", value: Culture.EN_EN.toString(), disabled: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-culture",
  group: "Sélection",
  summary:
    "Menu déroulant spécialisé pour choisir une culture. `InputCulture` étend `InputDropdown` et remplit `options$` depuis l'énumération `Culture` de @ta/utils — toute valeur `options$` passée par l'appelant est ignorée, écrasée par le constructeur.",
  examples: [
    { title: "Valeur initiale", component: TaInputCultureBasicExample },
    { title: "Désactivé", component: TaInputCultureDisabledExample },
  ],
  notes:
    "Le nom affiché pour chaque option vient de la clé i18n `ui.culture.long.<valeur numérique>` (ex. `ui.culture.long.10` pour `Culture.FR_FR`) ; aucune de ces clés n'est définie dans les fichiers i18n du dépôt à ce jour, donc `TranslatePipe` affiche la clé brute faute de traduction — comportement de `ngx-translate`, pas de ce composant.",
};

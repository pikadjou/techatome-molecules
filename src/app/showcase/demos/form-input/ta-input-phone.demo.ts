import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Validators } from "@angular/forms";

import { InputPhoneComponent } from "@ta/form-input";
import { InputPhone } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-phone-basic",
  imports: [InputPhoneComponent],
  template: ` <ta-input-phone [input]="this.model" [standalone]="true"></ta-input-phone> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputPhoneBasicExample {
  model = new InputPhone({ key: "phone", label: "Téléphone", value: "+32470123456" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-phone-required",
  imports: [InputPhoneComponent],
  template: ` <ta-input-phone [input]="this.model" [standalone]="true"></ta-input-phone> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputPhoneRequiredExample {
  model = new InputPhone({ key: "phone-required", label: "Téléphone professionnel", validators: [Validators.required] });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-phone-disabled",
  imports: [InputPhoneComponent],
  template: ` <ta-input-phone [input]="this.model" [standalone]="true"></ta-input-phone> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputPhoneDisabledExample {
  // `disabled` doit être passé à la construction : appelé après coup, `disable()`
  // agirait sur un `FormControl` qui n'existe pas encore.
  model = new InputPhone({ key: "phone-disabled", label: "Non modifiable", value: "+32470123456", disabled: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-phone",
  group: "Saisie",
  summary: "Champ téléphone international (`intl-tel-input`), avec indicatif de pays et validation de format intégrée.",
  examples: [
    { title: "Valeur simple", component: TaInputPhoneBasicExample },
    { title: "Requis", description: "Le validateur `required` vient du modèle ; le composant y ajoute lui-même un validateur de format de numéro (`phoneValidator`), câblé sur le contrôle dans `ngAfterViewInit`.", component: TaInputPhoneRequiredExample },
    { title: "Désactivé", component: TaInputPhoneDisabledExample },
  ],
  notes:
    "`preferredCountries` (`['be', 'fr']`) est fixé dans le constructeur du modèle, pas une option ouverte à l'appelant. Le composant charge la feuille de style `intl-tel-input` depuis un CDN (`loadStylesheet`, dans `ngOnInit`) et masque le champ (`isReady`) tant qu'elle n'est pas chargée : un flash de chargement bref est normal, pas un défaut de cette démo.",
};

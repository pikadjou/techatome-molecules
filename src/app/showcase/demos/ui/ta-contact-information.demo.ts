import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaIconType } from "@ta/icons";
import { ContactInformationComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-contact-information-icons",
  imports: [ContactInformationComponent],
  template: `
    <ta-contact-information value="+32 470 00 00 00" icon="call">
      <div>Disponible du lundi au vendredi, 9h-17h.</div>
    </ta-contact-information>
    <ta-contact-information value="contact@techatome.be" [localIcon]="this.TaIconType.Email">
      <div>Réponse sous 48h ouvrées.</div>
    </ta-contact-information>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaContactInformationIconsExample {
  readonly TaIconType = TaIconType;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-contact-information-empty-value",
  imports: [ContactInformationComponent],
  template: `
    <ta-contact-information [value]="null" icon="call">
      <div>Seul le contenu projeté reste visible : sans valeur, l'en-tête (icône + texte) disparaît.</div>
    </ta-contact-information>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaContactInformationEmptyValueExample {}

export const DEMO: ComponentDemo = {
  id: "ta-contact-information",
  group: "Affichage",
  summary: "En-tête icône + valeur (passée dans `translate`), avec une zone de contenu projeté en dessous.",
  examples: [
    {
      title: "Icône Material ou icône locale",
      layout: "stack",
      description:
        "`icon` prend un nom Material (rendu par `ta-font-icon`) ; `localIcon` prend un `TaIconType` (rendu par `ta-local-icon`) et passe devant si les deux sont renseignés (`@if (localIcon) ... @else if (icon)`). `value` passe par `translate` : une chaîne sans correspondance dans les catalogues i18n — un numéro, un e-mail — s'affiche telle quelle, ngx-translate retombant sur la clé manquante.",
      component: TaContactInformationIconsExample,
    },
    {
      title: "Valeur absente",
      layout: "stack",
      description: "`@if (this.value())` masque tout l'en-tête quand `value` est `null` ; le contenu projeté (`<ng-content>`), lui, reste toujours affiché.",
      component: TaContactInformationEmptyValueExample,
    },
  ],
};

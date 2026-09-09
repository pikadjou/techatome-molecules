import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Address, AddressComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-address-values",
  imports: [AddressComponent],
  template: `
    <ta-address [address]="this.brussels"></ta-address>
    <ta-address [address]="this.paris"></ta-address>
    <ta-address [address]="this.noCountry"></ta-address>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaAddressValuesExample {
  readonly brussels: Address = {
    id: "1",
    street: "Rue de la Loi",
    number: "16",
    city: "Bruxelles",
    zipCode: "1000",
    country: "BE",
    floor: "3",
  };

  readonly paris: Address = {
    id: "2",
    street: "Avenue des Champs-Élysées",
    number: "8",
    city: "Paris",
    zipCode: "75008",
    country: "FR",
    floor: "0",
  };

  // `country` absent : `getCountryName()` (@ta/utils) renvoie une chaîne vide,
  // le template affiche donc la ligne sans nom de pays final.
  readonly noCountry: Address = {
    id: "3",
    street: "Rue Neuve",
    number: "22",
    city: "Liège",
    zipCode: "4000",
    floor: "1",
  };
}

export const DEMO: ComponentDemo = {
  id: "ta-address",
  group: "Affichage",
  summary: "Ligne d'adresse formatée, avec le nom de pays résolu depuis son code ISO.",
  examples: [
    {
      title: "Adresses",
      description:
        "`countryName` (computed) résout le code ISO stocké dans `address.country` via `getCountryName()` (`Intl.DisplayNames`, @ta/utils). Sans `country`, la ligne se termine simplement après la ville, virgule finale comprise.",
      component: TaAddressValuesExample,
    },
  ],
  notes:
    "Le champ `floor` du modèle `Address` n'est jamais lu par `address.component.html` : seuls `street`, `number`, `zipCode`, `city` et le pays résolu sont affichés.",
};

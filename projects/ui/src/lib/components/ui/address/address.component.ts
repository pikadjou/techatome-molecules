import { Component, computed, input } from "@angular/core";

import { getCountryName } from "@ta/utils";

export interface Address {
  id: string;
  street: string;
  number: string;
  city: string;
  zipCode: string;
  country?: string;
  floor: string;
}

@Component({
  selector: "ta-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
  standalone: true,
})
export class AddressComponent {
  address = input.required<Address>();

  // Le pays est stocké sous forme de code ISO (ex. "BE") ; on l'affiche localisé.
  countryName = computed(() => getCountryName(this.address().country));
}

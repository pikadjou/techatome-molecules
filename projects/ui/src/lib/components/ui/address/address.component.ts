import { Component, input } from "@angular/core";

export interface Address {
  id: string;
  street: string;
  number: string;
  city: string;
  zipCode: string;
  contry?: string;
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
}

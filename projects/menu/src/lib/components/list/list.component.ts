import { NgIf, NgFor } from "@angular/common";
import { Component, input } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import {
  ListContainerComponent,
  ListElementComponent,
  ListTitleComponent,
} from "@ta/ui";

import { MenuIcon } from "../../models/menu/item/icon";
import { Menu } from "../../models/menu/menu";

@Component({
  selector: "ta-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FontIconComponent,
    ListContainerComponent,
    ListElementComponent,
    ListTitleComponent,
  ],
})
export class ListComponent {
  menu = input.required<Menu<MenuIcon>>();
}

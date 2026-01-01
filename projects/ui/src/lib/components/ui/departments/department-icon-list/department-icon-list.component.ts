import { NgIf, NgFor } from "@angular/common";
import { Component, input } from "@angular/core";

import { Department } from "../interface";

@Component({
  selector: "ta-department-icon-list",
  templateUrl: "./department-icon-list.component.html",
  styleUrls: ["./department-icon-list.component.scss"],
  standalone: true,
  imports: [NgIf, NgFor],
})
export class DepartmentIconListComponent {
  /**
   * List of departments object to display
   */
  departments = input.required<Department[]>();

  withName = input<boolean>(false);
}

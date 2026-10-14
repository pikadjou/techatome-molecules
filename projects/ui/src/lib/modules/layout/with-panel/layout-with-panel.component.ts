import { NgClass } from "@angular/common";
import {
  AfterViewInit,
  Component,
  input,
  OnChanges,
  SimpleChanges,
  viewChild,
} from "@angular/core";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";

@Component({
  selector: "ta-layout-with-panel",
  templateUrl: "./layout-with-panel.component.html",
  styleUrl: "./layout-with-panel.component.scss",
  standalone: true,
  imports: [NgClass, MatDrawer, MatDrawerContainer],
})
export class LayoutWithPanelComponent implements OnChanges, AfterViewInit {
  open = input.required<boolean>();

  drawer = viewChild<MatDrawer>("drawer");

  constructor() {}

  public ngAfterViewInit() {
    this.manageDrawer();
  }
  public ngOnChanges(changes: SimpleChanges) {
    this.manageDrawer();
  }

  public manageDrawer() {
    if (this.open() === true) {
      this.drawer()?.open();
    } else {
      this.drawer()?.close();
    }
  }
}

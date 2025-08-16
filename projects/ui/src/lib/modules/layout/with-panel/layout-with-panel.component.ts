import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'ta-layout-with-panel',
  templateUrl: './layout-with-panel.component.html',
  styleUrls: ['./layout-with-panel.component.scss'],
})
export class LayoutWithPanelComponent implements OnChanges, AfterViewInit {
  @Input()
  open!: boolean;

  @ViewChild('drawer') drawer: MatDrawer | null = null;

  constructor() {}

  public ngAfterViewInit() {
    this.manageDrawer();
  }
  public ngOnChanges(changes: SimpleChanges) {
    this.manageDrawer();
  }

  public manageDrawer() {
    if (this.open === true) {
      this.drawer?.open();
    } else {
      this.drawer?.close();
    }
  }
}

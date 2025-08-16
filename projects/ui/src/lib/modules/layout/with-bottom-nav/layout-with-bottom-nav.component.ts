import { AfterViewChecked, Component, ElementRef, Input, ViewChild, inject } from '@angular/core';

import { CamSharedMenuService } from '@ta/services';
import { CamBaseComponent } from '@ta/utils';
import { combineLatest, map, startWith } from 'rxjs';

@Component({
  selector: 'ta-layout-with-bottom-nav',
  templateUrl: './layout-with-bottom-nav.component.html',
  styleUrls: ['./layout-with-bottom-nav.component.scss'],
})
export class LayoutWithBottomNavComponent extends CamBaseComponent implements AfterViewChecked {
  @Input()
  type!: string;

  @ViewChild('bottomNavContainer')
  private _bottomNav!: ElementRef<HTMLDivElement>;

  @ViewChild('bottomLayoutContainer')
  private _layoutContent!: ElementRef<HTMLDivElement>;

  public sharedMenu = inject(CamSharedMenuService);

  public isMinimized$ = combineLatest([
    this.sharedMenu.isMinimized$.pipe(startWith(false)),
    this.breakpoints.isDesktop$,
  ]).pipe(
    map(data => ({
      isMinimized: data[0],
      isDesktop: data[1],
    })),
    map(({ isMinimized, isDesktop }) => isMinimized && isDesktop)
  );

  constructor() {
    super();
  }
  ngAfterViewChecked(): void {
    const clientHeight = this._bottomNav.nativeElement.clientHeight;
    const clientWidth = this._bottomNav.nativeElement.clientWidth;

    this._layoutContent.nativeElement.setAttribute('style', `padding-bottom: ${clientHeight + 10}px`);
    this._layoutContent.nativeElement.setAttribute('style', `width: ${window.screen.width - clientWidth}px`);
  }
}

import { AsyncPipe } from "@angular/common";
import {
  AfterViewChecked,
  Component,
  ElementRef,
  input,
  inject,
  viewChild,
} from "@angular/core";

import { combineLatest, map, startWith } from "rxjs";

import { TaBaseComponent, TaSharedMenuService } from "@ta/utils";

@Component({
  selector: "ta-layout-with-bottom-nav",
  templateUrl: "./layout-with-bottom-nav.component.html",
  styleUrl: "./layout-with-bottom-nav.component.scss",
  standalone: true,
  imports: [AsyncPipe],
})
export class LayoutWithBottomNavComponent
  extends TaBaseComponent
  implements AfterViewChecked
{
  type = input.required<string>();

  private readonly _bottomNav = viewChild.required<ElementRef<HTMLDivElement>>("bottomNavContainer");
  private readonly _layoutContent = viewChild.required<ElementRef<HTMLDivElement>>("bottomLayoutContainer");

  private _sharedMenu = inject(TaSharedMenuService);

  public isMinimized$ = combineLatest([
    this._sharedMenu.isMinimized$.pipe(startWith(false)),
    this.breakpoints.isDesktop$,
  ]).pipe(
    map((data) => ({
      isMinimized: data[0],
      isDesktop: data[1],
    })),
    map(({ isMinimized, isDesktop }) => isMinimized && isDesktop)
  );

  constructor() {
    super();
  }
  ngAfterViewChecked(): void {
    const clientHeight = this._bottomNav().nativeElement.clientHeight;
    const clientWidth = this._bottomNav().nativeElement.clientWidth;

    this._layoutContent().nativeElement.setAttribute(
      "style",
      `padding-bottom: ${clientHeight + 10}px`
    );
    this._layoutContent().nativeElement.setAttribute(
      "style",
      `width: ${window.screen.width - clientWidth}px`
    );
  }
}

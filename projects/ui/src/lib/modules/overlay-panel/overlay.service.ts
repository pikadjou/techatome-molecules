import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, InjectionToken, Injector, TemplateRef, Type } from '@angular/core';

import { Subject } from 'rxjs';

import { TaBaseService } from '@ta/server';

export const MENU_TEMPLATE = new InjectionToken<TemplateRef<any>>('MENU_TEMPLATE');
export const MENU_MAX_HEIGHT = new InjectionToken<number>('MENU_MAX_HEIGHT');

export interface OverlayMenuConfig<T = any> {
  menuComponent?: Type<T>;
  triggerElement?: HTMLElement;
  template?: TemplateRef<any>;
  onClose?: () => void;
  matchTriggerWidth?: boolean;
  positions?: ConnectedPosition[];
  offsetX?: number;
  offsetY?: number;
  maxHeight?: number;
  manualTrigger?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class OverlayService extends TaBaseService {
  private _overlayRef?: OverlayRef;
  private _onCloseCallback?: () => void;
  private readonly _onCloseSubject = new Subject<void>();
  public readonly onClose$ = this._onCloseSubject.asObservable();

  private readonly defaultPositions: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    },
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
    },
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
    },
    {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
    },
  ];

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) {
    super();
  }

  public openMenu<T>(config: OverlayMenuConfig<T>) {
    const {
      menuComponent,
      triggerElement,
      template,
      onClose,
      matchTriggerWidth = true,
      positions = this.defaultPositions,
      offsetX = 2,
      offsetY = 2,
      maxHeight,
    } = config;

    if (!triggerElement) {
      console.log('OverlayService: triggerElement is required.');
      return;
    }
    if (!menuComponent) {
      console.log('OverlayService: menuComponent is required.');
      return;
    }

    this._overlayRef?.dispose();
    this._onCloseCallback = onClose;

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(triggerElement)
      .withFlexibleDimensions(true)
      .withPush(true)
      .withDefaultOffsetX(offsetX)
      .withDefaultOffsetY(offsetY)
      .withPositions(positions);

    this._overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.close(),
      width: matchTriggerWidth ? triggerElement.clientWidth : undefined,
    });
    this._registerSubscription(this._overlayRef.backdropClick().subscribe(() => this.closeMenu()));

    const portalInjector = Injector.create({
      providers: [
        { provide: OverlayRef, useValue: this._overlayRef },
        { provide: MENU_TEMPLATE, useValue: template },
        { provide: MENU_MAX_HEIGHT, useValue: maxHeight },
      ],
      parent: this.injector,
    });

    const portal = new ComponentPortal(menuComponent, null, portalInjector);
    this._overlayRef.attach(portal);
  }

  public closeMenu() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = undefined;
    }

    this._onCloseSubject.next();

    if (this._onCloseCallback) {
      this._onCloseCallback();
      this._onCloseCallback = undefined;
    }
  }
}

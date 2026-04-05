import { ConnectedPosition } from "@angular/cdk/overlay";
import { InjectionToken, TemplateRef, Type } from "@angular/core";
import { TaBaseService } from "@ta/server";
import * as i0 from "@angular/core";
export declare const MENU_TEMPLATE: InjectionToken<TemplateRef<any>>;
export declare const MENU_MAX_HEIGHT: InjectionToken<number>;
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
export declare class OverlayService extends TaBaseService {
    private _overlayRef?;
    private _onCloseCallback?;
    private readonly _onCloseSubject;
    readonly onClose$: import("rxjs").Observable<void>;
    private _overlay;
    private _injector;
    private readonly defaultPositions;
    constructor();
    openMenu<T>(config: OverlayMenuConfig<T>): void;
    closeMenu(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlayService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OverlayService>;
}

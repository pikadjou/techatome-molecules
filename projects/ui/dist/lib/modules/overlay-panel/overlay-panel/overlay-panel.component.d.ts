import { AfterViewInit, ElementRef, TemplateRef } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { OverlayMenuConfig } from "../overlay.service";
import * as i0 from "@angular/core";
export declare class TaOverlayPanelComponent extends TaBaseComponent implements AfterViewInit {
    triggerTpl: import("@angular/core").Signal<TemplateRef<unknown> | undefined>;
    contentTpl: import("@angular/core").Signal<TemplateRef<unknown> | undefined>;
    triggerHostRef: import("@angular/core").Signal<ElementRef<HTMLElement>>;
    panelConfig: import("@angular/core").InputSignal<OverlayMenuConfig<any>>;
    position: import("@angular/core").InputSignal<"default" | "right">;
    closed: import("@angular/core").OutputEmitterRef<void>;
    private _configWithDefaults;
    private _overlayService;
    constructor();
    ngAfterViewInit(): void;
    open(manual?: boolean): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaOverlayPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaOverlayPanelComponent, "ta-overlay-panel", never, { "panelConfig": { "alias": "panelConfig"; "required": true; "isSignal": true; }; "position": { "alias": "position"; "required": false; "isSignal": true; }; }, { "closed": "closed"; }, ["triggerTpl", "contentTpl"], never, true, never>;
}

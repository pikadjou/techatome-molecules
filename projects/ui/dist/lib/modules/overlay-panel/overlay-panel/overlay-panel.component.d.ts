import { AfterViewInit, ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import { OverlayMenuConfig, OverlayService } from '../overlay.service';
import * as i0 from "@angular/core";
export declare class TaOverlayPanelComponent extends TaBaseComponent implements AfterViewInit {
    private overlayService;
    triggerTpl: TemplateRef<any>;
    contentTpl: TemplateRef<any>;
    triggerHostRef: ElementRef<HTMLElement>;
    panelConfig: OverlayMenuConfig;
    position: 'default' | 'right';
    closed: EventEmitter<void>;
    private _configWithDefaults;
    constructor(overlayService: OverlayService);
    ngAfterViewInit(): void;
    open(manual?: boolean): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaOverlayPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaOverlayPanelComponent, "ta-overlay-panel", never, { "panelConfig": { "alias": "panelConfig"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, { "closed": "closed"; }, ["triggerTpl", "contentTpl"], never, true, never>;
}

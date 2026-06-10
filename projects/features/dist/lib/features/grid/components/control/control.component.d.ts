import { OnInit } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import { Preset, ViewType } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaFiltersModal extends TaBaseComponent {
    open: import("@angular/core").InputSignal<boolean>;
    gridId: import("@angular/core").InputSignal<string>;
    closeEvent: import("@angular/core").OutputEmitterRef<void>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TaFiltersModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaFiltersModal, "ta-grid-filters-modal", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; "gridId": { "alias": "gridId"; "required": true; "isSignal": true; }; }, { "closeEvent": "closeEvent"; }, never, never, true, never>;
}
export declare class TaGridControlComponent extends TaAbstractGridComponent<any> implements OnInit {
    show: import("@angular/core").InputSignal<{
        switchView?: boolean | undefined;
        filters?: boolean | undefined;
        preset?: boolean | undefined;
    }>;
    isFiltersOpen: import("@angular/core").WritableSignal<boolean>;
    constructor();
    ngOnInit(): void;
    switchView(type: ViewType): void;
    openFilters(): void;
    setPreset(preset: Preset): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridControlComponent, "ta-grid-control", never, { "show": { "alias": "show"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

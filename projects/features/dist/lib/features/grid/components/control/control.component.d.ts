import { OnInit } from '@angular/core';
import { TaBaseModal } from '@ta/utils';
import { Preset, ViewType } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridControlComponent extends TaAbstractGridComponent<any> implements OnInit {
    show: import("@angular/core").InputSignal<{
        switchView?: boolean | undefined;
        filters?: boolean | undefined;
        preset?: boolean | undefined;
    }>;
    private readonly _dialog;
    constructor();
    ngOnInit(): void;
    switchView(type: ViewType): void;
    openFilters(): void;
    setPreset(preset: Preset): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridControlComponent, "ta-grid-control", never, { "show": { "alias": "show"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
interface FiltersModalData {
    gridId: string;
}
export declare class FiltersModal extends TaBaseModal {
    private readonly _dialogRef;
    readonly data: FiltersModalData;
    constructor();
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiltersModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FiltersModal, "ta-grid-filters-modal", never, {}, {}, never, never, true, never>;
}
export {};

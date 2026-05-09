import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { FileStructure, TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class InputSchemaModal extends TaBaseComponent {
    open: import("@angular/core").InputSignal<boolean>;
    savedFile: EventEmitter<{
        file: FileStructure;
    }>;
    closeEvent: EventEmitter<void>;
    askImage$: Subject<null>;
    imagePath: string;
    constructor();
    close: () => void;
    selected: () => void;
    savedImage(blob: Blob): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputSchemaModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputSchemaModal, "ta-input-schema-modal", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; }, { "savedFile": "savedFile"; "closeEvent": "closeEvent"; }, never, never, true, never>;
}

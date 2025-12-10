import { MatDialogRef } from "@angular/material/dialog";
import { Subject } from "rxjs";
import { FileStructure, TaBaseModal } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class InputSchemaModal extends TaBaseModal {
    dialogRef: MatDialogRef<InputSchemaModal, {
        file: FileStructure;
    }>;
    askImage$: Subject<null>;
    imagePath: string;
    constructor(dialogRef: MatDialogRef<InputSchemaModal, {
        file: FileStructure;
    }>);
    close: () => void;
    selected: () => void;
    savedImage(blob: Blob): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputSchemaModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputSchemaModal, "ng-component", never, {}, {}, never, never, true, never>;
}

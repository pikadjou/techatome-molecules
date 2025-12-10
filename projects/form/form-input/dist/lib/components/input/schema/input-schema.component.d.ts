import { MatDialog } from "@angular/material/dialog";
import { InputSchema } from "@ta/form-model";
import { FileData } from "@ta/utils";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export declare class InputSchemaComponent extends TaAbstractInputComponent<InputSchema> {
    dialog: MatDialog;
    get pics(): FileData[] | null;
    get isCircularButton(): boolean;
    set selection(value: string);
    constructor(dialog: MatDialog);
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputSchemaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputSchemaComponent, "ta-input-schema", never, {}, {}, never, never, true, never>;
}

import { InputSchema } from "@ta/form-model";
import { FileData, FileStructure } from "@ta/utils";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export declare class InputSchemaComponent extends TaAbstractInputComponent<InputSchema> {
    isModalOpen: import("@angular/core").WritableSignal<boolean>;
    get pics(): FileData[] | null;
    get isCircularButton(): boolean;
    set selection(value: string);
    constructor();
    openDialog(): void;
    onSavedFile(data: {
        file: FileStructure;
    }): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputSchemaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputSchemaComponent, "ta-input-schema", never, {}, {}, never, never, true, never>;
}

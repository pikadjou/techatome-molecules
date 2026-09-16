import { Subject } from 'rxjs';
import { FileStructure, TaBaseModal } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class InputSchemaModal extends TaBaseModal<null, {
    file: FileStructure;
}> {
    askImage$: Subject<null>;
    imagePath: string;
    constructor();
    close: () => void;
    selected: () => void;
    savedImage(blob: Blob): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputSchemaModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputSchemaModal, "ta-input-schema-modal", never, {}, {}, never, never, true, never>;
}

import { InputWysiswyg } from "@ta/form-model";
import { EditorInputSavedData } from "@ta/wysiswyg";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export declare class WysiswygComponent extends TaAbstractInputComponent<InputWysiswyg> {
    set(value: EditorInputSavedData): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WysiswygComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WysiswygComponent, "ta-input-wysiswyg", never, {}, {}, never, never, true, never>;
}

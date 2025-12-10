import { TemplateRef } from "@angular/core";
import * as i0 from "@angular/core";
export type BottomSheetTemplateGenericParams<T = any> = {
    maxHeight?: number;
    template: TemplateRef<any>;
    context?: T;
};
export declare class BottomSheetTemplateGenericComponent {
    data: BottomSheetTemplateGenericParams;
    constructor(data: BottomSheetTemplateGenericParams);
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetTemplateGenericComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetTemplateGenericComponent, "ta-bottom-sheet-template-generic", never, {}, {}, never, never, true, never>;
}

import { Observable } from 'rxjs';
import { BottomSheetData } from '../../../../models/bottom/bottom-sheet-data';
import * as i0 from "@angular/core";
export interface BottomSheetTemplateBasicParams {
    orientation: 'horizontal' | 'vertical';
    menu$: Observable<BottomSheetData[]>;
}
export declare class BottomSheetTemplateBasicComponent {
    data: BottomSheetTemplateBasicParams;
    typeItem: {
        item: BottomSheetData;
    };
    constructor(data: BottomSheetTemplateBasicParams);
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetTemplateBasicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetTemplateBasicComponent, "ta-bottom-sheet-template-basic", never, {}, {}, never, never, true, never>;
}

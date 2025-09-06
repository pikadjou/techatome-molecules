import { ColorType } from '@ta/styles';
import * as i0 from "@angular/core";
export type BenefitType = 'success' | 'warning' | 'error';
export interface BenefitConfig {
    icon: string;
    backgroundColor: string;
    borderColor: string;
    iconColor: string;
}
export declare class BenefitItemComponent {
    type: ColorType;
    text: string;
    protected config: BenefitConfig;
    protected isInitialized: boolean;
    cssClasses(): ColorType[];
    icon(): "warning" | "error" | "check";
    static ɵfac: i0.ɵɵFactoryDeclaration<BenefitItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BenefitItemComponent, "ta-benefit-item", never, { "type": { "alias": "type"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, never, true, never>;
}

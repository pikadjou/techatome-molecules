import { ColorType } from "@ta/styles";
import * as i0 from "@angular/core";
export type BenefitType = "success" | "warning" | "error";
export interface BenefitConfig {
    icon: string;
    backgroundColor: string;
    borderColor: string;
    iconColor: string;
}
export declare class BenefitItemComponent {
    type: import("@angular/core").InputSignal<ColorType>;
    text: import("@angular/core").InputSignal<string>;
    protected config: BenefitConfig;
    protected isInitialized: boolean;
    cssClasses(): ColorType[];
    icon(): "warning" | "error" | "check";
    static ɵfac: i0.ɵɵFactoryDeclaration<BenefitItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BenefitItemComponent, "ta-benefit-item", never, { "type": { "alias": "type"; "required": false; "isSignal": true; }; "text": { "alias": "text"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

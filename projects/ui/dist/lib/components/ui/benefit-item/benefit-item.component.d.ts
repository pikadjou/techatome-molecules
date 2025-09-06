import { OnInit } from '@angular/core';
import { TaState } from '@ta/styles';
import * as i0 from "@angular/core";
export type BenefitType = 'success' | 'warning' | 'error';
export interface BenefitConfig {
    icon: string;
    backgroundColor: string;
    borderColor: string;
    iconColor: string;
}
export declare class BenefitItemComponent implements OnInit {
    type: BenefitType;
    text: string;
    state: TaState;
    protected config: BenefitConfig;
    protected isInitialized: boolean;
    ngOnInit(): void;
    private initializeConfig;
    get cssClasses(): string[];
    private getIcon;
    private getBackgroundColor;
    private getBorderColor;
    private getIconColor;
    get icon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BenefitItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BenefitItemComponent, "ta-benefit-item", never, { "type": { "alias": "type"; "required": false; }; "text": { "alias": "text"; "required": false; }; "state": { "alias": "state"; "required": false; }; }, {}, never, never, true, never>;
}

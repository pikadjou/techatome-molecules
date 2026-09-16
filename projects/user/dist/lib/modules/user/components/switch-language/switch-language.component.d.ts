import { InjectionToken } from '@angular/core';
import { OverlayMenuConfig } from '@ta/ui';
import * as i0 from "@angular/core";
export type TaLanguageConfig = {
    id: string;
    name: string;
};
export declare const TA_LANGUAGES: InjectionToken<TaLanguageConfig[]>;
export declare class SwitchLanguageComponent {
    /** `compact` : rangée de codes de langue, sans drapeau ni panneau (pied de page). */
    mode: import("@angular/core").InputSignal<"inline" | "dropdown" | "modal" | "compact">;
    private _translateService;
    readonly languages: TaLanguageConfig[];
    activeLanguage: string;
    dropdownOpen: boolean;
    panelConfig: OverlayMenuConfig;
    toggleDropdown(): void;
    changeLanguage(language: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchLanguageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchLanguageComponent, "ta-switch-language", never, { "mode": { "alias": "mode"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

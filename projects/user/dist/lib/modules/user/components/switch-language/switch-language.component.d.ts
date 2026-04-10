import { InjectionToken } from "@angular/core";
import * as i0 from "@angular/core";
export type TaLanguageConfig = {
    id: string;
    name: string;
};
export declare const TA_LANGUAGES: InjectionToken<TaLanguageConfig[]>;
export declare class SwitchLanguageComponent {
    mode: import("@angular/core").InputSignal<"inline" | "dropdown">;
    private _translateService;
    readonly languages: TaLanguageConfig[];
    activeLanguage: string;
    dropdownOpen: boolean;
    toggleDropdown(): void;
    changeLanguage(language: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchLanguageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchLanguageComponent, "ta-switch-language", never, { "mode": { "alias": "mode"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

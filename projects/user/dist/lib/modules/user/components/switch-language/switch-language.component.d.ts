import { TaTranslationService } from '@ta/translation';
import * as i0 from "@angular/core";
export declare class SwitchLanguageComponent {
    readonly translateService: TaTranslationService;
    readonly languages: {
        id: string;
        name: string;
    }[];
    activeLanguage: string;
    changeLanguageAsked: boolean;
    changeLanguage(language: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchLanguageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchLanguageComponent, "ta-switch-language", never, {}, {}, never, never, true, never>;
}

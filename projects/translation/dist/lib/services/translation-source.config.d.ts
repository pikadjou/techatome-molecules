import { InjectionToken } from "@angular/core";
export declare enum TranslationSourceType {
    GRAPHQL = "graphql",
    FILE = "file"
}
export interface ITranslationSourceConfig {
    type: TranslationSourceType;
    /**
     * Base path for file-based translations
     * Example: '/assets/i18n/' will look for files like '/assets/i18n/en.json'
     */
    filePath?: string;
}
export declare const TRANSLATION_SOURCE_CONFIG: InjectionToken<ITranslationSourceConfig>;

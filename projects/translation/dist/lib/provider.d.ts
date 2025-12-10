import { Provider } from "@angular/core";
import { TaTranslationLoader } from "./services/translation.loader";
import { ITranslationSourceConfig } from "./services/translation-source.config";
import { TaTranslationService } from "./services/translation.service";
export declare function HttpLoaderFactory(): TaTranslationLoader;
export declare function initTranslation(service: TaTranslationService): () => void;
export interface IProvideTranslationConfig {
    default: string;
    supportedLanguages: string[];
    source?: ITranslationSourceConfig;
}
export declare const provideTranslation: (data: IProvideTranslationConfig) => Provider;

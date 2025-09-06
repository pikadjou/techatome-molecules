import { Provider } from '@angular/core';
import { TaTranslationLoader } from './services/translation.loader';
import { TaTranslationService } from './services/translation.service';
export declare function HttpLoaderFactory(): TaTranslationLoader;
export declare function initTranslation(service: TaTranslationService): () => void;
export declare const provideTranslation: (data: {
    default: string;
    supportedLanguages: string[];
}) => Provider;

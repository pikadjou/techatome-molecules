import { Provider } from '@angular/core';
import { CamTranslationLoader } from './services/translation.loader';
import { CamTranslationService } from './services/translation.service';
export declare function HttpLoaderFactory(): CamTranslationLoader;
export declare function initTranslation(service: CamTranslationService): () => void;
export declare const provideTranslation: (data: {
    default: string;
    supportedLanguages: string[];
}) => Provider;

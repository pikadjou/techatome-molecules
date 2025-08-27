import { BehaviorSubject } from 'rxjs';
import { CamTranslationRegistryService, ITranslation } from '../services/translation-registry.service';
/**
 * @deprecated
 */
export declare abstract class CamAbstractTranslationModule implements ITranslation {
    protected _registry: CamTranslationRegistryService;
    id: string;
    protected translation: BehaviorSubject<{
        [index: string]: any;
    }>;
    private _lang;
    constructor(id: string, lang: {
        en: object;
        fr: object;
        nl: object;
        es: object;
    });
    getTranslation(lang: string): BehaviorSubject<{
        [index: string]: any;
    }>;
    protected _addTranslation(obj: object): void;
}

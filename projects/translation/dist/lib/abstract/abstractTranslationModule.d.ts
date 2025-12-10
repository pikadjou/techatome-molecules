import { BehaviorSubject } from "rxjs";
import { ITranslation, TaTranslationRegistryService } from "../services/translation-registry.service";
/**
 * @deprecated
 */
export declare abstract class TaAbstractTranslationModule implements ITranslation {
    protected _registry: TaTranslationRegistryService;
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

import { Observable } from 'rxjs';
import { TaBaseStrapiService } from '@ta/server';
import { ITranslation } from './translation-registry.service';
export declare abstract class TaLazyTranslationService extends TaBaseStrapiService implements ITranslation {
    get id(): string;
    private readonly _registry;
    private _id;
    private _isApp;
    constructor(id: string, isApp?: boolean);
    static getInstance(): TaLazyTranslationService;
    getTranslation(lang: string): Observable<object | null>;
}

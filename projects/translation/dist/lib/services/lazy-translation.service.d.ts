import { Observable } from 'rxjs';
import { CamBaseStrapiService } from '@ta/server';
import { ITranslation } from './translation-registry.service';
export declare abstract class CamLazyTranslationService extends CamBaseStrapiService implements ITranslation {
    get id(): string;
    private readonly _registry;
    private _id;
    private _isApp;
    constructor(id: string, isApp?: boolean);
    static getInstance(): CamLazyTranslationService;
    getTranslation(lang: string): Observable<object | null>;
}

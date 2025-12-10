import { Observable, Subject } from "rxjs";
import * as i0 from "@angular/core";
export interface ITranslation {
    id: string;
    getTranslation(lang: string): Observable<object | null>;
}
export declare class TaTranslationRegistryService {
    registered: ITranslation[];
    newRegistrationSubscription$: Subject<unknown>;
    constructor();
    register(register: ITranslation): void;
    getTranslations(lang: string): Observable<object | null>[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TaTranslationRegistryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaTranslationRegistryService>;
}

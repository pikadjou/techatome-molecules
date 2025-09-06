import { BehaviorSubject, Observable } from 'rxjs';
import { TaBaseService } from '@ta/server';
import { TranslatedEnumeration } from '../common/dto/translated-enumeration';
import * as i0 from "@angular/core";
export declare class TaEnumerationService extends TaBaseService {
    getAbandonReasons$: BehaviorSubject<TranslatedEnumeration[]>;
    wontDoReasons$: BehaviorSubject<TranslatedEnumeration[]>;
    incidentTypes$: BehaviorSubject<TranslatedEnumeration[]>;
    workerJustifications$: BehaviorSubject<TranslatedEnumeration[]>;
    private _getFileTypes$;
    constructor();
    fetchWontDoReasons$(): Observable<TranslatedEnumeration[]>;
    fetchWorkerJustifications$(): Observable<TranslatedEnumeration[]>;
    fetchIncidentTypes$(): Observable<TranslatedEnumeration[]>;
    fetchAbandonReasons(): Observable<TranslatedEnumeration[]>;
    getFileTypes: (id: number) => (fileTypeId: number) => TranslatedEnumeration | undefined;
    getFileTypes$: (id: number) => Observable<TranslatedEnumeration[]>;
    fetchFileTypes(): Observable<TranslatedEnumeration[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaEnumerationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaEnumerationService>;
}

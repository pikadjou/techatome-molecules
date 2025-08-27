import { CamBaseService } from '@ta/server';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslatedEnumeration } from '../common/dto/translated-enumeration';
import * as i0 from "@angular/core";
export declare class CamEnumerationService extends CamBaseService {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CamEnumerationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamEnumerationService>;
}

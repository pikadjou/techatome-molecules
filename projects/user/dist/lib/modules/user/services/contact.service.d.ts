import { CamBaseService, HandleComplexRequest, HandleSimpleRequest } from '@ta/server';
import { Contact } from './contacts/dto/contact';
import * as i0 from "@angular/core";
export declare class CamContactService extends CamBaseService {
    contactById: HandleComplexRequest<Contact>;
    contacts: HandleSimpleRequest<Contact[]>;
    constructor();
    fetchContactById$(contactId: string): import("rxjs").Observable<Contact>;
    fetchContact$(): import("rxjs").Observable<Contact[]>;
    fetchContactsByIds$(ids: string[]): import("rxjs").Observable<Contact[]>;
    fetchSearchContact$(search?: string): import("rxjs").Observable<Contact[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamContactService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamContactService>;
}

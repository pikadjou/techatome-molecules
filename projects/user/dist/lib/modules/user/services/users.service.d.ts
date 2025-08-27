import { CamBaseService, HandleComplexRequest, HandleSimpleRequest } from '@ta/server';
import { Observable } from 'rxjs';
import { ModifyUserPayloadInput } from './users/dto/modifyUserPayloadInput';
import { User } from './users/dto/user';
import { UserAddedPayload } from './users/dto/userAddedPayload';
import * as i0 from "@angular/core";
export declare const cachedQueryName: {
    currentUser: string;
};
export declare class CamUsersService extends CamBaseService {
    users: HandleSimpleRequest<User[]>;
    usersCustomers: HandleSimpleRequest<User[]>;
    userById: HandleComplexRequest<User>;
    user: HandleComplexRequest<User>;
    currentUser: HandleSimpleRequest<User>;
    currentUserContactIds: HandleSimpleRequest<string[]>;
    contactTenantRoute: HandleSimpleRequest<string>;
    constructor();
    fetchUsers$(): Observable<User[]>;
    fetchContactTenantRoute$(contactId: string): Observable<string>;
    fetchUsersByIds$(ids: string[]): Observable<User[]>;
    fetchUser$(id: string): Observable<User>;
    fetchCurrentUser$(): Observable<User>;
    fetchCurrentUserContactIds$(): Observable<string[]>;
    fetchUsersCustomers$(search?: string): Observable<User[]>;
    addUser$(userAddedPayload: UserAddedPayload): Observable<User[] | null>;
    disableUser$(userId: string): Observable<User | null>;
    disableCurrentUser$(): Observable<User | null>;
    updateCurrentUser$(user: ModifyUserPayloadInput): Observable<User | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamUsersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamUsersService>;
}

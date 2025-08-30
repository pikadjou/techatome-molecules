import { Observable } from 'rxjs';
import { CamBaseService, HandleSimpleRequest } from '@ta/server';
import { Function, FunctionCreationPayload, FunctionModifierPayload } from './users/dto/function';
import { Role } from './users/dto/role';
import { UserFunctionPayload } from './users/dto/user';
import * as i0 from "@angular/core";
export declare class CamFunctionsService extends CamBaseService {
    functions: HandleSimpleRequest<Function[]>;
    roles: HandleSimpleRequest<Role[]>;
    private _usersService;
    constructor();
    fetchFunctions$(): Observable<Function[]>;
    fetchRoles$(): Observable<Role[]>;
    addFunction$(functionAddedPayload: FunctionCreationPayload): Observable<Function[] | null>;
    updateFunction$(functionModifierPayload: Partial<FunctionModifierPayload>): Observable<Function[] | null>;
    addFunctionToUser$(payload: UserFunctionPayload): Observable<import("./users/dto/user").User | null>;
    removeFunctionFromUser$(payload: UserFunctionPayload): Observable<import("./users/dto/user").User | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamFunctionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamFunctionsService>;
}

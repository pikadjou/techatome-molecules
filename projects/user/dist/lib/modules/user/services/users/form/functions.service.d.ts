import { InputPanel } from '@ta/form-model';
import { Function, FunctionCreationPayload, FunctionModifierPayload } from '../dto/function';
import * as i0 from "@angular/core";
export declare enum EFunctionFormFields {
    name = "name",
    roles = "roles"
}
export declare class CamFunctionsFormService {
    private _functionsService;
    getFunctionForm(func: Function | null): InputPanel[];
    formatCreationFunctionForm(data: any): FunctionCreationPayload;
    formatUpdateFunctionForm(id: string, data: any): Partial<FunctionModifierPayload>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamFunctionsFormService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamFunctionsFormService>;
}

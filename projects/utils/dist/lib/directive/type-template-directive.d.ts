import * as i0 from "@angular/core";
export declare class TypedTemplateDirective<TypeToken> {
    typedTemplate: import("@angular/core").InputSignal<TypeToken>;
    private readonly _contentTemplate;
    static ngTemplateContextGuard<TypeToken>(dir: TypedTemplateDirective<TypeToken>, ctx: unknown): ctx is TypeToken;
    static ɵfac: i0.ɵɵFactoryDeclaration<TypedTemplateDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TypedTemplateDirective<any>, "ng-template[typedTemplate]", never, { "typedTemplate": { "alias": "typedTemplate"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

import * as i0 from "@angular/core";
export declare class TaReadOnlyContextService {
    private readonly _readonly$;
    readonly isReadOnly$: import("rxjs").Observable<boolean>;
    setReadonly(value: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaReadOnlyContextService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaReadOnlyContextService>;
}
/** @deprecated utiliser TaReadOnlyContextService */
export { TaReadOnlyContextService as ReadOnlyContextService };

import { Injectable } from '@angular/core';
import { TaLazyTranslationService } from '@ta/translation';
import * as i0 from "@angular/core";
/**
 * Charge les libellés de @ta/features depuis `assets/i18n/grid/<lang>.json`.
 * Les clés du fichier sont automatiquement préfixées par `grid.`.
 */
export class TaTranslationGrid extends TaLazyTranslationService {
    constructor() {
        super('grid');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationGrid, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationGrid, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationGrid, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUzRDs7O0dBR0c7QUFJSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsd0JBQXdCO0lBQzdEO1FBQ0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7K0dBSFUsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFMYXp5VHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcblxuLyoqXG4gKiBDaGFyZ2UgbGVzIGxpYmVsbMOpcyBkZSBAdGEvZmVhdHVyZXMgZGVwdWlzIGBhc3NldHMvaTE4bi9ncmlkLzxsYW5nPi5qc29uYC5cbiAqIExlcyBjbMOpcyBkdSBmaWNoaWVyIHNvbnQgYXV0b21hdGlxdWVtZW50IHByw6lmaXjDqWVzIHBhciBgZ3JpZC5gLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFUcmFuc2xhdGlvbkdyaWQgZXh0ZW5kcyBUYUxhenlUcmFuc2xhdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignZ3JpZCcpO1xuICB9XG59XG4iXX0=
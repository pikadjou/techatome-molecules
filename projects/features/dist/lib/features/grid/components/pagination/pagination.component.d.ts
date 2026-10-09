import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
type PageNumber = {
    number: number;
    isEllipsis?: boolean;
};
/** Précédent, numéros (avec ellipses au-delà de `maxPageNumber`), suivant ; ou « voir plus » en mode `cursor`. */
export declare class PaginationComponent extends TaAbstractGridComponent<any> {
    readonly maxPageNumber = 7;
    show(): boolean;
    isCursorMode(): boolean;
    hasKnownTotal(): boolean;
    hasNextPage(): boolean;
    isLoading(): boolean;
    currentPage(): number;
    totalPages(): number;
    range(): {
        end: number;
        start: number;
        total: number;
    };
    goToPrevious(): void;
    goToNext(): void;
    goToPage(page: number): void;
    loadMore(): void;
    getListPage(): PageNumber[];
    private _range;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "ta-grid-pagination", never, {}, {}, never, never, true, never>;
}
export {};

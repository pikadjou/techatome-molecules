import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ta/translation';
import { PluralTranslatePipe } from '@ta/utils';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
/**
 * Nombre de résultats de la liste.
 *
 * Le panneau de filtres l'annonce déjà à côté de son titre, mais il vit dans un
 * tiroir : posé au-dessus des résultats, le compte dit tout de suite ce que les
 * filtres ont laissé passer.
 */
export class TaGridCountComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        /**
         * Clé de traduction pluralisée du décompte. La valeur par défaut compte des
         * résultats ; un appelant qui sait ce qu'il liste compte des biens, des
         * personnes ou des dossiers.
         */
        this.label = input('grid.tag.results');
    }
    get total() {
        return this.grid?.totalItems() ?? 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridCountComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaGridCountComponent, isStandalone: true, selector: "ta-grid-count", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "@if (this.isReady$ | async) {\n  <span class=\"grid-count\">\n    {{ this.label() | pluralTranslate: this.total | translate: { nb: this.total } }}\n  </span>\n}\n", styles: [".grid-count{font-family:var(--ta-font-display-family);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);font-weight:var(--ta-font-weight-bold);color:var(--ta-text-primary)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "pipe", type: PluralTranslatePipe, name: "pluralTranslate" }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridCountComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-count', standalone: true, imports: [AsyncPipe, PluralTranslatePipe, TranslatePipe], template: "@if (this.isReady$ | async) {\n  <span class=\"grid-count\">\n    {{ this.label() | pluralTranslate: this.total | translate: { nb: this.total } }}\n  </span>\n}\n", styles: [".grid-count{font-family:var(--ta-font-display-family);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);font-weight:var(--ta-font-weight-bold);color:var(--ta-text-primary)}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvY291bnQvY291bnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvY291bnQvY291bnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRWhFOzs7Ozs7R0FNRztBQVFILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx1QkFBZ0M7SUFQMUU7O1FBUUU7Ozs7V0FJRztRQUNILFVBQUssR0FBRyxLQUFLLENBQVMsa0JBQWtCLENBQUMsQ0FBQztLQUszQztJQUhDLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzsrR0FWVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixvT0N0QmpDLG9LQUtBLGlSRGFZLFNBQVMseUNBQUUsbUJBQW1CLG1EQUFFLGFBQWE7OzRGQUk1QyxvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0UsZUFBZSxjQUNiLElBQUksV0FDUCxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IFBsdXJhbFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYUFic3RyYWN0R3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogTm9tYnJlIGRlIHLDqXN1bHRhdHMgZGUgbGEgbGlzdGUuXG4gKlxuICogTGUgcGFubmVhdSBkZSBmaWx0cmVzIGwnYW5ub25jZSBkw6lqw6Agw6AgY8O0dMOpIGRlIHNvbiB0aXRyZSwgbWFpcyBpbCB2aXQgZGFucyB1blxuICogdGlyb2lyIDogcG9zw6kgYXUtZGVzc3VzIGRlcyByw6lzdWx0YXRzLCBsZSBjb21wdGUgZGl0IHRvdXQgZGUgc3VpdGUgY2UgcXVlIGxlc1xuICogZmlsdHJlcyBvbnQgbGFpc3PDqSBwYXNzZXIuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWdyaWQtY291bnQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQXN5bmNQaXBlLCBQbHVyYWxUcmFuc2xhdGVQaXBlLCBUcmFuc2xhdGVQaXBlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NvdW50LmNvbXBvbmVudC5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFHcmlkQ291bnRDb21wb25lbnQgZXh0ZW5kcyBUYUFic3RyYWN0R3JpZENvbXBvbmVudDx1bmtub3duPiB7XG4gIC8qKlxuICAgKiBDbMOpIGRlIHRyYWR1Y3Rpb24gcGx1cmFsaXPDqWUgZHUgZMOpY29tcHRlLiBMYSB2YWxldXIgcGFyIGTDqWZhdXQgY29tcHRlIGRlc1xuICAgKiByw6lzdWx0YXRzIDsgdW4gYXBwZWxhbnQgcXVpIHNhaXQgY2UgcXUnaWwgbGlzdGUgY29tcHRlIGRlcyBiaWVucywgZGVzXG4gICAqIHBlcnNvbm5lcyBvdSBkZXMgZG9zc2llcnMuXG4gICAqL1xuICBsYWJlbCA9IGlucHV0PHN0cmluZz4oJ2dyaWQudGFnLnJlc3VsdHMnKTtcblxuICBnZXQgdG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5ncmlkPy50b3RhbEl0ZW1zKCkgPz8gMDtcbiAgfVxufVxuIiwiQGlmICh0aGlzLmlzUmVhZHkkIHwgYXN5bmMpIHtcbiAgPHNwYW4gY2xhc3M9XCJncmlkLWNvdW50XCI+XG4gICAge3sgdGhpcy5sYWJlbCgpIHwgcGx1cmFsVHJhbnNsYXRlOiB0aGlzLnRvdGFsIHwgdHJhbnNsYXRlOiB7IG5iOiB0aGlzLnRvdGFsIH0gfX1cbiAgPC9zcGFuPlxufVxuIl19
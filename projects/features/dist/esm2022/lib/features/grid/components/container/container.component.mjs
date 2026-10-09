import { Component, Injector, inject, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { skip } from 'rxjs';
import { TaGridSessionService } from '../../services/grid-session.services';
import { TaGridViewService } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export class TaGridContainerComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.initialData = input();
        this.model = input('');
        this.colsMetaData = input([]);
        this.preset = input();
        /** Critères de départ, quand la session n'en a pas retenu pour ce grid. */
        this.initialFilter = input([]);
        /** Source de données maison, quand la grille ne lit pas un modèle du serveur. */
        this.dataService = input();
        /** `cursor` pour une source qui ne sait pas compter : le « voir plus » remplace les numéros de page. */
        this.pagination = input('page');
        this.pageSize = input();
        this._session = inject(TaGridSessionService);
        this._service = inject(TaGridViewService);
        this._injector = inject(Injector);
    }
    ngOnInit() {
        super.ngOnInit();
        const saved = this._session.getFilter(this.gridId());
        this._grid.init({
            colsMetaData: this.colsMetaData(),
            initialFilter: saved ?? this.initialFilter(),
            data: this.initialData(),
            preset: this.preset(),
            pagination: this.pagination(),
            pageSize: this.pageSize(),
            services: this.dataService() ??
                (this.model() ? { getData$: params => this._service.getData$(this.model(), params) } : undefined),
        });
        // Les critères survivent à la navigation : on les retrouve en revenant sur le grid.
        const table = this._grid.table;
        if (table) {
            this._registerSubscription(toObservable(table.filters, { injector: this._injector })
                .pipe(skip(1))
                .subscribe(filters => this._session.setFilter(this.gridId(), filters)));
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._grid.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaGridContainerComponent, isStandalone: true, selector: "ta-grid-container", inputs: { initialData: { classPropertyName: "initialData", publicName: "initialData", isSignal: true, isRequired: false, transformFunction: null }, model: { classPropertyName: "model", publicName: "model", isSignal: true, isRequired: false, transformFunction: null }, colsMetaData: { classPropertyName: "colsMetaData", publicName: "colsMetaData", isSignal: true, isRequired: false, transformFunction: null }, preset: { classPropertyName: "preset", publicName: "preset", isSignal: true, isRequired: false, transformFunction: null }, initialFilter: { classPropertyName: "initialFilter", publicName: "initialFilter", isSignal: true, isRequired: false, transformFunction: null }, dataService: { classPropertyName: "dataService", publicName: "dataService", isSignal: true, isRequired: false, transformFunction: null }, pagination: { classPropertyName: "pagination", publicName: "pagination", isSignal: true, isRequired: false, transformFunction: null }, pageSize: { classPropertyName: "pageSize", publicName: "pageSize", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-container', standalone: true, imports: [], template: "<ng-content></ng-content>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSTVCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVNoRSxNQUFNLE9BQU8sd0JBQXNDLFNBQVEsdUJBQTBCO0lBUHJGOztRQVFFLGdCQUFXLEdBQUcsS0FBSyxFQUFPLENBQUM7UUFFM0IsVUFBSyxHQUFHLEtBQUssQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUUxQixpQkFBWSxHQUFHLEtBQUssQ0FBbUIsRUFBRSxDQUFDLENBQUM7UUFFM0MsV0FBTSxHQUFHLEtBQUssRUFBWSxDQUFDO1FBRTNCLDJFQUEyRTtRQUMzRSxrQkFBYSxHQUFHLEtBQUssQ0FBVyxFQUFFLENBQUMsQ0FBQztRQUVwQyxpRkFBaUY7UUFDakYsZ0JBQVcsR0FBRyxLQUFLLEVBQW1CLENBQUM7UUFFdkMsd0dBQXdHO1FBQ3hHLGVBQVUsR0FBRyxLQUFLLENBQWlCLE1BQU0sQ0FBQyxDQUFDO1FBRTNDLGFBQVEsR0FBRyxLQUFLLEVBQVUsQ0FBQztRQUVuQixhQUFRLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JDLGNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FpQ3RDO0lBL0JVLFFBQVE7UUFDZixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQyxhQUFhLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDNUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDekIsUUFBUSxFQUNOLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDdkcsQ0FBQyxDQUFDO1FBRUgsb0ZBQW9GO1FBQ3BGLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQy9CLElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMscUJBQXFCLENBQ3hCLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDYixTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FDekUsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRVEsV0FBVztRQUNsQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDOytHQXREVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qiw0cENDbEJyQyw2QkFDQTs7NEZEaUJhLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSxtQkFBbUIsY0FDakIsSUFBSSxXQUNQLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBpbmplY3QsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b09ic2VydmFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5cbmltcG9ydCB7IHNraXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dyaWQtZGF0YSc7XG5pbXBvcnQgeyBDb2xNZXRhRGF0YSwgRmlsdGVyLCBQYWdpbmF0aW9uTW9kZSwgUHJlc2V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3R5cGVzJztcbmltcG9ydCB7IFRhR3JpZFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ3JpZC1zZXNzaW9uLnNlcnZpY2VzJztcbmltcG9ydCB7IFRhR3JpZFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ3JpZC12aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFBYnN0cmFjdEdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1ncmlkLWNvbnRhaW5lcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIFRhR3JpZENvbnRhaW5lckNvbXBvbmVudDxUID0gdW5rbm93bj4gZXh0ZW5kcyBUYUFic3RyYWN0R3JpZENvbXBvbmVudDxUPiB7XG4gIGluaXRpYWxEYXRhID0gaW5wdXQ8VFtdPigpO1xuXG4gIG1vZGVsID0gaW5wdXQ8c3RyaW5nPignJyk7XG5cbiAgY29sc01ldGFEYXRhID0gaW5wdXQ8Q29sTWV0YURhdGE8VD5bXT4oW10pO1xuXG4gIHByZXNldCA9IGlucHV0PFByZXNldFtdPigpO1xuXG4gIC8qKiBDcml0w6hyZXMgZGUgZMOpcGFydCwgcXVhbmQgbGEgc2Vzc2lvbiBuJ2VuIGEgcGFzIHJldGVudSBwb3VyIGNlIGdyaWQuICovXG4gIGluaXRpYWxGaWx0ZXIgPSBpbnB1dDxGaWx0ZXJbXT4oW10pO1xuXG4gIC8qKiBTb3VyY2UgZGUgZG9ubsOpZXMgbWFpc29uLCBxdWFuZCBsYSBncmlsbGUgbmUgbGl0IHBhcyB1biBtb2TDqGxlIGR1IHNlcnZldXIuICovXG4gIGRhdGFTZXJ2aWNlID0gaW5wdXQ8SURhdGFTZXJ2aWNlPFQ+PigpO1xuXG4gIC8qKiBgY3Vyc29yYCBwb3VyIHVuZSBzb3VyY2UgcXVpIG5lIHNhaXQgcGFzIGNvbXB0ZXIgOiBsZSDCqyB2b2lyIHBsdXMgwrsgcmVtcGxhY2UgbGVzIG51bcOpcm9zIGRlIHBhZ2UuICovXG4gIHBhZ2luYXRpb24gPSBpbnB1dDxQYWdpbmF0aW9uTW9kZT4oJ3BhZ2UnKTtcblxuICBwYWdlU2l6ZSA9IGlucHV0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIF9zZXNzaW9uID0gaW5qZWN0KFRhR3JpZFNlc3Npb25TZXJ2aWNlKTtcbiAgcHJpdmF0ZSBfc2VydmljZSA9IGluamVjdChUYUdyaWRWaWV3U2VydmljZSk7XG4gIHByaXZhdGUgX2luamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblxuICBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIGNvbnN0IHNhdmVkID0gdGhpcy5fc2Vzc2lvbi5nZXRGaWx0ZXIodGhpcy5ncmlkSWQoKSk7XG5cbiAgICB0aGlzLl9ncmlkLmluaXQoe1xuICAgICAgY29sc01ldGFEYXRhOiB0aGlzLmNvbHNNZXRhRGF0YSgpLFxuICAgICAgaW5pdGlhbEZpbHRlcjogc2F2ZWQgPz8gdGhpcy5pbml0aWFsRmlsdGVyKCksXG4gICAgICBkYXRhOiB0aGlzLmluaXRpYWxEYXRhKCksXG4gICAgICBwcmVzZXQ6IHRoaXMucHJlc2V0KCksXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRpb24oKSxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplKCksXG4gICAgICBzZXJ2aWNlczpcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZSgpID8/XG4gICAgICAgICh0aGlzLm1vZGVsKCkgPyB7IGdldERhdGEkOiBwYXJhbXMgPT4gdGhpcy5fc2VydmljZS5nZXREYXRhJDxUPih0aGlzLm1vZGVsKCksIHBhcmFtcykgfSA6IHVuZGVmaW5lZCksXG4gICAgfSk7XG5cbiAgICAvLyBMZXMgY3JpdMOocmVzIHN1cnZpdmVudCDDoCBsYSBuYXZpZ2F0aW9uIDogb24gbGVzIHJldHJvdXZlIGVuIHJldmVuYW50IHN1ciBsZSBncmlkLlxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy5fZ3JpZC50YWJsZTtcbiAgICBpZiAodGFibGUpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICB0b09ic2VydmFibGUodGFibGUuZmlsdGVycywgeyBpbmplY3RvcjogdGhpcy5faW5qZWN0b3IgfSlcbiAgICAgICAgICAucGlwZShza2lwKDEpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoZmlsdGVycyA9PiB0aGlzLl9zZXNzaW9uLnNldEZpbHRlcih0aGlzLmdyaWRJZCgpLCBmaWx0ZXJzKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLl9ncmlkLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuIl19
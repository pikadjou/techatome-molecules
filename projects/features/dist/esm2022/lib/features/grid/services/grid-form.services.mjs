import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { InputDropdown, InputPanel } from '@ta/form-model';
import { isNonNullable } from '@ta/utils';
import * as i0 from "@angular/core";
export class TaGridFormService {
    constructor() { }
    getFiltersForm(model) {
        const children = this._filterInputs(model, this.filterKeys(model));
        if (children.length === 0) {
            return [];
        }
        return [
            new InputPanel({
                key: 'main-panel',
                class: 'p-space-sm',
                contentClass: 'grid g-space-md',
                children,
            }),
        ];
    }
    getHighlightedFiltersForm(model) {
        const children = this._filterInputs(model, this.highlightedKeys(model));
        if (children.length === 0) {
            return [];
        }
        return [
            new InputPanel({
                key: 'highlight-panel',
                contentClass: 'grid g-space-md',
                children,
            }),
        ];
    }
    /** Colonnes du panneau de filtres. */
    filterKeys(model) {
        return Object.keys(model.cols).filter(key => model.cols[key].data.col.showOnSearch);
    }
    /** Colonnes de la barre mise en avant. */
    highlightedKeys(model) {
        return Object.keys(model.cols).filter(key => model.cols[key].data.col.highlighted);
    }
    formatFiltersForm(model, data) {
        return Object.keys(model.cols)
            .filter(key => key in data)
            .flatMap(key => model.cols[key].formatInputForm(data) ?? []);
    }
    getGroupForm(model) {
        return [
            new InputPanel({
                key: 'main-panel',
                class: 'p-space-sm',
                children: [
                    new InputDropdown({
                        key: 'group',
                        label: 'grid.core.groupBy',
                        options$: of(Object.values(model.cols)
                            .filter(col => col.data.col.showOnSearch && !col.data.col.notDisplayable)
                            .map(group => ({
                            id: group.key(),
                            name: group.inputLabel(),
                        }))),
                        value: model.groupBy(),
                    }),
                ],
            }),
        ];
    }
    formatGroupForm(data) {
        return data['group'] || null;
    }
    /** Chaque champ dans son propre panneau, à la largeur que la colonne demande. */
    _filterInputs(model, keys) {
        return keys
            .map(key => {
            const input = model.cols[key].getInputForm();
            return input
                ? new InputPanel({
                    key: `panel-${input.key}`,
                    class: model.cols[key].data.col.filter?.class ?? 'full',
                    children: [input],
                })
                : null;
        })
            .filter(isNonNullable);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1mb3JtLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL3NlcnZpY2VzL2dyaWQtZm9ybS5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFhLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVExQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLGdCQUFlLENBQUM7SUFFVCxjQUFjLENBQUMsS0FBb0I7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMxQixPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7UUFFRCxPQUFPO1lBQ0wsSUFBSSxVQUFVLENBQUM7Z0JBQ2IsR0FBRyxFQUFFLFlBQVk7Z0JBQ2pCLEtBQUssRUFBRSxZQUFZO2dCQUNuQixZQUFZLEVBQUUsaUJBQWlCO2dCQUMvQixRQUFRO2FBQ1QsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBRU0seUJBQXlCLENBQUMsS0FBb0I7UUFDbkQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMxQixPQUFPLEVBQUUsQ0FBQztRQUNaLENB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RCxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUJBQ2xCLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNYLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQixDQUFDOytHQTVGVSxpQkFBaUI7bUhBQWpCLGlCQUFpQixjQUZoQixNQUFNOzs0RkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJbnB1dEJhc2UsIElucHV0RHJvcGRvd24sIElucHV0UGFuZWwgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFHcmlkRGF0YSB9IGZyb20gJy4uL21vZGVscy9ncmlkLWRhdGEnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL3R5cGVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhR3JpZEZvcm1TZXJ2aWNlPFQ+IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzRm9ybShtb2RlbDogVGFHcmlkRGF0YTxUPik6IElucHV0QmFzZTxhbnk+W10ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZmlsdGVySW5wdXRzKG1vZGVsLCB0aGlzLmZpbHRlcktleXMobW9kZWwpKTtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBJbnB1dFBhbmVsKHtcbiAgICAgICAga2V5OiAnbWFpbi1wYW5lbCcsXG4gICAgICAgIGNsYXNzOiAncC1zcGFjZS1zbScsXG4gICAgICAgIGNvbnRlbnRDbGFzczogJ2dyaWQgZy1zcGFjZS1tZCcsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgfSksXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIaWdobGlnaHRlZEZpbHRlcnNGb3JtKG1vZGVsOiBUYUdyaWREYXRhPFQ+KTogSW5wdXRCYXNlPGFueT5bXSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9maWx0ZXJJbnB1dHMobW9kZWwsIHRoaXMuaGlnaGxpZ2h0ZWRLZXlzKG1vZGVsKSk7XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBuZXcgSW5wdXRQYW5lbCh7XG4gICAgICAgIGtleTogJ2hpZ2hsaWdodC1wYW5lbCcsXG4gICAgICAgIGNvbnRlbnRDbGFzczogJ2dyaWQgZy1zcGFjZS1tZCcsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgfSksXG4gICAgXTtcbiAgfVxuXG4gIC8qKiBDb2xvbm5lcyBkdSBwYW5uZWF1IGRlIGZpbHRyZXMuICovXG4gIHB1YmxpYyBmaWx0ZXJLZXlzKG1vZGVsOiBUYUdyaWREYXRhPFQ+KTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtb2RlbC5jb2xzKS5maWx0ZXIoa2V5ID0+IG1vZGVsLmNvbHNba2V5XS5kYXRhLmNvbC5zaG93T25TZWFyY2gpO1xuICB9XG5cbiAgLyoqIENvbG9ubmVzIGRlIGxhIGJhcnJlIG1pc2UgZW4gYXZhbnQuICovXG4gIHB1YmxpYyBoaWdobGlnaHRlZEtleXMobW9kZWw6IFRhR3JpZERhdGE8VD4pOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1vZGVsLmNvbHMpLmZpbHRlcihrZXkgPT4gbW9kZWwuY29sc1trZXldLmRhdGEuY29sLmhpZ2hsaWdodGVkKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRGaWx0ZXJzRm9ybShtb2RlbDogVGFHcmlkRGF0YTxUPiwgZGF0YTogYW55KTogRmlsdGVyW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtb2RlbC5jb2xzKVxuICAgICAgLmZpbHRlcihrZXkgPT4ga2V5IGluIGRhdGEpXG4gICAgICAuZmxhdE1hcChrZXkgPT4gbW9kZWwuY29sc1trZXldLmZvcm1hdElucHV0Rm9ybShkYXRhKSA/PyBbXSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0R3JvdXBGb3JtKG1vZGVsOiBUYUdyaWREYXRhPFQ+KTogSW5wdXRCYXNlPGFueT5bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBJbnB1dFBhbmVsKHtcbiAgICAgICAga2V5OiAnbWFpbi1wYW5lbCcsXG4gICAgICAgIGNsYXNzOiAncC1zcGFjZS1zbScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmV3IElucHV0RHJvcGRvd24oe1xuICAgICAgICAgICAga2V5OiAnZ3JvdXAnLFxuICAgICAgICAgICAgbGFiZWw6ICdncmlkLmNvcmUuZ3JvdXBCeScsXG4gICAgICAgICAgICBvcHRpb25zJDogb2YoXG4gICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMobW9kZWwuY29scylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNvbCA9PiBjb2wuZGF0YS5jb2wuc2hvd09uU2VhcmNoICYmICFjb2wuZGF0YS5jb2wubm90RGlzcGxheWFibGUpXG4gICAgICAgICAgICAgICAgLm1hcChncm91cCA9PiAoe1xuICAgICAgICAgICAgICAgICAgaWQ6IGdyb3VwLmtleSgpLFxuICAgICAgICAgICAgICAgICAgbmFtZTogZ3JvdXAuaW5wdXRMYWJlbCgpLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHZhbHVlOiBtb2RlbC5ncm91cEJ5KCksXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdEdyb3VwRm9ybShkYXRhOiBhbnkpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gZGF0YVsnZ3JvdXAnXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqIENoYXF1ZSBjaGFtcCBkYW5zIHNvbiBwcm9wcmUgcGFubmVhdSwgw6AgbGEgbGFyZ2V1ciBxdWUgbGEgY29sb25uZSBkZW1hbmRlLiAqL1xuICBwcml2YXRlIF9maWx0ZXJJbnB1dHMobW9kZWw6IFRhR3JpZERhdGE8VD4sIGtleXM6IHN0cmluZ1tdKTogSW5wdXRCYXNlPGFueT5bXSB7XG4gICAgcmV0dXJuIGtleXNcbiAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBtb2RlbC5jb2xzW2tleV0uZ2V0SW5wdXRGb3JtKCk7XG4gICAgICAgIHJldHVybiBpbnB1dFxuICAgICAgICAgID8gbmV3IElucHV0UGFuZWwoe1xuICAgICAgICAgICAgICBrZXk6IGBwYW5lbC0ke2lucHV0LmtleX1gLFxuICAgICAgICAgICAgICBjbGFzczogbW9kZWwuY29sc1trZXldLmRhdGEuY29sLmZpbHRlcj8uY2xhc3MgPz8gJ2Z1bGwnLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogW2lucHV0XSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBudWxsO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoaXNOb25OdWxsYWJsZSk7XG4gIH1cbn1cbiJdfQ==
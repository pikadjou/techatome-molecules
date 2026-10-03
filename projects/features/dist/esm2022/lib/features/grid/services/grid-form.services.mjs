import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { InputDropdown, InputPanel } from '@ta/form-model';
import { isNonNullable } from '@ta/utils';
import * as i0 from "@angular/core";
export class TaGridFormService {
    constructor() { }
    getFiltersForm(model) {
        const keys = Object.keys(model.cols);
        if (!keys || keys.length === 0) {
            return [];
        }
        return [
            new InputPanel({
                key: 'main-panel',
                class: 'p-space-sm',
                contentClass: 'flex-column g-space-md',
                children: keys
                    .filter(key => model.cols[key].data.col.showOnSearch)
                    .map(key => model.cols[key].getInputForm())
                    .filter(isNonNullable)
                    .map(input => new InputPanel({
                    key: `panel-${input.key}`,
                    class: 'g-col-6',
                    children: [input],
                })),
            }),
        ];
    }
    getHighlightedFiltersForm(model) {
        const keys = Object.keys(model.cols);
        if (!keys || keys.length === 0) {
            return [];
        }
        const children = keys
            .filter(key => model.cols[key].data.col.highlighted)
            .map(key => model.cols[key].getInputForm())
            .filter(isNonNullable)
            .map(input => new InputPanel({
            key: `panel-${input.key}`,
            class: 'g-col-6',
            children: [input],
        }));
        if (children.length === 0) {
            return [];
        }
        return [
            new InputPanel({
                key: 'highlight-panel',
                contentClass: 'flex-column g-space-md',
                children,
            }),
        ];
    }
    formatFiltersForm(model, data) {
        return Object.keys(model.cols).reduce((acc, key) => {
            const filter = model.cols[key].formatInputForm(data);
            if (!filter) {
                return acc;
            }
            return [...acc, filter];
        }, []);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1mb3JtLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL3NlcnZpY2VzL2dyaWQtZm9ybS5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFhLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVExQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLGdCQUFlLENBQUM7SUFFVCxjQUFjLENBQUMsS0FBb0I7UUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVELE9BQU87WUFDTCxJQUFJLFVBQVUsQ0FBQztnQkFDYixHQUFHLEVBQUUsWUFBWTtnQkFDakIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFlBQVksRUFBRSx3QkFBd0I7Z0JBQ3RDLFFBQVEsRUFBRSxJQUFJO3FCQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7cUJBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQzFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7cUJB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QVUsRUFBRTt5QkFDekIsQ0FBQyxDQUFDLENBQ047d0JBQ0QsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUU7cUJBQ3ZCLENBQUM7aUJBQ0g7YUFDRixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxlQUFlLENBQUMsSUFBUztRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDL0IsQ0FBQzsrR0FuR1UsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW5wdXRCYXNlLCBJbnB1dERyb3Bkb3duLCBJbnB1dFBhbmVsIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgaXNOb25OdWxsYWJsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFRhR3JpZERhdGEgfSBmcm9tICcuLi9tb2RlbHMvZ3JpZC1kYXRhJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL21vZGVscy90eXBlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYUdyaWRGb3JtU2VydmljZTxUPiB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0Zvcm0obW9kZWw6IFRhR3JpZERhdGE8VD4pOiBJbnB1dEJhc2U8YW55PltdIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobW9kZWwuY29scyk7XG4gICAgaWYgKCFrZXlzIHx8IGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBJbnB1dFBhbmVsKHtcbiAgICAgICAga2V5OiAnbWFpbi1wYW5lbCcsXG4gICAgICAgIGNsYXNzOiAncC1zcGFjZS1zbScsXG4gICAgICAgIGNvbnRlbnRDbGFzczogJ2ZsZXgtY29sdW1uIGctc3BhY2UtbWQnLFxuICAgICAgICBjaGlsZHJlbjoga2V5c1xuICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IG1vZGVsLmNvbHNba2V5XS5kYXRhLmNvbC5zaG93T25TZWFyY2gpXG4gICAgICAgICAgLm1hcChrZXkgPT4gbW9kZWwuY29sc1trZXldLmdldElucHV0Rm9ybSgpKVxuICAgICAgICAgIC5maWx0ZXIoaXNOb25OdWxsYWJsZSlcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgaW5wdXQgPT5cbiAgICAgICAgICAgICAgbmV3IElucHV0UGFuZWwoe1xuICAgICAgICAgICAgICAgIGtleTogYHBhbmVsLSR7aW5wdXQua2V5fWAsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdnLWNvbC02JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2lucHV0XSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgfSksXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIaWdobGlnaHRlZEZpbHRlcnNGb3JtKG1vZGVsOiBUYUdyaWREYXRhPFQ+KTogSW5wdXRCYXNlPGFueT5bXSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1vZGVsLmNvbHMpO1xuICAgIGlmICgha2V5cyB8fCBrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuID0ga2V5c1xuICAgICAgLmZpbHRlcihrZXkgPT4gbW9kZWwuY29sc1trZXldLmRhdGEuY29sLmhpZ2hsaWdodGVkKVxuICAgICAgLm1hcChrZXkgPT4gbW9kZWwuY29sc1trZXldLmdldElucHV0Rm9ybSgpKVxuICAgICAgLmZpbHRlcihpc05vbk51bGxhYmxlKVxuICAgICAgLm1hcChcbiAgICAgICAgaW5wdXQgPT5cbiAgICAgICAgICBuZXcgSW5wdXRQYW5lbCh7XG4gICAgICAgICAgICBrZXk6IGBwYW5lbC0ke2lucHV0LmtleX1gLFxuICAgICAgICAgICAgY2xhc3M6ICdnLWNvbC02JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbaW5wdXRdLFxuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBuZXcgSW5wdXRQYW5lbCh7XG4gICAgICAgIGtleTogJ2hpZ2hsaWdodC1wYW5lbCcsXG4gICAgICAgIGNvbnRlbnRDbGFzczogJ2ZsZXgtY29sdW1uIGctc3BhY2UtbWQnLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgIH0pLFxuICAgIF07XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RmlsdGVyc0Zvcm0obW9kZWw6IFRhR3JpZERhdGE8VD4sIGRhdGE6IGFueSk6IEZpbHRlcltdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobW9kZWwuY29scykucmVkdWNlPEZpbHRlcltdPigoYWNjLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlciA9IG1vZGVsLmNvbHNba2V5XS5mb3JtYXRJbnB1dEZvcm0oZGF0YSk7XG5cbiAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICByZXR1cm4gWy4uLmFjYywgZmlsdGVyXTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0R3JvdXBGb3JtKG1vZGVsOiBUYUdyaWREYXRhPFQ+KTogSW5wdXRCYXNlPGFueT5bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBJbnB1dFBhbmVsKHtcbiAgICAgICAga2V5OiAnbWFpbi1wYW5lbCcsXG4gICAgICAgIGNsYXNzOiAncC1zcGFjZS1zbScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmV3IElucHV0RHJvcGRvd24oe1xuICAgICAgICAgICAga2V5OiAnZ3JvdXAnLFxuICAgICAgICAgICAgbGFiZWw6ICdncmlkLmNvcmUuZ3JvdXBCeScsXG4gICAgICAgICAgICBvcHRpb25zJDogb2YoXG4gICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMobW9kZWwuY29scylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNvbCA9PiBjb2wuZGF0YS5jb2wuc2hvd09uU2VhcmNoICYmICFjb2wuZGF0YS5jb2wubm90RGlzcGxheWFibGUpXG4gICAgICAgICAgICAgICAgLm1hcChncm91cCA9PiAoe1xuICAgICAgICAgICAgICAgICAgaWQ6IGdyb3VwLmtleSgpLFxuICAgICAgICAgICAgICAgICAgbmFtZTogZ3JvdXAuaW5wdXRMYWJlbCgpLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHZhbHVlOiBtb2RlbC5ncm91cEJ5KCksXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdEdyb3VwRm9ybShkYXRhOiBhbnkpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gZGF0YVsnZ3JvdXAnXSB8fCBudWxsO1xuICB9XG59XG4iXX0=
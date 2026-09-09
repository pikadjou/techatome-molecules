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
                            id: group.key,
                            name: group.inputLabel,
                        }))),
                        value: model.groupBy,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1mb3JtLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL3NlcnZpY2VzL2dyaWQtZm9ybS5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFhLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVExQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLGdCQUFlLENBQUM7SUFFVCxjQUFjLENBQUMsS0FBb0I7UUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVELE9BQU87WUFDTCxJQUFJLFVBQVUsQ0FBQztnQkFDYixHQUFHLEVBQUUsWUFBWTtnQkFDakIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFlBQVksRUFBRSx3QkFBd0I7Z0JBQ3RDLFFBQVEsRUFBRSxJQUFJO3FCQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7cUJBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQzFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7cUJB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QUN2QixDQUFDLENBQUMsQ0FDTjt3QkFDRCxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU87cUJBQ3JCLENBQUM7aUJBQ0g7YUFDRixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxlQUFlLENBQUMsSUFBUztRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDL0IsQ0FBQzsrR0FuR1UsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJhc2UsIElucHV0RHJvcGRvd24sIElucHV0UGFuZWwgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XHJcbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdAdGEvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgVGFHcmlkRGF0YSB9IGZyb20gJy4uL21vZGVscy9ncmlkLWRhdGEnO1xyXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvdHlwZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhR3JpZEZvcm1TZXJ2aWNlPFQ+IHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRGaWx0ZXJzRm9ybShtb2RlbDogVGFHcmlkRGF0YTxUPik6IElucHV0QmFzZTxhbnk+W10ge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1vZGVsLmNvbHMpO1xyXG4gICAgaWYgKCFrZXlzIHx8IGtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBuZXcgSW5wdXRQYW5lbCh7XHJcbiAgICAgICAga2V5OiAnbWFpbi1wYW5lbCcsXHJcbiAgICAgICAgY2xhc3M6ICdwLXNwYWNlLXNtJyxcclxuICAgICAgICBjb250ZW50Q2xhc3M6ICdmbGV4LWNvbHVtbiBnLXNwYWNlLW1kJyxcclxuICAgICAgICBjaGlsZHJlbjoga2V5c1xyXG4gICAgICAgICAgLmZpbHRlcihrZXkgPT4gbW9kZWwuY29sc1trZXldLmRhdGEuY29sLnNob3dPblNlYXJjaClcclxuICAgICAgICAgIC5tYXAoa2V5ID0+IG1vZGVsLmNvbHNba2V5XS5nZXRJbnB1dEZvcm0oKSlcclxuICAgICAgICAgIC5maWx0ZXIoaXNOb25OdWxsYWJsZSlcclxuICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgIGlucHV0ID0+XHJcbiAgICAgICAgICAgICAgbmV3IElucHV0UGFuZWwoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBgcGFuZWwtJHtpbnB1dC5rZXl9YCxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnZy1jb2wtNicsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2lucHV0XSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKSxcclxuICAgICAgfSksXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEhpZ2hsaWdodGVkRmlsdGVyc0Zvcm0obW9kZWw6IFRhR3JpZERhdGE8VD4pOiBJbnB1dEJhc2U8YW55PltdIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhtb2RlbC5jb2xzKTtcclxuICAgIGlmICgha2V5cyB8fCBrZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBrZXlzXHJcbiAgICAgIC5maWx0ZXIoa2V5ID0+IG1vZGVsLmNvbHNba2V5XS5kYXRhLmNvbC5oaWdobGlnaHRlZClcclxuICAgICAgLm1hcChrZXkgPT4gbW9kZWwuY29sc1trZXldLmdldElucHV0Rm9ybSgpKVxyXG4gICAgICAuZmlsdGVyKGlzTm9uTnVsbGFibGUpXHJcbiAgICAgIC5tYXAoXHJcbiAgICAgICAgaW5wdXQgPT5cclxuICAgICAgICAgIG5ldyBJbnB1dFBhbmVsKHtcclxuICAgICAgICAgICAga2V5OiBgcGFuZWwtJHtpbnB1dC5rZXl9YCxcclxuICAgICAgICAgICAgY2xhc3M6ICdnLWNvbC02JyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtpbnB1dF0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBJbnB1dFBhbmVsKHtcclxuICAgICAgICBrZXk6ICdoaWdobGlnaHQtcGFuZWwnLFxyXG4gICAgICAgIGNvbnRlbnRDbGFzczogJ2ZsZXgtY29sdW1uIGctc3BhY2UtbWQnLFxyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICB9KSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9ybWF0RmlsdGVyc0Zvcm0obW9kZWw6IFRhR3JpZERhdGE8VD4sIGRhdGE6IGFueSk6IEZpbHRlcltdIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhtb2RlbC5jb2xzKS5yZWR1Y2U8RmlsdGVyW10+KChhY2MsIGtleSkgPT4ge1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBtb2RlbC5jb2xzW2tleV0uZm9ybWF0SW5wdXRGb3JtKGRhdGEpO1xyXG5cclxuICAgICAgaWYgKCFmaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbLi4uYWNjLCBmaWx0ZXJdO1xyXG4gICAgfSwgW10pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEdyb3VwRm9ybShtb2RlbDogVGFHcmlkRGF0YTxUPik6IElucHV0QmFzZTxhbnk+W10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgbmV3IElucHV0UGFuZWwoe1xyXG4gICAgICAgIGtleTogJ21haW4tcGFuZWwnLFxyXG4gICAgICAgIGNsYXNzOiAncC1zcGFjZS1zbScsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIG5ldyBJbnB1dERyb3Bkb3duKHtcclxuICAgICAgICAgICAga2V5OiAnZ3JvdXAnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ2dyaWQuY29yZS5ncm91cEJ5JyxcclxuICAgICAgICAgICAgb3B0aW9ucyQ6IG9mKFxyXG4gICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMobW9kZWwuY29scylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoY29sID0+IGNvbC5kYXRhLmNvbC5zaG93T25TZWFyY2ggJiYgIWNvbC5kYXRhLmNvbC5ub3REaXNwbGF5YWJsZSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZ3JvdXAgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IGdyb3VwLmtleSxcclxuICAgICAgICAgICAgICAgICAgbmFtZTogZ3JvdXAuaW5wdXRMYWJlbCxcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB2YWx1ZTogbW9kZWwuZ3JvdXBCeSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb3JtYXRHcm91cEZvcm0oZGF0YTogYW55KTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gZGF0YVsnZ3JvdXAnXSB8fCBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=
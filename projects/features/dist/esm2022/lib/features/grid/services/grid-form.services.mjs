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
                contentClass: 'grid g-space-md',
                children: keys
                    .filter(key => model.cols[key].data.col.showOnSearch)
                    .map(key => model.cols[key].getInputForm())
                    .filter(isNonNullable)
                    .map(input => new InputPanel({
                    key: 'panel',
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
            key: 'panel',
            class: 'g-col-6',
            children: [input],
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1mb3JtLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL3NlcnZpY2VzL2dyaWQtZm9ybS5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFhLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVExQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLGdCQUFlLENBQUM7SUFFVCxjQUFjLENBQUMsS0FBb0I7UUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVELE9BQU87WUFDTCxJQUFJLFVBQVUsQ0FBQztnQkFDYixHQUFHLEVBQUUsWUFBWTtnQkFDakIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFlBQVksRUFBRSxpQkFBaUI7Z0JBQy9CLFFBQVEsRUFBRSxJQUFJO3FCQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7cUJBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQzFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7cUJB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QUFDLE9BQU87cUJBQ3JCLENBQUM7aUJBQ0g7YUFDRixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxlQUFlLENBQUMsSUFBUztRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDL0IsQ0FBQzsrR0FuR1UsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJhc2UsIElucHV0RHJvcGRvd24sIElucHV0UGFuZWwgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XHJcbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdAdGEvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgVGFHcmlkRGF0YSB9IGZyb20gJy4uL21vZGVscy9ncmlkLWRhdGEnO1xyXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvdHlwZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhR3JpZEZvcm1TZXJ2aWNlPFQ+IHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRGaWx0ZXJzRm9ybShtb2RlbDogVGFHcmlkRGF0YTxUPik6IElucHV0QmFzZTxhbnk+W10ge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1vZGVsLmNvbHMpO1xyXG4gICAgaWYgKCFrZXlzIHx8IGtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBuZXcgSW5wdXRQYW5lbCh7XHJcbiAgICAgICAga2V5OiAnbWFpbi1wYW5lbCcsXHJcbiAgICAgICAgY2xhc3M6ICdwLXNwYWNlLXNtJyxcclxuICAgICAgICBjb250ZW50Q2xhc3M6ICdncmlkIGctc3BhY2UtbWQnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBrZXlzXHJcbiAgICAgICAgICAuZmlsdGVyKGtleSA9PiBtb2RlbC5jb2xzW2tleV0uZGF0YS5jb2wuc2hvd09uU2VhcmNoKVxyXG4gICAgICAgICAgLm1hcChrZXkgPT4gbW9kZWwuY29sc1trZXldLmdldElucHV0Rm9ybSgpKVxyXG4gICAgICAgICAgLmZpbHRlcihpc05vbk51bGxhYmxlKVxyXG4gICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgaW5wdXQgPT5cclxuICAgICAgICAgICAgICBuZXcgSW5wdXRQYW5lbCh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdwYW5lbCcsXHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ2ctY29sLTYnLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtpbnB1dF0sXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICksXHJcbiAgICAgIH0pLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRIaWdobGlnaHRlZEZpbHRlcnNGb3JtKG1vZGVsOiBUYUdyaWREYXRhPFQ+KTogSW5wdXRCYXNlPGFueT5bXSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobW9kZWwuY29scyk7XHJcbiAgICBpZiAoIWtleXMgfHwga2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoaWxkcmVuID0ga2V5c1xyXG4gICAgICAuZmlsdGVyKGtleSA9PiBtb2RlbC5jb2xzW2tleV0uZGF0YS5jb2wuaGlnaGxpZ2h0ZWQpXHJcbiAgICAgIC5tYXAoa2V5ID0+IG1vZGVsLmNvbHNba2V5XS5nZXRJbnB1dEZvcm0oKSlcclxuICAgICAgLmZpbHRlcihpc05vbk51bGxhYmxlKVxyXG4gICAgICAubWFwKFxyXG4gICAgICAgIGlucHV0ID0+XHJcbiAgICAgICAgICBuZXcgSW5wdXRQYW5lbCh7XHJcbiAgICAgICAgICAgIGtleTogJ3BhbmVsJyxcclxuICAgICAgICAgICAgY2xhc3M6ICdnLWNvbC02JyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtpbnB1dF0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBJbnB1dFBhbmVsKHtcclxuICAgICAgICBrZXk6ICdoaWdobGlnaHQtcGFuZWwnLFxyXG4gICAgICAgIGNvbnRlbnRDbGFzczogJ2dyaWQgZy1zcGFjZS1tZCcsXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb3JtYXRGaWx0ZXJzRm9ybShtb2RlbDogVGFHcmlkRGF0YTxUPiwgZGF0YTogYW55KTogRmlsdGVyW10ge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1vZGVsLmNvbHMpLnJlZHVjZTxGaWx0ZXJbXT4oKGFjYywga2V5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IG1vZGVsLmNvbHNba2V5XS5mb3JtYXRJbnB1dEZvcm0oZGF0YSk7XHJcblxyXG4gICAgICBpZiAoIWZpbHRlcikge1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFsuLi5hY2MsIGZpbHRlcl07XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0R3JvdXBGb3JtKG1vZGVsOiBUYUdyaWREYXRhPFQ+KTogSW5wdXRCYXNlPGFueT5bXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBuZXcgSW5wdXRQYW5lbCh7XHJcbiAgICAgICAga2V5OiAnbWFpbi1wYW5lbCcsXHJcbiAgICAgICAgY2xhc3M6ICdwLXNwYWNlLXNtJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgbmV3IElucHV0RHJvcGRvd24oe1xyXG4gICAgICAgICAgICBrZXk6ICdncm91cCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnZ3JpZC5jb3JlLmdyb3VwQnknLFxyXG4gICAgICAgICAgICBvcHRpb25zJDogb2YoXHJcbiAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhtb2RlbC5jb2xzKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihjb2wgPT4gY29sLmRhdGEuY29sLnNob3dPblNlYXJjaCAmJiAhY29sLmRhdGEuY29sLm5vdERpc3BsYXlhYmxlKVxyXG4gICAgICAgICAgICAgICAgLm1hcChncm91cCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICBpZDogZ3JvdXAua2V5LFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBncm91cC5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHZhbHVlOiBtb2RlbC5ncm91cEJ5LFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgXSxcclxuICAgICAgfSksXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvcm1hdEdyb3VwRm9ybShkYXRhOiBhbnkpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiBkYXRhWydncm91cCddIHx8IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==
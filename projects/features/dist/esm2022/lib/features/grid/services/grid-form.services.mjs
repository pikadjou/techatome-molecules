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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1mb3JtLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL3NlcnZpY2VzL2dyaWQtZm9ybS5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFhLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVExQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLGdCQUFlLENBQUM7SUFFVCxjQUFjLENBQUMsS0FBb0I7UUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVELE9BQU87WUFDTCxJQUFJLFVBQVUsQ0FBQztnQkFDYixHQUFHLEVBQUUsWUFBWTtnQkFDakIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFlBQVksRUFBRSxpQkFBaUI7Z0JBQy9CLFFBQVEsRUFBRSxJQUFJO3FCQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7cUJBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQzFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7cUJBQ3JCLEdBQUcsQ0FDRixLQUFLLENBQUMsRUFBRSxDQUNOLElBQUksVUFBVSxDQUFDO29CQUNiLEdBQUcsRUFBRSxPQUFPO29CQUNaLEtBQUssRUFBRSxTQUFTO29CQUNoQixRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUJBQ2xCLENBQUMsQ0FDTDthQUNKLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVNLGlCQUFpQixDQUFDLEtBQW9CLEVBQUUsSUFBUztRQUN0RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMzRCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ1osT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTSxZQUFZLENBQUMsS0FBb0I7UUFDdEMsT0FBTztZQUNMLElBQUksVUFBVSxDQUFDO2dCQUNiLEdBQUcsRUFBRSxZQUFZO2dCQUNqQixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsUUFBUSxFQUFFO29CQUNSLElBQUksYUFBYSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsT0FBTzt3QkFDWixLQUFLLEVBQUUsbUJBQW1CO3dCQUMxQixRQUFRLEVBQUUsRUFBRSxDQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs2QkFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDOzZCQUN4RSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUNiLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRzs0QkFDYixJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVU7eUJBQ3ZCLENBQUMsQ0FBQyxDQUNOO3dCQUNELEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztxQkFDckIsQ0FBQztpQkFDSDthQUNGLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUFTO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQztJQUMvQixDQUFDOytHQW5FVSxpQkFBaUI7bUhBQWpCLGlCQUFpQixjQUZoQixNQUFNOzs0RkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IElucHV0QmFzZSwgSW5wdXREcm9wZG93biwgSW5wdXRQYW5lbCB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcclxuaW1wb3J0IHsgaXNOb25OdWxsYWJsZSB9IGZyb20gJ0B0YS91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBUYUdyaWREYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2dyaWQtZGF0YSc7XHJcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL21vZGVscy90eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFHcmlkRm9ybVNlcnZpY2U8VD4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIGdldEZpbHRlcnNGb3JtKG1vZGVsOiBUYUdyaWREYXRhPFQ+KTogSW5wdXRCYXNlPGFueT5bXSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobW9kZWwuY29scyk7XHJcbiAgICBpZiAoIWtleXMgfHwga2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBJbnB1dFBhbmVsKHtcclxuICAgICAgICBrZXk6ICdtYWluLXBhbmVsJyxcclxuICAgICAgICBjbGFzczogJ3Atc3BhY2Utc20nLFxyXG4gICAgICAgIGNvbnRlbnRDbGFzczogJ2dyaWQgZy1zcGFjZS1tZCcsXHJcbiAgICAgICAgY2hpbGRyZW46IGtleXNcclxuICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IG1vZGVsLmNvbHNba2V5XS5kYXRhLmNvbC5zaG93T25TZWFyY2gpXHJcbiAgICAgICAgICAubWFwKGtleSA9PiBtb2RlbC5jb2xzW2tleV0uZ2V0SW5wdXRGb3JtKCkpXHJcbiAgICAgICAgICAuZmlsdGVyKGlzTm9uTnVsbGFibGUpXHJcbiAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICBpbnB1dCA9PlxyXG4gICAgICAgICAgICAgIG5ldyBJbnB1dFBhbmVsKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3BhbmVsJyxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnZy1jb2wtNicsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2lucHV0XSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKSxcclxuICAgICAgfSksXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvcm1hdEZpbHRlcnNGb3JtKG1vZGVsOiBUYUdyaWREYXRhPFQ+LCBkYXRhOiBhbnkpOiBGaWx0ZXJbXSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobW9kZWwuY29scykucmVkdWNlPEZpbHRlcltdPigoYWNjLCBrZXkpID0+IHtcclxuICAgICAgY29uc3QgZmlsdGVyID0gbW9kZWwuY29sc1trZXldLmZvcm1hdElucHV0Rm9ybShkYXRhKTtcclxuXHJcbiAgICAgIGlmICghZmlsdGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gWy4uLmFjYywgZmlsdGVyXTtcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRHcm91cEZvcm0obW9kZWw6IFRhR3JpZERhdGE8VD4pOiBJbnB1dEJhc2U8YW55PltdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBJbnB1dFBhbmVsKHtcclxuICAgICAgICBrZXk6ICdtYWluLXBhbmVsJyxcclxuICAgICAgICBjbGFzczogJ3Atc3BhY2Utc20nLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBuZXcgSW5wdXREcm9wZG93bih7XHJcbiAgICAgICAgICAgIGtleTogJ2dyb3VwJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdncmlkLmNvcmUuZ3JvdXBCeScsXHJcbiAgICAgICAgICAgIG9wdGlvbnMkOiBvZihcclxuICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKG1vZGVsLmNvbHMpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNvbCA9PiBjb2wuZGF0YS5jb2wuc2hvd09uU2VhcmNoICYmICFjb2wuZGF0YS5jb2wubm90RGlzcGxheWFibGUpXHJcbiAgICAgICAgICAgICAgICAubWFwKGdyb3VwID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBncm91cC5rZXksXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGdyb3VwLmlucHV0TGFiZWwsXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdmFsdWU6IG1vZGVsLmdyb3VwQnksXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9ybWF0R3JvdXBGb3JtKGRhdGE6IGFueSk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGRhdGFbJ2dyb3VwJ10gfHwgbnVsbDtcclxuICB9XHJcbn1cclxuIl19
import { Injectable, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputChoices, InputPanel, InputTextBox } from '@ta/form-model';
import { isNonNullable } from '@ta/utils';
import { filter, map } from 'rxjs';
import { CamFunctionsService } from '../../functions.service';
import * as i0 from "@angular/core";
export var EFunctionFormFields;
(function (EFunctionFormFields) {
    EFunctionFormFields["name"] = "name";
    EFunctionFormFields["roles"] = "roles";
})(EFunctionFormFields || (EFunctionFormFields = {}));
export class CamFunctionsFormService {
    constructor() {
        this._functionsService = inject(CamFunctionsService);
    }
    getFunctionForm(func) {
        return [
            new InputPanel({
                key: 'panel',
                label: 'user.functions.form.title',
                contentClass: 'highlight-title g-space-md',
                children: [
                    new InputTextBox({
                        key: EFunctionFormFields.name,
                        value: func?.name,
                        label: 'user.functions.form.name',
                        validators: [Validators.required],
                    }),
                    new InputChoices({
                        key: EFunctionFormFields.roles,
                        label: 'user.functions.form.roles',
                        class: 'pt-xxl',
                        withSearch: true,
                        options: this._functionsService.fetchRoles$().pipe(filter(isNonNullable), map(roles => roles.map(role => ({
                            id: role.id,
                            name: role.name,
                            data: role,
                        })))),
                        value: func?.roles?.map(x => x.id),
                        multiple: true,
                    }),
                ],
            }),
        ];
    }
    formatCreationFunctionForm(data) {
        return {
            name: data[EFunctionFormFields.name],
            roleIds: data[EFunctionFormFields.roles],
        };
    }
    formatUpdateFunctionForm(id, data) {
        return {
            id: id,
            name: data[EFunctionFormFields.name],
            roleIds: data[EFunctionFormFields.roles],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFunctionsFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFunctionsFormService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFunctionsFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9zZXJ2aWNlcy91c2Vycy9mb3JtL2Z1bmN0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRW5DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUc5RCxNQUFNLENBQU4sSUFBWSxtQkFHWDtBQUhELFdBQVksbUJBQW1CO0lBQzdCLG9DQUFhLENBQUE7SUFDYixzQ0FBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBRzlCO0FBS0QsTUFBTSxPQUFPLHVCQUF1QjtJQUhwQztRQUlVLHNCQUFpQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBbUR6RDtJQWpEUSxlQUFlLENBQUMsSUFBcUI7UUFDMUMsT0FBTztZQUNMLElBQUksVUFBVSxDQUFDO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSwyQkFBMkI7Z0JBQ2xDLFlBQVksRUFBRSw0QkFBNEI7Z0JBQzFDLFFBQVEsRUFBRTtvQkFDUixJQUFJLFlBQVksQ0FBQzt3QkFDZixHQUFHLEVBQUUsbUJBQW1CLENBQUMsSUFBSTt3QkFDN0IsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJO3dCQUNqQixLQUFLLEVBQUUsMEJBQTBCO3dCQUNqQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO3FCQUNsQyxDQUFDO29CQUNGLElBQUksWUFBWSxDQUFDO3dCQUNmLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQyxLQUFLO3dCQUM5QixLQUFLLEVBQUUsMkJBQTJCO3dCQUNsQyxLQUFLLEVBQUUsUUFBUTt3QkFDZixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ2hELE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFDckIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ1YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTs0QkFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NEJBQ2YsSUFBSSxFQUFFLElBQUk7eUJBQ1gsQ0FBQyxDQUFDLENBQ0osQ0FDRjt3QkFDRCxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNsQyxRQUFRLEVBQUUsSUFBSTtxQkFDZixDQUFDO2lCQUNIO2FBQ0YsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBQ00sMEJBQTBCLENBQUMsSUFBUztRQUN6QyxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7WUFDcEMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7U0FDekMsQ0FBQztJQUNKLENBQUM7SUFFTSx3QkFBd0IsQ0FBQyxFQUFVLEVBQUUsSUFBUztRQUNuRCxPQUFPO1lBQ0wsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztZQUNwQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztTQUN6QyxDQUFDO0lBQ0osQ0FBQzsrR0FuRFUsdUJBQXVCO21IQUF2Qix1QkFBdUIsY0FGdEIsTUFBTTs7NEZBRVAsdUJBQXVCO2tCQUhuQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSW5wdXRDaG9pY2VzLCBJbnB1dFBhbmVsLCBJbnB1dFRleHRCb3ggfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSAnQHRhL3V0aWxzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENhbUZ1bmN0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBGdW5jdGlvbiwgRnVuY3Rpb25DcmVhdGlvblBheWxvYWQsIEZ1bmN0aW9uTW9kaWZpZXJQYXlsb2FkIH0gZnJvbSAnLi4vZHRvL2Z1bmN0aW9uJztcblxuZXhwb3J0IGVudW0gRUZ1bmN0aW9uRm9ybUZpZWxkcyB7XG4gIG5hbWUgPSAnbmFtZScsXG4gIHJvbGVzID0gJ3JvbGVzJyxcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhbUZ1bmN0aW9uc0Zvcm1TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZnVuY3Rpb25zU2VydmljZSA9IGluamVjdChDYW1GdW5jdGlvbnNTZXJ2aWNlKTtcblxuICBwdWJsaWMgZ2V0RnVuY3Rpb25Gb3JtKGZ1bmM6IEZ1bmN0aW9uIHwgbnVsbCkge1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgSW5wdXRQYW5lbCh7XG4gICAgICAgIGtleTogJ3BhbmVsJyxcbiAgICAgICAgbGFiZWw6ICd1c2VyLmZ1bmN0aW9ucy5mb3JtLnRpdGxlJyxcbiAgICAgICAgY29udGVudENsYXNzOiAnaGlnaGxpZ2h0LXRpdGxlIGctc3BhY2UtbWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5ldyBJbnB1dFRleHRCb3goe1xuICAgICAgICAgICAga2V5OiBFRnVuY3Rpb25Gb3JtRmllbGRzLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogZnVuYz8ubmFtZSxcbiAgICAgICAgICAgIGxhYmVsOiAndXNlci5mdW5jdGlvbnMuZm9ybS5uYW1lJyxcbiAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgSW5wdXRDaG9pY2VzKHtcbiAgICAgICAgICAgIGtleTogRUZ1bmN0aW9uRm9ybUZpZWxkcy5yb2xlcyxcbiAgICAgICAgICAgIGxhYmVsOiAndXNlci5mdW5jdGlvbnMuZm9ybS5yb2xlcycsXG4gICAgICAgICAgICBjbGFzczogJ3B0LXh4bCcsXG4gICAgICAgICAgICB3aXRoU2VhcmNoOiB0cnVlLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5fZnVuY3Rpb25zU2VydmljZS5mZXRjaFJvbGVzJCgpLnBpcGUoXG4gICAgICAgICAgICAgIGZpbHRlcihpc05vbk51bGxhYmxlKSxcbiAgICAgICAgICAgICAgbWFwKHJvbGVzID0+XG4gICAgICAgICAgICAgICAgcm9sZXMubWFwKHJvbGUgPT4gKHtcbiAgICAgICAgICAgICAgICAgIGlkOiByb2xlLmlkLFxuICAgICAgICAgICAgICAgICAgbmFtZTogcm9sZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogcm9sZSxcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jPy5yb2xlcz8ubWFwKHggPT4geC5pZCksXG4gICAgICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF07XG4gIH1cbiAgcHVibGljIGZvcm1hdENyZWF0aW9uRnVuY3Rpb25Gb3JtKGRhdGE6IGFueSk6IEZ1bmN0aW9uQ3JlYXRpb25QYXlsb2FkIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogZGF0YVtFRnVuY3Rpb25Gb3JtRmllbGRzLm5hbWVdLFxuICAgICAgcm9sZUlkczogZGF0YVtFRnVuY3Rpb25Gb3JtRmllbGRzLnJvbGVzXSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGZvcm1hdFVwZGF0ZUZ1bmN0aW9uRm9ybShpZDogc3RyaW5nLCBkYXRhOiBhbnkpOiBQYXJ0aWFsPEZ1bmN0aW9uTW9kaWZpZXJQYXlsb2FkPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIG5hbWU6IGRhdGFbRUZ1bmN0aW9uRm9ybUZpZWxkcy5uYW1lXSxcbiAgICAgIHJvbGVJZHM6IGRhdGFbRUZ1bmN0aW9uRm9ybUZpZWxkcy5yb2xlc10sXG4gICAgfTtcbiAgfVxufVxuIl19
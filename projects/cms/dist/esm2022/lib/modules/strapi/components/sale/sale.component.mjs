import { AsyncPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Inject, Optional, Output } from '@angular/core';
import { of } from 'rxjs';
import { ToggleComponent } from '@ta/form-input';
import { InputCheckBox } from '@ta/form-model';
import { TENANT_CONFIG_TOKEN } from '@ta/server';
import { EmptyComponent, ErrorComponent, LoaderComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { RichTextComponent } from '../types/rich-text/rich-text.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/sale.service";
export class SaleComponent extends TaBaseComponent {
    get content$() {
        if (!this.tenantConfig.tenantId) {
            return of();
        }
        return this.saleService.saleContents.get$(this.tenantConfig.tenantId?.toString());
    }
    constructor(saleService, tenantConfig) {
        super();
        this.saleService = saleService;
        this.tenantConfig = tenantConfig;
        this.acceptation = new EventEmitter();
        this.checkbox = new InputCheckBox({
            label: 'strapi.sale.cguAcceptation',
            toggle: true,
        });
        this.checkbox.createFormControl();
        this._registerSubscription(this.checkbox.changeValue$.subscribe({
            next: value => this.acceptation.emit(value),
        }));
    }
    ngOnInit() {
        const tenantId = this.tenantConfig.tenantId ?? 0;
        this.requestState.asked();
        this.saleService.fetchSaleContents$(tenantId.toString()).subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaleComponent, deps: [{ token: i1.TaSaleService }, { token: TENANT_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: SaleComponent, isStandalone: true, selector: "ta-sale", outputs: { acceptation: "acceptation" }, usesInheritance: true, ngImport: i0, template: "@if (this.content$ | async; as content) {\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!content\">\n        @if (content) {\n          <ta-rich-text [richText]=\"content.Content\"></ta-rich-text>\n\n          <div class=\"checkbox ta-r\">\n            <ta-input-toggle [input]=\"this.checkbox\"></ta-input-toggle>\n          </div>\n        }\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n}\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: RichTextComponent, selector: "ta-rich-text", inputs: ["richText"] }, { kind: "component", type: ToggleComponent, selector: "ta-input-toggle" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-sale', standalone: true, imports: [NgIf, AsyncPipe, LoaderComponent, ErrorComponent, EmptyComponent, RichTextComponent, ToggleComponent], template: "@if (this.content$ | async; as content) {\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!content\">\n        @if (content) {\n          <ta-rich-text [richText]=\"content.Content\"></ta-rich-text>\n\n          <div class=\"checkbox ta-r\">\n            <ta-input-toggle [input]=\"this.checkbox\"></ta-input-toggle>\n          </div>\n        }\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n}\n" }]
        }], ctorParameters: () => [{ type: i1.TaSaleService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TENANT_CONFIG_TOKEN]
                }] }], propDecorators: { acceptation: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvc3RyYXBpL2NvbXBvbmVudHMvc2FsZS9zYWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvY29tcG9uZW50cy9zYWxlL3NhbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFnQixNQUFNLFlBQVksQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUc1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBUzNFLE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBZTtJQVFoRCxJQUFJLFFBQVE7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNELFlBQ1MsV0FBMEIsRUFDZ0IsWUFBMEI7UUFFM0UsS0FBSyxFQUFFLENBQUM7UUFIRCxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUNnQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWQ3RSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFbkMsYUFBUSxHQUFHLElBQUksYUFBYSxDQUFDO1lBQ2xDLEtBQUssRUFBRSw0QkFBNEI7WUFDbkMsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7UUFhRCxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDbkMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzVDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNqRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7WUFDN0MsS0FBSyxFQUFFLENBQUMsS0FBd0IsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0F0Q1UsYUFBYSwrQ0FnQkYsbUJBQW1CO21HQWhCOUIsYUFBYSxtSUN0QjFCLDhpQkFlQSxxRERLa0IsU0FBUyw4Q0FBRSxlQUFlLHlGQUFFLGNBQWMsa0ZBQUUsY0FBYyx3SUFBRSxpQkFBaUIsK0VBQUUsZUFBZTs7NEZBRW5HLGFBQWE7a0JBUHpCLFNBQVM7K0JBQ0UsU0FBUyxjQUdQLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDOzswQkFrQjVHLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsbUJBQW1CO3lDQWR6QyxXQUFXO3NCQURWLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUsIE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkluaXQsIE9wdGlvbmFsLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVG9nZ2xlQ29tcG9uZW50IH0gZnJvbSAnQHRhL2Zvcm0taW5wdXQnO1xuaW1wb3J0IHsgSW5wdXRDaGVja0JveCB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IFRFTkFOVF9DT05GSUdfVE9LRU4sIFRlbmFudENvbmZpZyB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgRW1wdHlDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFTYWxlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NhbGUuc2VydmljZSc7XG5pbXBvcnQgeyBSaWNoVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL3R5cGVzL3JpY2gtdGV4dC9yaWNoLXRleHQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtc2FsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2FsZS5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgQXN5bmNQaXBlLCBMb2FkZXJDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LCBFbXB0eUNvbXBvbmVudCwgUmljaFRleHRDb21wb25lbnQsIFRvZ2dsZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNhbGVDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KClcbiAgYWNjZXB0YXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHVibGljIGNoZWNrYm94ID0gbmV3IElucHV0Q2hlY2tCb3goe1xuICAgIGxhYmVsOiAnc3RyYXBpLnNhbGUuY2d1QWNjZXB0YXRpb24nLFxuICAgIHRvZ2dsZTogdHJ1ZSxcbiAgfSk7XG4gIGdldCBjb250ZW50JCgpIHtcbiAgICBpZiAoIXRoaXMudGVuYW50Q29uZmlnLnRlbmFudElkKSB7XG4gICAgICByZXR1cm4gb2YoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2FsZVNlcnZpY2Uuc2FsZUNvbnRlbnRzLmdldCQodGhpcy50ZW5hbnRDb25maWcudGVuYW50SWQ/LnRvU3RyaW5nKCkpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzYWxlU2VydmljZTogVGFTYWxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFRFTkFOVF9DT05GSUdfVE9LRU4pIHByaXZhdGUgdGVuYW50Q29uZmlnOiBUZW5hbnRDb25maWdcbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2hlY2tib3guY3JlYXRlRm9ybUNvbnRyb2woKTtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuY2hlY2tib3guY2hhbmdlVmFsdWUkLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IHZhbHVlID0+IHRoaXMuYWNjZXB0YXRpb24uZW1pdCh2YWx1ZSksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB0ZW5hbnRJZCA9IHRoaXMudGVuYW50Q29uZmlnLnRlbmFudElkID8/IDA7XG5cbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuICAgIHRoaXMuc2FsZVNlcnZpY2UuZmV0Y2hTYWxlQ29udGVudHMkKHRlbmFudElkLnRvU3RyaW5nKCkpLnN1YnNjcmliZSh7XG4gICAgICBjb21wbGV0ZTogKCkgPT4gdGhpcy5yZXF1ZXN0U3RhdGUuY29tcGxldGVkKCksXG4gICAgICBlcnJvcjogKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnJlcXVlc3RTdGF0ZS5vbkVycm9yKGVycm9yLnN0YXR1cywgZXJyb3Iuc3RhdHVzVGV4dCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuY29udGVudCQgfCBhc3luYzsgYXMgY29udGVudCkge1xuICA8dGEtbG9hZGVyIFtpc0xvYWRpbmddPVwidGhpcy5yZXF1ZXN0U3RhdGUuaXNMb2FkaW5nKClcIj5cbiAgICA8dGEtZXJyb3IgW21lc3NhZ2VdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JNZXNzYWdlKClcIiBbY29kZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvclN0YXR1cygpXCI+XG4gICAgICA8dGEtZW1wdHkgW2lzRW1wdHldPVwiIWNvbnRlbnRcIj5cbiAgICAgICAgQGlmIChjb250ZW50KSB7XG4gICAgICAgICAgPHRhLXJpY2gtdGV4dCBbcmljaFRleHRdPVwiY29udGVudC5Db250ZW50XCI+PC90YS1yaWNoLXRleHQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3ggdGEtclwiPlxuICAgICAgICAgICAgPHRhLWlucHV0LXRvZ2dsZSBbaW5wdXRdPVwidGhpcy5jaGVja2JveFwiPjwvdGEtaW5wdXQtdG9nZ2xlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L3RhLWVtcHR5PlxuICAgIDwvdGEtZXJyb3I+XG4gIDwvdGEtbG9hZGVyPlxufVxuIl19
import { NgIf, AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Inject, Optional, Output } from '@angular/core';
import { ToggleComponent } from '@ta/form-input';
import { InputCheckBox } from '@ta/form-model';
import { TENANT_CONFIG_TOKEN } from '@ta/server';
import { LoaderComponent, ErrorComponent, EmptyComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { of } from 'rxjs';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaleComponent, deps: [{ token: i1.CamSaleService }, { token: TENANT_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: SaleComponent, isStandalone: true, selector: "ta-sale", outputs: { acceptation: "acceptation" }, usesInheritance: true, ngImport: i0, template: "@if (this.content$ | async; as content) {\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!content\">\n        @if (content) {\n          <ta-rich-text [richText]=\"content.Content\"></ta-rich-text>\n\n          <div class=\"checkbox ta-r\">\n            <ta-input-toggle [input]=\"this.checkbox\"></ta-input-toggle>\n          </div>\n        }\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n}\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: RichTextComponent, selector: "ta-rich-text", inputs: ["richText"] }, { kind: "component", type: ToggleComponent, selector: "ta-input-toggle" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-sale', standalone: true, imports: [NgIf, AsyncPipe, LoaderComponent, ErrorComponent, EmptyComponent, RichTextComponent, ToggleComponent], template: "@if (this.content$ | async; as content) {\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!content\">\n        @if (content) {\n          <ta-rich-text [richText]=\"content.Content\"></ta-rich-text>\n\n          <div class=\"checkbox ta-r\">\n            <ta-input-toggle [input]=\"this.checkbox\"></ta-input-toggle>\n          </div>\n        }\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n}\n" }]
        }], ctorParameters: () => [{ type: i1.CamSaleService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TENANT_CONFIG_TOKEN]
                }] }], propDecorators: { acceptation: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvc3RyYXBpL2NvbXBvbmVudHMvc2FsZS9zYWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvY29tcG9uZW50cy9zYWxlL3NhbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBZ0IsTUFBTSxZQUFZLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcxQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBUzNFLE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBZTtJQVFoRCxJQUFJLFFBQVE7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNELFlBQ1MsV0FBMkIsRUFDZSxZQUEwQjtRQUUzRSxLQUFLLEVBQUUsQ0FBQztRQUhELGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUNlLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBZDdFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVuQyxhQUFRLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDbEMsS0FBSyxFQUFFLDRCQUE0QjtZQUNuQyxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztRQWFELElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUNuQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDNUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ2pFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxLQUFLLEVBQUUsQ0FBQyxLQUF3QixFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVELENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOytHQXRDVSxhQUFhLGdEQWdCRixtQkFBbUI7bUdBaEI5QixhQUFhLG1JQ3JCMUIsOGlCQWVBLHFERElrQixTQUFTLDhDQUFFLGVBQWUseUZBQUUsY0FBYyxrRkFBRSxjQUFjLHdJQUFFLGlCQUFpQiwrRUFBRSxlQUFlOzs0RkFFbkcsYUFBYTtrQkFQekIsU0FBUzsrQkFDQSxTQUFTLGNBR0wsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7OzBCQWtCNUcsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxtQkFBbUI7eUNBZHpDLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYsIEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb2dnbGVDb21wb25lbnQgfSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XG5pbXBvcnQgeyBJbnB1dENoZWNrQm94IH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgVEVOQU5UX0NPTkZJR19UT0tFTiwgVGVuYW50Q29uZmlnIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LCBFbXB0eUNvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tICdAdGEvdXRpbHMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2FtU2FsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zYWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmljaFRleHRDb21wb25lbnQgfSBmcm9tICcuLi90eXBlcy9yaWNoLXRleHQvcmljaC10ZXh0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6ICd0YS1zYWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zYWxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBBc3luY1BpcGUsIExvYWRlckNvbXBvbmVudCwgRXJyb3JDb21wb25lbnQsIEVtcHR5Q29tcG9uZW50LCBSaWNoVGV4dENvbXBvbmVudCwgVG9nZ2xlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2FsZUNvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKVxuICBhY2NlcHRhdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwdWJsaWMgY2hlY2tib3ggPSBuZXcgSW5wdXRDaGVja0JveCh7XG4gICAgbGFiZWw6ICdzdHJhcGkuc2FsZS5jZ3VBY2NlcHRhdGlvbicsXG4gICAgdG9nZ2xlOiB0cnVlLFxuICB9KTtcbiAgZ2V0IGNvbnRlbnQkKCkge1xuICAgIGlmICghdGhpcy50ZW5hbnRDb25maWcudGVuYW50SWQpIHtcbiAgICAgIHJldHVybiBvZigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zYWxlU2VydmljZS5zYWxlQ29udGVudHMuZ2V0JCh0aGlzLnRlbmFudENvbmZpZy50ZW5hbnRJZD8udG9TdHJpbmcoKSk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNhbGVTZXJ2aWNlOiBDYW1TYWxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFRFTkFOVF9DT05GSUdfVE9LRU4pIHByaXZhdGUgdGVuYW50Q29uZmlnOiBUZW5hbnRDb25maWdcbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2hlY2tib3guY3JlYXRlRm9ybUNvbnRyb2woKTtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuY2hlY2tib3guY2hhbmdlVmFsdWUkLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IHZhbHVlID0+IHRoaXMuYWNjZXB0YXRpb24uZW1pdCh2YWx1ZSksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB0ZW5hbnRJZCA9IHRoaXMudGVuYW50Q29uZmlnLnRlbmFudElkID8/IDA7XG5cbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuICAgIHRoaXMuc2FsZVNlcnZpY2UuZmV0Y2hTYWxlQ29udGVudHMkKHRlbmFudElkLnRvU3RyaW5nKCkpLnN1YnNjcmliZSh7XG4gICAgICBjb21wbGV0ZTogKCkgPT4gdGhpcy5yZXF1ZXN0U3RhdGUuY29tcGxldGVkKCksXG4gICAgICBlcnJvcjogKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnJlcXVlc3RTdGF0ZS5vbkVycm9yKGVycm9yLnN0YXR1cywgZXJyb3Iuc3RhdHVzVGV4dCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuY29udGVudCQgfCBhc3luYzsgYXMgY29udGVudCkge1xuICA8dGEtbG9hZGVyIFtpc0xvYWRpbmddPVwidGhpcy5yZXF1ZXN0U3RhdGUuaXNMb2FkaW5nKClcIj5cbiAgICA8dGEtZXJyb3IgW21lc3NhZ2VdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JNZXNzYWdlKClcIiBbY29kZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvclN0YXR1cygpXCI+XG4gICAgICA8dGEtZW1wdHkgW2lzRW1wdHldPVwiIWNvbnRlbnRcIj5cbiAgICAgICAgQGlmIChjb250ZW50KSB7XG4gICAgICAgICAgPHRhLXJpY2gtdGV4dCBbcmljaFRleHRdPVwiY29udGVudC5Db250ZW50XCI+PC90YS1yaWNoLXRleHQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3ggdGEtclwiPlxuICAgICAgICAgICAgPHRhLWlucHV0LXRvZ2dsZSBbaW5wdXRdPVwidGhpcy5jaGVja2JveFwiPjwvdGEtaW5wdXQtdG9nZ2xlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L3RhLWVtcHR5PlxuICAgIDwvdGEtZXJyb3I+XG4gIDwvdGEtbG9hZGVyPlxufVxuIl19
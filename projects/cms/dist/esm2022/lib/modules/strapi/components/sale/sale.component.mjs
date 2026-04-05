import { AsyncPipe } from "@angular/common";
import { Component, Inject, Optional, output, } from "@angular/core";
import { filter, of } from "rxjs";
import { ToggleComponent } from "@ta/form-input";
import { InputCheckBox } from "@ta/form-model";
import { TENANT_CONFIG_TOKEN } from "@ta/server";
import { EmptyComponent, ErrorComponent, LoaderComponent } from "@ta/ui";
import { TaBaseComponent, isNonNullable } from "@ta/utils";
import { RichTextComponent } from "../types/rich-text/rich-text.component";
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
        this.acceptation = output();
        this.checkbox = new InputCheckBox({
            label: "strapi.sale.cguAcceptation",
            toggle: true,
        });
        this.checkbox.createFormControl();
        this._registerSubscription(this.checkbox.changeValue$.pipe(filter(isNonNullable)).subscribe({
            next: (value) => this.acceptation.emit(value),
        }));
    }
    ngOnInit() {
        const tenantId = this.tenantConfig.tenantId ?? 0;
        this.requestState.asked();
        this._registerSubscription(this.saleService.fetchSaleContents$(tenantId.toString()).subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SaleComponent, deps: [{ token: i1.TaSaleService }, { token: TENANT_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SaleComponent, isStandalone: true, selector: "ta-sale", outputs: { acceptation: "acceptation" }, usesInheritance: true, ngImport: i0, template: "@if (this.content$ | async; as content) {\n<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty [isEmpty]=\"!content\">\n      @if (content) {\n      <ta-rich-text [richText]=\"content.Content\"></ta-rich-text>\n\n      <div class=\"checkbox ta-r\">\n        <ta-input-toggle [input]=\"this.checkbox\"></ta-input-toggle>\n      </div>\n      }\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n}\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code", "showRetry", "retryLabel"], outputs: ["retry"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "subtitle", "emptyIcon", "iconSize"] }, { kind: "component", type: RichTextComponent, selector: "ta-rich-text", inputs: ["richText"] }, { kind: "component", type: ToggleComponent, selector: "ta-input-toggle" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SaleComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-sale", standalone: true, imports: [
                        AsyncPipe,
                        LoaderComponent,
                        ErrorComponent,
                        EmptyComponent,
                        RichTextComponent,
                        ToggleComponent,
                    ], template: "@if (this.content$ | async; as content) {\n<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty [isEmpty]=\"!content\">\n      @if (content) {\n      <ta-rich-text [richText]=\"content.Content\"></ta-rich-text>\n\n      <div class=\"checkbox ta-r\">\n        <ta-input-toggle [input]=\"this.checkbox\"></ta-input-toggle>\n      </div>\n      }\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n}\n" }]
        }], ctorParameters: () => [{ type: i1.TaSaleService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TENANT_CONFIG_TOKEN]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvc3RyYXBpL2NvbXBvbmVudHMvc2FsZS9zYWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvY29tcG9uZW50cy9zYWxlL3NhbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0sWUFBWSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUczRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBZ0IzRSxNQUFNLE9BQU8sYUFBYyxTQUFRLGVBQWU7SUFPaEQsSUFBSSxRQUFRO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEMsT0FBTyxFQUFFLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBQ0QsWUFDUyxXQUEwQixFQUNnQixZQUEwQjtRQUUzRSxLQUFLLEVBQUUsQ0FBQztRQUhELGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQ2dCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBaEI3RSxnQkFBVyxHQUFHLE1BQU0sRUFBVyxDQUFDO1FBRXpCLGFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQztZQUNsQyxLQUFLLEVBQUUsNEJBQTRCO1lBQ25DLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO1FBZUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMvRCxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM5QyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNqRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7WUFDN0MsS0FBSyxFQUFFLENBQUMsS0FBd0IsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQ0YsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOytHQXpDVSxhQUFhLCtDQWlCRixtQkFBbUI7bUdBakI5QixhQUFhLG1JQ25DMUIsNGhCQWtCQSxxRERTSSxTQUFTLDhDQUNULGVBQWUseUdBQ2YsY0FBYyxpSUFDZCxjQUFjLGlKQUNkLGlCQUFpQiwrRUFDakIsZUFBZTs7NEZBR04sYUFBYTtrQkFkekIsU0FBUzsrQkFDRSxTQUFTLGNBR1AsSUFBSSxXQUNQO3dCQUNQLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixlQUFlO3FCQUNoQjs7MEJBbUJFLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBvdXRwdXQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IGZpbHRlciwgb2YgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBUb2dnbGVDb21wb25lbnQgfSBmcm9tIFwiQHRhL2Zvcm0taW5wdXRcIjtcbmltcG9ydCB7IElucHV0Q2hlY2tCb3ggfSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcbmltcG9ydCB7IFRFTkFOVF9DT05GSUdfVE9LRU4sIFRlbmFudENvbmZpZyB9IGZyb20gXCJAdGEvc2VydmVyXCI7XG5pbXBvcnQgeyBFbXB0eUNvbXBvbmVudCwgRXJyb3JDb21wb25lbnQsIExvYWRlckNvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCwgaXNOb25OdWxsYWJsZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFTYWxlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zYWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJpY2hUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4uL3R5cGVzL3JpY2gtdGV4dC9yaWNoLXRleHQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1zYWxlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2FsZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc2FsZS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEFzeW5jUGlwZSxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnQsXG4gICAgRW1wdHlDb21wb25lbnQsXG4gICAgUmljaFRleHRDb21wb25lbnQsXG4gICAgVG9nZ2xlQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTYWxlQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWNjZXB0YXRpb24gPSBvdXRwdXQ8Ym9vbGVhbj4oKTtcblxuICBwdWJsaWMgY2hlY2tib3ggPSBuZXcgSW5wdXRDaGVja0JveCh7XG4gICAgbGFiZWw6IFwic3RyYXBpLnNhbGUuY2d1QWNjZXB0YXRpb25cIixcbiAgICB0b2dnbGU6IHRydWUsXG4gIH0pO1xuICBnZXQgY29udGVudCQoKSB7XG4gICAgaWYgKCF0aGlzLnRlbmFudENvbmZpZy50ZW5hbnRJZCkge1xuICAgICAgcmV0dXJuIG9mKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNhbGVTZXJ2aWNlLnNhbGVDb250ZW50cy5nZXQkKFxuICAgICAgdGhpcy50ZW5hbnRDb25maWcudGVuYW50SWQ/LnRvU3RyaW5nKClcbiAgICApO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzYWxlU2VydmljZTogVGFTYWxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFRFTkFOVF9DT05GSUdfVE9LRU4pIHByaXZhdGUgdGVuYW50Q29uZmlnOiBUZW5hbnRDb25maWdcbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2hlY2tib3guY3JlYXRlRm9ybUNvbnRyb2woKTtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuY2hlY2tib3guY2hhbmdlVmFsdWUkLnBpcGUoZmlsdGVyKGlzTm9uTnVsbGFibGUpKS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAodmFsdWUpID0+IHRoaXMuYWNjZXB0YXRpb24uZW1pdCh2YWx1ZSksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB0ZW5hbnRJZCA9IHRoaXMudGVuYW50Q29uZmlnLnRlbmFudElkID8/IDA7XG5cbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5zYWxlU2VydmljZS5mZXRjaFNhbGVDb250ZW50cyQodGVuYW50SWQudG9TdHJpbmcoKSkuc3Vic2NyaWJlKHtcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMucmVxdWVzdFN0YXRlLmNvbXBsZXRlZCgpLFxuICAgICAgICBlcnJvcjogKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMucmVxdWVzdFN0YXRlLm9uRXJyb3IoZXJyb3Iuc3RhdHVzLCBlcnJvci5zdGF0dXNUZXh0KTtcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLmNvbnRlbnQkIHwgYXN5bmM7IGFzIGNvbnRlbnQpIHtcbjx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLnJlcXVlc3RTdGF0ZS5pc0xvYWRpbmcoKVwiPlxuICA8dGEtZXJyb3JcbiAgICBbbWVzc2FnZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvck1lc3NhZ2UoKVwiXG4gICAgW2NvZGVdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JTdGF0dXMoKVwiXG4gID5cbiAgICA8dGEtZW1wdHkgW2lzRW1wdHldPVwiIWNvbnRlbnRcIj5cbiAgICAgIEBpZiAoY29udGVudCkge1xuICAgICAgPHRhLXJpY2gtdGV4dCBbcmljaFRleHRdPVwiY29udGVudC5Db250ZW50XCI+PC90YS1yaWNoLXRleHQ+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveCB0YS1yXCI+XG4gICAgICAgIDx0YS1pbnB1dC10b2dnbGUgW2lucHV0XT1cInRoaXMuY2hlY2tib3hcIj48L3RhLWlucHV0LXRvZ2dsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvdGEtZW1wdHk+XG4gIDwvdGEtZXJyb3I+XG48L3RhLWxvYWRlcj5cbn1cbiJdfQ==
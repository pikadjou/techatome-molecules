import { AsyncPipe, NgIf } from "@angular/common";
import { Component, EventEmitter, Inject, Optional, Output, } from "@angular/core";
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
        this.acceptation = new EventEmitter();
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
        this.saleService.fetchSaleContents$(tenantId.toString()).subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SaleComponent, deps: [{ token: i1.TaSaleService }, { token: TENANT_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SaleComponent, isStandalone: true, selector: "ta-sale", outputs: { acceptation: "acceptation" }, usesInheritance: true, ngImport: i0, template: "@if (this.content$ | async; as content) {\n<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty [isEmpty]=\"!content\">\n      @if (content) {\n      <ta-rich-text [richText]=\"content.Content\"></ta-rich-text>\n\n      <div class=\"checkbox ta-r\">\n        <ta-input-toggle [input]=\"this.checkbox\"></ta-input-toggle>\n      </div>\n      }\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n}\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: RichTextComponent, selector: "ta-rich-text", inputs: ["richText"] }, { kind: "component", type: ToggleComponent, selector: "ta-input-toggle" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SaleComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-sale", standalone: true, imports: [
                        NgIf,
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
                }] }], propDecorators: { acceptation: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvc3RyYXBpL2NvbXBvbmVudHMvc2FsZS9zYWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvY29tcG9uZW50cy9zYWxlL3NhbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRCxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBRU4sUUFBUSxFQUNSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBZ0IsTUFBTSxZQUFZLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7QUFpQjNFLE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBZTtJQVFoRCxJQUFJLFFBQVE7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDdkMsQ0FBQztJQUNKLENBQUM7SUFDRCxZQUNTLFdBQTBCLEVBQ2dCLFlBQTBCO1FBRTNFLEtBQUssRUFBRSxDQUFDO1FBSEQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDZ0IsaUJBQVksR0FBWixZQUFZLENBQWM7UUFoQjdFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVuQyxhQUFRLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDbEMsS0FBSyxFQUFFLDRCQUE0QjtZQUNuQyxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztRQWVELElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0QsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDOUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ2pFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxLQUFLLEVBQUUsQ0FBQyxLQUF3QixFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVELENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOytHQXhDVSxhQUFhLCtDQWtCRixtQkFBbUI7bUdBbEI5QixhQUFhLG1JQ3JDMUIsNGhCQWtCQSxxRERXSSxTQUFTLDhDQUNULGVBQWUseUdBQ2YsY0FBYyxrRkFDZCxjQUFjLHdJQUNkLGlCQUFpQiwrRUFDakIsZUFBZTs7NEZBR04sYUFBYTtrQkFmekIsU0FBUzsrQkFDRSxTQUFTLGNBR1AsSUFBSSxXQUNQO3dCQUNQLElBQUk7d0JBQ0osU0FBUzt3QkFDVCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGVBQWU7cUJBQ2hCOzswQkFvQkUsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxtQkFBbUI7eUNBaEJ6QyxXQUFXO3NCQURWLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUsIE5nSWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIG9mIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgVG9nZ2xlQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9mb3JtLWlucHV0XCI7XG5pbXBvcnQgeyBJbnB1dENoZWNrQm94IH0gZnJvbSBcIkB0YS9mb3JtLW1vZGVsXCI7XG5pbXBvcnQgeyBURU5BTlRfQ09ORklHX1RPS0VOLCBUZW5hbnRDb25maWcgfSBmcm9tIFwiQHRhL3NlcnZlclwiO1xuaW1wb3J0IHsgRW1wdHlDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQsIGlzTm9uTnVsbGFibGUgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IFRhU2FsZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2FsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSaWNoVGV4dENvbXBvbmVudCB9IGZyb20gXCIuLi90eXBlcy9yaWNoLXRleHQvcmljaC10ZXh0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtc2FsZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NhbGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3NhbGUuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmLFxuICAgIEFzeW5jUGlwZSxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnQsXG4gICAgRW1wdHlDb21wb25lbnQsXG4gICAgUmljaFRleHRDb21wb25lbnQsXG4gICAgVG9nZ2xlQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTYWxlQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpXG4gIGFjY2VwdGF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHB1YmxpYyBjaGVja2JveCA9IG5ldyBJbnB1dENoZWNrQm94KHtcbiAgICBsYWJlbDogXCJzdHJhcGkuc2FsZS5jZ3VBY2NlcHRhdGlvblwiLFxuICAgIHRvZ2dsZTogdHJ1ZSxcbiAgfSk7XG4gIGdldCBjb250ZW50JCgpIHtcbiAgICBpZiAoIXRoaXMudGVuYW50Q29uZmlnLnRlbmFudElkKSB7XG4gICAgICByZXR1cm4gb2YoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2FsZVNlcnZpY2Uuc2FsZUNvbnRlbnRzLmdldCQoXG4gICAgICB0aGlzLnRlbmFudENvbmZpZy50ZW5hbnRJZD8udG9TdHJpbmcoKVxuICAgICk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNhbGVTZXJ2aWNlOiBUYVNhbGVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoVEVOQU5UX0NPTkZJR19UT0tFTikgcHJpdmF0ZSB0ZW5hbnRDb25maWc6IFRlbmFudENvbmZpZ1xuICApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jaGVja2JveC5jcmVhdGVGb3JtQ29udHJvbCgpO1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5jaGVja2JveC5jaGFuZ2VWYWx1ZSQucGlwZShmaWx0ZXIoaXNOb25OdWxsYWJsZSkpLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICh2YWx1ZSkgPT4gdGhpcy5hY2NlcHRhdGlvbi5lbWl0KHZhbHVlKSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHRlbmFudElkID0gdGhpcy50ZW5hbnRDb25maWcudGVuYW50SWQgPz8gMDtcblxuICAgIHRoaXMucmVxdWVzdFN0YXRlLmFza2VkKCk7XG4gICAgdGhpcy5zYWxlU2VydmljZS5mZXRjaFNhbGVDb250ZW50cyQodGVuYW50SWQudG9TdHJpbmcoKSkuc3Vic2NyaWJlKHtcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB0aGlzLnJlcXVlc3RTdGF0ZS5jb21wbGV0ZWQoKSxcbiAgICAgIGVycm9yOiAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMucmVxdWVzdFN0YXRlLm9uRXJyb3IoZXJyb3Iuc3RhdHVzLCBlcnJvci5zdGF0dXNUZXh0KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiIsIkBpZiAodGhpcy5jb250ZW50JCB8IGFzeW5jOyBhcyBjb250ZW50KSB7XG48dGEtbG9hZGVyIFtpc0xvYWRpbmddPVwidGhpcy5yZXF1ZXN0U3RhdGUuaXNMb2FkaW5nKClcIj5cbiAgPHRhLWVycm9yXG4gICAgW21lc3NhZ2VdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JNZXNzYWdlKClcIlxuICAgIFtjb2RlXT1cInRoaXMucmVxdWVzdFN0YXRlLmdldEVycm9yU3RhdHVzKClcIlxuICA+XG4gICAgPHRhLWVtcHR5IFtpc0VtcHR5XT1cIiFjb250ZW50XCI+XG4gICAgICBAaWYgKGNvbnRlbnQpIHtcbiAgICAgIDx0YS1yaWNoLXRleHQgW3JpY2hUZXh0XT1cImNvbnRlbnQuQ29udGVudFwiPjwvdGEtcmljaC10ZXh0PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3ggdGEtclwiPlxuICAgICAgICA8dGEtaW5wdXQtdG9nZ2xlIFtpbnB1dF09XCJ0aGlzLmNoZWNrYm94XCI+PC90YS1pbnB1dC10b2dnbGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L3RhLWVtcHR5PlxuICA8L3RhLWVycm9yPlxuPC90YS1sb2FkZXI+XG59XG4iXX0=
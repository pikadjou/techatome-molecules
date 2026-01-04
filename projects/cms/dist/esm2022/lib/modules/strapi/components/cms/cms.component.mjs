import { AsyncPipe, NgIf } from "@angular/common";
import { Component, Inject, Optional, input } from "@angular/core";
import { TENANT_CONFIG_TOKEN } from "@ta/server";
import { EmptyComponent, ErrorComponent, LoaderComponent, TitleComponent, } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { RichTextComponent } from "../types/rich-text/rich-text.component";
import * as i0 from "@angular/core";
import * as i1 from "../../services/cms.service";
export class CmsComponent extends TaBaseComponent {
    get content$() {
        return this.cmsService.cmsContents.get$(this.contentType());
    }
    constructor(cmsService, tenantConfig) {
        super();
        this.cmsService = cmsService;
        this.tenantConfig = tenantConfig;
        this.contentType = input.required();
    }
    ngOnInit() {
        const tenantId = this.tenantConfig.tenantId ?? 0;
        this.requestState.asked();
        this.cmsService
            .fetchCmsContents$(this.contentType(), tenantId.toString())
            .subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CmsComponent, deps: [{ token: i1.TaCmsService }, { token: TENANT_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: CmsComponent, isStandalone: true, selector: "ta-cms", inputs: { contentType: { classPropertyName: "contentType", publicName: "contentType", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "@if (this.content$ | async; as content) {\n<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty [isEmpty]=\"!content\">\n      @if (content) {\n      <ta-title>\n        {{ content.Title }}\n      </ta-title>\n\n      <ta-rich-text [richText]=\"content.Description\"></ta-rich-text>\n      }\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n}\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: RichTextComponent, selector: "ta-rich-text", inputs: ["richText"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CmsComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-cms", standalone: true, imports: [
                        NgIf,
                        AsyncPipe,
                        LoaderComponent,
                        ErrorComponent,
                        EmptyComponent,
                        TitleComponent,
                        RichTextComponent,
                    ], template: "@if (this.content$ | async; as content) {\n<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty [isEmpty]=\"!content\">\n      @if (content) {\n      <ta-title>\n        {{ content.Title }}\n      </ta-title>\n\n      <ta-rich-text [richText]=\"content.Description\"></ta-rich-text>\n      }\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n}\n" }]
        }], ctorParameters: () => [{ type: i1.TaCmsService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TENANT_CONFIG_TOKEN]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvY29tcG9uZW50cy9jbXMvY21zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvY29tcG9uZW50cy9jbXMvY21zLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0sWUFBWSxDQUFDO0FBQy9ELE9BQU8sRUFDTCxjQUFjLEVBQ2QsY0FBYyxFQUNkLGVBQWUsRUFDZixjQUFjLEdBQ2YsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUc1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBaUIzRSxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQWU7SUFHL0MsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELFlBQ1MsVUFBd0IsRUFDa0IsWUFBMEI7UUFFM0UsS0FBSyxFQUFFLENBQUM7UUFIRCxlQUFVLEdBQVYsVUFBVSxDQUFjO1FBQ2tCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBUDdFLGdCQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBVSxDQUFDO0lBVXZDLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVU7YUFDWixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzFELFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxLQUFLLEVBQUUsQ0FBQyxLQUF3QixFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVELENBQUM7U0FDRixDQUFDLENBQUM7SUFDUCxDQUFDOytHQXhCVSxZQUFZLDhDQVFELG1CQUFtQjttR0FSOUIsWUFBWSw4T0MvQnpCLHdlQWtCQSxxRERLSSxTQUFTLDhDQUNULGVBQWUseUdBQ2YsY0FBYyxrRkFDZCxjQUFjLHdJQUNkLGNBQWMscUdBQ2QsaUJBQWlCOzs0RkFHUixZQUFZO2tCQWZ4QixTQUFTOytCQUNFLFFBQVEsY0FHTixJQUFJLFdBQ1A7d0JBQ1AsSUFBSTt3QkFDSixTQUFTO3dCQUNULGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsaUJBQWlCO3FCQUNsQjs7MEJBVUUsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUsIE5nSWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgT3B0aW9uYWwsIGlucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVEVOQU5UX0NPTkZJR19UT0tFTiwgVGVuYW50Q29uZmlnIH0gZnJvbSBcIkB0YS9zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIEVtcHR5Q29tcG9uZW50LFxuICBFcnJvckNvbXBvbmVudCxcbiAgTG9hZGVyQ29tcG9uZW50LFxuICBUaXRsZUNvbXBvbmVudCxcbn0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBUYUNtc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY21zLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJpY2hUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4uL3R5cGVzL3JpY2gtdGV4dC9yaWNoLXRleHQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1jbXNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2Ntcy5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgQXN5bmNQaXBlLFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBFcnJvckNvbXBvbmVudCxcbiAgICBFbXB0eUNvbXBvbmVudCxcbiAgICBUaXRsZUNvbXBvbmVudCxcbiAgICBSaWNoVGV4dENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29udGVudFR5cGUgPSBpbnB1dC5yZXF1aXJlZDxzdHJpbmc+KCk7XG5cbiAgZ2V0IGNvbnRlbnQkKCkge1xuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuY21zQ29udGVudHMuZ2V0JCh0aGlzLmNvbnRlbnRUeXBlKCkpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjbXNTZXJ2aWNlOiBUYUNtc1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChURU5BTlRfQ09ORklHX1RPS0VOKSBwcml2YXRlIHRlbmFudENvbmZpZzogVGVuYW50Q29uZmlnXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB0ZW5hbnRJZCA9IHRoaXMudGVuYW50Q29uZmlnLnRlbmFudElkID8/IDA7XG4gICAgdGhpcy5yZXF1ZXN0U3RhdGUuYXNrZWQoKTtcbiAgICB0aGlzLmNtc1NlcnZpY2VcbiAgICAgIC5mZXRjaENtc0NvbnRlbnRzJCh0aGlzLmNvbnRlbnRUeXBlKCksIHRlbmFudElkLnRvU3RyaW5nKCkpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMucmVxdWVzdFN0YXRlLmNvbXBsZXRlZCgpLFxuICAgICAgICBlcnJvcjogKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMucmVxdWVzdFN0YXRlLm9uRXJyb3IoZXJyb3Iuc3RhdHVzLCBlcnJvci5zdGF0dXNUZXh0KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuY29udGVudCQgfCBhc3luYzsgYXMgY29udGVudCkge1xuPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMucmVxdWVzdFN0YXRlLmlzTG9hZGluZygpXCI+XG4gIDx0YS1lcnJvclxuICAgIFttZXNzYWdlXT1cInRoaXMucmVxdWVzdFN0YXRlLmdldEVycm9yTWVzc2FnZSgpXCJcbiAgICBbY29kZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvclN0YXR1cygpXCJcbiAgPlxuICAgIDx0YS1lbXB0eSBbaXNFbXB0eV09XCIhY29udGVudFwiPlxuICAgICAgQGlmIChjb250ZW50KSB7XG4gICAgICA8dGEtdGl0bGU+XG4gICAgICAgIHt7IGNvbnRlbnQuVGl0bGUgfX1cbiAgICAgIDwvdGEtdGl0bGU+XG5cbiAgICAgIDx0YS1yaWNoLXRleHQgW3JpY2hUZXh0XT1cImNvbnRlbnQuRGVzY3JpcHRpb25cIj48L3RhLXJpY2gtdGV4dD5cbiAgICAgIH1cbiAgICA8L3RhLWVtcHR5PlxuICA8L3RhLWVycm9yPlxuPC90YS1sb2FkZXI+XG59XG4iXX0=
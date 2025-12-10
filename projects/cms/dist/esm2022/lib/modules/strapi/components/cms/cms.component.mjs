import { AsyncPipe, NgIf } from "@angular/common";
import { Component, Inject, Input, Optional } from "@angular/core";
import { TENANT_CONFIG_TOKEN } from "@ta/server";
import { EmptyComponent, ErrorComponent, LoaderComponent, TitleComponent, } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { RichTextComponent } from "../types/rich-text/rich-text.component";
import * as i0 from "@angular/core";
import * as i1 from "../../services/cms.service";
export class CmsComponent extends TaBaseComponent {
    get content$() {
        return this.cmsService.cmsContents.get$(this.contentType);
    }
    constructor(cmsService, tenantConfig) {
        super();
        this.cmsService = cmsService;
        this.tenantConfig = tenantConfig;
    }
    ngOnInit() {
        const tenantId = this.tenantConfig.tenantId ?? 0;
        this.requestState.asked();
        this.cmsService
            .fetchCmsContents$(this.contentType, tenantId.toString())
            .subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CmsComponent, deps: [{ token: i1.TaCmsService }, { token: TENANT_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: CmsComponent, isStandalone: true, selector: "ta-cms", inputs: { contentType: "contentType" }, usesInheritance: true, ngImport: i0, template: "@if (this.content$ | async; as content) {\n<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty [isEmpty]=\"!content\">\n      @if (content) {\n      <ta-title>\n        {{ content.Title }}\n      </ta-title>\n\n      <ta-rich-text [richText]=\"content.Description\"></ta-rich-text>\n      }\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n}\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: RichTextComponent, selector: "ta-rich-text", inputs: ["richText"] }] }); }
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
                }] }], propDecorators: { contentType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvY29tcG9uZW50cy9jbXMvY21zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvY29tcG9uZW50cy9jbXMvY21zLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0sWUFBWSxDQUFDO0FBQy9ELE9BQU8sRUFDTCxjQUFjLEVBQ2QsY0FBYyxFQUNkLGVBQWUsRUFDZixjQUFjLEdBQ2YsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUc1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBaUIzRSxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQWU7SUFJL0MsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxZQUNTLFVBQXdCLEVBQ2tCLFlBQTBCO1FBRTNFLEtBQUssRUFBRSxDQUFDO1FBSEQsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQUNrQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUc3RSxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVO2FBQ1osaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDeEQsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQzdDLEtBQUssRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUQsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNQLENBQUM7K0dBekJVLFlBQVksOENBU0QsbUJBQW1CO21HQVQ5QixZQUFZLGlJQy9CekIsd2VBa0JBLHFEREtJLFNBQVMsOENBQ1QsZUFBZSx5R0FDZixjQUFjLGtGQUNkLGNBQWMsd0lBQ2QsY0FBYyxxR0FDZCxpQkFBaUI7OzRGQUdSLFlBQVk7a0JBZnhCLFNBQVM7K0JBQ0UsUUFBUSxjQUdOLElBQUksV0FDUDt3QkFDUCxJQUFJO3dCQUNKLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxpQkFBaUI7cUJBQ2xCOzswQkFXRSxRQUFROzswQkFBSSxNQUFNOzJCQUFDLG1CQUFtQjt5Q0FQekMsV0FBVztzQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNQaXBlLCBOZ0lmIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRFTkFOVF9DT05GSUdfVE9LRU4sIFRlbmFudENvbmZpZyB9IGZyb20gXCJAdGEvc2VydmVyXCI7XG5pbXBvcnQge1xuICBFbXB0eUNvbXBvbmVudCxcbiAgRXJyb3JDb21wb25lbnQsXG4gIExvYWRlckNvbXBvbmVudCxcbiAgVGl0bGVDb21wb25lbnQsXG59IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFDbXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Ntcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSaWNoVGV4dENvbXBvbmVudCB9IGZyb20gXCIuLi90eXBlcy9yaWNoLXRleHQvcmljaC10ZXh0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtY21zXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY21zLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jbXMuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmLFxuICAgIEFzeW5jUGlwZSxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnQsXG4gICAgRW1wdHlDb21wb25lbnQsXG4gICAgVGl0bGVDb21wb25lbnQsXG4gICAgUmljaFRleHRDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENtc0NvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRlbnRUeXBlITogc3RyaW5nO1xuXG4gIGdldCBjb250ZW50JCgpIHtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmNtc0NvbnRlbnRzLmdldCQodGhpcy5jb250ZW50VHlwZSk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNtc1NlcnZpY2U6IFRhQ21zU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFRFTkFOVF9DT05GSUdfVE9LRU4pIHByaXZhdGUgdGVuYW50Q29uZmlnOiBUZW5hbnRDb25maWdcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHRlbmFudElkID0gdGhpcy50ZW5hbnRDb25maWcudGVuYW50SWQgPz8gMDtcbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuICAgIHRoaXMuY21zU2VydmljZVxuICAgICAgLmZldGNoQ21zQ29udGVudHMkKHRoaXMuY29udGVudFR5cGUsIHRlbmFudElkLnRvU3RyaW5nKCkpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMucmVxdWVzdFN0YXRlLmNvbXBsZXRlZCgpLFxuICAgICAgICBlcnJvcjogKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMucmVxdWVzdFN0YXRlLm9uRXJyb3IoZXJyb3Iuc3RhdHVzLCBlcnJvci5zdGF0dXNUZXh0KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuY29udGVudCQgfCBhc3luYzsgYXMgY29udGVudCkge1xuPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMucmVxdWVzdFN0YXRlLmlzTG9hZGluZygpXCI+XG4gIDx0YS1lcnJvclxuICAgIFttZXNzYWdlXT1cInRoaXMucmVxdWVzdFN0YXRlLmdldEVycm9yTWVzc2FnZSgpXCJcbiAgICBbY29kZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvclN0YXR1cygpXCJcbiAgPlxuICAgIDx0YS1lbXB0eSBbaXNFbXB0eV09XCIhY29udGVudFwiPlxuICAgICAgQGlmIChjb250ZW50KSB7XG4gICAgICA8dGEtdGl0bGU+XG4gICAgICAgIHt7IGNvbnRlbnQuVGl0bGUgfX1cbiAgICAgIDwvdGEtdGl0bGU+XG5cbiAgICAgIDx0YS1yaWNoLXRleHQgW3JpY2hUZXh0XT1cImNvbnRlbnQuRGVzY3JpcHRpb25cIj48L3RhLXJpY2gtdGV4dD5cbiAgICAgIH1cbiAgICA8L3RhLWVtcHR5PlxuICA8L3RhLWVycm9yPlxuPC90YS1sb2FkZXI+XG59XG4iXX0=
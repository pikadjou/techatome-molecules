import { AsyncPipe } from "@angular/common";
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
        this._registerSubscription(this.cmsService
            .fetchCmsContents$(this.contentType(), tenantId.toString())
            .subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CmsComponent, deps: [{ token: i1.TaCmsService }, { token: TENANT_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: CmsComponent, isStandalone: true, selector: "ta-cms", inputs: { contentType: { classPropertyName: "contentType", publicName: "contentType", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "@if (this.content$ | async; as content) {\n<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty [isEmpty]=\"!content\">\n      @if (content) {\n      <ta-title>\n        {{ content.Title }}\n      </ta-title>\n\n      <ta-rich-text [richText]=\"content.Description\"></ta-rich-text>\n      }\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n}\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code", "showRetry", "retryLabel"], outputs: ["retry"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "subtitle", "emptyIcon", "iconSize"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: RichTextComponent, selector: "ta-rich-text", inputs: ["richText"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CmsComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-cms", standalone: true, imports: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvY29tcG9uZW50cy9jbXMvY21zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvY29tcG9uZW50cy9jbXMvY21zLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBZ0IsTUFBTSxZQUFZLENBQUM7QUFDL0QsT0FBTyxFQUNMLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGNBQWMsR0FDZixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7QUFnQjNFLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBZTtJQUcvQyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsWUFDUyxVQUF3QixFQUNrQixZQUEwQjtRQUUzRSxLQUFLLEVBQUUsQ0FBQztRQUhELGVBQVUsR0FBVixVQUFVLENBQWM7UUFDa0IsaUJBQVksR0FBWixZQUFZLENBQWM7UUFQN0UsZ0JBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFVLENBQUM7SUFVdkMsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxVQUFVO2FBQ1osaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMxRCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7WUFDN0MsS0FBSyxFQUFFLENBQUMsS0FBd0IsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQ0YsQ0FBQyxDQUNMLENBQUM7SUFDSixDQUFDOytHQTFCVSxZQUFZLDhDQVFELG1CQUFtQjttR0FSOUIsWUFBWSw4T0M5QnpCLHdlQWtCQSxxRERJSSxTQUFTLDhDQUNULGVBQWUseUdBQ2YsY0FBYyxpSUFDZCxjQUFjLGlKQUNkLGNBQWMscUdBQ2QsaUJBQWlCOzs0RkFHUixZQUFZO2tCQWR4QixTQUFTOytCQUNFLFFBQVEsY0FHTixJQUFJLFdBQ1A7d0JBQ1AsU0FBUzt3QkFDVCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGlCQUFpQjtxQkFDbEI7OzBCQVVFLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIE9wdGlvbmFsLCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRFTkFOVF9DT05GSUdfVE9LRU4sIFRlbmFudENvbmZpZyB9IGZyb20gXCJAdGEvc2VydmVyXCI7XG5pbXBvcnQge1xuICBFbXB0eUNvbXBvbmVudCxcbiAgRXJyb3JDb21wb25lbnQsXG4gIExvYWRlckNvbXBvbmVudCxcbiAgVGl0bGVDb21wb25lbnQsXG59IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFDbXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Ntcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSaWNoVGV4dENvbXBvbmVudCB9IGZyb20gXCIuLi90eXBlcy9yaWNoLXRleHQvcmljaC10ZXh0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtY21zXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY21zLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jbXMuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBBc3luY1BpcGUsXG4gICAgTG9hZGVyQ29tcG9uZW50LFxuICAgIEVycm9yQ29tcG9uZW50LFxuICAgIEVtcHR5Q29tcG9uZW50LFxuICAgIFRpdGxlQ29tcG9uZW50LFxuICAgIFJpY2hUZXh0Q29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb250ZW50VHlwZSA9IGlucHV0LnJlcXVpcmVkPHN0cmluZz4oKTtcblxuICBnZXQgY29udGVudCQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5jbXNDb250ZW50cy5nZXQkKHRoaXMuY29udGVudFR5cGUoKSk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNtc1NlcnZpY2U6IFRhQ21zU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFRFTkFOVF9DT05GSUdfVE9LRU4pIHByaXZhdGUgdGVuYW50Q29uZmlnOiBUZW5hbnRDb25maWdcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHRlbmFudElkID0gdGhpcy50ZW5hbnRDb25maWcudGVuYW50SWQgPz8gMDtcbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5jbXNTZXJ2aWNlXG4gICAgICAgIC5mZXRjaENtc0NvbnRlbnRzJCh0aGlzLmNvbnRlbnRUeXBlKCksIHRlbmFudElkLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB0aGlzLnJlcXVlc3RTdGF0ZS5jb21wbGV0ZWQoKSxcbiAgICAgICAgICBlcnJvcjogKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0U3RhdGUub25FcnJvcihlcnJvci5zdGF0dXMsIGVycm9yLnN0YXR1c1RleHQpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLmNvbnRlbnQkIHwgYXN5bmM7IGFzIGNvbnRlbnQpIHtcbjx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLnJlcXVlc3RTdGF0ZS5pc0xvYWRpbmcoKVwiPlxuICA8dGEtZXJyb3JcbiAgICBbbWVzc2FnZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvck1lc3NhZ2UoKVwiXG4gICAgW2NvZGVdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JTdGF0dXMoKVwiXG4gID5cbiAgICA8dGEtZW1wdHkgW2lzRW1wdHldPVwiIWNvbnRlbnRcIj5cbiAgICAgIEBpZiAoY29udGVudCkge1xuICAgICAgPHRhLXRpdGxlPlxuICAgICAgICB7eyBjb250ZW50LlRpdGxlIH19XG4gICAgICA8L3RhLXRpdGxlPlxuXG4gICAgICA8dGEtcmljaC10ZXh0IFtyaWNoVGV4dF09XCJjb250ZW50LkRlc2NyaXB0aW9uXCI+PC90YS1yaWNoLXRleHQ+XG4gICAgICB9XG4gICAgPC90YS1lbXB0eT5cbiAgPC90YS1lcnJvcj5cbjwvdGEtbG9hZGVyPlxufVxuIl19
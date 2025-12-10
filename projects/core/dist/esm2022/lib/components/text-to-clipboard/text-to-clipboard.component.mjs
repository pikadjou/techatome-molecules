import { Component, Input, inject } from "@angular/core";
import { FontIconComponent } from "@ta/icons";
import { ENotificationCode, LAZY_SERVICE_TOKEN } from "@ta/notification";
import { TaBaseComponent, copyTextToClipboard } from "@ta/utils";
import * as i0 from "@angular/core";
export class TextToClipboardComponent extends TaBaseComponent {
    constructor() {
        super(...arguments);
        this._notificationService = inject(LAZY_SERVICE_TOKEN);
        this.copyContent = async () => {
            const successNotification = (message) => {
                this._notificationService.addNotification(message, ENotificationCode.success);
            };
            const errorNotification = (message) => {
                this._notificationService.addNotification(message, ENotificationCode.error);
            };
            await copyTextToClipboard(this.value, successNotification, errorNotification);
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextToClipboardComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TextToClipboardComponent, isStandalone: true, selector: "ta-text-to-clipboard", inputs: { value: "value" }, usesInheritance: true, ngImport: i0, template: "<div (click)=\"this.copyContent()\">\n  <ta-font-icon name=\"copy\" type=\"sm\"></ta-font-icon>\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextToClipboardComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-text-to-clipboard", standalone: true, imports: [FontIconComponent], template: "<div (click)=\"this.copyContent()\">\n  <ta-font-icon name=\"copy\" type=\"sm\"></ta-font-icon>\n</div>\n" }]
        }], propDecorators: { value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC10by1jbGlwYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RleHQtdG8tY2xpcGJvYXJkL3RleHQtdG8tY2xpcGJvYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0LXRvLWNsaXBib2FyZC90ZXh0LXRvLWNsaXBib2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBU2pFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxlQUFlO0lBUDdEOztRQVdZLHlCQUFvQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXJELGdCQUFXLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO2dCQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUN2QyxPQUFPLEVBQ1AsaUJBQWlCLENBQUMsT0FBTyxDQUMxQixDQUFDO1lBQ0osQ0FBQyxDQUFDO1lBQ0YsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUN2QyxPQUFPLEVBQ1AsaUJBQWlCLENBQUMsS0FBSyxDQUN4QixDQUFDO1lBQ0osQ0FBQyxDQUFDO1lBRUYsTUFBTSxtQkFBbUIsQ0FDdkIsSUFBSSxDQUFDLEtBQUssRUFDVixtQkFBbUIsRUFDbkIsaUJBQWlCLENBQ2xCLENBQUM7UUFDSixDQUFDLENBQUM7S0FDSDsrR0ExQlksd0JBQXdCO21HQUF4Qix3QkFBd0IsbUlDYnJDLDJHQUdBLDBERFFZLGlCQUFpQjs7NEZBRWhCLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSxzQkFBc0IsY0FHcEIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLENBQUM7OEJBSTVCLEtBQUs7c0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgRU5vdGlmaWNhdGlvbkNvZGUsIExBWllfU0VSVklDRV9UT0tFTiB9IGZyb20gXCJAdGEvbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQsIGNvcHlUZXh0VG9DbGlwYm9hcmQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS10ZXh0LXRvLWNsaXBib2FyZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3RleHQtdG8tY2xpcGJvYXJkLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90ZXh0LXRvLWNsaXBib2FyZC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0ZvbnRJY29uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFRvQ2xpcGJvYXJkQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgdmFsdWUhOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIF9ub3RpZmljYXRpb25TZXJ2aWNlID0gaW5qZWN0KExBWllfU0VSVklDRV9UT0tFTik7XG5cbiAgcHVibGljIGNvcHlDb250ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3NOb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25TZXJ2aWNlLmFkZE5vdGlmaWNhdGlvbihcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgRU5vdGlmaWNhdGlvbkNvZGUuc3VjY2Vzc1xuICAgICAgKTtcbiAgICB9O1xuICAgIGNvbnN0IGVycm9yTm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uU2VydmljZS5hZGROb3RpZmljYXRpb24oXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIEVOb3RpZmljYXRpb25Db2RlLmVycm9yXG4gICAgICApO1xuICAgIH07XG5cbiAgICBhd2FpdCBjb3B5VGV4dFRvQ2xpcGJvYXJkKFxuICAgICAgdGhpcy52YWx1ZSxcbiAgICAgIHN1Y2Nlc3NOb3RpZmljYXRpb24sXG4gICAgICBlcnJvck5vdGlmaWNhdGlvblxuICAgICk7XG4gIH07XG59XG4iLCI8ZGl2IChjbGljayk9XCJ0aGlzLmNvcHlDb250ZW50KClcIj5cbiAgPHRhLWZvbnQtaWNvbiBuYW1lPVwiY29weVwiIHR5cGU9XCJzbVwiPjwvdGEtZm9udC1pY29uPlxuPC9kaXY+XG4iXX0=
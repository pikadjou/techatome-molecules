import { Component, Input, inject } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { ENotificationCode, LAZY_SERVICE_TOKEN } from '@ta/notification';
import { TaBaseComponent, copyTextToClipboard } from '@ta/utils';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextToClipboardComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TextToClipboardComponent, isStandalone: true, selector: "ta-text-to-clipboard", inputs: { value: "value" }, usesInheritance: true, ngImport: i0, template: "<div (click)=\"this.copyContent()\">\n  <ta-font-icon name=\"copy\" type=\"sm\"></ta-font-icon>\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextToClipboardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-text-to-clipboard', standalone: true, imports: [FontIconComponent], template: "<div (click)=\"this.copyContent()\">\n  <ta-font-icon name=\"copy\" type=\"sm\"></ta-font-icon>\n</div>\n" }]
        }], propDecorators: { value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC10by1jbGlwYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RleHQtdG8tY2xpcGJvYXJkL3RleHQtdG8tY2xpcGJvYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90ZXh0LXRvLWNsaXBib2FyZC90ZXh0LXRvLWNsaXBib2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBU2pFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxlQUFlO0lBUDdEOztRQVdZLHlCQUFvQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXJELGdCQUFXLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO2dCQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRixDQUFDLENBQUM7WUFDRixNQUFNLGlCQUFpQixHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlFLENBQUMsQ0FBQztZQUVGLE1BQU0sbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hGLENBQUMsQ0FBQztLQUNIOytHQWhCWSx3QkFBd0I7bUdBQXhCLHdCQUF3QixtSUNickMsMkdBR0EsMEREUVksaUJBQWlCOzs0RkFFaEIsd0JBQXdCO2tCQVBwQyxTQUFTOytCQUNFLHNCQUFzQixjQUdwQixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsQ0FBQzs4QkFJNUIsS0FBSztzQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IEVOb3RpZmljYXRpb25Db2RlLCBMQVpZX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICdAdGEvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCwgY29weVRleHRUb0NsaXBib2FyZCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLXRleHQtdG8tY2xpcGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtdG8tY2xpcGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC10by1jbGlwYm9hcmQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0ZvbnRJY29uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFRvQ2xpcGJvYXJkQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgdmFsdWUhOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIF9ub3RpZmljYXRpb25TZXJ2aWNlID0gaW5qZWN0KExBWllfU0VSVklDRV9UT0tFTik7XG5cbiAgcHVibGljIGNvcHlDb250ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3NOb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25TZXJ2aWNlLmFkZE5vdGlmaWNhdGlvbihtZXNzYWdlLCBFTm90aWZpY2F0aW9uQ29kZS5zdWNjZXNzKTtcbiAgICB9O1xuICAgIGNvbnN0IGVycm9yTm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uU2VydmljZS5hZGROb3RpZmljYXRpb24obWVzc2FnZSwgRU5vdGlmaWNhdGlvbkNvZGUuZXJyb3IpO1xuICAgIH07XG5cbiAgICBhd2FpdCBjb3B5VGV4dFRvQ2xpcGJvYXJkKHRoaXMudmFsdWUsIHN1Y2Nlc3NOb3RpZmljYXRpb24sIGVycm9yTm90aWZpY2F0aW9uKTtcbiAgfTtcbn1cbiIsIjxkaXYgKGNsaWNrKT1cInRoaXMuY29weUNvbnRlbnQoKVwiPlxuICA8dGEtZm9udC1pY29uIG5hbWU9XCJjb3B5XCIgdHlwZT1cInNtXCI+PC90YS1mb250LWljb24+XG48L2Rpdj5cbiJdfQ==
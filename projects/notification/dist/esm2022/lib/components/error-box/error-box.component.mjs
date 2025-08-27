import { ENotificationCode } from '../../enum';
import { LAZY_SERVICE_TOKEN } from '../../services/notification.service';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CamServerErrorService } from '@ta/server';
import { ButtonComponent, ExpandableTextComponent, LayoutModalComponent, TextComponent, TitleComponent } from '@ta/ui';
import { CamBaseModal, copyTextToClipboard } from '@ta/utils';
import * as i0 from "@angular/core";
export class ErrorBoxModal extends CamBaseModal {
    constructor() {
        super(...arguments);
        this._notificationService = inject(LAZY_SERVICE_TOKEN);
        this._errorService = inject(CamServerErrorService);
        this.errorList = this._errorService.notifications;
        this.copyContent = async (entity) => {
            const successNotification = (message) => {
                this._notificationService.addNotification(message, ENotificationCode.success);
            };
            const errorNotification = (message) => {
                this._notificationService.addNotification(message, ENotificationCode.error);
            };
            await copyTextToClipboard(this._formatEntityForClipboard(entity), successNotification, errorNotification);
        };
    }
    _formatEntityForClipboard(entity) {
        const errorMessages = entity.errorsMessage?.map(m => `- ${m.message}`).join('\n') ?? 'No error messages';
        return `
      🔴 Error Name:
      ${entity.error?.name ?? 'N/A'}
      
      💬 Message:
      ${entity.error?.message ?? 'N/A'}
      
      📜 Stack:
      ${entity.error?.stack ?? 'N/A'}
      
      📄 Query:
      ${entity.query ?? 'N/A'}
      
      📦 Variables:
      ${JSON.stringify(entity.variables, null, 2)}
      
      🧾 Error Messages:
      ${errorMessages}
      `.trim();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ErrorBoxModal, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ErrorBoxModal, isStandalone: true, selector: "ta-error-box", usesInheritance: true, ngImport: i0, template: "<ta-layout-modal>\r\n  <div class=\"flex-column\">\r\n    @for (entity of this.errorList(); track entity; let i = $index) {\r\n      <ta-title [level]=\"3\">{{ entity.error.name }}</ta-title>\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          @for (message of entity.errorsMessage; track message) {\r\n            <ta-text>{{ message.message }}</ta-text>\r\n          }\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <ta-text size=\"sm\">{{ entity.query }}</ta-text>\r\n          <ta-text size=\"sm\">{{ entity.variables | json }}</ta-text>\r\n        </div>\r\n      </div>\r\n      <div class=\"extra\">\r\n        <ta-text size=\"sm\" [isBold]=\"true\"> {{ entity.error.message }}</ta-text>\r\n        <ta-expandable-text size=\"sm\" [height]=\"20\">{{ entity.error.stack }}</ta-expandable-text>\r\n      </div>\r\n      <ta-button class=\"ml-a\" (action)=\"this.copyContent(entity)\">copy</ta-button>\r\n      <div class=\"sep\"></div>\r\n    }\r\n  </div>\r\n</ta-layout-modal>\r\n", styles: [".sep{height:1px;border-bottom:1px solid var(--ta-border-secondary);margin:var(--ta-space-xl) 0}\n"], dependencies: [{ kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: ExpandableTextComponent, selector: "ta-expandable-text", inputs: ["height"] }, { kind: "pipe", type: JsonPipe, name: "json" }, { kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ErrorBoxModal, decorators: [{
            type: Component,
            args: [{ selector: 'ta-error-box', standalone: true, imports: [
                        ButtonComponent,
                        ExpandableTextComponent,
                        JsonPipe,
                        LayoutModalComponent,
                        TextComponent,
                        TitleComponent
                    ], template: "<ta-layout-modal>\r\n  <div class=\"flex-column\">\r\n    @for (entity of this.errorList(); track entity; let i = $index) {\r\n      <ta-title [level]=\"3\">{{ entity.error.name }}</ta-title>\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          @for (message of entity.errorsMessage; track message) {\r\n            <ta-text>{{ message.message }}</ta-text>\r\n          }\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <ta-text size=\"sm\">{{ entity.query }}</ta-text>\r\n          <ta-text size=\"sm\">{{ entity.variables | json }}</ta-text>\r\n        </div>\r\n      </div>\r\n      <div class=\"extra\">\r\n        <ta-text size=\"sm\" [isBold]=\"true\"> {{ entity.error.message }}</ta-text>\r\n        <ta-expandable-text size=\"sm\" [height]=\"20\">{{ entity.error.stack }}</ta-expandable-text>\r\n      </div>\r\n      <ta-button class=\"ml-a\" (action)=\"this.copyContent(entity)\">copy</ta-button>\r\n      <div class=\"sep\"></div>\r\n    }\r\n  </div>\r\n</ta-layout-modal>\r\n", styles: [".sep{height:1px;border-bottom:1px solid var(--ta-border-secondary);margin:var(--ta-space-xl) 0}\n"] }]
        }] });
export function openErrorModal(dialog) {
    return dialog.open(ErrorBoxModal, {
        width: '600px',
        maxHeight: '80vh'
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lcnJvci1ib3gvZXJyb3ItYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lcnJvci1ib3gvZXJyb3ItYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFlLE1BQU0sWUFBWSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN2SCxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQWdCOUQsTUFBTSxPQUFPLGFBQWMsU0FBUSxZQUFZO0lBZC9DOztRQWVZLHlCQUFvQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLGtCQUFhLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFL0MsY0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBRXRELGdCQUFXLEdBQUcsS0FBSyxFQUFFLE1BQW1CLEVBQUUsRUFBRTtZQUNqRCxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hGLENBQUMsQ0FBQztZQUNGLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUUsQ0FBQyxDQUFDO1lBRUYsTUFBTSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUM1RyxDQUFDLENBQUM7S0F5Qkg7SUF2QlMseUJBQXlCLENBQUMsTUFBbUI7UUFDbkQsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBbUIsQ0FBQztRQUV6RyxPQUFPOztRQUVILE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUs7OztRQUczQixNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sSUFBSSxLQUFLOzs7UUFHOUIsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLElBQUksS0FBSzs7O1FBRzVCLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSzs7O1FBR3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7UUFHekMsYUFBYTtPQUNkLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDOytHQXhDVSxhQUFhO21HQUFiLGFBQWEsK0ZDdkIxQixxZ0NBd0JBLDJKRFRJLGVBQWUsOEpBQ2YsdUJBQXVCLDhFQUN2QixRQUFRLDZDQUNSLG9CQUFvQix3RkFDcEIsYUFBYSx5RkFDYixjQUFjOzs0RkFHTCxhQUFhO2tCQWR6QixTQUFTOytCQUNFLGNBQWMsY0FHWixJQUFJLFdBQ1A7d0JBQ1AsZUFBZTt3QkFDZix1QkFBdUI7d0JBQ3ZCLFFBQVE7d0JBQ1Isb0JBQW9CO3dCQUNwQixhQUFhO3dCQUNiLGNBQWM7cUJBQ2Y7O0FBNkNILE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBaUI7SUFDOUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNoQyxLQUFLLEVBQUUsT0FBTztRQUNkLFNBQVMsRUFBRSxNQUFNO0tBQ2xCLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTm90aWZpY2F0aW9uQ29kZSB9IGZyb20gJy4uLy4uL2VudW0nO1xuaW1wb3J0IHsgTEFaWV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnNvblBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBDYW1TZXJ2ZXJFcnJvclNlcnZpY2UsIFNlcnZlckVycm9yIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQsIEV4cGFuZGFibGVUZXh0Q29tcG9uZW50LCBMYXlvdXRNb2RhbENvbXBvbmVudCwgVGV4dENvbXBvbmVudCwgVGl0bGVDb21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgQ2FtQmFzZU1vZGFsLCBjb3B5VGV4dFRvQ2xpcGJvYXJkIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtZXJyb3ItYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Vycm9yLWJveC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEV4cGFuZGFibGVUZXh0Q29tcG9uZW50LFxuICAgIEpzb25QaXBlLFxuICAgIExheW91dE1vZGFsQ29tcG9uZW50LFxuICAgIFRleHRDb21wb25lbnQsXG4gICAgVGl0bGVDb21wb25lbnRcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JCb3hNb2RhbCBleHRlbmRzIENhbUJhc2VNb2RhbCB7XG4gIHByb3RlY3RlZCBfbm90aWZpY2F0aW9uU2VydmljZSA9IGluamVjdChMQVpZX1NFUlZJQ0VfVE9LRU4pO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Vycm9yU2VydmljZSA9IGluamVjdChDYW1TZXJ2ZXJFcnJvclNlcnZpY2UpO1xuXG4gIHB1YmxpYyByZWFkb25seSBlcnJvckxpc3QgPSB0aGlzLl9lcnJvclNlcnZpY2Uubm90aWZpY2F0aW9ucztcblxuICBwdWJsaWMgY29weUNvbnRlbnQgPSBhc3luYyAoZW50aXR5OiBTZXJ2ZXJFcnJvcikgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3NOb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25TZXJ2aWNlLmFkZE5vdGlmaWNhdGlvbihtZXNzYWdlLCBFTm90aWZpY2F0aW9uQ29kZS5zdWNjZXNzKTtcbiAgICB9O1xuICAgIGNvbnN0IGVycm9yTm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uU2VydmljZS5hZGROb3RpZmljYXRpb24obWVzc2FnZSwgRU5vdGlmaWNhdGlvbkNvZGUuZXJyb3IpO1xuICAgIH07XG5cbiAgICBhd2FpdCBjb3B5VGV4dFRvQ2xpcGJvYXJkKHRoaXMuX2Zvcm1hdEVudGl0eUZvckNsaXBib2FyZChlbnRpdHkpLCBzdWNjZXNzTm90aWZpY2F0aW9uLCBlcnJvck5vdGlmaWNhdGlvbik7XG4gIH07XG5cbiAgcHJpdmF0ZSBfZm9ybWF0RW50aXR5Rm9yQ2xpcGJvYXJkKGVudGl0eTogU2VydmVyRXJyb3IpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBlbnRpdHkuZXJyb3JzTWVzc2FnZT8ubWFwKG0gPT4gYC0gJHttLm1lc3NhZ2V9YCkuam9pbignXFxuJykgPz8gJ05vIGVycm9yIG1lc3NhZ2VzJztcblxuICAgIHJldHVybiBgXG4gICAgICDwn5S0IEVycm9yIE5hbWU6XG4gICAgICAke2VudGl0eS5lcnJvcj8ubmFtZSA/PyAnTi9BJ31cbiAgICAgIFxuICAgICAg8J+SrCBNZXNzYWdlOlxuICAgICAgJHtlbnRpdHkuZXJyb3I/Lm1lc3NhZ2UgPz8gJ04vQSd9XG4gICAgICBcbiAgICAgIPCfk5wgU3RhY2s6XG4gICAgICAke2VudGl0eS5lcnJvcj8uc3RhY2sgPz8gJ04vQSd9XG4gICAgICBcbiAgICAgIPCfk4QgUXVlcnk6XG4gICAgICAke2VudGl0eS5xdWVyeSA/PyAnTi9BJ31cbiAgICAgIFxuICAgICAg8J+TpiBWYXJpYWJsZXM6XG4gICAgICAke0pTT04uc3RyaW5naWZ5KGVudGl0eS52YXJpYWJsZXMsIG51bGwsIDIpfVxuICAgICAgXG4gICAgICDwn6e+IEVycm9yIE1lc3NhZ2VzOlxuICAgICAgJHtlcnJvck1lc3NhZ2VzfVxuICAgICAgYC50cmltKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FcnJvck1vZGFsKGRpYWxvZzogTWF0RGlhbG9nKSB7XG4gIHJldHVybiBkaWFsb2cub3BlbihFcnJvckJveE1vZGFsLCB7XG4gICAgd2lkdGg6ICc2MDBweCcsXG4gICAgbWF4SGVpZ2h0OiAnODB2aCdcbiAgfSk7XG59XG4iLCI8dGEtbGF5b3V0LW1vZGFsPlxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4LWNvbHVtblwiPlxyXG4gICAgQGZvciAoZW50aXR5IG9mIHRoaXMuZXJyb3JMaXN0KCk7IHRyYWNrIGVudGl0eTsgbGV0IGkgPSAkaW5kZXgpIHtcclxuICAgICAgPHRhLXRpdGxlIFtsZXZlbF09XCIzXCI+e3sgZW50aXR5LmVycm9yLm5hbWUgfX08L3RhLXRpdGxlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XHJcbiAgICAgICAgICBAZm9yIChtZXNzYWdlIG9mIGVudGl0eS5lcnJvcnNNZXNzYWdlOyB0cmFjayBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIDx0YS10ZXh0Pnt7IG1lc3NhZ2UubWVzc2FnZSB9fTwvdGEtdGV4dD5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cclxuICAgICAgICAgIDx0YS10ZXh0IHNpemU9XCJzbVwiPnt7IGVudGl0eS5xdWVyeSB9fTwvdGEtdGV4dD5cclxuICAgICAgICAgIDx0YS10ZXh0IHNpemU9XCJzbVwiPnt7IGVudGl0eS52YXJpYWJsZXMgfCBqc29uIH19PC90YS10ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImV4dHJhXCI+XHJcbiAgICAgICAgPHRhLXRleHQgc2l6ZT1cInNtXCIgW2lzQm9sZF09XCJ0cnVlXCI+IHt7IGVudGl0eS5lcnJvci5tZXNzYWdlIH19PC90YS10ZXh0PlxyXG4gICAgICAgIDx0YS1leHBhbmRhYmxlLXRleHQgc2l6ZT1cInNtXCIgW2hlaWdodF09XCIyMFwiPnt7IGVudGl0eS5lcnJvci5zdGFjayB9fTwvdGEtZXhwYW5kYWJsZS10ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHRhLWJ1dHRvbiBjbGFzcz1cIm1sLWFcIiAoYWN0aW9uKT1cInRoaXMuY29weUNvbnRlbnQoZW50aXR5KVwiPmNvcHk8L3RhLWJ1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlcFwiPjwvZGl2PlxyXG4gICAgfVxyXG4gIDwvZGl2PlxyXG48L3RhLWxheW91dC1tb2RhbD5cclxuIl19
import { JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TaServerErrorService } from "@ta/server";
import { ButtonComponent, ExpandableTextComponent, LayoutModalComponent, TextComponent, TitleComponent, } from "@ta/ui";
import { TaBaseModal, copyTextToClipboard } from "@ta/utils";
import { ENotificationCode } from "../../enum";
import { LAZY_SERVICE_TOKEN } from "../../services/notification.service";
import * as i0 from "@angular/core";
export class ErrorBoxModal extends TaBaseModal {
    constructor() {
        super(...arguments);
        this._notificationService = inject(LAZY_SERVICE_TOKEN);
        this._errorService = inject(TaServerErrorService);
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
        const errorMessages = entity.errorsMessage?.map((m) => `- ${m.message}`).join("\n") ??
            "No error messages";
        return `
      🔴 Error Name:
      ${entity.error?.name ?? "N/A"}
      
      💬 Message:
      ${entity.error?.message ?? "N/A"}
      
      📜 Stack:
      ${entity.error?.stack ?? "N/A"}
      
      📄 Query:
      ${entity.query ?? "N/A"}
      
      📦 Variables:
      ${JSON.stringify(entity.variables, null, 2)}
      
      🧾 Error Messages:
      ${errorMessages}
      `.trim();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErrorBoxModal, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErrorBoxModal, isStandalone: true, selector: "ta-error-box", usesInheritance: true, ngImport: i0, template: "<ta-layout-modal>\n  <div class=\"flex-column\">\n    @for (entity of this.errorList(); track entity; let i = $index) {\n    <ta-title [level]=\"3\">{{ entity.error.name }}</ta-title>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        @for (message of entity.errorsMessage; track message) {\n        <ta-text>{{ message.message }}</ta-text>\n        }\n      </div>\n      <div class=\"col-6\">\n        <ta-text size=\"sm\">{{ entity.query }}</ta-text>\n        <ta-text size=\"sm\">{{ entity.variables | json }}</ta-text>\n      </div>\n    </div>\n    <div class=\"extra\">\n      <ta-text size=\"sm\" [isBold]=\"true\"> {{ entity.error.message }}</ta-text>\n      <ta-expandable-text size=\"sm\" [height]=\"20\">{{\n        entity.error.stack\n      }}</ta-expandable-text>\n    </div>\n    <ta-button class=\"ml-a\" (action)=\"this.copyContent(entity)\">copy</ta-button>\n    <div class=\"sep\"></div>\n    }\n  </div>\n</ta-layout-modal>\n", styles: [".sep{height:1px;border-bottom:1px solid var(--ta-border-secondary);margin:var(--ta-space-xl) 0}\n"], dependencies: [{ kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: ExpandableTextComponent, selector: "ta-expandable-text", inputs: ["height"] }, { kind: "pipe", type: JsonPipe, name: "json" }, { kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErrorBoxModal, decorators: [{
            type: Component,
            args: [{ selector: "ta-error-box", standalone: true, imports: [
                        ButtonComponent,
                        ExpandableTextComponent,
                        JsonPipe,
                        LayoutModalComponent,
                        TextComponent,
                        TitleComponent,
                    ], template: "<ta-layout-modal>\n  <div class=\"flex-column\">\n    @for (entity of this.errorList(); track entity; let i = $index) {\n    <ta-title [level]=\"3\">{{ entity.error.name }}</ta-title>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        @for (message of entity.errorsMessage; track message) {\n        <ta-text>{{ message.message }}</ta-text>\n        }\n      </div>\n      <div class=\"col-6\">\n        <ta-text size=\"sm\">{{ entity.query }}</ta-text>\n        <ta-text size=\"sm\">{{ entity.variables | json }}</ta-text>\n      </div>\n    </div>\n    <div class=\"extra\">\n      <ta-text size=\"sm\" [isBold]=\"true\"> {{ entity.error.message }}</ta-text>\n      <ta-expandable-text size=\"sm\" [height]=\"20\">{{\n        entity.error.stack\n      }}</ta-expandable-text>\n    </div>\n    <ta-button class=\"ml-a\" (action)=\"this.copyContent(entity)\">copy</ta-button>\n    <div class=\"sep\"></div>\n    }\n  </div>\n</ta-layout-modal>\n", styles: [".sep{height:1px;border-bottom:1px solid var(--ta-border-secondary);margin:var(--ta-space-xl) 0}\n"] }]
        }] });
export function openErrorModal(dialog) {
    return dialog.open(ErrorBoxModal, {
        width: "600px",
        maxHeight: "80vh",
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lcnJvci1ib3gvZXJyb3ItYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lcnJvci1ib3gvZXJyb3ItYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQWUsb0JBQW9CLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDL0QsT0FBTyxFQUNMLGVBQWUsRUFDZix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixjQUFjLEdBQ2YsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBZ0J6RSxNQUFNLE9BQU8sYUFBYyxTQUFRLFdBQVc7SUFkOUM7O1FBZVkseUJBQW9CLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFM0Msa0JBQWEsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUU5QyxjQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFFdEQsZ0JBQVcsR0FBRyxLQUFLLEVBQUUsTUFBbUIsRUFBRSxFQUFFO1lBQ2pELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FDdkMsT0FBTyxFQUNQLGlCQUFpQixDQUFDLE9BQU8sQ0FDMUIsQ0FBQztZQUNKLENBQUMsQ0FBQztZQUNGLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FDdkMsT0FBTyxFQUNQLGlCQUFpQixDQUFDLEtBQUssQ0FDeEIsQ0FBQztZQUNKLENBQUMsQ0FBQztZQUVGLE1BQU0sbUJBQW1CLENBQ3ZCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsRUFDdEMsbUJBQW1CLEVBQ25CLGlCQUFpQixDQUNsQixDQUFDO1FBQ0osQ0FBQyxDQUFDO0tBMkJIO0lBekJTLHlCQUF5QixDQUFDLE1BQW1CO1FBQ25ELE1BQU0sYUFBYSxHQUNqQixNQUFNLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzdELG1CQUFtQixDQUFDO1FBRXRCLE9BQU87O1FBRUgsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSzs7O1FBRzNCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxJQUFJLEtBQUs7OztRQUc5QixNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxLQUFLOzs7UUFHNUIsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLOzs7UUFHckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7OztRQUd6QyxhQUFhO09BQ2QsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7K0dBcERVLGFBQWE7bUdBQWIsYUFBYSwrRkMvQjFCLCs3QkEwQkEsMkpESEksZUFBZSw4SkFDZix1QkFBdUIsOEVBQ3ZCLFFBQVEsNkNBQ1Isb0JBQW9CLHdGQUNwQixhQUFhLHlGQUNiLGNBQWM7OzRGQUdMLGFBQWE7a0JBZHpCLFNBQVM7K0JBQ0UsY0FBYyxjQUdaLElBQUksV0FDUDt3QkFDUCxlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsUUFBUTt3QkFDUixvQkFBb0I7d0JBQ3BCLGFBQWE7d0JBQ2IsY0FBYztxQkFDZjs7QUF5REgsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUFpQjtJQUM5QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ2hDLEtBQUssRUFBRSxPQUFPO1FBQ2QsU0FBUyxFQUFFLE1BQU07S0FDbEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25QaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvciwgVGFTZXJ2ZXJFcnJvclNlcnZpY2UgfSBmcm9tIFwiQHRhL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uQ29tcG9uZW50LFxuICBFeHBhbmRhYmxlVGV4dENvbXBvbmVudCxcbiAgTGF5b3V0TW9kYWxDb21wb25lbnQsXG4gIFRleHRDb21wb25lbnQsXG4gIFRpdGxlQ29tcG9uZW50LFxufSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBUYUJhc2VNb2RhbCwgY29weVRleHRUb0NsaXBib2FyZCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgRU5vdGlmaWNhdGlvbkNvZGUgfSBmcm9tIFwiLi4vLi4vZW51bVwiO1xuaW1wb3J0IHsgTEFaWV9TRVJWSUNFX1RPS0VOIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1lcnJvci1ib3hcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9lcnJvci1ib3guY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2Vycm9yLWJveC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBFeHBhbmRhYmxlVGV4dENvbXBvbmVudCxcbiAgICBKc29uUGlwZSxcbiAgICBMYXlvdXRNb2RhbENvbXBvbmVudCxcbiAgICBUZXh0Q29tcG9uZW50LFxuICAgIFRpdGxlQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckJveE1vZGFsIGV4dGVuZHMgVGFCYXNlTW9kYWwge1xuICBwcm90ZWN0ZWQgX25vdGlmaWNhdGlvblNlcnZpY2UgPSBpbmplY3QoTEFaWV9TRVJWSUNFX1RPS0VOKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9lcnJvclNlcnZpY2UgPSBpbmplY3QoVGFTZXJ2ZXJFcnJvclNlcnZpY2UpO1xuXG4gIHB1YmxpYyByZWFkb25seSBlcnJvckxpc3QgPSB0aGlzLl9lcnJvclNlcnZpY2Uubm90aWZpY2F0aW9ucztcblxuICBwdWJsaWMgY29weUNvbnRlbnQgPSBhc3luYyAoZW50aXR5OiBTZXJ2ZXJFcnJvcikgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3NOb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25TZXJ2aWNlLmFkZE5vdGlmaWNhdGlvbihcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgRU5vdGlmaWNhdGlvbkNvZGUuc3VjY2Vzc1xuICAgICAgKTtcbiAgICB9O1xuICAgIGNvbnN0IGVycm9yTm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uU2VydmljZS5hZGROb3RpZmljYXRpb24oXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIEVOb3RpZmljYXRpb25Db2RlLmVycm9yXG4gICAgICApO1xuICAgIH07XG5cbiAgICBhd2FpdCBjb3B5VGV4dFRvQ2xpcGJvYXJkKFxuICAgICAgdGhpcy5fZm9ybWF0RW50aXR5Rm9yQ2xpcGJvYXJkKGVudGl0eSksXG4gICAgICBzdWNjZXNzTm90aWZpY2F0aW9uLFxuICAgICAgZXJyb3JOb3RpZmljYXRpb25cbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgX2Zvcm1hdEVudGl0eUZvckNsaXBib2FyZChlbnRpdHk6IFNlcnZlckVycm9yKTogc3RyaW5nIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzID1cbiAgICAgIGVudGl0eS5lcnJvcnNNZXNzYWdlPy5tYXAoKG0pID0+IGAtICR7bS5tZXNzYWdlfWApLmpvaW4oXCJcXG5cIikgPz9cbiAgICAgIFwiTm8gZXJyb3IgbWVzc2FnZXNcIjtcblxuICAgIHJldHVybiBgXG4gICAgICDwn5S0IEVycm9yIE5hbWU6XG4gICAgICAke2VudGl0eS5lcnJvcj8ubmFtZSA/PyBcIk4vQVwifVxuICAgICAgXG4gICAgICDwn5KsIE1lc3NhZ2U6XG4gICAgICAke2VudGl0eS5lcnJvcj8ubWVzc2FnZSA/PyBcIk4vQVwifVxuICAgICAgXG4gICAgICDwn5OcIFN0YWNrOlxuICAgICAgJHtlbnRpdHkuZXJyb3I/LnN0YWNrID8/IFwiTi9BXCJ9XG4gICAgICBcbiAgICAgIPCfk4QgUXVlcnk6XG4gICAgICAke2VudGl0eS5xdWVyeSA/PyBcIk4vQVwifVxuICAgICAgXG4gICAgICDwn5OmIFZhcmlhYmxlczpcbiAgICAgICR7SlNPTi5zdHJpbmdpZnkoZW50aXR5LnZhcmlhYmxlcywgbnVsbCwgMil9XG4gICAgICBcbiAgICAgIPCfp74gRXJyb3IgTWVzc2FnZXM6XG4gICAgICAke2Vycm9yTWVzc2FnZXN9XG4gICAgICBgLnRyaW0oKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkVycm9yTW9kYWwoZGlhbG9nOiBNYXREaWFsb2cpIHtcbiAgcmV0dXJuIGRpYWxvZy5vcGVuKEVycm9yQm94TW9kYWwsIHtcbiAgICB3aWR0aDogXCI2MDBweFwiLFxuICAgIG1heEhlaWdodDogXCI4MHZoXCIsXG4gIH0pO1xufVxuIiwiPHRhLWxheW91dC1tb2RhbD5cbiAgPGRpdiBjbGFzcz1cImZsZXgtY29sdW1uXCI+XG4gICAgQGZvciAoZW50aXR5IG9mIHRoaXMuZXJyb3JMaXN0KCk7IHRyYWNrIGVudGl0eTsgbGV0IGkgPSAkaW5kZXgpIHtcbiAgICA8dGEtdGl0bGUgW2xldmVsXT1cIjNcIj57eyBlbnRpdHkuZXJyb3IubmFtZSB9fTwvdGEtdGl0bGU+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgIEBmb3IgKG1lc3NhZ2Ugb2YgZW50aXR5LmVycm9yc01lc3NhZ2U7IHRyYWNrIG1lc3NhZ2UpIHtcbiAgICAgICAgPHRhLXRleHQ+e3sgbWVzc2FnZS5tZXNzYWdlIH19PC90YS10ZXh0PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICA8dGEtdGV4dCBzaXplPVwic21cIj57eyBlbnRpdHkucXVlcnkgfX08L3RhLXRleHQ+XG4gICAgICAgIDx0YS10ZXh0IHNpemU9XCJzbVwiPnt7IGVudGl0eS52YXJpYWJsZXMgfCBqc29uIH19PC90YS10ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4dHJhXCI+XG4gICAgICA8dGEtdGV4dCBzaXplPVwic21cIiBbaXNCb2xkXT1cInRydWVcIj4ge3sgZW50aXR5LmVycm9yLm1lc3NhZ2UgfX08L3RhLXRleHQ+XG4gICAgICA8dGEtZXhwYW5kYWJsZS10ZXh0IHNpemU9XCJzbVwiIFtoZWlnaHRdPVwiMjBcIj57e1xuICAgICAgICBlbnRpdHkuZXJyb3Iuc3RhY2tcbiAgICAgIH19PC90YS1leHBhbmRhYmxlLXRleHQ+XG4gICAgPC9kaXY+XG4gICAgPHRhLWJ1dHRvbiBjbGFzcz1cIm1sLWFcIiAoYWN0aW9uKT1cInRoaXMuY29weUNvbnRlbnQoZW50aXR5KVwiPmNvcHk8L3RhLWJ1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwic2VwXCI+PC9kaXY+XG4gICAgfVxuICA8L2Rpdj5cbjwvdGEtbGF5b3V0LW1vZGFsPlxuIl19
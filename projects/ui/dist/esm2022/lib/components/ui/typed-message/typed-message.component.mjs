import { Component, input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { FontIconComponent } from "@ta/icons";
import { TaTranslationUI } from "../../../translation.service";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class TypedMessageComponent {
    get icon() {
        switch (this.type()) {
            case "danger":
                return "error_outline";
            case "success":
                return "check_circle_outline";
            case "info":
                return "help_outline";
            case "warning":
                return "warning_amber";
            default:
                return "";
        }
    }
    constructor() {
        this.text = input.required();
        this.type = input.required();
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TypedMessageComponent, isStandalone: true, selector: "ta-typed-message", inputs: { text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: true, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "<div class=\"alert alert-{{ this.type() }}\" role=\"alert\">\n  <ta-font-icon [type]=\"'md'\" [name]=\"this.icon\"></ta-font-icon>\n  <span class=\"text\">{{ this.text() | translate }}</span>\n</div>\n", styles: [".alert{border-radius:8px;display:inline-flex;gap:var(--ta-space-xs);border:none;padding:var(--ta-space-xs)}.text{margin:auto}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-typed-message", standalone: true, imports: [FontIconComponent, TranslateModule], template: "<div class=\"alert alert-{{ this.type() }}\" role=\"alert\">\n  <ta-font-icon [type]=\"'md'\" [name]=\"this.icon\"></ta-font-icon>\n  <span class=\"text\">{{ this.text() | translate }}</span>\n</div>\n", styles: [".alert{border-radius:8px;display:inline-flex;gap:var(--ta-space-xs);border:none;padding:var(--ta-space-xs)}.text{margin:auto}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWQtbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdHlwZWQtbWVzc2FnZS90eXBlZC1tZXNzYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90eXBlZC1tZXNzYWdlL3R5cGVkLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUc5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7OztBQVMvRCxNQUFNLE9BQU8scUJBQXFCO0lBSWhDLElBQUksSUFBSTtRQUNOLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7WUFDcEIsS0FBSyxRQUFRO2dCQUNYLE9BQU8sZUFBZSxDQUFDO1lBQ3pCLEtBQUssU0FBUztnQkFDWixPQUFPLHNCQUFzQixDQUFDO1lBQ2hDLEtBQUssTUFBTTtnQkFDVCxPQUFPLGNBQWMsQ0FBQztZQUN4QixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxlQUFlLENBQUM7WUFDekI7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVEO1FBbEJBLFNBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFVLENBQUM7UUFDaEMsU0FBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQWdCLENBQUM7UUFrQnBDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOytHQXJCVSxxQkFBcUI7bUdBQXJCLHFCQUFxQixnVUNoQmxDLDJNQUlBLHlMRFVZLGlCQUFpQixrRkFBRSxlQUFlOzs0RkFFakMscUJBQXFCO2tCQVBqQyxTQUFTOytCQUNFLGtCQUFrQixjQUdoQixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGlucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBNZXNzYWdlTGV2ZWwgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gXCIuLi8uLi8uLi90cmFuc2xhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS10eXBlZC1tZXNzYWdlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdHlwZWQtbWVzc2FnZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdHlwZWQtbWVzc2FnZS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0ZvbnRJY29uQ29tcG9uZW50LCBUcmFuc2xhdGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUeXBlZE1lc3NhZ2VDb21wb25lbnQge1xuICB0ZXh0ID0gaW5wdXQucmVxdWlyZWQ8c3RyaW5nPigpO1xuICB0eXBlID0gaW5wdXQucmVxdWlyZWQ8TWVzc2FnZUxldmVsPigpO1xuXG4gIGdldCBpY29uKCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKCkpIHtcbiAgICAgIGNhc2UgXCJkYW5nZXJcIjpcbiAgICAgICAgcmV0dXJuIFwiZXJyb3Jfb3V0bGluZVwiO1xuICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcbiAgICAgICAgcmV0dXJuIFwiY2hlY2tfY2lyY2xlX291dGxpbmVcIjtcbiAgICAgIGNhc2UgXCJpbmZvXCI6XG4gICAgICAgIHJldHVybiBcImhlbHBfb3V0bGluZVwiO1xuICAgICAgY2FzZSBcIndhcm5pbmdcIjpcbiAgICAgICAgcmV0dXJuIFwid2FybmluZ19hbWJlclwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVGFUcmFuc2xhdGlvblVJLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC17eyB0aGlzLnR5cGUoKSB9fVwiIHJvbGU9XCJhbGVydFwiPlxuICA8dGEtZm9udC1pY29uIFt0eXBlXT1cIidtZCdcIiBbbmFtZV09XCJ0aGlzLmljb25cIj48L3RhLWZvbnQtaWNvbj5cbiAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+e3sgdGhpcy50ZXh0KCkgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG48L2Rpdj5cbiJdfQ==
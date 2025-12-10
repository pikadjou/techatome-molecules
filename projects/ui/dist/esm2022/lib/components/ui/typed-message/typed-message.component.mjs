import { Component, Input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { FontIconComponent } from "@ta/icons";
import { TaTranslationUI } from "../../../translation.service";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class TypedMessageComponent {
    get icon() {
        switch (this.type) {
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
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TypedMessageComponent, isStandalone: true, selector: "ta-typed-message", inputs: { text: "text", type: "type" }, ngImport: i0, template: "<div class=\"alert alert-{{ this.type }}\" role=\"alert\">\n  <ta-font-icon [type]=\"'md'\">{{ this.icon }}</ta-font-icon>\n  <span class=\"text\">{{ this.text | translate }}</span>\n</div>\n", styles: [".alert{border-radius:8px;display:inline-flex;gap:var(--ta-space-xs);border:none;padding:var(--ta-space-xs)}.text{margin:auto}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-typed-message", standalone: true, imports: [FontIconComponent, TranslateModule], template: "<div class=\"alert alert-{{ this.type }}\" role=\"alert\">\n  <ta-font-icon [type]=\"'md'\">{{ this.icon }}</ta-font-icon>\n  <span class=\"text\">{{ this.text | translate }}</span>\n</div>\n", styles: [".alert{border-radius:8px;display:inline-flex;gap:var(--ta-space-xs);border:none;padding:var(--ta-space-xs)}.text{margin:auto}\n"] }]
        }], ctorParameters: () => [], propDecorators: { text: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWQtbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdHlwZWQtbWVzc2FnZS90eXBlZC1tZXNzYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90eXBlZC1tZXNzYWdlL3R5cGVkLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUc5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7OztBQVMvRCxNQUFNLE9BQU8scUJBQXFCO0lBSWhDLElBQUksSUFBSTtRQUNOLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLEtBQUssUUFBUTtnQkFDWCxPQUFPLGVBQWUsQ0FBQztZQUN6QixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxzQkFBc0IsQ0FBQztZQUNoQyxLQUFLLE1BQU07Z0JBQ1QsT0FBTyxjQUFjLENBQUM7WUFDeEIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sZUFBZSxDQUFDO1lBQ3pCO2dCQUNFLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRDtRQUNFLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOytHQXJCVSxxQkFBcUI7bUdBQXJCLHFCQUFxQixvSENoQmxDLGlNQUlBLHlMRFVZLGlCQUFpQixrRkFBRSxlQUFlOzs0RkFFakMscUJBQXFCO2tCQVBqQyxTQUFTOytCQUNFLGtCQUFrQixjQUdoQixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7d0RBR3BDLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBNZXNzYWdlTGV2ZWwgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gXCIuLi8uLi8uLi90cmFuc2xhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS10eXBlZC1tZXNzYWdlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdHlwZWQtbWVzc2FnZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdHlwZWQtbWVzc2FnZS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0ZvbnRJY29uQ29tcG9uZW50LCBUcmFuc2xhdGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUeXBlZE1lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSB0ZXh0ITogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlITogTWVzc2FnZUxldmVsO1xuXG4gIGdldCBpY29uKCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlIFwiZGFuZ2VyXCI6XG4gICAgICAgIHJldHVybiBcImVycm9yX291dGxpbmVcIjtcbiAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XG4gICAgICAgIHJldHVybiBcImNoZWNrX2NpcmNsZV9vdXRsaW5lXCI7XG4gICAgICBjYXNlIFwiaW5mb1wiOlxuICAgICAgICByZXR1cm4gXCJoZWxwX291dGxpbmVcIjtcbiAgICAgIGNhc2UgXCJ3YXJuaW5nXCI6XG4gICAgICAgIHJldHVybiBcIndhcm5pbmdfYW1iZXJcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQte3sgdGhpcy50eXBlIH19XCIgcm9sZT1cImFsZXJ0XCI+XG4gIDx0YS1mb250LWljb24gW3R5cGVdPVwiJ21kJ1wiPnt7IHRoaXMuaWNvbiB9fTwvdGEtZm9udC1pY29uPlxuICA8c3BhbiBjbGFzcz1cInRleHRcIj57eyB0aGlzLnRleHQgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG48L2Rpdj5cbiJdfQ==
import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { FontIconComponent, LocalIconComponent } from "@ta/icons";
import { getFontIcon, isFontIcon, isLocalIcon } from "@ta/icons";
import { TaTranslationUI } from "../../../translation.service";
import { TypedMessageComponent } from "../typed-message/typed-message.component";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class PictureInfoMessageComponent {
    get displayedText() {
        return this.text ?? "";
    }
    isFontIcon(icon) {
        return isFontIcon(icon);
    }
    getFontIcon(icon) {
        return getFontIcon(icon);
    }
    isLocalIcon(icon) {
        return isLocalIcon(icon);
    }
    constructor() {
        this.type = "info";
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PictureInfoMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: PictureInfoMessageComponent, isStandalone: true, selector: "ta-picture-info-message", inputs: { icon: "icon", iconSize: "iconSize", text: "text", type: "type" }, ngImport: i0, template: "@if (this.icon) {\n<div class=\"card\">\n  @if (this.isLocalIcon(this.icon)) {\n  <ta-local-icon\n    [type]=\"this.icon\"\n    [size]=\"this.iconSize ?? 'md'\"\n  ></ta-local-icon>\n  } @else if (this.isFontIcon(this.icon)) {\n  <ta-font-icon\n    class=\"font-icon\"\n    [name]=\"this.getFontIcon(this.icon)\"\n    [type]=\"this.iconSize ?? 'md'\"\n  ></ta-font-icon>\n  }\n\n  <div class=\"pt-space-xs\">{{ this.displayedText | translate }}</div>\n</div>\n} @else {\n<ta-typed-message\n  [text]=\"this.displayedText\"\n  [type]=\"this.type ?? 'info'\"\n></ta-typed-message>\n}\n", styles: [".card{padding:var(--ta-space-sm);text-align:center}p{padding-top:var(--ta-space-sm)}ta-font-icon{color:var(--ta-brand-400)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: TypedMessageComponent, selector: "ta-typed-message", inputs: ["text", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PictureInfoMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-picture-info-message", standalone: true, imports: [
                        NgIf,
                        FontIconComponent,
                        LocalIconComponent,
                        TranslateModule,
                        TypedMessageComponent,
                    ], template: "@if (this.icon) {\n<div class=\"card\">\n  @if (this.isLocalIcon(this.icon)) {\n  <ta-local-icon\n    [type]=\"this.icon\"\n    [size]=\"this.iconSize ?? 'md'\"\n  ></ta-local-icon>\n  } @else if (this.isFontIcon(this.icon)) {\n  <ta-font-icon\n    class=\"font-icon\"\n    [name]=\"this.getFontIcon(this.icon)\"\n    [type]=\"this.iconSize ?? 'md'\"\n  ></ta-font-icon>\n  }\n\n  <div class=\"pt-space-xs\">{{ this.displayedText | translate }}</div>\n</div>\n} @else {\n<ta-typed-message\n  [text]=\"this.displayedText\"\n  [type]=\"this.type ?? 'info'\"\n></ta-typed-message>\n}\n", styles: [".card{padding:var(--ta-space-sm);text-align:center}p{padding-top:var(--ta-space-sm)}ta-font-icon{color:var(--ta-brand-400)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], text: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljdHVyZS1pbmZvLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3BpY3R1cmUtaW5mby1tZXNzYWdlL3BpY3R1cmUtaW5mby1tZXNzYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9waWN0dXJlLWluZm8tbWVzc2FnZS9waWN0dXJlLWluZm8tbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7QUFlakYsTUFBTSxPQUFPLDJCQUEyQjtJQU10QyxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxVQUFVLENBQUMsSUFBeUI7UUFDekMsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxJQUF5QjtRQUMxQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sV0FBVyxDQUFDLElBQXlCO1FBQzFDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDtRQWxCUyxTQUFJLEdBQWtCLE1BQU0sQ0FBQztRQW1CcEMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7K0dBeEJVLDJCQUEyQjttR0FBM0IsMkJBQTJCLCtKQzNCeEMsd2tCQXVCQSx1TERGSSxpQkFBaUIsbUZBQ2pCLGtCQUFrQiwrRkFDbEIsZUFBZSw0RkFDZixxQkFBcUI7OzRGQUdaLDJCQUEyQjtrQkFidkMsU0FBUzsrQkFDRSx5QkFBeUIsY0FHdkIsSUFBSSxXQUNQO3dCQUNQLElBQUk7d0JBQ0osaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YscUJBQXFCO3FCQUN0Qjt3REFHUSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCwgTG9jYWxJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgZ2V0Rm9udEljb24sIGlzRm9udEljb24sIGlzTG9jYWxJY29uIH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVGFJY29uVHlwZSB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tIFwiQHRhL3N0eWxlc1wiO1xuaW1wb3J0IHsgTWVzc2FnZUxldmVsIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uVUkgfSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgVHlwZWRNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4uL3R5cGVkLW1lc3NhZ2UvdHlwZWQtbWVzc2FnZS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLXBpY3R1cmUtaW5mby1tZXNzYWdlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGljdHVyZS1pbmZvLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3BpY3R1cmUtaW5mby1tZXNzYWdlLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTmdJZixcbiAgICBGb250SWNvbkNvbXBvbmVudCxcbiAgICBMb2NhbEljb25Db21wb25lbnQsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIFR5cGVkTWVzc2FnZUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGljdHVyZUluZm9NZXNzYWdlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWNvbj86IFRhSWNvblR5cGUgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25TaXplPzogVGFTaXplcyB8IFwieGxcIjtcbiAgQElucHV0KCkgdGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgdHlwZT86IE1lc3NhZ2VMZXZlbCA9IFwiaW5mb1wiO1xuXG4gIGdldCBkaXNwbGF5ZWRUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnRleHQgPz8gXCJcIjtcbiAgfVxuXG4gIHB1YmxpYyBpc0ZvbnRJY29uKGljb246IFRhSWNvblR5cGUgfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNGb250SWNvbihpY29uKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGb250SWNvbihpY29uOiBUYUljb25UeXBlIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0Rm9udEljb24oaWNvbik7XG4gIH1cblxuICBwdWJsaWMgaXNMb2NhbEljb24oaWNvbjogVGFJY29uVHlwZSB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0xvY2FsSWNvbihpY29uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuaWNvbikge1xuPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgQGlmICh0aGlzLmlzTG9jYWxJY29uKHRoaXMuaWNvbikpIHtcbiAgPHRhLWxvY2FsLWljb25cbiAgICBbdHlwZV09XCJ0aGlzLmljb25cIlxuICAgIFtzaXplXT1cInRoaXMuaWNvblNpemUgPz8gJ21kJ1wiXG4gID48L3RhLWxvY2FsLWljb24+XG4gIH0gQGVsc2UgaWYgKHRoaXMuaXNGb250SWNvbih0aGlzLmljb24pKSB7XG4gIDx0YS1mb250LWljb25cbiAgICBjbGFzcz1cImZvbnQtaWNvblwiXG4gICAgW25hbWVdPVwidGhpcy5nZXRGb250SWNvbih0aGlzLmljb24pXCJcbiAgICBbdHlwZV09XCJ0aGlzLmljb25TaXplID8/ICdtZCdcIlxuICA+PC90YS1mb250LWljb24+XG4gIH1cblxuICA8ZGl2IGNsYXNzPVwicHQtc3BhY2UteHNcIj57eyB0aGlzLmRpc3BsYXllZFRleHQgfCB0cmFuc2xhdGUgfX08L2Rpdj5cbjwvZGl2PlxufSBAZWxzZSB7XG48dGEtdHlwZWQtbWVzc2FnZVxuICBbdGV4dF09XCJ0aGlzLmRpc3BsYXllZFRleHRcIlxuICBbdHlwZV09XCJ0aGlzLnR5cGUgPz8gJ2luZm8nXCJcbj48L3RhLXR5cGVkLW1lc3NhZ2U+XG59XG4iXX0=
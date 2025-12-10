import { Component, Input } from "@angular/core";
import { PictureInfoMessageComponent } from "../../../components/ui/picture-info-message/picture-info-message.component";
import { TaTranslationUI } from "../../../translation.service";
import * as i0 from "@angular/core";
export class EmptyComponent {
    constructor() {
        this.isEmpty = true;
        this.isLight = true;
        this.showMessage = true;
        this.text = "ui.container.empty.light-message";
        this.type = "info";
        this.icon = "ghost";
        this.iconSize = "lg";
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EmptyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EmptyComponent, isStandalone: true, selector: "ta-empty", inputs: { isEmpty: "isEmpty", isLight: "isLight", showMessage: "showMessage", text: "text", type: "type", icon: "icon", iconSize: "iconSize" }, ngImport: i0, template: "@if (this.isEmpty) {\n<div class=\"empty-container\">\n  @if (this.showMessage) { @if (this.isLight) {\n  <ta-picture-info-message [type]=\"this.type\" [text]=\"this.text\">\n  </ta-picture-info-message>\n  } @else {\n  <ta-picture-info-message\n    [icon]=\"this.icon\"\n    [iconSize]=\"this.iconSize\"\n    [type]=\"this.type\"\n    [text]=\"this.text\"\n  >\n  </ta-picture-info-message>\n  } }\n</div>\n} @else {\n<ng-content></ng-content>\n}\n", styles: [":host{display:flex;flex:1 1 100%}.empty-container{margin:var(--ta-space-sm) auto;text-align:center}\n"], dependencies: [{ kind: "component", type: PictureInfoMessageComponent, selector: "ta-picture-info-message", inputs: ["icon", "iconSize", "text", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EmptyComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-empty", standalone: true, imports: [PictureInfoMessageComponent], template: "@if (this.isEmpty) {\n<div class=\"empty-container\">\n  @if (this.showMessage) { @if (this.isLight) {\n  <ta-picture-info-message [type]=\"this.type\" [text]=\"this.text\">\n  </ta-picture-info-message>\n  } @else {\n  <ta-picture-info-message\n    [icon]=\"this.icon\"\n    [iconSize]=\"this.iconSize\"\n    [type]=\"this.type\"\n    [text]=\"this.text\"\n  >\n  </ta-picture-info-message>\n  } }\n</div>\n} @else {\n<ng-content></ng-content>\n}\n", styles: [":host{display:flex;flex:1 1 100%}.empty-container{margin:var(--ta-space-sm) auto;text-align:center}\n"] }]
        }], ctorParameters: () => [], propDecorators: { isEmpty: [{
                type: Input
            }], isLight: [{
                type: Input
            }], showMessage: [{
                type: Input
            }], text: [{
                type: Input
            }], type: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci9lbXB0eS9lbXB0eS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL2VtcHR5L2VtcHR5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWpELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFTL0QsTUFBTSxPQUFPLGNBQWM7SUFXekI7UUFWUyxZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsU0FBSSxHQUFZLGtDQUFrQyxDQUFDO1FBQ25ELFNBQUksR0FBa0IsTUFBTSxDQUFDO1FBRTdCLFNBQUksR0FBeUIsT0FBTyxDQUFDO1FBQ3JDLGFBQVEsR0FBb0IsSUFBSSxDQUFDO1FBR3hDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOytHQWJVLGNBQWM7bUdBQWQsY0FBYyxvTkNoQjNCLG1jQWtCQSwrSkRKWSwyQkFBMkI7OzRGQUUxQixjQUFjO2tCQVAxQixTQUFTOytCQUNFLFVBQVUsY0FHUixJQUFJLFdBQ1AsQ0FBQywyQkFBMkIsQ0FBQzt3REFHN0IsT0FBTztzQkFBZixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVGFJY29uVHlwZSB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tIFwiQHRhL3N0eWxlc1wiO1xuaW1wb3J0IHsgTWVzc2FnZUxldmVsIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBQaWN0dXJlSW5mb01lc3NhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91aS9waWN0dXJlLWluZm8tbWVzc2FnZS9waWN0dXJlLWluZm8tbWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gXCIuLi8uLi8uLi90cmFuc2xhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1lbXB0eVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2VtcHR5LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9lbXB0eS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1BpY3R1cmVJbmZvTWVzc2FnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNFbXB0eTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzTGlnaHQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzaG93TWVzc2FnZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgdGV4dD86IHN0cmluZyA9IFwidWkuY29udGFpbmVyLmVtcHR5LmxpZ2h0LW1lc3NhZ2VcIjtcbiAgQElucHV0KCkgdHlwZT86IE1lc3NhZ2VMZXZlbCA9IFwiaW5mb1wiO1xuXG4gIEBJbnB1dCgpIGljb24/OiBUYUljb25UeXBlIHwgc3RyaW5nID0gXCJnaG9zdFwiO1xuICBASW5wdXQoKSBpY29uU2l6ZT86IFRhU2l6ZXMgfCBcInhsXCIgPSBcImxnXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVGFUcmFuc2xhdGlvblVJLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiIsIkBpZiAodGhpcy5pc0VtcHR5KSB7XG48ZGl2IGNsYXNzPVwiZW1wdHktY29udGFpbmVyXCI+XG4gIEBpZiAodGhpcy5zaG93TWVzc2FnZSkgeyBAaWYgKHRoaXMuaXNMaWdodCkge1xuICA8dGEtcGljdHVyZS1pbmZvLW1lc3NhZ2UgW3R5cGVdPVwidGhpcy50eXBlXCIgW3RleHRdPVwidGhpcy50ZXh0XCI+XG4gIDwvdGEtcGljdHVyZS1pbmZvLW1lc3NhZ2U+XG4gIH0gQGVsc2Uge1xuICA8dGEtcGljdHVyZS1pbmZvLW1lc3NhZ2VcbiAgICBbaWNvbl09XCJ0aGlzLmljb25cIlxuICAgIFtpY29uU2l6ZV09XCJ0aGlzLmljb25TaXplXCJcbiAgICBbdHlwZV09XCJ0aGlzLnR5cGVcIlxuICAgIFt0ZXh0XT1cInRoaXMudGV4dFwiXG4gID5cbiAgPC90YS1waWN0dXJlLWluZm8tbWVzc2FnZT5cbiAgfSB9XG48L2Rpdj5cbn0gQGVsc2Uge1xuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxufVxuIl19
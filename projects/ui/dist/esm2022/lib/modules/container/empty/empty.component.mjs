import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PictureInfoMessageComponent } from '../../../components/ui/picture-info-message/picture-info-message.component';
import * as i0 from "@angular/core";
export class EmptyComponent {
    constructor() {
        this.isEmpty = true;
        this.isLight = true;
        this.showMessage = true;
        this.text = 'container.empty.light-message';
        this.type = 'info';
        this.icon = 'ghost';
        this.iconSize = 'lg';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EmptyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EmptyComponent, isStandalone: true, selector: "ta-empty", inputs: { isEmpty: "isEmpty", isLight: "isLight", showMessage: "showMessage", text: "text", type: "type", icon: "icon", iconSize: "iconSize" }, ngImport: i0, template: "@if (this.isEmpty) {\n  <div class=\"empty-container\">\n    @if (this.showMessage) {\n      @if (this.isLight) {\n        <ta-picture-info-message [type]=\"this.type\" [text]=\"this.text\"> </ta-picture-info-message>\n      } @else {\n        <ta-picture-info-message [icon]=\"this.icon\" [iconSize]=\"this.iconSize\" [type]=\"this.type\" [text]=\"this.text\">\n        </ta-picture-info-message>\n      }\n    }\n  </div>\n} @else {\n  <ng-content></ng-content>\n}\n", styles: [":host{display:flex;flex:1 1 100%}.empty-container{margin:var(--ta-space-sm) auto;text-align:center}\n"], dependencies: [{ kind: "component", type: PictureInfoMessageComponent, selector: "ta-picture-info-message", inputs: ["icon", "iconSize", "text", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EmptyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-empty', standalone: true, imports: [NgIf, PictureInfoMessageComponent], template: "@if (this.isEmpty) {\n  <div class=\"empty-container\">\n    @if (this.showMessage) {\n      @if (this.isLight) {\n        <ta-picture-info-message [type]=\"this.type\" [text]=\"this.text\"> </ta-picture-info-message>\n      } @else {\n        <ta-picture-info-message [icon]=\"this.icon\" [iconSize]=\"this.iconSize\" [type]=\"this.type\" [text]=\"this.text\">\n        </ta-picture-info-message>\n      }\n    }\n  </div>\n} @else {\n  <ng-content></ng-content>\n}\n", styles: [":host{display:flex;flex:1 1 100%}.empty-container{margin:var(--ta-space-sm) auto;text-align:center}\n"] }]
        }], propDecorators: { isEmpty: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci9lbXB0eS9lbXB0eS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL2VtcHR5L2VtcHR5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1qRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQzs7QUFTekgsTUFBTSxPQUFPLGNBQWM7SUFQM0I7UUFRVyxZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsU0FBSSxHQUFZLCtCQUErQixDQUFDO1FBQ2hELFNBQUksR0FBa0IsTUFBTSxDQUFDO1FBRTdCLFNBQUksR0FBeUIsT0FBTyxDQUFDO1FBQ3JDLGFBQVEsR0FBb0IsSUFBSSxDQUFDO0tBQzNDOytHQVZZLGNBQWM7bUdBQWQsY0FBYyxvTkNoQjNCLHNkQWNBLCtKREFrQiwyQkFBMkI7OzRGQUVoQyxjQUFjO2tCQVAxQixTQUFTOytCQUNFLFVBQVUsY0FHUixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsMkJBQTJCLENBQUM7OEJBR25DLE9BQU87c0JBQWYsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhSWNvblR5cGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVGFTaXplcyB9IGZyb20gJ0B0YS9zdHlsZXMnO1xuaW1wb3J0IHsgTWVzc2FnZUxldmVsIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgUGljdHVyZUluZm9NZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy91aS9waWN0dXJlLWluZm8tbWVzc2FnZS9waWN0dXJlLWluZm8tbWVzc2FnZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1lbXB0eScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbXB0eS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VtcHR5LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBQaWN0dXJlSW5mb01lc3NhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBFbXB0eUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzRW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc0xpZ2h0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd01lc3NhZ2U6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHRleHQ/OiBzdHJpbmcgPSAnY29udGFpbmVyLmVtcHR5LmxpZ2h0LW1lc3NhZ2UnO1xuICBASW5wdXQoKSB0eXBlPzogTWVzc2FnZUxldmVsID0gJ2luZm8nO1xuXG4gIEBJbnB1dCgpIGljb24/OiBUYUljb25UeXBlIHwgc3RyaW5nID0gJ2dob3N0JztcbiAgQElucHV0KCkgaWNvblNpemU/OiBUYVNpemVzIHwgJ3hsJyA9ICdsZyc7XG59XG4iLCJAaWYgKHRoaXMuaXNFbXB0eSkge1xuICA8ZGl2IGNsYXNzPVwiZW1wdHktY29udGFpbmVyXCI+XG4gICAgQGlmICh0aGlzLnNob3dNZXNzYWdlKSB7XG4gICAgICBAaWYgKHRoaXMuaXNMaWdodCkge1xuICAgICAgICA8dGEtcGljdHVyZS1pbmZvLW1lc3NhZ2UgW3R5cGVdPVwidGhpcy50eXBlXCIgW3RleHRdPVwidGhpcy50ZXh0XCI+IDwvdGEtcGljdHVyZS1pbmZvLW1lc3NhZ2U+XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgPHRhLXBpY3R1cmUtaW5mby1tZXNzYWdlIFtpY29uXT1cInRoaXMuaWNvblwiIFtpY29uU2l6ZV09XCJ0aGlzLmljb25TaXplXCIgW3R5cGVdPVwidGhpcy50eXBlXCIgW3RleHRdPVwidGhpcy50ZXh0XCI+XG4gICAgICAgIDwvdGEtcGljdHVyZS1pbmZvLW1lc3NhZ2U+XG4gICAgICB9XG4gICAgfVxuICA8L2Rpdj5cbn0gQGVsc2Uge1xuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG59XG4iXX0=
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EmptyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: EmptyComponent, isStandalone: true, selector: "ta-empty", inputs: { isEmpty: "isEmpty", isLight: "isLight", showMessage: "showMessage", text: "text", type: "type", icon: "icon", iconSize: "iconSize" }, ngImport: i0, template: "@if (this.isEmpty) {\n  <div class=\"empty-container\">\n    @if (this.showMessage) {\n      @if (this.isLight) {\n        <ta-picture-info-message [type]=\"this.type\" [text]=\"this.text\"> </ta-picture-info-message>\n      } @else {\n        <ta-picture-info-message [icon]=\"this.icon\" [iconSize]=\"this.iconSize\" [type]=\"this.type\" [text]=\"this.text\">\n        </ta-picture-info-message>\n      }\n    }\n  </div>\n} @else {\n  <ng-content></ng-content>\n}\n", styles: [".empty-container{margin:var(--ta-space-sm) auto;text-align:center}\n"], dependencies: [{ kind: "component", type: PictureInfoMessageComponent, selector: "ta-picture-info-message", inputs: ["icon", "iconSize", "text", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EmptyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-empty', standalone: true, imports: [NgIf, PictureInfoMessageComponent], template: "@if (this.isEmpty) {\n  <div class=\"empty-container\">\n    @if (this.showMessage) {\n      @if (this.isLight) {\n        <ta-picture-info-message [type]=\"this.type\" [text]=\"this.text\"> </ta-picture-info-message>\n      } @else {\n        <ta-picture-info-message [icon]=\"this.icon\" [iconSize]=\"this.iconSize\" [type]=\"this.type\" [text]=\"this.text\">\n        </ta-picture-info-message>\n      }\n    }\n  </div>\n} @else {\n  <ng-content></ng-content>\n}\n", styles: [".empty-container{margin:var(--ta-space-sm) auto;text-align:center}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci9lbXB0eS9lbXB0eS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL2VtcHR5L2VtcHR5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1qRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQzs7QUFTekgsTUFBTSxPQUFPLGNBQWM7SUFQM0I7UUFRVyxZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsU0FBSSxHQUFZLCtCQUErQixDQUFDO1FBQ2hELFNBQUksR0FBa0IsTUFBTSxDQUFDO1FBRTdCLFNBQUksR0FBMEIsT0FBTyxDQUFDO1FBQ3RDLGFBQVEsR0FBb0IsSUFBSSxDQUFDO0tBQzNDOytHQVZZLGNBQWM7bUdBQWQsY0FBYyxvTkNoQjNCLHNkQWNBLDhIREFrQiwyQkFBMkI7OzRGQUVoQyxjQUFjO2tCQVAxQixTQUFTOytCQUNFLFVBQVUsY0FHUixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsMkJBQTJCLENBQUM7OEJBR25DLE9BQU87c0JBQWYsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbUljb25UeXBlIH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcbmltcG9ydCB7IE1lc3NhZ2VMZXZlbCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFBpY3R1cmVJbmZvTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdWkvcGljdHVyZS1pbmZvLW1lc3NhZ2UvcGljdHVyZS1pbmZvLW1lc3NhZ2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtZW1wdHknLFxuICB0ZW1wbGF0ZVVybDogJy4vZW1wdHkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lbXB0eS5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgUGljdHVyZUluZm9NZXNzYWdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRW1wdHlDb21wb25lbnQge1xuICBASW5wdXQoKSBpc0VtcHR5OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNMaWdodDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dNZXNzYWdlOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSB0ZXh0Pzogc3RyaW5nID0gJ2NvbnRhaW5lci5lbXB0eS5saWdodC1tZXNzYWdlJztcbiAgQElucHV0KCkgdHlwZT86IE1lc3NhZ2VMZXZlbCA9ICdpbmZvJztcblxuICBASW5wdXQoKSBpY29uPzogQ2FtSWNvblR5cGUgfCBzdHJpbmcgPSAnZ2hvc3QnO1xuICBASW5wdXQoKSBpY29uU2l6ZT86IFRhU2l6ZXMgfCAneGwnID0gJ2xnJztcbn1cbiIsIkBpZiAodGhpcy5pc0VtcHR5KSB7XG4gIDxkaXYgY2xhc3M9XCJlbXB0eS1jb250YWluZXJcIj5cbiAgICBAaWYgKHRoaXMuc2hvd01lc3NhZ2UpIHtcbiAgICAgIEBpZiAodGhpcy5pc0xpZ2h0KSB7XG4gICAgICAgIDx0YS1waWN0dXJlLWluZm8tbWVzc2FnZSBbdHlwZV09XCJ0aGlzLnR5cGVcIiBbdGV4dF09XCJ0aGlzLnRleHRcIj4gPC90YS1waWN0dXJlLWluZm8tbWVzc2FnZT5cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICA8dGEtcGljdHVyZS1pbmZvLW1lc3NhZ2UgW2ljb25dPVwidGhpcy5pY29uXCIgW2ljb25TaXplXT1cInRoaXMuaWNvblNpemVcIiBbdHlwZV09XCJ0aGlzLnR5cGVcIiBbdGV4dF09XCJ0aGlzLnRleHRcIj5cbiAgICAgICAgPC90YS1waWN0dXJlLWluZm8tbWVzc2FnZT5cbiAgICAgIH1cbiAgICB9XG4gIDwvZGl2PlxufSBAZWxzZSB7XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbn1cbiJdfQ==
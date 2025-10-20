import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BulletComponent } from '../bullet/bullet.component';
import * as i0 from "@angular/core";
export class NewComponent {
    constructor() {
        this.visible = false;
        this.isRelative = false;
        this.size = 'md';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: NewComponent, isStandalone: true, selector: "ta-new", inputs: { visible: "visible", isRelative: "isRelative", size: "size" }, ngImport: i0, template: "@if (this.visible) {\r\n  <div class=\"bullet\" [class.is-relative]=\"this.isRelative\" [class.is-absolute]=\"!this.isRelative\" [class]=\"this.size\">\r\n    <ta-bullet type=\"new\" [size]=\"this.size\"></ta-bullet>\r\n  </div>\r\n}\r\n", styles: [".bullet.is-relative{position:relative}.bullet.is-absolute{position:absolute}.bullet.xs.is-absolute{top:0;right:0}.bullet.sm.is-absolute{top:-2px;right:-2px}.bullet.md.is-absolute{top:-5px;right:-5px}.bullet.lg.is-absolute{top:-8px;right:-8px}\n"], dependencies: [{ kind: "component", type: BulletComponent, selector: "ta-bullet", inputs: ["size", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-new', standalone: true, imports: [NgIf, BulletComponent], template: "@if (this.visible) {\r\n  <div class=\"bullet\" [class.is-relative]=\"this.isRelative\" [class.is-absolute]=\"!this.isRelative\" [class]=\"this.size\">\r\n    <ta-bullet type=\"new\" [size]=\"this.size\"></ta-bullet>\r\n  </div>\r\n}\r\n", styles: [".bullet.is-relative{position:relative}.bullet.is-absolute{position:absolute}.bullet.xs.is-absolute{top:0;right:0}.bullet.sm.is-absolute{top:-2px;right:-2px}.bullet.md.is-absolute{top:-5px;right:-5px}.bullet.lg.is-absolute{top:-8px;right:-8px}\n"] }]
        }], propDecorators: { visible: [{
                type: Input
            }], isRelative: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9uZXcvbmV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9uZXcvbmV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBUzdELE1BQU0sT0FBTyxZQUFZO0lBUHpCO1FBU0UsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUd6QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLFNBQUksR0FBWSxJQUFJLENBQUM7S0FDdEI7K0dBVFksWUFBWTttR0FBWixZQUFZLDBJQ2R6QiwrT0FLQSw4U0RPa0IsZUFBZTs7NEZBRXBCLFlBQVk7a0JBUHhCLFNBQVM7K0JBQ0UsUUFBUSxjQUdOLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxlQUFlLENBQUM7OEJBSWhDLE9BQU87c0JBRE4sS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcblxuaW1wb3J0IHsgQnVsbGV0Q29tcG9uZW50IH0gZnJvbSAnLi4vYnVsbGV0L2J1bGxldC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1uZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmV3LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBCdWxsZXRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOZXdDb21wb25lbnQge1xuICBASW5wdXQoKVxuICB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaXNSZWxhdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNpemU6IFRhU2l6ZXMgPSAnbWQnO1xufVxuIiwiQGlmICh0aGlzLnZpc2libGUpIHtcclxuICA8ZGl2IGNsYXNzPVwiYnVsbGV0XCIgW2NsYXNzLmlzLXJlbGF0aXZlXT1cInRoaXMuaXNSZWxhdGl2ZVwiIFtjbGFzcy5pcy1hYnNvbHV0ZV09XCIhdGhpcy5pc1JlbGF0aXZlXCIgW2NsYXNzXT1cInRoaXMuc2l6ZVwiPlxyXG4gICAgPHRhLWJ1bGxldCB0eXBlPVwibmV3XCIgW3NpemVdPVwidGhpcy5zaXplXCI+PC90YS1idWxsZXQ+XHJcbiAgPC9kaXY+XHJcbn1cclxuIl19
import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { BulletComponent } from "../bullet/bullet.component";
import * as i0 from "@angular/core";
export class NewComponent {
    constructor() {
        this.visible = false;
        this.isRelative = false;
        this.size = "md";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: NewComponent, isStandalone: true, selector: "ta-new", inputs: { visible: "visible", isRelative: "isRelative", size: "size" }, ngImport: i0, template: "@if (this.visible) {\n<div\n  class=\"bullet\"\n  [class.is-relative]=\"this.isRelative\"\n  [class.is-absolute]=\"!this.isRelative\"\n  [class]=\"this.size\"\n>\n  <ta-bullet type=\"new\" [size]=\"this.size\"></ta-bullet>\n</div>\n}\n", styles: [".bullet.is-relative{position:relative}.bullet.is-absolute{position:absolute}.bullet.xs.is-absolute{top:0;right:0}.bullet.sm.is-absolute{top:-2px;right:-2px}.bullet.md.is-absolute{top:-5px;right:-5px}.bullet.lg.is-absolute{top:-8px;right:-8px}\n"], dependencies: [{ kind: "component", type: BulletComponent, selector: "ta-bullet", inputs: ["size", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NewComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-new", standalone: true, imports: [NgIf, BulletComponent], template: "@if (this.visible) {\n<div\n  class=\"bullet\"\n  [class.is-relative]=\"this.isRelative\"\n  [class.is-absolute]=\"!this.isRelative\"\n  [class]=\"this.size\"\n>\n  <ta-bullet type=\"new\" [size]=\"this.size\"></ta-bullet>\n</div>\n}\n", styles: [".bullet.is-relative{position:relative}.bullet.is-absolute{position:absolute}.bullet.xs.is-absolute{top:0;right:0}.bullet.sm.is-absolute{top:-2px;right:-2px}.bullet.md.is-absolute{top:-5px;right:-5px}.bullet.lg.is-absolute{top:-8px;right:-8px}\n"] }]
        }], propDecorators: { visible: [{
                type: Input
            }], isRelative: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9uZXcvbmV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9uZXcvbmV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBUzdELE1BQU0sT0FBTyxZQUFZO0lBUHpCO1FBU0UsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUd6QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLFNBQUksR0FBWSxJQUFJLENBQUM7S0FDdEI7K0dBVFksWUFBWTttR0FBWixZQUFZLDBJQ2R6Qiw2T0FVQSw4U0RFa0IsZUFBZTs7NEZBRXBCLFlBQVk7a0JBUHhCLFNBQVM7K0JBQ0UsUUFBUSxjQUdOLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxlQUFlLENBQUM7OEJBSWhDLE9BQU87c0JBRE4sS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcblxuaW1wb3J0IHsgQnVsbGV0Q29tcG9uZW50IH0gZnJvbSBcIi4uL2J1bGxldC9idWxsZXQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1uZXdcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9uZXcuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL25ldy5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIEJ1bGxldENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5ld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBpc1JlbGF0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2l6ZTogVGFTaXplcyA9IFwibWRcIjtcbn1cbiIsIkBpZiAodGhpcy52aXNpYmxlKSB7XG48ZGl2XG4gIGNsYXNzPVwiYnVsbGV0XCJcbiAgW2NsYXNzLmlzLXJlbGF0aXZlXT1cInRoaXMuaXNSZWxhdGl2ZVwiXG4gIFtjbGFzcy5pcy1hYnNvbHV0ZV09XCIhdGhpcy5pc1JlbGF0aXZlXCJcbiAgW2NsYXNzXT1cInRoaXMuc2l6ZVwiXG4+XG4gIDx0YS1idWxsZXQgdHlwZT1cIm5ld1wiIFtzaXplXT1cInRoaXMuc2l6ZVwiPjwvdGEtYnVsbGV0PlxuPC9kaXY+XG59XG4iXX0=
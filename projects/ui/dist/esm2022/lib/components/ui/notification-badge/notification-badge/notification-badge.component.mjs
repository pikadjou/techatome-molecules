import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class NotificationBadgeComponent {
    constructor() {
        this.fontSize = "xs";
        this.relative = false;
    }
    getClass() {
        const css = {};
        css[`bgc-${this.style ?? "semantic-token-info"}`] = true;
        if (this.relative) {
            css["relative"] = true;
        }
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationBadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: NotificationBadgeComponent, isStandalone: true, selector: "ta-notification-badge", inputs: { number: "number", fontSize: "fontSize", style: "style", relative: "relative" }, ngImport: i0, template: "<div\n  class=\"badge-container notif-{{ this.fontSize }}\"\n  [ngClass]=\"this.getClass()\"\n>\n  <div class=\"pt-space-xs\">{{ this.number }}</div>\n</div>\n", styles: [".badge-container{color:var(--ta-neutral-50)!important;background-color:var(--ta-brand-400);height:15px;position:absolute;top:-8px;right:-8px;display:flex;align-items:center;justify-content:center;border-radius:50px;box-shadow:0 4px 8px #0000001a;padding-bottom:5px;padding-left:3px;padding-right:3px}.badge-container.relative{position:relative;top:0;right:0}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-badge", standalone: true, imports: [NgClass], template: "<div\n  class=\"badge-container notif-{{ this.fontSize }}\"\n  [ngClass]=\"this.getClass()\"\n>\n  <div class=\"pt-space-xs\">{{ this.number }}</div>\n</div>\n", styles: [".badge-container{color:var(--ta-neutral-50)!important;background-color:var(--ta-brand-400);height:15px;position:absolute;top:-8px;right:-8px;display:flex;align-items:center;justify-content:center;border-radius:50px;box-shadow:0 4px 8px #0000001a;padding-bottom:5px;padding-left:3px;padding-right:3px}.badge-container.relative{position:relative;top:0;right:0}\n"] }]
        }], propDecorators: { number: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], style: [{
                type: Input
            }], relative: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24tYmFkZ2Uvbm90aWZpY2F0aW9uLWJhZGdlL25vdGlmaWNhdGlvbi1iYWRnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvbm90aWZpY2F0aW9uLWJhZGdlL25vdGlmaWNhdGlvbi1iYWRnZS9ub3RpZmljYXRpb24tYmFkZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVdqRCxNQUFNLE9BQU8sMEJBQTBCO0lBUHZDO1FBWUUsYUFBUSxHQUFZLElBQUksQ0FBQztRQU16QixhQUFRLEdBQVksS0FBSyxDQUFDO0tBYTNCO0lBWFEsUUFBUTtRQUNiLE1BQU0sR0FBRyxHQUFpQyxFQUFFLENBQUM7UUFFN0MsR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXpELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzsrR0F2QlUsMEJBQTBCO21HQUExQiwwQkFBMEIsMktDWnZDLGlLQU1BLGthRElZLE9BQU87OzRGQUVOLDBCQUEwQjtrQkFQdEMsU0FBUzsrQkFDRSx1QkFBdUIsY0FHckIsSUFBSSxXQUNQLENBQUMsT0FBTyxDQUFDOzhCQUlsQixNQUFNO3NCQURMLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLEtBQUs7c0JBREosS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tIFwiQHRhL3N0eWxlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtbm90aWZpY2F0aW9uLWJhZGdlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbm90aWZpY2F0aW9uLWJhZGdlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9ub3RpZmljYXRpb24tYmFkZ2UuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzXSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQmFkZ2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBudW1iZXIhOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZm9udFNpemU6IFRhU2l6ZXMgPSBcInhzXCI7XG5cbiAgQElucHV0KClcbiAgc3R5bGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcmVsYXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgY3NzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5cbiAgICBjc3NbYGJnYy0ke3RoaXMuc3R5bGUgPz8gXCJzZW1hbnRpYy10b2tlbi1pbmZvXCJ9YF0gPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucmVsYXRpdmUpIHtcbiAgICAgIGNzc1tcInJlbGF0aXZlXCJdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwiYmFkZ2UtY29udGFpbmVyIG5vdGlmLXt7IHRoaXMuZm9udFNpemUgfX1cIlxuICBbbmdDbGFzc109XCJ0aGlzLmdldENsYXNzKClcIlxuPlxuICA8ZGl2IGNsYXNzPVwicHQtc3BhY2UteHNcIj57eyB0aGlzLm51bWJlciB9fTwvZGl2PlxuPC9kaXY+XG4iXX0=
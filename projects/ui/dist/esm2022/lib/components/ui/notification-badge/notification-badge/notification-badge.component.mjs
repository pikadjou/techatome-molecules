import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NotificationBadgeComponent {
    constructor() {
        this.fontSize = 'xs';
        this.relative = false;
    }
    getClass() {
        const css = {};
        css[`bgc-${this.style ?? 'semantic-token-info'}`] = true;
        if (this.relative) {
            css['relative'] = true;
        }
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationBadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: NotificationBadgeComponent, isStandalone: true, selector: "ta-notification-badge", inputs: { number: "number", fontSize: "fontSize", style: "style", relative: "relative" }, ngImport: i0, template: "<div\n  class=\"badge-container notif-{{ this.fontSize }}\"\n  [ngClass]=\"this.getClass()\"\n>\n  <div class=\"pt-space-xs\">{{ this.number }}</div>\n</div>\n", styles: [".badge-container{color:var(--ta-neutral-50)!important;background-color:var(--ta-brand-400);height:15px;position:absolute;top:-8px;right:-8px;display:flex;align-items:center;justify-content:center;border-radius:50px;box-shadow:0 4px 8px #0000001a;padding-bottom:5px;padding-left:3px;padding-right:3px}.badge-container.relative{position:relative;top:0;right:0}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-notification-badge', standalone: true, imports: [NgClass], template: "<div\n  class=\"badge-container notif-{{ this.fontSize }}\"\n  [ngClass]=\"this.getClass()\"\n>\n  <div class=\"pt-space-xs\">{{ this.number }}</div>\n</div>\n", styles: [".badge-container{color:var(--ta-neutral-50)!important;background-color:var(--ta-brand-400);height:15px;position:absolute;top:-8px;right:-8px;display:flex;align-items:center;justify-content:center;border-radius:50px;box-shadow:0 4px 8px #0000001a;padding-bottom:5px;padding-left:3px;padding-right:3px}.badge-container.relative{position:relative;top:0;right:0}\n"] }]
        }], propDecorators: { number: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], style: [{
                type: Input
            }], relative: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24tYmFkZ2Uvbm90aWZpY2F0aW9uLWJhZGdlL25vdGlmaWNhdGlvbi1iYWRnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvbm90aWZpY2F0aW9uLWJhZGdlL25vdGlmaWNhdGlvbi1iYWRnZS9ub3RpZmljYXRpb24tYmFkZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVdqRCxNQUFNLE9BQU8sMEJBQTBCO0lBUHZDO1FBWUUsYUFBUSxHQUFZLElBQUksQ0FBQztRQU16QixhQUFRLEdBQVksS0FBSyxDQUFDO0tBYTNCO0lBWFEsUUFBUTtRQUNiLE1BQU0sR0FBRyxHQUFpQyxFQUFFLENBQUM7UUFFN0MsR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXpELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzsrR0F2QlUsMEJBQTBCO21HQUExQiwwQkFBMEIsMktDWnZDLGlLQU1BLGthRElZLE9BQU87OzRGQUVOLDBCQUEwQjtrQkFQdEMsU0FBUzsrQkFDRSx1QkFBdUIsY0FHckIsSUFBSSxXQUNQLENBQUMsT0FBTyxDQUFDOzhCQUlsQixNQUFNO3NCQURMLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLEtBQUs7c0JBREosS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFTaXplcyB9IGZyb20gJ0B0YS9zdHlsZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1ub3RpZmljYXRpb24tYmFkZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2F0aW9uLWJhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbm90aWZpY2F0aW9uLWJhZGdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzXSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQmFkZ2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBudW1iZXIhOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZm9udFNpemU6IFRhU2l6ZXMgPSAneHMnO1xuXG4gIEBJbnB1dCgpXG4gIHN0eWxlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHJlbGF0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGdldENsYXNzKCkge1xuICAgIGNvbnN0IGNzczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG4gICAgY3NzW2BiZ2MtJHt0aGlzLnN0eWxlID8/ICdzZW1hbnRpYy10b2tlbi1pbmZvJ31gXSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5yZWxhdGl2ZSkge1xuICAgICAgY3NzWydyZWxhdGl2ZSddID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwiYmFkZ2UtY29udGFpbmVyIG5vdGlmLXt7IHRoaXMuZm9udFNpemUgfX1cIlxuICBbbmdDbGFzc109XCJ0aGlzLmdldENsYXNzKClcIlxuPlxuICA8ZGl2IGNsYXNzPVwicHQtc3BhY2UteHNcIj57eyB0aGlzLm51bWJlciB9fTwvZGl2PlxuPC9kaXY+XG4iXX0=
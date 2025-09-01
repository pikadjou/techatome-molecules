import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { TrigramComponent } from '../trigram/trigram.component';
import * as i0 from "@angular/core";
export class UserLogoComponent {
    constructor() {
        /**
         * Size of user logo desired
         */
        this.size = 'lg';
        this.defaultType = 'font';
        this._trigram = (name) => {
            if (!name)
                return '';
            if (name.length < 4)
                return name;
            return (name[0] + name[2] + name[3]).toUpperCase();
        };
    }
    get sizeValue() {
        if (this.forcedSize) {
            return this.forcedSize;
        }
        switch (this.size) {
            case 'sm':
                return 16;
            case 'md':
                return 24;
            case 'lg':
                return 48;
            case 'xl':
                return 70;
            default:
                return 48;
        }
    }
    getTrigram() {
        return this._trigram(this.user?.firstname);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UserLogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UserLogoComponent, isStandalone: true, selector: "ta-user-logo", inputs: { user: "user", size: "size", forcedSize: "forcedSize", defaultType: "defaultType" }, ngImport: i0, template: "@if (this.user?.picture) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user?.picture\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n  <div\n    class=\"profile-icon\"\n    [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n  >\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UserLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-user-logo', standalone: true, imports: [NgStyle, FontIconComponent, TrigramComponent], template: "@if (this.user?.picture) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user?.picture\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n  <div\n    class=\"profile-icon\"\n    [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n  >\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"] }]
        }], propDecorators: { user: [{
                type: Input
            }], size: [{
                type: Input
            }], forcedSize: [{
                type: Input
            }], defaultType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1sb2dvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBb0JoRSxNQUFNLE9BQU8saUJBQWlCO0lBUDlCO1FBV0U7O1dBRUc7UUFFSCxTQUFJLEdBQWEsSUFBSSxDQUFDO1FBTXRCLGdCQUFXLEdBQXVCLE1BQU0sQ0FBQztRQXdCakMsYUFBUSxHQUFHLENBQUMsSUFBK0IsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBRWpDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JELENBQUMsQ0FBQztLQUNIO0lBNUJDLElBQUksU0FBUztRQUNYLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsS0FBSyxJQUFJO2dCQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1osS0FBSyxJQUFJO2dCQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1osS0FBSyxJQUFJO2dCQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1osS0FBSyxJQUFJO2dCQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1o7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVNLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDOytHQXBDVSxpQkFBaUI7bUdBQWpCLGlCQUFpQixzS0MxQjlCLHluQkFrQkEsa1dETVksT0FBTywyRUFBRSxpQkFBaUIsbUZBQUUsZ0JBQWdCOzs0RkFFM0MsaUJBQWlCO2tCQVA3QixTQUFTOytCQUNFLGNBQWMsY0FHWixJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7OEJBSXZELElBQUk7c0JBREgsS0FBSztnQkFPTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLFdBQVc7c0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSAnQHRhL3N0eWxlcyc7XG5cbmltcG9ydCB7IFRyaWdyYW1Db21wb25lbnQgfSBmcm9tICcuLi90cmlncmFtL3RyaWdyYW0uY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyTG9nb05hbWluZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmcgfCBudWxsO1xuICB0cmlncmFtOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckxvZ29EYXRhIHtcbiAgZmlyc3RuYW1lOiBzdHJpbmc7XG4gIGxhc3RuYW1lOiBzdHJpbmc7XG4gIHBpY3R1cmU/OiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS11c2VyLWxvZ28nLFxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci1sb2dvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXNlci1sb2dvLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ1N0eWxlLCBGb250SWNvbkNvbXBvbmVudCwgVHJpZ3JhbUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJMb2dvQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgdXNlcj86IFVzZXJMb2dvRGF0YTtcblxuICAvKipcbiAgICogU2l6ZSBvZiB1c2VyIGxvZ28gZGVzaXJlZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2l6ZT86IFRhU2l6ZXMgPSAnbGcnO1xuXG4gIEBJbnB1dCgpXG4gIGZvcmNlZFNpemU/OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZGVmYXVsdFR5cGU6ICdmb250JyB8ICd0cmlncmFtJyA9ICdmb250JztcblxuICBnZXQgc2l6ZVZhbHVlKCkge1xuICAgIGlmICh0aGlzLmZvcmNlZFNpemUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcmNlZFNpemU7XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zaXplKSB7XG4gICAgICBjYXNlICdzbSc6XG4gICAgICAgIHJldHVybiAxNjtcbiAgICAgIGNhc2UgJ21kJzpcbiAgICAgICAgcmV0dXJuIDI0O1xuICAgICAgY2FzZSAnbGcnOlxuICAgICAgICByZXR1cm4gNDg7XG4gICAgICBjYXNlICd4bCc6XG4gICAgICAgIHJldHVybiA3MDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA0ODtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0VHJpZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpZ3JhbSh0aGlzLnVzZXI/LmZpcnN0bmFtZSk7XG4gIH1cblxuICBwcml2YXRlIF90cmlncmFtID0gKG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgICBpZiAobmFtZS5sZW5ndGggPCA0KSByZXR1cm4gbmFtZTtcblxuICAgIHJldHVybiAobmFtZVswXSArIG5hbWVbMl0gKyBuYW1lWzNdKS50b1VwcGVyQ2FzZSgpO1xuICB9O1xufVxuIiwiQGlmICh0aGlzLnVzZXI/LnBpY3R1cmUpIHtcbiAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICA8aW1nXG4gICAgICBbc3JjXT1cInRoaXMudXNlcj8ucGljdHVyZVwiXG4gICAgICBbbmdTdHlsZV09XCJ7ICd3aWR0aC5weCc6IHRoaXMuc2l6ZVZhbHVlLCAnaGVpZ2h0LnB4JzogdGhpcy5zaXplVmFsdWUgfVwiXG4gICAgICBjbGFzcz1cInVzZXItaW1hZ2VcIlxuICAgIC8+XG4gIDwvZGl2PlxufSBAZWxzZSBpZiAodGhpcy5kZWZhdWx0VHlwZSA9PT0gJ3RyaWdyYW0nKSB7XG4gIDx0YS10cmlncmFtIFt2YWx1ZV09XCJ0aGlzLmdldFRyaWdyYW0oKVwiIFtzaXplXT1cInRoaXMuc2l6ZVZhbHVlXCI+PC90YS10cmlncmFtPlxufSBAZWxzZSBpZiAodGhpcy5kZWZhdWx0VHlwZSA9PT0gJ2ZvbnQnKSB7XG4gIDxkaXZcbiAgICBjbGFzcz1cInByb2ZpbGUtaWNvblwiXG4gICAgW25nU3R5bGVdPVwieyAnd2lkdGgucHgnOiB0aGlzLnNpemVWYWx1ZSwgJ2hlaWdodC5weCc6IHRoaXMuc2l6ZVZhbHVlIH1cIlxuICA+XG4gICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwicHJvZmlsLXBpY3R1cmVcIiBbdHlwZV09XCJ0aGlzLnNpemUgPz8gJ2xnJ1wiPjwvdGEtZm9udC1pY29uPlxuICA8L2Rpdj5cbn1cbiJdfQ==
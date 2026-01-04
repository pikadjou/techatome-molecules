import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { TrigramComponent } from '../trigram/trigram.component';
import * as i0 from "@angular/core";
export class UserLogoComponent {
    constructor() {
        this.user = input.required();
        /**
         * Size of user logo desired
         */
        this.size = input('lg');
        this.forcedSize = input(undefined);
        this.defaultType = input('font');
        this._trigram = (name) => {
            if (!name)
                return '';
            if (name.length < 4)
                return name;
            return (name[0] + name[2] + name[3]).toUpperCase();
        };
    }
    get sizeValue() {
        if (this.forcedSize()) {
            return this.forcedSize();
        }
        switch (this.size()) {
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
        return this._trigram(this.user().firstname);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UserLogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UserLogoComponent, isStandalone: true, selector: "ta-user-logo", inputs: { user: { classPropertyName: "user", publicName: "user", isSignal: true, isRequired: true, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, forcedSize: { classPropertyName: "forcedSize", publicName: "forcedSize", isSignal: true, isRequired: false, transformFunction: null }, defaultType: { classPropertyName: "defaultType", publicName: "defaultType", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "@if (this.user().picture) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user().picture\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue ?? 48, 'height.px': this.sizeValue ?? 48 }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType() === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue ?? 48\"></ta-trigram>\n} @else if (this.defaultType() === 'font') {\n  <div class=\"profile-icon\" [ngStyle]=\"{ 'width.px': this.sizeValue ?? 48, 'height.px': this.sizeValue ?? 48 }\">\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size() ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%;border:1px solid var(--ta-border-tertiary)}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UserLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-user-logo', standalone: true, imports: [NgStyle, FontIconComponent, TrigramComponent], template: "@if (this.user().picture) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user().picture\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue ?? 48, 'height.px': this.sizeValue ?? 48 }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType() === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue ?? 48\"></ta-trigram>\n} @else if (this.defaultType() === 'font') {\n  <div class=\"profile-icon\" [ngStyle]=\"{ 'width.px': this.sizeValue ?? 48, 'height.px': this.sizeValue ?? 48 }\">\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size() ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%;border:1px solid var(--ta-border-tertiary)}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1sb2dvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBY2hFLE1BQU0sT0FBTyxpQkFBaUI7SUFQOUI7UUFRRSxTQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBZ0IsQ0FBQztRQUV0Qzs7V0FFRztRQUNILFNBQUksR0FBRyxLQUFLLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFNUIsZUFBVSxHQUFHLEtBQUssQ0FBcUIsU0FBUyxDQUFDLENBQUM7UUFFbEQsZ0JBQVcsR0FBRyxLQUFLLENBQXFCLE1BQU0sQ0FBQyxDQUFDO1FBd0J4QyxhQUFRLEdBQUcsQ0FBQyxJQUErQixFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFFakMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDO0tBQ0g7SUE1QkMsSUFBSSxTQUFTO1FBQ1gsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBQ0QsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUNwQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQzsrR0FoQ1UsaUJBQWlCO21HQUFqQixpQkFBaUIsOGtCQ3BCOUIsaXBCQWVBLDZZREdZLE9BQU8sMkVBQUUsaUJBQWlCLG1GQUFFLGdCQUFnQjs7NEZBRTNDLGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRSxjQUFjLGNBR1osSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcblxuaW1wb3J0IHsgVHJpZ3JhbUNvbXBvbmVudCB9IGZyb20gJy4uL3RyaWdyYW0vdHJpZ3JhbS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJMb2dvRGF0YSB7XG4gIGZpcnN0bmFtZTogc3RyaW5nO1xuICBsYXN0bmFtZTogc3RyaW5nO1xuICBwaWN0dXJlPzogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtdXNlci1sb2dvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItbG9nby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VzZXItbG9nby5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdTdHlsZSwgRm9udEljb25Db21wb25lbnQsIFRyaWdyYW1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTG9nb0NvbXBvbmVudCB7XG4gIHVzZXIgPSBpbnB1dC5yZXF1aXJlZDxVc2VyTG9nb0RhdGE+KCk7XG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdXNlciBsb2dvIGRlc2lyZWRcbiAgICovXG4gIHNpemUgPSBpbnB1dDxUYVNpemVzPignbGcnKTtcblxuICBmb3JjZWRTaXplID0gaW5wdXQ8bnVtYmVyIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIGRlZmF1bHRUeXBlID0gaW5wdXQ8J2ZvbnQnIHwgJ3RyaWdyYW0nPignZm9udCcpO1xuXG4gIGdldCBzaXplVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuZm9yY2VkU2l6ZSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JjZWRTaXplKCk7XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zaXplKCkpIHtcbiAgICAgIGNhc2UgJ3NtJzpcbiAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgY2FzZSAnbWQnOlxuICAgICAgICByZXR1cm4gMjQ7XG4gICAgICBjYXNlICdsZyc6XG4gICAgICAgIHJldHVybiA0ODtcbiAgICAgIGNhc2UgJ3hsJzpcbiAgICAgICAgcmV0dXJuIDcwO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDQ4O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRUcmlncmFtKCkge1xuICAgIHJldHVybiB0aGlzLl90cmlncmFtKHRoaXMudXNlcigpLmZpcnN0bmFtZSk7XG4gIH1cblxuICBwcml2YXRlIF90cmlncmFtID0gKG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgICBpZiAobmFtZS5sZW5ndGggPCA0KSByZXR1cm4gbmFtZTtcblxuICAgIHJldHVybiAobmFtZVswXSArIG5hbWVbMl0gKyBuYW1lWzNdKS50b1VwcGVyQ2FzZSgpO1xuICB9O1xufVxuIiwiQGlmICh0aGlzLnVzZXIoKS5waWN0dXJlKSB7XG4gIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgPGltZ1xuICAgICAgW3NyY109XCJ0aGlzLnVzZXIoKS5waWN0dXJlXCJcbiAgICAgIFtuZ1N0eWxlXT1cInsgJ3dpZHRoLnB4JzogdGhpcy5zaXplVmFsdWUgPz8gNDgsICdoZWlnaHQucHgnOiB0aGlzLnNpemVWYWx1ZSA/PyA0OCB9XCJcbiAgICAgIGNsYXNzPVwidXNlci1pbWFnZVwiXG4gICAgLz5cbiAgPC9kaXY+XG59IEBlbHNlIGlmICh0aGlzLmRlZmF1bHRUeXBlKCkgPT09ICd0cmlncmFtJykge1xuICA8dGEtdHJpZ3JhbSBbdmFsdWVdPVwidGhpcy5nZXRUcmlncmFtKClcIiBbc2l6ZV09XCJ0aGlzLnNpemVWYWx1ZSA/PyA0OFwiPjwvdGEtdHJpZ3JhbT5cbn0gQGVsc2UgaWYgKHRoaXMuZGVmYXVsdFR5cGUoKSA9PT0gJ2ZvbnQnKSB7XG4gIDxkaXYgY2xhc3M9XCJwcm9maWxlLWljb25cIiBbbmdTdHlsZV09XCJ7ICd3aWR0aC5weCc6IHRoaXMuc2l6ZVZhbHVlID8/IDQ4LCAnaGVpZ2h0LnB4JzogdGhpcy5zaXplVmFsdWUgPz8gNDggfVwiPlxuICAgIDx0YS1mb250LWljb24gbmFtZT1cInByb2ZpbC1waWN0dXJlXCIgW3R5cGVdPVwidGhpcy5zaXplKCkgPz8gJ2xnJ1wiPjwvdGEtZm9udC1pY29uPlxuICA8L2Rpdj5cbn1cbiJdfQ==
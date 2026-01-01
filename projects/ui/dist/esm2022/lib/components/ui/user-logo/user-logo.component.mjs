import { NgStyle } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { TrigramComponent } from '../trigram/trigram.component';
import * as i0 from "@angular/core";
export class UserLogoComponent {
    constructor() {
        this.user = input.required();
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
        return this._trigram(this.user().firstname);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UserLogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UserLogoComponent, isStandalone: true, selector: "ta-user-logo", inputs: { user: { classPropertyName: "user", publicName: "user", isSignal: true, isRequired: true, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: false, isRequired: false, transformFunction: null }, forcedSize: { classPropertyName: "forcedSize", publicName: "forcedSize", isSignal: false, isRequired: false, transformFunction: null }, defaultType: { classPropertyName: "defaultType", publicName: "defaultType", isSignal: false, isRequired: false, transformFunction: null } }, ngImport: i0, template: "@if (this.user().picture) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user().picture\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n  <div class=\"profile-icon\" [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\">\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%;border:1px solid var(--ta-border-tertiary)}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UserLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-user-logo', standalone: true, imports: [NgStyle, FontIconComponent, TrigramComponent], template: "@if (this.user().picture) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user().picture\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n  <div class=\"profile-icon\" [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\">\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%;border:1px solid var(--ta-border-tertiary)}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], forcedSize: [{
                type: Input
            }], defaultType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1sb2dvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQWNoRSxNQUFNLE9BQU8saUJBQWlCO0lBUDlCO1FBUUUsU0FBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQWdCLENBQUM7UUFFdEM7O1dBRUc7UUFFSCxTQUFJLEdBQWEsSUFBSSxDQUFDO1FBTXRCLGdCQUFXLEdBQXVCLE1BQU0sQ0FBQztRQXdCakMsYUFBUSxHQUFHLENBQUMsSUFBK0IsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBRWpDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JELENBQUMsQ0FBQztLQUNIO0lBNUJDLElBQUksU0FBUztRQUNYLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsS0FBSyxJQUFJO2dCQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1osS0FBSyxJQUFJO2dCQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1osS0FBSyxJQUFJO2dCQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1osS0FBSyxJQUFJO2dCQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1o7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVNLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7K0dBbkNVLGlCQUFpQjttR0FBakIsaUJBQWlCLGlsQkNwQjlCLDZtQkFlQSw2WURHWSxPQUFPLDJFQUFFLGlCQUFpQixtRkFBRSxnQkFBZ0I7OzRGQUUzQyxpQkFBaUI7a0JBUDdCLFNBQVM7K0JBQ0UsY0FBYyxjQUdaLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQzs4QkFTdkQsSUFBSTtzQkFESCxLQUFLO2dCQUlOLFVBQVU7c0JBRFQsS0FBSztnQkFJTixXQUFXO3NCQURWLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcblxuaW1wb3J0IHsgVHJpZ3JhbUNvbXBvbmVudCB9IGZyb20gJy4uL3RyaWdyYW0vdHJpZ3JhbS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJMb2dvRGF0YSB7XG4gIGZpcnN0bmFtZTogc3RyaW5nO1xuICBsYXN0bmFtZTogc3RyaW5nO1xuICBwaWN0dXJlPzogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtdXNlci1sb2dvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItbG9nby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VzZXItbG9nby5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdTdHlsZSwgRm9udEljb25Db21wb25lbnQsIFRyaWdyYW1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTG9nb0NvbXBvbmVudCB7XG4gIHVzZXIgPSBpbnB1dC5yZXF1aXJlZDxVc2VyTG9nb0RhdGE+KCk7XG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdXNlciBsb2dvIGRlc2lyZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNpemU/OiBUYVNpemVzID0gJ2xnJztcblxuICBASW5wdXQoKVxuICBmb3JjZWRTaXplPzogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRUeXBlOiAnZm9udCcgfCAndHJpZ3JhbScgPSAnZm9udCc7XG5cbiAgZ2V0IHNpemVWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5mb3JjZWRTaXplKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JjZWRTaXplO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgY2FzZSAnc20nOlxuICAgICAgICByZXR1cm4gMTY7XG4gICAgICBjYXNlICdtZCc6XG4gICAgICAgIHJldHVybiAyNDtcbiAgICAgIGNhc2UgJ2xnJzpcbiAgICAgICAgcmV0dXJuIDQ4O1xuICAgICAgY2FzZSAneGwnOlxuICAgICAgICByZXR1cm4gNzA7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gNDg7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFRyaWdyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdyYW0odGhpcy51c2VyKCkuZmlyc3RuYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RyaWdyYW0gPSAobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICAgIGlmIChuYW1lLmxlbmd0aCA8IDQpIHJldHVybiBuYW1lO1xuXG4gICAgcmV0dXJuIChuYW1lWzBdICsgbmFtZVsyXSArIG5hbWVbM10pLnRvVXBwZXJDYXNlKCk7XG4gIH07XG59XG4iLCJAaWYgKHRoaXMudXNlcigpLnBpY3R1cmUpIHtcbiAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICA8aW1nXG4gICAgICBbc3JjXT1cInRoaXMudXNlcigpLnBpY3R1cmVcIlxuICAgICAgW25nU3R5bGVdPVwieyAnd2lkdGgucHgnOiB0aGlzLnNpemVWYWx1ZSwgJ2hlaWdodC5weCc6IHRoaXMuc2l6ZVZhbHVlIH1cIlxuICAgICAgY2xhc3M9XCJ1c2VyLWltYWdlXCJcbiAgICAvPlxuICA8L2Rpdj5cbn0gQGVsc2UgaWYgKHRoaXMuZGVmYXVsdFR5cGUgPT09ICd0cmlncmFtJykge1xuICA8dGEtdHJpZ3JhbSBbdmFsdWVdPVwidGhpcy5nZXRUcmlncmFtKClcIiBbc2l6ZV09XCJ0aGlzLnNpemVWYWx1ZVwiPjwvdGEtdHJpZ3JhbT5cbn0gQGVsc2UgaWYgKHRoaXMuZGVmYXVsdFR5cGUgPT09ICdmb250Jykge1xuICA8ZGl2IGNsYXNzPVwicHJvZmlsZS1pY29uXCIgW25nU3R5bGVdPVwieyAnd2lkdGgucHgnOiB0aGlzLnNpemVWYWx1ZSwgJ2hlaWdodC5weCc6IHRoaXMuc2l6ZVZhbHVlIH1cIj5cbiAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJwcm9maWwtcGljdHVyZVwiIFt0eXBlXT1cInRoaXMuc2l6ZSA/PyAnbGcnXCI+PC90YS1mb250LWljb24+XG4gIDwvZGl2PlxufVxuIl19
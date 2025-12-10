import { NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FontIconComponent } from "@ta/icons";
import { TrigramComponent } from "../trigram/trigram.component";
import * as i0 from "@angular/core";
export class UserLogoComponent {
    constructor() {
        /**
         * Size of user logo desired
         */
        this.size = "lg";
        this.defaultType = "font";
        this._trigram = (name) => {
            if (!name)
                return "";
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
            case "sm":
                return 16;
            case "md":
                return 24;
            case "lg":
                return 48;
            case "xl":
                return 70;
            default:
                return 48;
        }
    }
    getTrigram() {
        return this._trigram(this.user?.firstname);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UserLogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UserLogoComponent, isStandalone: true, selector: "ta-user-logo", inputs: { user: "user", size: "size", forcedSize: "forcedSize", defaultType: "defaultType" }, ngImport: i0, template: "@if (this.user?.picture) {\n<div class=\"img-container\">\n  <img\n    [src]=\"this.user?.picture\"\n    [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n    class=\"user-image\"\n  />\n</div>\n} @else if (this.defaultType === 'trigram') {\n<ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n<div\n  class=\"profile-icon\"\n  [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n>\n  <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n</div>\n}\n", styles: [".user-image{border-radius:100%;border:1px solid var(--ta-border-tertiary)}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UserLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-user-logo", standalone: true, imports: [NgStyle, FontIconComponent, TrigramComponent], template: "@if (this.user?.picture) {\n<div class=\"img-container\">\n  <img\n    [src]=\"this.user?.picture\"\n    [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n    class=\"user-image\"\n  />\n</div>\n} @else if (this.defaultType === 'trigram') {\n<ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n<div\n  class=\"profile-icon\"\n  [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n>\n  <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n</div>\n}\n", styles: [".user-image{border-radius:100%;border:1px solid var(--ta-border-tertiary)}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"] }]
        }], propDecorators: { user: [{
                type: Input
            }], size: [{
                type: Input
            }], forcedSize: [{
                type: Input
            }], defaultType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1sb2dvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBY2hFLE1BQU0sT0FBTyxpQkFBaUI7SUFQOUI7UUFXRTs7V0FFRztRQUVILFNBQUksR0FBYSxJQUFJLENBQUM7UUFNdEIsZ0JBQVcsR0FBdUIsTUFBTSxDQUFDO1FBd0JqQyxhQUFRLEdBQUcsQ0FBQyxJQUErQixFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFFakMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDO0tBQ0g7SUE1QkMsSUFBSSxTQUFTO1FBQ1gsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7K0dBcENVLGlCQUFpQjttR0FBakIsaUJBQWlCLHNLQ3BCOUIsNmxCQWtCQSw2WURBWSxPQUFPLDJFQUFFLGlCQUFpQixtRkFBRSxnQkFBZ0I7OzRGQUUzQyxpQkFBaUI7a0JBUDdCLFNBQVM7K0JBQ0UsY0FBYyxjQUdaLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQzs4QkFJdkQsSUFBSTtzQkFESCxLQUFLO2dCQU9OLElBQUk7c0JBREgsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sV0FBVztzQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdTdHlsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tIFwiQHRhL3N0eWxlc1wiO1xuXG5pbXBvcnQgeyBUcmlncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uL3RyaWdyYW0vdHJpZ3JhbS5jb21wb25lbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyTG9nb0RhdGEge1xuICBmaXJzdG5hbWU6IHN0cmluZztcbiAgbGFzdG5hbWU6IHN0cmluZztcbiAgcGljdHVyZT86IHN0cmluZztcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS11c2VyLWxvZ29cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi91c2VyLWxvZ28uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3VzZXItbG9nby5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nU3R5bGUsIEZvbnRJY29uQ29tcG9uZW50LCBUcmlncmFtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckxvZ29Db21wb25lbnQge1xuICBASW5wdXQoKVxuICB1c2VyPzogVXNlckxvZ29EYXRhO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHVzZXIgbG9nbyBkZXNpcmVkXG4gICAqL1xuICBASW5wdXQoKVxuICBzaXplPzogVGFTaXplcyA9IFwibGdcIjtcblxuICBASW5wdXQoKVxuICBmb3JjZWRTaXplPzogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRUeXBlOiBcImZvbnRcIiB8IFwidHJpZ3JhbVwiID0gXCJmb250XCI7XG5cbiAgZ2V0IHNpemVWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5mb3JjZWRTaXplKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JjZWRTaXplO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgY2FzZSBcInNtXCI6XG4gICAgICAgIHJldHVybiAxNjtcbiAgICAgIGNhc2UgXCJtZFwiOlxuICAgICAgICByZXR1cm4gMjQ7XG4gICAgICBjYXNlIFwibGdcIjpcbiAgICAgICAgcmV0dXJuIDQ4O1xuICAgICAgY2FzZSBcInhsXCI6XG4gICAgICAgIHJldHVybiA3MDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA0ODtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0VHJpZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpZ3JhbSh0aGlzLnVzZXI/LmZpcnN0bmFtZSk7XG4gIH1cblxuICBwcml2YXRlIF90cmlncmFtID0gKG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBcIlwiO1xuICAgIGlmIChuYW1lLmxlbmd0aCA8IDQpIHJldHVybiBuYW1lO1xuXG4gICAgcmV0dXJuIChuYW1lWzBdICsgbmFtZVsyXSArIG5hbWVbM10pLnRvVXBwZXJDYXNlKCk7XG4gIH07XG59XG4iLCJAaWYgKHRoaXMudXNlcj8ucGljdHVyZSkge1xuPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgPGltZ1xuICAgIFtzcmNdPVwidGhpcy51c2VyPy5waWN0dXJlXCJcbiAgICBbbmdTdHlsZV09XCJ7ICd3aWR0aC5weCc6IHRoaXMuc2l6ZVZhbHVlLCAnaGVpZ2h0LnB4JzogdGhpcy5zaXplVmFsdWUgfVwiXG4gICAgY2xhc3M9XCJ1c2VyLWltYWdlXCJcbiAgLz5cbjwvZGl2PlxufSBAZWxzZSBpZiAodGhpcy5kZWZhdWx0VHlwZSA9PT0gJ3RyaWdyYW0nKSB7XG48dGEtdHJpZ3JhbSBbdmFsdWVdPVwidGhpcy5nZXRUcmlncmFtKClcIiBbc2l6ZV09XCJ0aGlzLnNpemVWYWx1ZVwiPjwvdGEtdHJpZ3JhbT5cbn0gQGVsc2UgaWYgKHRoaXMuZGVmYXVsdFR5cGUgPT09ICdmb250Jykge1xuPGRpdlxuICBjbGFzcz1cInByb2ZpbGUtaWNvblwiXG4gIFtuZ1N0eWxlXT1cInsgJ3dpZHRoLnB4JzogdGhpcy5zaXplVmFsdWUsICdoZWlnaHQucHgnOiB0aGlzLnNpemVWYWx1ZSB9XCJcbj5cbiAgPHRhLWZvbnQtaWNvbiBuYW1lPVwicHJvZmlsLXBpY3R1cmVcIiBbdHlwZV09XCJ0aGlzLnNpemUgPz8gJ2xnJ1wiPjwvdGEtZm9udC1pY29uPlxuPC9kaXY+XG59XG4iXX0=
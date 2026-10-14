import { NgClass } from "@angular/common";
import { Component, input, inject } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { TaIconsService } from "../../services/icons.service";
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
export class LocalIconComponent {
    constructor() {
        /**
         * Icon to display
         */
        this.type = input.required();
        /**
         * Size of the icon
         */
        this.size = input("xs");
        /**
         * If set to true, icon will have a rotation animation
         */
        this.rotation = input(false);
        this._iconService = inject(TaIconsService);
        this._sanitizer = inject(DomSanitizer);
    }
    getSvgIcon() {
        return this._sanitizer.bypassSecurityTrustHtml(this._iconService.getIcon(this.type()));
    }
    getSize() {
        if (this.size() === "xs") {
            return "28px";
        }
        if (this.size() === "sm") {
            return "35px";
        }
        if (this.size() === "md") {
            return "50px";
        }
        if (this.size() === "lg") {
            return "120px";
        }
        if (this.size() === "xl") {
            return "120px";
        }
        return "auto";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LocalIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: LocalIconComponent, isStandalone: true, selector: "ta-local-icon", inputs: { type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: true, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, rotation: { classPropertyName: "rotation", publicName: "rotation", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "@if (this.type()) {\n  <div\n    [innerHTML]=\"this.getSvgIcon()\"\n    [style.width]=\"this.getSize()\"\n    [ngClass]=\"{ 'is-rotation': this.rotation() }\"\n    class=\"internal-icon\"\n  ></div>\n}\n", styles: [".internal-icon{margin:auto;display:flex}.is-rotation{animation:rotation 2s infinite linear}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LocalIconComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-local-icon", standalone: true, imports: [NgClass], template: "@if (this.type()) {\n  <div\n    [innerHTML]=\"this.getSvgIcon()\"\n    [style.width]=\"this.getSize()\"\n    [ngClass]=\"{ 'is-rotation': this.rotation() }\"\n    class=\"internal-icon\"\n  ></div>\n}\n", styles: [".internal-icon{margin:auto;display:flex}.is-rotation{animation:rotation 2s infinite linear}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbG9jYWwtaWNvbi9sb2NhbC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9sb2NhbC1pY29uL2xvY2FsLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJekQsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUUxRTs7R0FFRztBQVFILE1BQU0sT0FBTyxrQkFBa0I7SUFQL0I7UUFRRTs7V0FFRztRQUNJLFNBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUE4QixDQUFDO1FBRTNEOztXQUVHO1FBQ0ksU0FBSSxHQUFHLEtBQUssQ0FBaUIsSUFBSSxDQUFDLENBQUM7UUFFMUM7O1dBRUc7UUFDSSxhQUFRLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRXZCLGlCQUFZLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RDLGVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7S0EwQnBEO0lBeEJRLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQWdCLENBQUMsQ0FDckQsQ0FBQztJQUNKLENBQUM7SUFDTSxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3pCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN6QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDekIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3pCLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOytHQTFDVSxrQkFBa0I7bUdBQWxCLGtCQUFrQiwrYkNsQi9CLDZNQVFBLCtORFFZLE9BQU87OzRGQUVOLGtCQUFrQjtrQkFQOUIsU0FBUzsrQkFDRSxlQUFlLGNBR2IsSUFBSSxXQUNQLENBQUMsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcblxuaW1wb3J0IHsgVGFJY29uVHlwZSwgVGFJY29uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaWNvbnMuc2VydmljZVwiO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1sb2NhbC1pY29uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9jYWwtaWNvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybDogXCIuL2xvY2FsLWljb24uY29tcG9uZW50LnNjc3NcIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3NdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhbEljb25Db21wb25lbnQge1xuICAvKipcbiAgICogSWNvbiB0byBkaXNwbGF5XG4gICAqL1xuICBwdWJsaWMgdHlwZSA9IGlucHV0LnJlcXVpcmVkPFRhSWNvblR5cGUgfCBzdHJpbmcgfCBudWxsPigpO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBpY29uXG4gICAqL1xuICBwdWJsaWMgc2l6ZSA9IGlucHV0PFRhU2l6ZXMgfCBcInhsXCI+KFwieHNcIik7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCBpY29uIHdpbGwgaGF2ZSBhIHJvdGF0aW9uIGFuaW1hdGlvblxuICAgKi9cbiAgcHVibGljIHJvdGF0aW9uID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2ljb25TZXJ2aWNlID0gaW5qZWN0KFRhSWNvbnNTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2FuaXRpemVyID0gaW5qZWN0KERvbVNhbml0aXplcik7XG5cbiAgcHVibGljIGdldFN2Z0ljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgIHRoaXMuX2ljb25TZXJ2aWNlLmdldEljb24odGhpcy50eXBlKCkgYXMgVGFJY29uVHlwZSlcbiAgICApO1xuICB9XG4gIHB1YmxpYyBnZXRTaXplKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2l6ZSgpID09PSBcInhzXCIpIHtcbiAgICAgIHJldHVybiBcIjI4cHhcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSgpID09PSBcInNtXCIpIHtcbiAgICAgIHJldHVybiBcIjM1cHhcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSgpID09PSBcIm1kXCIpIHtcbiAgICAgIHJldHVybiBcIjUwcHhcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSgpID09PSBcImxnXCIpIHtcbiAgICAgIHJldHVybiBcIjEyMHB4XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnNpemUoKSA9PT0gXCJ4bFwiKSB7XG4gICAgICByZXR1cm4gXCIxMjBweFwiO1xuICAgIH1cblxuICAgIHJldHVybiBcImF1dG9cIjtcbiAgfVxufVxuIiwiQGlmICh0aGlzLnR5cGUoKSkge1xuICA8ZGl2XG4gICAgW2lubmVySFRNTF09XCJ0aGlzLmdldFN2Z0ljb24oKVwiXG4gICAgW3N0eWxlLndpZHRoXT1cInRoaXMuZ2V0U2l6ZSgpXCJcbiAgICBbbmdDbGFzc109XCJ7ICdpcy1yb3RhdGlvbic6IHRoaXMucm90YXRpb24oKSB9XCJcbiAgICBjbGFzcz1cImludGVybmFsLWljb25cIlxuICA+PC9kaXY+XG59XG4iXX0=
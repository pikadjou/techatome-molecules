import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../services/icons.service";
import * as i2 from "@angular/platform-browser";
/**
 * @deprecated
 */
export class LocalIconComponent {
    constructor(_iconService, _sanitizer) {
        this._iconService = _iconService;
        this._sanitizer = _sanitizer;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LocalIconComponent, deps: [{ token: i1.TaIconsService }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: LocalIconComponent, isStandalone: true, selector: "ta-local-icon", inputs: { type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: true, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, rotation: { classPropertyName: "rotation", publicName: "rotation", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "@if (this.type()) {\n  <div\n    [innerHTML]=\"this.getSvgIcon()\"\n    [style.width]=\"this.getSize()\"\n    [ngClass]=\"{ 'is-rotation': this.rotation }\"\n    class=\"internal-icon\"\n  ></div>\n}\n", styles: [".internal-icon{margin:auto;display:flex}:host ::ng-deep svg{width:100%!important;height:auto!important}.is-rotation{animation:rotation 2s infinite linear}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LocalIconComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-local-icon", standalone: true, imports: [NgClass], template: "@if (this.type()) {\n  <div\n    [innerHTML]=\"this.getSvgIcon()\"\n    [style.width]=\"this.getSize()\"\n    [ngClass]=\"{ 'is-rotation': this.rotation }\"\n    class=\"internal-icon\"\n  ></div>\n}\n", styles: [".internal-icon{margin:auto;display:flex}:host ::ng-deep svg{width:100%!important;height:auto!important}.is-rotation{animation:rotation 2s infinite linear}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}\n"] }]
        }], ctorParameters: () => [{ type: i1.TaIconsService }, { type: i2.DomSanitizer }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbG9jYWwtaWNvbi9sb2NhbC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9sb2NhbC1pY29uL2xvY2FsLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pEOztHQUVHO0FBUUgsTUFBTSxPQUFPLGtCQUFrQjtJQWdCN0IsWUFDVSxZQUE0QixFQUM1QixVQUF3QjtRQUR4QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQWpCbEM7O1dBRUc7UUFDSSxTQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBOEIsQ0FBQztRQUUzRDs7V0FFRztRQUNJLFNBQUksR0FBRyxLQUFLLENBQWlCLElBQUksQ0FBQyxDQUFDO1FBRTFDOztXQUVHO1FBQ0ksYUFBUSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUtyQyxDQUFDO0lBRUcsVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBZ0IsQ0FBQyxDQUNyRCxDQUFDO0lBQ0osQ0FBQztJQUNNLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN6QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3pCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN6QixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDekIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7K0dBNUNVLGtCQUFrQjttR0FBbEIsa0JBQWtCLCtiQ2xCL0IsMk1BUUEsOFJEUVksT0FBTzs7NEZBRU4sa0JBQWtCO2tCQVA5QixTQUFTOytCQUNFLGVBQWUsY0FHYixJQUFJLFdBQ1AsQ0FBQyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcblxuaW1wb3J0IHsgVGFJY29uVHlwZSwgVGFJY29uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaWNvbnMuc2VydmljZVwiO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1sb2NhbC1pY29uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9jYWwtaWNvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbG9jYWwtaWNvbi5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3NdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhbEljb25Db21wb25lbnQge1xuICAvKipcbiAgICogSWNvbiB0byBkaXNwbGF5XG4gICAqL1xuICBwdWJsaWMgdHlwZSA9IGlucHV0LnJlcXVpcmVkPFRhSWNvblR5cGUgfCBzdHJpbmcgfCBudWxsPigpO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBpY29uXG4gICAqL1xuICBwdWJsaWMgc2l6ZSA9IGlucHV0PFRhU2l6ZXMgfCBcInhsXCI+KFwieHNcIik7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCBpY29uIHdpbGwgaGF2ZSBhIHJvdGF0aW9uIGFuaW1hdGlvblxuICAgKi9cbiAgcHVibGljIHJvdGF0aW9uID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ljb25TZXJ2aWNlOiBUYUljb25zU2VydmljZSxcbiAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHt9XG5cbiAgcHVibGljIGdldFN2Z0ljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgIHRoaXMuX2ljb25TZXJ2aWNlLmdldEljb24odGhpcy50eXBlKCkgYXMgVGFJY29uVHlwZSlcbiAgICApO1xuICB9XG4gIHB1YmxpYyBnZXRTaXplKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2l6ZSgpID09PSBcInhzXCIpIHtcbiAgICAgIHJldHVybiBcIjI4cHhcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSgpID09PSBcInNtXCIpIHtcbiAgICAgIHJldHVybiBcIjM1cHhcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSgpID09PSBcIm1kXCIpIHtcbiAgICAgIHJldHVybiBcIjUwcHhcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSgpID09PSBcImxnXCIpIHtcbiAgICAgIHJldHVybiBcIjEyMHB4XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnNpemUoKSA9PT0gXCJ4bFwiKSB7XG4gICAgICByZXR1cm4gXCIxMjBweFwiO1xuICAgIH1cblxuICAgIHJldHVybiBcImF1dG9cIjtcbiAgfVxufVxuIiwiQGlmICh0aGlzLnR5cGUoKSkge1xuICA8ZGl2XG4gICAgW2lubmVySFRNTF09XCJ0aGlzLmdldFN2Z0ljb24oKVwiXG4gICAgW3N0eWxlLndpZHRoXT1cInRoaXMuZ2V0U2l6ZSgpXCJcbiAgICBbbmdDbGFzc109XCJ7ICdpcy1yb3RhdGlvbic6IHRoaXMucm90YXRpb24gfVwiXG4gICAgY2xhc3M9XCJpbnRlcm5hbC1pY29uXCJcbiAgPjwvZGl2PlxufVxuIl19
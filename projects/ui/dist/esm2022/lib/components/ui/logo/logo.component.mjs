import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class LogoComponent {
    get imageWidth() {
        return this.widthPercentage + "%";
    }
    constructor() {
        /**
         * Set the logo width in %
         */
        this.widthPercentage = 100;
    }
    getImagePath() {
        return `assets/partners/logo/logo${this.type ? `-${this.type}` : ""}${this.color ? `-${this.color}` : ""}.png`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: LogoComponent, isStandalone: true, selector: "ta-logo", inputs: { color: "color", type: "type", widthPercentage: "widthPercentage" }, ngImport: i0, template: "<img [src]=\"this.getImagePath()\" [attr.width]=\"this.imageWidth\" />\n", styles: ["img{margin:auto}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LogoComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-logo", standalone: true, template: "<img [src]=\"this.getImagePath()\" [attr.width]=\"this.imageWidth\" />\n", styles: ["img{margin:auto}\n"] }]
        }], ctorParameters: () => [], propDecorators: { color: [{
                type: Input
            }], type: [{
                type: Input
            }], widthPercentage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvbG9nby9sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9sb2dvL2xvZ28uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUWpELE1BQU0sT0FBTyxhQUFhO0lBbUJ4QixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO0lBQ3BDLENBQUM7SUFFRDtRQVZBOztXQUVHO1FBRUgsb0JBQWUsR0FBWSxHQUFHLENBQUM7SUFNaEIsQ0FBQztJQUVULFlBQVk7UUFDakIsT0FBTyw0QkFBNEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ2xDLE1BQU0sQ0FBQztJQUNULENBQUM7K0dBN0JVLGFBQWE7bUdBQWIsYUFBYSxpSkNSMUIsMEVBQ0E7OzRGRE9hLGFBQWE7a0JBTnpCLFNBQVM7K0JBQ0UsU0FBUyxjQUdQLElBQUk7d0RBT2hCLEtBQUs7c0JBREosS0FBSztnQkFPTixJQUFJO3NCQURILEtBQUs7Z0JBT04sZUFBZTtzQkFEZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1sb2dvXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9nby5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbG9nby5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBJZiBzZXQsIGxvZ28gd2hpdGUgb3IgYmxhY2sgdmVyc2lvbiB3aWxsIGJlIHRha2VuXG4gICAqL1xuICBASW5wdXQoKVxuICBjb2xvcj86IFwid2hpdGVcIiB8IFwiYmxhY2tcIjtcblxuICAvKipcbiAgICogSWYgc2V0LCBsb2dvIG9uZWxpbmUgdmVyc2lvbiB3aWxsIGJlIHRha2VuXG4gICAqL1xuICBASW5wdXQoKVxuICB0eXBlPzogXCJvbmVsaW5lXCI7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbG9nbyB3aWR0aCBpbiAlXG4gICAqL1xuICBASW5wdXQoKVxuICB3aWR0aFBlcmNlbnRhZ2U/OiBudW1iZXIgPSAxMDA7XG5cbiAgZ2V0IGltYWdlV2lkdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aFBlcmNlbnRhZ2UgKyBcIiVcIjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgZ2V0SW1hZ2VQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBhc3NldHMvcGFydG5lcnMvbG9nby9sb2dvJHt0aGlzLnR5cGUgPyBgLSR7dGhpcy50eXBlfWAgOiBcIlwifSR7XG4gICAgICB0aGlzLmNvbG9yID8gYC0ke3RoaXMuY29sb3J9YCA6IFwiXCJcbiAgICB9LnBuZ2A7XG4gIH1cbn1cbiIsIjxpbWcgW3NyY109XCJ0aGlzLmdldEltYWdlUGF0aCgpXCIgW2F0dHIud2lkdGhdPVwidGhpcy5pbWFnZVdpZHRoXCIgLz5cbiJdfQ==
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LogoComponent {
    get imageWidth() {
        return this.widthPercentage + '%';
    }
    constructor() {
        /**
         * Set the logo width in %
         */
        this.widthPercentage = 100;
    }
    getImagePath() {
        return `assets/partners/logo/logo${this.type ? `-${this.type}` : ''}${this.color ? `-${this.color}` : ''}.png`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: LogoComponent, isStandalone: true, selector: "ta-logo", inputs: { color: "color", type: "type", widthPercentage: "widthPercentage" }, ngImport: i0, template: "<img [src]=\"this.getImagePath()\" [attr.width]=\"this.imageWidth\" />\n", styles: ["img{margin:auto}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-logo', standalone: true, template: "<img [src]=\"this.getImagePath()\" [attr.width]=\"this.imageWidth\" />\n", styles: ["img{margin:auto}\n"] }]
        }], ctorParameters: () => [], propDecorators: { color: [{
                type: Input
            }], type: [{
                type: Input
            }], widthPercentage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvbG9nby9sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9sb2dvL2xvZ28uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUWpELE1BQU0sT0FBTyxhQUFhO0lBbUJ4QixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO0lBQ3BDLENBQUM7SUFFRDtRQVZBOztXQUVHO1FBRUgsb0JBQWUsR0FBWSxHQUFHLENBQUM7SUFNaEIsQ0FBQztJQUVULFlBQVk7UUFDakIsT0FBTyw0QkFBNEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7SUFDakgsQ0FBQzsrR0EzQlUsYUFBYTttR0FBYixhQUFhLGlKQ1IxQiwwRUFDQTs7NEZET2EsYUFBYTtrQkFOekIsU0FBUzsrQkFDQSxTQUFTLGNBR0wsSUFBSTt3REFPaEIsS0FBSztzQkFESixLQUFLO2dCQU9OLElBQUk7c0JBREgsS0FBSztnQkFPTixlQUFlO3NCQURkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6ICd0YS1sb2dvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ28uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dvLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIExvZ29Db21wb25lbnQge1xuICAvKipcbiAgICogSWYgc2V0LCBsb2dvIHdoaXRlIG9yIGJsYWNrIHZlcnNpb24gd2lsbCBiZSB0YWtlblxuICAgKi9cbiAgQElucHV0KClcbiAgY29sb3I/OiAnd2hpdGUnIHwgJ2JsYWNrJztcblxuICAvKipcbiAgICogSWYgc2V0LCBsb2dvIG9uZWxpbmUgdmVyc2lvbiB3aWxsIGJlIHRha2VuXG4gICAqL1xuICBASW5wdXQoKVxuICB0eXBlPzogJ29uZWxpbmUnO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGxvZ28gd2lkdGggaW4gJVxuICAgKi9cbiAgQElucHV0KClcbiAgd2lkdGhQZXJjZW50YWdlPzogbnVtYmVyID0gMTAwO1xuXG4gIGdldCBpbWFnZVdpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGhQZXJjZW50YWdlICsgJyUnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBnZXRJbWFnZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGFzc2V0cy9wYXJ0bmVycy9sb2dvL2xvZ28ke3RoaXMudHlwZSA/IGAtJHt0aGlzLnR5cGV9YCA6ICcnfSR7dGhpcy5jb2xvciA/IGAtJHt0aGlzLmNvbG9yfWAgOiAnJ30ucG5nYDtcbiAgfVxufVxuIiwiPGltZyBbc3JjXT1cInRoaXMuZ2V0SW1hZ2VQYXRoKClcIiBbYXR0ci53aWR0aF09XCJ0aGlzLmltYWdlV2lkdGhcIiAvPlxuIl19
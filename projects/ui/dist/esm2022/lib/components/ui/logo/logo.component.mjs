import { Component, input } from "@angular/core";
import * as i0 from "@angular/core";
export class LogoComponent {
    get imageWidth() {
        return this.widthPercentage() + "%";
    }
    constructor() {
        /**
         * If set, logo white or black version will be taken
         */
        this.color = input(undefined);
        /**
         * If set, logo oneline version will be taken
         */
        this.type = input(undefined);
        /**
         * Set the logo width in %
         */
        this.widthPercentage = input(100);
    }
    getImagePath() {
        return `assets/partners/logo/logo${this.type() ? `-${this.type()}` : ""}${this.color() ? `-${this.color()}` : ""}.png`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: LogoComponent, isStandalone: true, selector: "ta-logo", inputs: { color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null }, widthPercentage: { classPropertyName: "widthPercentage", publicName: "widthPercentage", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<img [src]=\"this.getImagePath()\" [attr.width]=\"this.imageWidth\" />\n", styles: ["img{margin:auto}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LogoComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-logo", standalone: true, template: "<img [src]=\"this.getImagePath()\" [attr.width]=\"this.imageWidth\" />\n", styles: ["img{margin:auto}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvbG9nby9sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9sb2dvL2xvZ28uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUWpELE1BQU0sT0FBTyxhQUFhO0lBZ0J4QixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUVEO1FBbkJBOztXQUVHO1FBQ0gsVUFBSyxHQUFHLEtBQUssQ0FBZ0MsU0FBUyxDQUFDLENBQUM7UUFFeEQ7O1dBRUc7UUFDSCxTQUFJLEdBQUcsS0FBSyxDQUF3QixTQUFTLENBQUMsQ0FBQztRQUUvQzs7V0FFRztRQUNILG9CQUFlLEdBQUcsS0FBSyxDQUFTLEdBQUcsQ0FBQyxDQUFDO0lBTXRCLENBQUM7SUFFVCxZQUFZO1FBQ2pCLE9BQU8sNEJBQTRCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUNyRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3RDLE1BQU0sQ0FBQztJQUNULENBQUM7K0dBMUJVLGFBQWE7bUdBQWIsYUFBYSxrZENSMUIsMEVBQ0E7OzRGRE9hLGFBQWE7a0JBTnpCLFNBQVM7K0JBQ0UsU0FBUyxjQUdQLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGlucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWxvZ29cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9sb2dvLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9sb2dvLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIElmIHNldCwgbG9nbyB3aGl0ZSBvciBibGFjayB2ZXJzaW9uIHdpbGwgYmUgdGFrZW5cbiAgICovXG4gIGNvbG9yID0gaW5wdXQ8XCJ3aGl0ZVwiIHwgXCJibGFja1wiIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBJZiBzZXQsIGxvZ28gb25lbGluZSB2ZXJzaW9uIHdpbGwgYmUgdGFrZW5cbiAgICovXG4gIHR5cGUgPSBpbnB1dDxcIm9uZWxpbmVcIiB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogU2V0IHRoZSBsb2dvIHdpZHRoIGluICVcbiAgICovXG4gIHdpZHRoUGVyY2VudGFnZSA9IGlucHV0PG51bWJlcj4oMTAwKTtcblxuICBnZXQgaW1hZ2VXaWR0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLndpZHRoUGVyY2VudGFnZSgpICsgXCIlXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGdldEltYWdlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgYXNzZXRzL3BhcnRuZXJzL2xvZ28vbG9nbyR7dGhpcy50eXBlKCkgPyBgLSR7dGhpcy50eXBlKCl9YCA6IFwiXCJ9JHtcbiAgICAgIHRoaXMuY29sb3IoKSA/IGAtJHt0aGlzLmNvbG9yKCl9YCA6IFwiXCJcbiAgICB9LnBuZ2A7XG4gIH1cbn1cbiIsIjxpbWcgW3NyY109XCJ0aGlzLmdldEltYWdlUGF0aCgpXCIgW2F0dHIud2lkdGhdPVwidGhpcy5pbWFnZVdpZHRoXCIgLz5cbiJdfQ==
import { LOCALE_ID, Pipe, inject } from "@angular/core";
import * as i0 from "@angular/core";
export class PluralTranslatePipe {
    constructor() {
        /**
         * Le pluriel suit la langue affichée : zéro est un singulier en français (« 0 résultat »),
         * un pluriel en anglais, néerlandais et allemand (« 0 results »).
         */
        this._rules = this._rulesOf(inject(LOCALE_ID));
    }
    transform(key, number) {
        return `${key}.${this._rules.select(Number(number)) === "one" ? "one" : "plural"}`;
    }
    _rulesOf(locale) {
        try {
            return new Intl.PluralRules(locale);
        }
        catch {
            return new Intl.PluralRules("en");
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PluralTranslatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: PluralTranslatePipe, isStandalone: true, name: "pluralTranslate", pure: false }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PluralTranslatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "pluralTranslate",
                    pure: false,
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGUvcGx1cmFsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQWlCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPdkUsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FOzs7V0FHRztRQUNjLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBYTVEO0lBWEMsU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQ25DLE9BQU8sR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JGLENBQUM7SUFFTyxRQUFRLENBQUMsTUFBYztRQUM3QixJQUFJLENBQUM7WUFDSCxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQUMsTUFBTSxDQUFDO1lBQ1AsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7K0dBakJVLG1CQUFtQjs2R0FBbkIsbUJBQW1COzs0RkFBbkIsbUJBQW1CO2tCQUwvQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLElBQUksRUFBRSxLQUFLO29CQUNYLFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoe1xuICBuYW1lOiBcInBsdXJhbFRyYW5zbGF0ZVwiLFxuICBwdXJlOiBmYWxzZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUGx1cmFsVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogTGUgcGx1cmllbCBzdWl0IGxhIGxhbmd1ZSBhZmZpY2jDqWUgOiB6w6lybyBlc3QgdW4gc2luZ3VsaWVyIGVuIGZyYW7Dp2FpcyAowqsgMCByw6lzdWx0YXQgwrspLFxuICAgKiB1biBwbHVyaWVsIGVuIGFuZ2xhaXMsIG7DqWVybGFuZGFpcyBldCBhbGxlbWFuZCAowqsgMCByZXN1bHRzIMK7KS5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX3J1bGVzID0gdGhpcy5fcnVsZXNPZihpbmplY3QoTE9DQUxFX0lEKSk7XG5cbiAgdHJhbnNmb3JtKGtleTogc3RyaW5nLCBudW1iZXI6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2tleX0uJHt0aGlzLl9ydWxlcy5zZWxlY3QoTnVtYmVyKG51bWJlcikpID09PSBcIm9uZVwiID8gXCJvbmVcIiA6IFwicGx1cmFsXCJ9YDtcbiAgfVxuXG4gIHByaXZhdGUgX3J1bGVzT2YobG9jYWxlOiBzdHJpbmcpOiBJbnRsLlBsdXJhbFJ1bGVzIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRsLlBsdXJhbFJ1bGVzKGxvY2FsZSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gbmV3IEludGwuUGx1cmFsUnVsZXMoXCJlblwiKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class PluralTranslatePipe {
    transform(key, number) {
        return `${key}.${number == 0 || number == 1 ? "one" : "plural"}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGUvcGx1cmFsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBT3BELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQ25DLE9BQU8sR0FBRyxHQUFHLElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25FLENBQUM7K0dBSFUsbUJBQW1COzZHQUFuQixtQkFBbUI7OzRGQUFuQixtQkFBbUI7a0JBTC9CLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHtcbiAgbmFtZTogXCJwbHVyYWxUcmFuc2xhdGVcIixcbiAgcHVyZTogZmFsc2UsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFBsdXJhbFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGtleTogc3RyaW5nLCBudW1iZXI6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2tleX0uJHtudW1iZXIgPT0gMCB8fCBudW1iZXIgPT0gMSA/IFwib25lXCIgOiBcInBsdXJhbFwifWA7XG4gIH1cbn1cbiJdfQ==
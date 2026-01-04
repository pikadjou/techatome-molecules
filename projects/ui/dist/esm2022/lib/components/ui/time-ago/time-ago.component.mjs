import { DatePipe, NgIf } from "@angular/common";
import { Component, input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { differenceInCalendarDays } from "date-fns";
import { TaTranslationUI } from "../../../translation.service";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class TimeAgoComponent {
    get absDays() {
        return Math.abs(this.days);
    }
    get days() {
        return differenceInCalendarDays(new Date(this.date()), new Date());
    }
    key() {
        const diffDays = this.days;
        return this._getTranslationKey(diffDays);
    }
    _getTranslationKey(diffDays) {
        if (diffDays === 0) {
            return "ui.common.today";
        }
        if (diffDays === -1) {
            return "ui.common.yesterday";
        }
        if (diffDays === 1) {
            return "ui.common.tomorrow";
        }
        if (diffDays < -1 && diffDays >= -3) {
            return "ui.common.above";
        }
        if (diffDays > 1 && diffDays <= 3) {
            return "ui.common.ahead";
        }
        return "ui.common.to-date";
    }
    constructor() {
        this.date = input.required();
        this.withHours = input(false);
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimeAgoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TimeAgoComponent, isStandalone: true, selector: "ta-time-ago", inputs: { date: { classPropertyName: "date", publicName: "date", isSignal: true, isRequired: true, transformFunction: null }, withHours: { classPropertyName: "withHours", publicName: "withHours", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate : { date: this.date() | date : \"shortDate\", days: this.absDays }\n  }}\n  @if(this.withHours()) {\n  {{ this.date() | date : \"shortTime\" }}\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimeAgoComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-time-ago", standalone: true, imports: [NgIf, TranslateModule, DatePipe], template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate : { date: this.date() | date : \"shortDate\", days: this.absDays }\n  }}\n  @if(this.withHours()) {\n  {{ this.date() | date : \"shortTime\" }}\n  }\n</div>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3RpbWUtYWdvL3RpbWUtYWdvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90aW1lLWFnby90aW1lLWFnby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFTL0QsTUFBTSxPQUFPLGdCQUFnQjtJQUszQixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLHdCQUF3QixDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ00sR0FBRztRQUNSLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFFBQWdCO1FBQ3pDLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ25CLE9BQU8saUJBQWlCLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEIsT0FBTyxxQkFBcUIsQ0FBQztRQUMvQixDQUFDO1FBQ0QsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxvQkFBb0IsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEMsT0FBTyxpQkFBaUIsQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNsQyxPQUFPLGlCQUFpQixDQUFDO1FBQzNCLENBQUM7UUFDRCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRDtRQW5DQSxTQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBVSxDQUFDO1FBRWhDLGNBQVMsR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFrQ2hDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOytHQXRDVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQiwyVUNmN0IsK09BU0EseURESWtCLGVBQWUsdUZBQUUsUUFBUTs7NEZBRTlCLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFDRSxhQUFhLGNBR1gsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSwgTmdJZiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gXCIuLi8uLi8uLi90cmFuc2xhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS10aW1lLWFnb1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3RpbWUtYWdvLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90aW1lLWFnby5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIFRyYW5zbGF0ZU1vZHVsZSwgRGF0ZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lQWdvQ29tcG9uZW50IHtcbiAgZGF0ZSA9IGlucHV0LnJlcXVpcmVkPHN0cmluZz4oKTtcblxuICB3aXRoSG91cnMgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgZ2V0IGFic0RheXMoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGF5cyk7XG4gIH1cbiAgZ2V0IGRheXMoKSB7XG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhuZXcgRGF0ZSh0aGlzLmRhdGUoKSksIG5ldyBEYXRlKCkpO1xuICB9XG4gIHB1YmxpYyBrZXkoKSB7XG4gICAgY29uc3QgZGlmZkRheXMgPSB0aGlzLmRheXM7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0VHJhbnNsYXRpb25LZXkoZGlmZkRheXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJhbnNsYXRpb25LZXkoZGlmZkRheXM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKGRpZmZEYXlzID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJ1aS5jb21tb24udG9kYXlcIjtcbiAgICB9XG4gICAgaWYgKGRpZmZEYXlzID09PSAtMSkge1xuICAgICAgcmV0dXJuIFwidWkuY29tbW9uLnllc3RlcmRheVwiO1xuICAgIH1cbiAgICBpZiAoZGlmZkRheXMgPT09IDEpIHtcbiAgICAgIHJldHVybiBcInVpLmNvbW1vbi50b21vcnJvd1wiO1xuICAgIH1cbiAgICBpZiAoZGlmZkRheXMgPCAtMSAmJiBkaWZmRGF5cyA+PSAtMykge1xuICAgICAgcmV0dXJuIFwidWkuY29tbW9uLmFib3ZlXCI7XG4gICAgfVxuICAgIGlmIChkaWZmRGF5cyA+IDEgJiYgZGlmZkRheXMgPD0gMykge1xuICAgICAgcmV0dXJuIFwidWkuY29tbW9uLmFoZWFkXCI7XG4gICAgfVxuICAgIHJldHVybiBcInVpLmNvbW1vbi50by1kYXRlXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXgtc3RhcnQgZy1zcGFjZS1zbVwiPlxuICB7e1xuICAgIHRoaXMua2V5KClcbiAgICAgIHwgdHJhbnNsYXRlIDogeyBkYXRlOiB0aGlzLmRhdGUoKSB8IGRhdGUgOiBcInNob3J0RGF0ZVwiLCBkYXlzOiB0aGlzLmFic0RheXMgfVxuICB9fVxuICBAaWYodGhpcy53aXRoSG91cnMoKSkge1xuICB7eyB0aGlzLmRhdGUoKSB8IGRhdGUgOiBcInNob3J0VGltZVwiIH19XG4gIH1cbjwvZGl2PlxuIl19
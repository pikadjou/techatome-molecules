import { DatePipe, NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
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
        return differenceInCalendarDays(new Date(this.date), new Date());
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
        this.withHours = false;
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimeAgoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TimeAgoComponent, isStandalone: true, selector: "ta-time-ago", inputs: { date: "date", withHours: "withHours" }, ngImport: i0, template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate : { date: this.date | date : \"shortDate\", days: this.absDays }\n  }}\n  @if(this.withHours) {\n  {{ this.date | date : \"shortTime\" }}\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimeAgoComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-time-ago", standalone: true, imports: [NgIf, TranslateModule, DatePipe], template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate : { date: this.date | date : \"shortDate\", days: this.absDays }\n  }}\n  @if(this.withHours) {\n  {{ this.date | date : \"shortTime\" }}\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { date: [{
                type: Input
            }], withHours: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3RpbWUtYWdvL3RpbWUtYWdvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90aW1lLWFnby90aW1lLWFnby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFTL0QsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLHdCQUF3QixDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNNLEdBQUc7UUFDUixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxRQUFnQjtRQUN6QyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNuQixPQUFPLGlCQUFpQixDQUFDO1FBQzNCLENBQUM7UUFDRCxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3BCLE9BQU8scUJBQXFCLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksUUFBUSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ25CLE9BQU8sb0JBQW9CLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3BDLE9BQU8saUJBQWlCLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbEMsT0FBTyxpQkFBaUIsQ0FBQztRQUMzQixDQUFDO1FBQ0QsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQ7UUFqQ0EsY0FBUyxHQUFZLEtBQUssQ0FBQztRQWtDekIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7K0dBeENVLGdCQUFnQjttR0FBaEIsZ0JBQWdCLHlIQ2Y3Qix5T0FTQSx5RERJa0IsZUFBZSx1RkFBRSxRQUFROzs0RkFFOUIsZ0JBQWdCO2tCQVA1QixTQUFTOytCQUNFLGFBQWEsY0FHWCxJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQzt3REFJMUMsSUFBSTtzQkFESCxLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlLCBOZ0lmIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblVJIH0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLXRpbWUtYWdvXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGltZS1hZ28uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3RpbWUtYWdvLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgVHJhbnNsYXRlTW9kdWxlLCBEYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVBZ29Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBkYXRlITogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHdpdGhIb3VyczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdldCBhYnNEYXlzKCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRheXMpO1xuICB9XG4gIGdldCBkYXlzKCkge1xuICAgIHJldHVybiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMobmV3IERhdGUodGhpcy5kYXRlKSwgbmV3IERhdGUoKSk7XG4gIH1cbiAgcHVibGljIGtleSgpIHtcbiAgICBjb25zdCBkaWZmRGF5cyA9IHRoaXMuZGF5cztcblxuICAgIHJldHVybiB0aGlzLl9nZXRUcmFuc2xhdGlvbktleShkaWZmRGF5cyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmFuc2xhdGlvbktleShkaWZmRGF5czogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAoZGlmZkRheXMgPT09IDApIHtcbiAgICAgIHJldHVybiBcInVpLmNvbW1vbi50b2RheVwiO1xuICAgIH1cbiAgICBpZiAoZGlmZkRheXMgPT09IC0xKSB7XG4gICAgICByZXR1cm4gXCJ1aS5jb21tb24ueWVzdGVyZGF5XCI7XG4gICAgfVxuICAgIGlmIChkaWZmRGF5cyA9PT0gMSkge1xuICAgICAgcmV0dXJuIFwidWkuY29tbW9uLnRvbW9ycm93XCI7XG4gICAgfVxuICAgIGlmIChkaWZmRGF5cyA8IC0xICYmIGRpZmZEYXlzID49IC0zKSB7XG4gICAgICByZXR1cm4gXCJ1aS5jb21tb24uYWJvdmVcIjtcbiAgICB9XG4gICAgaWYgKGRpZmZEYXlzID4gMSAmJiBkaWZmRGF5cyA8PSAzKSB7XG4gICAgICByZXR1cm4gXCJ1aS5jb21tb24uYWhlYWRcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwidWkuY29tbW9uLnRvLWRhdGVcIjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmxleC1zdGFydCBnLXNwYWNlLXNtXCI+XG4gIHt7XG4gICAgdGhpcy5rZXkoKVxuICAgICAgfCB0cmFuc2xhdGUgOiB7IGRhdGU6IHRoaXMuZGF0ZSB8IGRhdGUgOiBcInNob3J0RGF0ZVwiLCBkYXlzOiB0aGlzLmFic0RheXMgfVxuICB9fVxuICBAaWYodGhpcy53aXRoSG91cnMpIHtcbiAge3sgdGhpcy5kYXRlIHwgZGF0ZSA6IFwic2hvcnRUaW1lXCIgfX1cbiAgfVxuPC9kaXY+XG4iXX0=
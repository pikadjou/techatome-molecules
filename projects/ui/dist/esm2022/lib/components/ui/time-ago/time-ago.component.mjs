import { NgIf, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { differenceInCalendarDays } from 'date-fns';
import { CamTranslationUI } from '../translation.service';
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
            return 'ui.common.today';
        }
        if (diffDays === -1) {
            return 'ui.common.yesterday';
        }
        if (diffDays === 1) {
            return 'ui.common.tomorrow';
        }
        if (diffDays < -1 && diffDays >= -3) {
            return 'ui.common.above';
        }
        if (diffDays > 1 && diffDays <= 3) {
            return 'ui.common.ahead';
        }
        return 'ui.common.to-date';
    }
    constructor() {
        this.withHours = false;
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimeAgoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: TimeAgoComponent, isStandalone: true, selector: "ta-time-ago", inputs: { date: "date", withHours: "withHours" }, ngImport: i0, template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate : { date: this.date | date : \"shortDate\", days: this.absDays }\n  }}\n  @if(this.withHours) {\n  {{ this.date | date : \"shortTime\" }}\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimeAgoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-time-ago', standalone: true, imports: [NgIf, TranslateModule, DatePipe], template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate : { date: this.date | date : \"shortDate\", days: this.absDays }\n  }}\n  @if(this.withHours) {\n  {{ this.date | date : \"shortTime\" }}\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { date: [{
                type: Input
            }], withHours: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3RpbWUtYWdvL3RpbWUtYWdvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90aW1lLWFnby90aW1lLWFnby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVMxRCxNQUFNLE9BQU8sZ0JBQWdCO0lBTzNCLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sd0JBQXdCLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ00sR0FBRztRQUNSLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFFBQWdCO1FBQ3pDLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ25CLE9BQU8saUJBQWlCLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEIsT0FBTyxxQkFBcUIsQ0FBQztRQUMvQixDQUFDO1FBQ0QsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxvQkFBb0IsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEMsT0FBTyxpQkFBaUIsQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNsQyxPQUFPLGlCQUFpQixDQUFDO1FBQzNCLENBQUM7UUFDRCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRDtRQWpDQSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBa0N6QixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOytHQXhDVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQix5SENmN0IseU9BU0EseURESWtCLGVBQWUsdUZBQUUsUUFBUTs7NEZBRTlCLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFDQSxhQUFhLGNBR1QsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUM7d0RBSTFDLElBQUk7c0JBREgsS0FBSztnQkFJTixTQUFTO3NCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmLCBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvblVJIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6ICd0YS10aW1lLWFnbycsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLWFnby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWUtYWdvLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBUcmFuc2xhdGVNb2R1bGUsIERhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZUFnb0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGRhdGUhOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgd2l0aEhvdXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IGFic0RheXMoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGF5cyk7XG4gIH1cbiAgZ2V0IGRheXMoKSB7XG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhuZXcgRGF0ZSh0aGlzLmRhdGUpLCBuZXcgRGF0ZSgpKTtcbiAgfVxuICBwdWJsaWMga2V5KCkge1xuICAgIGNvbnN0IGRpZmZEYXlzID0gdGhpcy5kYXlzO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldFRyYW5zbGF0aW9uS2V5KGRpZmZEYXlzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyYW5zbGF0aW9uS2V5KGRpZmZEYXlzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChkaWZmRGF5cyA9PT0gMCkge1xuICAgICAgcmV0dXJuICd1aS5jb21tb24udG9kYXknO1xuICAgIH1cbiAgICBpZiAoZGlmZkRheXMgPT09IC0xKSB7XG4gICAgICByZXR1cm4gJ3VpLmNvbW1vbi55ZXN0ZXJkYXknO1xuICAgIH1cbiAgICBpZiAoZGlmZkRheXMgPT09IDEpIHtcbiAgICAgIHJldHVybiAndWkuY29tbW9uLnRvbW9ycm93JztcbiAgICB9XG4gICAgaWYgKGRpZmZEYXlzIDwgLTEgJiYgZGlmZkRheXMgPj0gLTMpIHtcbiAgICAgIHJldHVybiAndWkuY29tbW9uLmFib3ZlJztcbiAgICB9XG4gICAgaWYgKGRpZmZEYXlzID4gMSAmJiBkaWZmRGF5cyA8PSAzKSB7XG4gICAgICByZXR1cm4gJ3VpLmNvbW1vbi5haGVhZCc7XG4gICAgfVxuICAgIHJldHVybiAndWkuY29tbW9uLnRvLWRhdGUnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgQ2FtVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmxleC1zdGFydCBnLXNwYWNlLXNtXCI+XG4gIHt7XG4gICAgdGhpcy5rZXkoKVxuICAgICAgfCB0cmFuc2xhdGUgOiB7IGRhdGU6IHRoaXMuZGF0ZSB8IGRhdGUgOiBcInNob3J0RGF0ZVwiLCBkYXlzOiB0aGlzLmFic0RheXMgfVxuICB9fVxuICBAaWYodGhpcy53aXRoSG91cnMpIHtcbiAge3sgdGhpcy5kYXRlIHwgZGF0ZSA6IFwic2hvcnRUaW1lXCIgfX1cbiAgfVxuPC9kaXY+XG4iXX0=
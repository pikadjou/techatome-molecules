import { DatePipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { differenceInCalendarDays } from 'date-fns';
import { TaTranslationUI } from '../translation.service';
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
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimeAgoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TimeAgoComponent, isStandalone: true, selector: "ta-time-ago", inputs: { date: "date", withHours: "withHours" }, ngImport: i0, template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate : { date: this.date | date : \"shortDate\", days: this.absDays }\n  }}\n  @if(this.withHours) {\n  {{ this.date | date : \"shortTime\" }}\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimeAgoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-time-ago', standalone: true, imports: [NgIf, TranslateModule, DatePipe], template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate : { date: this.date | date : \"shortDate\", days: this.absDays }\n  }}\n  @if(this.withHours) {\n  {{ this.date | date : \"shortTime\" }}\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { date: [{
                type: Input
            }], withHours: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3RpbWUtYWdvL3RpbWUtYWdvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90aW1lLWFnby90aW1lLWFnby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFTekQsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLHdCQUF3QixDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNNLEdBQUc7UUFDUixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxRQUFnQjtRQUN6QyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNuQixPQUFPLGlCQUFpQixDQUFDO1FBQzNCLENBQUM7UUFDRCxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3BCLE9BQU8scUJBQXFCLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksUUFBUSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ25CLE9BQU8sb0JBQW9CLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3BDLE9BQU8saUJBQWlCLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbEMsT0FBTyxpQkFBaUIsQ0FBQztRQUMzQixDQUFDO1FBQ0QsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQ7UUFqQ0EsY0FBUyxHQUFZLEtBQUssQ0FBQztRQWtDekIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7K0dBeENVLGdCQUFnQjttR0FBaEIsZ0JBQWdCLHlIQ2Y3Qix5T0FTQSx5RERJa0IsZUFBZSx1RkFBRSxRQUFROzs0RkFFOUIsZ0JBQWdCO2tCQVA1QixTQUFTOytCQUNFLGFBQWEsY0FHWCxJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQzt3REFJMUMsSUFBSTtzQkFESCxLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS10aW1lLWFnbycsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLWFnby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWUtYWdvLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBUcmFuc2xhdGVNb2R1bGUsIERhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZUFnb0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGRhdGUhOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgd2l0aEhvdXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IGFic0RheXMoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGF5cyk7XG4gIH1cbiAgZ2V0IGRheXMoKSB7XG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhuZXcgRGF0ZSh0aGlzLmRhdGUpLCBuZXcgRGF0ZSgpKTtcbiAgfVxuICBwdWJsaWMga2V5KCkge1xuICAgIGNvbnN0IGRpZmZEYXlzID0gdGhpcy5kYXlzO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldFRyYW5zbGF0aW9uS2V5KGRpZmZEYXlzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyYW5zbGF0aW9uS2V5KGRpZmZEYXlzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChkaWZmRGF5cyA9PT0gMCkge1xuICAgICAgcmV0dXJuICd1aS5jb21tb24udG9kYXknO1xuICAgIH1cbiAgICBpZiAoZGlmZkRheXMgPT09IC0xKSB7XG4gICAgICByZXR1cm4gJ3VpLmNvbW1vbi55ZXN0ZXJkYXknO1xuICAgIH1cbiAgICBpZiAoZGlmZkRheXMgPT09IDEpIHtcbiAgICAgIHJldHVybiAndWkuY29tbW9uLnRvbW9ycm93JztcbiAgICB9XG4gICAgaWYgKGRpZmZEYXlzIDwgLTEgJiYgZGlmZkRheXMgPj0gLTMpIHtcbiAgICAgIHJldHVybiAndWkuY29tbW9uLmFib3ZlJztcbiAgICB9XG4gICAgaWYgKGRpZmZEYXlzID4gMSAmJiBkaWZmRGF5cyA8PSAzKSB7XG4gICAgICByZXR1cm4gJ3VpLmNvbW1vbi5haGVhZCc7XG4gICAgfVxuICAgIHJldHVybiAndWkuY29tbW9uLnRvLWRhdGUnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVGFUcmFuc2xhdGlvblVJLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmbGV4LXN0YXJ0IGctc3BhY2Utc21cIj5cbiAge3tcbiAgICB0aGlzLmtleSgpXG4gICAgICB8IHRyYW5zbGF0ZSA6IHsgZGF0ZTogdGhpcy5kYXRlIHwgZGF0ZSA6IFwic2hvcnREYXRlXCIsIGRheXM6IHRoaXMuYWJzRGF5cyB9XG4gIH19XG4gIEBpZih0aGlzLndpdGhIb3Vycykge1xuICB7eyB0aGlzLmRhdGUgfCBkYXRlIDogXCJzaG9ydFRpbWVcIiB9fVxuICB9XG48L2Rpdj5cbiJdfQ==
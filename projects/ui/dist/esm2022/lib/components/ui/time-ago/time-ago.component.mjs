import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { differenceInCalendarDays } from 'date-fns';
import { TaTranslationUI } from '../../../translation.service';
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
        if (this.withHours()) {
            return 'ui.common.to-date-with-hours';
        }
        return 'ui.common.to-date';
    }
    constructor() {
        this.date = input.required();
        this.withHours = input(false);
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimeAgoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TimeAgoComponent, isStandalone: true, selector: "ta-time-ago", inputs: { date: { classPropertyName: "date", publicName: "date", isSignal: true, isRequired: true, transformFunction: null }, withHours: { classPropertyName: "withHours", publicName: "withHours", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate: { date: this.date() | date: 'shortDate', days: this.absDays, hours: this.date() | date: 'shortTime' }\n  }}\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TimeAgoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-time-ago', standalone: true, imports: [TranslateModule, DatePipe], template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate: { date: this.date() | date: 'shortDate', days: this.absDays, hours: this.date() | date: 'shortTime' }\n  }}\n</div>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3RpbWUtYWdvL3RpbWUtYWdvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90aW1lLWFnby90aW1lLWFnby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7OztBQVMvRCxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sd0JBQXdCLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDTSxHQUFHO1FBQ1IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sa0JBQWtCLENBQUMsUUFBZ0I7UUFDekMsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxpQkFBaUIsQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNwQixPQUFPLHFCQUFxQixDQUFDO1FBQy9CLENBQUM7UUFDRCxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNuQixPQUFPLG9CQUFvQixDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNwQyxPQUFPLGlCQUFpQixDQUFDO1FBQzNCLENBQUM7UUFDRCxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE9BQU8saUJBQWlCLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDckIsT0FBTyw4QkFBOEIsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQ7UUF0Q0EsU0FBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVUsQ0FBQztRQUVoQyxjQUFTLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBcUNoQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQzsrR0F6Q1UsZ0JBQWdCO21HQUFoQixnQkFBZ0IsMlVDZjdCLHVNQU1BLHlERE9ZLGVBQWUsdUZBQUUsUUFBUTs7NEZBRXhCLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFDRSxhQUFhLGNBR1gsSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS10aW1lLWFnbycsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLWFnby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWUtYWdvLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtUcmFuc2xhdGVNb2R1bGUsIERhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZUFnb0NvbXBvbmVudCB7XG4gIGRhdGUgPSBpbnB1dC5yZXF1aXJlZDxzdHJpbmc+KCk7XG5cbiAgd2l0aEhvdXJzID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGdldCBhYnNEYXlzKCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRheXMpO1xuICB9XG4gIGdldCBkYXlzKCkge1xuICAgIHJldHVybiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMobmV3IERhdGUodGhpcy5kYXRlKCkpLCBuZXcgRGF0ZSgpKTtcbiAgfVxuICBwdWJsaWMga2V5KCkge1xuICAgIGNvbnN0IGRpZmZEYXlzID0gdGhpcy5kYXlzO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldFRyYW5zbGF0aW9uS2V5KGRpZmZEYXlzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyYW5zbGF0aW9uS2V5KGRpZmZEYXlzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChkaWZmRGF5cyA9PT0gMCkge1xuICAgICAgcmV0dXJuICd1aS5jb21tb24udG9kYXknO1xuICAgIH1cbiAgICBpZiAoZGlmZkRheXMgPT09IC0xKSB7XG4gICAgICByZXR1cm4gJ3VpLmNvbW1vbi55ZXN0ZXJkYXknO1xuICAgIH1cbiAgICBpZiAoZGlmZkRheXMgPT09IDEpIHtcbiAgICAgIHJldHVybiAndWkuY29tbW9uLnRvbW9ycm93JztcbiAgICB9XG4gICAgaWYgKGRpZmZEYXlzIDwgLTEgJiYgZGlmZkRheXMgPj0gLTMpIHtcbiAgICAgIHJldHVybiAndWkuY29tbW9uLmFib3ZlJztcbiAgICB9XG4gICAgaWYgKGRpZmZEYXlzID4gMSAmJiBkaWZmRGF5cyA8PSAzKSB7XG4gICAgICByZXR1cm4gJ3VpLmNvbW1vbi5haGVhZCc7XG4gICAgfVxuICAgIGlmICh0aGlzLndpdGhIb3VycygpKSB7XG4gICAgICByZXR1cm4gJ3VpLmNvbW1vbi50by1kYXRlLXdpdGgtaG91cnMnO1xuICAgIH1cbiAgICByZXR1cm4gJ3VpLmNvbW1vbi50by1kYXRlJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmxleC1zdGFydCBnLXNwYWNlLXNtXCI+XG4gIHt7XG4gICAgdGhpcy5rZXkoKVxuICAgICAgfCB0cmFuc2xhdGU6IHsgZGF0ZTogdGhpcy5kYXRlKCkgfCBkYXRlOiAnc2hvcnREYXRlJywgZGF5czogdGhpcy5hYnNEYXlzLCBob3VyczogdGhpcy5kYXRlKCkgfCBkYXRlOiAnc2hvcnRUaW1lJyB9XG4gIH19XG48L2Rpdj5cbiJdfQ==
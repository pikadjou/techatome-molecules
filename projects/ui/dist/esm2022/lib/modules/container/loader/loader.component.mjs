import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { getPlaceholderConfig } from '../placeholder/config';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-spinner";
export class LoaderComponent {
    constructor() {
        this.isLoading = false;
        this.skeleton = null;
        this.isLoading = true;
    }
    getPlaceholder() {
        return getPlaceholderConfig(this.skeleton || 'default');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: LoaderComponent, isStandalone: true, selector: "ta-loader", inputs: { isLoading: "isLoading", skeleton: "skeleton" }, ngImport: i0, template: "@if (this.isLoading) {\n  @if (!this.skeleton) {\n    <div class=\"pt-space-15\">\n      <mat-spinner style=\"margin: 0 auto\" [diameter]=\"20\"></mat-spinner>\n    </div>\n  } @else {\n    <ta-placeholder [placeholder]=\"this.getPlaceholder()\"></ta-placeholder>\n  }\n} @else {\n  <ng-content></ng-content>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "component", type: PlaceholderComponent, selector: "ta-placeholder", inputs: ["placeholder"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-loader', standalone: true, imports: [NgIf, MatProgressSpinnerModule, PlaceholderComponent], template: "@if (this.isLoading) {\n  @if (!this.skeleton) {\n    <div class=\"pt-space-15\">\n      <mat-spinner style=\"margin: 0 auto\" [diameter]=\"20\"></mat-spinner>\n    </div>\n  } @else {\n    <ta-placeholder [placeholder]=\"this.getPlaceholder()\"></ta-placeholder>\n  }\n} @else {\n  <ng-content></ng-content>\n}\n" }]
        }], ctorParameters: () => [], propDecorators: { isLoading: [{
                type: Input
            }], skeleton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9jb250YWluZXIvbG9hZGVyL2xvYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL2xvYWRlci9sb2FkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlFLE9BQU8sRUFBa0Msb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBUzVFLE1BQU0sT0FBTyxlQUFlO0lBTzFCO1FBTEEsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUdsQixhQUFRLEdBQTZCLElBQUksQ0FBQztRQUd4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sY0FBYztRQUNuQixPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLENBQUM7SUFDMUQsQ0FBQzsrR0FiVSxlQUFlO21HQUFmLGVBQWUsK0hDZDVCLDJUQVdBLHlERENrQix3QkFBd0IsbU9BQUUsb0JBQW9COzs0RkFFbkQsZUFBZTtrQkFQM0IsU0FBUzsrQkFDQSxXQUFXLGNBR1AsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDO3dEQUkvRCxTQUFTO3NCQURSLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuaW1wb3J0IHsgUGxhY2Vob2xkZXIsIFBsYWNlaG9sZGVyQ29uZmlnLCBnZXRQbGFjZWhvbGRlckNvbmZpZyB9IGZyb20gJy4uL3BsYWNlaG9sZGVyL2NvbmZpZyc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlckNvbXBvbmVudCB9IGZyb20gJy4uL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6ICd0YS1sb2FkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsIFBsYWNlaG9sZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2tlbGV0b246IFBsYWNlaG9sZGVyQ29uZmlnIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGdldFBsYWNlaG9sZGVyKCk6IFBsYWNlaG9sZGVyIHtcbiAgICByZXR1cm4gZ2V0UGxhY2Vob2xkZXJDb25maWcodGhpcy5za2VsZXRvbiB8fCAnZGVmYXVsdCcpO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuaXNMb2FkaW5nKSB7XG4gIEBpZiAoIXRoaXMuc2tlbGV0b24pIHtcbiAgICA8ZGl2IGNsYXNzPVwicHQtc3BhY2UtMTVcIj5cbiAgICAgIDxtYXQtc3Bpbm5lciBzdHlsZT1cIm1hcmdpbjogMCBhdXRvXCIgW2RpYW1ldGVyXT1cIjIwXCI+PC9tYXQtc3Bpbm5lcj5cbiAgICA8L2Rpdj5cbiAgfSBAZWxzZSB7XG4gICAgPHRhLXBsYWNlaG9sZGVyIFtwbGFjZWhvbGRlcl09XCJ0aGlzLmdldFBsYWNlaG9sZGVyKClcIj48L3RhLXBsYWNlaG9sZGVyPlxuICB9XG59IEBlbHNlIHtcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxufVxuIl19
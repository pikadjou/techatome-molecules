import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';
import { CamTranslationLayout } from '../translation.service';
import { TitleComponent } from '../../../components/ui/title/title.component';
import { LayoutContentComponent } from '../layout-content/layout-content.component';
import { LayoutHeaderComponent } from '../layout-header/layout-header.component';
import { LayoutTitleComponent } from '../layout-title/layout-title.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@ngx-translate/core";
export class LayoutModalComponent extends TaBaseComponent {
    constructor(dialogRef) {
        super();
        this.dialogRef = dialogRef;
        this.style = 'classic';
        this.title = '';
        CamTranslationLayout.getInstance();
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(this.style + '-modal');
    }
    close() {
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutModalComponent, deps: [{ token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutModalComponent, isStandalone: true, selector: "ta-layout-modal", inputs: { style: "style", title: "title" }, usesInheritance: true, ngImport: i0, template: "<div class=\"modal-container\">\n  <ta-layout-header>\n    <div class=\"header flex-row justify-content-between\">\n      <ta-title [level]=\"3\" [isBold]=\"true\">{{ this.title | translate }}</ta-title>\n      <div (click)=\"this.close()\">\n        <ta-font-icon name=\"close\" type=\"md\"></ta-font-icon>\n      </div>\n    </div>\n  </ta-layout-header>\n  <ta-layout-content [autoHeight]=\"true\">\n    <ng-content></ng-content>\n  </ta-layout-content>\n</div>\n", styles: [".modal-container{padding:var(--ta-space-md);background-color:var(--ta-surface-primary)}.modal-container .header{padding-bottom:var(--ta-space-sm)}.modal-container ta-font-icon{cursor:pointer}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: LayoutHeaderComponent, selector: "ta-layout-header" }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: LayoutContentComponent, selector: "ta-layout-content", inputs: ["autoHeight"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-modal', standalone: true, imports: [
                        FontIconComponent,
                        TranslateModule,
                        LayoutTitleComponent,
                        LayoutHeaderComponent,
                        TitleComponent,
                        LayoutContentComponent,
                    ], template: "<div class=\"modal-container\">\n  <ta-layout-header>\n    <div class=\"header flex-row justify-content-between\">\n      <ta-title [level]=\"3\" [isBold]=\"true\">{{ this.title | translate }}</ta-title>\n      <div (click)=\"this.close()\">\n        <ta-font-icon name=\"close\" type=\"md\"></ta-font-icon>\n      </div>\n    </div>\n  </ta-layout-header>\n  <ta-layout-content [autoHeight]=\"true\">\n    <ng-content></ng-content>\n  </ta-layout-content>\n</div>\n", styles: [".modal-container{padding:var(--ta-space-md);background-color:var(--ta-surface-primary)}.modal-container .header{padding-bottom:var(--ta-space-sm)}.modal-container ta-font-icon{cursor:pointer}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatDialogRef }], propDecorators: { style: [{
                type: Input
            }], title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvbGF5b3V0LW1vZGFsL2xheW91dC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGF5b3V0L2xheW91dC1tb2RhbC9sYXlvdXQtbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7OztBQWlCOUUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWU7SUFPdkQsWUFBbUIsU0FBNEI7UUFDN0MsS0FBSyxFQUFFLENBQUM7UUFEUyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUwvQyxVQUFLLEdBQWUsU0FBUyxDQUFDO1FBRzlCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFJakIsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOytHQWxCVSxvQkFBb0I7bUdBQXBCLG9CQUFvQiw4SUM3QmpDLG9kQWFBLDJQRFFJLGlCQUFpQixrRkFDakIsZUFBZSw0RkFFZixxQkFBcUIsNkRBQ3JCLGNBQWMsNkZBQ2Qsc0JBQXNCOzs0RkFHYixvQkFBb0I7a0JBZGhDLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQO3dCQUNQLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxzQkFBc0I7cUJBQ3ZCO2lGQUlELEtBQUs7c0JBREosS0FBSztnQkFJTixLQUFLO3NCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgQ2FtVHJhbnNsYXRpb25MYXlvdXQgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVGl0bGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3VpL3RpdGxlL3RpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vbGF5b3V0LWNvbnRlbnQvbGF5b3V0LWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2xheW91dC1oZWFkZXIvbGF5b3V0LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0VGl0bGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXlvdXQtdGl0bGUvbGF5b3V0LXRpdGxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIE1vZGFsU3R5bGUgPSAnZnVsbCcgfCAnYmlnJyB8ICdjbGFzc2ljJyB8ICdzbWFsbCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1sYXlvdXQtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBGb250SWNvbkNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTGF5b3V0VGl0bGVDb21wb25lbnQsXG4gICAgTGF5b3V0SGVhZGVyQ29tcG9uZW50LFxuICAgIFRpdGxlQ29tcG9uZW50LFxuICAgIExheW91dENvbnRlbnRDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExheW91dE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgc3R5bGU6IE1vZGFsU3R5bGUgPSAnY2xhc3NpYyc7XG5cbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxhbnk+KSB7XG4gICAgc3VwZXIoKTtcbiAgICBDYW1UcmFuc2xhdGlvbkxheW91dC5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuYWRkUGFuZWxDbGFzcyh0aGlzLnN0eWxlICsgJy1tb2RhbCcpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cbiAgPHRhLWxheW91dC1oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlciBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPHRhLXRpdGxlIFtsZXZlbF09XCIzXCIgW2lzQm9sZF09XCJ0cnVlXCI+e3sgdGhpcy50aXRsZSB8IHRyYW5zbGF0ZSB9fTwvdGEtdGl0bGU+XG4gICAgICA8ZGl2IChjbGljayk9XCJ0aGlzLmNsb3NlKClcIj5cbiAgICAgICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwiY2xvc2VcIiB0eXBlPVwibWRcIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RhLWxheW91dC1oZWFkZXI+XG4gIDx0YS1sYXlvdXQtY29udGVudCBbYXV0b0hlaWdodF09XCJ0cnVlXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3RhLWxheW91dC1jb250ZW50PlxuPC9kaXY+XG4iXX0=
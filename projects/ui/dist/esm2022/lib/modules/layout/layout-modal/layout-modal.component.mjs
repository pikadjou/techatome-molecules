import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';
import { TitleComponent } from '../../../components/ui/title/title.component';
import { LayoutContentComponent } from '../layout-content/layout-content.component';
import { LayoutHeaderComponent } from '../layout-header/layout-header.component';
import { LayoutTitleComponent } from '../layout-title/layout-title.component';
import { TaTranslationLayout } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@ngx-translate/core";
export class LayoutModalComponent extends TaBaseComponent {
    constructor(dialogRef) {
        super();
        this.dialogRef = dialogRef;
        this.style = 'classic';
        this.title = '';
        TaTranslationLayout.getInstance();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvbGF5b3V0LW1vZGFsL2xheW91dC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGF5b3V0L2xheW91dC1tb2RhbC9sYXlvdXQtbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQWlCN0QsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWU7SUFPdkQsWUFBbUIsU0FBNEI7UUFDN0MsS0FBSyxFQUFFLENBQUM7UUFEUyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUwvQyxVQUFLLEdBQWUsU0FBUyxDQUFDO1FBRzlCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFJakIsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOytHQWxCVSxvQkFBb0I7bUdBQXBCLG9CQUFvQiw4SUM3QmpDLG9kQWFBLDJQRFFJLGlCQUFpQixrRkFDakIsZUFBZSw0RkFFZixxQkFBcUIsNkRBQ3JCLGNBQWMsNkZBQ2Qsc0JBQXNCOzs0RkFHYixvQkFBb0I7a0JBZGhDLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQO3dCQUNQLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxzQkFBc0I7cUJBQ3ZCO2lGQUlELEtBQUs7c0JBREosS0FBSztnQkFJTixLQUFLO3NCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdWkvdGl0bGUvdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9sYXlvdXQtY29udGVudC9sYXlvdXQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5b3V0LWhlYWRlci9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheW91dC10aXRsZS9sYXlvdXQtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25MYXlvdXQgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgTW9kYWxTdHlsZSA9ICdmdWxsJyB8ICdiaWcnIHwgJ2NsYXNzaWMnIHwgJ3NtYWxsJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWxheW91dC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEZvbnRJY29uQ29tcG9uZW50LFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBMYXlvdXRUaXRsZUNvbXBvbmVudCxcbiAgICBMYXlvdXRIZWFkZXJDb21wb25lbnQsXG4gICAgVGl0bGVDb21wb25lbnQsXG4gICAgTGF5b3V0Q29udGVudENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kYWxDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBzdHlsZTogTW9kYWxTdHlsZSA9ICdjbGFzc2ljJztcblxuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT4pIHtcbiAgICBzdXBlcigpO1xuICAgIFRhVHJhbnNsYXRpb25MYXlvdXQuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmFkZFBhbmVsQ2xhc3ModGhpcy5zdHlsZSArICctbW9kYWwnKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XG4gIDx0YS1sYXlvdXQtaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgZmxleC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDx0YS10aXRsZSBbbGV2ZWxdPVwiM1wiIFtpc0JvbGRdPVwidHJ1ZVwiPnt7IHRoaXMudGl0bGUgfCB0cmFuc2xhdGUgfX08L3RhLXRpdGxlPlxuICAgICAgPGRpdiAoY2xpY2spPVwidGhpcy5jbG9zZSgpXCI+XG4gICAgICAgIDx0YS1mb250LWljb24gbmFtZT1cImNsb3NlXCIgdHlwZT1cIm1kXCI+PC90YS1mb250LWljb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC90YS1sYXlvdXQtaGVhZGVyPlxuICA8dGEtbGF5b3V0LWNvbnRlbnQgW2F1dG9IZWlnaHRdPVwidHJ1ZVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC90YS1sYXlvdXQtY29udGVudD5cbjwvZGl2PlxuIl19
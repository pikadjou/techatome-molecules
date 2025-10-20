import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { StopPropagationDirective } from '@ta/utils';
import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngx-translate/core";
export class SearchFieldComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        this.isOpen = false;
        this.placeholder = '';
        this.space = true;
        this.type = 'sm';
        this.valueCompleted = new EventEmitter();
        this.isDeployed = false;
        this.focusTextBox = false;
        this.keyPress = (event) => {
            if (event.key === 'Enter') {
                this.iconClicked();
            }
        };
    }
    ngOnInit() {
        super.ngOnInit();
        this.isDeployed = this.isOpen;
        if (this.input.value) {
            this.isDeployed = true;
        }
        this.input.createFormControl();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.input.destroy();
    }
    iconClicked() {
        if (!this.isDeployed) {
            this.isDeployed = true;
            return;
        }
        if (this.input.value) {
            this.valueCompleted.emit(this.input.value);
            return;
        }
        if (!this.isOpen) {
            this.isDeployed = false;
        }
    }
    focus() {
        this.focusTextBox = true;
    }
    focusOut() {
        this.focusTextBox = false;
        if (!this.isOpen) {
            this.isDeployed = !!this.input.value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SearchFieldComponent, isStandalone: true, selector: "ta-search-field", inputs: { isOpen: "isOpen", placeholder: "placeholder", space: "space", type: "type" }, outputs: { valueCompleted: "valueCompleted" }, host: { listeners: { "window:keyup": "keyPress($event)" } }, usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <div class=\"input-group\" [class.isDeployed]=\"this.isDeployed\" [class.focus]=\"this.focusTextBox\">\n    <div class=\"search-div\" appStopPropagation (click)=\"this.iconClicked()\">\n      <div class=\"action\">\n        <ta-font-icon name=\"search\" size=\"xs\"></ta-font-icon>\n      </div>\n    </div>\n    <div class=\"inner-div\" [hidden]=\"!this.isDeployed\">\n      <div class=\"search-input-container\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          #focusedElement\n          [placeholder]=\"this.placeholder | translate\"\n          [value]=\"this.input.value\"\n          [formControl]=\"$any(this.input.formControl)\"\n          [readonly]=\"this.input.disabled\"\n          (blur)=\"this.focusOut()\"\n          (focus)=\"this.focus()\"\n        />\n      </div>\n    </div>\n  </div>\n</ta-input-layout>\n", styles: [".input-group{flex-wrap:nowrap;display:flex;align-items:center;padding:var(--ta-space-sm);gap:var(--ta-space-sm);box-sizing:border-box}.input-group .inner-div{flex-grow:1}.input-group.focus ta-font-icon{color:var(--ta-icon-brand-primary)}.input-group.disabled{color:var(--ta-text-tertiary)}.input-group.disabled ta-font-icon{color:var(--ta-icon-tertiary)}.search-input-container{width:100%}.form-control{width:90%}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-search-field', standalone: true, imports: [FontIconComponent, StopPropagationDirective, ReactiveFormsModule, TranslateModule, InputLayoutComponent], template: "<ta-input-layout [input]=\"this.input\">\n  <div class=\"input-group\" [class.isDeployed]=\"this.isDeployed\" [class.focus]=\"this.focusTextBox\">\n    <div class=\"search-div\" appStopPropagation (click)=\"this.iconClicked()\">\n      <div class=\"action\">\n        <ta-font-icon name=\"search\" size=\"xs\"></ta-font-icon>\n      </div>\n    </div>\n    <div class=\"inner-div\" [hidden]=\"!this.isDeployed\">\n      <div class=\"search-input-container\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          #focusedElement\n          [placeholder]=\"this.placeholder | translate\"\n          [value]=\"this.input.value\"\n          [formControl]=\"$any(this.input.formControl)\"\n          [readonly]=\"this.input.disabled\"\n          (blur)=\"this.focusOut()\"\n          (focus)=\"this.focus()\"\n        />\n      </div>\n    </div>\n  </div>\n</ta-input-layout>\n", styles: [".input-group{flex-wrap:nowrap;display:flex;align-items:center;padding:var(--ta-space-sm);gap:var(--ta-space-sm);box-sizing:border-box}.input-group .inner-div{flex-grow:1}.input-group.focus ta-font-icon{color:var(--ta-icon-brand-primary)}.input-group.disabled{color:var(--ta-text-tertiary)}.input-group.disabled ta-font-icon{color:var(--ta-icon-tertiary)}.search-input-container{width:100%}.form-control{width:90%}\n"] }]
        }], ctorParameters: () => [], propDecorators: { isOpen: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], space: [{
                type: Input
            }], type: [{
                type: Input
            }], valueCompleted: [{
                type: Output
            }], keyPress: [{
                type: HostListener,
                args: ['window:keyup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQVNqRixNQUFNLE9BQU8sb0JBQ1gsU0FBUSx3QkFBb0Q7SUFxQjVEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFsQlYsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUd4QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6QixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBR2IsU0FBSSxHQUFZLElBQUksQ0FBQztRQUdyQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQTZDOUIsYUFBUSxHQUFHLENBQUMsS0FBb0IsRUFBUSxFQUFFO1lBQy9DLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFDSCxDQUFDLENBQUM7SUE3Q0YsQ0FBQztJQUNRLFFBQVE7UUFDZixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFUSxXQUFXO1FBQ2xCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDOytHQTlEVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixzU0NwQmpDLDQ0QkF3QkEseWRETlksaUJBQWlCLG1GQUFFLHdCQUF3Qix1R0FBRSxtQkFBbUIseWtCQUFFLGVBQWUsNEZBQUUsb0JBQW9COzs0RkFFdEcsb0JBQW9CO2tCQVBoQyxTQUFTOytCQUNFLGlCQUFpQixjQUdmLElBQUksV0FDUCxDQUFDLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQzt3REFPbEgsTUFBTTtzQkFETCxLQUFLO2dCQUlOLFdBQVc7c0JBRFYsS0FBSztnQkFJTixLQUFLO3NCQURKLEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLGNBQWM7c0JBRGIsTUFBTTtnQkFpREEsUUFBUTtzQkFEZCxZQUFZO3VCQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0VGV4dEJveCB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dExheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2lucHV0LWxheW91dC9pbnB1dC1sYXlvdXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtc2VhcmNoLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1maWVsZC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9udEljb25Db21wb25lbnQsIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVHJhbnNsYXRlTW9kdWxlLCBJbnB1dExheW91dENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpZWxkQ29tcG9uZW50XG4gIGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0VGV4dEJveCB8IElucHV0TnVtYmVyPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95XG57XG4gIEBJbnB1dCgpXG4gIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKVxuICBzcGFjZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgdHlwZTogVGFTaXplcyA9ICdzbSc7XG5cbiAgQE91dHB1dCgpXG4gIHZhbHVlQ29tcGxldGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBpc0RlcGxveWVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmb2N1c1RleHRCb3g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIG92ZXJyaWRlIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5pc0RlcGxveWVkID0gdGhpcy5pc09wZW47XG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMuaXNEZXBsb3llZCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuaW5wdXQuY3JlYXRlRm9ybUNvbnRyb2woKTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5pbnB1dC5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgaWNvbkNsaWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGVwbG95ZWQpIHtcbiAgICAgIHRoaXMuaXNEZXBsb3llZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0LnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlQ29tcGxldGVkLmVtaXQodGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaXNEZXBsb3llZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICB0aGlzLmZvY3VzVGV4dEJveCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZm9jdXNPdXQoKSB7XG4gICAgdGhpcy5mb2N1c1RleHRCb3ggPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmlzRGVwbG95ZWQgPSAhIXRoaXMuaW5wdXQudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGtleVByZXNzID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5pY29uQ2xpY2tlZCgpO1xuICAgIH1cbiAgfTtcbn1cbiIsIjx0YS1pbnB1dC1sYXlvdXQgW2lucHV0XT1cInRoaXMuaW5wdXRcIj5cbiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCIgW2NsYXNzLmlzRGVwbG95ZWRdPVwidGhpcy5pc0RlcGxveWVkXCIgW2NsYXNzLmZvY3VzXT1cInRoaXMuZm9jdXNUZXh0Qm94XCI+XG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1kaXZcIiBhcHBTdG9wUHJvcGFnYXRpb24gKGNsaWNrKT1cInRoaXMuaWNvbkNsaWNrZWQoKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvblwiPlxuICAgICAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJzZWFyY2hcIiBzaXplPVwieHNcIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbm5lci1kaXZcIiBbaGlkZGVuXT1cIiF0aGlzLmlzRGVwbG95ZWRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgI2ZvY3VzZWRFbGVtZW50XG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInRoaXMucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgIFt2YWx1ZV09XCJ0aGlzLmlucHV0LnZhbHVlXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueSh0aGlzLmlucHV0LmZvcm1Db250cm9sKVwiXG4gICAgICAgICAgW3JlYWRvbmx5XT1cInRoaXMuaW5wdXQuZGlzYWJsZWRcIlxuICAgICAgICAgIChibHVyKT1cInRoaXMuZm9jdXNPdXQoKVwiXG4gICAgICAgICAgKGZvY3VzKT1cInRoaXMuZm9jdXMoKVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RhLWlucHV0LWxheW91dD5cbiJdfQ==
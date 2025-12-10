import { Component, EventEmitter, HostListener, Input, Output, } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { FontIconComponent } from "@ta/icons";
import { StopPropagationDirective } from "@ta/utils";
import { TaAbstractInputComponent } from "../../abstract.component";
import { InputLayoutComponent } from "../../input-layout/input-layout.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngx-translate/core";
export class SearchFieldComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        this.isOpen = false;
        this.placeholder = "";
        this.space = true;
        this.type = "sm";
        this.valueCompleted = new EventEmitter();
        this.isDeployed = false;
        this.focusTextBox = false;
        this.keyPress = (event) => {
            if (event.key === "Enter") {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SearchFieldComponent, isStandalone: true, selector: "ta-search-field", inputs: { isOpen: "isOpen", placeholder: "placeholder", space: "space", type: "type" }, outputs: { valueCompleted: "valueCompleted" }, host: { listeners: { "window:keyup": "keyPress($event)" } }, usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <div\n    class=\"input-group\"\n    [class.isDeployed]=\"this.isDeployed\"\n    [class.focus]=\"this.focusTextBox\"\n  >\n    <div class=\"search-div\" appStopPropagation (click)=\"this.iconClicked()\">\n      <div class=\"action\">\n        <ta-font-icon name=\"search\" size=\"xs\"></ta-font-icon>\n      </div>\n    </div>\n    <div class=\"inner-div\" [hidden]=\"!this.isDeployed\">\n      <div class=\"search-input-container\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          #focusedElement\n          [placeholder]=\"this.placeholder | translate\"\n          [value]=\"this.input.value\"\n          [formControl]=\"$any(this.input.formControl)\"\n          [readonly]=\"this.input.disabled\"\n          (blur)=\"this.focusOut()\"\n          (focus)=\"this.focus()\"\n        />\n      </div>\n    </div>\n  </div>\n</ta-input-layout>\n", styles: [".input-group{flex-wrap:nowrap;display:flex;align-items:center;padding:var(--ta-space-sm);gap:var(--ta-space-sm);box-sizing:border-box}.input-group .inner-div{flex-grow:1}.input-group.focus ta-font-icon{color:var(--ta-icon-brand-primary)}.input-group.disabled{color:var(--ta-text-tertiary)}.input-group.disabled ta-font-icon{color:var(--ta-icon-tertiary)}.search-input-container{width:100%}.form-control{width:90%}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-search-field", standalone: true, imports: [
                        FontIconComponent,
                        StopPropagationDirective,
                        ReactiveFormsModule,
                        TranslateModule,
                        InputLayoutComponent,
                    ], template: "<ta-input-layout [input]=\"this.input\">\n  <div\n    class=\"input-group\"\n    [class.isDeployed]=\"this.isDeployed\"\n    [class.focus]=\"this.focusTextBox\"\n  >\n    <div class=\"search-div\" appStopPropagation (click)=\"this.iconClicked()\">\n      <div class=\"action\">\n        <ta-font-icon name=\"search\" size=\"xs\"></ta-font-icon>\n      </div>\n    </div>\n    <div class=\"inner-div\" [hidden]=\"!this.isDeployed\">\n      <div class=\"search-input-container\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          #focusedElement\n          [placeholder]=\"this.placeholder | translate\"\n          [value]=\"this.input.value\"\n          [formControl]=\"$any(this.input.formControl)\"\n          [readonly]=\"this.input.disabled\"\n          (blur)=\"this.focusOut()\"\n          (focus)=\"this.focus()\"\n        />\n      </div>\n    </div>\n  </div>\n</ta-input-layout>\n", styles: [".input-group{flex-wrap:nowrap;display:flex;align-items:center;padding:var(--ta-space-sm);gap:var(--ta-space-sm);box-sizing:border-box}.input-group .inner-div{flex-grow:1}.input-group.focus ta-font-icon{color:var(--ta-icon-brand-primary)}.input-group.disabled{color:var(--ta-text-tertiary)}.input-group.disabled ta-font-icon{color:var(--ta-icon-tertiary)}.search-input-container{width:100%}.form-control{width:90%}\n"] }]
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
                args: ["window:keyup", ["$event"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFOUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXJELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBZWpGLE1BQU0sT0FBTyxvQkFDWCxTQUFRLHdCQUFvRDtJQXFCNUQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQWxCVixXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFHYixTQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBNkM5QixhQUFRLEdBQUcsQ0FBQyxLQUFvQixFQUFRLEVBQUU7WUFDL0MsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQztRQUNILENBQUMsQ0FBQztJQTdDRixDQUFDO0lBQ1EsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVRLFdBQVc7UUFDbEIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7K0dBOURVLG9CQUFvQjttR0FBcEIsb0JBQW9CLHNTQ2xDakMsKzVCQTRCQSx5ZERESSxpQkFBaUIsbUZBQ2pCLHdCQUF3Qix1R0FDeEIsbUJBQW1CLHlrQkFDbkIsZUFBZSw0RkFDZixvQkFBb0I7OzRGQUdYLG9CQUFvQjtrQkFiaEMsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZixJQUFJLFdBQ1A7d0JBQ1AsaUJBQWlCO3dCQUNqQix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixvQkFBb0I7cUJBQ3JCO3dEQU9ELE1BQU07c0JBREwsS0FBSztnQkFJTixXQUFXO3NCQURWLEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSztnQkFJTixjQUFjO3NCQURiLE1BQU07Z0JBaURBLFFBQVE7c0JBRGQsWUFBWTt1QkFBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcblxuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0VGV4dEJveCB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLXNlYXJjaC1maWVsZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC1maWVsZC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIElucHV0TGF5b3V0Q29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWVsZENvbXBvbmVudFxuICBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dFRleHRCb3ggfCBJbnB1dE51bWJlcj5cbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveVxue1xuICBASW5wdXQoKVxuICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gXCJcIjtcblxuICBASW5wdXQoKVxuICBzcGFjZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgdHlwZTogVGFTaXplcyA9IFwic21cIjtcblxuICBAT3V0cHV0KClcbiAgdmFsdWVDb21wbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIGlzRGVwbG95ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGZvY3VzVGV4dEJveDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLmlzRGVwbG95ZWQgPSB0aGlzLmlzT3BlbjtcbiAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSkge1xuICAgICAgdGhpcy5pc0RlcGxveWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dC5jcmVhdGVGb3JtQ29udHJvbCgpO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLmlucHV0LmRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBpY29uQ2xpY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuaXNEZXBsb3llZCkge1xuICAgICAgdGhpcy5pc0RlcGxveWVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWVDb21wbGV0ZWQuZW1pdCh0aGlzLmlucHV0LnZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5pc0RlcGxveWVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMuZm9jdXNUZXh0Qm94ID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1c091dCgpIHtcbiAgICB0aGlzLmZvY3VzVGV4dEJveCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaXNEZXBsb3llZCA9ICEhdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKFwid2luZG93OmtleXVwXCIsIFtcIiRldmVudFwiXSlcbiAgcHVibGljIGtleVByZXNzID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICB0aGlzLmljb25DbGlja2VkKCk7XG4gICAgfVxuICB9O1xufVxuIiwiPHRhLWlucHV0LWxheW91dCBbaW5wdXRdPVwidGhpcy5pbnB1dFwiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJpbnB1dC1ncm91cFwiXG4gICAgW2NsYXNzLmlzRGVwbG95ZWRdPVwidGhpcy5pc0RlcGxveWVkXCJcbiAgICBbY2xhc3MuZm9jdXNdPVwidGhpcy5mb2N1c1RleHRCb3hcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1kaXZcIiBhcHBTdG9wUHJvcGFnYXRpb24gKGNsaWNrKT1cInRoaXMuaWNvbkNsaWNrZWQoKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvblwiPlxuICAgICAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJzZWFyY2hcIiBzaXplPVwieHNcIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbm5lci1kaXZcIiBbaGlkZGVuXT1cIiF0aGlzLmlzRGVwbG95ZWRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgI2ZvY3VzZWRFbGVtZW50XG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInRoaXMucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgIFt2YWx1ZV09XCJ0aGlzLmlucHV0LnZhbHVlXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueSh0aGlzLmlucHV0LmZvcm1Db250cm9sKVwiXG4gICAgICAgICAgW3JlYWRvbmx5XT1cInRoaXMuaW5wdXQuZGlzYWJsZWRcIlxuICAgICAgICAgIChibHVyKT1cInRoaXMuZm9jdXNPdXQoKVwiXG4gICAgICAgICAgKGZvY3VzKT1cInRoaXMuZm9jdXMoKVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RhLWlucHV0LWxheW91dD5cbiJdfQ==
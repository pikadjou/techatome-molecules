import { Component, EventEmitter, HostListener, input, Output, } from "@angular/core";
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
        this.isOpen = input(false);
        this.placeholder = input("");
        this.space = input(true);
        this.type = input("sm");
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
        this.isDeployed = this.isOpen();
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
        // Always emit so consumers can react to explicit clear (empty value = clear signal)
        this.valueCompleted.emit(this.input.value ?? '');
        if (!this.input.value && !this.isOpen()) {
            this.isDeployed = false;
        }
    }
    focus() {
        this.focusTextBox = true;
    }
    focusOut() {
        this.focusTextBox = false;
        if (!this.isOpen()) {
            this.isDeployed = !!this.input.value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: SearchFieldComponent, isStandalone: true, selector: "ta-search-field", inputs: { isOpen: { classPropertyName: "isOpen", publicName: "isOpen", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, space: { classPropertyName: "space", publicName: "space", isSignal: true, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueCompleted: "valueCompleted" }, host: { listeners: { "window:keyup": "keyPress($event)" } }, usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <div\n    class=\"input-group\"\n    [class.isDeployed]=\"this.isDeployed\"\n    [class.focus]=\"this.focusTextBox\"\n  >\n    <div class=\"search-div\" appStopPropagation (click)=\"this.iconClicked()\">\n      <div class=\"action\">\n        <ta-font-icon name=\"search\" size=\"xs\"></ta-font-icon>\n      </div>\n    </div>\n    <div class=\"inner-div\" [hidden]=\"!this.isDeployed\">\n      <div class=\"search-input-container\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          #focusedElement\n          [placeholder]=\"this.placeholder() | translate\"\n          [value]=\"this.input.value\"\n          [formControl]=\"$any(this.input.formControl)\"\n          [readonly]=\"this.input.disabled\"\n          (blur)=\"this.focusOut()\"\n          (focus)=\"this.focus()\"\n        />\n      </div>\n    </div>\n  </div>\n</ta-input-layout>\n", styles: [".input-group{flex-wrap:nowrap;display:flex;align-items:center;padding:0 var(--ta-space-sm);gap:var(--ta-space-sm);box-sizing:border-box}.input-group.focus ta-font-icon{color:var(--ta-icon-brand-primary)}.input-group.disabled{color:var(--ta-text-tertiary);opacity:.6}.input-group.disabled ta-font-icon{color:var(--ta-icon-tertiary)}.input-group .inner-div{flex-grow:1}.search-input-container,.form-control{width:100%}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-search-field", standalone: true, imports: [
                        FontIconComponent,
                        StopPropagationDirective,
                        ReactiveFormsModule,
                        TranslateModule,
                        InputLayoutComponent,
                    ], template: "<ta-input-layout [input]=\"this.input\">\n  <div\n    class=\"input-group\"\n    [class.isDeployed]=\"this.isDeployed\"\n    [class.focus]=\"this.focusTextBox\"\n  >\n    <div class=\"search-div\" appStopPropagation (click)=\"this.iconClicked()\">\n      <div class=\"action\">\n        <ta-font-icon name=\"search\" size=\"xs\"></ta-font-icon>\n      </div>\n    </div>\n    <div class=\"inner-div\" [hidden]=\"!this.isDeployed\">\n      <div class=\"search-input-container\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          #focusedElement\n          [placeholder]=\"this.placeholder() | translate\"\n          [value]=\"this.input.value\"\n          [formControl]=\"$any(this.input.formControl)\"\n          [readonly]=\"this.input.disabled\"\n          (blur)=\"this.focusOut()\"\n          (focus)=\"this.focus()\"\n        />\n      </div>\n    </div>\n  </div>\n</ta-input-layout>\n", styles: [".input-group{flex-wrap:nowrap;display:flex;align-items:center;padding:0 var(--ta-space-sm);gap:var(--ta-space-sm);box-sizing:border-box}.input-group.focus ta-font-icon{color:var(--ta-icon-brand-primary)}.input-group.disabled{color:var(--ta-text-tertiary);opacity:.6}.input-group.disabled ta-font-icon{color:var(--ta-icon-tertiary)}.input-group .inner-div{flex-grow:1}.search-input-container,.form-control{width:100%}\n"] }]
        }], ctorParameters: () => [], propDecorators: { valueCompleted: [{
                type: Output
            }], keyPress: [{
                type: HostListener,
                args: ["window:keyup", ["$event"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFOUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXJELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBZWpGLE1BQU0sT0FBTyxvQkFDWCxTQUFRLHdCQUFvRDtJQWlCNUQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQWZWLFdBQU0sR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFL0IsZ0JBQVcsR0FBRyxLQUFLLENBQVMsRUFBRSxDQUFDLENBQUM7UUFFaEMsVUFBSyxHQUFHLEtBQUssQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUU3QixTQUFJLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRzVCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBMkM5QixhQUFRLEdBQUcsQ0FBQyxLQUFvQixFQUFRLEVBQUU7WUFDL0MsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQztRQUNILENBQUMsQ0FBQztJQTNDRixDQUFDO0lBQ1EsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRVEsV0FBVztRQUNsQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE9BQU87UUFDVCxDQUFDO1FBQ0Qsb0ZBQW9GO1FBQ3BGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDOytHQXhEVSxvQkFBb0I7bUdBQXBCLG9CQUFvQiw0c0JDbENqQyxpNkJBNEJBLDRkRERJLGlCQUFpQixtRkFDakIsd0JBQXdCLHVHQUN4QixtQkFBbUIseWtCQUNuQixlQUFlLDRGQUNmLG9CQUFvQjs7NEZBR1gsb0JBQW9CO2tCQWJoQyxTQUFTOytCQUNFLGlCQUFpQixjQUdmLElBQUksV0FDUDt3QkFDUCxpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLG9CQUFvQjtxQkFDckI7d0RBZUQsY0FBYztzQkFEYixNQUFNO2dCQStDQSxRQUFRO3NCQURkLFlBQVk7dUJBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgaW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5cbmltcG9ydCB7IElucHV0TnVtYmVyLCBJbnB1dFRleHRCb3ggfSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVGFTaXplcyB9IGZyb20gXCJAdGEvc3R5bGVzXCI7XG5pbXBvcnQgeyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IElucHV0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2lucHV0LWxheW91dC9pbnB1dC1sYXlvdXQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1zZWFyY2gtZmllbGRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2gtZmllbGQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3NlYXJjaC1maWVsZC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEZvbnRJY29uQ29tcG9uZW50LFxuICAgIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBJbnB1dExheW91dENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoRmllbGRDb21wb25lbnRcbiAgZXh0ZW5kcyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQ8SW5wdXRUZXh0Qm94IHwgSW5wdXROdW1iZXI+XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3lcbntcbiAgaXNPcGVuID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHBsYWNlaG9sZGVyID0gaW5wdXQ8c3RyaW5nPihcIlwiKTtcblxuICBzcGFjZSA9IGlucHV0PGJvb2xlYW4+KHRydWUpO1xuXG4gIHR5cGUgPSBpbnB1dDxUYVNpemVzPihcInNtXCIpO1xuXG4gIEBPdXRwdXQoKVxuICB2YWx1ZUNvbXBsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgaXNEZXBsb3llZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZm9jdXNUZXh0Qm94OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuaXNEZXBsb3llZCA9IHRoaXMuaXNPcGVuKCk7XG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMuaXNEZXBsb3llZCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuaW5wdXQuY3JlYXRlRm9ybUNvbnRyb2woKTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5pbnB1dC5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgaWNvbkNsaWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGVwbG95ZWQpIHtcbiAgICAgIHRoaXMuaXNEZXBsb3llZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEFsd2F5cyBlbWl0IHNvIGNvbnN1bWVycyBjYW4gcmVhY3QgdG8gZXhwbGljaXQgY2xlYXIgKGVtcHR5IHZhbHVlID0gY2xlYXIgc2lnbmFsKVxuICAgIHRoaXMudmFsdWVDb21wbGV0ZWQuZW1pdCh0aGlzLmlucHV0LnZhbHVlID8/ICcnKTtcbiAgICBpZiAoIXRoaXMuaW5wdXQudmFsdWUgJiYgIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuaXNEZXBsb3llZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICB0aGlzLmZvY3VzVGV4dEJveCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZm9jdXNPdXQoKSB7XG4gICAgdGhpcy5mb2N1c1RleHRCb3ggPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuaXNEZXBsb3llZCA9ICEhdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKFwid2luZG93OmtleXVwXCIsIFtcIiRldmVudFwiXSlcbiAgcHVibGljIGtleVByZXNzID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICB0aGlzLmljb25DbGlja2VkKCk7XG4gICAgfVxuICB9O1xufVxuIiwiPHRhLWlucHV0LWxheW91dCBbaW5wdXRdPVwidGhpcy5pbnB1dFwiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJpbnB1dC1ncm91cFwiXG4gICAgW2NsYXNzLmlzRGVwbG95ZWRdPVwidGhpcy5pc0RlcGxveWVkXCJcbiAgICBbY2xhc3MuZm9jdXNdPVwidGhpcy5mb2N1c1RleHRCb3hcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1kaXZcIiBhcHBTdG9wUHJvcGFnYXRpb24gKGNsaWNrKT1cInRoaXMuaWNvbkNsaWNrZWQoKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvblwiPlxuICAgICAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJzZWFyY2hcIiBzaXplPVwieHNcIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbm5lci1kaXZcIiBbaGlkZGVuXT1cIiF0aGlzLmlzRGVwbG95ZWRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgI2ZvY3VzZWRFbGVtZW50XG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInRoaXMucGxhY2Vob2xkZXIoKSB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgW3ZhbHVlXT1cInRoaXMuaW5wdXQudmFsdWVcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCIkYW55KHRoaXMuaW5wdXQuZm9ybUNvbnRyb2wpXCJcbiAgICAgICAgICBbcmVhZG9ubHldPVwidGhpcy5pbnB1dC5kaXNhYmxlZFwiXG4gICAgICAgICAgKGJsdXIpPVwidGhpcy5mb2N1c091dCgpXCJcbiAgICAgICAgICAoZm9jdXMpPVwidGhpcy5mb2N1cygpXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGEtaW5wdXQtbGF5b3V0PlxuIl19
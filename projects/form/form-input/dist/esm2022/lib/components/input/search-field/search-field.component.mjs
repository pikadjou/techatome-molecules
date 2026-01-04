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
        if (this.input.value) {
            this.valueCompleted.emit(this.input.value);
            return;
        }
        if (!this.isOpen()) {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: SearchFieldComponent, isStandalone: true, selector: "ta-search-field", inputs: { isOpen: { classPropertyName: "isOpen", publicName: "isOpen", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, space: { classPropertyName: "space", publicName: "space", isSignal: true, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueCompleted: "valueCompleted" }, host: { listeners: { "window:keyup": "keyPress($event)" } }, usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <div\n    class=\"input-group\"\n    [class.isDeployed]=\"this.isDeployed\"\n    [class.focus]=\"this.focusTextBox\"\n  >\n    <div class=\"search-div\" appStopPropagation (click)=\"this.iconClicked()\">\n      <div class=\"action\">\n        <ta-font-icon name=\"search\" size=\"xs\"></ta-font-icon>\n      </div>\n    </div>\n    <div class=\"inner-div\" [hidden]=\"!this.isDeployed\">\n      <div class=\"search-input-container\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          #focusedElement\n          [placeholder]=\"this.placeholder() | translate\"\n          [value]=\"this.input.value\"\n          [formControl]=\"$any(this.input.formControl)\"\n          [readonly]=\"this.input.disabled\"\n          (blur)=\"this.focusOut()\"\n          (focus)=\"this.focus()\"\n        />\n      </div>\n    </div>\n  </div>\n</ta-input-layout>\n", styles: [".input-group{flex-wrap:nowrap;display:flex;align-items:center;padding:var(--ta-space-sm);gap:var(--ta-space-sm);box-sizing:border-box}.input-group .inner-div{flex-grow:1}.input-group.focus ta-font-icon{color:var(--ta-icon-brand-primary)}.input-group.disabled{color:var(--ta-text-tertiary)}.input-group.disabled ta-font-icon{color:var(--ta-icon-tertiary)}.search-input-container{width:100%}.form-control{width:90%}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-search-field", standalone: true, imports: [
                        FontIconComponent,
                        StopPropagationDirective,
                        ReactiveFormsModule,
                        TranslateModule,
                        InputLayoutComponent,
                    ], template: "<ta-input-layout [input]=\"this.input\">\n  <div\n    class=\"input-group\"\n    [class.isDeployed]=\"this.isDeployed\"\n    [class.focus]=\"this.focusTextBox\"\n  >\n    <div class=\"search-div\" appStopPropagation (click)=\"this.iconClicked()\">\n      <div class=\"action\">\n        <ta-font-icon name=\"search\" size=\"xs\"></ta-font-icon>\n      </div>\n    </div>\n    <div class=\"inner-div\" [hidden]=\"!this.isDeployed\">\n      <div class=\"search-input-container\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          #focusedElement\n          [placeholder]=\"this.placeholder() | translate\"\n          [value]=\"this.input.value\"\n          [formControl]=\"$any(this.input.formControl)\"\n          [readonly]=\"this.input.disabled\"\n          (blur)=\"this.focusOut()\"\n          (focus)=\"this.focus()\"\n        />\n      </div>\n    </div>\n  </div>\n</ta-input-layout>\n", styles: [".input-group{flex-wrap:nowrap;display:flex;align-items:center;padding:var(--ta-space-sm);gap:var(--ta-space-sm);box-sizing:border-box}.input-group .inner-div{flex-grow:1}.input-group.focus ta-font-icon{color:var(--ta-icon-brand-primary)}.input-group.disabled{color:var(--ta-text-tertiary)}.input-group.disabled ta-font-icon{color:var(--ta-icon-tertiary)}.search-input-container{width:100%}.form-control{width:90%}\n"] }]
        }], ctorParameters: () => [], propDecorators: { valueCompleted: [{
                type: Output
            }], keyPress: [{
                type: HostListener,
                args: ["window:keyup", ["$event"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFOUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXJELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBZWpGLE1BQU0sT0FBTyxvQkFDWCxTQUFRLHdCQUFvRDtJQWlCNUQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQWZWLFdBQU0sR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFL0IsZ0JBQVcsR0FBRyxLQUFLLENBQVMsRUFBRSxDQUFDLENBQUM7UUFFaEMsVUFBSyxHQUFHLEtBQUssQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUU3QixTQUFJLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRzVCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBNkM5QixhQUFRLEdBQUcsQ0FBQyxLQUFvQixFQUFRLEVBQUU7WUFDL0MsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQztRQUNILENBQUMsQ0FBQztJQTdDRixDQUFDO0lBQ1EsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRVEsV0FBVztRQUNsQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7K0dBMURVLG9CQUFvQjttR0FBcEIsb0JBQW9CLDRzQkNsQ2pDLGk2QkE0QkEseWREREksaUJBQWlCLG1GQUNqQix3QkFBd0IsdUdBQ3hCLG1CQUFtQix5a0JBQ25CLGVBQWUsNEZBQ2Ysb0JBQW9COzs0RkFHWCxvQkFBb0I7a0JBYmhDLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQO3dCQUNQLGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2Ysb0JBQW9CO3FCQUNyQjt3REFlRCxjQUFjO3NCQURiLE1BQU07Z0JBaURBLFFBQVE7c0JBRGQsWUFBWTt1QkFBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBpbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcblxuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0VGV4dEJveCB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLXNlYXJjaC1maWVsZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC1maWVsZC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIElucHV0TGF5b3V0Q29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWVsZENvbXBvbmVudFxuICBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dFRleHRCb3ggfCBJbnB1dE51bWJlcj5cbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveVxue1xuICBpc09wZW4gPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgcGxhY2Vob2xkZXIgPSBpbnB1dDxzdHJpbmc+KFwiXCIpO1xuXG4gIHNwYWNlID0gaW5wdXQ8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdHlwZSA9IGlucHV0PFRhU2l6ZXM+KFwic21cIik7XG5cbiAgQE91dHB1dCgpXG4gIHZhbHVlQ29tcGxldGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBpc0RlcGxveWVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmb2N1c1RleHRCb3g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIG92ZXJyaWRlIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5pc0RlcGxveWVkID0gdGhpcy5pc09wZW4oKTtcbiAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSkge1xuICAgICAgdGhpcy5pc0RlcGxveWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dC5jcmVhdGVGb3JtQ29udHJvbCgpO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLmlucHV0LmRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBpY29uQ2xpY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuaXNEZXBsb3llZCkge1xuICAgICAgdGhpcy5pc0RlcGxveWVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWVDb21wbGV0ZWQuZW1pdCh0aGlzLmlucHV0LnZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmlzRGVwbG95ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgdGhpcy5mb2N1c1RleHRCb3ggPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGZvY3VzT3V0KCkge1xuICAgIHRoaXMuZm9jdXNUZXh0Qm94ID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmlzRGVwbG95ZWQgPSAhIXRoaXMuaW5wdXQudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihcIndpbmRvdzprZXl1cFwiLCBbXCIkZXZlbnRcIl0pXG4gIHB1YmxpYyBrZXlQcmVzcyA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgdGhpcy5pY29uQ2xpY2tlZCgpO1xuICAgIH1cbiAgfTtcbn1cbiIsIjx0YS1pbnB1dC1sYXlvdXQgW2lucHV0XT1cInRoaXMuaW5wdXRcIj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIlxuICAgIFtjbGFzcy5pc0RlcGxveWVkXT1cInRoaXMuaXNEZXBsb3llZFwiXG4gICAgW2NsYXNzLmZvY3VzXT1cInRoaXMuZm9jdXNUZXh0Qm94XCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtZGl2XCIgYXBwU3RvcFByb3BhZ2F0aW9uIChjbGljayk9XCJ0aGlzLmljb25DbGlja2VkKClcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25cIj5cbiAgICAgICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwic2VhcmNoXCIgc2l6ZT1cInhzXCI+PC90YS1mb250LWljb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5uZXItZGl2XCIgW2hpZGRlbl09XCIhdGhpcy5pc0RlcGxveWVkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICNmb2N1c2VkRWxlbWVudFxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0aGlzLnBsYWNlaG9sZGVyKCkgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgIFt2YWx1ZV09XCJ0aGlzLmlucHV0LnZhbHVlXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueSh0aGlzLmlucHV0LmZvcm1Db250cm9sKVwiXG4gICAgICAgICAgW3JlYWRvbmx5XT1cInRoaXMuaW5wdXQuZGlzYWJsZWRcIlxuICAgICAgICAgIChibHVyKT1cInRoaXMuZm9jdXNPdXQoKVwiXG4gICAgICAgICAgKGZvY3VzKT1cInRoaXMuZm9jdXMoKVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RhLWlucHV0LWxheW91dD5cbiJdfQ==
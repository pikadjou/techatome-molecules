import { Component, ElementRef, inject, input, output, signal, } from "@angular/core";
import { NgClass } from "@angular/common";
import { StopPropagationDirective } from "@ta/utils";
import { LoaderComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { BehaviorSubject } from "rxjs";
import { InputsComponent } from "../inputs/inputs.component";
import * as i0 from "@angular/core";
export class EditFieldComponent extends TaBaseComponent {
    onDocumentClick(targetElement) {
        if (!this.editMode()) {
            return;
        }
        if (targetElement.tagName === "INPUT" &&
            targetElement.type === "file") {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.validation();
        }
    }
    constructor() {
        super();
        this.getInput = input.required();
        this.changeEditMode$ = input(null);
        this.isLoading = input(false);
        this.withBorder = input(true);
        this.disabled = input(false);
        this.newValue = output();
        this.onFocusBehavior = new BehaviorSubject(undefined);
        this.renderInput = signal(null);
        this.editMode = signal(false);
        this._elementRef = inject(ElementRef);
    }
    ngOnInit() {
        const changeEditMode = this.changeEditMode$();
        if (changeEditMode) {
            this._registerSubscription(changeEditMode.subscribe((value) => this.editMode.set(value)));
        }
        this._setInput();
    }
    ngOnChanges(changes) {
        if (changes["isLoading"] &&
            changes["isLoading"].currentValue !==
                changes["isLoading"].previousValue &&
            changes["isLoading"].currentValue === false) {
            this._setInput();
            this.editMode.set(false);
        }
    }
    toggleEditMode() {
        this.editMode.set(!this.editMode());
        if (this.editMode()) {
            this.onFocusBehavior.next();
        }
    }
    validation() {
        const input = this.renderInput();
        if (!input) {
            return;
        }
        this.newValue.emit(input.value);
        this.toggleEditMode();
    }
    _setInput() {
        this.renderInput.set(this.getInput()());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EditFieldComponent, isStandalone: true, selector: "ta-edit-field", inputs: { getInput: { classPropertyName: "getInput", publicName: "getInput", isSignal: true, isRequired: true, transformFunction: null }, changeEditMode$: { classPropertyName: "changeEditMode$", publicName: "changeEditMode$", isSignal: true, isRequired: false, transformFunction: null }, isLoading: { classPropertyName: "isLoading", publicName: "isLoading", isSignal: true, isRequired: false, transformFunction: null }, withBorder: { classPropertyName: "withBorder", publicName: "withBorder", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { newValue: "newValue" }, host: { listeners: { "document:click": "onDocumentClick($event.target)" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.isLoading()\">\n  @let input = this.renderInput(); @if (!this.editMode()) {\n  <div\n    class=\"value-container\"\n    [ngClass]=\"{ 'no-border': !this.withBorder() }\"\n    [class.is-disabled]=\"this.disabled()\"\n    (click)=\"!this.disabled() ? this.toggleEditMode() : null\"\n    appStopPropagation\n  >\n    <ng-content></ng-content>\n  </div>\n  } @else if (input) {\n  <div class=\"align-center g-space-sm\">\n    <ta-inputs\n      class=\"flex-fill\"\n      appStopPropagation\n      [input]=\"input\"\n      [standalone]=\"true\"\n      [onFocus]=\"this.onFocusBehavior\"\n    ></ta-inputs>\n  </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-edit-field", host: { "(document:click)": "onDocumentClick($event.target)" }, standalone: true, imports: [
                        NgClass,
                        StopPropagationDirective,
                        LoaderComponent,
                        InputsComponent,
                    ], template: "<ta-loader [isLoading]=\"this.isLoading()\">\n  @let input = this.renderInput(); @if (!this.editMode()) {\n  <div\n    class=\"value-container\"\n    [ngClass]=\"{ 'no-border': !this.withBorder() }\"\n    [class.is-disabled]=\"this.disabled()\"\n    (click)=\"!this.disabled() ? this.toggleEditMode() : null\"\n    appStopPropagation\n  >\n    <ng-content></ng-content>\n  </div>\n  } @else if (input) {\n  <div class=\"align-center g-space-sm\">\n    <ta-inputs\n      class=\"flex-fill\"\n      appStopPropagation\n      [input]=\"input\"\n      [standalone]=\"true\"\n      [onFocus]=\"this.onFocusBehavior\"\n    ></ta-inputs>\n  </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdC1maWVsZC9lZGl0LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lZGl0LWZpZWxkL2VkaXQtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBRU4sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQWlCN0QsTUFBTSxPQUFPLGtCQUNYLFNBQVEsZUFBZTtJQW1CdkIsZUFBZSxDQUFDLGFBQTBCO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNyQixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQ0UsYUFBYSxDQUFDLE9BQU8sS0FBSyxPQUFPO1lBQ2hDLGFBQWtDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFDbkQsQ0FBQztZQUNELE9BQU87UUFDVCxDQUFDO1FBQ0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFJRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBbkNWLGFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUF3QixDQUFDO1FBRWxELG9CQUFlLEdBQUcsS0FBSyxDQUE2QixJQUFJLENBQUMsQ0FBQztRQUUxRCxjQUFTLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRWxDLGVBQVUsR0FBRyxLQUFLLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFbEMsYUFBUSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVqQyxhQUFRLEdBQUcsTUFBTSxFQUFXLENBQUM7UUFFcEIsb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBTyxTQUFTLENBQUMsQ0FBQztRQUN2RCxnQkFBVyxHQUFHLE1BQU0sQ0FBeUIsSUFBSSxDQUFDLENBQUM7UUFDckQsYUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQWtCeEIsZ0JBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFJekMsQ0FBQztJQUNELFFBQVE7UUFDTixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDOUMsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMscUJBQXFCLENBQ3hCLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzlELENBQUM7UUFDSixDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFDRSxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZO2dCQUMvQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsYUFBYTtZQUNwQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxLQUFLLEtBQUssRUFDM0MsQ0FBQztZQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFTSxVQUFVO1FBQ2YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzsrR0FsRlUsa0JBQWtCO21HQUFsQixrQkFBa0IsbTVCQ25DL0IsdXBCQXVCQSw0ZkRNSSxPQUFPLG9GQUNQLHdCQUF3Qix3R0FDeEIsZUFBZSx5R0FDZixlQUFlOzs0RkFHTixrQkFBa0I7a0JBYjlCLFNBQVM7K0JBQ0UsZUFBZSxRQUNuQixFQUFFLGtCQUFrQixFQUFFLGdDQUFnQyxFQUFFLGNBR2xELElBQUksV0FDUDt3QkFDUCxPQUFPO3dCQUNQLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZixlQUFlO3FCQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgaW5qZWN0LFxuICBpbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIG91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgc2lnbmFsLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSBcIkB0YS9mb3JtLW1vZGVsXCI7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSW5wdXRzQ29tcG9uZW50IH0gZnJvbSBcIi4uL2lucHV0cy9pbnB1dHMuY29tcG9uZW50XCI7XG5cbmV4cG9ydCB0eXBlIExheW91dCA9IFwicm93XCIgfCBcImNvbHVtblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtZWRpdC1maWVsZFwiLFxuICBob3N0OiB7IFwiKGRvY3VtZW50OmNsaWNrKVwiOiBcIm9uRG9jdW1lbnRDbGljaygkZXZlbnQudGFyZ2V0KVwiIH0sXG4gIHRlbXBsYXRlVXJsOiBcIi4vZWRpdC1maWVsZC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybDogXCIuL2VkaXQtZmllbGQuY29tcG9uZW50LnNjc3NcIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nQ2xhc3MsXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBJbnB1dHNDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRGaWVsZENvbXBvbmVudFxuICBleHRlbmRzIFRhQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzXG57XG4gIGdldElucHV0ID0gaW5wdXQucmVxdWlyZWQ8KCkgPT4gSW5wdXRCYXNlPGFueT4+KCk7XG5cbiAgY2hhbmdlRWRpdE1vZGUkID0gaW5wdXQ8T2JzZXJ2YWJsZTxib29sZWFuPiB8IG51bGw+KG51bGwpO1xuXG4gIGlzTG9hZGluZyA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICB3aXRoQm9yZGVyID0gaW5wdXQ8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgZGlzYWJsZWQgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgbmV3VmFsdWUgPSBvdXRwdXQ8dW5rbm93bj4oKTtcblxuICByZWFkb25seSBvbkZvY3VzQmVoYXZpb3IgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KHVuZGVmaW5lZCk7XG4gIHJlYWRvbmx5IHJlbmRlcklucHV0ID0gc2lnbmFsPElucHV0QmFzZTxudWxsPiB8IG51bGw+KG51bGwpO1xuICBwdWJsaWMgZWRpdE1vZGUgPSBzaWduYWwoZmFsc2UpO1xuXG4gIG9uRG9jdW1lbnRDbGljayh0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5lZGl0TW9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRhcmdldEVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmXG4gICAgICAodGFyZ2V0RWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlID09PSBcImZpbGVcIlxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xuICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZWxlbWVudFJlZiA9IGluamVjdChFbGVtZW50UmVmKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNoYW5nZUVkaXRNb2RlID0gdGhpcy5jaGFuZ2VFZGl0TW9kZSQoKTtcbiAgICBpZiAoY2hhbmdlRWRpdE1vZGUpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICBjaGFuZ2VFZGl0TW9kZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB0aGlzLmVkaXRNb2RlLnNldCh2YWx1ZSkpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl9zZXRJbnB1dCgpO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzW1wiaXNMb2FkaW5nXCJdICYmXG4gICAgICBjaGFuZ2VzW1wiaXNMb2FkaW5nXCJdLmN1cnJlbnRWYWx1ZSAhPT1cbiAgICAgICAgY2hhbmdlc1tcImlzTG9hZGluZ1wiXS5wcmV2aW91c1ZhbHVlICYmXG4gICAgICBjaGFuZ2VzW1wiaXNMb2FkaW5nXCJdLmN1cnJlbnRWYWx1ZSA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIHRoaXMuX3NldElucHV0KCk7XG4gICAgICB0aGlzLmVkaXRNb2RlLnNldChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZUVkaXRNb2RlKCkge1xuICAgIHRoaXMuZWRpdE1vZGUuc2V0KCF0aGlzLmVkaXRNb2RlKCkpO1xuXG4gICAgaWYgKHRoaXMuZWRpdE1vZGUoKSkge1xuICAgICAgdGhpcy5vbkZvY3VzQmVoYXZpb3IubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5yZW5kZXJJbnB1dCgpO1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZXdWYWx1ZS5lbWl0KGlucHV0LnZhbHVlKTtcblxuICAgIHRoaXMudG9nZ2xlRWRpdE1vZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElucHV0KCkge1xuICAgIHRoaXMucmVuZGVySW5wdXQuc2V0KHRoaXMuZ2V0SW5wdXQoKSgpKTtcbiAgfVxufVxuIiwiPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMuaXNMb2FkaW5nKClcIj5cbiAgQGxldCBpbnB1dCA9IHRoaXMucmVuZGVySW5wdXQoKTsgQGlmICghdGhpcy5lZGl0TW9kZSgpKSB7XG4gIDxkaXZcbiAgICBjbGFzcz1cInZhbHVlLWNvbnRhaW5lclwiXG4gICAgW25nQ2xhc3NdPVwieyAnbm8tYm9yZGVyJzogIXRoaXMud2l0aEJvcmRlcigpIH1cIlxuICAgIFtjbGFzcy5pcy1kaXNhYmxlZF09XCJ0aGlzLmRpc2FibGVkKClcIlxuICAgIChjbGljayk9XCIhdGhpcy5kaXNhYmxlZCgpID8gdGhpcy50b2dnbGVFZGl0TW9kZSgpIDogbnVsbFwiXG4gICAgYXBwU3RvcFByb3BhZ2F0aW9uXG4gID5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICB9IEBlbHNlIGlmIChpbnB1dCkge1xuICA8ZGl2IGNsYXNzPVwiYWxpZ24tY2VudGVyIGctc3BhY2Utc21cIj5cbiAgICA8dGEtaW5wdXRzXG4gICAgICBjbGFzcz1cImZsZXgtZmlsbFwiXG4gICAgICBhcHBTdG9wUHJvcGFnYXRpb25cbiAgICAgIFtpbnB1dF09XCJpbnB1dFwiXG4gICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgIFtvbkZvY3VzXT1cInRoaXMub25Gb2N1c0JlaGF2aW9yXCJcbiAgICA+PC90YS1pbnB1dHM+XG4gIDwvZGl2PlxuICB9XG48L3RhLWxvYWRlcj5cbiJdfQ==
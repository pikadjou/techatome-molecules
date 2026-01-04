import { Component, EventEmitter, HostListener, input, Output, signal, } from "@angular/core";
import { NgIf, NgClass } from "@angular/common";
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
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.validation();
        }
    }
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
        this.getInput = input.required();
        this.changeEditMode$ = input(null);
        this.isLoading = input(false);
        this.withBorder = input(true);
        this.disabled = input(false);
        this.newValue = new EventEmitter();
        this.onFocusBehavior = new BehaviorSubject(undefined);
        this.renderInput = signal(null);
        this.editMode = signal(false);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditFieldComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EditFieldComponent, isStandalone: true, selector: "ta-edit-field", inputs: { getInput: { classPropertyName: "getInput", publicName: "getInput", isSignal: true, isRequired: true, transformFunction: null }, changeEditMode$: { classPropertyName: "changeEditMode$", publicName: "changeEditMode$", isSignal: true, isRequired: false, transformFunction: null }, isLoading: { classPropertyName: "isLoading", publicName: "isLoading", isSignal: true, isRequired: false, transformFunction: null }, withBorder: { classPropertyName: "withBorder", publicName: "withBorder", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { newValue: "newValue" }, host: { listeners: { "document:click": "onDocumentClick($event.target)" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.isLoading()\">\n  @let input = this.renderInput(); @if (!this.editMode()) {\n  <div\n    class=\"value-container\"\n    [ngClass]=\"{ 'no-border': !this.withBorder() }\"\n    [class.is-disabled]=\"this.disabled()\"\n    (click)=\"!this.disabled() ? this.toggleEditMode() : null\"\n    appStopPropagation\n  >\n    <ng-content></ng-content>\n  </div>\n  } @else if (input) {\n  <div class=\"align-center g-space-sm\">\n    <ta-inputs\n      class=\"flex-fill\"\n      appStopPropagation\n      [input]=\"input\"\n      [standalone]=\"true\"\n      [onFocus]=\"this.onFocusBehavior\"\n    ></ta-inputs>\n  </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-edit-field", standalone: true, imports: [
                        NgIf,
                        NgClass,
                        StopPropagationDirective,
                        LoaderComponent,
                        InputsComponent,
                    ], template: "<ta-loader [isLoading]=\"this.isLoading()\">\n  @let input = this.renderInput(); @if (!this.editMode()) {\n  <div\n    class=\"value-container\"\n    [ngClass]=\"{ 'no-border': !this.withBorder() }\"\n    [class.is-disabled]=\"this.disabled()\"\n    (click)=\"!this.disabled() ? this.toggleEditMode() : null\"\n    appStopPropagation\n  >\n    <ng-content></ng-content>\n  </div>\n  } @else if (input) {\n  <div class=\"align-center g-space-sm\">\n    <ta-inputs\n      class=\"flex-fill\"\n      appStopPropagation\n      [input]=\"input\"\n      [standalone]=\"true\"\n      [onFocus]=\"this.onFocusBehavior\"\n    ></ta-inputs>\n  </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { newValue: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ["document:click", ["$event.target"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdC1maWVsZC9lZGl0LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lZGl0LWZpZWxkL2VkaXQtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFpQjdELE1BQU0sT0FBTyxrQkFDWCxTQUFRLGVBQWU7SUFxQnZCLGVBQWUsQ0FBQyxhQUEwQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDckIsT0FBTztRQUNULENBQUM7UUFDRCxJQUNFLGFBQWEsQ0FBQyxPQUFPLEtBQUssT0FBTztZQUNoQyxhQUFrQyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQ25ELENBQUM7WUFDRCxPQUFPO1FBQ1QsQ0FBQztRQUNELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxJQUFJ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RGQsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIGlucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBzaWduYWwsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE5nSWYsIE5nQ2xhc3MgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJbnB1dHNDb21wb25lbnQgfSBmcm9tIFwiLi4vaW5wdXRzL2lucHV0cy5jb21wb25lbnRcIjtcblxuZXhwb3J0IHR5cGUgTGF5b3V0ID0gXCJyb3dcIiB8IFwiY29sdW1uXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1lZGl0LWZpZWxkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZWRpdC1maWVsZC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZWRpdC1maWVsZC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgTmdDbGFzcyxcbiAgICBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXG4gICAgTG9hZGVyQ29tcG9uZW50LFxuICAgIElucHV0c0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdEZpZWxkQ29tcG9uZW50XG4gIGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXNcbntcbiAgZ2V0SW5wdXQgPSBpbnB1dC5yZXF1aXJlZDwoKSA9PiBJbnB1dEJhc2U8YW55Pj4oKTtcblxuICBjaGFuZ2VFZGl0TW9kZSQgPSBpbnB1dDxPYnNlcnZhYmxlPGJvb2xlYW4+IHwgbnVsbD4obnVsbCk7XG5cbiAgaXNMb2FkaW5nID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHdpdGhCb3JkZXIgPSBpbnB1dDxib29sZWFuPih0cnVlKTtcblxuICBkaXNhYmxlZCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBAT3V0cHV0KClcbiAgbmV3VmFsdWU6IEV2ZW50RW1pdHRlcjx1bmtub3duPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByZWFkb25seSBvbkZvY3VzQmVoYXZpb3IgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KHVuZGVmaW5lZCk7XG4gIHJlYWRvbmx5IHJlbmRlcklucHV0ID0gc2lnbmFsPElucHV0QmFzZTxudWxsPiB8IG51bGw+KG51bGwpO1xuICBwdWJsaWMgZWRpdE1vZGUgPSBzaWduYWwoZmFsc2UpO1xuXG4gIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDpjbGlja1wiLCBbXCIkZXZlbnQudGFyZ2V0XCJdKVxuICBvbkRvY3VtZW50Q2xpY2sodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZWRpdE1vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09IFwiSU5QVVRcIiAmJlxuICAgICAgKHRhcmdldEVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudHlwZSA9PT0gXCJmaWxlXCJcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xuICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjaGFuZ2VFZGl0TW9kZSA9IHRoaXMuY2hhbmdlRWRpdE1vZGUkKCk7XG4gICAgaWYgKGNoYW5nZUVkaXRNb2RlKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgY2hhbmdlRWRpdE1vZGUuc3Vic2NyaWJlKCh2YWx1ZSkgPT4gdGhpcy5lZGl0TW9kZS5zZXQodmFsdWUpKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0SW5wdXQoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlc1tcImlzTG9hZGluZ1wiXSAmJlxuICAgICAgY2hhbmdlc1tcImlzTG9hZGluZ1wiXS5jdXJyZW50VmFsdWUgIT09XG4gICAgICAgIGNoYW5nZXNbXCJpc0xvYWRpbmdcIl0ucHJldmlvdXNWYWx1ZSAmJlxuICAgICAgY2hhbmdlc1tcImlzTG9hZGluZ1wiXS5jdXJyZW50VmFsdWUgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICB0aGlzLl9zZXRJbnB1dCgpO1xuICAgICAgdGhpcy5lZGl0TW9kZS5zZXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVFZGl0TW9kZSgpIHtcbiAgICB0aGlzLmVkaXRNb2RlLnNldCghdGhpcy5lZGl0TW9kZSgpKTtcblxuICAgIGlmICh0aGlzLmVkaXRNb2RlKCkpIHtcbiAgICAgIHRoaXMub25Gb2N1c0JlaGF2aW9yLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMucmVuZGVySW5wdXQoKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmV3VmFsdWUuZW1pdChpbnB1dC52YWx1ZSk7XG5cbiAgICB0aGlzLnRvZ2dsZUVkaXRNb2RlKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbnB1dCgpIHtcbiAgICB0aGlzLnJlbmRlcklucHV0LnNldCh0aGlzLmdldElucHV0KCkoKSk7XG4gIH1cbn1cbiIsIjx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLmlzTG9hZGluZygpXCI+XG4gIEBsZXQgaW5wdXQgPSB0aGlzLnJlbmRlcklucHV0KCk7IEBpZiAoIXRoaXMuZWRpdE1vZGUoKSkge1xuICA8ZGl2XG4gICAgY2xhc3M9XCJ2YWx1ZS1jb250YWluZXJcIlxuICAgIFtuZ0NsYXNzXT1cInsgJ25vLWJvcmRlcic6ICF0aGlzLndpdGhCb3JkZXIoKSB9XCJcbiAgICBbY2xhc3MuaXMtZGlzYWJsZWRdPVwidGhpcy5kaXNhYmxlZCgpXCJcbiAgICAoY2xpY2spPVwiIXRoaXMuZGlzYWJsZWQoKSA/IHRoaXMudG9nZ2xlRWRpdE1vZGUoKSA6IG51bGxcIlxuICAgIGFwcFN0b3BQcm9wYWdhdGlvblxuICA+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgfSBAZWxzZSBpZiAoaW5wdXQpIHtcbiAgPGRpdiBjbGFzcz1cImFsaWduLWNlbnRlciBnLXNwYWNlLXNtXCI+XG4gICAgPHRhLWlucHV0c1xuICAgICAgY2xhc3M9XCJmbGV4LWZpbGxcIlxuICAgICAgYXBwU3RvcFByb3BhZ2F0aW9uXG4gICAgICBbaW5wdXRdPVwiaW5wdXRcIlxuICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICBbb25Gb2N1c109XCJ0aGlzLm9uRm9jdXNCZWhhdmlvclwiXG4gICAgPjwvdGEtaW5wdXRzPlxuICA8L2Rpdj5cbiAgfVxuPC90YS1sb2FkZXI+XG4iXX0=
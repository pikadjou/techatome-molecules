import { Component, EventEmitter, HostListener, Input, Output, signal, } from "@angular/core";
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
        this.changeEditMode$ = null;
        this.isLoading = false;
        this.withBorder = true;
        this.disabled = false;
        this.newValue = new EventEmitter();
        this.onFocus = new BehaviorSubject(undefined);
        this.renderInput = signal(null);
        this.editMode = signal(false);
    }
    ngOnInit() {
        if (this.changeEditMode$) {
            this._registerSubscription(this.changeEditMode$.subscribe((value) => this.editMode.set(value)));
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
            this.onFocus.next();
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
        this.renderInput.set(this.getInput());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditFieldComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EditFieldComponent, isStandalone: true, selector: "ta-edit-field", inputs: { getInput: "getInput", changeEditMode$: "changeEditMode$", isLoading: "isLoading", withBorder: "withBorder", disabled: "disabled" }, outputs: { newValue: "newValue" }, host: { listeners: { "document:click": "onDocumentClick($event.target)" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.isLoading\">\n  @let input = this.renderInput(); @if (!this.editMode()) {\n  <div\n    class=\"value-container\"\n    [ngClass]=\"{ 'no-border': !this.withBorder }\"\n    [class.is-disabled]=\"this.disabled\"\n    (click)=\"!this.disabled ? this.toggleEditMode() : null\"\n    appStopPropagation\n  >\n    <ng-content></ng-content>\n  </div>\n  } @else if (input) {\n  <div class=\"align-center g-space-sm\">\n    <ta-inputs\n      class=\"flex-fill\"\n      appStopPropagation\n      [input]=\"input\"\n      [standalone]=\"true\"\n      [onFocus]=\"this.onFocus\"\n    ></ta-inputs>\n  </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-edit-field", standalone: true, imports: [
                        NgIf,
                        NgClass,
                        StopPropagationDirective,
                        LoaderComponent,
                        InputsComponent,
                    ], template: "<ta-loader [isLoading]=\"this.isLoading\">\n  @let input = this.renderInput(); @if (!this.editMode()) {\n  <div\n    class=\"value-container\"\n    [ngClass]=\"{ 'no-border': !this.withBorder }\"\n    [class.is-disabled]=\"this.disabled\"\n    (click)=\"!this.disabled ? this.toggleEditMode() : null\"\n    appStopPropagation\n  >\n    <ng-content></ng-content>\n  </div>\n  } @else if (input) {\n  <div class=\"align-center g-space-sm\">\n    <ta-inputs\n      class=\"flex-fill\"\n      appStopPropagation\n      [input]=\"input\"\n      [standalone]=\"true\"\n      [onFocus]=\"this.onFocus\"\n    ></ta-inputs>\n  </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { getInput: [{
                type: Input
            }], changeEditMode$: [{
                type: Input
            }], isLoading: [{
                type: Input
            }], withBorder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], newValue: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ["document:click", ["$event.target"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdC1maWVsZC9lZGl0LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lZGl0LWZpZWxkL2VkaXQtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFpQjdELE1BQU0sT0FBTyxrQkFDWCxTQUFRLGVBQWU7SUEwQnZCLGVBQWUsQ0FBQyxhQUEwQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDckIsT0FBTztRQUNULENBQUM7UUFDRCxJQUNFLGFBQWEsQ0FBQyxPQUFPLEtBQUssT0FBTztZQUNoQyxhQUFrQyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQ25ELENBQUM7WUFDRCxPQUFPO1FBQ1QsQ0FBQztRQUNELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsWUFBb0IsVUFBc0I7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFEVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBbkMxQyxvQkFBZSxHQUErQixJQUFJLENBQUM7UUFHbkQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUczQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsYUFBUSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBTyxTQUFTLENBQUMsQ0FBQztRQUMvQyxnQkFBVyxHQUFHLE1BQU0sQ0FBeUIsSUFBSSxDQUFDLENBQUM7UUFDckQsYUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQXFCaEMsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNwRSxDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQ0UsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUNwQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWTtnQkFDL0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWE7WUFDcEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksS0FBSyxLQUFLLEVBQzNDLENBQUM7WUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFFTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVTtRQUNmLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWCxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDOytHQXRGVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixtWENwQy9CLHVvQkF1QkEsNGZET0ksT0FBTyxvRkFDUCx3QkFBd0Isd0dBQ3hCLGVBQWUseUdBQ2YsZUFBZTs7NEZBR04sa0JBQWtCO2tCQWI5QixTQUFTOytCQUNFLGVBQWUsY0FHYixJQUFJLFdBQ1A7d0JBQ1AsSUFBSTt3QkFDSixPQUFPO3dCQUNQLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZixlQUFlO3FCQUNoQjsrRUFPRCxRQUFRO3NCQURQLEtBQUs7Z0JBSU4sZUFBZTtzQkFEZCxLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLFFBQVE7c0JBRFAsTUFBTTtnQkFRUCxlQUFlO3NCQURkLFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgc2lnbmFsLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBOZ0lmLCBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSBcIkB0YS9mb3JtLW1vZGVsXCI7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSW5wdXRzQ29tcG9uZW50IH0gZnJvbSBcIi4uL2lucHV0cy9pbnB1dHMuY29tcG9uZW50XCI7XG5cbmV4cG9ydCB0eXBlIExheW91dCA9IFwicm93XCIgfCBcImNvbHVtblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtZWRpdC1maWVsZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2VkaXQtZmllbGQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2VkaXQtZmllbGQuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmLFxuICAgIE5nQ2xhc3MsXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBJbnB1dHNDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRGaWVsZENvbXBvbmVudFxuICBleHRlbmRzIFRhQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzXG57XG4gIEBJbnB1dCgpXG4gIGdldElucHV0ITogKCkgPT4gSW5wdXRCYXNlPGFueT47XG5cbiAgQElucHV0KClcbiAgY2hhbmdlRWRpdE1vZGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgd2l0aEJvcmRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgbmV3VmFsdWU6IEV2ZW50RW1pdHRlcjx1bmtub3duPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByZWFkb25seSBvbkZvY3VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDx2b2lkPih1bmRlZmluZWQpO1xuICByZWFkb25seSByZW5kZXJJbnB1dCA9IHNpZ25hbDxJbnB1dEJhc2U8bnVsbD4gfCBudWxsPihudWxsKTtcbiAgcHVibGljIGVkaXRNb2RlID0gc2lnbmFsKGZhbHNlKTtcblxuICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6Y2xpY2tcIiwgW1wiJGV2ZW50LnRhcmdldFwiXSlcbiAgb25Eb2N1bWVudENsaWNrKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmVkaXRNb2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSBcIklOUFVUXCIgJiZcbiAgICAgICh0YXJnZXRFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgPT09IFwiZmlsZVwiXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcbiAgICBpZiAoIWNsaWNrZWRJbnNpZGUpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlRWRpdE1vZGUkKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgdGhpcy5jaGFuZ2VFZGl0TW9kZSQuc3Vic2NyaWJlKCh2YWx1ZSkgPT4gdGhpcy5lZGl0TW9kZS5zZXQodmFsdWUpKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0SW5wdXQoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlc1tcImlzTG9hZGluZ1wiXSAmJlxuICAgICAgY2hhbmdlc1tcImlzTG9hZGluZ1wiXS5jdXJyZW50VmFsdWUgIT09XG4gICAgICAgIGNoYW5nZXNbXCJpc0xvYWRpbmdcIl0ucHJldmlvdXNWYWx1ZSAmJlxuICAgICAgY2hhbmdlc1tcImlzTG9hZGluZ1wiXS5jdXJyZW50VmFsdWUgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICB0aGlzLl9zZXRJbnB1dCgpO1xuICAgICAgdGhpcy5lZGl0TW9kZS5zZXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVFZGl0TW9kZSgpIHtcbiAgICB0aGlzLmVkaXRNb2RlLnNldCghdGhpcy5lZGl0TW9kZSgpKTtcblxuICAgIGlmICh0aGlzLmVkaXRNb2RlKCkpIHtcbiAgICAgIHRoaXMub25Gb2N1cy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHZhbGlkYXRpb24oKSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnJlbmRlcklucHV0KCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoaW5wdXQudmFsdWUpO1xuXG4gICAgdGhpcy50b2dnbGVFZGl0TW9kZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXQoKSB7XG4gICAgdGhpcy5yZW5kZXJJbnB1dC5zZXQodGhpcy5nZXRJbnB1dCgpKTtcbiAgfVxufVxuIiwiPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMuaXNMb2FkaW5nXCI+XG4gIEBsZXQgaW5wdXQgPSB0aGlzLnJlbmRlcklucHV0KCk7IEBpZiAoIXRoaXMuZWRpdE1vZGUoKSkge1xuICA8ZGl2XG4gICAgY2xhc3M9XCJ2YWx1ZS1jb250YWluZXJcIlxuICAgIFtuZ0NsYXNzXT1cInsgJ25vLWJvcmRlcic6ICF0aGlzLndpdGhCb3JkZXIgfVwiXG4gICAgW2NsYXNzLmlzLWRpc2FibGVkXT1cInRoaXMuZGlzYWJsZWRcIlxuICAgIChjbGljayk9XCIhdGhpcy5kaXNhYmxlZCA/IHRoaXMudG9nZ2xlRWRpdE1vZGUoKSA6IG51bGxcIlxuICAgIGFwcFN0b3BQcm9wYWdhdGlvblxuICA+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgfSBAZWxzZSBpZiAoaW5wdXQpIHtcbiAgPGRpdiBjbGFzcz1cImFsaWduLWNlbnRlciBnLXNwYWNlLXNtXCI+XG4gICAgPHRhLWlucHV0c1xuICAgICAgY2xhc3M9XCJmbGV4LWZpbGxcIlxuICAgICAgYXBwU3RvcFByb3BhZ2F0aW9uXG4gICAgICBbaW5wdXRdPVwiaW5wdXRcIlxuICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICBbb25Gb2N1c109XCJ0aGlzLm9uRm9jdXNcIlxuICAgID48L3RhLWlucHV0cz5cbiAgPC9kaXY+XG4gIH1cbjwvdGEtbG9hZGVyPlxuIl19
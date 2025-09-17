import { Component, EventEmitter, HostListener, Input, Output, signal, } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { StopPropagationDirective } from '@ta/utils';
import { LoaderComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { BehaviorSubject } from 'rxjs';
import { InputsComponent } from '../inputs/inputs.component';
import * as i0 from "@angular/core";
export class EditFieldComponent extends TaBaseComponent {
    onDocumentClick(targetElement) {
        if (!this.editMode()) {
            return;
        }
        if (targetElement.tagName === 'INPUT' && targetElement.type === 'file') {
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
            this._registerSubscription(this.changeEditMode$.subscribe(value => this.editMode.set(value)));
        }
        this._setInput();
    }
    ngOnChanges(changes) {
        if (changes['isLoading'] &&
            changes['isLoading'].currentValue !== changes['isLoading'].previousValue &&
            changes['isLoading'].currentValue === false) {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EditFieldComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: EditFieldComponent, isStandalone: true, selector: "ta-edit-field", inputs: { getInput: "getInput", changeEditMode$: "changeEditMode$", isLoading: "isLoading", withBorder: "withBorder", disabled: "disabled" }, outputs: { newValue: "newValue" }, host: { listeners: { "document:click": "onDocumentClick($event.target)" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.isLoading\">\n  @let input = this.renderInput();\n  @if (!this.editMode()) {\n    <div\n      class=\"value-container\"\n      [ngClass]=\"{ 'no-border': !this.withBorder }\"\n      [class.is-disabled]=\"this.disabled\"\n      (click)=\"!this.disabled ? this.toggleEditMode() : null\"\n      appStopPropagation\n    >\n      <ng-content></ng-content>\n    </div>\n  } @else if (input) {\n    <div class=\"align-center g-space-sm\">\n      <ta-inputs\n        class=\"flex-fill\"\n        appStopPropagation\n        [input]=\"input\"\n        [standalone]=\"true\"\n        [onFocus]=\"this.onFocus\"\n      ></ta-inputs>\n    </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EditFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-edit-field', standalone: true, imports: [NgIf, NgClass, StopPropagationDirective, LoaderComponent, InputsComponent], template: "<ta-loader [isLoading]=\"this.isLoading\">\n  @let input = this.renderInput();\n  @if (!this.editMode()) {\n    <div\n      class=\"value-container\"\n      [ngClass]=\"{ 'no-border': !this.withBorder }\"\n      [class.is-disabled]=\"this.disabled\"\n      (click)=\"!this.disabled ? this.toggleEditMode() : null\"\n      appStopPropagation\n    >\n      <ng-content></ng-content>\n    </div>\n  } @else if (input) {\n    <div class=\"align-center g-space-sm\">\n      <ta-inputs\n        class=\"flex-fill\"\n        appStopPropagation\n        [input]=\"input\"\n        [standalone]=\"true\"\n        [onFocus]=\"this.onFocus\"\n      ></ta-inputs>\n    </div>\n  }\n</ta-loader>\n", styles: [".value-container{flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-radius:4px;border-color:var(--ta-neutral-300);display:flex;padding:var(--ta-space-sm)}.value-container:hover{border-color:var(--ta-neutral-500)}.value-container.no-border{border:none}.value-container.is-disabled:hover{border-color:var(--ta-neutral-300)}.hidden-icon{visibility:hidden}.value-container:hover .hidden-icon{visibility:visible}\n"] }]
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
                args: ['document:click', ['$event.target']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdC1maWVsZC9lZGl0LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lZGl0LWZpZWxkL2VkaXQtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFXN0QsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQWU7SUF3QnJELGVBQWUsQ0FBQyxhQUEwQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDckIsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUFLLGFBQWtDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRSxDQUFDO1lBQzdGLE9BQU87UUFDVCxDQUFDO1FBQ0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLElBQUks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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgc2lnbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdJZiwgTmdDbGFzcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUgfSBmcm9tICdAdGEvdXRpbHMnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElucHV0c0NvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0cy9pbnB1dHMuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTGF5b3V0ID0gJ3JvdycgfCAnY29sdW1uJztcblxuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogJ3RhLWVkaXQtZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VkaXQtZmllbGQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE5nQ2xhc3MsIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSwgTG9hZGVyQ29tcG9uZW50LCBJbnB1dHNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIGdldElucHV0ITogKCkgPT4gSW5wdXRCYXNlPGFueT47XG5cbiAgQElucHV0KClcbiAgY2hhbmdlRWRpdE1vZGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgd2l0aEJvcmRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgbmV3VmFsdWU6IEV2ZW50RW1pdHRlcjx1bmtub3duPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByZWFkb25seSBvbkZvY3VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDx2b2lkPih1bmRlZmluZWQpO1xuICByZWFkb25seSByZW5kZXJJbnB1dCA9IHNpZ25hbDxJbnB1dEJhc2U8bnVsbD4gfCBudWxsPihudWxsKTtcbiAgcHVibGljIGVkaXRNb2RlID0gc2lnbmFsKGZhbHNlKTtcblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbkRvY3VtZW50Q2xpY2sodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZWRpdE1vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnICYmICh0YXJnZXRFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XG4gICAgaWYgKCFjbGlja2VkSW5zaWRlKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNoYW5nZUVkaXRNb2RlJCkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24odGhpcy5jaGFuZ2VFZGl0TW9kZSQuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuZWRpdE1vZGUuc2V0KHZhbHVlKSkpO1xuICAgIH1cbiAgICB0aGlzLl9zZXRJbnB1dCgpO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzWydpc0xvYWRpbmcnXSAmJlxuICAgICAgY2hhbmdlc1snaXNMb2FkaW5nJ10uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzWydpc0xvYWRpbmcnXS5wcmV2aW91c1ZhbHVlICYmXG4gICAgICBjaGFuZ2VzWydpc0xvYWRpbmcnXS5jdXJyZW50VmFsdWUgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICB0aGlzLl9zZXRJbnB1dCgpO1xuICAgICAgdGhpcy5lZGl0TW9kZS5zZXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVFZGl0TW9kZSgpIHtcbiAgICB0aGlzLmVkaXRNb2RlLnNldCghdGhpcy5lZGl0TW9kZSgpKTtcblxuICAgIGlmICh0aGlzLmVkaXRNb2RlKCkpIHtcbiAgICAgIHRoaXMub25Gb2N1cy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHZhbGlkYXRpb24oKSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnJlbmRlcklucHV0KCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoaW5wdXQudmFsdWUpO1xuXG4gICAgdGhpcy50b2dnbGVFZGl0TW9kZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5wdXQoKSB7XG4gICAgdGhpcy5yZW5kZXJJbnB1dC5zZXQodGhpcy5nZXRJbnB1dCgpKTtcbiAgfVxufVxuIiwiPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMuaXNMb2FkaW5nXCI+XG4gIEBsZXQgaW5wdXQgPSB0aGlzLnJlbmRlcklucHV0KCk7XG4gIEBpZiAoIXRoaXMuZWRpdE1vZGUoKSkge1xuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwidmFsdWUtY29udGFpbmVyXCJcbiAgICAgIFtuZ0NsYXNzXT1cInsgJ25vLWJvcmRlcic6ICF0aGlzLndpdGhCb3JkZXIgfVwiXG4gICAgICBbY2xhc3MuaXMtZGlzYWJsZWRdPVwidGhpcy5kaXNhYmxlZFwiXG4gICAgICAoY2xpY2spPVwiIXRoaXMuZGlzYWJsZWQgPyB0aGlzLnRvZ2dsZUVkaXRNb2RlKCkgOiBudWxsXCJcbiAgICAgIGFwcFN0b3BQcm9wYWdhdGlvblxuICAgID5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgfSBAZWxzZSBpZiAoaW5wdXQpIHtcbiAgICA8ZGl2IGNsYXNzPVwiYWxpZ24tY2VudGVyIGctc3BhY2Utc21cIj5cbiAgICAgIDx0YS1pbnB1dHNcbiAgICAgICAgY2xhc3M9XCJmbGV4LWZpbGxcIlxuICAgICAgICBhcHBTdG9wUHJvcGFnYXRpb25cbiAgICAgICAgW2lucHV0XT1cImlucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgIFtvbkZvY3VzXT1cInRoaXMub25Gb2N1c1wiXG4gICAgICA+PC90YS1pbnB1dHM+XG4gICAgPC9kaXY+XG4gIH1cbjwvdGEtbG9hZGVyPlxuIl19
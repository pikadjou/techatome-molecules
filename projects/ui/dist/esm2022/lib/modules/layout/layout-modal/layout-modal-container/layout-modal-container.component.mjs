import { NgTemplateOutlet } from "@angular/common";
import { Component, EventEmitter, Output, input } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { TaModalComponent } from "../../modal/modal.component";
import * as i0 from "@angular/core";
export class TemplateModalContainer extends TaBaseComponent {
    modalSize() {
        const s = this.style();
        if (s === 'full')
            return 'fullscreen';
        if (s === 'big')
            return 'large';
        if (s === 'small')
            return 'small';
        return 'medium';
    }
    constructor() {
        super();
        this.open = input.required();
        this.template = input(null);
        this.style = input("full");
        this.askClosing$ = input(undefined);
        this.closeEvent = new EventEmitter();
        // askClosing$ subscription handled by caller via (closeEvent)
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TemplateModalContainer, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TemplateModalContainer, isStandalone: true, selector: "ta-template-modal-container", inputs: { open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: true, transformFunction: null }, template: { classPropertyName: "template", publicName: "template", isSignal: true, isRequired: false, transformFunction: null }, style: { classPropertyName: "style", publicName: "style", isSignal: true, isRequired: false, transformFunction: null }, askClosing$: { classPropertyName: "askClosing$", publicName: "askClosing$", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { closeEvent: "closeEvent" }, usesInheritance: true, ngImport: i0, template: `
    <ta-modal
      [open]="this.open()"
      [size]="this.modalSize()"
      title=""
      (closeEvent)="this.closeEvent.emit()"
    >
      <div modal-content>
        @if (this.template()) {
          <ng-template [ngTemplateOutlet]="this.template()!"></ng-template>
        }
      </div>
    </ta-modal>
  `, isInline: true, dependencies: [{ kind: "component", type: TaModalComponent, selector: "ta-modal", inputs: ["open", "size", "title", "closeOnBackdrop", "contentFit"], outputs: ["closeEvent"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TemplateModalContainer, decorators: [{
            type: Component,
            args: [{
                    selector: "ta-template-modal-container",
                    template: `
    <ta-modal
      [open]="this.open()"
      [size]="this.modalSize()"
      title=""
      (closeEvent)="this.closeEvent.emit()"
    >
      <div modal-content>
        @if (this.template()) {
          <ng-template [ngTemplateOutlet]="this.template()!"></ng-template>
        }
      </div>
    </ta-modal>
  `,
                    standalone: true,
                    imports: [TaModalComponent, NgTemplateOutlet],
                }]
        }], ctorParameters: () => [], propDecorators: { closeEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGF5b3V0L2xheW91dC1tb2RhbC9sYXlvdXQtbW9kYWwtY29udGFpbmVyL2xheW91dC1tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBZSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUE0Qi9ELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxlQUFlO0lBUWxELFNBQVM7UUFDZCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssTUFBTTtZQUFFLE9BQU8sWUFBcUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxLQUFLO1lBQUUsT0FBTyxPQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLE9BQU87WUFBRSxPQUFPLE9BQWdCLENBQUM7UUFDM0MsT0FBTyxRQUFpQixDQUFDO0lBQzNCLENBQUM7SUFFRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBaEJWLFNBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFXLENBQUM7UUFDakMsYUFBUSxHQUFHLEtBQUssQ0FBMEIsSUFBSSxDQUFDLENBQUM7UUFDaEQsVUFBSyxHQUFHLEtBQUssQ0FBYSxNQUFNLENBQUMsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLEtBQUssQ0FBK0IsU0FBUyxDQUFDLENBQUM7UUFFbkQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFZOUMsOERBQThEO0lBQ2hFLENBQUM7K0dBbkJVLHNCQUFzQjttR0FBdEIsc0JBQXNCLHdwQkFqQnZCOzs7Ozs7Ozs7Ozs7O0dBYVQsNERBRVMsZ0JBQWdCLGtKQUFFLGdCQUFnQjs7NEZBRWpDLHNCQUFzQjtrQkFuQmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7b0JBQ0QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO2lCQUM5Qzt3REFPVyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IFRhTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vbW9kYWwvbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbFN0eWxlIH0gZnJvbSBcIi4uL2xheW91dC1tb2RhbC5jb21wb25lbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyRGF0YSB7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBhc2tDbG9zaW5nJD86IE9ic2VydmFibGU8bnVsbD47XG4gIHN0eWxlPzogTW9kYWxTdHlsZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLXRlbXBsYXRlLW1vZGFsLWNvbnRhaW5lclwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx0YS1tb2RhbFxuICAgICAgW29wZW5dPVwidGhpcy5vcGVuKClcIlxuICAgICAgW3NpemVdPVwidGhpcy5tb2RhbFNpemUoKVwiXG4gICAgICB0aXRsZT1cIlwiXG4gICAgICAoY2xvc2VFdmVudCk9XCJ0aGlzLmNsb3NlRXZlbnQuZW1pdCgpXCJcbiAgICA+XG4gICAgICA8ZGl2IG1vZGFsLWNvbnRlbnQ+XG4gICAgICAgIEBpZiAodGhpcy50ZW1wbGF0ZSgpKSB7XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRoaXMudGVtcGxhdGUoKSFcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L3RhLW1vZGFsPlxuICBgLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbVGFNb2RhbENvbXBvbmVudCwgTmdUZW1wbGF0ZU91dGxldF0sXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlTW9kYWxDb250YWluZXIgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQge1xuICBvcGVuID0gaW5wdXQucmVxdWlyZWQ8Ym9vbGVhbj4oKTtcbiAgdGVtcGxhdGUgPSBpbnB1dDxUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbD4obnVsbCk7XG4gIHN0eWxlID0gaW5wdXQ8TW9kYWxTdHlsZT4oXCJmdWxsXCIpO1xuICBhc2tDbG9zaW5nJCA9IGlucHV0PE9ic2VydmFibGU8bnVsbD4gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgQE91dHB1dCgpIGNsb3NlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgcHVibGljIG1vZGFsU2l6ZSgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5zdHlsZSgpO1xuICAgIGlmIChzID09PSAnZnVsbCcpIHJldHVybiAnZnVsbHNjcmVlbicgYXMgY29uc3Q7XG4gICAgaWYgKHMgPT09ICdiaWcnKSByZXR1cm4gJ2xhcmdlJyBhcyBjb25zdDtcbiAgICBpZiAocyA9PT0gJ3NtYWxsJykgcmV0dXJuICdzbWFsbCcgYXMgY29uc3Q7XG4gICAgcmV0dXJuICdtZWRpdW0nIGFzIGNvbnN0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyBhc2tDbG9zaW5nJCBzdWJzY3JpcHRpb24gaGFuZGxlZCBieSBjYWxsZXIgdmlhIChjbG9zZUV2ZW50KVxuICB9XG59XG4iXX0=
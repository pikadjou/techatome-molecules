import { NgTemplateOutlet } from "@angular/common";
import { Component, input, output } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { TaModalComponent } from "../../modal/modal.component";
import * as i0 from "@angular/core";
export class TemplateModalContainerComponent extends TaBaseComponent {
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
        this.closeEvent = output();
        // askClosing$ subscription handled by caller via (closeEvent)
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TemplateModalContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TemplateModalContainerComponent, isStandalone: true, selector: "ta-template-modal-container", inputs: { open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: true, transformFunction: null }, template: { classPropertyName: "template", publicName: "template", isSignal: true, isRequired: false, transformFunction: null }, style: { classPropertyName: "style", publicName: "style", isSignal: true, isRequired: false, transformFunction: null }, askClosing$: { classPropertyName: "askClosing$", publicName: "askClosing$", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { closeEvent: "closeEvent" }, usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "component", type: TaModalComponent, selector: "ta-modal", inputs: ["open", "size", "title", "overline", "tone", "showClose", "closeOnBackdrop", "contentFit"], outputs: ["closeEvent"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TemplateModalContainerComponent, decorators: [{
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
        }], ctorParameters: () => [] });
/** @deprecated utiliser TemplateModalContainerComponent */
export { TemplateModalContainerComponent as TemplateModalContainer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGF5b3V0L2xheW91dC1tb2RhbC9sYXlvdXQtbW9kYWwtY29udGFpbmVyL2xheW91dC1tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQWUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQTRCL0QsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGVBQWU7SUFRM0QsU0FBUztRQUNkLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxNQUFNO1lBQUUsT0FBTyxZQUFxQixDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLEtBQUs7WUFBRSxPQUFPLE9BQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssT0FBTztZQUFFLE9BQU8sT0FBZ0IsQ0FBQztRQUMzQyxPQUFPLFFBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFoQlYsU0FBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVcsQ0FBQztRQUNqQyxhQUFRLEdBQUcsS0FBSyxDQUEwQixJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFLLEdBQUcsS0FBSyxDQUFhLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsS0FBSyxDQUErQixTQUFTLENBQUMsQ0FBQztRQUU3RCxlQUFVLEdBQUcsTUFBTSxFQUFRLENBQUM7UUFZMUIsOERBQThEO0lBQ2hFLENBQUM7K0dBbkJVLCtCQUErQjttR0FBL0IsK0JBQStCLHdwQkFqQmhDOzs7Ozs7Ozs7Ozs7O0dBYVQsNERBRVMsZ0JBQWdCLG1MQUFFLGdCQUFnQjs7NEZBRWpDLCtCQUErQjtrQkFuQjNDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7b0JBQ0QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO2lCQUM5Qzs7QUF1QkQsMkRBQTJEO0FBQzNELE9BQU8sRUFBRSwrQkFBK0IsSUFBSSxzQkFBc0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIGlucHV0LCBvdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBUYU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL21vZGFsL21vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTW9kYWxTdHlsZSB9IGZyb20gXCIuLi9sYXlvdXQtbW9kYWwuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVNb2RhbENvbnRhaW5lckRhdGEge1xuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgYXNrQ2xvc2luZyQ/OiBPYnNlcnZhYmxlPG51bGw+O1xuICBzdHlsZT86IE1vZGFsU3R5bGU7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS10ZW1wbGF0ZS1tb2RhbC1jb250YWluZXJcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGEtbW9kYWxcbiAgICAgIFtvcGVuXT1cInRoaXMub3BlbigpXCJcbiAgICAgIFtzaXplXT1cInRoaXMubW9kYWxTaXplKClcIlxuICAgICAgdGl0bGU9XCJcIlxuICAgICAgKGNsb3NlRXZlbnQpPVwidGhpcy5jbG9zZUV2ZW50LmVtaXQoKVwiXG4gICAgPlxuICAgICAgPGRpdiBtb2RhbC1jb250ZW50PlxuICAgICAgICBAaWYgKHRoaXMudGVtcGxhdGUoKSkge1xuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aGlzLnRlbXBsYXRlKCkhXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC90YS1tb2RhbD5cbiAgYCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1RhTW9kYWxDb21wb25lbnQsIE5nVGVtcGxhdGVPdXRsZXRdLFxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgb3BlbiA9IGlucHV0LnJlcXVpcmVkPGJvb2xlYW4+KCk7XG4gIHRlbXBsYXRlID0gaW5wdXQ8VGVtcGxhdGVSZWY8YW55PiB8IG51bGw+KG51bGwpO1xuICBzdHlsZSA9IGlucHV0PE1vZGFsU3R5bGU+KFwiZnVsbFwiKTtcbiAgYXNrQ2xvc2luZyQgPSBpbnB1dDxPYnNlcnZhYmxlPG51bGw+IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIGNsb3NlRXZlbnQgPSBvdXRwdXQ8dm9pZD4oKTtcblxuICBwdWJsaWMgbW9kYWxTaXplKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLnN0eWxlKCk7XG4gICAgaWYgKHMgPT09ICdmdWxsJykgcmV0dXJuICdmdWxsc2NyZWVuJyBhcyBjb25zdDtcbiAgICBpZiAocyA9PT0gJ2JpZycpIHJldHVybiAnbGFyZ2UnIGFzIGNvbnN0O1xuICAgIGlmIChzID09PSAnc21hbGwnKSByZXR1cm4gJ3NtYWxsJyBhcyBjb25zdDtcbiAgICByZXR1cm4gJ21lZGl1bScgYXMgY29uc3Q7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIC8vIGFza0Nsb3NpbmckIHN1YnNjcmlwdGlvbiBoYW5kbGVkIGJ5IGNhbGxlciB2aWEgKGNsb3NlRXZlbnQpXG4gIH1cbn1cblxuLyoqIEBkZXByZWNhdGVkIHV0aWxpc2VyIFRlbXBsYXRlTW9kYWxDb250YWluZXJDb21wb25lbnQgKi9cbmV4cG9ydCB7IFRlbXBsYXRlTW9kYWxDb250YWluZXJDb21wb25lbnQgYXMgVGVtcGxhdGVNb2RhbENvbnRhaW5lciB9O1xuIl19
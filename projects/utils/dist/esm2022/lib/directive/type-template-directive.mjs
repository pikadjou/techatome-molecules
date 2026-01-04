import { Directive, input } from "@angular/core";
import * as i0 from "@angular/core";
export class TypedTemplateDirective {
    // @ts-ignore
    constructor(contentTemplate) {
        this.contentTemplate = contentTemplate;
        this.typedTemplate = input.required();
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedTemplateDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: TypedTemplateDirective, isStandalone: true, selector: "ng-template[typedTemplate]", inputs: { typedTemplate: { classPropertyName: "typedTemplate", publicName: "typedTemplate", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedTemplateDirective, decorators: [{
            type: Directive,
            args: [{ selector: "ng-template[typedTemplate]", standalone: true }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS10ZW1wbGF0ZS1kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZS90eXBlLXRlbXBsYXRlLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHOUQsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxhQUFhO0lBQ2IsWUFBb0IsZUFBdUM7UUFBdkMsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBSDNELGtCQUFhLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBYSxDQUFDO0lBR2tCLENBQUM7SUFFL0QsTUFBTSxDQUFDLHNCQUFzQixDQUMzQixHQUFzQyxFQUN0QyxHQUFZO1FBRVosT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOytHQVhVLHNCQUFzQjttR0FBdEIsc0JBQXNCOzs0RkFBdEIsc0JBQXNCO2tCQURsQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogXCJuZy10ZW1wbGF0ZVt0eXBlZFRlbXBsYXRlXVwiLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgVHlwZWRUZW1wbGF0ZURpcmVjdGl2ZTxUeXBlVG9rZW4+IHtcbiAgdHlwZWRUZW1wbGF0ZSA9IGlucHV0LnJlcXVpcmVkPFR5cGVUb2tlbj4oKTtcblxuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUeXBlVG9rZW4+KSB7fVxuXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFR5cGVUb2tlbj4oXG4gICAgZGlyOiBUeXBlZFRlbXBsYXRlRGlyZWN0aXZlPFR5cGVUb2tlbj4sXG4gICAgY3R4OiB1bmtub3duXG4gICk6IGN0eCBpcyBUeXBlVG9rZW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
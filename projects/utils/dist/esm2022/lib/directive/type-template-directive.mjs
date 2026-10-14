import { Directive, TemplateRef, input, inject } from "@angular/core";
import * as i0 from "@angular/core";
export class TypedTemplateDirective {
    constructor() {
        this.typedTemplate = input.required();
        this._contentTemplate = inject(TemplateRef);
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: TypedTemplateDirective, isStandalone: true, selector: "ng-template[typedTemplate]", inputs: { typedTemplate: { classPropertyName: "typedTemplate", publicName: "typedTemplate", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedTemplateDirective, decorators: [{
            type: Directive,
            args: [{ selector: "ng-template[typedTemplate]", standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS10ZW1wbGF0ZS1kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZS90eXBlLXRlbXBsYXRlLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUd0RSxNQUFNLE9BQU8sc0JBQXNCO0lBRG5DO1FBRUUsa0JBQWEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFhLENBQUM7UUFFM0IscUJBQWdCLEdBQUcsTUFBTSxDQUF5QixXQUFXLENBQUMsQ0FBQztLQVFqRjtJQU5DLE1BQU0sQ0FBQyxzQkFBc0IsQ0FDM0IsR0FBc0MsRUFDdEMsR0FBWTtRQUVaLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzsrR0FWVSxzQkFBc0I7bUdBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFEbEMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgaW5wdXQsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogXCJuZy10ZW1wbGF0ZVt0eXBlZFRlbXBsYXRlXVwiLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgVHlwZWRUZW1wbGF0ZURpcmVjdGl2ZTxUeXBlVG9rZW4+IHtcbiAgdHlwZWRUZW1wbGF0ZSA9IGlucHV0LnJlcXVpcmVkPFR5cGVUb2tlbj4oKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9jb250ZW50VGVtcGxhdGUgPSBpbmplY3Q8VGVtcGxhdGVSZWY8VHlwZVRva2VuPj4oVGVtcGxhdGVSZWYpO1xuXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFR5cGVUb2tlbj4oXG4gICAgZGlyOiBUeXBlZFRlbXBsYXRlRGlyZWN0aXZlPFR5cGVUb2tlbj4sXG4gICAgY3R4OiB1bmtub3duXG4gICk6IGN0eCBpcyBUeXBlVG9rZW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
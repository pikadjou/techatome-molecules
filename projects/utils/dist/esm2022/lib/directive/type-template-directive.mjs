import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TypedTemplateDirective {
    // @ts-ignore
    constructor(contentTemplate) {
        this.contentTemplate = contentTemplate;
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TypedTemplateDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: TypedTemplateDirective, isStandalone: true, selector: "ng-template[typedTemplate]", inputs: { typedTemplate: "typedTemplate" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TypedTemplateDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[typedTemplate]', standalone: true }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }], propDecorators: { typedTemplate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS10ZW1wbGF0ZS1kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZS90eXBlLXRlbXBsYXRlLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7QUFHOUQsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxhQUFhO0lBQ2IsWUFBb0IsZUFBdUM7UUFBdkMsb0JBQWUsR0FBZixlQUFlLENBQXdCO0lBQUcsQ0FBQztJQUUvRCxNQUFNLENBQUMsc0JBQXNCLENBQVksR0FBc0MsRUFBRSxHQUFZO1FBQzNGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzsrR0FSVSxzQkFBc0I7bUdBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFEbEMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO2dGQUU1RCxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdHlwZWRUZW1wbGF0ZV0nLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgVHlwZWRUZW1wbGF0ZURpcmVjdGl2ZTxUeXBlVG9rZW4+IHtcbiAgQElucHV0KCkgdHlwZWRUZW1wbGF0ZSE6IFR5cGVUb2tlbjtcblxuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUeXBlVG9rZW4+KSB7fVxuXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFR5cGVUb2tlbj4oZGlyOiBUeXBlZFRlbXBsYXRlRGlyZWN0aXZlPFR5cGVUb2tlbj4sIGN0eDogdW5rbm93bik6IGN0eCBpcyBUeXBlVG9rZW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
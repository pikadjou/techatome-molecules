import { Directive, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class TypedTemplateDirective {
    // @ts-ignore
    constructor(contentTemplate) {
        this.contentTemplate = contentTemplate;
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedTemplateDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: TypedTemplateDirective, isStandalone: true, selector: "ng-template[typedTemplate]", inputs: { typedTemplate: "typedTemplate" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedTemplateDirective, decorators: [{
            type: Directive,
            args: [{ selector: "ng-template[typedTemplate]", standalone: true }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }], propDecorators: { typedTemplate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS10ZW1wbGF0ZS1kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZS90eXBlLXRlbXBsYXRlLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7QUFHOUQsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxhQUFhO0lBQ2IsWUFBb0IsZUFBdUM7UUFBdkMsb0JBQWUsR0FBZixlQUFlLENBQXdCO0lBQUcsQ0FBQztJQUUvRCxNQUFNLENBQUMsc0JBQXNCLENBQzNCLEdBQXNDLEVBQ3RDLEdBQVk7UUFFWixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7K0dBWFUsc0JBQXNCO21HQUF0QixzQkFBc0I7OzRGQUF0QixzQkFBc0I7a0JBRGxDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtnRkFFNUQsYUFBYTtzQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiBcIm5nLXRlbXBsYXRlW3R5cGVkVGVtcGxhdGVdXCIsIHN0YW5kYWxvbmU6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBUeXBlZFRlbXBsYXRlRGlyZWN0aXZlPFR5cGVUb2tlbj4ge1xuICBASW5wdXQoKSB0eXBlZFRlbXBsYXRlITogVHlwZVRva2VuO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPFR5cGVUb2tlbj4pIHt9XG5cbiAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VHlwZVRva2VuPihcbiAgICBkaXI6IFR5cGVkVGVtcGxhdGVEaXJlY3RpdmU8VHlwZVRva2VuPixcbiAgICBjdHg6IHVua25vd25cbiAgKTogY3R4IGlzIFR5cGVUb2tlbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==
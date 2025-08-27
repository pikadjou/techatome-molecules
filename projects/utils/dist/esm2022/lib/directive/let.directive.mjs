import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LetDirective {
    constructor(_viewContainer, _templateRef) {
        this._viewContainer = _viewContainer;
        this._templateRef = _templateRef;
        this._context = { ngLet: null, $implicit: null };
        this._hasView = false;
    }
    set ngLet(value) {
        this._context.$implicit = this._context.ngLet = value;
        if (!this._hasView) {
            this._viewContainer.createEmbeddedView(this._templateRef, this._context);
            this._hasView = true;
        }
    }
    /**
     * Asserts the correct type of the context for the template that `NgLet` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `NgLet` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LetDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: LetDirective, selector: "[ngLet]", inputs: { ngLet: "ngLet" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LetDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[ngLet]',
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }], propDecorators: { ngLet: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlL2xldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlDLE1BQU0sZUFBZSxDQUFDOztBQVdoRixNQUFNLE9BQU8sWUFBWTtJQUt2QixZQUNVLGNBQWdDLEVBQ2hDLFlBQXdDO1FBRHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBNEI7UUFOMUMsYUFBUSxHQUF5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRWxFLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFLL0IsQ0FBQztJQUVKLElBQ0ksS0FBSyxDQUFDLEtBQVE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQWVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLHNCQUFzQixDQUMzQixHQUFvQixFQUNwQixHQUFRO1FBRVIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOytHQTNDVSxZQUFZO21HQUFaLFlBQVk7OzRGQUFaLFlBQVk7a0JBSnhCLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsU0FBUztpQkFDcEI7K0dBWUssS0FBSztzQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW50ZXJmYWNlIExldENvbnRleHQ8VD4ge1xuICBuZ0xldDogVDtcbiAgJGltcGxpY2l0OiBUO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmdMZXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTGV0RGlyZWN0aXZlPFQ+IHtcbiAgcHJpdmF0ZSBfY29udGV4dDogTGV0Q29udGV4dDxUIHwgbnVsbD4gPSB7IG5nTGV0OiBudWxsLCAkaW1wbGljaXQ6IG51bGwgfTtcblxuICBwcml2YXRlIF9oYXNWaWV3OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TGV0Q29udGV4dDxUPj5cbiAgKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ0xldCh2YWx1ZTogVCkge1xuICAgIHRoaXMuX2NvbnRleHQuJGltcGxpY2l0ID0gdGhpcy5fY29udGV4dC5uZ0xldCA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5faGFzVmlldykge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGVtcGxhdGVSZWYsIHRoaXMuX2NvbnRleHQpO1xuICAgICAgdGhpcy5faGFzVmlldyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgc3RhdGljIG5nTGV0VXNlSWZUeXBlR3VhcmQ6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFzc2VydCB0aGUgY29ycmVjdCB0eXBlIG9mIHRoZSBleHByZXNzaW9uIGJvdW5kIHRvIHRoZSBgTmdMZXRgIGlucHV0IHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRoZSBwcmVzZW5jZSBvZiB0aGlzIHN0YXRpYyBmaWVsZCBpcyBhIHNpZ25hbCB0byB0aGUgSXZ5IHRlbXBsYXRlIHR5cGUgY2hlY2sgY29tcGlsZXIgdGhhdFxuICAgKiB3aGVuIHRoZSBgTmdMZXRgIHN0cnVjdHVyYWwgZGlyZWN0aXZlIHJlbmRlcnMgaXRzIHRlbXBsYXRlLCB0aGUgdHlwZSBvZiB0aGUgZXhwcmVzc2lvbiBib3VuZFxuICAgKiB0byBgTmdMZXRgIHNob3VsZCBiZSBuYXJyb3dlZCBpbiBzb21lIHdheS4gRm9yIGBOZ0xldGAsIHRoZSBiaW5kaW5nIGV4cHJlc3Npb24gaXRzZWxmIGlzIHVzZWQgdG9cbiAgICogbmFycm93IGl0cyB0eXBlLCB3aGljaCBhbGxvd3MgdGhlIHN0cmljdE51bGxDaGVja3MgZmVhdHVyZSBvZiBUeXBlU2NyaXB0IHRvIHdvcmsgd2l0aCBgTmdMZXRgLlxuICAgKi9cbiAgc3RhdGljIG5nVGVtcGxhdGVHdWFyZF9uZ0xldDogJ2JpbmRpbmcnO1xuXG4gIC8qKlxuICAgKiBBc3NlcnRzIHRoZSBjb3JyZWN0IHR5cGUgb2YgdGhlIGNvbnRleHQgZm9yIHRoZSB0ZW1wbGF0ZSB0aGF0IGBOZ0xldGAgd2lsbCByZW5kZXIuXG4gICAqXG4gICAqIFRoZSBwcmVzZW5jZSBvZiB0aGlzIG1ldGhvZCBpcyBhIHNpZ25hbCB0byB0aGUgSXZ5IHRlbXBsYXRlIHR5cGUtY2hlY2sgY29tcGlsZXIgdGhhdCB0aGVcbiAgICogYE5nTGV0YCBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSByZW5kZXJzIGl0cyB0ZW1wbGF0ZSB3aXRoIGEgc3BlY2lmaWMgY29udGV4dCB0eXBlLlxuICAgKi9cbiAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oXG4gICAgZGlyOiBMZXREaXJlY3RpdmU8VD4sXG4gICAgY3R4OiBhbnlcbiAgKTogY3R4IGlzIExldENvbnRleHQ8RXhjbHVkZTxULCBmYWxzZSB8IDAgfCAnJyB8IG51bGwgfCB1bmRlZmluZWQ+PiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==
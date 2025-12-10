import { Directive, Input } from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LetDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: LetDirective, selector: "[ngLet]", inputs: { ngLet: "ngLet" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LetDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: "[ngLet]",
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }], propDecorators: { ngLet: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlL2xldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlDLE1BQU0sZUFBZSxDQUFDOztBQVdoRixNQUFNLE9BQU8sWUFBWTtJQUt2QixZQUNVLGNBQWdDLEVBQ2hDLFlBQXdDO1FBRHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBNEI7UUFOMUMsYUFBUSxHQUF5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRWxFLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFLL0IsQ0FBQztJQUVKLElBQ0ksS0FBSyxDQUFDLEtBQVE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQWVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLHNCQUFzQixDQUMzQixHQUFvQixFQUNwQixHQUFRO1FBRVIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOytHQTNDVSxZQUFZO21HQUFaLFlBQVk7OzRGQUFaLFlBQVk7a0JBSnhCLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsU0FBUztpQkFDcEI7K0dBWUssS0FBSztzQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbnRlcmZhY2UgTGV0Q29udGV4dDxUPiB7XG4gIG5nTGV0OiBUO1xuICAkaW1wbGljaXQ6IFQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogXCJbbmdMZXRdXCIsXG59KVxuZXhwb3J0IGNsYXNzIExldERpcmVjdGl2ZTxUPiB7XG4gIHByaXZhdGUgX2NvbnRleHQ6IExldENvbnRleHQ8VCB8IG51bGw+ID0geyBuZ0xldDogbnVsbCwgJGltcGxpY2l0OiBudWxsIH07XG5cbiAgcHJpdmF0ZSBfaGFzVmlldzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPExldENvbnRleHQ8VD4+XG4gICkge31cblxuICBASW5wdXQoKVxuICBzZXQgbmdMZXQodmFsdWU6IFQpIHtcbiAgICB0aGlzLl9jb250ZXh0LiRpbXBsaWNpdCA9IHRoaXMuX2NvbnRleHQubmdMZXQgPSB2YWx1ZTtcbiAgICBpZiAoIXRoaXMuX2hhc1ZpZXcpIHtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmLCB0aGlzLl9jb250ZXh0KTtcbiAgICAgIHRoaXMuX2hhc1ZpZXcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIHN0YXRpYyBuZ0xldFVzZUlmVHlwZUd1YXJkOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBBc3NlcnQgdGhlIGNvcnJlY3QgdHlwZSBvZiB0aGUgZXhwcmVzc2lvbiBib3VuZCB0byB0aGUgYE5nTGV0YCBpbnB1dCB3aXRoaW4gdGhlIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGUgcHJlc2VuY2Ugb2YgdGhpcyBzdGF0aWMgZmllbGQgaXMgYSBzaWduYWwgdG8gdGhlIEl2eSB0ZW1wbGF0ZSB0eXBlIGNoZWNrIGNvbXBpbGVyIHRoYXRcbiAgICogd2hlbiB0aGUgYE5nTGV0YCBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSByZW5kZXJzIGl0cyB0ZW1wbGF0ZSwgdGhlIHR5cGUgb2YgdGhlIGV4cHJlc3Npb24gYm91bmRcbiAgICogdG8gYE5nTGV0YCBzaG91bGQgYmUgbmFycm93ZWQgaW4gc29tZSB3YXkuIEZvciBgTmdMZXRgLCB0aGUgYmluZGluZyBleHByZXNzaW9uIGl0c2VsZiBpcyB1c2VkIHRvXG4gICAqIG5hcnJvdyBpdHMgdHlwZSwgd2hpY2ggYWxsb3dzIHRoZSBzdHJpY3ROdWxsQ2hlY2tzIGZlYXR1cmUgb2YgVHlwZVNjcmlwdCB0byB3b3JrIHdpdGggYE5nTGV0YC5cbiAgICovXG4gIHN0YXRpYyBuZ1RlbXBsYXRlR3VhcmRfbmdMZXQ6IFwiYmluZGluZ1wiO1xuXG4gIC8qKlxuICAgKiBBc3NlcnRzIHRoZSBjb3JyZWN0IHR5cGUgb2YgdGhlIGNvbnRleHQgZm9yIHRoZSB0ZW1wbGF0ZSB0aGF0IGBOZ0xldGAgd2lsbCByZW5kZXIuXG4gICAqXG4gICAqIFRoZSBwcmVzZW5jZSBvZiB0aGlzIG1ldGhvZCBpcyBhIHNpZ25hbCB0byB0aGUgSXZ5IHRlbXBsYXRlIHR5cGUtY2hlY2sgY29tcGlsZXIgdGhhdCB0aGVcbiAgICogYE5nTGV0YCBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSByZW5kZXJzIGl0cyB0ZW1wbGF0ZSB3aXRoIGEgc3BlY2lmaWMgY29udGV4dCB0eXBlLlxuICAgKi9cbiAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oXG4gICAgZGlyOiBMZXREaXJlY3RpdmU8VD4sXG4gICAgY3R4OiBhbnlcbiAgKTogY3R4IGlzIExldENvbnRleHQ8RXhjbHVkZTxULCBmYWxzZSB8IDAgfCBcIlwiIHwgbnVsbCB8IHVuZGVmaW5lZD4+IHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19
import { Directive, input, effect, TemplateRef, ViewContainerRef, inject } from "@angular/core";
import * as i0 from "@angular/core";
export class LetDirective {
    constructor() {
        this._context = { ngLet: null, $implicit: null };
        this._hasView = false;
        this.ngLet = input();
        this._viewContainer = inject(ViewContainerRef);
        this._templateRef = inject(TemplateRef);
        effect(() => {
            const value = this.ngLet();
            this._context.$implicit = this._context.ngLet = value;
            if (!this._hasView) {
                this._viewContainer.createEmbeddedView(this._templateRef, this._context);
                this._hasView = true;
            }
        });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LetDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: LetDirective, isStandalone: true, selector: "[ngLet]", inputs: { ngLet: { classPropertyName: "ngLet", publicName: "ngLet", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LetDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: "[ngLet]",
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlL2xldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBWWhHLE1BQU0sT0FBTyxZQUFZO0lBVXZCO1FBVFEsYUFBUSxHQUF5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRWxFLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFbEMsVUFBSyxHQUFHLEtBQUssRUFBSyxDQUFDO1FBRUYsbUJBQWMsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxpQkFBWSxHQUFHLE1BQU0sQ0FBNkIsV0FBVyxDQUFDLENBQUM7UUFHOUUsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNWLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFVLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDdkIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLHNCQUFzQixDQUMzQixHQUFvQixFQUNwQixHQUFRO1FBRVIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOytHQTdDVSxZQUFZO21HQUFaLFlBQVk7OzRGQUFaLFlBQVk7a0JBTHhCLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBpbnB1dCwgZWZmZWN0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW50ZXJmYWNlIExldENvbnRleHQ8VD4ge1xuICBuZ0xldDogVDtcbiAgJGltcGxpY2l0OiBUO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IFwiW25nTGV0XVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBMZXREaXJlY3RpdmU8VD4ge1xuICBwcml2YXRlIF9jb250ZXh0OiBMZXRDb250ZXh0PFQgfCBudWxsPiA9IHsgbmdMZXQ6IG51bGwsICRpbXBsaWNpdDogbnVsbCB9O1xuXG4gIHByaXZhdGUgX2hhc1ZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ0xldCA9IGlucHV0PFQ+KCk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfdmlld0NvbnRhaW5lciA9IGluamVjdChWaWV3Q29udGFpbmVyUmVmKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfdGVtcGxhdGVSZWYgPSBpbmplY3Q8VGVtcGxhdGVSZWY8TGV0Q29udGV4dDxUPj4+KFRlbXBsYXRlUmVmKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLm5nTGV0KCk7XG4gICAgICB0aGlzLl9jb250ZXh0LiRpbXBsaWNpdCA9IHRoaXMuX2NvbnRleHQubmdMZXQgPSB2YWx1ZSBhcyBUO1xuICAgICAgaWYgKCF0aGlzLl9oYXNWaWV3KSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmLCB0aGlzLl9jb250ZXh0KTtcbiAgICAgICAgdGhpcy5faGFzVmlldyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBzdGF0aWMgbmdMZXRVc2VJZlR5cGVHdWFyZDogdm9pZDtcblxuICAvKipcbiAgICogQXNzZXJ0IHRoZSBjb3JyZWN0IHR5cGUgb2YgdGhlIGV4cHJlc3Npb24gYm91bmQgdG8gdGhlIGBOZ0xldGAgaW5wdXQgd2l0aGluIHRoZSB0ZW1wbGF0ZS5cbiAgICpcbiAgICogVGhlIHByZXNlbmNlIG9mIHRoaXMgc3RhdGljIGZpZWxkIGlzIGEgc2lnbmFsIHRvIHRoZSBJdnkgdGVtcGxhdGUgdHlwZSBjaGVjayBjb21waWxlciB0aGF0XG4gICAqIHdoZW4gdGhlIGBOZ0xldGAgc3RydWN0dXJhbCBkaXJlY3RpdmUgcmVuZGVycyBpdHMgdGVtcGxhdGUsIHRoZSB0eXBlIG9mIHRoZSBleHByZXNzaW9uIGJvdW5kXG4gICAqIHRvIGBOZ0xldGAgc2hvdWxkIGJlIG5hcnJvd2VkIGluIHNvbWUgd2F5LiBGb3IgYE5nTGV0YCwgdGhlIGJpbmRpbmcgZXhwcmVzc2lvbiBpdHNlbGYgaXMgdXNlZCB0b1xuICAgKiBuYXJyb3cgaXRzIHR5cGUsIHdoaWNoIGFsbG93cyB0aGUgc3RyaWN0TnVsbENoZWNrcyBmZWF0dXJlIG9mIFR5cGVTY3JpcHQgdG8gd29yayB3aXRoIGBOZ0xldGAuXG4gICAqL1xuICBzdGF0aWMgbmdUZW1wbGF0ZUd1YXJkX25nTGV0OiBcImJpbmRpbmdcIjtcblxuICAvKipcbiAgICogQXNzZXJ0cyB0aGUgY29ycmVjdCB0eXBlIG9mIHRoZSBjb250ZXh0IGZvciB0aGUgdGVtcGxhdGUgdGhhdCBgTmdMZXRgIHdpbGwgcmVuZGVyLlxuICAgKlxuICAgKiBUaGUgcHJlc2VuY2Ugb2YgdGhpcyBtZXRob2QgaXMgYSBzaWduYWwgdG8gdGhlIEl2eSB0ZW1wbGF0ZSB0eXBlLWNoZWNrIGNvbXBpbGVyIHRoYXQgdGhlXG4gICAqIGBOZ0xldGAgc3RydWN0dXJhbCBkaXJlY3RpdmUgcmVuZGVycyBpdHMgdGVtcGxhdGUgd2l0aCBhIHNwZWNpZmljIGNvbnRleHQgdHlwZS5cbiAgICovXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQ+KFxuICAgIGRpcjogTGV0RGlyZWN0aXZlPFQ+LFxuICAgIGN0eDogYW55XG4gICk6IGN0eCBpcyBMZXRDb250ZXh0PEV4Y2x1ZGU8VCwgZmFsc2UgfCAwIHwgXCJcIiB8IG51bGwgfCB1bmRlZmluZWQ+PiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==
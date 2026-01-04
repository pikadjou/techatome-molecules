import { Directive, input, effect } from "@angular/core";
import * as i0 from "@angular/core";
export class LetDirective {
    constructor(_viewContainer, _templateRef) {
        this._viewContainer = _viewContainer;
        this._templateRef = _templateRef;
        this._context = { ngLet: null, $implicit: null };
        this._hasView = false;
        this.ngLet = input();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LetDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: LetDirective, selector: "[ngLet]", inputs: { ngLet: { classPropertyName: "ngLet", publicName: "ngLet", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LetDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: "[ngLet]",
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlL2xldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFpQyxNQUFNLGVBQWUsQ0FBQzs7QUFXeEYsTUFBTSxPQUFPLFlBQVk7SUFPdkIsWUFDVSxjQUFnQyxFQUNoQyxZQUF3QztRQUR4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQTRCO1FBUjFDLGFBQVEsR0FBeUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUVsRSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRWxDLFVBQUssR0FBRyxLQUFLLEVBQUssQ0FBQztRQU1qQixNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQVUsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN2QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBZUQ7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsc0JBQXNCLENBQzNCLEdBQW9CLEVBQ3BCLEdBQVE7UUFFUixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7K0dBN0NVLFlBQVk7bUdBQVosWUFBWTs7NEZBQVosWUFBWTtrQkFKeEIsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxTQUFTO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgaW5wdXQsIGVmZmVjdCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbnRlcmZhY2UgTGV0Q29udGV4dDxUPiB7XG4gIG5nTGV0OiBUO1xuICAkaW1wbGljaXQ6IFQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogXCJbbmdMZXRdXCIsXG59KVxuZXhwb3J0IGNsYXNzIExldERpcmVjdGl2ZTxUPiB7XG4gIHByaXZhdGUgX2NvbnRleHQ6IExldENvbnRleHQ8VCB8IG51bGw+ID0geyBuZ0xldDogbnVsbCwgJGltcGxpY2l0OiBudWxsIH07XG5cbiAgcHJpdmF0ZSBfaGFzVmlldzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nTGV0ID0gaW5wdXQ8VD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxMZXRDb250ZXh0PFQ+PlxuICApIHtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLm5nTGV0KCk7XG4gICAgICB0aGlzLl9jb250ZXh0LiRpbXBsaWNpdCA9IHRoaXMuX2NvbnRleHQubmdMZXQgPSB2YWx1ZSBhcyBUO1xuICAgICAgaWYgKCF0aGlzLl9oYXNWaWV3KSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmLCB0aGlzLl9jb250ZXh0KTtcbiAgICAgICAgdGhpcy5faGFzVmlldyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBzdGF0aWMgbmdMZXRVc2VJZlR5cGVHdWFyZDogdm9pZDtcblxuICAvKipcbiAgICogQXNzZXJ0IHRoZSBjb3JyZWN0IHR5cGUgb2YgdGhlIGV4cHJlc3Npb24gYm91bmQgdG8gdGhlIGBOZ0xldGAgaW5wdXQgd2l0aGluIHRoZSB0ZW1wbGF0ZS5cbiAgICpcbiAgICogVGhlIHByZXNlbmNlIG9mIHRoaXMgc3RhdGljIGZpZWxkIGlzIGEgc2lnbmFsIHRvIHRoZSBJdnkgdGVtcGxhdGUgdHlwZSBjaGVjayBjb21waWxlciB0aGF0XG4gICAqIHdoZW4gdGhlIGBOZ0xldGAgc3RydWN0dXJhbCBkaXJlY3RpdmUgcmVuZGVycyBpdHMgdGVtcGxhdGUsIHRoZSB0eXBlIG9mIHRoZSBleHByZXNzaW9uIGJvdW5kXG4gICAqIHRvIGBOZ0xldGAgc2hvdWxkIGJlIG5hcnJvd2VkIGluIHNvbWUgd2F5LiBGb3IgYE5nTGV0YCwgdGhlIGJpbmRpbmcgZXhwcmVzc2lvbiBpdHNlbGYgaXMgdXNlZCB0b1xuICAgKiBuYXJyb3cgaXRzIHR5cGUsIHdoaWNoIGFsbG93cyB0aGUgc3RyaWN0TnVsbENoZWNrcyBmZWF0dXJlIG9mIFR5cGVTY3JpcHQgdG8gd29yayB3aXRoIGBOZ0xldGAuXG4gICAqL1xuICBzdGF0aWMgbmdUZW1wbGF0ZUd1YXJkX25nTGV0OiBcImJpbmRpbmdcIjtcblxuICAvKipcbiAgICogQXNzZXJ0cyB0aGUgY29ycmVjdCB0eXBlIG9mIHRoZSBjb250ZXh0IGZvciB0aGUgdGVtcGxhdGUgdGhhdCBgTmdMZXRgIHdpbGwgcmVuZGVyLlxuICAgKlxuICAgKiBUaGUgcHJlc2VuY2Ugb2YgdGhpcyBtZXRob2QgaXMgYSBzaWduYWwgdG8gdGhlIEl2eSB0ZW1wbGF0ZSB0eXBlLWNoZWNrIGNvbXBpbGVyIHRoYXQgdGhlXG4gICAqIGBOZ0xldGAgc3RydWN0dXJhbCBkaXJlY3RpdmUgcmVuZGVycyBpdHMgdGVtcGxhdGUgd2l0aCBhIHNwZWNpZmljIGNvbnRleHQgdHlwZS5cbiAgICovXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQ+KFxuICAgIGRpcjogTGV0RGlyZWN0aXZlPFQ+LFxuICAgIGN0eDogYW55XG4gICk6IGN0eCBpcyBMZXRDb250ZXh0PEV4Y2x1ZGU8VCwgZmFsc2UgfCAwIHwgXCJcIiB8IG51bGwgfCB1bmRlZmluZWQ+PiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==
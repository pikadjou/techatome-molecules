import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class OnRenderDirective {
    constructor() {
        this.rendered = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['onRender'].previousValue !== changes['onRender'].currentValue) {
            this.rendered.emit();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: OnRenderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: OnRenderDirective, selector: "[TaOnRender]", inputs: { onRender: "onRender" }, outputs: { rendered: "rendered" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: OnRenderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[TaOnRender]',
                }]
        }], propDecorators: { onRender: [{
                type: Input
            }], rendered: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tcmVuZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlL29uLXJlbmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3RGLE1BQU0sT0FBTyxpQkFBaUI7SUFIOUI7UUFNWSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQU96QztJQUxDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7K0dBVFUsaUJBQWlCO21HQUFqQixpQkFBaUI7OzRGQUFqQixpQkFBaUI7a0JBSDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzhCQUVVLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksUUFBUTtzQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tUYU9uUmVuZGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE9uUmVuZGVyRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgb25SZW5kZXIhOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSByZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ29uUmVuZGVyJ10ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1snb25SZW5kZXInXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMucmVuZGVyZWQuZW1pdCgpO1xuICAgIH1cbiAgfVxufVxuIl19
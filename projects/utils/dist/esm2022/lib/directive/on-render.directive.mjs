import { Directive, EventEmitter, Input, Output, } from '@angular/core';
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: OnRenderDirective, selector: "[camOnRender]", inputs: { onRender: "onRender" }, outputs: { rendered: "rendered" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: OnRenderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[camOnRender]',
                }]
        }], propDecorators: { onRender: [{
                type: Input
            }], rendered: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tcmVuZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlL29uLXJlbmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQzs7QUFLdkIsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQU1ZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBU3pDO0lBUEMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQ0UsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxFQUN0RSxDQUFDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQzsrR0FYVSxpQkFBaUI7bUdBQWpCLGlCQUFpQjs7NEZBQWpCLGlCQUFpQjtrQkFIN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7OEJBRVUsUUFBUTtzQkFBaEIsS0FBSztnQkFFSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2FtT25SZW5kZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgT25SZW5kZXJEaXJlY3RpdmUge1xuICBASW5wdXQoKSBvblJlbmRlciE6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzWydvblJlbmRlciddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ29uUmVuZGVyJ10uY3VycmVudFZhbHVlXG4gICAgKSB7XG4gICAgICB0aGlzLnJlbmRlcmVkLmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
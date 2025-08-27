import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class StopPropagationDirective {
    constructor() {
        this.stopPropagationActivation = true;
    }
    onClick(event) {
        if (event && this.stopPropagationActivation) {
            event.stopPropagation();
            event.preventDefault();
        }
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: StopPropagationDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: StopPropagationDirective, isStandalone: true, selector: "[appStopPropagation]", inputs: { stopPropagationActivation: "stopPropagationActivation" }, host: { listeners: { "click": "onClick($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: StopPropagationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appStopPropagation]',
                    standalone: true,
                }]
        }], propDecorators: { stopPropagationActivation: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZS9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTS9ELE1BQU0sT0FBTyx3QkFBd0I7SUFKckM7UUFLVyw4QkFBeUIsR0FBRyxJQUFJLENBQUM7S0FXM0M7SUFSUSxPQUFPLENBQUMsS0FBVTtRQUN2QixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUM1QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7K0dBWFUsd0JBQXdCO21HQUF4Qix3QkFBd0I7OzRGQUF4Qix3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUVVLHlCQUF5QjtzQkFBakMsS0FBSztnQkFHQyxPQUFPO3NCQURiLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBTdG9wUHJvcGFnYXRpb25dJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgc3RvcFByb3BhZ2F0aW9uQWN0aXZhdGlvbiA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKGV2ZW50ICYmIHRoaXMuc3RvcFByb3BhZ2F0aW9uQWN0aXZhdGlvbikge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19
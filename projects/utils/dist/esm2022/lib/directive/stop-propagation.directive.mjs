import { Directive, HostListener, Input } from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StopPropagationDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: StopPropagationDirective, isStandalone: true, selector: "[appStopPropagation]", inputs: { stopPropagationActivation: "stopPropagationActivation" }, host: { listeners: { "click": "onClick($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StopPropagationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[appStopPropagation]",
                    standalone: true,
                }]
        }], propDecorators: { stopPropagationActivation: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ["click", ["$event"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZS9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTS9ELE1BQU0sT0FBTyx3QkFBd0I7SUFKckM7UUFLVyw4QkFBeUIsR0FBRyxJQUFJLENBQUM7S0FXM0M7SUFSUSxPQUFPLENBQUMsS0FBVTtRQUN2QixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUM1QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7K0dBWFUsd0JBQXdCO21HQUF4Qix3QkFBd0I7OzRGQUF4Qix3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUVVLHlCQUF5QjtzQkFBakMsS0FBSztnQkFHQyxPQUFPO3NCQURiLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIlthcHBTdG9wUHJvcGFnYXRpb25dXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHN0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb24gPSB0cnVlO1xuXG4gIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoZXZlbnQgJiYgdGhpcy5zdG9wUHJvcGFnYXRpb25BY3RpdmF0aW9uKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=
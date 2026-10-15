import { Directive, input } from "@angular/core";
import * as i0 from "@angular/core";
export class StopPropagationDirective {
    constructor() {
        this.stopPropagationActivation = input(true);
    }
    onClick(event) {
        if (event && this.stopPropagationActivation()) {
            event.stopPropagation();
            event.preventDefault();
        }
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StopPropagationDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: StopPropagationDirective, isStandalone: true, selector: "[appStopPropagation]", inputs: { stopPropagationActivation: { classPropertyName: "stopPropagationActivation", publicName: "stopPropagationActivation", isSignal: true, isRequired: false, transformFunction: null } }, host: { listeners: { "click": "onClick($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StopPropagationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[appStopPropagation]",
                    standalone: true,
                    host: { "(click)": "onClick($event)" },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZS9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPakQsTUFBTSxPQUFPLHdCQUF3QjtJQUxyQztRQU1FLDhCQUF5QixHQUFHLEtBQUssQ0FBVSxJQUFJLENBQUMsQ0FBQztLQVVsRDtJQVJRLE9BQU8sQ0FBQyxLQUFVO1FBQ3ZCLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLENBQUM7WUFDOUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOytHQVZVLHdCQUF3QjttR0FBeEIsd0JBQXdCOzs0RkFBeEIsd0JBQXdCO2tCQUxwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7aUJBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbYXBwU3RvcFByb3BhZ2F0aW9uXVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBob3N0OiB7IFwiKGNsaWNrKVwiOiBcIm9uQ2xpY2soJGV2ZW50KVwiIH0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB7XG4gIHN0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb24gPSBpbnB1dDxib29sZWFuPih0cnVlKTtcblxuICBwdWJsaWMgb25DbGljayhldmVudDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKGV2ZW50ICYmIHRoaXMuc3RvcFByb3BhZ2F0aW9uQWN0aXZhdGlvbigpKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=
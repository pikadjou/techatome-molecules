import { Directive, HostListener, input } from "@angular/core";
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
                }]
        }], propDecorators: { onClick: [{
                type: HostListener,
                args: ["click", ["$event"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZS9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTS9ELE1BQU0sT0FBTyx3QkFBd0I7SUFKckM7UUFLRSw4QkFBeUIsR0FBRyxLQUFLLENBQVUsSUFBSSxDQUFDLENBQUM7S0FXbEQ7SUFSUSxPQUFPLENBQUMsS0FBVTtRQUN2QixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDO1lBQzlDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzsrR0FYVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qjs7NEZBQXhCLHdCQUF3QjtrQkFKcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBS1EsT0FBTztzQkFEYixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbYXBwU3RvcFByb3BhZ2F0aW9uXVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUge1xuICBzdG9wUHJvcGFnYXRpb25BY3RpdmF0aW9uID0gaW5wdXQ8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChldmVudCAmJiB0aGlzLnN0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb24oKSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19
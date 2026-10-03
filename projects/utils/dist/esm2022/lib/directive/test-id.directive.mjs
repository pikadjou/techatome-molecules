import { Directive, HostBinding, input } from "@angular/core";
import * as i0 from "@angular/core";
export class TaTestIdDirective {
    constructor() {
        this.taTestId = input.required();
    }
    get attr() {
        return this.taTestId();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTestIdDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: TaTestIdDirective, isStandalone: true, selector: "[taTestId]", inputs: { taTestId: { classPropertyName: "taTestId", publicName: "taTestId", isSignal: true, isRequired: true, transformFunction: null } }, host: { properties: { "attr.data-testid": "this.attr" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTestIdDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[taTestId]",
                    standalone: true,
                }]
        }], propDecorators: { attr: [{
                type: HostBinding,
                args: ["attr.data-testid"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1pZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZS90ZXN0LWlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTlELE1BQU0sT0FBTyxpQkFBaUI7SUFKOUI7UUFLVyxhQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBVSxDQUFDO0tBTTlDO0lBSkMsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQzsrR0FOVSxpQkFBaUI7bUdBQWpCLGlCQUFpQjs7NEZBQWpCLGlCQUFpQjtrQkFKN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUtLLElBQUk7c0JBRFAsV0FBVzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbdGFUZXN0SWRdXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFRhVGVzdElkRGlyZWN0aXZlIHtcbiAgcmVhZG9ubHkgdGFUZXN0SWQgPSBpbnB1dC5yZXF1aXJlZDxzdHJpbmc+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKFwiYXR0ci5kYXRhLXRlc3RpZFwiKVxuICBnZXQgYXR0cigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhVGVzdElkKCk7XG4gIH1cbn1cbiJdfQ==
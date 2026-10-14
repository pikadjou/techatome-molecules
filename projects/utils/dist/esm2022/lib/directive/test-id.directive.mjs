import { Directive, input } from "@angular/core";
import * as i0 from "@angular/core";
export class TaTestIdDirective {
    constructor() {
        this.taTestId = input.required();
    }
    get attr() {
        return this.taTestId();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTestIdDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: TaTestIdDirective, isStandalone: true, selector: "[taTestId]", inputs: { taTestId: { classPropertyName: "taTestId", publicName: "taTestId", isSignal: true, isRequired: true, transformFunction: null } }, host: { properties: { "attr.data-testid": "attr" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTestIdDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[taTestId]",
                    standalone: true,
                    host: { "[attr.data-testid]": "attr" },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1pZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZS90ZXN0LWlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPakQsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQU1XLGFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFVLENBQUM7S0FLOUM7SUFIQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOytHQUxVLGlCQUFpQjttR0FBakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUw3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFO2lCQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgaW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW3RhVGVzdElkXVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBob3N0OiB7IFwiW2F0dHIuZGF0YS10ZXN0aWRdXCI6IFwiYXR0clwiIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRhVGVzdElkRGlyZWN0aXZlIHtcbiAgcmVhZG9ubHkgdGFUZXN0SWQgPSBpbnB1dC5yZXF1aXJlZDxzdHJpbmc+KCk7XG5cbiAgZ2V0IGF0dHIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50YVRlc3RJZCgpO1xuICB9XG59XG4iXX0=
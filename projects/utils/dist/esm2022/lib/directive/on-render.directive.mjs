import { Directive, input, output, } from "@angular/core";
import * as i0 from "@angular/core";
export class OnRenderDirective {
    constructor() {
        this.onRender = input.required();
        this.rendered = output();
    }
    ngOnChanges(changes) {
        if (changes["onRender"].previousValue !== changes["onRender"].currentValue) {
            this.rendered.emit();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OnRenderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: OnRenderDirective, isStandalone: true, selector: "[TaOnRender]", inputs: { onRender: { classPropertyName: "onRender", publicName: "onRender", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { rendered: "rendered" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OnRenderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[TaOnRender]",
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tcmVuZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlL29uLXJlbmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDOztBQU12QixNQUFNLE9BQU8saUJBQWlCO0lBSjlCO1FBS0UsYUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVcsQ0FBQztRQUVyQyxhQUFRLEdBQUcsTUFBTSxFQUFRLENBQUM7S0FTM0I7SUFQQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFDRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLEVBQ3RFLENBQUM7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDOytHQVhVLGlCQUFpQjttR0FBakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUo3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIGlucHV0LFxuICBvdXRwdXQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbVGFPblJlbmRlcl1cIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgT25SZW5kZXJEaXJlY3RpdmUge1xuICBvblJlbmRlciA9IGlucHV0LnJlcXVpcmVkPGJvb2xlYW4+KCk7XG5cbiAgcmVuZGVyZWQgPSBvdXRwdXQ8dm9pZD4oKTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlc1tcIm9uUmVuZGVyXCJdLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbXCJvblJlbmRlclwiXS5jdXJyZW50VmFsdWVcbiAgICApIHtcbiAgICAgIHRoaXMucmVuZGVyZWQuZW1pdCgpO1xuICAgIH1cbiAgfVxufVxuIl19
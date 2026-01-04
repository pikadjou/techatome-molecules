import { Directive, EventEmitter, Output, input, } from "@angular/core";
import * as i0 from "@angular/core";
export class OnRenderDirective {
    constructor() {
        this.onRender = input.required();
        this.rendered = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes["onRender"].previousValue !== changes["onRender"].currentValue) {
            this.rendered.emit();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OnRenderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: OnRenderDirective, selector: "[TaOnRender]", inputs: { onRender: { classPropertyName: "onRender", publicName: "onRender", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { rendered: "rendered" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OnRenderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[TaOnRender]",
                }]
        }], propDecorators: { rendered: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tcmVuZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlL29uLXJlbmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUVOLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQzs7QUFLdkIsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQUlFLGFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFXLENBQUM7UUFFM0IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0FTekM7SUFQQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFDRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLEVBQ3RFLENBQUM7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDOytHQVhVLGlCQUFpQjttR0FBakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs4QkFJVyxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgaW5wdXQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbVGFPblJlbmRlcl1cIixcbn0pXG5leHBvcnQgY2xhc3MgT25SZW5kZXJEaXJlY3RpdmUge1xuICBvblJlbmRlciA9IGlucHV0LnJlcXVpcmVkPGJvb2xlYW4+KCk7XG5cbiAgQE91dHB1dCgpIHJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzW1wib25SZW5kZXJcIl0ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1tcIm9uUmVuZGVyXCJdLmN1cnJlbnRWYWx1ZVxuICAgICkge1xuICAgICAgdGhpcy5yZW5kZXJlZC5lbWl0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=
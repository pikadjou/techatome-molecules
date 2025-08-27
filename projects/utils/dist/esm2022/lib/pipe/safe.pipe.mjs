import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SafePipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SafePipe, isStandalone: true, name: "safe" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SafePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'safe', standalone: true }]
        }], ctorParameters: () => [{ type: i1.DomSanitizer }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlL3NhZmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBSXBELE1BQU0sT0FBTyxRQUFRO0lBQ25CLFlBQXNCLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBRyxDQUFDO0lBRTFDLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBWTtRQUN2QyxRQUFRLElBQUksRUFBRSxDQUFDO1lBQ2IsS0FBSyxNQUFNO2dCQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2RCxLQUFLLE9BQU87Z0JBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELEtBQUssUUFBUTtnQkFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekQsS0FBSyxLQUFLO2dCQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RCxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5RDtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDSCxDQUFDOytHQWxCVSxRQUFROzZHQUFSLFFBQVE7OzRGQUFSLFFBQVE7a0JBRHBCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sLCBTYWZlUmVzb3VyY2VVcmwsIFNhZmVTY3JpcHQsIFNhZmVTdHlsZSwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7IG5hbWU6ICdzYWZlJywgc3RhbmRhbG9uZTogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIFNhZmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBhbnksIHR5cGU6IHN0cmluZyk6IFNhZmVIdG1sIHwgU2FmZVN0eWxlIHwgU2FmZVNjcmlwdCB8IFNhZmVVcmwgfCBTYWZlUmVzb3VyY2VVcmwge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWUpO1xuICAgICAgY2FzZSAnc2NyaXB0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTY3JpcHQodmFsdWUpO1xuICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodmFsdWUpO1xuICAgICAgY2FzZSAncmVzb3VyY2VVcmwnOlxuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHZhbHVlKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzYWZlIHR5cGUgc3BlY2lmaWVkOiAke3R5cGV9YCk7XG4gICAgfVxuICB9XG59XG4iXX0=
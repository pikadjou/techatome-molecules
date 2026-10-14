import { Directive, output } from "@angular/core";
import * as i0 from "@angular/core";
export class DndDirective {
    constructor() {
        this.fileOver = false;
        this.fileDropped = output();
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = true;
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DndDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: DndDirective, isStandalone: true, selector: "[appDnd]", outputs: { fileDropped: "fileDropped" }, host: { listeners: { "dragover": "onDragOver($event)", "dragleave": "onDragLeave($event)", "drop": "onDrop($event)" }, properties: { "class.fileover": "fileOver" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DndDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[appDnd]",
                    standalone: true,
                    host: {
                        "[class.fileover]": "fileOver",
                        "(dragover)": "onDragOver($event)",
                        "(dragleave)": "onDragLeave($event)",
                        "(drop)": "onDrop($event)",
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlL2RuZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBWWxELE1BQU0sT0FBTyxZQUFZO0lBVnpCO1FBV1MsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUV4QixnQkFBVyxHQUFHLE1BQU0sRUFBWSxDQUFDO0tBdUJsQztJQXJCUSxVQUFVLENBQUMsS0FBZ0I7UUFDaEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQWdCO1FBQ2pDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFnQjtRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO1FBQ3hDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7K0dBekJVLFlBQVk7bUdBQVosWUFBWTs7NEZBQVosWUFBWTtrQkFWeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRTt3QkFDSixrQkFBa0IsRUFBRSxVQUFVO3dCQUM5QixZQUFZLEVBQUUsb0JBQW9CO3dCQUNsQyxhQUFhLEVBQUUscUJBQXFCO3dCQUNwQyxRQUFRLEVBQUUsZ0JBQWdCO3FCQUMzQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgb3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIlthcHBEbmRdXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGhvc3Q6IHtcbiAgICBcIltjbGFzcy5maWxlb3Zlcl1cIjogXCJmaWxlT3ZlclwiLFxuICAgIFwiKGRyYWdvdmVyKVwiOiBcIm9uRHJhZ092ZXIoJGV2ZW50KVwiLFxuICAgIFwiKGRyYWdsZWF2ZSlcIjogXCJvbkRyYWdMZWF2ZSgkZXZlbnQpXCIsXG4gICAgXCIoZHJvcClcIjogXCJvbkRyb3AoJGV2ZW50KVwiLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBEbmREaXJlY3RpdmUge1xuICBwdWJsaWMgZmlsZU92ZXIgPSBmYWxzZTtcblxuICBmaWxlRHJvcHBlZCA9IG91dHB1dDxGaWxlTGlzdD4oKTtcblxuICBwdWJsaWMgb25EcmFnT3ZlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmZpbGVPdmVyID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyYWdMZWF2ZShldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmZpbGVPdmVyID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgb25Ecm9wKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZmlsZU92ZXIgPSBmYWxzZTtcbiAgICBjb25zdCBmaWxlcyA9IGV2ZW50LmRhdGFUcmFuc2Zlcj8uZmlsZXM7XG4gICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZmlsZURyb3BwZWQuZW1pdChmaWxlcyk7XG4gICAgfVxuICB9XG59XG4iXX0=
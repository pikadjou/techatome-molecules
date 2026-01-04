import { Component, input } from "@angular/core";
import { LocalIconComponent } from "@ta/icons";
import { TaIconType } from "@ta/icons";
import { extractExtension } from "@ta/utils";
import * as i0 from "@angular/core";
export class FileImageComponent {
    constructor() {
        this.fileName = input.required();
        this.size = input("sm");
    }
    get extIcon() {
        const ext = extractExtension(this.fileName());
        switch (ext) {
            case "docx":
                return TaIconType.Doc;
            case "pdf":
                return TaIconType.Pdf;
            case "xlsx":
                return TaIconType.Xls;
            default:
                return TaIconType.FileEmpty;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileImageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: FileImageComponent, isStandalone: true, selector: "ta-file-image", inputs: { fileName: { classPropertyName: "fileName", publicName: "fileName", isSignal: true, isRequired: true, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<ta-local-icon [type]=\"this.extIcon\" [size]=\"this.size()\"></ta-local-icon>\n", styles: [""], dependencies: [{ kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileImageComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-file-image", standalone: true, imports: [LocalIconComponent], template: "<ta-local-icon [type]=\"this.extIcon\" [size]=\"this.size()\"></ta-local-icon>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvZmlsZS1pbWFnZS9maWxlLWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9maWxlLWltYWdlL2ZpbGUtaW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVM3QyxNQUFNLE9BQU8sa0JBQWtCO0lBUC9CO1FBUUUsYUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVUsQ0FBQztRQUVwQyxTQUFJLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO0tBZ0I3QjtJQWRDLElBQUksT0FBTztRQUNULE1BQU0sR0FBRyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDWixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3hCLEtBQUssS0FBSztnQkFDUixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDeEIsS0FBSyxNQUFNO2dCQUNULE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN4QjtnQkFDRSxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7K0dBbEJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLDBVQ2QvQixrRkFDQSwwRERXWSxrQkFBa0I7OzRGQUVqQixrQkFBa0I7a0JBUDlCLFNBQVM7K0JBQ0UsZUFBZSxjQUdiLElBQUksV0FDUCxDQUFDLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IExvY2FsSWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhSWNvblR5cGUgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcbmltcG9ydCB7IGV4dHJhY3RFeHRlbnNpb24gfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1maWxlLWltYWdlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZmlsZS1pbWFnZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZmlsZS1pbWFnZS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0xvY2FsSWNvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVJbWFnZUNvbXBvbmVudCB7XG4gIGZpbGVOYW1lID0gaW5wdXQucmVxdWlyZWQ8c3RyaW5nPigpO1xuXG4gIHNpemUgPSBpbnB1dDxUYVNpemVzPihcInNtXCIpO1xuXG4gIGdldCBleHRJY29uKCk6IFRhSWNvblR5cGUge1xuICAgIGNvbnN0IGV4dCA9IGV4dHJhY3RFeHRlbnNpb24odGhpcy5maWxlTmFtZSgpKTtcblxuICAgIHN3aXRjaCAoZXh0KSB7XG4gICAgICBjYXNlIFwiZG9jeFwiOlxuICAgICAgICByZXR1cm4gVGFJY29uVHlwZS5Eb2M7XG4gICAgICBjYXNlIFwicGRmXCI6XG4gICAgICAgIHJldHVybiBUYUljb25UeXBlLlBkZjtcbiAgICAgIGNhc2UgXCJ4bHN4XCI6XG4gICAgICAgIHJldHVybiBUYUljb25UeXBlLlhscztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBUYUljb25UeXBlLkZpbGVFbXB0eTtcbiAgICB9XG4gIH1cbn1cbiIsIjx0YS1sb2NhbC1pY29uIFt0eXBlXT1cInRoaXMuZXh0SWNvblwiIFtzaXplXT1cInRoaXMuc2l6ZSgpXCI+PC90YS1sb2NhbC1pY29uPlxuIl19
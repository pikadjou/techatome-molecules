import { Component, Input } from "@angular/core";
import { LocalIconComponent } from "@ta/icons";
import { TaIconType } from "@ta/icons";
import { extractExtension } from "@ta/utils";
import * as i0 from "@angular/core";
export class FileImageComponent {
    constructor() {
        this.size = "sm";
    }
    get extIcon() {
        const ext = extractExtension(this.fileName);
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: FileImageComponent, isStandalone: true, selector: "ta-file-image", inputs: { fileName: "fileName", size: "size" }, ngImport: i0, template: "<ta-local-icon [type]=\"this.extIcon\" [size]=\"this.size\"></ta-local-icon>\n", styles: [""], dependencies: [{ kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileImageComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-file-image", standalone: true, imports: [LocalIconComponent], template: "<ta-local-icon [type]=\"this.extIcon\" [size]=\"this.size\"></ta-local-icon>\n" }]
        }], propDecorators: { fileName: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvZmlsZS1pbWFnZS9maWxlLWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9maWxlLWltYWdlL2ZpbGUtaW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVM3QyxNQUFNLE9BQU8sa0JBQWtCO0lBUC9CO1FBWUUsU0FBSSxHQUFZLElBQUksQ0FBQztLQWdCdEI7SUFkQyxJQUFJLE9BQU87UUFDVCxNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNaLEtBQUssTUFBTTtnQkFDVCxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDeEIsS0FBSyxLQUFLO2dCQUNSLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN4QixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3hCO2dCQUNFLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQzsrR0FwQlUsa0JBQWtCO21HQUFsQixrQkFBa0IseUhDZC9CLGdGQUNBLDBERFdZLGtCQUFrQjs7NEZBRWpCLGtCQUFrQjtrQkFQOUIsU0FBUzsrQkFDRSxlQUFlLGNBR2IsSUFBSSxXQUNQLENBQUMsa0JBQWtCLENBQUM7OEJBSTdCLFFBQVE7c0JBRFAsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgTG9jYWxJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVGFJY29uVHlwZSB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tIFwiQHRhL3N0eWxlc1wiO1xuaW1wb3J0IHsgZXh0cmFjdEV4dGVuc2lvbiB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWZpbGUtaW1hZ2VcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9maWxlLWltYWdlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9maWxlLWltYWdlLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTG9jYWxJY29uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZUltYWdlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZmlsZU5hbWUhOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2l6ZTogVGFTaXplcyA9IFwic21cIjtcblxuICBnZXQgZXh0SWNvbigpOiBUYUljb25UeXBlIHtcbiAgICBjb25zdCBleHQgPSBleHRyYWN0RXh0ZW5zaW9uKHRoaXMuZmlsZU5hbWUpO1xuXG4gICAgc3dpdGNoIChleHQpIHtcbiAgICAgIGNhc2UgXCJkb2N4XCI6XG4gICAgICAgIHJldHVybiBUYUljb25UeXBlLkRvYztcbiAgICAgIGNhc2UgXCJwZGZcIjpcbiAgICAgICAgcmV0dXJuIFRhSWNvblR5cGUuUGRmO1xuICAgICAgY2FzZSBcInhsc3hcIjpcbiAgICAgICAgcmV0dXJuIFRhSWNvblR5cGUuWGxzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFRhSWNvblR5cGUuRmlsZUVtcHR5O1xuICAgIH1cbiAgfVxufVxuIiwiPHRhLWxvY2FsLWljb24gW3R5cGVdPVwidGhpcy5leHRJY29uXCIgW3NpemVdPVwidGhpcy5zaXplXCI+PC90YS1sb2NhbC1pY29uPlxuIl19
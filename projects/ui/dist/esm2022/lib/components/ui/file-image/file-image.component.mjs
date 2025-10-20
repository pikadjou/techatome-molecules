import { Component, Input } from '@angular/core';
import { LocalIconComponent } from '@ta/icons';
import { TaIconType } from '@ta/icons';
import { extractExtension } from '@ta/utils';
import * as i0 from "@angular/core";
export class FileImageComponent {
    constructor() {
        this.size = 'sm';
    }
    get extIcon() {
        const ext = extractExtension(this.fileName);
        switch (ext) {
            case 'docx':
                return TaIconType.Doc;
            case 'pdf':
                return TaIconType.Pdf;
            case 'xlsx':
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
            args: [{ selector: 'ta-file-image', standalone: true, imports: [LocalIconComponent], template: "<ta-local-icon [type]=\"this.extIcon\" [size]=\"this.size\"></ta-local-icon>\n" }]
        }], propDecorators: { fileName: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvZmlsZS1pbWFnZS9maWxlLWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9maWxlLWltYWdlL2ZpbGUtaW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVM3QyxNQUFNLE9BQU8sa0JBQWtCO0lBUC9CO1FBWUUsU0FBSSxHQUFZLElBQUksQ0FBQztLQWdCdEI7SUFkQyxJQUFJLE9BQU87UUFDVCxNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNaLEtBQUssTUFBTTtnQkFDVCxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDeEIsS0FBSyxLQUFLO2dCQUNSLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN4QixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3hCO2dCQUNFLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQzsrR0FwQlUsa0JBQWtCO21HQUFsQixrQkFBa0IseUhDZC9CLGdGQUNBLDBERFdZLGtCQUFrQjs7NEZBRWpCLGtCQUFrQjtrQkFQOUIsU0FBUzsrQkFDRSxlQUFlLGNBR2IsSUFBSSxXQUNQLENBQUMsa0JBQWtCLENBQUM7OEJBSTdCLFFBQVE7c0JBRFAsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvY2FsSWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUYUljb25UeXBlIH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcbmltcG9ydCB7IGV4dHJhY3RFeHRlbnNpb24gfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1maWxlLWltYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLWltYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtMb2NhbEljb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlSW1hZ2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBmaWxlTmFtZSE6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzaXplOiBUYVNpemVzID0gJ3NtJztcblxuICBnZXQgZXh0SWNvbigpOiBUYUljb25UeXBlIHtcbiAgICBjb25zdCBleHQgPSBleHRyYWN0RXh0ZW5zaW9uKHRoaXMuZmlsZU5hbWUpO1xuXG4gICAgc3dpdGNoIChleHQpIHtcbiAgICAgIGNhc2UgJ2RvY3gnOlxuICAgICAgICByZXR1cm4gVGFJY29uVHlwZS5Eb2M7XG4gICAgICBjYXNlICdwZGYnOlxuICAgICAgICByZXR1cm4gVGFJY29uVHlwZS5QZGY7XG4gICAgICBjYXNlICd4bHN4JzpcbiAgICAgICAgcmV0dXJuIFRhSWNvblR5cGUuWGxzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFRhSWNvblR5cGUuRmlsZUVtcHR5O1xuICAgIH1cbiAgfVxufVxuIiwiPHRhLWxvY2FsLWljb24gW3R5cGVdPVwidGhpcy5leHRJY29uXCIgW3NpemVdPVwidGhpcy5zaXplXCI+PC90YS1sb2NhbC1pY29uPlxuIl19
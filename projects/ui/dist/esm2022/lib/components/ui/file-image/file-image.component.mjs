import { Component, Input } from '@angular/core';
import { LocalIconComponent } from '@ta/icons';
import { CamIconType } from '@ta/icons';
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
                return CamIconType.Doc;
            case 'pdf':
                return CamIconType.Pdf;
            case 'xlsx':
                return CamIconType.Xls;
            default:
                return CamIconType.FileEmpty;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FileImageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FileImageComponent, isStandalone: true, selector: "ta-file-image", inputs: { fileName: "fileName", size: "size" }, ngImport: i0, template: "<ta-local-icon [type]=\"this.extIcon\" [size]=\"this.size\"></ta-local-icon>\n", styles: [""], dependencies: [{ kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FileImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-file-image', standalone: true, imports: [LocalIconComponent], template: "<ta-local-icon [type]=\"this.extIcon\" [size]=\"this.size\"></ta-local-icon>\n" }]
        }], propDecorators: { fileName: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvZmlsZS1pbWFnZS9maWxlLWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9maWxlLWltYWdlL2ZpbGUtaW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVM3QyxNQUFNLE9BQU8sa0JBQWtCO0lBUC9CO1FBWUUsU0FBSSxHQUFZLElBQUksQ0FBQztLQWdCdEI7SUFkQyxJQUFJLE9BQU87UUFDVCxNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNaLEtBQUssTUFBTTtnQkFDVCxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDekIsS0FBSyxLQUFLO2dCQUNSLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUN6QixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBQ3pCO2dCQUNFLE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQzsrR0FwQlUsa0JBQWtCO21HQUFsQixrQkFBa0IseUhDZC9CLGdGQUNBLDBERFdZLGtCQUFrQjs7NEZBRWpCLGtCQUFrQjtrQkFQOUIsU0FBUzsrQkFDRSxlQUFlLGNBR2IsSUFBSSxXQUNQLENBQUMsa0JBQWtCLENBQUM7OEJBSTdCLFFBQVE7c0JBRFAsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvY2FsSWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBDYW1JY29uVHlwZSB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSAnQHRhL3N0eWxlcyc7XG5pbXBvcnQgeyBleHRyYWN0RXh0ZW5zaW9uIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtZmlsZS1pbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWltYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1pbWFnZS5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTG9jYWxJY29uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZUltYWdlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZmlsZU5hbWUhOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2l6ZTogVGFTaXplcyA9ICdzbSc7XG5cbiAgZ2V0IGV4dEljb24oKTogQ2FtSWNvblR5cGUge1xuICAgIGNvbnN0IGV4dCA9IGV4dHJhY3RFeHRlbnNpb24odGhpcy5maWxlTmFtZSk7XG5cbiAgICBzd2l0Y2ggKGV4dCkge1xuICAgICAgY2FzZSAnZG9jeCc6XG4gICAgICAgIHJldHVybiBDYW1JY29uVHlwZS5Eb2M7XG4gICAgICBjYXNlICdwZGYnOlxuICAgICAgICByZXR1cm4gQ2FtSWNvblR5cGUuUGRmO1xuICAgICAgY2FzZSAneGxzeCc6XG4gICAgICAgIHJldHVybiBDYW1JY29uVHlwZS5YbHM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gQ2FtSWNvblR5cGUuRmlsZUVtcHR5O1xuICAgIH1cbiAgfVxufVxuIiwiPHRhLWxvY2FsLWljb24gW3R5cGVdPVwidGhpcy5leHRJY29uXCIgW3NpemVdPVwidGhpcy5zaXplXCI+PC90YS1sb2NhbC1pY29uPlxuIl19
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileListComponent } from '@ta/files-basic';
import { ToggleNavigationComponent } from '@ta/menu';
import { ErrorComponent, LoaderComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { UploadComponent } from '../upload/files-upload.component';
import * as i0 from "@angular/core";
export class FilesDisplayComponent extends TaBaseComponent {
    constructor() {
        super(...arguments);
        this.canAddFile = true;
        this.fileSelected = new EventEmitter();
        this.moreInformationSelected = new EventEmitter();
        this.fileUploading = new EventEmitter();
    }
    get canSelectMultipleFiles() {
        switch (this.fileType) {
            case 'Document':
                return false;
            case 'Image':
                return true;
            default:
                return false;
        }
    }
    get canDisplayTempsFiles() {
        return this.tempFiles?.length > 0;
    }
    getFeature() {
        switch (this.fileType) {
            case 'Document':
                return ['upload-file'];
            case 'Image':
                return ['upload-pic'];
            default:
                return [];
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilesDisplayComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FilesDisplayComponent, isStandalone: true, selector: "ta-files-display", inputs: { files$: "files$", menu: "menu", canAddFile: "canAddFile", tempFiles: "tempFiles", fileType: "fileType" }, outputs: { fileSelected: "fileSelected", moreInformationSelected: "moreInformationSelected", fileUploading: "fileUploading" }, usesInheritance: true, ngImport: i0, template: "<div class=\"toggle-navigation\">\n  <ta-toggle-navigation [menu]=\"this.menu\" [container]=\"'tab'\"></ta-toggle-navigation>\n</div>\n\n@if (this.canDisplayTempsFiles) {\n  <div>\n    <ta-files-list [files]=\"this.tempFiles\"></ta-files-list>\n    <hr />\n  </div>\n}\n\n<ta-loader [isLoading]=\"this.requestState.isLoading()\" skeleton=\"fileList\">\n  <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n    <div class=\"list\">\n      <ta-files-list\n        [files]=\"(this.files$ | async) || []\"\n        (fileSelected)=\"this.fileSelected.emit($event)\"\n        (moreInformationSelected)=\"this.moreInformationSelected.emit($event)\"\n      >\n      </ta-files-list>\n    </div>\n  </ta-error>\n</ta-loader>\n\n@if (this.canAddFile === true) {\n  <div class=\"floating-add\">\n    <ta-files-upload\n      [features]=\"this.getFeature()\"\n      [canSelectMultipleFiles]=\"this.canSelectMultipleFiles\"\n      (filesPicked)=\"this.fileUploading.emit($event)\"\n    >\n    </ta-files-upload>\n  </div>\n}\n", styles: [".toggle-navigation{margin-bottom:var(--ta-space-sm)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: UploadComponent, selector: "ta-files-upload", inputs: ["features", "canSelectMultipleFiles", "showInActionButton"], outputs: ["filesPicked"] }, { kind: "component", type: ToggleNavigationComponent, selector: "ta-toggle-navigation", inputs: ["menu", "container"] }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilesDisplayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-files-display', standalone: true, imports: [
                        NgIf,
                        AsyncPipe,
                        LoaderComponent,
                        ErrorComponent,
                        UploadComponent,
                        ToggleNavigationComponent,
                        FileListComponent,
                    ], template: "<div class=\"toggle-navigation\">\n  <ta-toggle-navigation [menu]=\"this.menu\" [container]=\"'tab'\"></ta-toggle-navigation>\n</div>\n\n@if (this.canDisplayTempsFiles) {\n  <div>\n    <ta-files-list [files]=\"this.tempFiles\"></ta-files-list>\n    <hr />\n  </div>\n}\n\n<ta-loader [isLoading]=\"this.requestState.isLoading()\" skeleton=\"fileList\">\n  <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n    <div class=\"list\">\n      <ta-files-list\n        [files]=\"(this.files$ | async) || []\"\n        (fileSelected)=\"this.fileSelected.emit($event)\"\n        (moreInformationSelected)=\"this.moreInformationSelected.emit($event)\"\n      >\n      </ta-files-list>\n    </div>\n  </ta-error>\n</ta-loader>\n\n@if (this.canAddFile === true) {\n  <div class=\"floating-add\">\n    <ta-files-upload\n      [features]=\"this.getFeature()\"\n      [canSelectMultipleFiles]=\"this.canSelectMultipleFiles\"\n      (filesPicked)=\"this.fileUploading.emit($event)\"\n    >\n    </ta-files-upload>\n  </div>\n}\n", styles: [".toggle-navigation{margin-bottom:var(--ta-space-sm)}\n"] }]
        }], propDecorators: { files$: [{
                type: Input
            }], menu: [{
                type: Input
            }], canAddFile: [{
                type: Input
            }], tempFiles: [{
                type: Input
            }], fileType: [{
                type: Input
            }], fileSelected: [{
                type: Output
            }], moreInformationSelected: [{
                type: Output
            }], fileUploading: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZGlzcGxheS9maWxlcy1kaXNwbGF5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kaXNwbGF5L2ZpbGVzLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBUSx5QkFBeUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6RCxPQUFPLEVBQXFDLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUvRSxPQUFPLEVBQVcsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBaUI1RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTtJQWYxRDs7UUFrQlcsZUFBVSxHQUFZLElBQUksQ0FBQztRQUkxQixpQkFBWSxHQUErQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlFLDRCQUF1QixHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JFLGtCQUFhLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7S0EyQjdFO0lBekJDLElBQUksc0JBQXNCO1FBQ3hCLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLEtBQUssVUFBVTtnQkFDYixPQUFPLEtBQUssQ0FBQztZQUNmLEtBQUssT0FBTztnQkFDVixPQUFPLElBQUksQ0FBQztZQUNkO2dCQUNFLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxvQkFBb0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLFVBQVU7UUFDZixRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssT0FBTztnQkFDVixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEI7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQzsrR0FuQ1UscUJBQXFCO21HQUFyQixxQkFBcUIsc1ZDM0JsQywraUNBa0NBLDJHRGZJLFNBQVMsOENBQ1QsZUFBZSx5R0FDZixjQUFjLGtGQUNkLGVBQWUsNEpBQ2YseUJBQXlCLGdHQUN6QixpQkFBaUI7OzRGQUdSLHFCQUFxQjtrQkFmakMsU0FBUzsrQkFDRSxrQkFBa0IsY0FHaEIsSUFBSSxXQUNQO3dCQUNQLElBQUk7d0JBQ0osU0FBUzt3QkFDVCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZix5QkFBeUI7d0JBQ3pCLGlCQUFpQjtxQkFDbEI7OEJBR1EsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFFSSxZQUFZO3NCQUFyQixNQUFNO2dCQUNHLHVCQUF1QjtzQkFBaEMsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNQaXBlLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmlsZUxpc3RDb21wb25lbnQgfSBmcm9tICdAdGEvZmlsZXMtYmFzaWMnO1xuaW1wb3J0IHsgTWVudSwgVG9nZ2xlTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9tZW51JztcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgRmlsZURhdGEsIEZpbGVTdHJ1Y3R1cmUsIEZpbGVUeXBlLCBUYUJhc2VDb21wb25lbnQgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBGZWF0dXJlLCBVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuLi91cGxvYWQvZmlsZXMtdXBsb2FkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWZpbGVzLWRpc3BsYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZXMtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGVzLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgQXN5bmNQaXBlLFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBFcnJvckNvbXBvbmVudCxcbiAgICBVcGxvYWRDb21wb25lbnQsXG4gICAgVG9nZ2xlTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBGaWxlTGlzdENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZXNEaXNwbGF5Q29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZmlsZXMkITogT2JzZXJ2YWJsZTxGaWxlRGF0YVtdPjtcbiAgQElucHV0KCkgbWVudSE6IE1lbnU7XG4gIEBJbnB1dCgpIGNhbkFkZEZpbGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB0ZW1wRmlsZXMhOiBGaWxlRGF0YVtdO1xuICBASW5wdXQoKSBmaWxlVHlwZSE6IEZpbGVUeXBlO1xuXG4gIEBPdXRwdXQoKSBmaWxlU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxGaWxlRGF0YSAmIHsgaW5kZXg6IG51bWJlciB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG1vcmVJbmZvcm1hdGlvblNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RmlsZURhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZmlsZVVwbG9hZGluZzogRXZlbnRFbWl0dGVyPEZpbGVTdHJ1Y3R1cmVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IGNhblNlbGVjdE11bHRpcGxlRmlsZXMoKTogYm9vbGVhbiB7XG4gICAgc3dpdGNoICh0aGlzLmZpbGVUeXBlKSB7XG4gICAgICBjYXNlICdEb2N1bWVudCc6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGNhc2UgJ0ltYWdlJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNhbkRpc3BsYXlUZW1wc0ZpbGVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRlbXBGaWxlcz8ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGZWF0dXJlKCk6IEZlYXR1cmVbXSB7XG4gICAgc3dpdGNoICh0aGlzLmZpbGVUeXBlKSB7XG4gICAgICBjYXNlICdEb2N1bWVudCc6XG4gICAgICAgIHJldHVybiBbJ3VwbG9hZC1maWxlJ107XG4gICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgIHJldHVybiBbJ3VwbG9hZC1waWMnXTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0b2dnbGUtbmF2aWdhdGlvblwiPlxuICA8dGEtdG9nZ2xlLW5hdmlnYXRpb24gW21lbnVdPVwidGhpcy5tZW51XCIgW2NvbnRhaW5lcl09XCIndGFiJ1wiPjwvdGEtdG9nZ2xlLW5hdmlnYXRpb24+XG48L2Rpdj5cblxuQGlmICh0aGlzLmNhbkRpc3BsYXlUZW1wc0ZpbGVzKSB7XG4gIDxkaXY+XG4gICAgPHRhLWZpbGVzLWxpc3QgW2ZpbGVzXT1cInRoaXMudGVtcEZpbGVzXCI+PC90YS1maWxlcy1saXN0PlxuICAgIDxociAvPlxuICA8L2Rpdj5cbn1cblxuPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMucmVxdWVzdFN0YXRlLmlzTG9hZGluZygpXCIgc2tlbGV0b249XCJmaWxlTGlzdFwiPlxuICA8dGEtZXJyb3IgW21lc3NhZ2VdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JNZXNzYWdlKClcIiBbY29kZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvclN0YXR1cygpXCI+XG4gICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgIDx0YS1maWxlcy1saXN0XG4gICAgICAgIFtmaWxlc109XCIodGhpcy5maWxlcyQgfCBhc3luYykgfHwgW11cIlxuICAgICAgICAoZmlsZVNlbGVjdGVkKT1cInRoaXMuZmlsZVNlbGVjdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChtb3JlSW5mb3JtYXRpb25TZWxlY3RlZCk9XCJ0aGlzLm1vcmVJbmZvcm1hdGlvblNlbGVjdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L3RhLWZpbGVzLWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvdGEtZXJyb3I+XG48L3RhLWxvYWRlcj5cblxuQGlmICh0aGlzLmNhbkFkZEZpbGUgPT09IHRydWUpIHtcbiAgPGRpdiBjbGFzcz1cImZsb2F0aW5nLWFkZFwiPlxuICAgIDx0YS1maWxlcy11cGxvYWRcbiAgICAgIFtmZWF0dXJlc109XCJ0aGlzLmdldEZlYXR1cmUoKVwiXG4gICAgICBbY2FuU2VsZWN0TXVsdGlwbGVGaWxlc109XCJ0aGlzLmNhblNlbGVjdE11bHRpcGxlRmlsZXNcIlxuICAgICAgKGZpbGVzUGlja2VkKT1cInRoaXMuZmlsZVVwbG9hZGluZy5lbWl0KCRldmVudClcIlxuICAgID5cbiAgICA8L3RhLWZpbGVzLXVwbG9hZD5cbiAgPC9kaXY+XG59XG4iXX0=
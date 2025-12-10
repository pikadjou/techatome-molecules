import { AsyncPipe, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FileListComponent } from "@ta/files-basic";
import { ToggleNavigationComponent } from "@ta/menu";
import { ErrorComponent, LoaderComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { UploadComponent } from "../upload/files-upload.component";
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
            case "Document":
                return false;
            case "Image":
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
            case "Document":
                return ["upload-file"];
            case "Image":
                return ["upload-pic"];
            default:
                return [];
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilesDisplayComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FilesDisplayComponent, isStandalone: true, selector: "ta-files-display", inputs: { files$: "files$", menu: "menu", canAddFile: "canAddFile", tempFiles: "tempFiles", fileType: "fileType" }, outputs: { fileSelected: "fileSelected", moreInformationSelected: "moreInformationSelected", fileUploading: "fileUploading" }, usesInheritance: true, ngImport: i0, template: "<div class=\"toggle-navigation\">\n  <ta-toggle-navigation\n    [menu]=\"this.menu\"\n    [container]=\"'tab'\"\n  ></ta-toggle-navigation>\n</div>\n\n@if (this.canDisplayTempsFiles) {\n<div>\n  <ta-files-list [files]=\"this.tempFiles\"></ta-files-list>\n  <hr />\n</div>\n}\n\n<ta-loader [isLoading]=\"this.requestState.isLoading()\" skeleton=\"fileList\">\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <div class=\"list\">\n      <ta-files-list\n        [files]=\"(this.files$ | async) || []\"\n        (fileSelected)=\"this.fileSelected.emit($event)\"\n        (moreInformationSelected)=\"this.moreInformationSelected.emit($event)\"\n      >\n      </ta-files-list>\n    </div>\n  </ta-error>\n</ta-loader>\n\n@if (this.canAddFile === true) {\n<div class=\"floating-add\">\n  <ta-files-upload\n    [features]=\"this.getFeature()\"\n    [canSelectMultipleFiles]=\"this.canSelectMultipleFiles\"\n    (filesPicked)=\"this.fileUploading.emit($event)\"\n  >\n  </ta-files-upload>\n</div>\n}\n", styles: [".toggle-navigation{margin-bottom:var(--ta-space-sm)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: UploadComponent, selector: "ta-files-upload", inputs: ["features", "canSelectMultipleFiles", "showInActionButton"], outputs: ["filesPicked"] }, { kind: "component", type: ToggleNavigationComponent, selector: "ta-toggle-navigation", inputs: ["menu", "container"] }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilesDisplayComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-files-display", standalone: true, imports: [
                        NgIf,
                        AsyncPipe,
                        LoaderComponent,
                        ErrorComponent,
                        UploadComponent,
                        ToggleNavigationComponent,
                        FileListComponent,
                    ], template: "<div class=\"toggle-navigation\">\n  <ta-toggle-navigation\n    [menu]=\"this.menu\"\n    [container]=\"'tab'\"\n  ></ta-toggle-navigation>\n</div>\n\n@if (this.canDisplayTempsFiles) {\n<div>\n  <ta-files-list [files]=\"this.tempFiles\"></ta-files-list>\n  <hr />\n</div>\n}\n\n<ta-loader [isLoading]=\"this.requestState.isLoading()\" skeleton=\"fileList\">\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <div class=\"list\">\n      <ta-files-list\n        [files]=\"(this.files$ | async) || []\"\n        (fileSelected)=\"this.fileSelected.emit($event)\"\n        (moreInformationSelected)=\"this.moreInformationSelected.emit($event)\"\n      >\n      </ta-files-list>\n    </div>\n  </ta-error>\n</ta-loader>\n\n@if (this.canAddFile === true) {\n<div class=\"floating-add\">\n  <ta-files-upload\n    [features]=\"this.getFeature()\"\n    [canSelectMultipleFiles]=\"this.canSelectMultipleFiles\"\n    (filesPicked)=\"this.fileUploading.emit($event)\"\n  >\n  </ta-files-upload>\n</div>\n}\n", styles: [".toggle-navigation{margin-bottom:var(--ta-space-sm)}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZGlzcGxheS9maWxlcy1kaXNwbGF5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kaXNwbGF5L2ZpbGVzLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBUSx5QkFBeUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6RCxPQUFPLEVBQXFDLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUvRSxPQUFPLEVBQVcsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBaUI1RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTtJQWYxRDs7UUFrQlcsZUFBVSxHQUFZLElBQUksQ0FBQztRQUkxQixpQkFBWSxHQUNwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ1gsNEJBQXVCLEdBQy9CLElBQUksWUFBWSxFQUFFLENBQUM7UUFDWCxrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBMkI3RTtJQXpCQyxJQUFJLHNCQUFzQjtRQUN4QixRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxLQUFLLENBQUM7WUFDZixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxJQUFJLENBQUM7WUFDZDtnQkFDRSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxVQUFVO1FBQ2YsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsS0FBSyxVQUFVO2dCQUNiLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN6QixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hCO2dCQUNFLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7K0dBckNVLHFCQUFxQjttR0FBckIscUJBQXFCLHNWQzNCbEMsbWpDQXdDQSwyR0RyQkksU0FBUyw4Q0FDVCxlQUFlLHlHQUNmLGNBQWMsa0ZBQ2QsZUFBZSw0SkFDZix5QkFBeUIsZ0dBQ3pCLGlCQUFpQjs7NEZBR1IscUJBQXFCO2tCQWZqQyxTQUFTOytCQUNFLGtCQUFrQixjQUdoQixJQUFJLFdBQ1A7d0JBQ1AsSUFBSTt3QkFDSixTQUFTO3dCQUNULGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsaUJBQWlCO3FCQUNsQjs4QkFHUSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLFlBQVk7c0JBQXJCLE1BQU07Z0JBRUcsdUJBQXVCO3NCQUFoQyxNQUFNO2dCQUVHLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUsIE5nSWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBGaWxlTGlzdENvbXBvbmVudCB9IGZyb20gXCJAdGEvZmlsZXMtYmFzaWNcIjtcbmltcG9ydCB7IE1lbnUsIFRvZ2dsZU5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL21lbnVcIjtcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBGaWxlRGF0YSwgRmlsZVN0cnVjdHVyZSwgRmlsZVR5cGUsIFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgRmVhdHVyZSwgVXBsb2FkQ29tcG9uZW50IH0gZnJvbSBcIi4uL3VwbG9hZC9maWxlcy11cGxvYWQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1maWxlcy1kaXNwbGF5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZmlsZXMtZGlzcGxheS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZmlsZXMtZGlzcGxheS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgQXN5bmNQaXBlLFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBFcnJvckNvbXBvbmVudCxcbiAgICBVcGxvYWRDb21wb25lbnQsXG4gICAgVG9nZ2xlTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBGaWxlTGlzdENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZXNEaXNwbGF5Q29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZmlsZXMkITogT2JzZXJ2YWJsZTxGaWxlRGF0YVtdPjtcbiAgQElucHV0KCkgbWVudSE6IE1lbnU7XG4gIEBJbnB1dCgpIGNhbkFkZEZpbGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB0ZW1wRmlsZXMhOiBGaWxlRGF0YVtdO1xuICBASW5wdXQoKSBmaWxlVHlwZSE6IEZpbGVUeXBlO1xuXG4gIEBPdXRwdXQoKSBmaWxlU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxGaWxlRGF0YSAmIHsgaW5kZXg6IG51bWJlciB9PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbW9yZUluZm9ybWF0aW9uU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxGaWxlRGF0YT4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpbGVVcGxvYWRpbmc6IEV2ZW50RW1pdHRlcjxGaWxlU3RydWN0dXJlW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBjYW5TZWxlY3RNdWx0aXBsZUZpbGVzKCk6IGJvb2xlYW4ge1xuICAgIHN3aXRjaCAodGhpcy5maWxlVHlwZSkge1xuICAgICAgY2FzZSBcIkRvY3VtZW50XCI6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGNhc2UgXCJJbWFnZVwiOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2FuRGlzcGxheVRlbXBzRmlsZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGVtcEZpbGVzPy5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHVibGljIGdldEZlYXR1cmUoKTogRmVhdHVyZVtdIHtcbiAgICBzd2l0Y2ggKHRoaXMuZmlsZVR5cGUpIHtcbiAgICAgIGNhc2UgXCJEb2N1bWVudFwiOlxuICAgICAgICByZXR1cm4gW1widXBsb2FkLWZpbGVcIl07XG4gICAgICBjYXNlIFwiSW1hZ2VcIjpcbiAgICAgICAgcmV0dXJuIFtcInVwbG9hZC1waWNcIl07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidG9nZ2xlLW5hdmlnYXRpb25cIj5cbiAgPHRhLXRvZ2dsZS1uYXZpZ2F0aW9uXG4gICAgW21lbnVdPVwidGhpcy5tZW51XCJcbiAgICBbY29udGFpbmVyXT1cIid0YWInXCJcbiAgPjwvdGEtdG9nZ2xlLW5hdmlnYXRpb24+XG48L2Rpdj5cblxuQGlmICh0aGlzLmNhbkRpc3BsYXlUZW1wc0ZpbGVzKSB7XG48ZGl2PlxuICA8dGEtZmlsZXMtbGlzdCBbZmlsZXNdPVwidGhpcy50ZW1wRmlsZXNcIj48L3RhLWZpbGVzLWxpc3Q+XG4gIDxociAvPlxuPC9kaXY+XG59XG5cbjx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLnJlcXVlc3RTdGF0ZS5pc0xvYWRpbmcoKVwiIHNrZWxldG9uPVwiZmlsZUxpc3RcIj5cbiAgPHRhLWVycm9yXG4gICAgW21lc3NhZ2VdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JNZXNzYWdlKClcIlxuICAgIFtjb2RlXT1cInRoaXMucmVxdWVzdFN0YXRlLmdldEVycm9yU3RhdHVzKClcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgIDx0YS1maWxlcy1saXN0XG4gICAgICAgIFtmaWxlc109XCIodGhpcy5maWxlcyQgfCBhc3luYykgfHwgW11cIlxuICAgICAgICAoZmlsZVNlbGVjdGVkKT1cInRoaXMuZmlsZVNlbGVjdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChtb3JlSW5mb3JtYXRpb25TZWxlY3RlZCk9XCJ0aGlzLm1vcmVJbmZvcm1hdGlvblNlbGVjdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L3RhLWZpbGVzLWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvdGEtZXJyb3I+XG48L3RhLWxvYWRlcj5cblxuQGlmICh0aGlzLmNhbkFkZEZpbGUgPT09IHRydWUpIHtcbjxkaXYgY2xhc3M9XCJmbG9hdGluZy1hZGRcIj5cbiAgPHRhLWZpbGVzLXVwbG9hZFxuICAgIFtmZWF0dXJlc109XCJ0aGlzLmdldEZlYXR1cmUoKVwiXG4gICAgW2NhblNlbGVjdE11bHRpcGxlRmlsZXNdPVwidGhpcy5jYW5TZWxlY3RNdWx0aXBsZUZpbGVzXCJcbiAgICAoZmlsZXNQaWNrZWQpPVwidGhpcy5maWxlVXBsb2FkaW5nLmVtaXQoJGV2ZW50KVwiXG4gID5cbiAgPC90YS1maWxlcy11cGxvYWQ+XG48L2Rpdj5cbn1cbiJdfQ==
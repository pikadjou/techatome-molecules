import { Component, EventEmitter, Input, Output } from "@angular/core";
import { map } from "rxjs/operators";
import { combineLatest, of } from "rxjs";
import { FilesDisplayComponent, } from "@ta/files-extended";
import { BottomSheetTemplateBasicComponent, FilterHelper, } from "@ta/menu";
import { openModal } from "@ta/ui";
import { TaBaseComponent, downloadFile, getFileExtension, } from "@ta/utils";
import { UploadDocumentModal, } from "./upload/upload-visit-document/upload-document.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
import * as i2 from "@angular/material/dialog";
export class DocumentsComponent extends TaBaseComponent {
    constructor(_bottomSheet, _dialog) {
        super();
        this._bottomSheet = _bottomSheet;
        this._dialog = _dialog;
        this.filesSaved = new EventEmitter();
        this.filesDeleted = new EventEmitter();
        this.filterHelper = new FilterHelper([
            { label: "documents.mine", defaultOpen: false },
            { label: "documents.all", defaultOpen: true },
        ]);
        this.menu = this.filterHelper.getMenu();
    }
    ngOnInit() {
        this._registerSubscription(combineLatest({
            all: this._filteredDocuments$("all"),
            mine: this._filteredDocuments$("mine"),
        }).subscribe((data) => {
            this._updateMenu({ all: data.all.length, mine: data.mine.length });
        }));
    }
    uploadDocuments(files) {
        this._openUploadWorkflow(files[0].file);
    }
    downloadDocument(fileData) {
        downloadFile(fileData.url);
        this._bottomSheet.dismiss(true);
    }
    openBottomSheet(fileData) {
        const bottomSheetData = [
            {
                label: "documents.download",
                icon: "download",
                action: () => this.downloadDocument(fileData),
            },
            {
                label: "documents.delete",
                icon: "delete",
                action: () => this._proposeDeleteDocument(fileData),
            },
        ];
        this._bottomSheet.open(BottomSheetTemplateBasicComponent, {
            data: {
                orientation: "horizontal",
                menu$: of(bottomSheetData),
            },
        });
    }
    getDocs$() {
        return this._filteredDocuments$(this.filterHelper.filter).pipe(map((documents) => documents.map((document) => {
            return {
                id: document.id,
                url: document.url,
                type: "Document",
                fileMetaData: document.fileMetadata,
                fileExtension: getFileExtension(document.url),
            };
        })));
    }
    _filteredDocuments$(filter) {
        return this.document$.pipe(map((documents) => documents.filter((document) => {
            if (filter === "all")
                return true;
            if (filter === "mine" && document.isOwner)
                return true;
            return false;
        })));
    }
    _saveDocument(file, fileMetadata) {
        this.requestState.asked();
        this.filesSaved.emit({ file, fileMetadata });
    }
    _openUploadWorkflow(file) {
        this._registerSubscription(this._dialog
            .open(UploadDocumentModal, {
            panelClass: "full-screen-modal",
            data: {
                file,
            },
        })
            .afterClosed()
            .subscribe((result) => {
            if (!result) {
                return;
            }
            this._saveDocument(file, {
                description: result.description,
                fileType: {
                    id: result.documentTypeId,
                    translatedValue: "",
                },
            });
        }));
    }
    _proposeDeleteDocument(fileData) {
        this._registerSubscription(openModal(this._dialog).subscribe((result) => {
            if (result) {
                this._deleteDocument(fileData);
            }
        }));
        this._bottomSheet.dismiss(true);
    }
    _deleteDocument(fileData) {
        this.filesDeleted.emit(fileData);
    }
    _updateMenu(data) {
        this.filterHelper.updateMenuDatas([
            {
                key: "documents.mine",
                options: {
                    notificationBadge: {
                        label: data.mine,
                    },
                },
            },
            {
                key: "documents.all",
                options: {
                    notificationBadge: {
                        label: data.all,
                    },
                },
            },
        ]);
        this.menu = this.filterHelper.getMenu();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DocumentsComponent, deps: [{ token: i1.MatBottomSheet }, { token: i2.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: DocumentsComponent, isStandalone: true, selector: "ta-documents", inputs: { document$: "document$", canAddFile: "canAddFile" }, outputs: { filesSaved: "filesSaved", filesDeleted: "filesDeleted" }, usesInheritance: true, ngImport: i0, template: "<ta-files-display\n  [files$]=\"this.getDocs$()\"\n  [menu]=\"this.menu\"\n  [canAddFile]=\"this.canAddFile\"\n  fileType=\"Document\"\n  (fileSelected)=\"this.downloadDocument($event)\"\n  (moreInformationSelected)=\"this.openBottomSheet($event)\"\n  (fileUploading)=\"this.uploadDocuments($event)\"\n>\n</ta-files-display>\n", styles: [":host ::ng-deep app-card .card{border-radius:10px}\n"], dependencies: [{ kind: "component", type: FilesDisplayComponent, selector: "ta-files-display", inputs: ["files$", "menu", "canAddFile", "tempFiles", "fileType"], outputs: ["fileSelected", "moreInformationSelected", "fileUploading"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DocumentsComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-documents", standalone: true, imports: [FilesDisplayComponent], template: "<ta-files-display\n  [files$]=\"this.getDocs$()\"\n  [menu]=\"this.menu\"\n  [canAddFile]=\"this.canAddFile\"\n  fileType=\"Document\"\n  (fileSelected)=\"this.downloadDocument($event)\"\n  (moreInformationSelected)=\"this.openBottomSheet($event)\"\n  (fileUploading)=\"this.uploadDocuments($event)\"\n>\n</ta-files-display>\n", styles: [":host ::ng-deep app-card .card{border-radius:10px}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }, { type: i2.MatDialog }], propDecorators: { document$: [{
                type: Input
            }], canAddFile: [{
                type: Input
            }], filesSaved: [{
                type: Output
            }], filesDeleted: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBYyxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJELE9BQU8sRUFHTCxxQkFBcUIsR0FDdEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBRUwsaUNBQWlDLEVBRWpDLFlBQVksR0FFYixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ25DLE9BQU8sRUFFTCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGdCQUFnQixHQUNqQixNQUFNLFdBQVcsQ0FBQztBQUVuQixPQUFPLEVBQ0wsbUJBQW1CLEdBRXBCLE1BQU0sMERBQTBELENBQUM7Ozs7QUFTbEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQWU7SUFvQnJELFlBQ1UsWUFBNEIsRUFDNUIsT0FBa0I7UUFFMUIsS0FBSyxFQUFFLENBQUM7UUFIQSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQWQ1QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdoQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJM0IsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQztZQUNy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Q0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyxlQUFlLENBQUMsUUFBa0I7UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLFdBQVcsQ0FBQyxJQUFtQztRQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQztZQUNoQztnQkFDRSxHQUFHLEVBQUUsZ0JBQWdCO2dCQUNyQixPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCLEVBQUU7d0JBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDakI7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxlQUFlO2dCQUNwQixPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCLEVBQUU7d0JBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRztxQkFDaEI7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQyxDQUFDOytHQXZLVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixrT0N4Qy9CLHdVQVVBLDhHRDRCWSxxQkFBcUI7OzRGQUVwQixrQkFBa0I7a0JBUDlCLFNBQVM7K0JBQ0UsY0FBYyxjQUdaLElBQUksV0FDUCxDQUFDLHFCQUFxQixDQUFDOzJHQUloQyxTQUFTO3NCQURSLEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLFVBQVU7c0JBRFQsTUFBTTtnQkFJUCxZQUFZO3NCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldFwiO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCwgb2YgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQge1xuICBEb2N1bWVudCxcbiAgRmlsZU1ldGFkYXRhLFxuICBGaWxlc0Rpc3BsYXlDb21wb25lbnQsXG59IGZyb20gXCJAdGEvZmlsZXMtZXh0ZW5kZWRcIjtcbmltcG9ydCB7XG4gIEJvdHRvbVNoZWV0RGF0YSxcbiAgQm90dG9tU2hlZXRUZW1wbGF0ZUJhc2ljQ29tcG9uZW50LFxuICBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNQYXJhbXMsXG4gIEZpbHRlckhlbHBlcixcbiAgTWVudSxcbn0gZnJvbSBcIkB0YS9tZW51XCI7XG5pbXBvcnQgeyBvcGVuTW9kYWwgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQge1xuICBGaWxlRGF0YSxcbiAgVGFCYXNlQ29tcG9uZW50LFxuICBkb3dubG9hZEZpbGUsXG4gIGdldEZpbGVFeHRlbnNpb24sXG59IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHtcbiAgVXBsb2FkRG9jdW1lbnRNb2RhbCxcbiAgVXBsb2FkRG9jdW1lbnRSZXN1bHQsXG59IGZyb20gXCIuL3VwbG9hZC91cGxvYWQtdmlzaXQtZG9jdW1lbnQvdXBsb2FkLWRvY3VtZW50LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtZG9jdW1lbnRzXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZG9jdW1lbnRzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9kb2N1bWVudHMuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGaWxlc0Rpc3BsYXlDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBEb2N1bWVudHNDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBkb2N1bWVudCQhOiBPYnNlcnZhYmxlPERvY3VtZW50W10+O1xuXG4gIEBJbnB1dCgpXG4gIGNhbkFkZEZpbGUhOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBmaWxlc1NhdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBmaWxlc0RlbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIG1lbnU6IE1lbnU7XG5cbiAgcHVibGljIGZpbHRlckhlbHBlciA9IG5ldyBGaWx0ZXJIZWxwZXIoW1xuICAgIHsgbGFiZWw6IFwiZG9jdW1lbnRzLm1pbmVcIiwgZGVmYXVsdE9wZW46IGZhbHNlIH0sXG4gICAgeyBsYWJlbDogXCJkb2N1bWVudHMuYWxsXCIsIGRlZmF1bHRPcGVuOiB0cnVlIH0sXG4gIF0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2JvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCxcbiAgICBwcml2YXRlIF9kaWFsb2c6IE1hdERpYWxvZ1xuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWVudSA9IHRoaXMuZmlsdGVySGVscGVyLmdldE1lbnUoKTtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIGNvbWJpbmVMYXRlc3Qoe1xuICAgICAgICBhbGw6IHRoaXMuX2ZpbHRlcmVkRG9jdW1lbnRzJChcImFsbFwiKSxcbiAgICAgICAgbWluZTogdGhpcy5fZmlsdGVyZWREb2N1bWVudHMkKFwibWluZVwiKSxcbiAgICAgIH0pLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVNZW51KHsgYWxsOiBkYXRhLmFsbC5sZW5ndGgsIG1pbmU6IGRhdGEubWluZS5sZW5ndGggfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdXBsb2FkRG9jdW1lbnRzKFxuICAgIGZpbGVzOiB7IGZpbGU6IEZpbGUgfCBudWxsOyBsb2NhbFVybDogc3RyaW5nIHwgbnVsbCB9W11cbiAgKSB7XG4gICAgdGhpcy5fb3BlblVwbG9hZFdvcmtmbG93KGZpbGVzWzBdLmZpbGUhKTtcbiAgfVxuICBwdWJsaWMgZG93bmxvYWREb2N1bWVudChmaWxlRGF0YTogRmlsZURhdGEpIHtcbiAgICBkb3dubG9hZEZpbGUoZmlsZURhdGEudXJsKTtcbiAgICB0aGlzLl9ib3R0b21TaGVldC5kaXNtaXNzKHRydWUpO1xuICB9XG5cbiAgcHVibGljIG9wZW5Cb3R0b21TaGVldChmaWxlRGF0YTogRmlsZURhdGEpOiB2b2lkIHtcbiAgICBjb25zdCBib3R0b21TaGVldERhdGE6IEJvdHRvbVNoZWV0RGF0YVtdID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJkb2N1bWVudHMuZG93bmxvYWRcIixcbiAgICAgICAgaWNvbjogXCJkb3dubG9hZFwiLFxuICAgICAgICBhY3Rpb246ICgpID0+IHRoaXMuZG93bmxvYWREb2N1bWVudChmaWxlRGF0YSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJkb2N1bWVudHMuZGVsZXRlXCIsXG4gICAgICAgIGljb246IFwiZGVsZXRlXCIsXG4gICAgICAgIGFjdGlvbjogKCkgPT4gdGhpcy5fcHJvcG9zZURlbGV0ZURvY3VtZW50KGZpbGVEYXRhKSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW48XG4gICAgICBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNDb21wb25lbnQsXG4gICAgICBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNQYXJhbXNcbiAgICA+KEJvdHRvbVNoZWV0VGVtcGxhdGVCYXNpY0NvbXBvbmVudCwge1xuICAgICAgZGF0YToge1xuICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgIG1lbnUkOiBvZihib3R0b21TaGVldERhdGEpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREb2NzJCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWREb2N1bWVudHMkKHRoaXMuZmlsdGVySGVscGVyLmZpbHRlcikucGlwZShcbiAgICAgIG1hcCgoZG9jdW1lbnRzKSA9PlxuICAgICAgICBkb2N1bWVudHMubWFwPEZpbGVEYXRhPigoZG9jdW1lbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGRvY3VtZW50LmlkLFxuICAgICAgICAgICAgdXJsOiBkb2N1bWVudC51cmwsXG4gICAgICAgICAgICB0eXBlOiBcIkRvY3VtZW50XCIsXG4gICAgICAgICAgICBmaWxlTWV0YURhdGE6IGRvY3VtZW50LmZpbGVNZXRhZGF0YSxcbiAgICAgICAgICAgIGZpbGVFeHRlbnNpb246IGdldEZpbGVFeHRlbnNpb24oZG9jdW1lbnQudXJsKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJlZERvY3VtZW50cyQoZmlsdGVyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudCQucGlwZShcbiAgICAgIG1hcCgoZG9jdW1lbnRzKSA9PlxuICAgICAgICBkb2N1bWVudHMuZmlsdGVyKChkb2N1bWVudCkgPT4ge1xuICAgICAgICAgIGlmIChmaWx0ZXIgPT09IFwiYWxsXCIpIHJldHVybiB0cnVlO1xuICAgICAgICAgIGlmIChmaWx0ZXIgPT09IFwibWluZVwiICYmIGRvY3VtZW50LmlzT3duZXIpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2F2ZURvY3VtZW50KGZpbGU6IEZpbGUsIGZpbGVNZXRhZGF0YTogUGFydGlhbDxGaWxlTWV0YWRhdGE+KSB7XG4gICAgdGhpcy5yZXF1ZXN0U3RhdGUuYXNrZWQoKTtcbiAgICB0aGlzLmZpbGVzU2F2ZWQuZW1pdCh7IGZpbGUsIGZpbGVNZXRhZGF0YSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5VcGxvYWRXb3JrZmxvdyhmaWxlOiBGaWxlKSB7XG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICB0aGlzLl9kaWFsb2dcbiAgICAgICAgLm9wZW4oVXBsb2FkRG9jdW1lbnRNb2RhbCwge1xuICAgICAgICAgIHBhbmVsQ2xhc3M6IFwiZnVsbC1zY3JlZW4tbW9kYWxcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmaWxlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5hZnRlckNsb3NlZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdDogVXBsb2FkRG9jdW1lbnRSZXN1bHQgfCBudWxsKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fc2F2ZURvY3VtZW50KGZpbGUsIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXN1bHQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBmaWxlVHlwZToge1xuICAgICAgICAgICAgICBpZDogcmVzdWx0LmRvY3VtZW50VHlwZUlkLFxuICAgICAgICAgICAgICB0cmFuc2xhdGVkVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9wcm9wb3NlRGVsZXRlRG9jdW1lbnQoZmlsZURhdGE6IEZpbGVEYXRhKSB7XG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICBvcGVuTW9kYWwodGhpcy5fZGlhbG9nKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLl9kZWxldGVEb2N1bWVudChmaWxlRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2JvdHRvbVNoZWV0LmRpc21pc3ModHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9kZWxldGVEb2N1bWVudChmaWxlRGF0YTogRmlsZURhdGEpIHtcbiAgICB0aGlzLmZpbGVzRGVsZXRlZC5lbWl0KGZpbGVEYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU1lbnUoZGF0YTogeyBhbGw6IG51bWJlcjsgbWluZTogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmZpbHRlckhlbHBlci51cGRhdGVNZW51RGF0YXMoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiZG9jdW1lbnRzLm1pbmVcIixcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG5vdGlmaWNhdGlvbkJhZGdlOiB7XG4gICAgICAgICAgICBsYWJlbDogZGF0YS5taW5lLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiZG9jdW1lbnRzLmFsbFwiLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgbm90aWZpY2F0aW9uQmFkZ2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiBkYXRhLmFsbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKTtcbiAgICB0aGlzLm1lbnUgPSB0aGlzLmZpbHRlckhlbHBlci5nZXRNZW51KCk7XG4gIH1cbn1cbiIsIjx0YS1maWxlcy1kaXNwbGF5XG4gIFtmaWxlcyRdPVwidGhpcy5nZXREb2NzJCgpXCJcbiAgW21lbnVdPVwidGhpcy5tZW51XCJcbiAgW2NhbkFkZEZpbGVdPVwidGhpcy5jYW5BZGRGaWxlXCJcbiAgZmlsZVR5cGU9XCJEb2N1bWVudFwiXG4gIChmaWxlU2VsZWN0ZWQpPVwidGhpcy5kb3dubG9hZERvY3VtZW50KCRldmVudClcIlxuICAobW9yZUluZm9ybWF0aW9uU2VsZWN0ZWQpPVwidGhpcy5vcGVuQm90dG9tU2hlZXQoJGV2ZW50KVwiXG4gIChmaWxlVXBsb2FkaW5nKT1cInRoaXMudXBsb2FkRG9jdW1lbnRzKCRldmVudClcIlxuPlxuPC90YS1maWxlcy1kaXNwbGF5PlxuIl19
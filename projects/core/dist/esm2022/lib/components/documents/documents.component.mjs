import { Component, EventEmitter, Output, input } from "@angular/core";
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
        this.document$ = input.required();
        this.canAddFile = input.required();
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
        return this.document$().pipe(map((documents) => documents.filter((document) => {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: DocumentsComponent, isStandalone: true, selector: "ta-documents", inputs: { document$: { classPropertyName: "document$", publicName: "document$", isSignal: true, isRequired: true, transformFunction: null }, canAddFile: { classPropertyName: "canAddFile", publicName: "canAddFile", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { filesSaved: "filesSaved", filesDeleted: "filesDeleted" }, usesInheritance: true, ngImport: i0, template: "<ta-files-display\n  [files$]=\"this.getDocs$()\"\n  [menu]=\"this.menu\"\n  [canAddFile]=\"this.canAddFile()\"\n  [tempFiles]=\"[]\"\n  fileType=\"Document\"\n  (fileSelected)=\"this.downloadDocument($event)\"\n  (moreInformationSelected)=\"this.openBottomSheet($event)\"\n  (fileUploading)=\"this.uploadDocuments($event)\"\n>\n</ta-files-display>\n", styles: [":host ::ng-deep app-card .card{border-radius:10px}\n"], dependencies: [{ kind: "component", type: FilesDisplayComponent, selector: "ta-files-display", inputs: ["files$", "menu", "canAddFile", "tempFiles", "fileType"], outputs: ["fileSelected", "moreInformationSelected", "fileUploading"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DocumentsComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-documents", standalone: true, imports: [FilesDisplayComponent], template: "<ta-files-display\n  [files$]=\"this.getDocs$()\"\n  [menu]=\"this.menu\"\n  [canAddFile]=\"this.canAddFile()\"\n  [tempFiles]=\"[]\"\n  fileType=\"Document\"\n  (fileSelected)=\"this.downloadDocument($event)\"\n  (moreInformationSelected)=\"this.openBottomSheet($event)\"\n  (fileUploading)=\"this.uploadDocuments($event)\"\n>\n</ta-files-display>\n", styles: [":host ::ng-deep app-card .card{border-radius:10px}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }, { type: i2.MatDialog }], propDecorators: { filesSaved: [{
                type: Output
            }], filesDeleted: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBYyxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJELE9BQU8sRUFHTCxxQkFBcUIsR0FDdEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBRUwsaUNBQWlDLEVBRWpDLFlBQVksR0FFYixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ25DLE9BQU8sRUFFTCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGdCQUFnQixHQUNqQixNQUFNLFdBQVcsQ0FBQztBQUVuQixPQUFPLEVBQ0wsbUJBQW1CLEdBRXBCLE1BQU0sMERBQTBELENBQUM7Ozs7QUFTbEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQWU7SUFrQnJELFlBQ1UsWUFBNEIsRUFDNUIsT0FBa0I7UUFFMUIsS0FBSyxFQUFFLENBQUM7UUFIQSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQW5CNUIsY0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQTBCLENBQUM7UUFFckQsZUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVcsQ0FBQztRQUd2QyxlQUFVLEdBQUcsSUFBSSxZQUFZ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UyxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUFrQjtRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8sV0FBVyxDQUFDLElBQW1DO1FBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDO1lBQ2hDO2dCQUNFLEdBQUcsRUFBRSxnQkFBZ0I7Z0JBQ3JCLE9BQU8sRUFBRTtvQkFDUCxpQkFBaUIsRUFBRTt3QkFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO3FCQUNqQjtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLGVBQWU7Z0JBQ3BCLE9BQU8sRUFBRTtvQkFDUCxpQkFBaUIsRUFBRTt3QkFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHO3FCQUNoQjtpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFDLENBQUM7K0dBcktVLGtCQUFrQjttR0FBbEIsa0JBQWtCLHliQ3hDL0IsZ1dBV0EsOEdEMkJZLHFCQUFxQjs7NEZBRXBCLGtCQUFrQjtrQkFQOUIsU0FBUzsrQkFDRSxjQUFjLGNBR1osSUFBSSxXQUNQLENBQUMscUJBQXFCLENBQUM7MkdBUWhDLFVBQVU7c0JBRFQsTUFBTTtnQkFJUCxZQUFZO3NCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQsIGlucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldFwiO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCwgb2YgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQge1xuICBEb2N1bWVudCxcbiAgRmlsZU1ldGFkYXRhLFxuICBGaWxlc0Rpc3BsYXlDb21wb25lbnQsXG59IGZyb20gXCJAdGEvZmlsZXMtZXh0ZW5kZWRcIjtcbmltcG9ydCB7XG4gIEJvdHRvbVNoZWV0RGF0YSxcbiAgQm90dG9tU2hlZXRUZW1wbGF0ZUJhc2ljQ29tcG9uZW50LFxuICBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNQYXJhbXMsXG4gIEZpbHRlckhlbHBlcixcbiAgTWVudSxcbn0gZnJvbSBcIkB0YS9tZW51XCI7XG5pbXBvcnQgeyBvcGVuTW9kYWwgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQge1xuICBGaWxlRGF0YSxcbiAgVGFCYXNlQ29tcG9uZW50LFxuICBkb3dubG9hZEZpbGUsXG4gIGdldEZpbGVFeHRlbnNpb24sXG59IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHtcbiAgVXBsb2FkRG9jdW1lbnRNb2RhbCxcbiAgVXBsb2FkRG9jdW1lbnRSZXN1bHQsXG59IGZyb20gXCIuL3VwbG9hZC91cGxvYWQtdmlzaXQtZG9jdW1lbnQvdXBsb2FkLWRvY3VtZW50LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtZG9jdW1lbnRzXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZG9jdW1lbnRzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9kb2N1bWVudHMuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGaWxlc0Rpc3BsYXlDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBEb2N1bWVudHNDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkb2N1bWVudCQgPSBpbnB1dC5yZXF1aXJlZDxPYnNlcnZhYmxlPERvY3VtZW50W10+PigpO1xuXG4gIGNhbkFkZEZpbGUgPSBpbnB1dC5yZXF1aXJlZDxib29sZWFuPigpO1xuXG4gIEBPdXRwdXQoKVxuICBmaWxlc1NhdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBmaWxlc0RlbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIG1lbnU6IE1lbnU7XG5cbiAgcHVibGljIGZpbHRlckhlbHBlciA9IG5ldyBGaWx0ZXJIZWxwZXIoW1xuICAgIHsgbGFiZWw6IFwiZG9jdW1lbnRzLm1pbmVcIiwgZGVmYXVsdE9wZW46IGZhbHNlIH0sXG4gICAgeyBsYWJlbDogXCJkb2N1bWVudHMuYWxsXCIsIGRlZmF1bHRPcGVuOiB0cnVlIH0sXG4gIF0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2JvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCxcbiAgICBwcml2YXRlIF9kaWFsb2c6IE1hdERpYWxvZ1xuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWVudSA9IHRoaXMuZmlsdGVySGVscGVyLmdldE1lbnUoKTtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIGNvbWJpbmVMYXRlc3Qoe1xuICAgICAgICBhbGw6IHRoaXMuX2ZpbHRlcmVkRG9jdW1lbnRzJChcImFsbFwiKSxcbiAgICAgICAgbWluZTogdGhpcy5fZmlsdGVyZWREb2N1bWVudHMkKFwibWluZVwiKSxcbiAgICAgIH0pLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVNZW51KHsgYWxsOiBkYXRhLmFsbC5sZW5ndGgsIG1pbmU6IGRhdGEubWluZS5sZW5ndGggfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdXBsb2FkRG9jdW1lbnRzKFxuICAgIGZpbGVzOiB7IGZpbGU6IEZpbGUgfCBudWxsOyBsb2NhbFVybDogc3RyaW5nIHwgbnVsbCB9W11cbiAgKSB7XG4gICAgdGhpcy5fb3BlblVwbG9hZFdvcmtmbG93KGZpbGVzWzBdLmZpbGUhKTtcbiAgfVxuICBwdWJsaWMgZG93bmxvYWREb2N1bWVudChmaWxlRGF0YTogRmlsZURhdGEpIHtcbiAgICBkb3dubG9hZEZpbGUoZmlsZURhdGEudXJsKTtcbiAgICB0aGlzLl9ib3R0b21TaGVldC5kaXNtaXNzKHRydWUpO1xuICB9XG5cbiAgcHVibGljIG9wZW5Cb3R0b21TaGVldChmaWxlRGF0YTogRmlsZURhdGEpOiB2b2lkIHtcbiAgICBjb25zdCBib3R0b21TaGVldERhdGE6IEJvdHRvbVNoZWV0RGF0YVtdID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJkb2N1bWVudHMuZG93bmxvYWRcIixcbiAgICAgICAgaWNvbjogXCJkb3dubG9hZFwiLFxuICAgICAgICBhY3Rpb246ICgpID0+IHRoaXMuZG93bmxvYWREb2N1bWVudChmaWxlRGF0YSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJkb2N1bWVudHMuZGVsZXRlXCIsXG4gICAgICAgIGljb246IFwiZGVsZXRlXCIsXG4gICAgICAgIGFjdGlvbjogKCkgPT4gdGhpcy5fcHJvcG9zZURlbGV0ZURvY3VtZW50KGZpbGVEYXRhKSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW48XG4gICAgICBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNDb21wb25lbnQsXG4gICAgICBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNQYXJhbXNcbiAgICA+KEJvdHRvbVNoZWV0VGVtcGxhdGVCYXNpY0NvbXBvbmVudCwge1xuICAgICAgZGF0YToge1xuICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgIG1lbnUkOiBvZihib3R0b21TaGVldERhdGEpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREb2NzJCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWREb2N1bWVudHMkKHRoaXMuZmlsdGVySGVscGVyLmZpbHRlcikucGlwZShcbiAgICAgIG1hcCgoZG9jdW1lbnRzKSA9PlxuICAgICAgICBkb2N1bWVudHMubWFwPEZpbGVEYXRhPigoZG9jdW1lbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGRvY3VtZW50LmlkLFxuICAgICAgICAgICAgdXJsOiBkb2N1bWVudC51cmwsXG4gICAgICAgICAgICB0eXBlOiBcIkRvY3VtZW50XCIsXG4gICAgICAgICAgICBmaWxlTWV0YURhdGE6IGRvY3VtZW50LmZpbGVNZXRhZGF0YSxcbiAgICAgICAgICAgIGZpbGVFeHRlbnNpb246IGdldEZpbGVFeHRlbnNpb24oZG9jdW1lbnQudXJsKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJlZERvY3VtZW50cyQoZmlsdGVyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudCQoKS5waXBlKFxuICAgICAgbWFwKChkb2N1bWVudHMpID0+XG4gICAgICAgIGRvY3VtZW50cy5maWx0ZXIoKGRvY3VtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGZpbHRlciA9PT0gXCJhbGxcIikgcmV0dXJuIHRydWU7XG4gICAgICAgICAgaWYgKGZpbHRlciA9PT0gXCJtaW5lXCIgJiYgZG9jdW1lbnQuaXNPd25lcikgcmV0dXJuIHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9zYXZlRG9jdW1lbnQoZmlsZTogRmlsZSwgZmlsZU1ldGFkYXRhOiBQYXJ0aWFsPEZpbGVNZXRhZGF0YT4pIHtcbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuICAgIHRoaXMuZmlsZXNTYXZlZC5lbWl0KHsgZmlsZSwgZmlsZU1ldGFkYXRhIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlblVwbG9hZFdvcmtmbG93KGZpbGU6IEZpbGUpIHtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuX2RpYWxvZ1xuICAgICAgICAub3BlbihVcGxvYWREb2N1bWVudE1vZGFsLCB7XG4gICAgICAgICAgcGFuZWxDbGFzczogXCJmdWxsLXNjcmVlbi1tb2RhbFwiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLmFmdGVyQ2xvc2VkKClcbiAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0OiBVcGxvYWREb2N1bWVudFJlc3VsdCB8IG51bGwpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zYXZlRG9jdW1lbnQoZmlsZSwge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlc3VsdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGZpbGVUeXBlOiB7XG4gICAgICAgICAgICAgIGlkOiByZXN1bHQuZG9jdW1lbnRUeXBlSWQsXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZWRWYWx1ZTogXCJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Byb3Bvc2VEZWxldGVEb2N1bWVudChmaWxlRGF0YTogRmlsZURhdGEpIHtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIG9wZW5Nb2RhbCh0aGlzLl9kaWFsb2cpLnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuX2RlbGV0ZURvY3VtZW50KGZpbGVEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fYm90dG9tU2hlZXQuZGlzbWlzcyh0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlbGV0ZURvY3VtZW50KGZpbGVEYXRhOiBGaWxlRGF0YSkge1xuICAgIHRoaXMuZmlsZXNEZWxldGVkLmVtaXQoZmlsZURhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTWVudShkYXRhOiB7IGFsbDogbnVtYmVyOyBtaW5lOiBudW1iZXIgfSkge1xuICAgIHRoaXMuZmlsdGVySGVscGVyLnVwZGF0ZU1lbnVEYXRhcyhbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJkb2N1bWVudHMubWluZVwiLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgbm90aWZpY2F0aW9uQmFkZ2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiBkYXRhLm1pbmUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJkb2N1bWVudHMuYWxsXCIsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBub3RpZmljYXRpb25CYWRnZToge1xuICAgICAgICAgICAgbGFiZWw6IGRhdGEuYWxsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pO1xuICAgIHRoaXMubWVudSA9IHRoaXMuZmlsdGVySGVscGVyLmdldE1lbnUoKTtcbiAgfVxufVxuIiwiPHRhLWZpbGVzLWRpc3BsYXlcbiAgW2ZpbGVzJF09XCJ0aGlzLmdldERvY3MkKClcIlxuICBbbWVudV09XCJ0aGlzLm1lbnVcIlxuICBbY2FuQWRkRmlsZV09XCJ0aGlzLmNhbkFkZEZpbGUoKVwiXG4gIFt0ZW1wRmlsZXNdPVwiW11cIlxuICBmaWxlVHlwZT1cIkRvY3VtZW50XCJcbiAgKGZpbGVTZWxlY3RlZCk9XCJ0aGlzLmRvd25sb2FkRG9jdW1lbnQoJGV2ZW50KVwiXG4gIChtb3JlSW5mb3JtYXRpb25TZWxlY3RlZCk9XCJ0aGlzLm9wZW5Cb3R0b21TaGVldCgkZXZlbnQpXCJcbiAgKGZpbGVVcGxvYWRpbmcpPVwidGhpcy51cGxvYWREb2N1bWVudHMoJGV2ZW50KVwiXG4+XG48L3RhLWZpbGVzLWRpc3BsYXk+XG4iXX0=
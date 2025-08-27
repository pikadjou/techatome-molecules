import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';
import { FilesDisplayComponent } from '@ta/files-extended';
import { BottomSheetTemplateBasicComponent, FilterHelper, } from '@ta/menu';
import { openModal } from '@ta/ui';
import { TaBaseComponent, downloadFile, getFileExtension } from '@ta/utils';
import { UploadDocumentModal } from './upload/upload-visit-document/upload-document.component';
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
            { label: 'documents.mine', defaultOpen: false },
            { label: 'documents.all', defaultOpen: true },
        ]);
        this.menu = this.filterHelper.getMenu();
    }
    ngOnInit() {
        this._registerSubscription(combineLatest({
            all: this._filteredDocuments$('all'),
            mine: this._filteredDocuments$('mine'),
        }).subscribe(data => {
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
                label: 'documents.download',
                icon: 'download',
                action: () => this.downloadDocument(fileData),
            },
            {
                label: 'documents.delete',
                icon: 'delete',
                action: () => this._proposeDeleteDocument(fileData),
            },
        ];
        this._bottomSheet.open(BottomSheetTemplateBasicComponent, {
            data: {
                orientation: 'horizontal',
                menu$: of(bottomSheetData),
            },
        });
    }
    getDocs$() {
        return this._filteredDocuments$(this.filterHelper.filter).pipe(map(documents => documents.map(document => {
            return {
                id: document.id,
                url: document.url,
                type: 'Document',
                fileMetaData: document.fileMetadata,
                fileExtension: getFileExtension(document.url),
            };
        })));
    }
    _filteredDocuments$(filter) {
        return this.document$.pipe(map(documents => documents.filter(document => {
            if (filter === 'all')
                return true;
            if (filter === 'mine' && document.isOwner)
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
            panelClass: 'full-screen-modal',
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
                    translatedValue: '',
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
                key: 'documents.mine',
                options: {
                    notificationBadge: {
                        label: data.mine,
                    },
                },
            },
            {
                key: 'documents.all',
                options: {
                    notificationBadge: {
                        label: data.all,
                    },
                },
            },
        ]);
        this.menu = this.filterHelper.getMenu();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DocumentsComponent, deps: [{ token: i1.MatBottomSheet }, { token: i2.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: DocumentsComponent, isStandalone: true, selector: "ta-documents", inputs: { document$: "document$", canAddFile: "canAddFile" }, outputs: { filesSaved: "filesSaved", filesDeleted: "filesDeleted" }, usesInheritance: true, ngImport: i0, template: "<ta-files-display\n  [files$]=\"this.getDocs$()\"\n  [menu]=\"this.menu\"\n  [canAddFile]=\"this.canAddFile\"\n  fileType=\"Document\"\n  (fileSelected)=\"this.downloadDocument($event)\"\n  (moreInformationSelected)=\"this.openBottomSheet($event)\"\n  (fileUploading)=\"this.uploadDocuments($event)\"\n>\n</ta-files-display>\n", styles: [":host ::ng-deep app-card .card{border-radius:10px}\n"], dependencies: [{ kind: "component", type: FilesDisplayComponent, selector: "ta-files-display", inputs: ["files$", "menu", "canAddFile", "tempFiles", "fileType"], outputs: ["fileSelected", "moreInformationSelected", "fileUploading"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DocumentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-documents', standalone: true, imports: [FilesDisplayComponent], template: "<ta-files-display\n  [files$]=\"this.getDocs$()\"\n  [menu]=\"this.menu\"\n  [canAddFile]=\"this.canAddFile\"\n  fileType=\"Document\"\n  (fileSelected)=\"this.downloadDocument($event)\"\n  (moreInformationSelected)=\"this.openBottomSheet($event)\"\n  (fileUploading)=\"this.uploadDocuments($event)\"\n>\n</ta-files-display>\n", styles: [":host ::ng-deep app-card .card{border-radius:10px}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }, { type: i2.MatDialog }], propDecorators: { document$: [{
                type: Input
            }], canAddFile: [{
                type: Input
            }], filesSaved: [{
                type: Output
            }], filesDeleted: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBYyxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJELE9BQU8sRUFBMEIscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRixPQUFPLEVBRUwsaUNBQWlDLEVBRWpDLFlBQVksR0FFYixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ25DLE9BQU8sRUFBWSxlQUFlLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxtQkFBbUIsRUFBd0IsTUFBTSwwREFBMEQsQ0FBQzs7OztBQVNySCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBZTtJQW9CckQsWUFDVSxZQUE0QixFQUM1QixPQUFrQjtRQUUxQixLQUFLLEVBQUUsQ0FBQztRQUhBLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBZDVCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUkzQixpQkFBWSxHQUFHLElBQUksWUFBWSxDQUFDO1lBQ3JD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QyxDQUNILENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sZUFBZSxDQUFDLFFBQWtCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyxXQUFXLENBQUMsSUFBbUM7UUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUM7WUFDaEM7Z0JBQ0UsR0FBRyxFQUFFLGdCQUFnQjtnQkFDckIsT0FBTyxFQUFFO29CQUNQLGlCQUFpQixFQUFFO3dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxHQUFHLEVBQUUsZUFBZTtnQkFDcEIsT0FBTyxFQUFFO29CQUNQLGlCQUFpQixFQUFFO3dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUc7cUJBQ2hCO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQzsrR0FyS1Usa0JBQWtCO21HQUFsQixrQkFBa0Isa09DNUIvQix3VUFVQSw4R0RnQlkscUJBQXFCOzs0RkFFcEIsa0JBQWtCO2tCQVA5QixTQUFTOytCQUNFLGNBQWMsY0FHWixJQUFJLFdBQ1AsQ0FBQyxxQkFBcUIsQ0FBQzsyR0FJaEMsU0FBUztzQkFEUixLQUFLO2dCQUlOLFVBQVU7c0JBRFQsS0FBSztnQkFJTixVQUFVO3NCQURULE1BQU07Z0JBSVAsWUFBWTtzQkFEWCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0LCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEb2N1bWVudCwgRmlsZU1ldGFkYXRhLCBGaWxlc0Rpc3BsYXlDb21wb25lbnQgfSBmcm9tICdAdGEvZmlsZXMtZXh0ZW5kZWQnO1xuaW1wb3J0IHtcbiAgQm90dG9tU2hlZXREYXRhLFxuICBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNDb21wb25lbnQsXG4gIEJvdHRvbVNoZWV0VGVtcGxhdGVCYXNpY1BhcmFtcyxcbiAgRmlsdGVySGVscGVyLFxuICBNZW51LFxufSBmcm9tICdAdGEvbWVudSc7XG5pbXBvcnQgeyBvcGVuTW9kYWwgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgRmlsZURhdGEsIFRhQmFzZUNvbXBvbmVudCwgZG93bmxvYWRGaWxlLCBnZXRGaWxlRXh0ZW5zaW9uIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVXBsb2FkRG9jdW1lbnRNb2RhbCwgVXBsb2FkRG9jdW1lbnRSZXN1bHQgfSBmcm9tICcuL3VwbG9hZC91cGxvYWQtdmlzaXQtZG9jdW1lbnQvdXBsb2FkLWRvY3VtZW50LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWRvY3VtZW50cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2N1bWVudHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kb2N1bWVudHMuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0ZpbGVzRGlzcGxheUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50c0NvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGRvY3VtZW50JCE6IE9ic2VydmFibGU8RG9jdW1lbnRbXT47XG5cbiAgQElucHV0KClcbiAgY2FuQWRkRmlsZSE6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIGZpbGVzU2F2ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIGZpbGVzRGVsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgbWVudTogTWVudTtcblxuICBwdWJsaWMgZmlsdGVySGVscGVyID0gbmV3IEZpbHRlckhlbHBlcihbXG4gICAgeyBsYWJlbDogJ2RvY3VtZW50cy5taW5lJywgZGVmYXVsdE9wZW46IGZhbHNlIH0sXG4gICAgeyBsYWJlbDogJ2RvY3VtZW50cy5hbGwnLCBkZWZhdWx0T3BlbjogdHJ1ZSB9LFxuICBdKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9ib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQsXG4gICAgcHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2dcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1lbnUgPSB0aGlzLmZpbHRlckhlbHBlci5nZXRNZW51KCk7XG4gIH1cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICBjb21iaW5lTGF0ZXN0KHtcbiAgICAgICAgYWxsOiB0aGlzLl9maWx0ZXJlZERvY3VtZW50cyQoJ2FsbCcpLFxuICAgICAgICBtaW5lOiB0aGlzLl9maWx0ZXJlZERvY3VtZW50cyQoJ21pbmUnKSxcbiAgICAgIH0pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTWVudSh7IGFsbDogZGF0YS5hbGwubGVuZ3RoLCBtaW5lOiBkYXRhLm1pbmUubGVuZ3RoIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZERvY3VtZW50cyhmaWxlczogeyBmaWxlOiBGaWxlIHwgbnVsbDsgbG9jYWxVcmw6IHN0cmluZyB8IG51bGwgfVtdKSB7XG4gICAgdGhpcy5fb3BlblVwbG9hZFdvcmtmbG93KGZpbGVzWzBdLmZpbGUhKTtcbiAgfVxuICBwdWJsaWMgZG93bmxvYWREb2N1bWVudChmaWxlRGF0YTogRmlsZURhdGEpIHtcbiAgICBkb3dubG9hZEZpbGUoZmlsZURhdGEudXJsKTtcbiAgICB0aGlzLl9ib3R0b21TaGVldC5kaXNtaXNzKHRydWUpO1xuICB9XG5cbiAgcHVibGljIG9wZW5Cb3R0b21TaGVldChmaWxlRGF0YTogRmlsZURhdGEpOiB2b2lkIHtcbiAgICBjb25zdCBib3R0b21TaGVldERhdGE6IEJvdHRvbVNoZWV0RGF0YVtdID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ2RvY3VtZW50cy5kb3dubG9hZCcsXG4gICAgICAgIGljb246ICdkb3dubG9hZCcsXG4gICAgICAgIGFjdGlvbjogKCkgPT4gdGhpcy5kb3dubG9hZERvY3VtZW50KGZpbGVEYXRhKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnZG9jdW1lbnRzLmRlbGV0ZScsXG4gICAgICAgIGljb246ICdkZWxldGUnLFxuICAgICAgICBhY3Rpb246ICgpID0+IHRoaXMuX3Byb3Bvc2VEZWxldGVEb2N1bWVudChmaWxlRGF0YSksXG4gICAgICB9LFxuICAgIF07XG5cbiAgICB0aGlzLl9ib3R0b21TaGVldC5vcGVuPEJvdHRvbVNoZWV0VGVtcGxhdGVCYXNpY0NvbXBvbmVudCwgQm90dG9tU2hlZXRUZW1wbGF0ZUJhc2ljUGFyYW1zPihcbiAgICAgIEJvdHRvbVNoZWV0VGVtcGxhdGVCYXNpY0NvbXBvbmVudCxcbiAgICAgIHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgbWVudSQ6IG9mKGJvdHRvbVNoZWV0RGF0YSksXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREb2NzJCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWREb2N1bWVudHMkKHRoaXMuZmlsdGVySGVscGVyLmZpbHRlcikucGlwZShcbiAgICAgIG1hcChkb2N1bWVudHMgPT5cbiAgICAgICAgZG9jdW1lbnRzLm1hcDxGaWxlRGF0YT4oZG9jdW1lbnQgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZG9jdW1lbnQuaWQsXG4gICAgICAgICAgICB1cmw6IGRvY3VtZW50LnVybCxcbiAgICAgICAgICAgIHR5cGU6ICdEb2N1bWVudCcsXG4gICAgICAgICAgICBmaWxlTWV0YURhdGE6IGRvY3VtZW50LmZpbGVNZXRhZGF0YSxcbiAgICAgICAgICAgIGZpbGVFeHRlbnNpb246IGdldEZpbGVFeHRlbnNpb24oZG9jdW1lbnQudXJsKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJlZERvY3VtZW50cyQoZmlsdGVyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudCQucGlwZShcbiAgICAgIG1hcChkb2N1bWVudHMgPT5cbiAgICAgICAgZG9jdW1lbnRzLmZpbHRlcihkb2N1bWVudCA9PiB7XG4gICAgICAgICAgaWYgKGZpbHRlciA9PT0gJ2FsbCcpIHJldHVybiB0cnVlO1xuICAgICAgICAgIGlmIChmaWx0ZXIgPT09ICdtaW5lJyAmJiBkb2N1bWVudC5pc093bmVyKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NhdmVEb2N1bWVudChmaWxlOiBGaWxlLCBmaWxlTWV0YWRhdGE6IFBhcnRpYWw8RmlsZU1ldGFkYXRhPikge1xuICAgIHRoaXMucmVxdWVzdFN0YXRlLmFza2VkKCk7XG4gICAgdGhpcy5maWxlc1NhdmVkLmVtaXQoeyBmaWxlLCBmaWxlTWV0YWRhdGEgfSk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuVXBsb2FkV29ya2Zsb3coZmlsZTogRmlsZSkge1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5fZGlhbG9nXG4gICAgICAgIC5vcGVuKFVwbG9hZERvY3VtZW50TW9kYWwsIHtcbiAgICAgICAgICBwYW5lbENsYXNzOiAnZnVsbC1zY3JlZW4tbW9kYWwnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLmFmdGVyQ2xvc2VkKClcbiAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0OiBVcGxvYWREb2N1bWVudFJlc3VsdCB8IG51bGwpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zYXZlRG9jdW1lbnQoZmlsZSwge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlc3VsdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGZpbGVUeXBlOiB7XG4gICAgICAgICAgICAgIGlkOiByZXN1bHQuZG9jdW1lbnRUeXBlSWQsXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZWRWYWx1ZTogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9wcm9wb3NlRGVsZXRlRG9jdW1lbnQoZmlsZURhdGE6IEZpbGVEYXRhKSB7XG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICBvcGVuTW9kYWwodGhpcy5fZGlhbG9nKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLl9kZWxldGVEb2N1bWVudChmaWxlRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2JvdHRvbVNoZWV0LmRpc21pc3ModHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9kZWxldGVEb2N1bWVudChmaWxlRGF0YTogRmlsZURhdGEpIHtcbiAgICB0aGlzLmZpbGVzRGVsZXRlZC5lbWl0KGZpbGVEYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU1lbnUoZGF0YTogeyBhbGw6IG51bWJlcjsgbWluZTogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmZpbHRlckhlbHBlci51cGRhdGVNZW51RGF0YXMoW1xuICAgICAge1xuICAgICAgICBrZXk6ICdkb2N1bWVudHMubWluZScsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBub3RpZmljYXRpb25CYWRnZToge1xuICAgICAgICAgICAgbGFiZWw6IGRhdGEubWluZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZG9jdW1lbnRzLmFsbCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBub3RpZmljYXRpb25CYWRnZToge1xuICAgICAgICAgICAgbGFiZWw6IGRhdGEuYWxsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pO1xuICAgIHRoaXMubWVudSA9IHRoaXMuZmlsdGVySGVscGVyLmdldE1lbnUoKTtcbiAgfVxufVxuIiwiPHRhLWZpbGVzLWRpc3BsYXlcbiAgW2ZpbGVzJF09XCJ0aGlzLmdldERvY3MkKClcIlxuICBbbWVudV09XCJ0aGlzLm1lbnVcIlxuICBbY2FuQWRkRmlsZV09XCJ0aGlzLmNhbkFkZEZpbGVcIlxuICBmaWxlVHlwZT1cIkRvY3VtZW50XCJcbiAgKGZpbGVTZWxlY3RlZCk9XCJ0aGlzLmRvd25sb2FkRG9jdW1lbnQoJGV2ZW50KVwiXG4gIChtb3JlSW5mb3JtYXRpb25TZWxlY3RlZCk9XCJ0aGlzLm9wZW5Cb3R0b21TaGVldCgkZXZlbnQpXCJcbiAgKGZpbGVVcGxvYWRpbmcpPVwidGhpcy51cGxvYWREb2N1bWVudHMoJGV2ZW50KVwiXG4+XG48L3RhLWZpbGVzLWRpc3BsYXk+XG4iXX0=
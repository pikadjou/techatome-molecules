import { Component, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaDocumentsService } from '@ta/services';
import { ButtonComponent, LinkComponent, LoaderComponent, MegaoctetComponent, TextComponent } from '@ta/ui';
import { downloadFile, isNonNullable } from '@ta/utils';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/material/progress-bar";
export class UploadComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        this.uploadStatusChanged = new EventEmitter();
        this._documentsService = inject(TaDocumentsService);
        this.inProgressFiles = [];
        this._invervalId = window.setInterval(() => {
            if (!this.inProgressFiles || this.inProgressFiles.length === 0) {
                return;
            }
            for (const file of this.inProgressFiles) {
                if (file.progress === 100) {
                    continue;
                }
                if (file.progress >= 95) {
                    continue;
                }
                file.progress += 5;
            }
        }, 1000);
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.input.value && this.input.value.length > 0) {
            const ids = this.input.value.map((file) => file.id);
            this.requestState.asked();
            this._documentsService.fetchDocuments$(ids).subscribe({
                next: () => {
                    const documents = this._documentsService.getDocuments(ids);
                    for (let doc of documents ?? []) {
                        this.inProgressFiles.push({
                            name: doc.description ?? '',
                            completed: doc,
                            progress: 100,
                        });
                    }
                    this.requestState.completed();
                },
            });
        }
    }
    ngOnDestroy() {
        window.clearInterval(this._invervalId);
    }
    onFileDropped($event) {
        this.prepareFilesList($event);
    }
    fileBrowseHandler(files) {
        this.prepareFilesList(files.files);
    }
    openDocument(doc) {
        downloadFile(doc.url);
    }
    isValidDocumentList() {
        if (this.inProgressFiles.length === 0) {
            return false;
        }
        return !this.inProgressFiles.find((file) => file.progress < 100);
    }
    validation() {
        const values = this.inProgressFiles
            .map((file) => file.completed
            ? {
                id: file.completed.id,
                name: file.completed.description ?? '',
                url: file.completed.url,
            }
            : null)
            .filter(isNonNullable);
        this.input.confirmValue(values);
    }
    deleteInProgressFile(name) {
        this.inProgressFiles = this.inProgressFiles.filter((file) => file.name !== name);
        this._refreshUploadStatus();
    }
    deleteFile(id) {
        this.inProgressFiles = this.inProgressFiles.filter((file) => file.completed?.id !== id);
        this._refreshUploadStatus();
    }
    prepareFilesList(files) {
        for (const item of files) {
            const inProgressFile = {
                name: item.name,
                progress: 0,
                completed: null,
            };
            this.inProgressFiles.push(inProgressFile);
            this.uploadStatusChanged.emit(false);
            this._documentsService.addDocument$({ file: item }).subscribe({
                next: (data) => {
                    inProgressFile.progress = 100;
                    inProgressFile.completed = data;
                    this._refreshUploadStatus();
                    if (!this.input.confirmButton) {
                        this.validation();
                    }
                },
            });
        }
    }
    async uploadFile() {
        // todo move into a capacitor filesystem service
        const pickFiles = await FilePicker.pickFiles({
            multiple: true,
            types: [
                // pdf
                'application/pdf',
                // word
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/msword',
                // excel
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                // text
                'text/plain',
            ],
        });
        const files = [];
        for (let file of pickFiles.files) {
            if (!file || !file.blob)
                continue;
            files.push(this._localToFile(file));
        }
        this.prepareFilesList(files);
    }
    _refreshUploadStatus() {
        const allComplete = this.inProgressFiles.every((file) => file.progress === 100);
        this.uploadStatusChanged.emit(allComplete);
    }
    _localToFile(file) {
        return new File([file.blob], file.name, {
            type: file.mimeType,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UploadComponent, isStandalone: true, selector: "ta-input-upload", outputs: { uploadStatusChanged: "uploadStatusChanged" }, viewQueries: [{ propertyName: "fileDropEl", first: true, predicate: ["fileDropRef"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <div class=\"upload-container flex-column\" appDnd (fileDropped)=\"this.onFileDropped($event)\">\n    <div class=\"flex-responsive-ctr g-space-md\">\n      @if (this.inProgressFiles.length > 0) {\n        <div class=\"files-list flex-column g-space-sm\">\n          @for (item of this.inProgressFiles; track item) {\n            <div class=\"flex-column\">\n              <div class=\"flex-row align-center\">\n                <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n                @if (item.progress < 100) {\n                  <ta-text class=\"name\" size=\"sm\">\n                    {{ item.name }}\n                  </ta-text>\n                } @else if (item.progress === 100 && item.completed) {\n                  <ta-link class=\"name\" (action)=\"this.openDocument(item.completed)\" size=\"sm\">{{ item.name }}</ta-link>\n                }\n              </div>\n              <div class=\"extra flex-row g-space-md\">\n                @if (item.progress < 100) {\n                  <mat-progress-bar mode=\"determinate\" [value]=\"item.progress\"></mat-progress-bar>\n                  <ta-link (action)=\"this.deleteInProgressFile(item.name)\" [underline]=\"false\">\n                    <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                  </ta-link>\n                } @else if (item.progress === 100 && item.completed) {\n                  <ta-text size=\"sm\" class=\"justify-end\">\n                    <ta-megaoctet [octet]=\"item.completed.size\"></ta-megaoctet>\n                  </ta-text>\n                  @if (item.completed.id) {\n                    <ta-link (action)=\"this.deleteFile(item.completed.id)\" [underline]=\"false\">\n                      <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                    </ta-link>\n                  }\n                }\n              </div>\n            </div>\n          }\n        </div>\n      }\n      <div class=\"content ta-c\">\n        <input type=\"file\" multiple (change)=\"this.fileBrowseHandler($event.target)\" />\n        <h3>\n          {{ 'input.upload.dragndrop' | translate }}\n        </h3>\n        <div class=\"d-flex\">\n          <ta-button type=\"secondary\" icon=\"add\" class=\"m-a\" (action)=\"this.uploadFile()\">\n            {{ 'input.upload.add' | translate }}\n          </ta-button>\n        </div>\n      </div>\n    </div>\n    @if (this.input.confirmButton) {\n      <div class=\"d-flex\">\n        <ta-button\n          icon=\"check-line\"\n          class=\"justify-end align-center\"\n          (action)=\"this.validation()\"\n          size=\"small\"\n          [state]=\"this.isValidDocumentList() ? 'classic' : 'disabled'\"\n        >\n          {{ 'input.upload.confirm' | translate }}\n        </ta-button>\n      </div>\n    }\n  </div>\n</ta-loader>\n", styles: [".upload-container{display:flex;border:1px dotted var(--ta-border-primary);padding:var(--ta-space-md);gap:var(--ta-space-md)}.upload-container .files-list{width:50%;max-height:500px}.upload-container .files-list ta-font-icon{color:var(--ta-surface-brand-secondary)}.upload-container .files-list .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.upload-container .content{position:relative;background-color:var(--ta-surface-default);padding:var(--ta-space-xl);flex:1}.upload-container .content input{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0;cursor:pointer}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: MegaoctetComponent, selector: "ta-megaoctet", inputs: ["octet", "icon"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i2.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-upload', standalone: true, imports: [
                        FontIconComponent,
                        ButtonComponent,
                        TranslateModule,
                        TextComponent,
                        MegaoctetComponent,
                        LinkComponent,
                        LoaderComponent,
                        MatProgressBarModule,
                    ], template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <div class=\"upload-container flex-column\" appDnd (fileDropped)=\"this.onFileDropped($event)\">\n    <div class=\"flex-responsive-ctr g-space-md\">\n      @if (this.inProgressFiles.length > 0) {\n        <div class=\"files-list flex-column g-space-sm\">\n          @for (item of this.inProgressFiles; track item) {\n            <div class=\"flex-column\">\n              <div class=\"flex-row align-center\">\n                <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n                @if (item.progress < 100) {\n                  <ta-text class=\"name\" size=\"sm\">\n                    {{ item.name }}\n                  </ta-text>\n                } @else if (item.progress === 100 && item.completed) {\n                  <ta-link class=\"name\" (action)=\"this.openDocument(item.completed)\" size=\"sm\">{{ item.name }}</ta-link>\n                }\n              </div>\n              <div class=\"extra flex-row g-space-md\">\n                @if (item.progress < 100) {\n                  <mat-progress-bar mode=\"determinate\" [value]=\"item.progress\"></mat-progress-bar>\n                  <ta-link (action)=\"this.deleteInProgressFile(item.name)\" [underline]=\"false\">\n                    <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                  </ta-link>\n                } @else if (item.progress === 100 && item.completed) {\n                  <ta-text size=\"sm\" class=\"justify-end\">\n                    <ta-megaoctet [octet]=\"item.completed.size\"></ta-megaoctet>\n                  </ta-text>\n                  @if (item.completed.id) {\n                    <ta-link (action)=\"this.deleteFile(item.completed.id)\" [underline]=\"false\">\n                      <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                    </ta-link>\n                  }\n                }\n              </div>\n            </div>\n          }\n        </div>\n      }\n      <div class=\"content ta-c\">\n        <input type=\"file\" multiple (change)=\"this.fileBrowseHandler($event.target)\" />\n        <h3>\n          {{ 'input.upload.dragndrop' | translate }}\n        </h3>\n        <div class=\"d-flex\">\n          <ta-button type=\"secondary\" icon=\"add\" class=\"m-a\" (action)=\"this.uploadFile()\">\n            {{ 'input.upload.add' | translate }}\n          </ta-button>\n        </div>\n      </div>\n    </div>\n    @if (this.input.confirmButton) {\n      <div class=\"d-flex\">\n        <ta-button\n          icon=\"check-line\"\n          class=\"justify-end align-center\"\n          (action)=\"this.validation()\"\n          size=\"small\"\n          [state]=\"this.isValidDocumentList() ? 'classic' : 'disabled'\"\n        >\n          {{ 'input.upload.confirm' | translate }}\n        </ta-button>\n      </div>\n    }\n  </div>\n</ta-loader>\n", styles: [".upload-container{display:flex;border:1px dotted var(--ta-border-primary);padding:var(--ta-space-md);gap:var(--ta-space-md)}.upload-container .files-list{width:50%;max-height:500px}.upload-container .files-list ta-font-icon{color:var(--ta-surface-brand-secondary)}.upload-container .files-list .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.upload-container .content{position:relative;background-color:var(--ta-surface-default);padding:var(--ta-space-xl);flex:1}.upload-container .content input{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0;cursor:pointer}\n"] }]
        }], ctorParameters: () => [], propDecorators: { uploadStatusChanged: [{
                type: Output
            }], fileDropEl: [{
                type: ViewChild,
                args: ['fileDropRef', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBZSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBd0JwRSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSx3QkFBcUM7SUFVeEU7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVZBLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFJM0Msc0JBQWlCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFHekQsb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBSzVDLElBQUks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LG9CQUFvQjtRQUMxQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxZQUFZLENBQUMsSUFBZ0I7UUFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3ZDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDOytHQTNKVSxlQUFlO21HQUFmLGVBQWUsc1FDcEM1Qiw4MEZBaUVBLHNwQkR2Q0ksaUJBQWlCLG1GQUNqQixlQUFlLDZKQUNmLGVBQWUsNEZBQ2YsYUFBYSx5RkFDYixrQkFBa0Isb0ZBQ2xCLGFBQWEsaUlBQ2IsZUFBZSx3R0FDZixvQkFBb0I7OzRGQUdYLGVBQWU7a0JBaEIzQixTQUFTOytCQUNFLGlCQUFpQixjQUdmLElBQUksV0FDUDt3QkFDUCxpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLG9CQUFvQjtxQkFDckI7d0RBR1MsbUJBQW1CO3NCQUE1QixNQUFNO2dCQUVzQyxVQUFVO3NCQUF0RCxTQUFTO3VCQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5cbmltcG9ydCB7IEZpbGVQaWNrZXIsIFBpY2tlZEZpbGUgfSBmcm9tICdAY2FwYXdlc29tZS9jYXBhY2l0b3ItZmlsZS1waWNrZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IElucHV0VXBsb2FkLCBJbnB1dFVwbG9hZFZhbHVlIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgRG9jdW1lbnREdG8sIFRhRG9jdW1lbnRzU2VydmljZSB9IGZyb20gJ0B0YS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQsIExpbmtDb21wb25lbnQsIExvYWRlckNvbXBvbmVudCwgTWVnYW9jdGV0Q29tcG9uZW50LCBUZXh0Q29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IGRvd25sb2FkRmlsZSwgaXNOb25OdWxsYWJsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5cbnR5cGUgSW5Qcm9ncmVzc0ZpbGUgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbiAgY29tcGxldGVkOiBEb2N1bWVudER0byB8IG51bGw7XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1pbnB1dC11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBsb2FkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBGb250SWNvbkNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIFRleHRDb21wb25lbnQsXG4gICAgTWVnYW9jdGV0Q29tcG9uZW50LFxuICAgIExpbmtDb21wb25lbnQsXG4gICAgTG9hZGVyQ29tcG9uZW50LFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRDb21wb25lbnQgZXh0ZW5kcyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQ8SW5wdXRVcGxvYWQ+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIHVwbG9hZFN0YXR1c0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZmlsZURyb3BSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmlsZURyb3BFbCE6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfZG9jdW1lbnRzU2VydmljZSA9IGluamVjdChUYURvY3VtZW50c1NlcnZpY2UpO1xuICBwcml2YXRlIF9pbnZlcnZhbElkOiBudW1iZXI7XG5cbiAgcHVibGljIGluUHJvZ3Jlc3NGaWxlczogSW5Qcm9ncmVzc0ZpbGVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pbnZlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pblByb2dyZXNzRmlsZXMgfHwgdGhpcy5pblByb2dyZXNzRmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiB0aGlzLmluUHJvZ3Jlc3NGaWxlcykge1xuICAgICAgICBpZiAoZmlsZS5wcm9ncmVzcyA9PT0gMTAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbGUucHJvZ3Jlc3MgPj0gOTUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmaWxlLnByb2dyZXNzICs9IDU7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIGlmICh0aGlzLmlucHV0LnZhbHVlICYmIHRoaXMuaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaWRzID0gdGhpcy5pbnB1dC52YWx1ZS5tYXAoKGZpbGUpID0+IGZpbGUuaWQpO1xuICAgICAgdGhpcy5yZXF1ZXN0U3RhdGUuYXNrZWQoKTtcbiAgICAgIHRoaXMuX2RvY3VtZW50c1NlcnZpY2UuZmV0Y2hEb2N1bWVudHMkKGlkcykuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRvY3VtZW50cyA9IHRoaXMuX2RvY3VtZW50c1NlcnZpY2UuZ2V0RG9jdW1lbnRzKGlkcyk7XG4gICAgICAgICAgZm9yIChsZXQgZG9jIG9mIGRvY3VtZW50cyA/PyBbXSkge1xuICAgICAgICAgICAgdGhpcy5pblByb2dyZXNzRmlsZXMucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IGRvYy5kZXNjcmlwdGlvbiA/PyAnJyxcbiAgICAgICAgICAgICAgY29tcGxldGVkOiBkb2MsXG4gICAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0U3RhdGUuY29tcGxldGVkKCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5faW52ZXJ2YWxJZCk7XG4gIH1cbiAgcHVibGljIG9uRmlsZURyb3BwZWQoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnByZXBhcmVGaWxlc0xpc3QoJGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBmaWxlQnJvd3NlSGFuZGxlcihmaWxlczogYW55KSB7XG4gICAgdGhpcy5wcmVwYXJlRmlsZXNMaXN0KGZpbGVzLmZpbGVzKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRG9jdW1lbnQoZG9jOiBEb2N1bWVudER0bykge1xuICAgIGRvd25sb2FkRmlsZShkb2MudXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1ZhbGlkRG9jdW1lbnRMaXN0KCkge1xuICAgIGlmICh0aGlzLmluUHJvZ3Jlc3NGaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICF0aGlzLmluUHJvZ3Jlc3NGaWxlcy5maW5kKChmaWxlKSA9PiBmaWxlLnByb2dyZXNzIDwgMTAwKTtcbiAgfVxuICBwdWJsaWMgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCB2YWx1ZXM6IElucHV0VXBsb2FkVmFsdWVbXSA9IHRoaXMuaW5Qcm9ncmVzc0ZpbGVzXG4gICAgICAubWFwKChmaWxlKSA9PlxuICAgICAgICBmaWxlLmNvbXBsZXRlZFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBpZDogZmlsZS5jb21wbGV0ZWQuaWQsXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGUuY29tcGxldGVkLmRlc2NyaXB0aW9uID8/ICcnLFxuICAgICAgICAgICAgICB1cmw6IGZpbGUuY29tcGxldGVkLnVybCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG51bGwsXG4gICAgICApXG4gICAgICAuZmlsdGVyKGlzTm9uTnVsbGFibGUpO1xuXG4gICAgdGhpcy5pbnB1dC5jb25maXJtVmFsdWUodmFsdWVzKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVJblByb2dyZXNzRmlsZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmluUHJvZ3Jlc3NGaWxlcyA9IHRoaXMuaW5Qcm9ncmVzc0ZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5uYW1lICE9PSBuYW1lKTtcbiAgICB0aGlzLl9yZWZyZXNoVXBsb2FkU3RhdHVzKCk7XG4gIH1cbiAgcHVibGljIGRlbGV0ZUZpbGUoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuaW5Qcm9ncmVzc0ZpbGVzID0gdGhpcy5pblByb2dyZXNzRmlsZXMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmNvbXBsZXRlZD8uaWQgIT09IGlkKTtcbiAgICB0aGlzLl9yZWZyZXNoVXBsb2FkU3RhdHVzKCk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZUZpbGVzTGlzdChmaWxlczogRmlsZVtdKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGZpbGVzKSB7XG4gICAgICBjb25zdCBpblByb2dyZXNzRmlsZTogSW5Qcm9ncmVzc0ZpbGUgPSB7XG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgIGNvbXBsZXRlZDogbnVsbCxcbiAgICAgIH07XG4gICAgICB0aGlzLmluUHJvZ3Jlc3NGaWxlcy5wdXNoKGluUHJvZ3Jlc3NGaWxlKTtcbiAgICAgIHRoaXMudXBsb2FkU3RhdHVzQ2hhbmdlZC5lbWl0KGZhbHNlKTtcblxuICAgICAgdGhpcy5fZG9jdW1lbnRzU2VydmljZS5hZGREb2N1bWVudCQoeyBmaWxlOiBpdGVtIH0pLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChkYXRhKSA9PiB7XG4gICAgICAgICAgaW5Qcm9ncmVzc0ZpbGUucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgaW5Qcm9ncmVzc0ZpbGUuY29tcGxldGVkID0gZGF0YTtcblxuICAgICAgICAgIHRoaXMuX3JlZnJlc2hVcGxvYWRTdGF0dXMoKTtcbiAgICAgICAgICBpZiAoIXRoaXMuaW5wdXQuY29uZmlybUJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHVwbG9hZEZpbGUoKSB7XG4gICAgLy8gdG9kbyBtb3ZlIGludG8gYSBjYXBhY2l0b3IgZmlsZXN5c3RlbSBzZXJ2aWNlXG4gICAgY29uc3QgcGlja0ZpbGVzID0gYXdhaXQgRmlsZVBpY2tlci5waWNrRmlsZXMoe1xuICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICB0eXBlczogW1xuICAgICAgICAvLyBwZGZcbiAgICAgICAgJ2FwcGxpY2F0aW9uL3BkZicsXG4gICAgICAgIC8vIHdvcmRcbiAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgICAgICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICAgICAgIC8vIGV4Y2VsXG4gICAgICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAgICAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuICAgICAgICAvLyB0ZXh0XG4gICAgICAgICd0ZXh0L3BsYWluJyxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGZpbGUgb2YgcGlja0ZpbGVzLmZpbGVzKSB7XG4gICAgICBpZiAoIWZpbGUgfHwgIWZpbGUuYmxvYikgY29udGludWU7XG5cbiAgICAgIGZpbGVzLnB1c2godGhpcy5fbG9jYWxUb0ZpbGUoZmlsZSkpO1xuICAgIH1cbiAgICB0aGlzLnByZXBhcmVGaWxlc0xpc3QoZmlsZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmcmVzaFVwbG9hZFN0YXR1cygpIHtcbiAgICBjb25zdCBhbGxDb21wbGV0ZSA9IHRoaXMuaW5Qcm9ncmVzc0ZpbGVzLmV2ZXJ5KChmaWxlKSA9PiBmaWxlLnByb2dyZXNzID09PSAxMDApO1xuICAgIHRoaXMudXBsb2FkU3RhdHVzQ2hhbmdlZC5lbWl0KGFsbENvbXBsZXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xvY2FsVG9GaWxlKGZpbGU6IFBpY2tlZEZpbGUpOiBGaWxlIHtcbiAgICByZXR1cm4gbmV3IEZpbGUoW2ZpbGUuYmxvYiFdLCBmaWxlLm5hbWUsIHtcbiAgICAgIHR5cGU6IGZpbGUubWltZVR5cGUsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLnJlcXVlc3RTdGF0ZS5pc0xvYWRpbmcoKVwiPlxuICA8ZGl2IGNsYXNzPVwidXBsb2FkLWNvbnRhaW5lciBmbGV4LWNvbHVtblwiIGFwcERuZCAoZmlsZURyb3BwZWQpPVwidGhpcy5vbkZpbGVEcm9wcGVkKCRldmVudClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleC1yZXNwb25zaXZlLWN0ciBnLXNwYWNlLW1kXCI+XG4gICAgICBAaWYgKHRoaXMuaW5Qcm9ncmVzc0ZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVzLWxpc3QgZmxleC1jb2x1bW4gZy1zcGFjZS1zbVwiPlxuICAgICAgICAgIEBmb3IgKGl0ZW0gb2YgdGhpcy5pblByb2dyZXNzRmlsZXM7IHRyYWNrIGl0ZW0pIHtcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1yb3cgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwiZG9jXCIgc2l6ZT1cInhzXCI+PC90YS1mb250LWljb24+XG4gICAgICAgICAgICAgICAgQGlmIChpdGVtLnByb2dyZXNzIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICA8dGEtdGV4dCBjbGFzcz1cIm5hbWVcIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICA8L3RhLXRleHQ+XG4gICAgICAgICAgICAgICAgfSBAZWxzZSBpZiAoaXRlbS5wcm9ncmVzcyA9PT0gMTAwICYmIGl0ZW0uY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICA8dGEtbGluayBjbGFzcz1cIm5hbWVcIiAoYWN0aW9uKT1cInRoaXMub3BlbkRvY3VtZW50KGl0ZW0uY29tcGxldGVkKVwiIHNpemU9XCJzbVwiPnt7IGl0ZW0ubmFtZSB9fTwvdGEtbGluaz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEgZmxleC1yb3cgZy1zcGFjZS1tZFwiPlxuICAgICAgICAgICAgICAgIEBpZiAoaXRlbS5wcm9ncmVzcyA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCIgW3ZhbHVlXT1cIml0ZW0ucHJvZ3Jlc3NcIj48L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgICAgICAgICAgICAgICA8dGEtbGluayAoYWN0aW9uKT1cInRoaXMuZGVsZXRlSW5Qcm9ncmVzc0ZpbGUoaXRlbS5uYW1lKVwiIFt1bmRlcmxpbmVdPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwiY2xvc2VcIiB0eXBlPVwic21cIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvdGEtbGluaz5cbiAgICAgICAgICAgICAgICB9IEBlbHNlIGlmIChpdGVtLnByb2dyZXNzID09PSAxMDAgJiYgaXRlbS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgIDx0YS10ZXh0IHNpemU9XCJzbVwiIGNsYXNzPVwianVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhLW1lZ2FvY3RldCBbb2N0ZXRdPVwiaXRlbS5jb21wbGV0ZWQuc2l6ZVwiPjwvdGEtbWVnYW9jdGV0PlxuICAgICAgICAgICAgICAgICAgPC90YS10ZXh0PlxuICAgICAgICAgICAgICAgICAgQGlmIChpdGVtLmNvbXBsZXRlZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICA8dGEtbGluayAoYWN0aW9uKT1cInRoaXMuZGVsZXRlRmlsZShpdGVtLmNvbXBsZXRlZC5pZClcIiBbdW5kZXJsaW5lXT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwiY2xvc2VcIiB0eXBlPVwic21cIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90YS1saW5rPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQgdGEtY1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSAoY2hhbmdlKT1cInRoaXMuZmlsZUJyb3dzZUhhbmRsZXIoJGV2ZW50LnRhcmdldClcIiAvPlxuICAgICAgICA8aDM+XG4gICAgICAgICAge3sgJ2lucHV0LnVwbG9hZC5kcmFnbmRyb3AnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICA8dGEtYnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBpY29uPVwiYWRkXCIgY2xhc3M9XCJtLWFcIiAoYWN0aW9uKT1cInRoaXMudXBsb2FkRmlsZSgpXCI+XG4gICAgICAgICAgICB7eyAnaW5wdXQudXBsb2FkLmFkZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L3RhLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBAaWYgKHRoaXMuaW5wdXQuY29uZmlybUJ1dHRvbikge1xuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICA8dGEtYnV0dG9uXG4gICAgICAgICAgaWNvbj1cImNoZWNrLWxpbmVcIlxuICAgICAgICAgIGNsYXNzPVwianVzdGlmeS1lbmQgYWxpZ24tY2VudGVyXCJcbiAgICAgICAgICAoYWN0aW9uKT1cInRoaXMudmFsaWRhdGlvbigpXCJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIFtzdGF0ZV09XCJ0aGlzLmlzVmFsaWREb2N1bWVudExpc3QoKSA/ICdjbGFzc2ljJyA6ICdkaXNhYmxlZCdcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgJ2lucHV0LnVwbG9hZC5jb25maXJtJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L3RhLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgPC9kaXY+XG48L3RhLWxvYWRlcj5cbiJdfQ==
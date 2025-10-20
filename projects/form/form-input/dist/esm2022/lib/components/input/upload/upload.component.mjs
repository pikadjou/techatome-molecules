import { NgFor, NgIf } from '@angular/common';
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
            const ids = this.input.value.map(file => file.id);
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
        return !this.inProgressFiles.find(file => file.progress < 100);
    }
    validation() {
        const values = this.inProgressFiles
            .map(file => file.completed
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
        this.inProgressFiles = this.inProgressFiles.filter(file => file.name !== name);
        this._refreshUploadStatus();
    }
    deleteFile(id) {
        this.inProgressFiles = this.inProgressFiles.filter(file => file.completed?.id !== id);
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
                next: data => {
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
        const allComplete = this.inProgressFiles.every(file => file.progress === 100);
        this.uploadStatusChanged.emit(allComplete);
    }
    _localToFile(file) {
        return new File([file.blob], file.name, {
            type: file.mimeType,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UploadComponent, isStandalone: true, selector: "ta-input-upload", outputs: { uploadStatusChanged: "uploadStatusChanged" }, viewQueries: [{ propertyName: "fileDropEl", first: true, predicate: ["fileDropRef"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <div class=\"upload-container flex-column\" appDnd (fileDropped)=\"this.onFileDropped($event)\">\n    <div class=\"flex-responsive-ctr g-space-md\">\n      @if (this.inProgressFiles.length > 0) {\n        <div class=\"files-list flex-column g-space-sm\">\n          @for (item of this.inProgressFiles; track item) {\n            <div class=\"flex-column\">\n              <div class=\"flex-row align-center\">\n                <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n                @if (item.progress < 100) {\n                  <ta-text class=\"name\" size=\"sm\">\n                    {{ item.name }}\n                  </ta-text>\n                } @else if (item.progress === 100 && item.completed) {\n                  <ta-link class=\"name\" (action)=\"this.openDocument(item.completed)\" size=\"sm\">{{ item.name }}</ta-link>\n                }\n              </div>\n              <div class=\"extra flex-row g-space-md\">\n                @if (item.progress < 100) {\n                  <mat-progress-bar mode=\"determinate\" [value]=\"item.progress\"></mat-progress-bar>\n                  <ta-link (action)=\"this.deleteInProgressFile(item.name)\" [underline]=\"false\">\n                    <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                  </ta-link>\n                } @else if (item.progress === 100 && item.completed) {\n                  <!-- <ta-text size=\"sm\" class=\"justify-end\">\n                    <ta-megaoctet [octet]=\"item.completed.size\"></ta-megaoctet>\n                  </ta-text> -->\n                  @if (item.completed.id) {\n                    <ta-link (action)=\"this.deleteFile(item.completed.id)\" [underline]=\"false\">\n                      <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                    </ta-link>\n                  }\n                }\n              </div>\n            </div>\n          }\n        </div>\n      }\n      <div class=\"content ta-c\">\n        <input type=\"file\" multiple (change)=\"this.fileBrowseHandler($event.target)\" />\n        <h3>\n          {{ 'input.upload.dragndrop' | translate }}\n        </h3>\n        <div class=\"d-flex\">\n          <ta-button type=\"secondary\" icon=\"add\" class=\"m-a\" (action)=\"this.uploadFile()\">\n            {{ 'input.upload.add' | translate }}\n          </ta-button>\n        </div>\n      </div>\n    </div>\n    @if (this.input.confirmButton) {\n      <div class=\"d-flex\">\n        <ta-button\n          icon=\"check-line\"\n          class=\"justify-end align-center\"\n          (action)=\"this.validation()\"\n          size=\"small\"\n          [state]=\"this.isValidDocumentList() ? 'classic' : 'disabled'\"\n        >\n          {{ 'input.upload.confirm' | translate }}\n        </ta-button>\n      </div>\n    }\n  </div>\n</ta-loader>\n", styles: [".upload-container{display:flex;border:1px dotted var(--ta-border-primary);padding:var(--ta-space-md);gap:var(--ta-space-md)}.upload-container .files-list{width:50%;max-height:500px}.upload-container .files-list ta-font-icon{color:var(--ta-surface-brand-secondary)}.upload-container .files-list .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.upload-container .content{position:relative;background-color:var(--ta-surface-default);padding:var(--ta-space-xl);flex:1}.upload-container .content input{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0;cursor:pointer}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i2.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-upload', standalone: true, imports: [
                        NgIf,
                        NgFor,
                        FontIconComponent,
                        ButtonComponent,
                        TranslateModule,
                        TextComponent,
                        MegaoctetComponent,
                        LinkComponent,
                        LoaderComponent,
                        MatProgressBarModule,
                    ], template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <div class=\"upload-container flex-column\" appDnd (fileDropped)=\"this.onFileDropped($event)\">\n    <div class=\"flex-responsive-ctr g-space-md\">\n      @if (this.inProgressFiles.length > 0) {\n        <div class=\"files-list flex-column g-space-sm\">\n          @for (item of this.inProgressFiles; track item) {\n            <div class=\"flex-column\">\n              <div class=\"flex-row align-center\">\n                <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n                @if (item.progress < 100) {\n                  <ta-text class=\"name\" size=\"sm\">\n                    {{ item.name }}\n                  </ta-text>\n                } @else if (item.progress === 100 && item.completed) {\n                  <ta-link class=\"name\" (action)=\"this.openDocument(item.completed)\" size=\"sm\">{{ item.name }}</ta-link>\n                }\n              </div>\n              <div class=\"extra flex-row g-space-md\">\n                @if (item.progress < 100) {\n                  <mat-progress-bar mode=\"determinate\" [value]=\"item.progress\"></mat-progress-bar>\n                  <ta-link (action)=\"this.deleteInProgressFile(item.name)\" [underline]=\"false\">\n                    <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                  </ta-link>\n                } @else if (item.progress === 100 && item.completed) {\n                  <!-- <ta-text size=\"sm\" class=\"justify-end\">\n                    <ta-megaoctet [octet]=\"item.completed.size\"></ta-megaoctet>\n                  </ta-text> -->\n                  @if (item.completed.id) {\n                    <ta-link (action)=\"this.deleteFile(item.completed.id)\" [underline]=\"false\">\n                      <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                    </ta-link>\n                  }\n                }\n              </div>\n            </div>\n          }\n        </div>\n      }\n      <div class=\"content ta-c\">\n        <input type=\"file\" multiple (change)=\"this.fileBrowseHandler($event.target)\" />\n        <h3>\n          {{ 'input.upload.dragndrop' | translate }}\n        </h3>\n        <div class=\"d-flex\">\n          <ta-button type=\"secondary\" icon=\"add\" class=\"m-a\" (action)=\"this.uploadFile()\">\n            {{ 'input.upload.add' | translate }}\n          </ta-button>\n        </div>\n      </div>\n    </div>\n    @if (this.input.confirmButton) {\n      <div class=\"d-flex\">\n        <ta-button\n          icon=\"check-line\"\n          class=\"justify-end align-center\"\n          (action)=\"this.validation()\"\n          size=\"small\"\n          [state]=\"this.isValidDocumentList() ? 'classic' : 'disabled'\"\n        >\n          {{ 'input.upload.confirm' | translate }}\n        </ta-button>\n      </div>\n    }\n  </div>\n</ta-loader>\n", styles: [".upload-container{display:flex;border:1px dotted var(--ta-border-primary);padding:var(--ta-space-md);gap:var(--ta-space-md)}.upload-container .files-list{width:50%;max-height:500px}.upload-container .files-list ta-font-icon{color:var(--ta-surface-brand-secondary)}.upload-container .files-list .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.upload-container .content{position:relative;background-color:var(--ta-surface-default);padding:var(--ta-space-xl);flex:1}.upload-container .content input{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0;cursor:pointer}\n"] }]
        }], ctorParameters: () => [], propDecorators: { uploadStatusChanged: [{
                type: Output
            }], fileDropEl: [{
                type: ViewChild,
                args: ['fileDropRef', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEUsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFlLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDNUcsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUEwQnBFLE1BQU0sT0FBTyxlQUFnQixTQUFRLHdCQUFxQztJQVV4RTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBVkEsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUkzQyxzQkFBaUIsR0FBRyxNQUFNLENBQUMsa0JB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QUMsQ0FBQztJQUMvQixDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxZQUFZLENBQUMsSUFBZ0I7UUFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3ZDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDOytHQTNKVSxlQUFlO21HQUFmLGVBQWUsc1FDdkM1Qix1MUZBaUVBLHNwQkRwQ0ksaUJBQWlCLG1GQUNqQixlQUFlLDZKQUNmLGVBQWUsNEZBQ2YsYUFBYSx5RkFFYixhQUFhLGlJQUNiLGVBQWUsd0dBQ2Ysb0JBQW9COzs0RkFHWCxlQUFlO2tCQWxCM0IsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZixJQUFJLFdBQ1A7d0JBQ1AsSUFBSTt3QkFDSixLQUFLO3dCQUNMLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2Ysb0JBQW9CO3FCQUNyQjt3REFHUyxtQkFBbUI7c0JBQTVCLE1BQU07Z0JBRXNDLFVBQVU7c0JBQXRELFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nRm9yLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcblxuaW1wb3J0IHsgRmlsZVBpY2tlciwgUGlja2VkRmlsZSB9IGZyb20gJ0BjYXBhd2Vzb21lL2NhcGFjaXRvci1maWxlLXBpY2tlcic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRVcGxvYWQsIElucHV0VXBsb2FkVmFsdWUgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBEb2N1bWVudER0bywgVGFEb2N1bWVudHNTZXJ2aWNlIH0gZnJvbSAnQHRhL3NlcnZpY2VzJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCwgTGlua0NvbXBvbmVudCwgTG9hZGVyQ29tcG9uZW50LCBNZWdhb2N0ZXRDb21wb25lbnQsIFRleHRDb21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgZG93bmxvYWRGaWxlLCBpc05vbk51bGxhYmxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QuY29tcG9uZW50JztcblxudHlwZSBJblByb2dyZXNzRmlsZSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcm9ncmVzczogbnVtYmVyO1xuICBjb21wbGV0ZWQ6IERvY3VtZW50RHRvIHwgbnVsbDtcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWlucHV0LXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgTmdGb3IsXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBUZXh0Q29tcG9uZW50LFxuICAgIE1lZ2FvY3RldENvbXBvbmVudCxcbiAgICBMaW5rQ29tcG9uZW50LFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0VXBsb2FkPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSB1cGxvYWRTdGF0dXNDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVEcm9wUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pIGZpbGVEcm9wRWwhOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2RvY3VtZW50c1NlcnZpY2UgPSBpbmplY3QoVGFEb2N1bWVudHNTZXJ2aWNlKTtcbiAgcHJpdmF0ZSBfaW52ZXJ2YWxJZDogbnVtYmVyO1xuXG4gIHB1YmxpYyBpblByb2dyZXNzRmlsZXM6IEluUHJvZ3Jlc3NGaWxlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faW52ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaW5Qcm9ncmVzc0ZpbGVzIHx8IHRoaXMuaW5Qcm9ncmVzc0ZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgdGhpcy5pblByb2dyZXNzRmlsZXMpIHtcbiAgICAgICAgaWYgKGZpbGUucHJvZ3Jlc3MgPT09IDEwMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWxlLnByb2dyZXNzID49IDk1KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZmlsZS5wcm9ncmVzcyArPSA1O1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSAmJiB0aGlzLmlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGlkcyA9IHRoaXMuaW5wdXQudmFsdWUubWFwKGZpbGUgPT4gZmlsZS5pZCk7XG4gICAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuICAgICAgdGhpcy5fZG9jdW1lbnRzU2VydmljZS5mZXRjaERvY3VtZW50cyQoaWRzKS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZG9jdW1lbnRzID0gdGhpcy5fZG9jdW1lbnRzU2VydmljZS5nZXREb2N1bWVudHMoaWRzKTtcbiAgICAgICAgICBmb3IgKGxldCBkb2Mgb2YgZG9jdW1lbnRzID8/IFtdKSB7XG4gICAgICAgICAgICB0aGlzLmluUHJvZ3Jlc3NGaWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogZG9jLmRlc2NyaXB0aW9uID8/ICcnLFxuICAgICAgICAgICAgICBjb21wbGV0ZWQ6IGRvYyxcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlcXVlc3RTdGF0ZS5jb21wbGV0ZWQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnZlcnZhbElkKTtcbiAgfVxuICBwdWJsaWMgb25GaWxlRHJvcHBlZCgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMucHJlcGFyZUZpbGVzTGlzdCgkZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGZpbGVCcm93c2VIYW5kbGVyKGZpbGVzOiBhbnkpIHtcbiAgICB0aGlzLnByZXBhcmVGaWxlc0xpc3QoZmlsZXMuZmlsZXMpO1xuICB9XG5cbiAgcHVibGljIG9wZW5Eb2N1bWVudChkb2M6IERvY3VtZW50RHRvKSB7XG4gICAgZG93bmxvYWRGaWxlKGRvYy51cmwpO1xuICB9XG5cbiAgcHVibGljIGlzVmFsaWREb2N1bWVudExpc3QoKSB7XG4gICAgaWYgKHRoaXMuaW5Qcm9ncmVzc0ZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gIXRoaXMuaW5Qcm9ncmVzc0ZpbGVzLmZpbmQoZmlsZSA9PiBmaWxlLnByb2dyZXNzIDwgMTAwKTtcbiAgfVxuICBwdWJsaWMgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCB2YWx1ZXM6IElucHV0VXBsb2FkVmFsdWVbXSA9IHRoaXMuaW5Qcm9ncmVzc0ZpbGVzXG4gICAgICAubWFwKGZpbGUgPT5cbiAgICAgICAgZmlsZS5jb21wbGV0ZWRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgaWQ6IGZpbGUuY29tcGxldGVkLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBmaWxlLmNvbXBsZXRlZC5kZXNjcmlwdGlvbiA/PyAnJyxcbiAgICAgICAgICAgICAgdXJsOiBmaWxlLmNvbXBsZXRlZC51cmwsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgICAuZmlsdGVyKGlzTm9uTnVsbGFibGUpO1xuXG4gICAgdGhpcy5pbnB1dC5jb25maXJtVmFsdWUodmFsdWVzKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVJblByb2dyZXNzRmlsZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmluUHJvZ3Jlc3NGaWxlcyA9IHRoaXMuaW5Qcm9ncmVzc0ZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUubmFtZSAhPT0gbmFtZSk7XG4gICAgdGhpcy5fcmVmcmVzaFVwbG9hZFN0YXR1cygpO1xuICB9XG4gIHB1YmxpYyBkZWxldGVGaWxlKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmluUHJvZ3Jlc3NGaWxlcyA9IHRoaXMuaW5Qcm9ncmVzc0ZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuY29tcGxldGVkPy5pZCAhPT0gaWQpO1xuICAgIHRoaXMuX3JlZnJlc2hVcGxvYWRTdGF0dXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVwYXJlRmlsZXNMaXN0KGZpbGVzOiBGaWxlW10pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGluUHJvZ3Jlc3NGaWxlOiBJblByb2dyZXNzRmlsZSA9IHtcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgY29tcGxldGVkOiBudWxsLFxuICAgICAgfTtcbiAgICAgIHRoaXMuaW5Qcm9ncmVzc0ZpbGVzLnB1c2goaW5Qcm9ncmVzc0ZpbGUpO1xuICAgICAgdGhpcy51cGxvYWRTdGF0dXNDaGFuZ2VkLmVtaXQoZmFsc2UpO1xuXG4gICAgICB0aGlzLl9kb2N1bWVudHNTZXJ2aWNlLmFkZERvY3VtZW50JCh7IGZpbGU6IGl0ZW0gfSkuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogZGF0YSA9PiB7XG4gICAgICAgICAgaW5Qcm9ncmVzc0ZpbGUucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgaW5Qcm9ncmVzc0ZpbGUuY29tcGxldGVkID0gZGF0YTtcblxuICAgICAgICAgIHRoaXMuX3JlZnJlc2hVcGxvYWRTdGF0dXMoKTtcbiAgICAgICAgICBpZiAoIXRoaXMuaW5wdXQuY29uZmlybUJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHVwbG9hZEZpbGUoKSB7XG4gICAgLy8gdG9kbyBtb3ZlIGludG8gYSBjYXBhY2l0b3IgZmlsZXN5c3RlbSBzZXJ2aWNlXG4gICAgY29uc3QgcGlja0ZpbGVzID0gYXdhaXQgRmlsZVBpY2tlci5waWNrRmlsZXMoe1xuICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICB0eXBlczogW1xuICAgICAgICAvLyBwZGZcbiAgICAgICAgJ2FwcGxpY2F0aW9uL3BkZicsXG4gICAgICAgIC8vIHdvcmRcbiAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgICAgICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICAgICAgIC8vIGV4Y2VsXG4gICAgICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAgICAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuICAgICAgICAvLyB0ZXh0XG4gICAgICAgICd0ZXh0L3BsYWluJyxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGZpbGUgb2YgcGlja0ZpbGVzLmZpbGVzKSB7XG4gICAgICBpZiAoIWZpbGUgfHwgIWZpbGUuYmxvYikgY29udGludWU7XG5cbiAgICAgIGZpbGVzLnB1c2godGhpcy5fbG9jYWxUb0ZpbGUoZmlsZSkpO1xuICAgIH1cbiAgICB0aGlzLnByZXBhcmVGaWxlc0xpc3QoZmlsZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmcmVzaFVwbG9hZFN0YXR1cygpIHtcbiAgICBjb25zdCBhbGxDb21wbGV0ZSA9IHRoaXMuaW5Qcm9ncmVzc0ZpbGVzLmV2ZXJ5KGZpbGUgPT4gZmlsZS5wcm9ncmVzcyA9PT0gMTAwKTtcbiAgICB0aGlzLnVwbG9hZFN0YXR1c0NoYW5nZWQuZW1pdChhbGxDb21wbGV0ZSk7XG4gIH1cblxuICBwcml2YXRlIF9sb2NhbFRvRmlsZShmaWxlOiBQaWNrZWRGaWxlKTogRmlsZSB7XG4gICAgcmV0dXJuIG5ldyBGaWxlKFtmaWxlLmJsb2IhXSwgZmlsZS5uYW1lLCB7XG4gICAgICB0eXBlOiBmaWxlLm1pbWVUeXBlLFxuICAgIH0pO1xuICB9XG59XG4iLCI8dGEtbG9hZGVyIFtpc0xvYWRpbmddPVwidGhpcy5yZXF1ZXN0U3RhdGUuaXNMb2FkaW5nKClcIj5cbiAgPGRpdiBjbGFzcz1cInVwbG9hZC1jb250YWluZXIgZmxleC1jb2x1bW5cIiBhcHBEbmQgKGZpbGVEcm9wcGVkKT1cInRoaXMub25GaWxlRHJvcHBlZCgkZXZlbnQpXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgtcmVzcG9uc2l2ZS1jdHIgZy1zcGFjZS1tZFwiPlxuICAgICAgQGlmICh0aGlzLmluUHJvZ3Jlc3NGaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlcy1saXN0IGZsZXgtY29sdW1uIGctc3BhY2Utc21cIj5cbiAgICAgICAgICBAZm9yIChpdGVtIG9mIHRoaXMuaW5Qcm9ncmVzc0ZpbGVzOyB0cmFjayBpdGVtKSB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtcm93IGFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDx0YS1mb250LWljb24gbmFtZT1cImRvY1wiIHNpemU9XCJ4c1wiPjwvdGEtZm9udC1pY29uPlxuICAgICAgICAgICAgICAgIEBpZiAoaXRlbS5wcm9ncmVzcyA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgPHRhLXRleHQgY2xhc3M9XCJuYW1lXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0ubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgPC90YS10ZXh0PlxuICAgICAgICAgICAgICAgIH0gQGVsc2UgaWYgKGl0ZW0ucHJvZ3Jlc3MgPT09IDEwMCAmJiBpdGVtLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgPHRhLWxpbmsgY2xhc3M9XCJuYW1lXCIgKGFjdGlvbik9XCJ0aGlzLm9wZW5Eb2N1bWVudChpdGVtLmNvbXBsZXRlZClcIiBzaXplPVwic21cIj57eyBpdGVtLm5hbWUgfX08L3RhLWxpbms+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhIGZsZXgtcm93IGctc3BhY2UtbWRcIj5cbiAgICAgICAgICAgICAgICBAaWYgKGl0ZW0ucHJvZ3Jlc3MgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgIDxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJkZXRlcm1pbmF0ZVwiIFt2YWx1ZV09XCJpdGVtLnByb2dyZXNzXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICAgICAgICAgICAgICAgICAgPHRhLWxpbmsgKGFjdGlvbik9XCJ0aGlzLmRlbGV0ZUluUHJvZ3Jlc3NGaWxlKGl0ZW0ubmFtZSlcIiBbdW5kZXJsaW5lXT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0YS1mb250LWljb24gbmFtZT1cImNsb3NlXCIgdHlwZT1cInNtXCI+PC90YS1mb250LWljb24+XG4gICAgICAgICAgICAgICAgICA8L3RhLWxpbms+XG4gICAgICAgICAgICAgICAgfSBAZWxzZSBpZiAoaXRlbS5wcm9ncmVzcyA9PT0gMTAwICYmIGl0ZW0uY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICA8IS0tIDx0YS10ZXh0IHNpemU9XCJzbVwiIGNsYXNzPVwianVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhLW1lZ2FvY3RldCBbb2N0ZXRdPVwiaXRlbS5jb21wbGV0ZWQuc2l6ZVwiPjwvdGEtbWVnYW9jdGV0PlxuICAgICAgICAgICAgICAgICAgPC90YS10ZXh0PiAtLT5cbiAgICAgICAgICAgICAgICAgIEBpZiAoaXRlbS5jb21wbGV0ZWQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgPHRhLWxpbmsgKGFjdGlvbik9XCJ0aGlzLmRlbGV0ZUZpbGUoaXRlbS5jb21wbGV0ZWQuaWQpXCIgW3VuZGVybGluZV09XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0YS1mb250LWljb24gbmFtZT1cImNsb3NlXCIgdHlwZT1cInNtXCI+PC90YS1mb250LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGEtbGluaz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50IHRhLWNcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgKGNoYW5nZSk9XCJ0aGlzLmZpbGVCcm93c2VIYW5kbGVyKCRldmVudC50YXJnZXQpXCIgLz5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIHt7ICdpbnB1dC51cGxvYWQuZHJhZ25kcm9wJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgPHRhLWJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgaWNvbj1cImFkZFwiIGNsYXNzPVwibS1hXCIgKGFjdGlvbik9XCJ0aGlzLnVwbG9hZEZpbGUoKVwiPlxuICAgICAgICAgICAge3sgJ2lucHV0LnVwbG9hZC5hZGQnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC90YS1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgQGlmICh0aGlzLmlucHV0LmNvbmZpcm1CdXR0b24pIHtcbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgPHRhLWJ1dHRvblxuICAgICAgICAgIGljb249XCJjaGVjay1saW5lXCJcbiAgICAgICAgICBjbGFzcz1cImp1c3RpZnktZW5kIGFsaWduLWNlbnRlclwiXG4gICAgICAgICAgKGFjdGlvbik9XCJ0aGlzLnZhbGlkYXRpb24oKVwiXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBbc3RhdGVdPVwidGhpcy5pc1ZhbGlkRG9jdW1lbnRMaXN0KCkgPyAnY2xhc3NpYycgOiAnZGlzYWJsZWQnXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7ICdpbnB1dC51cGxvYWQuY29uZmlybScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC90YS1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gIDwvZGl2PlxuPC90YS1sb2FkZXI+XG4iXX0=
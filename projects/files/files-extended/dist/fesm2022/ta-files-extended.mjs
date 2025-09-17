import { AsyncPipe, NgIf, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component, Injectable, NgModule } from '@angular/core';
import { FileListComponent, TaFilesBasicModule } from '@ta/files-basic';
import { ToggleNavigationComponent, TaMenuModule } from '@ta/menu';
import { ActionButtonComponent, ButtonComponent, LoaderComponent, ErrorComponent, TaContainerModule, TaUiModule, TaCardModule } from '@ta/ui';
import { pathToFile, pickImages, TaBaseComponent, TaDirectivePipeModule } from '@ta/utils';
import { Camera, CameraResultType } from '@capacitor/camera';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { InputPanel, InputDropdown, InputTextarea } from '@ta/form-model';
import { TaFormModule } from '@ta/form-basic';
import { TaFormInputsModule } from '@ta/form-input';
import { TaIconsModule } from '@ta/icons';
import { TaEnumerationService } from '@ta/services';

class UploadComponent {
    constructor() {
        this.features = [];
        this.canSelectMultipleFiles = false;
        this.showInActionButton = true;
        this.filesPicked = new EventEmitter();
    }
    get addActions() {
        const actionsAvailable = [];
        if (this._haveFeature('take-pic')) {
            actionsAvailable.push({
                label: 'Take',
                icon: 'add_a_photo',
                callback: _ => this._takePic(),
            });
        }
        if (this._haveFeature('upload-pic')) {
            actionsAvailable.push({
                label: 'Upload',
                icon: 'insert_photo',
                callback: _ => this._uploadPic(),
            });
        }
        if (this._haveFeature('upload-file')) {
            actionsAvailable.push({
                label: 'upload file',
                icon: 'upload_file',
                callback: _ => this._uploadFile(),
            });
        }
        return actionsAvailable;
    }
    _haveFeature(feature) {
        return this.features.includes(feature);
    }
    async _takePic() {
        const image = await Camera.getPhoto({
            quality: 60,
            allowEditing: true,
            saveToGallery: true,
            resultType: CameraResultType.Uri,
        });
        const file = {
            file: await pathToFile(image),
            localUrl: image.webPath || null,
        };
        if (!file.file) {
            return;
        }
        this.filesPicked.emit([file]);
    }
    async _uploadPic() {
        const pics = await pickImages();
        this.filesPicked.emit(pics);
    }
    async _uploadFile() {
        // todo move into a capacitor filesystem service
        const pickFiles = await FilePicker.pickFiles({
            multiple: this.canSelectMultipleFiles,
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
            files.push({ file: this._localToFile(file), localUrl: null });
        }
        this.filesPicked.emit(files);
    }
    _localToFile(file) {
        return new File([file.blob], file.name, {
            type: file.mimeType,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UploadComponent, isStandalone: true, selector: "ta-files-upload", inputs: { features: "features", canSelectMultipleFiles: "canSelectMultipleFiles", showInActionButton: "showInActionButton" }, outputs: { filesPicked: "filesPicked" }, ngImport: i0, template: "@if (this.showInActionButton) {\n  <ta-action-button [actions]=\"this.addActions\"> </ta-action-button>\n} @else {\n  @for (action of this.addActions; track action) {\n    <ta-button (action)=\"action.callback()\">\n      {{ action.label }}\n    </ta-button>\n  }\n}\n", styles: [""], dependencies: [{ kind: "component", type: ActionButtonComponent, selector: "ta-action-button", inputs: ["actions"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-files-upload', standalone: true, imports: [ActionButtonComponent, ButtonComponent], template: "@if (this.showInActionButton) {\n  <ta-action-button [actions]=\"this.addActions\"> </ta-action-button>\n} @else {\n  @for (action of this.addActions; track action) {\n    <ta-button (action)=\"action.callback()\">\n      {{ action.label }}\n    </ta-button>\n  }\n}\n" }]
        }], propDecorators: { features: [{
                type: Input
            }], canSelectMultipleFiles: [{
                type: Input
            }], showInActionButton: [{
                type: Input
            }], filesPicked: [{
                type: Output
            }] } });

class FilesDisplayComponent extends TaBaseComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FilesDisplayComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: FilesDisplayComponent, isStandalone: true, selector: "ta-files-display", inputs: { files$: "files$", menu: "menu", canAddFile: "canAddFile", tempFiles: "tempFiles", fileType: "fileType" }, outputs: { fileSelected: "fileSelected", moreInformationSelected: "moreInformationSelected", fileUploading: "fileUploading" }, usesInheritance: true, ngImport: i0, template: "<div class=\"toggle-navigation\">\n  <ta-toggle-navigation [menu]=\"this.menu\" [container]=\"'tab'\"></ta-toggle-navigation>\n</div>\n\n@if (this.canDisplayTempsFiles) {\n  <div>\n    <ta-files-list [files]=\"this.tempFiles\"></ta-files-list>\n    <hr />\n  </div>\n}\n\n<ta-loader [isLoading]=\"this.requestState.isLoading()\" skeleton=\"fileList\">\n  <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n    <div class=\"list\">\n      <ta-files-list\n        [files]=\"(this.files$ | async) || []\"\n        (fileSelected)=\"this.fileSelected.emit($event)\"\n        (moreInformationSelected)=\"this.moreInformationSelected.emit($event)\"\n      >\n      </ta-files-list>\n    </div>\n  </ta-error>\n</ta-loader>\n\n@if (this.canAddFile === true) {\n  <div class=\"floating-add\">\n    <ta-files-upload\n      [features]=\"this.getFeature()\"\n      [canSelectMultipleFiles]=\"this.canSelectMultipleFiles\"\n      (filesPicked)=\"this.fileUploading.emit($event)\"\n    >\n    </ta-files-upload>\n  </div>\n}\n", styles: [".toggle-navigation{margin-bottom:var(--ta-space-sm)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: UploadComponent, selector: "ta-files-upload", inputs: ["features", "canSelectMultipleFiles", "showInActionButton"], outputs: ["filesPicked"] }, { kind: "component", type: ToggleNavigationComponent, selector: "ta-toggle-navigation", inputs: ["menu", "container"] }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FilesDisplayComponent, decorators: [{
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

class UploadDocumentFormService {
    constructor() { }
    getGroupForm(data) {
        return [
            new InputPanel({
                key: 'panel',
                label: 'documents.upload.dialog.title',
                containerClass: ['highlight-title', 'no-title-space', 'p-20'],
                children: [
                    new InputDropdown({
                        key: 'documentType',
                        label: 'documents.upload.dialog.document-type',
                        options$: data.documentTypes$.pipe(map((fileTypes) => {
                            return fileTypes.map(fileType => {
                                return {
                                    id: fileType.id.toString(),
                                    name: fileType.translatedValue,
                                };
                            });
                        })),
                        multiple: false,
                        visible$: of(true),
                    }),
                    new InputTextarea({
                        key: 'description',
                        label: 'documents.upload.dialog.description',
                        value: data.description,
                    }),
                ],
            }),
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadDocumentFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadDocumentFormService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadDocumentFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaFilesExtendedModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FilesDisplayComponent, UploadComponent, TaFilesBasicModule } from '@ta/library-name';
 */
class TaFilesExtendedModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFilesExtendedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaFilesExtendedModule, imports: [TaContainerModule,
            TaDirectivePipeModule,
            TaFormModule,
            TaUiModule,
            TaCardModule,
            CommonModule,
            TaFormInputsModule,
            TaFilesBasicModule,
            TaIconsModule,
            TaMenuModule,
            FilesDisplayComponent,
            UploadComponent], exports: [FilesDisplayComponent, UploadComponent, TaFilesBasicModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFilesExtendedModule, providers: [TaEnumerationService, UploadDocumentFormService], imports: [TaContainerModule,
            TaDirectivePipeModule,
            TaFormModule,
            TaUiModule,
            TaCardModule,
            CommonModule,
            TaFormInputsModule,
            TaFilesBasicModule,
            TaIconsModule,
            TaMenuModule,
            FilesDisplayComponent,
            UploadComponent, TaFilesBasicModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFilesExtendedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        TaContainerModule,
                        TaDirectivePipeModule,
                        TaFormModule,
                        TaUiModule,
                        TaCardModule,
                        CommonModule,
                        TaFormInputsModule,
                        TaFilesBasicModule,
                        TaIconsModule,
                        TaMenuModule,
                        FilesDisplayComponent,
                        UploadComponent,
                    ],
                    exports: [FilesDisplayComponent, UploadComponent, TaFilesBasicModule],
                    providers: [TaEnumerationService, UploadDocumentFormService],
                }]
        }] });

/*
 * Public API Surface of files
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FilesDisplayComponent, TaFilesExtendedModule, UploadComponent, UploadDocumentFormService };
//# sourceMappingURL=ta-files-extended.mjs.map

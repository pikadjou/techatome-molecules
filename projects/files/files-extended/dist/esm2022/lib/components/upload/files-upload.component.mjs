import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { ActionButtonComponent, ButtonComponent } from '@ta/ui';
import { pathToFile, pickImages } from '@ta/utils';
import * as i0 from "@angular/core";
export class UploadComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UploadComponent, isStandalone: true, selector: "ta-files-upload", inputs: { features: "features", canSelectMultipleFiles: "canSelectMultipleFiles", showInActionButton: "showInActionButton" }, outputs: { filesPicked: "filesPicked" }, ngImport: i0, template: "@if (this.showInActionButton) {\n  <ta-action-button [actions]=\"this.addActions\"> </ta-action-button>\n} @else {\n  @for (action of this.addActions; track action) {\n    <ta-button (action)=\"action.callback()\">\n      {{ action.label }}\n    </ta-button>\n  }\n}\n", styles: [""], dependencies: [{ kind: "component", type: ActionButtonComponent, selector: "ta-action-button", inputs: ["actions"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91cGxvYWQvZmlsZXMtdXBsb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91cGxvYWQvZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxtQ0FBbUMsQ0FBQztBQUUzRSxPQUFPLEVBQUUscUJBQXFCLEVBQW9CLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNsRixPQUFPLEVBQWlCLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBV2xFLE1BQU0sT0FBTyxlQUFlO0lBUDVCO1FBU0UsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUd6QiwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFHeEMsdUJBQWtCLEdBQVksSUFBSSxDQUFDO1FBR25DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7S0E0Rm5EO0lBMUZDLElBQUksVUFBVTtRQUNaLE1BQU0sZ0JBQWdCLEdBQXVCLEVBQUUsQ0FBQztRQUVoRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNsQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxhQUFhO2dCQUNuQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2FBQy9C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LENBQUMsUUFBUTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDOytHQXRHVSxlQUFlO21HQUFmLGVBQWUsa1BDakI1Qiw4UUFTQSwwRERNWSxxQkFBcUIsa0ZBQUUsZUFBZTs7NEZBRXJDLGVBQWU7a0JBUDNCLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDOzhCQUlqRCxRQUFRO3NCQURQLEtBQUs7Z0JBSU4sc0JBQXNCO3NCQURyQixLQUFLO2dCQUlOLGtCQUFrQjtzQkFEakIsS0FBSztnQkFJTixXQUFXO3NCQURWLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYW1lcmEsIENhbWVyYVJlc3VsdFR5cGUgfSBmcm9tICdAY2FwYWNpdG9yL2NhbWVyYSc7XG5pbXBvcnQgeyBGaWxlUGlja2VyLCBQaWNrZWRGaWxlIH0gZnJvbSAnQGNhcGF3ZXNvbWUvY2FwYWNpdG9yLWZpbGUtcGlja2VyJztcblxuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50LCBBY3Rpb25CdXR0b25EYXRhLCBCdXR0b25Db21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgRmlsZVN0cnVjdHVyZSwgcGF0aFRvRmlsZSwgcGlja0ltYWdlcyB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmV4cG9ydCB0eXBlIEZlYXR1cmUgPSAndGFrZS1waWMnIHwgJ3VwbG9hZC1waWMnIHwgJ3VwbG9hZC1maWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtZmlsZXMtdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGVzLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGVzLXVwbG9hZC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQWN0aW9uQnV0dG9uQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBmZWF0dXJlczogRmVhdHVyZVtdID0gW107XG5cbiAgQElucHV0KClcbiAgY2FuU2VsZWN0TXVsdGlwbGVGaWxlczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNob3dJbkFjdGlvbkJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIGZpbGVzUGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlU3RydWN0dXJlW10+KCk7XG5cbiAgZ2V0IGFkZEFjdGlvbnMoKTogQWN0aW9uQnV0dG9uRGF0YVtdIHtcbiAgICBjb25zdCBhY3Rpb25zQXZhaWxhYmxlOiBBY3Rpb25CdXR0b25EYXRhW10gPSBbXTtcblxuICAgIGlmICh0aGlzLl9oYXZlRmVhdHVyZSgndGFrZS1waWMnKSkge1xuICAgICAgYWN0aW9uc0F2YWlsYWJsZS5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdUYWtlJyxcbiAgICAgICAgaWNvbjogJ2FkZF9hX3Bob3RvJyxcbiAgICAgICAgY2FsbGJhY2s6IF8gPT4gdGhpcy5fdGFrZVBpYygpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhdmVGZWF0dXJlKCd1cGxvYWQtcGljJykpIHtcbiAgICAgIGFjdGlvbnNBdmFpbGFibGUucHVzaCh7XG4gICAgICAgIGxhYmVsOiAnVXBsb2FkJyxcbiAgICAgICAgaWNvbjogJ2luc2VydF9waG90bycsXG4gICAgICAgIGNhbGxiYWNrOiBfID0+IHRoaXMuX3VwbG9hZFBpYygpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhdmVGZWF0dXJlKCd1cGxvYWQtZmlsZScpKSB7XG4gICAgICBhY3Rpb25zQXZhaWxhYmxlLnB1c2goe1xuICAgICAgICBsYWJlbDogJ3VwbG9hZCBmaWxlJyxcbiAgICAgICAgaWNvbjogJ3VwbG9hZF9maWxlJyxcbiAgICAgICAgY2FsbGJhY2s6IF8gPT4gdGhpcy5fdXBsb2FkRmlsZSgpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbnNBdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIF9oYXZlRmVhdHVyZShmZWF0dXJlOiBGZWF0dXJlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMuaW5jbHVkZXMoZmVhdHVyZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF90YWtlUGljKCkge1xuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgQ2FtZXJhLmdldFBob3RvKHtcbiAgICAgIHF1YWxpdHk6IDYwLFxuICAgICAgYWxsb3dFZGl0aW5nOiB0cnVlLFxuICAgICAgc2F2ZVRvR2FsbGVyeTogdHJ1ZSxcbiAgICAgIHJlc3VsdFR5cGU6IENhbWVyYVJlc3VsdFR5cGUuVXJpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZSA9IHtcbiAgICAgIGZpbGU6IGF3YWl0IHBhdGhUb0ZpbGUoaW1hZ2UpLFxuICAgICAgbG9jYWxVcmw6IGltYWdlLndlYlBhdGggfHwgbnVsbCxcbiAgICB9O1xuICAgIGlmICghZmlsZS5maWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlsZXNQaWNrZWQuZW1pdChbZmlsZV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBsb2FkUGljKCkge1xuICAgIGNvbnN0IHBpY3MgPSBhd2FpdCBwaWNrSW1hZ2VzKCk7XG4gICAgdGhpcy5maWxlc1BpY2tlZC5lbWl0KHBpY3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBsb2FkRmlsZSgpIHtcbiAgICAvLyB0b2RvIG1vdmUgaW50byBhIGNhcGFjaXRvciBmaWxlc3lzdGVtIHNlcnZpY2VcbiAgICBjb25zdCBwaWNrRmlsZXMgPSBhd2FpdCBGaWxlUGlja2VyLnBpY2tGaWxlcyh7XG4gICAgICBtdWx0aXBsZTogdGhpcy5jYW5TZWxlY3RNdWx0aXBsZUZpbGVzLFxuICAgICAgdHlwZXM6IFtcbiAgICAgICAgLy8gcGRmXG4gICAgICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgICAvLyB3b3JkXG4gICAgICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICAgICAgICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxuICAgICAgICAvLyBleGNlbFxuICAgICAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcbiAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyxcbiAgICAgICAgLy8gdGV4dFxuICAgICAgICAndGV4dC9wbGFpbicsXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBmaWxlIG9mIHBpY2tGaWxlcy5maWxlcykge1xuICAgICAgaWYgKCFmaWxlIHx8ICFmaWxlLmJsb2IpIGNvbnRpbnVlO1xuXG4gICAgICBmaWxlcy5wdXNoKHsgZmlsZTogdGhpcy5fbG9jYWxUb0ZpbGUoZmlsZSksIGxvY2FsVXJsOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZmlsZXNQaWNrZWQuZW1pdChmaWxlcyk7XG4gIH1cblxuICBwcml2YXRlIF9sb2NhbFRvRmlsZShmaWxlOiBQaWNrZWRGaWxlKTogRmlsZSB7XG4gICAgcmV0dXJuIG5ldyBGaWxlKFtmaWxlLmJsb2IhXSwgZmlsZS5uYW1lLCB7XG4gICAgICB0eXBlOiBmaWxlLm1pbWVUeXBlLFxuICAgIH0pO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuc2hvd0luQWN0aW9uQnV0dG9uKSB7XG4gIDx0YS1hY3Rpb24tYnV0dG9uIFthY3Rpb25zXT1cInRoaXMuYWRkQWN0aW9uc1wiPiA8L3RhLWFjdGlvbi1idXR0b24+XG59IEBlbHNlIHtcbiAgQGZvciAoYWN0aW9uIG9mIHRoaXMuYWRkQWN0aW9uczsgdHJhY2sgYWN0aW9uKSB7XG4gICAgPHRhLWJ1dHRvbiAoYWN0aW9uKT1cImFjdGlvbi5jYWxsYmFjaygpXCI+XG4gICAgICB7eyBhY3Rpb24ubGFiZWwgfX1cbiAgICA8L3RhLWJ1dHRvbj5cbiAgfVxufVxuIl19
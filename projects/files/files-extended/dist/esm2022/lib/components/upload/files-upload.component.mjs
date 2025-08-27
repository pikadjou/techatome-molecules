import { NgFor, NgIf } from '@angular/common';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UploadComponent, isStandalone: true, selector: "ta-files-upload", inputs: { features: "features", canSelectMultipleFiles: "canSelectMultipleFiles", showInActionButton: "showInActionButton" }, outputs: { filesPicked: "filesPicked" }, ngImport: i0, template: "@if (this.showInActionButton) {\n  <ta-action-button [actions]=\"this.addActions\"> </ta-action-button>\n} @else {\n  @for (action of this.addActions; track action) {\n    <ta-button (action)=\"action.callback()\">\n      {{ action.label }}\n    </ta-button>\n  }\n}\n", styles: [""], dependencies: [{ kind: "component", type: ActionButtonComponent, selector: "ta-action-button", inputs: ["actions"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-files-upload', standalone: true, imports: [NgIf, NgFor, ActionButtonComponent, ButtonComponent], template: "@if (this.showInActionButton) {\n  <ta-action-button [actions]=\"this.addActions\"> </ta-action-button>\n} @else {\n  @for (action of this.addActions; track action) {\n    <ta-button (action)=\"action.callback()\">\n      {{ action.label }}\n    </ta-button>\n  }\n}\n" }]
        }], propDecorators: { features: [{
                type: Input
            }], canSelectMultipleFiles: [{
                type: Input
            }], showInActionButton: [{
                type: Input
            }], filesPicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91cGxvYWQvZmlsZXMtdXBsb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91cGxvYWQvZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLG1DQUFtQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBb0IsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2xGLE9BQU8sRUFBaUIsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFXbEUsTUFBTSxPQUFPLGVBQWU7SUFQNUI7UUFTRSxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBR3pCLDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQUd4Qyx1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFHbkMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztLQTRGbkQ7SUExRkMsSUFBSSxVQUFVO1FBQ1osTUFBTSxnQkFBZ0IsR0FBdUIsRUFBRSxDQUFDO1FBRWhELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ2xDLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDcEIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFFB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QUssQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdkMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBdEdVLGVBQWU7bUdBQWYsZUFBZSxrUENsQjVCLDhRQVNBLDBERE95QixxQkFBcUIsa0ZBQUUsZUFBZTs7NEZBRWxELGVBQWU7a0JBUDNCLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxlQUFlLENBQUM7OEJBSTlELFFBQVE7c0JBRFAsS0FBSztnQkFJTixzQkFBc0I7c0JBRHJCLEtBQUs7Z0JBSU4sa0JBQWtCO3NCQURqQixLQUFLO2dCQUlOLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nRm9yLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbWVyYSwgQ2FtZXJhUmVzdWx0VHlwZSB9IGZyb20gJ0BjYXBhY2l0b3IvY2FtZXJhJztcbmltcG9ydCB7IEZpbGVQaWNrZXIsIFBpY2tlZEZpbGUgfSBmcm9tICdAY2FwYXdlc29tZS9jYXBhY2l0b3ItZmlsZS1waWNrZXInO1xuXG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQsIEFjdGlvbkJ1dHRvbkRhdGEsIEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBGaWxlU3RydWN0dXJlLCBwYXRoVG9GaWxlLCBwaWNrSW1hZ2VzIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuZXhwb3J0IHR5cGUgRmVhdHVyZSA9ICd0YWtlLXBpYycgfCAndXBsb2FkLXBpYycgfCAndXBsb2FkLWZpbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1maWxlcy11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBOZ0ZvciwgQWN0aW9uQnV0dG9uQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBmZWF0dXJlczogRmVhdHVyZVtdID0gW107XG5cbiAgQElucHV0KClcbiAgY2FuU2VsZWN0TXVsdGlwbGVGaWxlczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNob3dJbkFjdGlvbkJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIGZpbGVzUGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlU3RydWN0dXJlW10+KCk7XG5cbiAgZ2V0IGFkZEFjdGlvbnMoKTogQWN0aW9uQnV0dG9uRGF0YVtdIHtcbiAgICBjb25zdCBhY3Rpb25zQXZhaWxhYmxlOiBBY3Rpb25CdXR0b25EYXRhW10gPSBbXTtcblxuICAgIGlmICh0aGlzLl9oYXZlRmVhdHVyZSgndGFrZS1waWMnKSkge1xuICAgICAgYWN0aW9uc0F2YWlsYWJsZS5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdUYWtlJyxcbiAgICAgICAgaWNvbjogJ2FkZF9hX3Bob3RvJyxcbiAgICAgICAgY2FsbGJhY2s6IF8gPT4gdGhpcy5fdGFrZVBpYygpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhdmVGZWF0dXJlKCd1cGxvYWQtcGljJykpIHtcbiAgICAgIGFjdGlvbnNBdmFpbGFibGUucHVzaCh7XG4gICAgICAgIGxhYmVsOiAnVXBsb2FkJyxcbiAgICAgICAgaWNvbjogJ2luc2VydF9waG90bycsXG4gICAgICAgIGNhbGxiYWNrOiBfID0+IHRoaXMuX3VwbG9hZFBpYygpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhdmVGZWF0dXJlKCd1cGxvYWQtZmlsZScpKSB7XG4gICAgICBhY3Rpb25zQXZhaWxhYmxlLnB1c2goe1xuICAgICAgICBsYWJlbDogJ3VwbG9hZCBmaWxlJyxcbiAgICAgICAgaWNvbjogJ3VwbG9hZF9maWxlJyxcbiAgICAgICAgY2FsbGJhY2s6IF8gPT4gdGhpcy5fdXBsb2FkRmlsZSgpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbnNBdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIF9oYXZlRmVhdHVyZShmZWF0dXJlOiBGZWF0dXJlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMuaW5jbHVkZXMoZmVhdHVyZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF90YWtlUGljKCkge1xuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgQ2FtZXJhLmdldFBob3RvKHtcbiAgICAgIHF1YWxpdHk6IDYwLFxuICAgICAgYWxsb3dFZGl0aW5nOiB0cnVlLFxuICAgICAgc2F2ZVRvR2FsbGVyeTogdHJ1ZSxcbiAgICAgIHJlc3VsdFR5cGU6IENhbWVyYVJlc3VsdFR5cGUuVXJpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZSA9IHtcbiAgICAgIGZpbGU6IGF3YWl0IHBhdGhUb0ZpbGUoaW1hZ2UpLFxuICAgICAgbG9jYWxVcmw6IGltYWdlLndlYlBhdGggfHwgbnVsbCxcbiAgICB9O1xuICAgIGlmICghZmlsZS5maWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlsZXNQaWNrZWQuZW1pdChbZmlsZV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBsb2FkUGljKCkge1xuICAgIGNvbnN0IHBpY3MgPSBhd2FpdCBwaWNrSW1hZ2VzKCk7XG4gICAgdGhpcy5maWxlc1BpY2tlZC5lbWl0KHBpY3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBsb2FkRmlsZSgpIHtcbiAgICAvLyB0b2RvIG1vdmUgaW50byBhIGNhcGFjaXRvciBmaWxlc3lzdGVtIHNlcnZpY2VcbiAgICBjb25zdCBwaWNrRmlsZXMgPSBhd2FpdCBGaWxlUGlja2VyLnBpY2tGaWxlcyh7XG4gICAgICBtdWx0aXBsZTogdGhpcy5jYW5TZWxlY3RNdWx0aXBsZUZpbGVzLFxuICAgICAgdHlwZXM6IFtcbiAgICAgICAgLy8gcGRmXG4gICAgICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgICAvLyB3b3JkXG4gICAgICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICAgICAgICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxuICAgICAgICAvLyBleGNlbFxuICAgICAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcbiAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyxcbiAgICAgICAgLy8gdGV4dFxuICAgICAgICAndGV4dC9wbGFpbicsXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBmaWxlIG9mIHBpY2tGaWxlcy5maWxlcykge1xuICAgICAgaWYgKCFmaWxlIHx8ICFmaWxlLmJsb2IpIGNvbnRpbnVlO1xuXG4gICAgICBmaWxlcy5wdXNoKHsgZmlsZTogdGhpcy5fbG9jYWxUb0ZpbGUoZmlsZSksIGxvY2FsVXJsOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZmlsZXNQaWNrZWQuZW1pdChmaWxlcyk7XG4gIH1cblxuICBwcml2YXRlIF9sb2NhbFRvRmlsZShmaWxlOiBQaWNrZWRGaWxlKTogRmlsZSB7XG4gICAgcmV0dXJuIG5ldyBGaWxlKFtmaWxlLmJsb2IhXSwgZmlsZS5uYW1lLCB7XG4gICAgICB0eXBlOiBmaWxlLm1pbWVUeXBlLFxuICAgIH0pO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuc2hvd0luQWN0aW9uQnV0dG9uKSB7XG4gIDx0YS1hY3Rpb24tYnV0dG9uIFthY3Rpb25zXT1cInRoaXMuYWRkQWN0aW9uc1wiPiA8L3RhLWFjdGlvbi1idXR0b24+XG59IEBlbHNlIHtcbiAgQGZvciAoYWN0aW9uIG9mIHRoaXMuYWRkQWN0aW9uczsgdHJhY2sgYWN0aW9uKSB7XG4gICAgPHRhLWJ1dHRvbiAoYWN0aW9uKT1cImFjdGlvbi5jYWxsYmFjaygpXCI+XG4gICAgICB7eyBhY3Rpb24ubGFiZWwgfX1cbiAgICA8L3RhLWJ1dHRvbj5cbiAgfVxufVxuIl19
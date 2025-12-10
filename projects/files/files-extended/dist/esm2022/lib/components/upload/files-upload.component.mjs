import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Camera, CameraResultType } from "@capacitor/camera";
import { FilePicker } from "@capawesome/capacitor-file-picker";
import { ActionButtonComponent, ButtonComponent, } from "@ta/ui";
import { pathToFile, pickImages } from "@ta/utils";
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
        if (this._haveFeature("take-pic")) {
            actionsAvailable.push({
                label: "Take",
                icon: "add_a_photo",
                callback: (_) => this._takePic(),
            });
        }
        if (this._haveFeature("upload-pic")) {
            actionsAvailable.push({
                label: "Upload",
                icon: "insert_photo",
                callback: (_) => this._uploadPic(),
            });
        }
        if (this._haveFeature("upload-file")) {
            actionsAvailable.push({
                label: "upload file",
                icon: "upload_file",
                callback: (_) => this._uploadFile(),
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
                "application/pdf",
                // word
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "application/msword",
                // excel
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                // text
                "text/plain",
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UploadComponent, isStandalone: true, selector: "ta-files-upload", inputs: { features: "features", canSelectMultipleFiles: "canSelectMultipleFiles", showInActionButton: "showInActionButton" }, outputs: { filesPicked: "filesPicked" }, ngImport: i0, template: "@if (this.showInActionButton) {\n<ta-action-button [actions]=\"this.addActions\"> </ta-action-button>\n} @else { @for (action of this.addActions; track action) {\n<ta-button (action)=\"action.callback()\">\n  {{ action.label }}\n</ta-button>\n} }\n", styles: [""], dependencies: [{ kind: "component", type: ActionButtonComponent, selector: "ta-action-button", inputs: ["actions"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-files-upload", standalone: true, imports: [ActionButtonComponent, ButtonComponent], template: "@if (this.showInActionButton) {\n<ta-action-button [actions]=\"this.addActions\"> </ta-action-button>\n} @else { @for (action of this.addActions; track action) {\n<ta-button (action)=\"action.callback()\">\n  {{ action.label }}\n</ta-button>\n} }\n" }]
        }], propDecorators: { features: [{
                type: Input
            }], canSelectMultipleFiles: [{
                type: Input
            }], showInActionButton: [{
                type: Input
            }], filesPicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91cGxvYWQvZmlsZXMtdXBsb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91cGxvYWQvZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxtQ0FBbUMsQ0FBQztBQUUzRSxPQUFPLEVBQ0wscUJBQXFCLEVBRXJCLGVBQWUsR0FDaEIsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFpQixVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVdsRSxNQUFNLE9BQU8sZUFBZTtJQVA1QjtRQVNFLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFHekIsMkJBQXNCLEdBQVksS0FBSyxDQUFDO1FBR3hDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQUduQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO0tBNEZuRDtJQTFGQyxJQUFJLFVBQVU7UUFDWixNQUFNLGdCQUFnQixHQUF1QixFQUFFLENBQUM7UUFFaEQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUNwQixLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFF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QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0F0R1UsZUFBZTttR0FBZixlQUFlLGtQQ3JCNUIsMFBBT0EsMEREWVkscUJBQXFCLGtGQUFFLGVBQWU7OzRGQUVyQyxlQUFlO2tCQVAzQixTQUFTOytCQUNFLGlCQUFpQixjQUdmLElBQUksV0FDUCxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQzs4QkFJakQsUUFBUTtzQkFEUCxLQUFLO2dCQUlOLHNCQUFzQjtzQkFEckIsS0FBSztnQkFJTixrQkFBa0I7c0JBRGpCLEtBQUs7Z0JBSU4sV0FBVztzQkFEVixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBDYW1lcmEsIENhbWVyYVJlc3VsdFR5cGUgfSBmcm9tIFwiQGNhcGFjaXRvci9jYW1lcmFcIjtcbmltcG9ydCB7IEZpbGVQaWNrZXIsIFBpY2tlZEZpbGUgfSBmcm9tIFwiQGNhcGF3ZXNvbWUvY2FwYWNpdG9yLWZpbGUtcGlja2VyXCI7XG5cbmltcG9ydCB7XG4gIEFjdGlvbkJ1dHRvbkNvbXBvbmVudCxcbiAgQWN0aW9uQnV0dG9uRGF0YSxcbiAgQnV0dG9uQ29tcG9uZW50LFxufSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBGaWxlU3RydWN0dXJlLCBwYXRoVG9GaWxlLCBwaWNrSW1hZ2VzIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5leHBvcnQgdHlwZSBGZWF0dXJlID0gXCJ0YWtlLXBpY1wiIHwgXCJ1cGxvYWQtcGljXCIgfCBcInVwbG9hZC1maWxlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1maWxlcy11cGxvYWRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9maWxlcy11cGxvYWQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2ZpbGVzLXVwbG9hZC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0FjdGlvbkJ1dHRvbkNvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZmVhdHVyZXM6IEZlYXR1cmVbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGNhblNlbGVjdE11bHRpcGxlRmlsZXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzaG93SW5BY3Rpb25CdXR0b246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBmaWxlc1BpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVN0cnVjdHVyZVtdPigpO1xuXG4gIGdldCBhZGRBY3Rpb25zKCk6IEFjdGlvbkJ1dHRvbkRhdGFbXSB7XG4gICAgY29uc3QgYWN0aW9uc0F2YWlsYWJsZTogQWN0aW9uQnV0dG9uRGF0YVtdID0gW107XG5cbiAgICBpZiAodGhpcy5faGF2ZUZlYXR1cmUoXCJ0YWtlLXBpY1wiKSkge1xuICAgICAgYWN0aW9uc0F2YWlsYWJsZS5wdXNoKHtcbiAgICAgICAgbGFiZWw6IFwiVGFrZVwiLFxuICAgICAgICBpY29uOiBcImFkZF9hX3Bob3RvXCIsXG4gICAgICAgIGNhbGxiYWNrOiAoXykgPT4gdGhpcy5fdGFrZVBpYygpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhdmVGZWF0dXJlKFwidXBsb2FkLXBpY1wiKSkge1xuICAgICAgYWN0aW9uc0F2YWlsYWJsZS5wdXNoKHtcbiAgICAgICAgbGFiZWw6IFwiVXBsb2FkXCIsXG4gICAgICAgIGljb246IFwiaW5zZXJ0X3Bob3RvXCIsXG4gICAgICAgIGNhbGxiYWNrOiAoXykgPT4gdGhpcy5fdXBsb2FkUGljKCksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGF2ZUZlYXR1cmUoXCJ1cGxvYWQtZmlsZVwiKSkge1xuICAgICAgYWN0aW9uc0F2YWlsYWJsZS5wdXNoKHtcbiAgICAgICAgbGFiZWw6IFwidXBsb2FkIGZpbGVcIixcbiAgICAgICAgaWNvbjogXCJ1cGxvYWRfZmlsZVwiLFxuICAgICAgICBjYWxsYmFjazogKF8pID0+IHRoaXMuX3VwbG9hZEZpbGUoKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb25zQXZhaWxhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGF2ZUZlYXR1cmUoZmVhdHVyZTogRmVhdHVyZSkge1xuICAgIHJldHVybiB0aGlzLmZlYXR1cmVzLmluY2x1ZGVzKGZlYXR1cmUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdGFrZVBpYygpIHtcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IENhbWVyYS5nZXRQaG90byh7XG4gICAgICBxdWFsaXR5OiA2MCxcbiAgICAgIGFsbG93RWRpdGluZzogdHJ1ZSxcbiAgICAgIHNhdmVUb0dhbGxlcnk6IHRydWUsXG4gICAgICByZXN1bHRUeXBlOiBDYW1lcmFSZXN1bHRUeXBlLlVyaSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbGUgPSB7XG4gICAgICBmaWxlOiBhd2FpdCBwYXRoVG9GaWxlKGltYWdlKSxcbiAgICAgIGxvY2FsVXJsOiBpbWFnZS53ZWJQYXRoIHx8IG51bGwsXG4gICAgfTtcbiAgICBpZiAoIWZpbGUuZmlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZpbGVzUGlja2VkLmVtaXQoW2ZpbGVdKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwbG9hZFBpYygpIHtcbiAgICBjb25zdCBwaWNzID0gYXdhaXQgcGlja0ltYWdlcygpO1xuICAgIHRoaXMuZmlsZXNQaWNrZWQuZW1pdChwaWNzKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwbG9hZEZpbGUoKSB7XG4gICAgLy8gdG9kbyBtb3ZlIGludG8gYSBjYXBhY2l0b3IgZmlsZXN5c3RlbSBzZXJ2aWNlXG4gICAgY29uc3QgcGlja0ZpbGVzID0gYXdhaXQgRmlsZVBpY2tlci5waWNrRmlsZXMoe1xuICAgICAgbXVsdGlwbGU6IHRoaXMuY2FuU2VsZWN0TXVsdGlwbGVGaWxlcyxcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIC8vIHBkZlxuICAgICAgICBcImFwcGxpY2F0aW9uL3BkZlwiLFxuICAgICAgICAvLyB3b3JkXG4gICAgICAgIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnRcIixcbiAgICAgICAgXCJhcHBsaWNhdGlvbi9tc3dvcmRcIixcbiAgICAgICAgLy8gZXhjZWxcbiAgICAgICAgXCJhcHBsaWNhdGlvbi92bmQubXMtZXhjZWxcIixcbiAgICAgICAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldFwiLFxuICAgICAgICAvLyB0ZXh0XG4gICAgICAgIFwidGV4dC9wbGFpblwiLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbGVzID0gW107XG4gICAgZm9yIChsZXQgZmlsZSBvZiBwaWNrRmlsZXMuZmlsZXMpIHtcbiAgICAgIGlmICghZmlsZSB8fCAhZmlsZS5ibG9iKSBjb250aW51ZTtcblxuICAgICAgZmlsZXMucHVzaCh7IGZpbGU6IHRoaXMuX2xvY2FsVG9GaWxlKGZpbGUpLCBsb2NhbFVybDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbGVzUGlja2VkLmVtaXQoZmlsZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9jYWxUb0ZpbGUoZmlsZTogUGlja2VkRmlsZSk6IEZpbGUge1xuICAgIHJldHVybiBuZXcgRmlsZShbZmlsZS5ibG9iIV0sIGZpbGUubmFtZSwge1xuICAgICAgdHlwZTogZmlsZS5taW1lVHlwZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLnNob3dJbkFjdGlvbkJ1dHRvbikge1xuPHRhLWFjdGlvbi1idXR0b24gW2FjdGlvbnNdPVwidGhpcy5hZGRBY3Rpb25zXCI+IDwvdGEtYWN0aW9uLWJ1dHRvbj5cbn0gQGVsc2UgeyBAZm9yIChhY3Rpb24gb2YgdGhpcy5hZGRBY3Rpb25zOyB0cmFjayBhY3Rpb24pIHtcbjx0YS1idXR0b24gKGFjdGlvbik9XCJhY3Rpb24uY2FsbGJhY2soKVwiPlxuICB7eyBhY3Rpb24ubGFiZWwgfX1cbjwvdGEtYnV0dG9uPlxufSB9XG4iXX0=
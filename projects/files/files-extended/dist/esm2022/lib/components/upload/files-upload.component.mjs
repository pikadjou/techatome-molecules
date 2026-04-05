import { Component, input, output } from "@angular/core";
import { Camera, CameraResultType } from "@capacitor/camera";
import { FilePicker } from "@capawesome/capacitor-file-picker";
import { ActionButtonComponent, ButtonComponent, } from "@ta/ui";
import { pathToFile, pickImages } from "@ta/utils";
import * as i0 from "@angular/core";
export class UploadComponent {
    constructor() {
        this.features = input([]);
        this.canSelectMultipleFiles = input(false);
        this.showInActionButton = input(true);
        this.filesPicked = output();
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
        return this.features().includes(feature);
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
            multiple: this.canSelectMultipleFiles(),
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UploadComponent, isStandalone: true, selector: "ta-files-upload", inputs: { features: { classPropertyName: "features", publicName: "features", isSignal: true, isRequired: false, transformFunction: null }, canSelectMultipleFiles: { classPropertyName: "canSelectMultipleFiles", publicName: "canSelectMultipleFiles", isSignal: true, isRequired: false, transformFunction: null }, showInActionButton: { classPropertyName: "showInActionButton", publicName: "showInActionButton", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { filesPicked: "filesPicked" }, ngImport: i0, template: "@if (this.showInActionButton()) {\n<ta-action-button [actions]=\"this.addActions\"> </ta-action-button>\n} @else { @for (action of this.addActions; track action) {\n<ta-button (action)=\"action.callback()\">\n  {{ action.label }}\n</ta-button>\n} }\n", styles: [""], dependencies: [{ kind: "component", type: ActionButtonComponent, selector: "ta-action-button", inputs: ["actions"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-files-upload", standalone: true, imports: [ActionButtonComponent, ButtonComponent], template: "@if (this.showInActionButton()) {\n<ta-action-button [actions]=\"this.addActions\"> </ta-action-button>\n} @else { @for (action of this.addActions; track action) {\n<ta-button (action)=\"action.callback()\">\n  {{ action.label }}\n</ta-button>\n} }\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91cGxvYWQvZmlsZXMtdXBsb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91cGxvYWQvZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLG1DQUFtQyxDQUFDO0FBRTNFLE9BQU8sRUFDTCxxQkFBcUIsRUFFckIsZUFBZSxHQUNoQixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQWlCLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBV2xFLE1BQU0sT0FBTyxlQUFlO0lBUDVCO1FBUUUsYUFBUSxHQUFHLEtBQUssQ0FBWSxFQUFFLENBQUMsQ0FBQztRQUVoQywyQkFBc0IsR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFL0MsdUJBQWtCLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRTFDLGdCQUFXLEdBQUcsTUFBTSxFQUFtQixDQUFDO0tBNEZ6QztJQTFGQyxJQUFJLFVBQVU7UUFDWixNQUFNLGdCQUFnQixHQUF1QixFQUFFLENBQUM7UUFFaEQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUNwQixLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFF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LElBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdkMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBbEdVLGVBQWU7bUdBQWYsZUFBZSwya0JDckI1Qiw0UEFPQSwwRERZWSxxQkFBcUIsa0ZBQUUsZUFBZTs7NEZBRXJDLGVBQWU7a0JBUDNCLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCwgb3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQ2FtZXJhLCBDYW1lcmFSZXN1bHRUeXBlIH0gZnJvbSBcIkBjYXBhY2l0b3IvY2FtZXJhXCI7XG5pbXBvcnQgeyBGaWxlUGlja2VyLCBQaWNrZWRGaWxlIH0gZnJvbSBcIkBjYXBhd2Vzb21lL2NhcGFjaXRvci1maWxlLXBpY2tlclwiO1xuXG5pbXBvcnQge1xuICBBY3Rpb25CdXR0b25Db21wb25lbnQsXG4gIEFjdGlvbkJ1dHRvbkRhdGEsXG4gIEJ1dHRvbkNvbXBvbmVudCxcbn0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgRmlsZVN0cnVjdHVyZSwgcGF0aFRvRmlsZSwgcGlja0ltYWdlcyB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuZXhwb3J0IHR5cGUgRmVhdHVyZSA9IFwidGFrZS1waWNcIiB8IFwidXBsb2FkLXBpY1wiIHwgXCJ1cGxvYWQtZmlsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtZmlsZXMtdXBsb2FkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9maWxlcy11cGxvYWQuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtBY3Rpb25CdXR0b25Db21wb25lbnQsIEJ1dHRvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZENvbXBvbmVudCB7XG4gIGZlYXR1cmVzID0gaW5wdXQ8RmVhdHVyZVtdPihbXSk7XG5cbiAgY2FuU2VsZWN0TXVsdGlwbGVGaWxlcyA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBzaG93SW5BY3Rpb25CdXR0b24gPSBpbnB1dDxib29sZWFuPih0cnVlKTtcblxuICBmaWxlc1BpY2tlZCA9IG91dHB1dDxGaWxlU3RydWN0dXJlW10+KCk7XG5cbiAgZ2V0IGFkZEFjdGlvbnMoKTogQWN0aW9uQnV0dG9uRGF0YVtdIHtcbiAgICBjb25zdCBhY3Rpb25zQXZhaWxhYmxlOiBBY3Rpb25CdXR0b25EYXRhW10gPSBbXTtcblxuICAgIGlmICh0aGlzLl9oYXZlRmVhdHVyZShcInRha2UtcGljXCIpKSB7XG4gICAgICBhY3Rpb25zQXZhaWxhYmxlLnB1c2goe1xuICAgICAgICBsYWJlbDogXCJUYWtlXCIsXG4gICAgICAgIGljb246IFwiYWRkX2FfcGhvdG9cIixcbiAgICAgICAgY2FsbGJhY2s6IChfKSA9PiB0aGlzLl90YWtlUGljKCksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGF2ZUZlYXR1cmUoXCJ1cGxvYWQtcGljXCIpKSB7XG4gICAgICBhY3Rpb25zQXZhaWxhYmxlLnB1c2goe1xuICAgICAgICBsYWJlbDogXCJVcGxvYWRcIixcbiAgICAgICAgaWNvbjogXCJpbnNlcnRfcGhvdG9cIixcbiAgICAgICAgY2FsbGJhY2s6IChfKSA9PiB0aGlzLl91cGxvYWRQaWMoKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oYXZlRmVhdHVyZShcInVwbG9hZC1maWxlXCIpKSB7XG4gICAgICBhY3Rpb25zQXZhaWxhYmxlLnB1c2goe1xuICAgICAgICBsYWJlbDogXCJ1cGxvYWQgZmlsZVwiLFxuICAgICAgICBpY29uOiBcInVwbG9hZF9maWxlXCIsXG4gICAgICAgIGNhbGxiYWNrOiAoXykgPT4gdGhpcy5fdXBsb2FkRmlsZSgpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbnNBdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIF9oYXZlRmVhdHVyZShmZWF0dXJlOiBGZWF0dXJlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMoKS5pbmNsdWRlcyhmZWF0dXJlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3Rha2VQaWMoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBDYW1lcmEuZ2V0UGhvdG8oe1xuICAgICAgcXVhbGl0eTogNjAsXG4gICAgICBhbGxvd0VkaXRpbmc6IHRydWUsXG4gICAgICBzYXZlVG9HYWxsZXJ5OiB0cnVlLFxuICAgICAgcmVzdWx0VHlwZTogQ2FtZXJhUmVzdWx0VHlwZS5VcmksXG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWxlID0ge1xuICAgICAgZmlsZTogYXdhaXQgcGF0aFRvRmlsZShpbWFnZSksXG4gICAgICBsb2NhbFVybDogaW1hZ2Uud2ViUGF0aCB8fCBudWxsLFxuICAgIH07XG4gICAgaWYgKCFmaWxlLmZpbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5maWxlc1BpY2tlZC5lbWl0KFtmaWxlXSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGxvYWRQaWMoKSB7XG4gICAgY29uc3QgcGljcyA9IGF3YWl0IHBpY2tJbWFnZXMoKTtcbiAgICB0aGlzLmZpbGVzUGlja2VkLmVtaXQocGljcyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGxvYWRGaWxlKCkge1xuICAgIC8vIHRvZG8gbW92ZSBpbnRvIGEgY2FwYWNpdG9yIGZpbGVzeXN0ZW0gc2VydmljZVxuICAgIGNvbnN0IHBpY2tGaWxlcyA9IGF3YWl0IEZpbGVQaWNrZXIucGlja0ZpbGVzKHtcbiAgICAgIG11bHRpcGxlOiB0aGlzLmNhblNlbGVjdE11bHRpcGxlRmlsZXMoKSxcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIC8vIHBkZlxuICAgICAgICBcImFwcGxpY2F0aW9uL3BkZlwiLFxuICAgICAgICAvLyB3b3JkXG4gICAgICAgIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnRcIixcbiAgICAgICAgXCJhcHBsaWNhdGlvbi9tc3dvcmRcIixcbiAgICAgICAgLy8gZXhjZWxcbiAgICAgICAgXCJhcHBsaWNhdGlvbi92bmQubXMtZXhjZWxcIixcbiAgICAgICAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldFwiLFxuICAgICAgICAvLyB0ZXh0XG4gICAgICAgIFwidGV4dC9wbGFpblwiLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbGVzID0gW107XG4gICAgZm9yIChsZXQgZmlsZSBvZiBwaWNrRmlsZXMuZmlsZXMpIHtcbiAgICAgIGlmICghZmlsZSB8fCAhZmlsZS5ibG9iKSBjb250aW51ZTtcblxuICAgICAgZmlsZXMucHVzaCh7IGZpbGU6IHRoaXMuX2xvY2FsVG9GaWxlKGZpbGUpLCBsb2NhbFVybDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbGVzUGlja2VkLmVtaXQoZmlsZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9jYWxUb0ZpbGUoZmlsZTogUGlja2VkRmlsZSk6IEZpbGUge1xuICAgIHJldHVybiBuZXcgRmlsZShbZmlsZS5ibG9iIV0sIGZpbGUubmFtZSwge1xuICAgICAgdHlwZTogZmlsZS5taW1lVHlwZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLnNob3dJbkFjdGlvbkJ1dHRvbigpKSB7XG48dGEtYWN0aW9uLWJ1dHRvbiBbYWN0aW9uc109XCJ0aGlzLmFkZEFjdGlvbnNcIj4gPC90YS1hY3Rpb24tYnV0dG9uPlxufSBAZWxzZSB7IEBmb3IgKGFjdGlvbiBvZiB0aGlzLmFkZEFjdGlvbnM7IHRyYWNrIGFjdGlvbikge1xuPHRhLWJ1dHRvbiAoYWN0aW9uKT1cImFjdGlvbi5jYWxsYmFjaygpXCI+XG4gIHt7IGFjdGlvbi5sYWJlbCB9fVxuPC90YS1idXR0b24+XG59IH1cbiJdfQ==
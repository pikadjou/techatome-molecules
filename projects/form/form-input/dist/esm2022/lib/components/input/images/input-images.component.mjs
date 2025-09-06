import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FileListComponent } from '@ta/files-basic';
import { LocalIconComponent } from '@ta/icons';
import { ButtonComponent } from '@ta/ui';
import { pickImages, removeElement } from '@ta/utils';
import { TaAbstractInputComponent } from '../../abstract.component';
import { FormLabelComponent } from '../../label/label.component';
import { InputImageModal } from './modal/input-images-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class InputImagesComponent extends TaAbstractInputComponent {
    get selection() {
        return this.input.value;
    }
    get fileDataSelection() {
        return this.selection.map(selection => ({
            id: 0,
            type: 'Image',
            url: selection,
        }));
    }
    get isCircularButton() {
        if (!this.selection)
            return false;
        return this.selection.length > 0;
    }
    set selection(value) {
        this.input.formControl?.setValue(value);
    }
    constructor(dialog) {
        super();
        this.dialog = dialog;
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.input.removeFile$) {
            this._registerSubscription(this.input.removeFile$.subscribe(fileData => removeElement(this.selection, fileData.url)));
        }
    }
    async openDialog() {
        if (!this.input.files$) {
            this.selection.push(...(await pickImages()).map(image => image.localUrl));
            return;
        }
        const dialogRef = this.dialog.open(InputImageModal, {
            data: { input: this.input, selection: this.selection },
        });
        this._registerSubscription(dialogRef.afterClosed().subscribe(selection => {
            if (!selection) {
                return;
            }
            this.selection = selection;
        }));
    }
    onFileDeleted(fileData) {
        this.selection = this.selection.filter(url => url !== fileData.url);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImagesComponent, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputImagesComponent, isStandalone: true, selector: "ta-input-images", usesInheritance: true, ngImport: i0, template: "<div class=\"row g-0 align-items-center mb-space-2\">\n  <div class=\"col\">\n    <ta-form-label [input]=\"this.input\"></ta-form-label>\n  </div>\n  <div [ngClass]=\"this.selection.length === 0 ? 'col-12 my-space-2' : 'col-auto'\">\n    <ta-button\n      type=\"secondary\"\n      #focusedElement\n      (action)=\"this.openDialog()\"\n      [options]=\"{ circular: this.isCircularButton }\"\n    >\n      <ta-local-icon [type]=\"this.icon.Gallery\"></ta-local-icon>\n    </ta-button>\n  </div>\n</div>\n\n@if (this.selection.length > 0) {\n  <ta-files-list\n    [files]=\"this.fileDataSelection\"\n    [canDeleteFile]=\"!!this.input.fileDeleted\"\n    (fileDeleted)=\"this.onFileDeleted($event)\"\n  ></ta-files-list>\n}\n", styles: [""], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-images', standalone: true, imports: [NgIf, NgClass, LocalIconComponent, FormLabelComponent, ButtonComponent, FileListComponent], template: "<div class=\"row g-0 align-items-center mb-space-2\">\n  <div class=\"col\">\n    <ta-form-label [input]=\"this.input\"></ta-form-label>\n  </div>\n  <div [ngClass]=\"this.selection.length === 0 ? 'col-12 my-space-2' : 'col-auto'\">\n    <ta-button\n      type=\"secondary\"\n      #focusedElement\n      (action)=\"this.openDialog()\"\n      [options]=\"{ circular: this.isCircularButton }\"\n    >\n      <ta-local-icon [type]=\"this.icon.Gallery\"></ta-local-icon>\n    </ta-button>\n  </div>\n</div>\n\n@if (this.selection.length > 0) {\n  <ta-files-list\n    [files]=\"this.fileDataSelection\"\n    [canDeleteFile]=\"!!this.input.fileDeleted\"\n    (fileDeleted)=\"this.onFileDeleted($event)\"\n  ></ta-files-list>\n}\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaW1hZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbWFnZXMvaW5wdXQtaW1hZ2VzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbWFnZXMvaW5wdXQtaW1hZ2VzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQVksVUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQVN2RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQXFDO0lBQzdFLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLE9BQU87WUFDYixHQUFHLEVBQUUsU0FBUztTQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRWxDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFlO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsWUFBbUIsTUFBaUI7UUFDbEMsS0FBSyxFQUFFLENBQUM7UUFEUyxXQUFNLEdBQU4sTUFBTSxDQUFXO0lBRXBDLENBQUM7SUFFUSxRQUFRO1FBQ2YsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUMxRixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsVUFBVTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFTLENBQUMsQ0FBQyxDQUFDO1lBRTNFLE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2xELElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO1NBQ3ZELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2YsT0FBTztZQUNULENBQUM7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVNLGFBQWEsQ0FBQyxRQUFrQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RSxDQUFDOytHQTNEVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixrR0NyQmpDLHN0QkF1QkEsMERESmtCLE9BQU8sb0ZBQUUsa0JBQWtCLGdHQUFFLGtCQUFrQixpR0FBRSxlQUFlLDhKQUFFLGlCQUFpQjs7NEZBRXhGLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MsIE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IEZpbGVMaXN0Q29tcG9uZW50IH0gZnJvbSAnQHRhL2ZpbGVzLWJhc2ljJztcbmltcG9ydCB7IElucHV0SW1hZ2VzIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgTG9jYWxJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBGaWxlRGF0YSwgcGlja0ltYWdlcywgcmVtb3ZlRWxlbWVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtTGFiZWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRJbWFnZU1vZGFsIH0gZnJvbSAnLi9tb2RhbC9pbnB1dC1pbWFnZXMtbW9kYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtaW5wdXQtaW1hZ2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWltYWdlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWltYWdlcy5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgTmdDbGFzcywgTG9jYWxJY29uQ29tcG9uZW50LCBGb3JtTGFiZWxDb21wb25lbnQsIEJ1dHRvbkNvbXBvbmVudCwgRmlsZUxpc3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEltYWdlc0NvbXBvbmVudCBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dEltYWdlcz4gaW1wbGVtZW50cyBPbkluaXQge1xuICBnZXQgc2VsZWN0aW9uKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgfVxuXG4gIGdldCBmaWxlRGF0YVNlbGVjdGlvbigpOiBGaWxlRGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24ubWFwKHNlbGVjdGlvbiA9PiAoe1xuICAgICAgaWQ6IDAsXG4gICAgICB0eXBlOiAnSW1hZ2UnLFxuICAgICAgdXJsOiBzZWxlY3Rpb24sXG4gICAgfSkpO1xuICB9XG5cbiAgZ2V0IGlzQ2lyY3VsYXJCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGlvbikgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uLmxlbmd0aCA+IDA7XG4gIH1cblxuICBzZXQgc2VsZWN0aW9uKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w/LnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIGlmICh0aGlzLmlucHV0LnJlbW92ZUZpbGUkKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgdGhpcy5pbnB1dC5yZW1vdmVGaWxlJC5zdWJzY3JpYmUoZmlsZURhdGEgPT4gcmVtb3ZlRWxlbWVudCh0aGlzLnNlbGVjdGlvbiwgZmlsZURhdGEudXJsKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIG9wZW5EaWFsb2coKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0LmZpbGVzJCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaCguLi4oYXdhaXQgcGlja0ltYWdlcygpKS5tYXAoaW1hZ2UgPT4gaW1hZ2UubG9jYWxVcmwhKSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKElucHV0SW1hZ2VNb2RhbCwge1xuICAgICAgZGF0YTogeyBpbnB1dDogdGhpcy5pbnB1dCwgc2VsZWN0aW9uOiB0aGlzLnNlbGVjdGlvbiB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoc2VsZWN0aW9uID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25GaWxlRGVsZXRlZChmaWxlRGF0YTogRmlsZURhdGEpIHtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcih1cmwgPT4gdXJsICE9PSBmaWxlRGF0YS51cmwpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGlucHV0OiBJbnB1dEltYWdlcztcbiAgc2VsZWN0aW9uOiBzdHJpbmdbXTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3cgZy0wIGFsaWduLWl0ZW1zLWNlbnRlciBtYi1zcGFjZS0yXCI+XG4gIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICA8dGEtZm9ybS1sYWJlbCBbaW5wdXRdPVwidGhpcy5pbnB1dFwiPjwvdGEtZm9ybS1sYWJlbD5cbiAgPC9kaXY+XG4gIDxkaXYgW25nQ2xhc3NdPVwidGhpcy5zZWxlY3Rpb24ubGVuZ3RoID09PSAwID8gJ2NvbC0xMiBteS1zcGFjZS0yJyA6ICdjb2wtYXV0bydcIj5cbiAgICA8dGEtYnV0dG9uXG4gICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICNmb2N1c2VkRWxlbWVudFxuICAgICAgKGFjdGlvbik9XCJ0aGlzLm9wZW5EaWFsb2coKVwiXG4gICAgICBbb3B0aW9uc109XCJ7IGNpcmN1bGFyOiB0aGlzLmlzQ2lyY3VsYXJCdXR0b24gfVwiXG4gICAgPlxuICAgICAgPHRhLWxvY2FsLWljb24gW3R5cGVdPVwidGhpcy5pY29uLkdhbGxlcnlcIj48L3RhLWxvY2FsLWljb24+XG4gICAgPC90YS1idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbkBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICA8dGEtZmlsZXMtbGlzdFxuICAgIFtmaWxlc109XCJ0aGlzLmZpbGVEYXRhU2VsZWN0aW9uXCJcbiAgICBbY2FuRGVsZXRlRmlsZV09XCIhIXRoaXMuaW5wdXQuZmlsZURlbGV0ZWRcIlxuICAgIChmaWxlRGVsZXRlZCk9XCJ0aGlzLm9uRmlsZURlbGV0ZWQoJGV2ZW50KVwiXG4gID48L3RhLWZpbGVzLWxpc3Q+XG59XG4iXX0=
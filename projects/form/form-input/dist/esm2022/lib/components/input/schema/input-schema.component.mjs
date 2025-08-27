import { NgIf } from '@angular/common';
import { LocalIconComponent } from '@ta/icons';
import { ButtonComponent } from '@ta/ui';
import { FileListComponent } from '@ta/files-basic';
import { Component } from '@angular/core';
import { getBase64FromFile } from '@ta/utils';
import { CamAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';
import { InputSchemaModal } from './modal/input-schema-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class InputSchemaComponent extends CamAbstractInputComponent {
    get pics() {
        if (!this.input.value) {
            return null;
        }
        return [
            {
                id: 0,
                type: 'Image',
                url: this.input.value,
            },
        ];
    }
    get isCircularButton() {
        if (!this.pics)
            return false;
        return this.pics.length > 0;
    }
    set selection(value) {
        this.input.formControl?.setValue(value);
    }
    constructor(dialog) {
        super();
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(InputSchemaModal);
        this._registerSubscription(dialogRef.afterClosed().subscribe(async (data) => {
            if (!data || !data.file) {
                return;
            }
            if (this.input.update) {
                const pics = await this.input.update([data.file]);
                if (pics && pics.length > 0 && data.file.file) {
                    this.selection = await getBase64FromFile(data.file.file);
                }
            }
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputSchemaComponent, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputSchemaComponent, isStandalone: true, selector: "ta-input-schema", usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <ta-button\n    #focusedElement\n    (action)=\"this.openDialog()\"\n    [options]=\"{ circular: this.isCircularButton }\"\n    [style]=\"'secondary'\"\n  >\n    <ta-local-icon [type]=\"this.icon.Pencil\"></ta-local-icon>\n  </ta-button>\n\n  @if (this.pics) {\n    <ta-files-list [files]=\"this.pics\"></ta-files-list>\n  }\n</ta-input-layout>\n", styles: [""], dependencies: [{ kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputSchemaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-schema', standalone: true, imports: [NgIf, LocalIconComponent, ButtonComponent, FileListComponent, InputLayoutComponent], template: "<ta-input-layout [input]=\"this.input\">\n  <ta-button\n    #focusedElement\n    (action)=\"this.openDialog()\"\n    [options]=\"{ circular: this.isCircularButton }\"\n    [style]=\"'secondary'\"\n  >\n    <ta-local-icon [type]=\"this.icon.Pencil\"></ta-local-icon>\n  </ta-button>\n\n  @if (this.pics) {\n    <ta-files-list [files]=\"this.pics\"></ta-files-list>\n  }\n</ta-input-layout>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2NoZW1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zY2hlbWEvaW5wdXQtc2NoZW1hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zY2hlbWEvaW5wdXQtc2NoZW1hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTFDLE9BQU8sRUFBMkIsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQVN4RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEseUJBQXNDO0lBQzlFLElBQUksSUFBSTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE9BQU87WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQ3RCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUU3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQW1CLE1BQWlCO1FBQ2xDLEtBQUssRUFBRSxDQUFDO1FBRFMsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUVwQyxDQUFDO0lBRU0sVUFBVTtRQUNmLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUE0QyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWhHLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBNkIsRUFBRSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLE9BQU87WUFDVCxDQUFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRWxELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOytHQTlDVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixrR0NyQmpDLHdZQWNBLDBEREtrQixrQkFBa0IsZ0dBQUUsZUFBZSw4SkFBRSxpQkFBaUIsbUtBQUUsb0JBQW9COzs0RkFFakYsb0JBQW9CO2tCQVBoQyxTQUFTOytCQUNBLGlCQUFpQixjQUdiLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExvY2FsSWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgRmlsZUxpc3RDb21wb25lbnQgfSBmcm9tICdAdGEvZmlsZXMtYmFzaWMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBJbnB1dFNjaGVtYSB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IEZpbGVEYXRhLCBGaWxlU3RydWN0dXJlLCBnZXRCYXNlNjRGcm9tRmlsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IENhbUFic3RyYWN0SW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dFNjaGVtYU1vZGFsIH0gZnJvbSAnLi9tb2RhbC9pbnB1dC1zY2hlbWEtbW9kYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogJ3RhLWlucHV0LXNjaGVtYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1zY2hlbWEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1zY2hlbWEuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIExvY2FsSWNvbkNvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50LCBGaWxlTGlzdENvbXBvbmVudCwgSW5wdXRMYXlvdXRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFNjaGVtYUNvbXBvbmVudCBleHRlbmRzIENhbUFic3RyYWN0SW5wdXRDb21wb25lbnQ8SW5wdXRTY2hlbWE+IHtcbiAgZ2V0IHBpY3MoKTogRmlsZURhdGFbXSB8IG51bGwge1xuICAgIGlmICghdGhpcy5pbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIHR5cGU6ICdJbWFnZScsXG4gICAgICAgIHVybDogdGhpcy5pbnB1dC52YWx1ZSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIGdldCBpc0NpcmN1bGFyQnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5waWNzKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcy5waWNzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBzZXQgc2VsZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlucHV0LmZvcm1Db250cm9sPy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbjxJbnB1dFNjaGVtYU1vZGFsLCB7IGZpbGU6IEZpbGVTdHJ1Y3R1cmUgfT4oSW5wdXRTY2hlbWFNb2RhbCk7XG5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShhc3luYyAoZGF0YTogeyBmaWxlOiBGaWxlU3RydWN0dXJlIH0pID0+IHtcbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmZpbGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5wdXQudXBkYXRlKSB7XG4gICAgICAgICAgY29uc3QgcGljcyA9IGF3YWl0IHRoaXMuaW5wdXQudXBkYXRlKFtkYXRhLmZpbGVdKTtcblxuICAgICAgICAgIGlmIChwaWNzICYmIHBpY3MubGVuZ3RoID4gMCAmJiBkYXRhLmZpbGUuZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBhd2FpdCBnZXRCYXNlNjRGcm9tRmlsZShkYXRhLmZpbGUuZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiIsIjx0YS1pbnB1dC1sYXlvdXQgW2lucHV0XT1cInRoaXMuaW5wdXRcIj5cbiAgPHRhLWJ1dHRvblxuICAgICNmb2N1c2VkRWxlbWVudFxuICAgIChhY3Rpb24pPVwidGhpcy5vcGVuRGlhbG9nKClcIlxuICAgIFtvcHRpb25zXT1cInsgY2lyY3VsYXI6IHRoaXMuaXNDaXJjdWxhckJ1dHRvbiB9XCJcbiAgICBbc3R5bGVdPVwiJ3NlY29uZGFyeSdcIlxuICA+XG4gICAgPHRhLWxvY2FsLWljb24gW3R5cGVdPVwidGhpcy5pY29uLlBlbmNpbFwiPjwvdGEtbG9jYWwtaWNvbj5cbiAgPC90YS1idXR0b24+XG5cbiAgQGlmICh0aGlzLnBpY3MpIHtcbiAgICA8dGEtZmlsZXMtbGlzdCBbZmlsZXNdPVwidGhpcy5waWNzXCI+PC90YS1maWxlcy1saXN0PlxuICB9XG48L3RhLWlucHV0LWxheW91dD5cbiJdfQ==
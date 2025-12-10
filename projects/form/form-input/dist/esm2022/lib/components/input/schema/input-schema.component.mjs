import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FileListComponent } from "@ta/files-basic";
import { LocalIconComponent } from "@ta/icons";
import { ButtonComponent } from "@ta/ui";
import { getBase64FromFile } from "@ta/utils";
import { TaAbstractInputComponent } from "../../abstract.component";
import { InputLayoutComponent } from "../../input-layout/input-layout.component";
import { InputSchemaModal } from "./modal/input-schema-modal.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class InputSchemaComponent extends TaAbstractInputComponent {
    get pics() {
        if (!this.input.value) {
            return null;
        }
        return [
            {
                id: 0,
                type: "Image",
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
        this._registerSubscription(dialogRef
            .afterClosed()
            .subscribe(async (data) => {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputSchemaComponent, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputSchemaComponent, isStandalone: true, selector: "ta-input-schema", usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <ta-button\n    #focusedElement\n    (action)=\"this.openDialog()\"\n    [options]=\"{ circular: this.isCircularButton }\"\n    [style]=\"'secondary'\"\n  >\n    <ta-local-icon [type]=\"this.icon.Pencil\"></ta-local-icon>\n  </ta-button>\n\n  @if (this.pics) {\n  <ta-files-list [files]=\"this.pics\"></ta-files-list>\n  }\n</ta-input-layout>\n", styles: [""], dependencies: [{ kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputSchemaComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-schema", standalone: true, imports: [
                        NgIf,
                        LocalIconComponent,
                        ButtonComponent,
                        FileListComponent,
                        InputLayoutComponent,
                    ], template: "<ta-input-layout [input]=\"this.input\">\n  <ta-button\n    #focusedElement\n    (action)=\"this.openDialog()\"\n    [options]=\"{ circular: this.isCircularButton }\"\n    [style]=\"'secondary'\"\n  >\n    <ta-local-icon [type]=\"this.icon.Pencil\"></ta-local-icon>\n  </ta-button>\n\n  @if (this.pics) {\n  <ta-files-list [files]=\"this.pics\"></ta-files-list>\n  }\n</ta-input-layout>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2NoZW1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zY2hlbWEvaW5wdXQtc2NoZW1hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zY2hlbWEvaW5wdXQtc2NoZW1hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBMkIsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQWV4RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQXFDO0lBQzdFLElBQUksSUFBSTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE9BQU87WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQ3RCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUU3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQW1CLE1BQWlCO1FBQ2xDLEtBQUssRUFBRSxDQUFDO1FBRFMsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUVwQyxDQUFDO0lBRU0sVUFBVTtRQUNmLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUdoQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsU0FBUzthQUNOLFdBQVcsRUFBRTthQUNiLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBNkIsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLE9BQU87WUFDVCxDQUFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRWxELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDSixDQUFDOytHQW5EVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixrR0MzQmpDLHNZQWNBLDBERE9JLGtCQUFrQixnR0FDbEIsZUFBZSw4SkFDZixpQkFBaUIsbUtBQ2pCLG9CQUFvQjs7NEZBR1gsb0JBQW9CO2tCQWJoQyxTQUFTOytCQUNFLGlCQUFpQixjQUdmLElBQUksV0FDUDt3QkFDUCxJQUFJO3dCQUNKLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG9CQUFvQjtxQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcblxuaW1wb3J0IHsgRmlsZUxpc3RDb21wb25lbnQgfSBmcm9tIFwiQHRhL2ZpbGVzLWJhc2ljXCI7XG5pbXBvcnQgeyBJbnB1dFNjaGVtYSB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgTG9jYWxJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgRmlsZURhdGEsIEZpbGVTdHJ1Y3R1cmUsIGdldEJhc2U2NEZyb21GaWxlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnB1dExheW91dENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRTY2hlbWFNb2RhbCB9IGZyb20gXCIuL21vZGFsL2lucHV0LXNjaGVtYS1tb2RhbC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWlucHV0LXNjaGVtYVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2lucHV0LXNjaGVtYS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaW5wdXQtc2NoZW1hLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTmdJZixcbiAgICBMb2NhbEljb25Db21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEZpbGVMaXN0Q29tcG9uZW50LFxuICAgIElucHV0TGF5b3V0Q29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFNjaGVtYUNvbXBvbmVudCBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dFNjaGVtYT4ge1xuICBnZXQgcGljcygpOiBGaWxlRGF0YVtdIHwgbnVsbCB7XG4gICAgaWYgKCF0aGlzLmlucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgdHlwZTogXCJJbWFnZVwiLFxuICAgICAgICB1cmw6IHRoaXMuaW5wdXQudmFsdWUsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBnZXQgaXNDaXJjdWxhckJ1dHRvbigpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMucGljcykgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXMucGljcy5sZW5ndGggPiAwO1xuICB9XG5cbiAgc2V0IHNlbGVjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pbnB1dC5mb3JtQ29udHJvbD8uc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW48XG4gICAgICBJbnB1dFNjaGVtYU1vZGFsLFxuICAgICAgeyBmaWxlOiBGaWxlU3RydWN0dXJlIH1cbiAgICA+KElucHV0U2NoZW1hTW9kYWwpO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICBkaWFsb2dSZWZcbiAgICAgICAgLmFmdGVyQ2xvc2VkKClcbiAgICAgICAgLnN1YnNjcmliZShhc3luYyAoZGF0YTogeyBmaWxlOiBGaWxlU3RydWN0dXJlIH0pID0+IHtcbiAgICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5pbnB1dC51cGRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBpY3MgPSBhd2FpdCB0aGlzLmlucHV0LnVwZGF0ZShbZGF0YS5maWxlXSk7XG5cbiAgICAgICAgICAgIGlmIChwaWNzICYmIHBpY3MubGVuZ3RoID4gMCAmJiBkYXRhLmZpbGUuZmlsZSkge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IGF3YWl0IGdldEJhc2U2NEZyb21GaWxlKGRhdGEuZmlsZS5maWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIiwiPHRhLWlucHV0LWxheW91dCBbaW5wdXRdPVwidGhpcy5pbnB1dFwiPlxuICA8dGEtYnV0dG9uXG4gICAgI2ZvY3VzZWRFbGVtZW50XG4gICAgKGFjdGlvbik9XCJ0aGlzLm9wZW5EaWFsb2coKVwiXG4gICAgW29wdGlvbnNdPVwieyBjaXJjdWxhcjogdGhpcy5pc0NpcmN1bGFyQnV0dG9uIH1cIlxuICAgIFtzdHlsZV09XCInc2Vjb25kYXJ5J1wiXG4gID5cbiAgICA8dGEtbG9jYWwtaWNvbiBbdHlwZV09XCJ0aGlzLmljb24uUGVuY2lsXCI+PC90YS1sb2NhbC1pY29uPlxuICA8L3RhLWJ1dHRvbj5cblxuICBAaWYgKHRoaXMucGljcykge1xuICA8dGEtZmlsZXMtbGlzdCBbZmlsZXNdPVwidGhpcy5waWNzXCI+PC90YS1maWxlcy1saXN0PlxuICB9XG48L3RhLWlucHV0LWxheW91dD5cbiJdfQ==
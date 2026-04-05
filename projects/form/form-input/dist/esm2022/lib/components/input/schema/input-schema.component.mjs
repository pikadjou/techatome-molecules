import { Component, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FileListComponent } from "@ta/files-basic";
import { LocalIconComponent } from "@ta/icons";
import { ButtonComponent } from "@ta/ui";
import { getBase64FromFile } from "@ta/utils";
import { TaAbstractInputComponent } from "../../abstract.component";
import { InputLayoutComponent } from "../../input-layout/input-layout.component";
import { InputSchemaModal } from "./modal/input-schema-modal.component";
import * as i0 from "@angular/core";
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
    constructor() {
        super();
        this._dialog = inject(MatDialog);
    }
    openDialog() {
        const dialogRef = this._dialog.open(InputSchemaModal);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputSchemaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputSchemaComponent, isStandalone: true, selector: "ta-input-schema", usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <ta-button\n    #focusedElement\n    (action)=\"this.openDialog()\"\n    [options]=\"{ circular: this.isCircularButton }\"\n    [style]=\"'secondary'\"\n  >\n    <ta-local-icon [type]=\"this.icon.Pencil\"></ta-local-icon>\n  </ta-button>\n\n  @if (this.pics) {\n  <ta-files-list [files]=\"this.pics\"></ta-files-list>\n  }\n</ta-input-layout>\n", styles: [""], dependencies: [{ kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputSchemaComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-schema", standalone: true, imports: [
                        LocalIconComponent,
                        ButtonComponent,
                        FileListComponent,
                        InputLayoutComponent,
                    ], template: "<ta-input-layout [input]=\"this.input\">\n  <ta-button\n    #focusedElement\n    (action)=\"this.openDialog()\"\n    [options]=\"{ circular: this.isCircularButton }\"\n    [style]=\"'secondary'\"\n  >\n    <ta-local-icon [type]=\"this.icon.Pencil\"></ta-local-icon>\n  </ta-button>\n\n  @if (this.pics) {\n  <ta-files-list [files]=\"this.pics\"></ta-files-list>\n  }\n</ta-input-layout>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2NoZW1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zY2hlbWEvaW5wdXQtc2NoZW1hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zY2hlbWEvaW5wdXQtc2NoZW1hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQTJCLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQWN4RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQXFDO0lBQzdFLElBQUksSUFBSTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE9BQU87WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQ3RCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUU3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUlEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFISCxZQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBSW5DLENBQUM7SUFFTSxVQUFVO1FBQ2YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBR2pDLGdCQUFnQixDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixTQUFTO2FBQ04sV0FBVyxFQUFFO2FBQ2IsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUE2QixFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsT0FBTztZQUNULENBQUM7WUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFbEQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNELENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNKLENBQUM7K0dBckRVLG9CQUFvQjttR0FBcEIsb0JBQW9CLGtHQ3pCakMsc1lBY0EsMERES0ksa0JBQWtCLGdHQUNsQixlQUFlLDhKQUNmLGlCQUFpQixtS0FDakIsb0JBQW9COzs0RkFHWCxvQkFBb0I7a0JBWmhDLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQO3dCQUNQLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG9CQUFvQjtxQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5cbmltcG9ydCB7IEZpbGVMaXN0Q29tcG9uZW50IH0gZnJvbSBcIkB0YS9maWxlcy1iYXNpY1wiO1xuaW1wb3J0IHsgSW5wdXRTY2hlbWEgfSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcbmltcG9ydCB7IExvY2FsSWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IEZpbGVEYXRhLCBGaWxlU3RydWN0dXJlLCBnZXRCYXNlNjRGcm9tRmlsZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IElucHV0U2NoZW1hTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC9pbnB1dC1zY2hlbWEtbW9kYWwuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1pbnB1dC1zY2hlbWFcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbnB1dC1zY2hlbWEuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2lucHV0LXNjaGVtYS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIExvY2FsSWNvbkNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgRmlsZUxpc3RDb21wb25lbnQsXG4gICAgSW5wdXRMYXlvdXRDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0U2NoZW1hQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0U2NoZW1hPiB7XG4gIGdldCBwaWNzKCk6IEZpbGVEYXRhW10gfCBudWxsIHtcbiAgICBpZiAoIXRoaXMuaW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICB0eXBlOiBcIkltYWdlXCIsXG4gICAgICAgIHVybDogdGhpcy5pbnB1dC52YWx1ZSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIGdldCBpc0NpcmN1bGFyQnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5waWNzKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcy5waWNzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBzZXQgc2VsZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlucHV0LmZvcm1Db250cm9sPy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgX2RpYWxvZyA9IGluamVjdChNYXREaWFsb2cpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLl9kaWFsb2cub3BlbjxcbiAgICAgIElucHV0U2NoZW1hTW9kYWwsXG4gICAgICB7IGZpbGU6IEZpbGVTdHJ1Y3R1cmUgfVxuICAgID4oSW5wdXRTY2hlbWFNb2RhbCk7XG5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIGRpYWxvZ1JlZlxuICAgICAgICAuYWZ0ZXJDbG9zZWQoKVxuICAgICAgICAuc3Vic2NyaWJlKGFzeW5jIChkYXRhOiB7IGZpbGU6IEZpbGVTdHJ1Y3R1cmUgfSkgPT4ge1xuICAgICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5maWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmlucHV0LnVwZGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgcGljcyA9IGF3YWl0IHRoaXMuaW5wdXQudXBkYXRlKFtkYXRhLmZpbGVdKTtcblxuICAgICAgICAgICAgaWYgKHBpY3MgJiYgcGljcy5sZW5ndGggPiAwICYmIGRhdGEuZmlsZS5maWxlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gYXdhaXQgZ2V0QmFzZTY0RnJvbUZpbGUoZGF0YS5maWxlLmZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iLCI8dGEtaW5wdXQtbGF5b3V0IFtpbnB1dF09XCJ0aGlzLmlucHV0XCI+XG4gIDx0YS1idXR0b25cbiAgICAjZm9jdXNlZEVsZW1lbnRcbiAgICAoYWN0aW9uKT1cInRoaXMub3BlbkRpYWxvZygpXCJcbiAgICBbb3B0aW9uc109XCJ7IGNpcmN1bGFyOiB0aGlzLmlzQ2lyY3VsYXJCdXR0b24gfVwiXG4gICAgW3N0eWxlXT1cIidzZWNvbmRhcnknXCJcbiAgPlxuICAgIDx0YS1sb2NhbC1pY29uIFt0eXBlXT1cInRoaXMuaWNvbi5QZW5jaWxcIj48L3RhLWxvY2FsLWljb24+XG4gIDwvdGEtYnV0dG9uPlxuXG4gIEBpZiAodGhpcy5waWNzKSB7XG4gIDx0YS1maWxlcy1saXN0IFtmaWxlc109XCJ0aGlzLnBpY3NcIj48L3RhLWZpbGVzLWxpc3Q+XG4gIH1cbjwvdGEtaW5wdXQtbGF5b3V0PlxuIl19
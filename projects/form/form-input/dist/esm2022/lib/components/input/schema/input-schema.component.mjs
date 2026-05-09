import { Component, signal } from "@angular/core";
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
        if (!this.input.value)
            return null;
        return [{ id: 0, type: "Image", url: this.input.value }];
    }
    get isCircularButton() {
        return !!this.pics && this.pics.length > 0;
    }
    set selection(value) {
        this.input.formControl?.setValue(value);
    }
    constructor() {
        super();
        this.isModalOpen = signal(false);
    }
    openDialog() {
        this.isModalOpen.set(true);
    }
    async onSavedFile(data) {
        if (!data?.file)
            return;
        if (this.input.update) {
            const pics = await this.input.update([data.file]);
            if (pics && pics.length > 0 && data.file.file) {
                this.selection = await getBase64FromFile(data.file.file);
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputSchemaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputSchemaComponent, isStandalone: true, selector: "ta-input-schema", usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <ta-button\n    #focusedElement\n    (action)=\"this.openDialog()\"\n    [options]=\"{ circular: this.isCircularButton }\"\n    [style]=\"'secondary'\"\n  >\n    <ta-local-icon [type]=\"this.icon.Pencil\"></ta-local-icon>\n  </ta-button>\n\n  @if (this.pics) {\n    <ta-files-list [files]=\"this.pics\"></ta-files-list>\n  }\n</ta-input-layout>\n\n<ta-input-schema-modal\n  [open]=\"this.isModalOpen()\"\n  (savedFile)=\"this.onSavedFile($event)\"\n  (closeEvent)=\"this.isModalOpen.set(false)\"\n></ta-input-schema-modal>\n", styles: [""], dependencies: [{ kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "component", type: InputSchemaModal, selector: "ta-input-schema-modal", inputs: ["open"], outputs: ["savedFile", "closeEvent"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputSchemaComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-schema", standalone: true, imports: [
                        LocalIconComponent,
                        ButtonComponent,
                        FileListComponent,
                        InputLayoutComponent,
                        InputSchemaModal,
                    ], template: "<ta-input-layout [input]=\"this.input\">\n  <ta-button\n    #focusedElement\n    (action)=\"this.openDialog()\"\n    [options]=\"{ circular: this.isCircularButton }\"\n    [style]=\"'secondary'\"\n  >\n    <ta-local-icon [type]=\"this.icon.Pencil\"></ta-local-icon>\n  </ta-button>\n\n  @if (this.pics) {\n    <ta-files-list [files]=\"this.pics\"></ta-files-list>\n  }\n</ta-input-layout>\n\n<ta-input-schema-modal\n  [open]=\"this.isModalOpen()\"\n  (savedFile)=\"this.onSavedFile($event)\"\n  (closeEvent)=\"this.isModalOpen.set(false)\"\n></ta-input-schema-modal>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2NoZW1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zY2hlbWEvaW5wdXQtc2NoZW1hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9zY2hlbWEvaW5wdXQtc2NoZW1hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBMkIsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBZXhFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx3QkFBcUM7SUFHN0UsSUFBSSxJQUFJO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFoQkgsZ0JBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFpQm5DLENBQUM7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBNkI7UUFDcEQsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJO1lBQUUsT0FBTztRQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQzsrR0FoQ1Usb0JBQW9CO21HQUFwQixvQkFBb0Isa0dDekJqQywwakJBb0JBLDBEREZJLGtCQUFrQixnR0FDbEIsZUFBZSw4SkFDZixpQkFBaUIsbUtBQ2pCLG9CQUFvQixrR0FDcEIsZ0JBQWdCOzs0RkFHUCxvQkFBb0I7a0JBYmhDLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQO3dCQUNQLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3FCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgc2lnbmFsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRmlsZUxpc3RDb21wb25lbnQgfSBmcm9tIFwiQHRhL2ZpbGVzLWJhc2ljXCI7XG5pbXBvcnQgeyBJbnB1dFNjaGVtYSB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgTG9jYWxJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgRmlsZURhdGEsIEZpbGVTdHJ1Y3R1cmUsIGdldEJhc2U2NEZyb21GaWxlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnB1dExheW91dENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRTY2hlbWFNb2RhbCB9IGZyb20gXCIuL21vZGFsL2lucHV0LXNjaGVtYS1tb2RhbC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWlucHV0LXNjaGVtYVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2lucHV0LXNjaGVtYS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaW5wdXQtc2NoZW1hLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTG9jYWxJY29uQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBGaWxlTGlzdENvbXBvbmVudCxcbiAgICBJbnB1dExheW91dENvbXBvbmVudCxcbiAgICBJbnB1dFNjaGVtYU1vZGFsLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFNjaGVtYUNvbXBvbmVudCBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dFNjaGVtYT4ge1xuICBwdWJsaWMgaXNNb2RhbE9wZW4gPSBzaWduYWwoZmFsc2UpO1xuXG4gIGdldCBwaWNzKCk6IEZpbGVEYXRhW10gfCBudWxsIHtcbiAgICBpZiAoIXRoaXMuaW5wdXQudmFsdWUpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBbeyBpZDogMCwgdHlwZTogXCJJbWFnZVwiLCB1cmw6IHRoaXMuaW5wdXQudmFsdWUgfV07XG4gIH1cblxuICBnZXQgaXNDaXJjdWxhckJ1dHRvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnBpY3MgJiYgdGhpcy5waWNzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBzZXQgc2VsZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlucHV0LmZvcm1Db250cm9sPy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgdGhpcy5pc01vZGFsT3Blbi5zZXQodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgb25TYXZlZEZpbGUoZGF0YTogeyBmaWxlOiBGaWxlU3RydWN0dXJlIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWRhdGE/LmZpbGUpIHJldHVybjtcbiAgICBpZiAodGhpcy5pbnB1dC51cGRhdGUpIHtcbiAgICAgIGNvbnN0IHBpY3MgPSBhd2FpdCB0aGlzLmlucHV0LnVwZGF0ZShbZGF0YS5maWxlXSk7XG4gICAgICBpZiAocGljcyAmJiBwaWNzLmxlbmd0aCA+IDAgJiYgZGF0YS5maWxlLmZpbGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBhd2FpdCBnZXRCYXNlNjRGcm9tRmlsZShkYXRhLmZpbGUuZmlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8dGEtaW5wdXQtbGF5b3V0IFtpbnB1dF09XCJ0aGlzLmlucHV0XCI+XG4gIDx0YS1idXR0b25cbiAgICAjZm9jdXNlZEVsZW1lbnRcbiAgICAoYWN0aW9uKT1cInRoaXMub3BlbkRpYWxvZygpXCJcbiAgICBbb3B0aW9uc109XCJ7IGNpcmN1bGFyOiB0aGlzLmlzQ2lyY3VsYXJCdXR0b24gfVwiXG4gICAgW3N0eWxlXT1cIidzZWNvbmRhcnknXCJcbiAgPlxuICAgIDx0YS1sb2NhbC1pY29uIFt0eXBlXT1cInRoaXMuaWNvbi5QZW5jaWxcIj48L3RhLWxvY2FsLWljb24+XG4gIDwvdGEtYnV0dG9uPlxuXG4gIEBpZiAodGhpcy5waWNzKSB7XG4gICAgPHRhLWZpbGVzLWxpc3QgW2ZpbGVzXT1cInRoaXMucGljc1wiPjwvdGEtZmlsZXMtbGlzdD5cbiAgfVxuPC90YS1pbnB1dC1sYXlvdXQ+XG5cbjx0YS1pbnB1dC1zY2hlbWEtbW9kYWxcbiAgW29wZW5dPVwidGhpcy5pc01vZGFsT3BlbigpXCJcbiAgKHNhdmVkRmlsZSk9XCJ0aGlzLm9uU2F2ZWRGaWxlKCRldmVudClcIlxuICAoY2xvc2VFdmVudCk9XCJ0aGlzLmlzTW9kYWxPcGVuLnNldChmYWxzZSlcIlxuPjwvdGEtaW5wdXQtc2NoZW1hLW1vZGFsPlxuIl19
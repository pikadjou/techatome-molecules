import { Component, input, output } from "@angular/core";
import { FontIconComponent, LocalIconComponent } from "@ta/icons";
import { TaIconType } from "@ta/icons";
import { BadgeComponent, CardComponent, CardContentComponent, CardCtaComponent, CardHeaderComponent, CardTagComponent, CardTitleComponent, TitleComponent, TrigramComponent, } from "@ta/ui";
import { EFileExtension } from "@ta/utils";
import * as i0 from "@angular/core";
export class FileCardComponent {
    constructor() {
        this.file = input.required();
        this.fileSelected = output();
        this.moreInformationSelected = output();
    }
    get localIcon() {
        switch (this.file().fileExtension) {
            case EFileExtension.PDF:
                return TaIconType.Pdf;
            case EFileExtension.Word:
                return TaIconType.Doc;
            case EFileExtension.Excel:
                return TaIconType.Excel;
            case EFileExtension.Image:
                return TaIconType.Image;
            default:
                return TaIconType.UnknownFile;
        }
    }
    get fileType() {
        return this.file().fileMetaData?.fileType?.translatedValue || null;
    }
    get userTrigram() {
        return this.file().fileMetaData?.owner?.naming?.trigram || null;
    }
    get fileSize() {
        return this.file().fileMetaData?.fileSize || null;
    }
    get fileName() {
        return this.file().fileMetaData?.fileName || null;
    }
    onHeaderClicked() {
        this.moreInformationSelected.emit(this.file());
    }
    onBodyClicked() {
        this.fileSelected.emit(this.file());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: FileCardComponent, isStandalone: true, selector: "ta-file-card", inputs: { file: { classPropertyName: "file", publicName: "file", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { fileSelected: "fileSelected", moreInformationSelected: "moreInformationSelected" }, ngImport: i0, template: "<ta-card>\n  <ta-card-header>\n    <ta-card-tag class=\"space-between\">\n      <ta-trigram [value]=\"this.userTrigram\"> </ta-trigram>\n      <div (click)=\"this.onHeaderClicked()\">\n        <ta-font-icon name=\"more\" size=\"xs\"></ta-font-icon>\n      </div>\n    </ta-card-tag>\n    <ta-card-title>\n      <ta-title [level]=\"4\">{{ this.fileName }}</ta-title>\n    </ta-card-title>\n  </ta-card-header>\n  <ta-card-content>\n    <div (click)=\"this.onBodyClicked()\">\n      <ta-local-icon [type]=\"this.localIcon\" size=\"md\"></ta-local-icon>\n    </div>\n  </ta-card-content>\n  <ta-card-cta>\n    <ta-badge [value]=\"this.fileType ?? ''\"> </ta-badge>\n  </ta-card-cta>\n</ta-card>\n", styles: [".title{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }, { kind: "component", type: CardComponent, selector: "ta-card", inputs: ["highlight", "invert", "shadow", "muted", "fullHeight", "noContent", "directionCard", "isNew"], outputs: ["click"] }, { kind: "component", type: CardContentComponent, selector: "ta-card-content" }, { kind: "component", type: CardCtaComponent, selector: "ta-card-cta" }, { kind: "component", type: CardHeaderComponent, selector: "ta-card-header" }, { kind: "component", type: CardTagComponent, selector: "ta-card-tag" }, { kind: "component", type: CardTitleComponent, selector: "ta-card-title" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size", "shape", "tone"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileCardComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-file-card", standalone: true, imports: [
                        BadgeComponent,
                        CardComponent,
                        CardContentComponent,
                        CardCtaComponent,
                        CardHeaderComponent,
                        CardTagComponent,
                        CardTitleComponent,
                        FontIconComponent,
                        LocalIconComponent,
                        TitleComponent,
                        TrigramComponent,
                    ], template: "<ta-card>\n  <ta-card-header>\n    <ta-card-tag class=\"space-between\">\n      <ta-trigram [value]=\"this.userTrigram\"> </ta-trigram>\n      <div (click)=\"this.onHeaderClicked()\">\n        <ta-font-icon name=\"more\" size=\"xs\"></ta-font-icon>\n      </div>\n    </ta-card-tag>\n    <ta-card-title>\n      <ta-title [level]=\"4\">{{ this.fileName }}</ta-title>\n    </ta-card-title>\n  </ta-card-header>\n  <ta-card-content>\n    <div (click)=\"this.onBodyClicked()\">\n      <ta-local-icon [type]=\"this.localIcon\" size=\"md\"></ta-local-icon>\n    </div>\n  </ta-card-content>\n  <ta-card-cta>\n    <ta-badge [value]=\"this.fileType ?? ''\"> </ta-badge>\n  </ta-card-cta>\n</ta-card>\n", styles: [".title{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saXN0L2NhcmQvZmlsZS9maWxlLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2xpc3QvY2FyZC9maWxlL2ZpbGUtY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUNMLGNBQWMsRUFDZCxhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxXQUFXLENBQUM7O0FBcUJyRCxNQUFNLE9BQU8saUJBQWlCO0lBbkI5QjtRQW9CRSxTQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBWSxDQUFDO1FBRWxDLGlCQUFZLEdBQUcsTUFBTSxFQUFZLENBQUM7UUFFbEMsNEJBQXVCLEdBQUcsTUFBTSxFQUFZLENBQUM7S0F3QzlDO0lBdENDLElBQUksU0FBUztRQUNYLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2xDLEtBQUssY0FBYyxDQUFDLEdBQUc7Z0JBQ3JCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN4QixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN0QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDeEIsS0FBSyxjQUFjLENBQUMsS0FBSztnQkFDdkIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzFCLEtBQUssY0FBYyxDQUFDLEtBQUs7Z0JBQ3ZCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQztZQUMxQjtnQkFDRSxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLGVBQWUsSUFBSSxJQUFJLENBQUM7SUFDckUsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQztJQUNwRCxDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7K0dBNUNVLGlCQUFpQjttR0FBakIsaUJBQWlCLHVTQ3BDOUIsdXJCQXFCQSxtS0RFSSxjQUFjLHFJQUNkLGFBQWEsaUxBQ2Isb0JBQW9CLDREQUNwQixnQkFBZ0Isd0RBQ2hCLG1CQUFtQiwyREFDbkIsZ0JBQWdCLHdEQUNoQixrQkFBa0IsMERBQ2xCLGlCQUFpQixtRkFDakIsa0JBQWtCLGdHQUNsQixjQUFjLHFHQUNkLGdCQUFnQjs7NEZBR1AsaUJBQWlCO2tCQW5CN0IsU0FBUzsrQkFDRSxjQUFjLGNBR1osSUFBSSxXQUNQO3dCQUNQLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZ0JBQWdCO3FCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQsIG91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50LCBMb2NhbEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBUYUljb25UeXBlIH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHtcbiAgQmFkZ2VDb21wb25lbnQsXG4gIENhcmRDb21wb25lbnQsXG4gIENhcmRDb250ZW50Q29tcG9uZW50LFxuICBDYXJkQ3RhQ29tcG9uZW50LFxuICBDYXJkSGVhZGVyQ29tcG9uZW50LFxuICBDYXJkVGFnQ29tcG9uZW50LFxuICBDYXJkVGl0bGVDb21wb25lbnQsXG4gIFRpdGxlQ29tcG9uZW50LFxuICBUcmlncmFtQ29tcG9uZW50LFxufSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBFRmlsZUV4dGVuc2lvbiwgRmlsZURhdGEgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1maWxlLWNhcmRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9maWxlLWNhcmQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmw6IFwiLi9maWxlLWNhcmQuY29tcG9uZW50LnNjc3NcIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEJhZGdlQ29tcG9uZW50LFxuICAgIENhcmRDb21wb25lbnQsXG4gICAgQ2FyZENvbnRlbnRDb21wb25lbnQsXG4gICAgQ2FyZEN0YUNvbXBvbmVudCxcbiAgICBDYXJkSGVhZGVyQ29tcG9uZW50LFxuICAgIENhcmRUYWdDb21wb25lbnQsXG4gICAgQ2FyZFRpdGxlQ29tcG9uZW50LFxuICAgIEZvbnRJY29uQ29tcG9uZW50LFxuICAgIExvY2FsSWNvbkNvbXBvbmVudCxcbiAgICBUaXRsZUNvbXBvbmVudCxcbiAgICBUcmlncmFtQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlQ2FyZENvbXBvbmVudCB7XG4gIGZpbGUgPSBpbnB1dC5yZXF1aXJlZDxGaWxlRGF0YT4oKTtcblxuICBmaWxlU2VsZWN0ZWQgPSBvdXRwdXQ8RmlsZURhdGE+KCk7XG5cbiAgbW9yZUluZm9ybWF0aW9uU2VsZWN0ZWQgPSBvdXRwdXQ8RmlsZURhdGE+KCk7XG5cbiAgZ2V0IGxvY2FsSWNvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuZmlsZSgpLmZpbGVFeHRlbnNpb24pIHtcbiAgICAgIGNhc2UgRUZpbGVFeHRlbnNpb24uUERGOlxuICAgICAgICByZXR1cm4gVGFJY29uVHlwZS5QZGY7XG4gICAgICBjYXNlIEVGaWxlRXh0ZW5zaW9uLldvcmQ6XG4gICAgICAgIHJldHVybiBUYUljb25UeXBlLkRvYztcbiAgICAgIGNhc2UgRUZpbGVFeHRlbnNpb24uRXhjZWw6XG4gICAgICAgIHJldHVybiBUYUljb25UeXBlLkV4Y2VsO1xuICAgICAgY2FzZSBFRmlsZUV4dGVuc2lvbi5JbWFnZTpcbiAgICAgICAgcmV0dXJuIFRhSWNvblR5cGUuSW1hZ2U7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gVGFJY29uVHlwZS5Vbmtub3duRmlsZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZmlsZVR5cGUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZSgpLmZpbGVNZXRhRGF0YT8uZmlsZVR5cGU/LnRyYW5zbGF0ZWRWYWx1ZSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0IHVzZXJUcmlncmFtKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbGUoKS5maWxlTWV0YURhdGE/Lm93bmVyPy5uYW1pbmc/LnRyaWdyYW0gfHwgbnVsbDtcbiAgfVxuXG4gIGdldCBmaWxlU2l6ZSgpOiBudW1iZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5maWxlKCkuZmlsZU1ldGFEYXRhPy5maWxlU2l6ZSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0IGZpbGVOYW1lKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbGUoKS5maWxlTWV0YURhdGE/LmZpbGVOYW1lIHx8IG51bGw7XG4gIH1cblxuICBwdWJsaWMgb25IZWFkZXJDbGlja2VkKCkge1xuICAgIHRoaXMubW9yZUluZm9ybWF0aW9uU2VsZWN0ZWQuZW1pdCh0aGlzLmZpbGUoKSk7XG4gIH1cblxuICBwdWJsaWMgb25Cb2R5Q2xpY2tlZCgpIHtcbiAgICB0aGlzLmZpbGVTZWxlY3RlZC5lbWl0KHRoaXMuZmlsZSgpKTtcbiAgfVxufVxuIiwiPHRhLWNhcmQ+XG4gIDx0YS1jYXJkLWhlYWRlcj5cbiAgICA8dGEtY2FyZC10YWcgY2xhc3M9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICA8dGEtdHJpZ3JhbSBbdmFsdWVdPVwidGhpcy51c2VyVHJpZ3JhbVwiPiA8L3RhLXRyaWdyYW0+XG4gICAgICA8ZGl2IChjbGljayk9XCJ0aGlzLm9uSGVhZGVyQ2xpY2tlZCgpXCI+XG4gICAgICAgIDx0YS1mb250LWljb24gbmFtZT1cIm1vcmVcIiBzaXplPVwieHNcIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGEtY2FyZC10YWc+XG4gICAgPHRhLWNhcmQtdGl0bGU+XG4gICAgICA8dGEtdGl0bGUgW2xldmVsXT1cIjRcIj57eyB0aGlzLmZpbGVOYW1lIH19PC90YS10aXRsZT5cbiAgICA8L3RhLWNhcmQtdGl0bGU+XG4gIDwvdGEtY2FyZC1oZWFkZXI+XG4gIDx0YS1jYXJkLWNvbnRlbnQ+XG4gICAgPGRpdiAoY2xpY2spPVwidGhpcy5vbkJvZHlDbGlja2VkKClcIj5cbiAgICAgIDx0YS1sb2NhbC1pY29uIFt0eXBlXT1cInRoaXMubG9jYWxJY29uXCIgc2l6ZT1cIm1kXCI+PC90YS1sb2NhbC1pY29uPlxuICAgIDwvZGl2PlxuICA8L3RhLWNhcmQtY29udGVudD5cbiAgPHRhLWNhcmQtY3RhPlxuICAgIDx0YS1iYWRnZSBbdmFsdWVdPVwidGhpcy5maWxlVHlwZSA/PyAnJ1wiPiA8L3RhLWJhZGdlPlxuICA8L3RhLWNhcmQtY3RhPlxuPC90YS1jYXJkPlxuIl19
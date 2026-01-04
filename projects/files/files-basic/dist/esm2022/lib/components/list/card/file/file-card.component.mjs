import { Component, EventEmitter, Output, input } from "@angular/core";
import { FontIconComponent, LocalIconComponent } from "@ta/icons";
import { TaIconType } from "@ta/icons";
import { BadgeComponent, CardComponent, CardContentComponent, CardCtaComponent, CardHeaderComponent, CardTagComponent, CardTitleComponent, TitleComponent, TrigramComponent, } from "@ta/ui";
import { EFileExtension } from "@ta/utils";
import * as i0 from "@angular/core";
export class FileCardComponent {
    constructor() {
        this.file = input.required();
        this.fileSelected = new EventEmitter();
        this.moreInformationSelected = new EventEmitter();
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: FileCardComponent, isStandalone: true, selector: "ta-file-card", inputs: { file: { classPropertyName: "file", publicName: "file", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { fileSelected: "fileSelected", moreInformationSelected: "moreInformationSelected" }, ngImport: i0, template: "<ta-card>\n  <ta-card-header>\n    <ta-card-tag class=\"space-between\">\n      <ta-trigram [value]=\"this.userTrigram\"> </ta-trigram>\n      <div (click)=\"this.onHeaderClicked()\">\n        <ta-font-icon name=\"more\" size=\"xs\"></ta-font-icon>\n      </div>\n    </ta-card-tag>\n    <ta-card-title>\n      <ta-title [level]=\"4\">{{ this.fileName }}</ta-title>\n    </ta-card-title>\n  </ta-card-header>\n  <ta-card-content>\n    <div (click)=\"this.onBodyClicked()\">\n      <ta-local-icon [type]=\"this.localIcon\" size=\"md\"></ta-local-icon>\n    </div>\n  </ta-card-content>\n  <ta-card-cta>\n    <ta-badge [value]=\"this.fileType ?? ''\"> </ta-badge>\n  </ta-card-cta>\n</ta-card>\n", styles: [".title{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }, { kind: "component", type: CardComponent, selector: "ta-card", inputs: ["highlight", "shadow", "fullHeight", "noContent", "directionCard", "isNew"], outputs: ["click"] }, { kind: "component", type: CardContentComponent, selector: "ta-card-content" }, { kind: "component", type: CardCtaComponent, selector: "ta-card-cta" }, { kind: "component", type: CardHeaderComponent, selector: "ta-card-header" }, { kind: "component", type: CardTagComponent, selector: "ta-card-tag" }, { kind: "component", type: CardTitleComponent, selector: "ta-card-title" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }] }); }
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
        }], propDecorators: { fileSelected: [{
                type: Output
            }], moreInformationSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saXN0L2NhcmQvZmlsZS9maWxlLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2xpc3QvY2FyZC9maWxlL2ZpbGUtY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUUsY0FBYyxFQUFZLE1BQU0sV0FBVyxDQUFDOztBQXFCckQsTUFBTSxPQUFPLGlCQUFpQjtJQW5COUI7UUFvQkUsU0FBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVksQ0FBQztRQUdsQyxpQkFBWSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBR3BFLDRCQUF1QixHQUNyQixJQUFJLFlBQVksRUFBWSxDQUFDO0tBd0NoQztJQXRDQyxJQUFJLFNBQVM7UUFDWCxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNsQyxLQUFLLGNBQWMsQ0FBQyxHQUFHO2dCQUNyQixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDeEIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdEIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3hCLEtBQUssY0FBYyxDQUFDLEtBQUs7Z0JBQ3ZCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQztZQUMxQixLQUFLLGNBQWMsQ0FBQyxLQUFLO2dCQUN2QixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDMUI7Z0JBQ0UsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxlQUFlLElBQUksSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ2xFLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUM7SUFDcEQsQ0FBQztJQUVNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sYUFBYTtRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDOytHQS9DVSxpQkFBaUI7bUdBQWpCLGlCQUFpQix1U0NwQzlCLHVyQkFxQkEsbUtERUksY0FBYyxxSUFDZCxhQUFhLDhKQUNiLG9CQUFvQiw0REFDcEIsZ0JBQWdCLHdEQUNoQixtQkFBbUIsMkRBQ25CLGdCQUFnQix3REFDaEIsa0JBQWtCLDBEQUNsQixpQkFBaUIsbUZBQ2pCLGtCQUFrQixnR0FDbEIsY0FBYyxxR0FDZCxnQkFBZ0I7OzRGQUdQLGlCQUFpQjtrQkFuQjdCLFNBQVM7K0JBQ0UsY0FBYyxjQUdaLElBQUksV0FDUDt3QkFDUCxjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGdCQUFnQjtxQkFDakI7OEJBTUQsWUFBWTtzQkFEWCxNQUFNO2dCQUlQLHVCQUF1QjtzQkFEdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIGlucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQsIExvY2FsSWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhSWNvblR5cGUgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQge1xuICBCYWRnZUNvbXBvbmVudCxcbiAgQ2FyZENvbXBvbmVudCxcbiAgQ2FyZENvbnRlbnRDb21wb25lbnQsXG4gIENhcmRDdGFDb21wb25lbnQsXG4gIENhcmRIZWFkZXJDb21wb25lbnQsXG4gIENhcmRUYWdDb21wb25lbnQsXG4gIENhcmRUaXRsZUNvbXBvbmVudCxcbiAgVGl0bGVDb21wb25lbnQsXG4gIFRyaWdyYW1Db21wb25lbnQsXG59IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IEVGaWxlRXh0ZW5zaW9uLCBGaWxlRGF0YSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWZpbGUtY2FyZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2ZpbGUtY2FyZC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQmFkZ2VDb21wb25lbnQsXG4gICAgQ2FyZENvbXBvbmVudCxcbiAgICBDYXJkQ29udGVudENvbXBvbmVudCxcbiAgICBDYXJkQ3RhQ29tcG9uZW50LFxuICAgIENhcmRIZWFkZXJDb21wb25lbnQsXG4gICAgQ2FyZFRhZ0NvbXBvbmVudCxcbiAgICBDYXJkVGl0bGVDb21wb25lbnQsXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgTG9jYWxJY29uQ29tcG9uZW50LFxuICAgIFRpdGxlQ29tcG9uZW50LFxuICAgIFRyaWdyYW1Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVDYXJkQ29tcG9uZW50IHtcbiAgZmlsZSA9IGlucHV0LnJlcXVpcmVkPEZpbGVEYXRhPigpO1xuXG4gIEBPdXRwdXQoKVxuICBmaWxlU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxGaWxlRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVEYXRhPigpO1xuXG4gIEBPdXRwdXQoKVxuICBtb3JlSW5mb3JtYXRpb25TZWxlY3RlZDogRXZlbnRFbWl0dGVyPEZpbGVEYXRhPiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxGaWxlRGF0YT4oKTtcblxuICBnZXQgbG9jYWxJY29uKCkge1xuICAgIHN3aXRjaCAodGhpcy5maWxlKCkuZmlsZUV4dGVuc2lvbikge1xuICAgICAgY2FzZSBFRmlsZUV4dGVuc2lvbi5QREY6XG4gICAgICAgIHJldHVybiBUYUljb25UeXBlLlBkZjtcbiAgICAgIGNhc2UgRUZpbGVFeHRlbnNpb24uV29yZDpcbiAgICAgICAgcmV0dXJuIFRhSWNvblR5cGUuRG9jO1xuICAgICAgY2FzZSBFRmlsZUV4dGVuc2lvbi5FeGNlbDpcbiAgICAgICAgcmV0dXJuIFRhSWNvblR5cGUuRXhjZWw7XG4gICAgICBjYXNlIEVGaWxlRXh0ZW5zaW9uLkltYWdlOlxuICAgICAgICByZXR1cm4gVGFJY29uVHlwZS5JbWFnZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBUYUljb25UeXBlLlVua25vd25GaWxlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBmaWxlVHlwZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5maWxlKCkuZmlsZU1ldGFEYXRhPy5maWxlVHlwZT8udHJhbnNsYXRlZFZhbHVlIHx8IG51bGw7XG4gIH1cblxuICBnZXQgdXNlclRyaWdyYW0oKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZSgpLmZpbGVNZXRhRGF0YT8ub3duZXI/Lm5hbWluZz8udHJpZ3JhbSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0IGZpbGVTaXplKCk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbGUoKS5maWxlTWV0YURhdGE/LmZpbGVTaXplIHx8IG51bGw7XG4gIH1cblxuICBnZXQgZmlsZU5hbWUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZSgpLmZpbGVNZXRhRGF0YT8uZmlsZU5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBvbkhlYWRlckNsaWNrZWQoKSB7XG4gICAgdGhpcy5tb3JlSW5mb3JtYXRpb25TZWxlY3RlZC5lbWl0KHRoaXMuZmlsZSgpKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJvZHlDbGlja2VkKCkge1xuICAgIHRoaXMuZmlsZVNlbGVjdGVkLmVtaXQodGhpcy5maWxlKCkpO1xuICB9XG59XG4iLCI8dGEtY2FyZD5cbiAgPHRhLWNhcmQtaGVhZGVyPlxuICAgIDx0YS1jYXJkLXRhZyBjbGFzcz1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgIDx0YS10cmlncmFtIFt2YWx1ZV09XCJ0aGlzLnVzZXJUcmlncmFtXCI+IDwvdGEtdHJpZ3JhbT5cbiAgICAgIDxkaXYgKGNsaWNrKT1cInRoaXMub25IZWFkZXJDbGlja2VkKClcIj5cbiAgICAgICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwibW9yZVwiIHNpemU9XCJ4c1wiPjwvdGEtZm9udC1pY29uPlxuICAgICAgPC9kaXY+XG4gICAgPC90YS1jYXJkLXRhZz5cbiAgICA8dGEtY2FyZC10aXRsZT5cbiAgICAgIDx0YS10aXRsZSBbbGV2ZWxdPVwiNFwiPnt7IHRoaXMuZmlsZU5hbWUgfX08L3RhLXRpdGxlPlxuICAgIDwvdGEtY2FyZC10aXRsZT5cbiAgPC90YS1jYXJkLWhlYWRlcj5cbiAgPHRhLWNhcmQtY29udGVudD5cbiAgICA8ZGl2IChjbGljayk9XCJ0aGlzLm9uQm9keUNsaWNrZWQoKVwiPlxuICAgICAgPHRhLWxvY2FsLWljb24gW3R5cGVdPVwidGhpcy5sb2NhbEljb25cIiBzaXplPVwibWRcIj48L3RhLWxvY2FsLWljb24+XG4gICAgPC9kaXY+XG4gIDwvdGEtY2FyZC1jb250ZW50PlxuICA8dGEtY2FyZC1jdGE+XG4gICAgPHRhLWJhZGdlIFt2YWx1ZV09XCJ0aGlzLmZpbGVUeXBlID8/ICcnXCI+IDwvdGEtYmFkZ2U+XG4gIDwvdGEtY2FyZC1jdGE+XG48L3RhLWNhcmQ+XG4iXX0=
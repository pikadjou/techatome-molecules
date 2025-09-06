import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontIconComponent, LocalIconComponent } from '@ta/icons';
import { TaIconType } from '@ta/icons';
import { BadgeComponent, CardComponent, CardContentComponent, CardCtaComponent, CardHeaderComponent, CardTagComponent, CardTitleComponent, TitleComponent, TrigramComponent, } from '@ta/ui';
import { EFileExtension } from '@ta/utils';
import * as i0 from "@angular/core";
export class FileCardComponent {
    constructor() {
        this.fileSelected = new EventEmitter();
        this.moreInformationSelected = new EventEmitter();
    }
    get localIcon() {
        switch (this.file.fileExtension) {
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
        return this.file.fileMetaData?.fileType?.translatedValue || null;
    }
    get userTrigram() {
        return this.file.fileMetaData?.owner?.naming?.trigram || null;
    }
    get fileSize() {
        return this.file.fileMetaData?.fileSize || null;
    }
    get fileName() {
        return this.file.fileMetaData?.fileName || null;
    }
    onHeaderClicked() {
        this.moreInformationSelected.emit(this.file);
    }
    onBodyClicked() {
        this.fileSelected.emit(this.file);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FileCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FileCardComponent, isStandalone: true, selector: "ta-file-card", inputs: { file: "file" }, outputs: { fileSelected: "fileSelected", moreInformationSelected: "moreInformationSelected" }, ngImport: i0, template: "<ta-card>\n  <ta-card-header>\n    <ta-card-tag class=\"space-between\">\n      <ta-trigram [value]=\"this.userTrigram\"> </ta-trigram>\n      <div (click)=\"this.onHeaderClicked()\">\n        <ta-font-icon name=\"more\" size=\"xs\"></ta-font-icon>\n      </div>\n    </ta-card-tag>\n    <ta-card-title>\n      <ta-title [level]=\"4\">{{ this.fileName }}</ta-title>\n    </ta-card-title>\n  </ta-card-header>\n  <ta-card-content>\n    <div (click)=\"this.onBodyClicked()\">\n      <ta-local-icon [type]=\"this.localIcon\" size=\"md\"></ta-local-icon>\n    </div>\n  </ta-card-content>\n  <ta-card-cta>\n    <ta-badge [value]=\"this.fileType ?? ''\"> </ta-badge>\n  </ta-card-cta>\n</ta-card>\n", styles: [".title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }, { kind: "component", type: CardComponent, selector: "ta-card", inputs: ["highlight", "shadow", "fullHeight", "noContent", "isNew"], outputs: ["click"] }, { kind: "component", type: CardContentComponent, selector: "ta-card-content" }, { kind: "component", type: CardCtaComponent, selector: "ta-card-cta" }, { kind: "component", type: CardHeaderComponent, selector: "ta-card-header" }, { kind: "component", type: CardTagComponent, selector: "ta-card-tag" }, { kind: "component", type: CardTitleComponent, selector: "ta-card-title" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FileCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-file-card', standalone: true, imports: [
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
                    ], template: "<ta-card>\n  <ta-card-header>\n    <ta-card-tag class=\"space-between\">\n      <ta-trigram [value]=\"this.userTrigram\"> </ta-trigram>\n      <div (click)=\"this.onHeaderClicked()\">\n        <ta-font-icon name=\"more\" size=\"xs\"></ta-font-icon>\n      </div>\n    </ta-card-tag>\n    <ta-card-title>\n      <ta-title [level]=\"4\">{{ this.fileName }}</ta-title>\n    </ta-card-title>\n  </ta-card-header>\n  <ta-card-content>\n    <div (click)=\"this.onBodyClicked()\">\n      <ta-local-icon [type]=\"this.localIcon\" size=\"md\"></ta-local-icon>\n    </div>\n  </ta-card-content>\n  <ta-card-cta>\n    <ta-badge [value]=\"this.fileType ?? ''\"> </ta-badge>\n  </ta-card-cta>\n</ta-card>\n", styles: [".title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}\n"] }]
        }], propDecorators: { file: [{
                type: Input
            }], fileSelected: [{
                type: Output
            }], moreInformationSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saXN0L2NhcmQvZmlsZS9maWxlLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2xpc3QvY2FyZC9maWxlL2ZpbGUtY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUUsY0FBYyxFQUFZLE1BQU0sV0FBVyxDQUFDOztBQXFCckQsTUFBTSxPQUFPLGlCQUFpQjtJQW5COUI7UUF1QkUsaUJBQVksR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUdwRSw0QkFBdUIsR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztLQXdDaEY7SUF0Q0MsSUFBSSxTQUFTO1FBQ1gsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLEtBQUssY0FBYyxDQUFDLEdBQUc7Z0JBQ3JCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN4QixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN0QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDeEIsS0FBSyxjQUFjLENBQUMsS0FBSztnQkFDdkIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzFCLEtBQUssY0FBYyxDQUFDLEtBQUs7Z0JBQ3ZCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQztZQUMxQjtnQkFDRSxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxlQUFlLElBQUksSUFBSSxDQUFDO0lBQ25FLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQztJQUNoRSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDO0lBQ2xELENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7K0dBOUNVLGlCQUFpQjttR0FBakIsaUJBQWlCLGlNQ3BDOUIsdXJCQXFCQSxtTkRFSSxjQUFjLHFJQUNkLGFBQWEsNklBQ2Isb0JBQW9CLDREQUNwQixnQkFBZ0Isd0RBQ2hCLG1CQUFtQiwyREFDbkIsZ0JBQWdCLHdEQUNoQixrQkFBa0IsMERBQ2xCLGlCQUFpQixtRkFDakIsa0JBQWtCLGdHQUNsQixjQUFjLDZGQUNkLGdCQUFnQjs7NEZBR1AsaUJBQWlCO2tCQW5CN0IsU0FBUzsrQkFDRSxjQUFjLGNBR1osSUFBSSxXQUNQO3dCQUNQLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZ0JBQWdCO3FCQUNqQjs4QkFHUSxJQUFJO3NCQUFaLEtBQUs7Z0JBR04sWUFBWTtzQkFEWCxNQUFNO2dCQUlQLHVCQUF1QjtzQkFEdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50LCBMb2NhbEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVGFJY29uVHlwZSB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQge1xuICBCYWRnZUNvbXBvbmVudCxcbiAgQ2FyZENvbXBvbmVudCxcbiAgQ2FyZENvbnRlbnRDb21wb25lbnQsXG4gIENhcmRDdGFDb21wb25lbnQsXG4gIENhcmRIZWFkZXJDb21wb25lbnQsXG4gIENhcmRUYWdDb21wb25lbnQsXG4gIENhcmRUaXRsZUNvbXBvbmVudCxcbiAgVGl0bGVDb21wb25lbnQsXG4gIFRyaWdyYW1Db21wb25lbnQsXG59IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBFRmlsZUV4dGVuc2lvbiwgRmlsZURhdGEgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1maWxlLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBCYWRnZUNvbXBvbmVudCxcbiAgICBDYXJkQ29tcG9uZW50LFxuICAgIENhcmRDb250ZW50Q29tcG9uZW50LFxuICAgIENhcmRDdGFDb21wb25lbnQsXG4gICAgQ2FyZEhlYWRlckNvbXBvbmVudCxcbiAgICBDYXJkVGFnQ29tcG9uZW50LFxuICAgIENhcmRUaXRsZUNvbXBvbmVudCxcbiAgICBGb250SWNvbkNvbXBvbmVudCxcbiAgICBMb2NhbEljb25Db21wb25lbnQsXG4gICAgVGl0bGVDb21wb25lbnQsXG4gICAgVHJpZ3JhbUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZUNhcmRDb21wb25lbnQge1xuICBASW5wdXQoKSBmaWxlITogRmlsZURhdGE7XG5cbiAgQE91dHB1dCgpXG4gIGZpbGVTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEZpbGVEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZURhdGE+KCk7XG5cbiAgQE91dHB1dCgpXG4gIG1vcmVJbmZvcm1hdGlvblNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RmlsZURhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlRGF0YT4oKTtcblxuICBnZXQgbG9jYWxJY29uKCkge1xuICAgIHN3aXRjaCAodGhpcy5maWxlLmZpbGVFeHRlbnNpb24pIHtcbiAgICAgIGNhc2UgRUZpbGVFeHRlbnNpb24uUERGOlxuICAgICAgICByZXR1cm4gVGFJY29uVHlwZS5QZGY7XG4gICAgICBjYXNlIEVGaWxlRXh0ZW5zaW9uLldvcmQ6XG4gICAgICAgIHJldHVybiBUYUljb25UeXBlLkRvYztcbiAgICAgIGNhc2UgRUZpbGVFeHRlbnNpb24uRXhjZWw6XG4gICAgICAgIHJldHVybiBUYUljb25UeXBlLkV4Y2VsO1xuICAgICAgY2FzZSBFRmlsZUV4dGVuc2lvbi5JbWFnZTpcbiAgICAgICAgcmV0dXJuIFRhSWNvblR5cGUuSW1hZ2U7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gVGFJY29uVHlwZS5Vbmtub3duRmlsZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZmlsZVR5cGUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZS5maWxlTWV0YURhdGE/LmZpbGVUeXBlPy50cmFuc2xhdGVkVmFsdWUgfHwgbnVsbDtcbiAgfVxuXG4gIGdldCB1c2VyVHJpZ3JhbSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLmZpbGVNZXRhRGF0YT8ub3duZXI/Lm5hbWluZz8udHJpZ3JhbSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0IGZpbGVTaXplKCk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbGUuZmlsZU1ldGFEYXRhPy5maWxlU2l6ZSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0IGZpbGVOYW1lKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbGUuZmlsZU1ldGFEYXRhPy5maWxlTmFtZSB8fCBudWxsO1xuICB9XG5cbiAgcHVibGljIG9uSGVhZGVyQ2xpY2tlZCgpIHtcbiAgICB0aGlzLm1vcmVJbmZvcm1hdGlvblNlbGVjdGVkLmVtaXQodGhpcy5maWxlKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJvZHlDbGlja2VkKCkge1xuICAgIHRoaXMuZmlsZVNlbGVjdGVkLmVtaXQodGhpcy5maWxlKTtcbiAgfVxufVxuIiwiPHRhLWNhcmQ+XG4gIDx0YS1jYXJkLWhlYWRlcj5cbiAgICA8dGEtY2FyZC10YWcgY2xhc3M9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICA8dGEtdHJpZ3JhbSBbdmFsdWVdPVwidGhpcy51c2VyVHJpZ3JhbVwiPiA8L3RhLXRyaWdyYW0+XG4gICAgICA8ZGl2IChjbGljayk9XCJ0aGlzLm9uSGVhZGVyQ2xpY2tlZCgpXCI+XG4gICAgICAgIDx0YS1mb250LWljb24gbmFtZT1cIm1vcmVcIiBzaXplPVwieHNcIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGEtY2FyZC10YWc+XG4gICAgPHRhLWNhcmQtdGl0bGU+XG4gICAgICA8dGEtdGl0bGUgW2xldmVsXT1cIjRcIj57eyB0aGlzLmZpbGVOYW1lIH19PC90YS10aXRsZT5cbiAgICA8L3RhLWNhcmQtdGl0bGU+XG4gIDwvdGEtY2FyZC1oZWFkZXI+XG4gIDx0YS1jYXJkLWNvbnRlbnQ+XG4gICAgPGRpdiAoY2xpY2spPVwidGhpcy5vbkJvZHlDbGlja2VkKClcIj5cbiAgICAgIDx0YS1sb2NhbC1pY29uIFt0eXBlXT1cInRoaXMubG9jYWxJY29uXCIgc2l6ZT1cIm1kXCI+PC90YS1sb2NhbC1pY29uPlxuICAgIDwvZGl2PlxuICA8L3RhLWNhcmQtY29udGVudD5cbiAgPHRhLWNhcmQtY3RhPlxuICAgIDx0YS1iYWRnZSBbdmFsdWVdPVwidGhpcy5maWxlVHlwZSA/PyAnJ1wiPiA8L3RhLWJhZGdlPlxuICA8L3RhLWNhcmQtY3RhPlxuPC90YS1jYXJkPlxuIl19
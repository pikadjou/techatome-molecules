import { NgClass, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FontIconComponent } from "@ta/icons";
import * as i0 from "@angular/core";
export class LinkComponent {
    constructor() {
        this.state = "classic";
        this.underline = true;
        this.bold = false;
        this.size = "md";
        this.icon = null;
        this.action = new EventEmitter();
    }
    handleClick() {
        if (this.state === "classic") {
            this.action.emit();
        }
    }
    getClass() {
        const css = {};
        css[this.state] = true;
        css[this.size] = true;
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: LinkComponent, isStandalone: true, selector: "ta-link", inputs: { state: "state", underline: "underline", bold: "bold", size: "size", icon: "icon" }, outputs: { action: "action" }, ngImport: i0, template: "<a\n  class=\"link pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.handleClick()\"\n  [class.align-center]=\"this.icon\"\n  [class.bold]=\"this.bold\"\n>\n  <div class=\"flex-row g-space-sm\">\n    @if (this.icon) {\n    <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\n    }\n    <div class=\"content\" [class.underline]=\"this.underline\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</a>\n", styles: [".link{justify-content:center;color:var(--ta-text-primary)}.link:hover{color:var(--ta-text-brand-primary)}.link.disabled,.link.inactive{cursor:not-allowed;color:var(--ta-neutral-400)}.link .content.underline{text-decoration:underline}.xs{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.md{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.bold{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LinkComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-link", standalone: true, imports: [NgIf, NgClass, FontIconComponent], template: "<a\n  class=\"link pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.handleClick()\"\n  [class.align-center]=\"this.icon\"\n  [class.bold]=\"this.bold\"\n>\n  <div class=\"flex-row g-space-sm\">\n    @if (this.icon) {\n    <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\n    }\n    <div class=\"content\" [class.underline]=\"this.underline\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</a>\n", styles: [".link{justify-content:center;color:var(--ta-text-primary)}.link:hover{color:var(--ta-text-brand-primary)}.link.disabled,.link.inactive{cursor:not-allowed;color:var(--ta-neutral-400)}.link .content.underline{text-decoration:underline}.xs{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.md{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.bold{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { state: [{
                type: Input
            }], underline: [{
                type: Input
            }], bold: [{
                type: Input
            }], size: [{
                type: Input
            }], icon: [{
                type: Input
            }], action: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvbGluay9saW5rLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9saW5rL2xpbmsuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFVOUMsTUFBTSxPQUFPLGFBQWE7SUFtQnhCO1FBakJBLFVBQUssR0FBWSxTQUFTLENBQUM7UUFHM0IsY0FBUyxHQUFhLElBQUksQ0FBQztRQUczQixTQUFJLEdBQVksS0FBSyxDQUFDO1FBR3RCLFNBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsU0FBSSxHQUFrQixJQUFJLENBQUM7UUFHM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFYixDQUFDO0lBRVQsV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVNLFFBQVE7UUFDYixNQUFNLEdBQUcsR0FBaUMsRUFBRSxDQUFDO1FBRTdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXRCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzsrR0FsQ1UsYUFBYTttR0FBYixhQUFhLGdNQ2IxQixzYUFnQkEsbzNCRExrQixPQUFPLG9GQUFFLGlCQUFpQjs7NEZBRS9CLGFBQWE7a0JBUHpCLFNBQVM7K0JBQ0UsU0FBUyxjQUdQLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsaUJBQWlCLENBQUM7d0RBSTNDLEtBQUs7c0JBREosS0FBSztnQkFJTixTQUFTO3NCQURSLEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sTUFBTTtzQkFETCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcywgTmdJZiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBUYVNpemVzLCBUYVN0YXRlIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWxpbmtcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9saW5rLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9saW5rLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgTmdDbGFzcywgRm9udEljb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgc3RhdGU6IFRhU3RhdGUgPSBcImNsYXNzaWNcIjtcblxuICBASW5wdXQoKVxuICB1bmRlcmxpbmU/OiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBib2xkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2l6ZTogVGFTaXplcyA9IFwibWRcIjtcblxuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBAT3V0cHV0KClcbiAgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiY2xhc3NpY1wiKSB7XG4gICAgICB0aGlzLmFjdGlvbi5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENsYXNzKCkge1xuICAgIGNvbnN0IGNzczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG4gICAgY3NzW3RoaXMuc3RhdGVdID0gdHJ1ZTtcbiAgICBjc3NbdGhpcy5zaXplXSA9IHRydWU7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG59XG4iLCI8YVxuICBjbGFzcz1cImxpbmsgcG9pbnRlclwiXG4gIFtuZ0NsYXNzXT1cInRoaXMuZ2V0Q2xhc3MoKVwiXG4gIChjbGljayk9XCJ0aGlzLmhhbmRsZUNsaWNrKClcIlxuICBbY2xhc3MuYWxpZ24tY2VudGVyXT1cInRoaXMuaWNvblwiXG4gIFtjbGFzcy5ib2xkXT1cInRoaXMuYm9sZFwiXG4+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LXJvdyBnLXNwYWNlLXNtXCI+XG4gICAgQGlmICh0aGlzLmljb24pIHtcbiAgICA8dGEtZm9udC1pY29uIFtuYW1lXT1cInRoaXMuaWNvblwiPjwvdGEtZm9udC1pY29uPlxuICAgIH1cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIFtjbGFzcy51bmRlcmxpbmVdPVwidGhpcy51bmRlcmxpbmVcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2E+XG4iXX0=
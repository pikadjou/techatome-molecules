import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { TextComponent } from '../text/text.component';
import * as i0 from "@angular/core";
export class BenefitItemComponent {
    constructor() {
        this.type = 'success';
        this.text = '';
        this.state = 'classic';
        this.isInitialized = false;
    }
    ngOnInit() {
        this.initializeConfig();
        this.isInitialized = true;
    }
    initializeConfig() {
        this.config = {
            icon: this.getIcon(),
            backgroundColor: this.getBackgroundColor(),
            borderColor: this.getBorderColor(),
            iconColor: this.getIconColor()
        };
    }
    get cssClasses() {
        const classes = [`benefit-item--${this.type}`];
        if (this.state !== 'classic') {
            classes.push(`benefit-item--${this.state}`);
        }
        return classes;
    }
    getIcon() {
        switch (this.type) {
            case 'success':
                return 'check';
            case 'warning':
                return 'warning';
            case 'error':
                return 'error';
            default:
                return 'check';
        }
    }
    getBackgroundColor() {
        return `var(--surface-${this.type})`;
    }
    getBorderColor() {
        return `var(--border-${this.type})`;
    }
    getIconColor() {
        return `var(--text-${this.type})`;
    }
    get icon() {
        return this.isInitialized ? this.config.icon : this.getIcon();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BenefitItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BenefitItemComponent, isStandalone: true, selector: "ta-benefit-item", inputs: { type: "type", text: "text", state: "state" }, ngImport: i0, template: "<div \r\n  class=\"benefit-item\"\r\n  [ngClass]=\"this.cssClasses\">\r\n  <ta-font-icon \r\n    [name]=\"this.icon\"\r\n    class=\"benefit-icon\">\r\n  </ta-font-icon>\r\n  <ta-text \r\n    class=\"benefit-text\">\r\n    {{ text }}\r\n  </ta-text>\r\n</div>", styles: [".benefit-item{display:flex;align-items:center;gap:var(--ta-space-sm);margin-bottom:var(--ta-space-sm);padding:var(--ta-space-xs) var(--ta-space-md);background-color:var(--ta-neutral-100);border-radius:var(--ta-radius-rounded);transition:all var(--ta-transition-fast)}.benefit-item.success{border-left:4px solid var(--ta-semantic-green)}.benefit-item.success .benefit-icon{color:var(--ta-semantic-green)}.benefit-item.success:hover{background-color:var(--ta-neutral-200)}.benefit-item.warning{border-left:4px solid var(--ta-semantic-orange)}.benefit-item.warning .benefit-icon{color:var(--ta-semantic-orange)}.benefit-item.warning:hover{background-color:var(--ta-neutral-200)}.benefit-item.error{border-left:4px solid var(--ta-semantic-red)}.benefit-item.error .benefit-icon{color:var(--ta-semantic-red)}.benefit-item.error:hover{background-color:var(--ta-neutral-200)}.benefit-item .benefit-icon{flex-shrink:0}.benefit-item .benefit-text{color:var(--ta-text-primary);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);flex:1}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BenefitItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-benefit-item', standalone: true, imports: [NgClass, FontIconComponent, TextComponent], template: "<div \r\n  class=\"benefit-item\"\r\n  [ngClass]=\"this.cssClasses\">\r\n  <ta-font-icon \r\n    [name]=\"this.icon\"\r\n    class=\"benefit-icon\">\r\n  </ta-font-icon>\r\n  <ta-text \r\n    class=\"benefit-text\">\r\n    {{ text }}\r\n  </ta-text>\r\n</div>", styles: [".benefit-item{display:flex;align-items:center;gap:var(--ta-space-sm);margin-bottom:var(--ta-space-sm);padding:var(--ta-space-xs) var(--ta-space-md);background-color:var(--ta-neutral-100);border-radius:var(--ta-radius-rounded);transition:all var(--ta-transition-fast)}.benefit-item.success{border-left:4px solid var(--ta-semantic-green)}.benefit-item.success .benefit-icon{color:var(--ta-semantic-green)}.benefit-item.success:hover{background-color:var(--ta-neutral-200)}.benefit-item.warning{border-left:4px solid var(--ta-semantic-orange)}.benefit-item.warning .benefit-icon{color:var(--ta-semantic-orange)}.benefit-item.warning:hover{background-color:var(--ta-neutral-200)}.benefit-item.error{border-left:4px solid var(--ta-semantic-red)}.benefit-item.error .benefit-icon{color:var(--ta-semantic-red)}.benefit-item.error:hover{background-color:var(--ta-neutral-200)}.benefit-item .benefit-icon{flex-shrink:0}.benefit-item .benefit-text{color:var(--ta-text-primary);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);flex:1}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], text: [{
                type: Input
            }], state: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZWZpdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9iZW5lZml0LWl0ZW0vYmVuZWZpdC1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9iZW5lZml0LWl0ZW0vYmVuZWZpdC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQWtCdkQsTUFBTSxPQUFPLG9CQUFvQjtJQVBqQztRQVFXLFNBQUksR0FBZ0IsU0FBUyxDQUFDO1FBQzlCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFZLFNBQVMsQ0FBQztRQUcxQixrQkFBYSxHQUFHLEtBQUssQ0FBQztLQW9EakM7SUFsREMsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3BCLGVBQWUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDMUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbEMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixNQUFNLE9BQU8sR0FBRyxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxPQUFPO1FBQ2IsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLEtBQUssU0FBUztnQkFDWixPQUFPLFNBQVMsQ0FBQztZQUNuQixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxPQUFPLENBQUM7WUFDakI7Z0JBQ0UsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsT0FBTyxpQkFBaUIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxjQUFjO1FBQ3BCLE9BQU8sZ0JBQWdCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRU8sWUFBWTtRQUNsQixPQUFPLGNBQWMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEUsQ0FBQzsrR0F6RFUsb0JBQW9CO21HQUFwQixvQkFBb0IsbUlDeEJqQyxxUUFXTSwwcENEV00sT0FBTyxvRkFBRSxpQkFBaUIsbUZBQUUsYUFBYTs7NEZBRXhDLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZixJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxDQUFDOzhCQUczQyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcclxuaW1wb3J0IHsgVGFTdGF0ZSB9IGZyb20gJ0B0YS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL3RleHQvdGV4dC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgQmVuZWZpdFR5cGUgPSAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCZW5lZml0Q29uZmlnIHtcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgYm9yZGVyQ29sb3I6IHN0cmluZztcclxuICBpY29uQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1iZW5lZml0LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9iZW5lZml0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JlbmVmaXQtaXRlbS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW05nQ2xhc3MsIEZvbnRJY29uQ29tcG9uZW50LCBUZXh0Q29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJlbmVmaXRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0eXBlOiBCZW5lZml0VHlwZSA9ICdzdWNjZXNzJztcclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBzdGF0ZTogVGFTdGF0ZSA9ICdjbGFzc2ljJztcclxuXHJcbiAgcHJvdGVjdGVkIGNvbmZpZyE6IEJlbmVmaXRDb25maWc7XHJcbiAgcHJvdGVjdGVkIGlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVDb25maWcoKTtcclxuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVDb25maWcoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHtcclxuICAgICAgaWNvbjogdGhpcy5nZXRJY29uKCksXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5nZXRCYWNrZ3JvdW5kQ29sb3IoKSxcclxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuZ2V0Qm9yZGVyQ29sb3IoKSxcclxuICAgICAgaWNvbkNvbG9yOiB0aGlzLmdldEljb25Db2xvcigpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNzc0NsYXNzZXMoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IFtgYmVuZWZpdC1pdGVtLS0ke3RoaXMudHlwZX1gXTtcclxuICAgIGlmICh0aGlzLnN0YXRlICE9PSAnY2xhc3NpYycpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKGBiZW5lZml0LWl0ZW0tLSR7dGhpcy5zdGF0ZX1gKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJY29uKCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICByZXR1cm4gJ2NoZWNrJztcclxuICAgICAgY2FzZSAnd2FybmluZyc6XHJcbiAgICAgICAgcmV0dXJuICd3YXJuaW5nJztcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHJldHVybiAnZXJyb3InO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnY2hlY2snO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgdmFyKC0tc3VyZmFjZS0ke3RoaXMudHlwZX0pYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Qm9yZGVyQ29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgdmFyKC0tYm9yZGVyLSR7dGhpcy50eXBlfSlgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJY29uQ29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgdmFyKC0tdGV4dC0ke3RoaXMudHlwZX0pYDtcclxuICB9XHJcblxyXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0luaXRpYWxpemVkID8gdGhpcy5jb25maWcuaWNvbiA6IHRoaXMuZ2V0SWNvbigpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IFxyXG4gIGNsYXNzPVwiYmVuZWZpdC1pdGVtXCJcclxuICBbbmdDbGFzc109XCJ0aGlzLmNzc0NsYXNzZXNcIj5cclxuICA8dGEtZm9udC1pY29uIFxyXG4gICAgW25hbWVdPVwidGhpcy5pY29uXCJcclxuICAgIGNsYXNzPVwiYmVuZWZpdC1pY29uXCI+XHJcbiAgPC90YS1mb250LWljb24+XHJcbiAgPHRhLXRleHQgXHJcbiAgICBjbGFzcz1cImJlbmVmaXQtdGV4dFwiPlxyXG4gICAge3sgdGV4dCB9fVxyXG4gIDwvdGEtdGV4dD5cclxuPC9kaXY+Il19
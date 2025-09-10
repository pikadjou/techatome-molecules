import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { StopPropagationDirective } from '@ta/utils';
import * as i0 from "@angular/core";
export class ButtonComponent {
    constructor() {
        /**
         * Is button type
         */
        this.state = 'classic';
        /**
         * Indicate the button type
         */
        this.type = 'primary';
        this.size = 'medium';
        this.icon = null;
        /**
         * Class - Add custom classes separates by space
         * Outline - Draw a border around the button when true
         * Rounded - Make button rounded when true
         * Circular - Make button circular when true
         */
        this.options = null;
        this.stopPropagationActivation = true;
        /**
         * Event emitted when button is clicked
         */
        this.action = new EventEmitter();
    }
    handleClick() {
        if (this.state === 'classic') {
            this.action.emit();
        }
    }
    getClass() {
        const css = {};
        css[this.state] = true;
        css[this.size] = true;
        css[this.type] = true;
        if (this.options?.circular === true) {
            css['circular'] = true;
        }
        if (this.options?.circular === 'big') {
            css['circular big'] = true;
        }
        if (this.options?.circular === 'small') {
            css['circular small'] = true;
        }
        if (this.options?.class) {
            css[this.options.class] = true;
        }
        if (this.options?.border === false) {
            css['no-border'] = true;
        }
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ButtonComponent, isStandalone: true, selector: "ta-button", inputs: { state: "state", type: "type", size: "size", icon: "icon", options: "options", stopPropagationActivation: "stopPropagationActivation" }, outputs: { action: "action" }, ngImport: i0, template: "<button\r\n  appStopPropagation\r\n  [stopPropagationActivation]=\"this.stopPropagationActivation\"\r\n  type=\"button\"\r\n  class=\"button pointer\"\r\n  [ngClass]=\"this.getClass()\"\r\n  (click)=\"handleClick()\"\r\n>\r\n  <div class=\"flex-row g-space-sm align-center\">\r\n    @if (this.icon) {\r\n      <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\r\n    }\r\n    <ng-content></ng-content>\r\n  </div>\r\n</button>\r\n", styles: [".button{width:100%;border:none;border-radius:var(--ta-components-button-radius);padding:var(--ta-components-button-padding-vertical) var(--ta-components-button-padding-horizontal);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-components-button-gap)}.button.small{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-components-button-small-padding-vertical) var(--ta-components-button-small-padding-horizontal)}.button.large{padding:var(--ta-components-button-large-padding-vertical) var(--ta-components-button-large-padding-horizontal)}.button.no-border{border:none}.button.disabled,.button.inactive{cursor:not-allowed}.button.primary{color:var(--ta-components-button-primary-color);background-color:var(--ta-components-button-primary-background)}.button.primary:hover{background-color:var(--ta-components-button-primary-hover-background)}.button.primary.disabled{color:var(--ta-components-button-text-disabled);background-color:var(--ta-components-button-primary-disabled-background)}.button.primary.inactive{color:var(--ta-components-button-text-inactive);background-color:var(--ta-components-button-primary-inactive-background)}.button.primary ta-font-icon{color:var(--ta-components-button-primary-icon-color)}.button.secondary{color:var(--ta-components-button-secondary-color);background-color:var(--ta-components-button-secondary-background);border:1px solid var(--ta-components-button-secondary-border)}.button.secondary:hover{border-color:var(--ta-components-button-secondary-hover-border)}.button.secondary.disabled{color:var(--ta-components-button-text-tertiary);border-color:var(--ta-components-button-border-disabled)}.button.secondary.inactive{border-color:var(--ta-components-button-border-primary)}.button.secondary ta-font-icon{color:var(--ta-components-button-secondary-icon-color)}.circular{height:var(--ta-components-button-circular-height);width:var(--ta-components-button-circular-width);border-radius:var(--ta-components-button-circular-radius);padding:var(--ta-components-button-circular-padding)}.circular.big{height:var(--ta-components-button-circular-big-height);width:var(--ta-components-button-circular-big-width)}.circular.small{height:var(--ta-components-button-circular-small-height);width:var(--ta-components-button-circular-small-width)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-button', standalone: true, imports: [NgClass, NgIf, FontIconComponent, StopPropagationDirective], template: "<button\r\n  appStopPropagation\r\n  [stopPropagationActivation]=\"this.stopPropagationActivation\"\r\n  type=\"button\"\r\n  class=\"button pointer\"\r\n  [ngClass]=\"this.getClass()\"\r\n  (click)=\"handleClick()\"\r\n>\r\n  <div class=\"flex-row g-space-sm align-center\">\r\n    @if (this.icon) {\r\n      <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\r\n    }\r\n    <ng-content></ng-content>\r\n  </div>\r\n</button>\r\n", styles: [".button{width:100%;border:none;border-radius:var(--ta-components-button-radius);padding:var(--ta-components-button-padding-vertical) var(--ta-components-button-padding-horizontal);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-components-button-gap)}.button.small{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-components-button-small-padding-vertical) var(--ta-components-button-small-padding-horizontal)}.button.large{padding:var(--ta-components-button-large-padding-vertical) var(--ta-components-button-large-padding-horizontal)}.button.no-border{border:none}.button.disabled,.button.inactive{cursor:not-allowed}.button.primary{color:var(--ta-components-button-primary-color);background-color:var(--ta-components-button-primary-background)}.button.primary:hover{background-color:var(--ta-components-button-primary-hover-background)}.button.primary.disabled{color:var(--ta-components-button-text-disabled);background-color:var(--ta-components-button-primary-disabled-background)}.button.primary.inactive{color:var(--ta-components-button-text-inactive);background-color:var(--ta-components-button-primary-inactive-background)}.button.primary ta-font-icon{color:var(--ta-components-button-primary-icon-color)}.button.secondary{color:var(--ta-components-button-secondary-color);background-color:var(--ta-components-button-secondary-background);border:1px solid var(--ta-components-button-secondary-border)}.button.secondary:hover{border-color:var(--ta-components-button-secondary-hover-border)}.button.secondary.disabled{color:var(--ta-components-button-text-tertiary);border-color:var(--ta-components-button-border-disabled)}.button.secondary.inactive{border-color:var(--ta-components-button-border-primary)}.button.secondary ta-font-icon{color:var(--ta-components-button-secondary-icon-color)}.circular{height:var(--ta-components-button-circular-height);width:var(--ta-components-button-circular-width);border-radius:var(--ta-components-button-circular-radius);padding:var(--ta-components-button-circular-padding)}.circular.big{height:var(--ta-components-button-circular-big-height);width:var(--ta-components-button-circular-big-width)}.circular.small{height:var(--ta-components-button-circular-small-height);width:var(--ta-components-button-circular-small-width)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { state: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], icon: [{
                type: Input
            }], options: [{
                type: Input
            }], stopPropagationActivation: [{
                type: Input
            }], action: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFOUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVNyRCxNQUFNLE9BQU8sZUFBZTtJQXdDMUI7UUF2Q0E7O1dBRUc7UUFFSCxVQUFLLEdBQVksU0FBUyxDQUFDO1FBRTNCOztXQUVHO1FBRUgsU0FBSSxHQUF1QyxTQUFTLENBQUM7UUFHckQsU0FBSSxHQUFpQyxRQUFRLENBQUM7UUFHOUMsU0FBSSxHQUFrQixJQUFJLENBQUM7UUFDM0I7Ozs7O1dBS0c7UUFFSCxZQUFPLEdBSUksSUFBSSxDQUFDO1FBR2hCLDhCQUF5QixHQUFHLElBQUksQ0FBQztRQUVqQzs7V0FFRztRQUVILFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRWIsQ0FBQztJQUVULFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFTSxRQUFRO1FBQ2IsTUFBTSxHQUFHLEdBQWlDLEVBQUUsQ0FBQztRQUU3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3BDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEtBQUssS0FBSyxFQUFFLENBQUM7WUFDckMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUN2QyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEtBQUssS0FBSyxFQUFFLENBQUM7WUFDbkMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOytHQXhFVSxlQUFlO21HQUFmLGVBQWUsc1BDZDVCLGliQWVBLHdqRkRIWSxPQUFPLG9GQUFRLGlCQUFpQixtRkFBRSx3QkFBd0I7OzRGQUV6RCxlQUFlO2tCQVAzQixTQUFTOytCQUNFLFdBQVcsY0FHVCxJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixDQUFDO3dEQU9yRSxLQUFLO3NCQURKLEtBQUs7Z0JBT04sSUFBSTtzQkFESCxLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUs7Z0JBU04sT0FBTztzQkFETixLQUFLO2dCQVFOLHlCQUF5QjtzQkFEeEIsS0FBSztnQkFPTixNQUFNO3NCQURMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRhU3RhdGUgfSBmcm9tICdAdGEvc3R5bGVzJztcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3MsIE5nSWYsIEZvbnRJY29uQ29tcG9uZW50LCBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuICAvKipcbiAgICogSXMgYnV0dG9uIHR5cGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHN0YXRlOiBUYVN0YXRlID0gJ2NsYXNzaWMnO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZSB0aGUgYnV0dG9uIHR5cGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHR5cGU6ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ2RhbmdlcicgPSAncHJpbWFyeSc7XG5cbiAgQElucHV0KClcbiAgc2l6ZTogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyA9ICdtZWRpdW0nO1xuXG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAvKipcbiAgICogQ2xhc3MgLSBBZGQgY3VzdG9tIGNsYXNzZXMgc2VwYXJhdGVzIGJ5IHNwYWNlXG4gICAqIE91dGxpbmUgLSBEcmF3IGEgYm9yZGVyIGFyb3VuZCB0aGUgYnV0dG9uIHdoZW4gdHJ1ZVxuICAgKiBSb3VuZGVkIC0gTWFrZSBidXR0b24gcm91bmRlZCB3aGVuIHRydWVcbiAgICogQ2lyY3VsYXIgLSBNYWtlIGJ1dHRvbiBjaXJjdWxhciB3aGVuIHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIG9wdGlvbnM6IHtcbiAgICBjbGFzcz86IHN0cmluZztcbiAgICBjaXJjdWxhcj86IGJvb2xlYW4gfCAnYmlnJyB8ICdzbWFsbCc7XG4gICAgYm9yZGVyPzogYm9vbGVhbjtcbiAgfSB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHN0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb24gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBoYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2NsYXNzaWMnKSB7XG4gICAgICB0aGlzLmFjdGlvbi5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENsYXNzKCkge1xuICAgIGNvbnN0IGNzczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG4gICAgY3NzW3RoaXMuc3RhdGVdID0gdHJ1ZTtcbiAgICBjc3NbdGhpcy5zaXplXSA9IHRydWU7XG4gICAgY3NzW3RoaXMudHlwZV0gPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucz8uY2lyY3VsYXIgPT09IHRydWUpIHtcbiAgICAgIGNzc1snY2lyY3VsYXInXSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnM/LmNpcmN1bGFyID09PSAnYmlnJykge1xuICAgICAgY3NzWydjaXJjdWxhciBiaWcnXSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnM/LmNpcmN1bGFyID09PSAnc21hbGwnKSB7XG4gICAgICBjc3NbJ2NpcmN1bGFyIHNtYWxsJ10gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zPy5jbGFzcykge1xuICAgICAgY3NzW3RoaXMub3B0aW9ucy5jbGFzc10gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zPy5ib3JkZXIgPT09IGZhbHNlKSB7XG4gICAgICBjc3NbJ25vLWJvcmRlciddID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG59XG4iLCI8YnV0dG9uXHJcbiAgYXBwU3RvcFByb3BhZ2F0aW9uXHJcbiAgW3N0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb25dPVwidGhpcy5zdG9wUHJvcGFnYXRpb25BY3RpdmF0aW9uXCJcclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBjbGFzcz1cImJ1dHRvbiBwb2ludGVyXCJcclxuICBbbmdDbGFzc109XCJ0aGlzLmdldENsYXNzKClcIlxyXG4gIChjbGljayk9XCJoYW5kbGVDbGljaygpXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4LXJvdyBnLXNwYWNlLXNtIGFsaWduLWNlbnRlclwiPlxyXG4gICAgQGlmICh0aGlzLmljb24pIHtcclxuICAgICAgPHRhLWZvbnQtaWNvbiBbbmFtZV09XCJ0aGlzLmljb25cIj48L3RhLWZvbnQtaWNvbj5cclxuICAgIH1cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9idXR0b24+XHJcbiJdfQ==
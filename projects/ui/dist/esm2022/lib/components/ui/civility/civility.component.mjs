import { NgIf } from '@angular/common';
import { MaterialIconComponent } from '@ta/icons';
import { Component, Input } from '@angular/core';
import { Civility } from '@ta/utils';
import * as i0 from "@angular/core";
export class CivilityComponent {
    constructor() { }
    getIcon() {
        switch (this.civility) {
            case Civility.Unknown:
                return '';
            case Civility.Dear:
                return 'wc';
            case Civility.Madame:
                return 'woman';
            case Civility.Sir:
                return 'man';
            default:
                return '';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CivilityComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: CivilityComponent, isStandalone: true, selector: "ta-civility", inputs: { civility: "civility" }, ngImport: i0, template: "@if (this.civility) {\n  <ta-material-icon>\n    {{ this.getIcon() }}\n  </ta-material-icon>\n}\n", styles: [""], dependencies: [{ kind: "component", type: MaterialIconComponent, selector: "ta-material-icon", inputs: ["outline", "sharp", "round", "dualTone", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CivilityComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-civility', standalone: true, imports: [NgIf, MaterialIconComponent], template: "@if (this.civility) {\n  <ta-material-icon>\n    {{ this.getIcon() }}\n  </ta-material-icon>\n}\n" }]
        }], ctorParameters: () => [], propDecorators: { civility: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l2aWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL2NpdmlsaXR5L2NpdmlsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jaXZpbGl0eS9jaXZpbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBU3JDLE1BQU0sT0FBTyxpQkFBaUI7SUFPNUIsZ0JBQWUsQ0FBQztJQUVULE9BQU87UUFDWixRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNuQixPQUFPLEVBQUUsQ0FBQztZQUNaLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbEIsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxRQUFRLENBQUMsR0FBRztnQkFDZixPQUFPLEtBQUssQ0FBQztZQUNmO2dCQUNFLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7K0dBdEJVLGlCQUFpQjttR0FBakIsaUJBQWlCLHlHQ2I5QixtR0FLQSwwRERNa0IscUJBQXFCOzs0RkFFMUIsaUJBQWlCO2tCQVA3QixTQUFTOytCQUNBLGFBQWEsY0FHVCxJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLENBQUM7d0RBT3RDLFFBQVE7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2l2aWxpdHkgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbnNlbGVjdG9yOiAndGEtY2l2aWxpdHknLFxuICB0ZW1wbGF0ZVVybDogJy4vY2l2aWxpdHkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaXZpbGl0eS5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgTWF0ZXJpYWxJY29uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2l2aWxpdHlDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmaW5lIHRoZSBjaXZpbGl0eSB0byBkaXNwbGF5XG4gICAqL1xuICBASW5wdXQoKVxuICBjaXZpbGl0eSE6IENpdmlsaXR5IHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGdldEljb24oKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMuY2l2aWxpdHkpIHtcbiAgICAgIGNhc2UgQ2l2aWxpdHkuVW5rbm93bjpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgY2FzZSBDaXZpbGl0eS5EZWFyOlxuICAgICAgICByZXR1cm4gJ3djJztcbiAgICAgIGNhc2UgQ2l2aWxpdHkuTWFkYW1lOlxuICAgICAgICByZXR1cm4gJ3dvbWFuJztcbiAgICAgIGNhc2UgQ2l2aWxpdHkuU2lyOlxuICAgICAgICByZXR1cm4gJ21hbic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59XG4iLCJAaWYgKHRoaXMuY2l2aWxpdHkpIHtcbiAgPHRhLW1hdGVyaWFsLWljb24+XG4gICAge3sgdGhpcy5nZXRJY29uKCkgfX1cbiAgPC90YS1tYXRlcmlhbC1pY29uPlxufVxuIl19
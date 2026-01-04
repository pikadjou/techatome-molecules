import { NgIf } from "@angular/common";
import { MaterialIconComponent } from "@ta/icons";
import { Component, input } from "@angular/core";
import { Civility } from "@ta/utils";
import * as i0 from "@angular/core";
export class CivilityComponent {
    constructor() {
        /**
         * Define the civility to display
         */
        this.civility = input.required();
    }
    getIcon() {
        switch (this.civility()) {
            case Civility.Unknown:
                return "";
            case Civility.Dear:
                return "wc";
            case Civility.Madame:
                return "woman";
            case Civility.Sir:
                return "man";
            default:
                return "";
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CivilityComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: CivilityComponent, isStandalone: true, selector: "ta-civility", inputs: { civility: { classPropertyName: "civility", publicName: "civility", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "@if (this.civility()) {\n<ta-material-icon>\n  {{ this.getIcon() }}\n</ta-material-icon>\n}\n", styles: [""], dependencies: [{ kind: "component", type: MaterialIconComponent, selector: "ta-material-icon", inputs: ["outline", "sharp", "round", "dualTone", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CivilityComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-civility", standalone: true, imports: [NgIf, MaterialIconComponent], template: "@if (this.civility()) {\n<ta-material-icon>\n  {{ this.getIcon() }}\n</ta-material-icon>\n}\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l2aWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL2NpdmlsaXR5L2NpdmlsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jaXZpbGl0eS9jaXZpbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBU3JDLE1BQU0sT0FBTyxpQkFBaUI7SUFNNUI7UUFMQTs7V0FFRztRQUNILGFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFtQixDQUFDO0lBRTlCLENBQUM7SUFFVCxPQUFPO1FBQ1osUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUN4QixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNuQixPQUFPLEVBQUUsQ0FBQztZQUNaLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbEIsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxRQUFRLENBQUMsR0FBRztnQkFDZixPQUFPLEtBQUssQ0FBQztZQUNmO2dCQUNFLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7K0dBckJVLGlCQUFpQjttR0FBakIsaUJBQWlCLG1OQ2I5QiwrRkFLQSwwRERNa0IscUJBQXFCOzs0RkFFMUIsaUJBQWlCO2tCQVA3QixTQUFTOytCQUNFLGFBQWEsY0FHWCxJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IENpdmlsaXR5IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtY2l2aWxpdHlcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaXZpbGl0eS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2l2aWxpdHkuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBNYXRlcmlhbEljb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDaXZpbGl0eUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGNpdmlsaXR5IHRvIGRpc3BsYXlcbiAgICovXG4gIGNpdmlsaXR5ID0gaW5wdXQucmVxdWlyZWQ8Q2l2aWxpdHkgfCBudWxsPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodGhpcy5jaXZpbGl0eSgpKSB7XG4gICAgICBjYXNlIENpdmlsaXR5LlVua25vd246XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgY2FzZSBDaXZpbGl0eS5EZWFyOlxuICAgICAgICByZXR1cm4gXCJ3Y1wiO1xuICAgICAgY2FzZSBDaXZpbGl0eS5NYWRhbWU6XG4gICAgICAgIHJldHVybiBcIndvbWFuXCI7XG4gICAgICBjYXNlIENpdmlsaXR5LlNpcjpcbiAgICAgICAgcmV0dXJuIFwibWFuXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpZiAodGhpcy5jaXZpbGl0eSgpKSB7XG48dGEtbWF0ZXJpYWwtaWNvbj5cbiAge3sgdGhpcy5nZXRJY29uKCkgfX1cbjwvdGEtbWF0ZXJpYWwtaWNvbj5cbn1cbiJdfQ==
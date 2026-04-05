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
            args: [{ selector: "ta-civility", standalone: true, imports: [MaterialIconComponent], template: "@if (this.civility()) {\n<ta-material-icon>\n  {{ this.getIcon() }}\n</ta-material-icon>\n}\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l2aWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL2NpdmlsaXR5L2NpdmlsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jaXZpbGl0eS9jaXZpbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFTckMsTUFBTSxPQUFPLGlCQUFpQjtJQU01QjtRQUxBOztXQUVHO1FBQ0gsYUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQW1CLENBQUM7SUFFOUIsQ0FBQztJQUVULE9BQU87UUFDWixRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssUUFBUSxDQUFDLE9BQU87Z0JBQ25CLE9BQU8sRUFBRSxDQUFDO1lBQ1osS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDaEIsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNsQixPQUFPLE9BQU8sQ0FBQztZQUNqQixLQUFLLFFBQVEsQ0FBQyxHQUFHO2dCQUNmLE9BQU8sS0FBSyxDQUFDO1lBQ2Y7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQzsrR0FyQlUsaUJBQWlCO21HQUFqQixpQkFBaUIsbU5DWjlCLCtGQUtBLDBEREtZLHFCQUFxQjs7NEZBRXBCLGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRSxhQUFhLGNBR1gsSUFBSSxXQUNQLENBQUMscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXRlcmlhbEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIGlucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQ2l2aWxpdHkgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1jaXZpbGl0eVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NpdmlsaXR5LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jaXZpbGl0eS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdGVyaWFsSWNvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENpdmlsaXR5Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmluZSB0aGUgY2l2aWxpdHkgdG8gZGlzcGxheVxuICAgKi9cbiAgY2l2aWxpdHkgPSBpbnB1dC5yZXF1aXJlZDxDaXZpbGl0eSB8IG51bGw+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLmNpdmlsaXR5KCkpIHtcbiAgICAgIGNhc2UgQ2l2aWxpdHkuVW5rbm93bjpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICBjYXNlIENpdmlsaXR5LkRlYXI6XG4gICAgICAgIHJldHVybiBcIndjXCI7XG4gICAgICBjYXNlIENpdmlsaXR5Lk1hZGFtZTpcbiAgICAgICAgcmV0dXJuIFwid29tYW5cIjtcbiAgICAgIGNhc2UgQ2l2aWxpdHkuU2lyOlxuICAgICAgICByZXR1cm4gXCJtYW5cIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxufVxuIiwiQGlmICh0aGlzLmNpdmlsaXR5KCkpIHtcbjx0YS1tYXRlcmlhbC1pY29uPlxuICB7eyB0aGlzLmdldEljb24oKSB9fVxuPC90YS1tYXRlcmlhbC1pY29uPlxufVxuIl19
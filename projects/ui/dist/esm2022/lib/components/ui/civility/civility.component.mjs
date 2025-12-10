import { NgIf } from "@angular/common";
import { MaterialIconComponent } from "@ta/icons";
import { Component, Input } from "@angular/core";
import { Civility } from "@ta/utils";
import * as i0 from "@angular/core";
export class CivilityComponent {
    constructor() { }
    getIcon() {
        switch (this.civility) {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: CivilityComponent, isStandalone: true, selector: "ta-civility", inputs: { civility: "civility" }, ngImport: i0, template: "@if (this.civility) {\n<ta-material-icon>\n  {{ this.getIcon() }}\n</ta-material-icon>\n}\n", styles: [""], dependencies: [{ kind: "component", type: MaterialIconComponent, selector: "ta-material-icon", inputs: ["outline", "sharp", "round", "dualTone", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CivilityComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-civility", standalone: true, imports: [NgIf, MaterialIconComponent], template: "@if (this.civility) {\n<ta-material-icon>\n  {{ this.getIcon() }}\n</ta-material-icon>\n}\n" }]
        }], ctorParameters: () => [], propDecorators: { civility: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l2aWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL2NpdmlsaXR5L2NpdmlsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jaXZpbGl0eS9jaXZpbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBU3JDLE1BQU0sT0FBTyxpQkFBaUI7SUFPNUIsZ0JBQWUsQ0FBQztJQUVULE9BQU87UUFDWixRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNuQixPQUFPLEVBQUUsQ0FBQztZQUNaLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbEIsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxRQUFRLENBQUMsR0FBRztnQkFDZixPQUFPLEtBQUssQ0FBQztZQUNmO2dCQUNFLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7K0dBdEJVLGlCQUFpQjttR0FBakIsaUJBQWlCLHlHQ2I5Qiw2RkFLQSwwRERNa0IscUJBQXFCOzs0RkFFMUIsaUJBQWlCO2tCQVA3QixTQUFTOytCQUNFLGFBQWEsY0FHWCxJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLENBQUM7d0RBT3RDLFFBQVE7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQ2l2aWxpdHkgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1jaXZpbGl0eVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NpdmlsaXR5LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jaXZpbGl0eS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE1hdGVyaWFsSWNvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENpdmlsaXR5Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmluZSB0aGUgY2l2aWxpdHkgdG8gZGlzcGxheVxuICAgKi9cbiAgQElucHV0KClcbiAgY2l2aWxpdHkhOiBDaXZpbGl0eSB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLmNpdmlsaXR5KSB7XG4gICAgICBjYXNlIENpdmlsaXR5LlVua25vd246XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgY2FzZSBDaXZpbGl0eS5EZWFyOlxuICAgICAgICByZXR1cm4gXCJ3Y1wiO1xuICAgICAgY2FzZSBDaXZpbGl0eS5NYWRhbWU6XG4gICAgICAgIHJldHVybiBcIndvbWFuXCI7XG4gICAgICBjYXNlIENpdmlsaXR5LlNpcjpcbiAgICAgICAgcmV0dXJuIFwibWFuXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpZiAodGhpcy5jaXZpbGl0eSkge1xuPHRhLW1hdGVyaWFsLWljb24+XG4gIHt7IHRoaXMuZ2V0SWNvbigpIH19XG48L3RhLW1hdGVyaWFsLWljb24+XG59XG4iXX0=
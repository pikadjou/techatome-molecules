import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { PictureInfoMessageComponent } from "../../../components/ui/picture-info-message/picture-info-message.component";
import { TaTranslationUI } from "../../../translation.service";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class ErrorComponent {
    constructor() {
        this.message = "";
        this.code = 200;
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErrorComponent, isStandalone: true, selector: "ta-error", inputs: { message: "message", code: "code" }, ngImport: i0, template: "@if (this.message === '') {\n<ng-content></ng-content>\n} @else {\n<ta-picture-info-message\n  icon=\"sad\"\n  iconSize=\"lg\"\n  type=\"danger\"\n  text=\"container.error.title\"\n>\n</ta-picture-info-message>\n<p>{{ this.message | translate }}</p>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: PictureInfoMessageComponent, selector: "ta-picture-info-message", inputs: ["icon", "iconSize", "text", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-error", standalone: true, imports: [NgIf, TranslateModule, PictureInfoMessageComponent], template: "@if (this.message === '') {\n<ng-content></ng-content>\n} @else {\n<ta-picture-info-message\n  icon=\"sad\"\n  iconSize=\"lg\"\n  type=\"danger\"\n  text=\"container.error.title\"\n>\n</ta-picture-info-message>\n<p>{{ this.message | translate }}</p>\n}\n" }]
        }], ctorParameters: () => [], propDecorators: { message: [{
                type: Input
            }], code: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDekgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFTL0QsTUFBTSxPQUFPLGNBQWM7SUFPekI7UUFMQSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR2IsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUdULGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOytHQVRVLGNBQWM7bUdBQWQsY0FBYyxrSENmM0IsZ1FBWUEseUREQ2tCLGVBQWUsNEZBQUUsMkJBQTJCOzs0RkFFakQsY0FBYztrQkFQMUIsU0FBUzsrQkFDRSxVQUFVLGNBR1IsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQzt3REFJN0QsT0FBTztzQkFETixLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcblxuaW1wb3J0IHsgUGljdHVyZUluZm9NZXNzYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdWkvcGljdHVyZS1pbmZvLW1lc3NhZ2UvcGljdHVyZS1pbmZvLW1lc3NhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uVUkgfSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtZXJyb3JcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9lcnJvci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZXJyb3IuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBUcmFuc2xhdGVNb2R1bGUsIFBpY3R1cmVJbmZvTWVzc2FnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbWVzc2FnZSA9IFwiXCI7XG5cbiAgQElucHV0KClcbiAgY29kZSA9IDIwMDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLm1lc3NhZ2UgPT09ICcnKSB7XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG59IEBlbHNlIHtcbjx0YS1waWN0dXJlLWluZm8tbWVzc2FnZVxuICBpY29uPVwic2FkXCJcbiAgaWNvblNpemU9XCJsZ1wiXG4gIHR5cGU9XCJkYW5nZXJcIlxuICB0ZXh0PVwiY29udGFpbmVyLmVycm9yLnRpdGxlXCJcbj5cbjwvdGEtcGljdHVyZS1pbmZvLW1lc3NhZ2U+XG48cD57eyB0aGlzLm1lc3NhZ2UgfCB0cmFuc2xhdGUgfX08L3A+XG59XG4iXX0=
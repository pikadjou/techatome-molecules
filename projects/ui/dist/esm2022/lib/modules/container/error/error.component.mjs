import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PictureInfoMessageComponent } from '../../../components/ui/picture-info-message/picture-info-message.component';
import { CamTranslationContainer } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class ErrorComponent {
    constructor() {
        this.message = '';
        this.code = 200;
        CamTranslationContainer.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ErrorComponent, isStandalone: true, selector: "ta-error", inputs: { message: "message", code: "code" }, ngImport: i0, template: "@if (this.message === '') {\n  <ng-content></ng-content>\n} @else {\n  <ta-picture-info-message icon=\"sad\" iconSize=\"lg\" type=\"danger\" text=\"container.error.title\">\n  </ta-picture-info-message>\n  <p>{{ this.message | translate }}</p>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: PictureInfoMessageComponent, selector: "ta-picture-info-message", inputs: ["icon", "iconSize", "text", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-error', standalone: true, imports: [NgIf, TranslateModule, PictureInfoMessageComponent], template: "@if (this.message === '') {\n  <ng-content></ng-content>\n} @else {\n  <ta-picture-info-message icon=\"sad\" iconSize=\"lg\" type=\"danger\" text=\"container.error.title\">\n  </ta-picture-info-message>\n  <p>{{ this.message | translate }}</p>\n}\n" }]
        }], ctorParameters: () => [], propDecorators: { message: [{
                type: Input
            }], code: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFFekgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVNqRSxNQUFNLE9BQU8sY0FBYztJQU96QjtRQUxBLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBR1QsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsQ0FBQzsrR0FUVSxjQUFjO21HQUFkLGNBQWMsa0hDZDNCLDBQQU9BLHlEREtrQixlQUFlLDRGQUFFLDJCQUEyQjs7NEZBRWpELGNBQWM7a0JBUDFCLFNBQVM7K0JBQ0EsVUFBVSxjQUdOLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsMkJBQTJCLENBQUM7d0RBSTdELE9BQU87c0JBRE4sS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgUGljdHVyZUluZm9NZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy91aS9waWN0dXJlLWluZm8tbWVzc2FnZS9waWN0dXJlLWluZm8tbWVzc2FnZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbnNlbGVjdG9yOiAndGEtZXJyb3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lcnJvci5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgVHJhbnNsYXRlTW9kdWxlLCBQaWN0dXJlSW5mb01lc3NhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIG1lc3NhZ2UgPSAnJztcblxuICBASW5wdXQoKVxuICBjb2RlID0gMjAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIENhbVRyYW5zbGF0aW9uQ29udGFpbmVyLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiIsIkBpZiAodGhpcy5tZXNzYWdlID09PSAnJykge1xuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG59IEBlbHNlIHtcbiAgPHRhLXBpY3R1cmUtaW5mby1tZXNzYWdlIGljb249XCJzYWRcIiBpY29uU2l6ZT1cImxnXCIgdHlwZT1cImRhbmdlclwiIHRleHQ9XCJjb250YWluZXIuZXJyb3IudGl0bGVcIj5cbiAgPC90YS1waWN0dXJlLWluZm8tbWVzc2FnZT5cbiAgPHA+e3sgdGhpcy5tZXNzYWdlIHwgdHJhbnNsYXRlIH19PC9wPlxufVxuIl19
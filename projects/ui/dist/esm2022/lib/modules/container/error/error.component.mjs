import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PictureInfoMessageComponent } from '../../../components/ui/picture-info-message/picture-info-message.component';
import { TaTranslationContainer } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class ErrorComponent {
    constructor() {
        this.message = '';
        this.code = 200;
        TaTranslationContainer.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErrorComponent, isStandalone: true, selector: "ta-error", inputs: { message: "message", code: "code" }, ngImport: i0, template: "@if (this.message === '') {\n  <ng-content></ng-content>\n} @else {\n  <ta-picture-info-message icon=\"sad\" iconSize=\"lg\" type=\"danger\" text=\"container.error.title\">\n  </ta-picture-info-message>\n  <p>{{ this.message | translate }}</p>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: PictureInfoMessageComponent, selector: "ta-picture-info-message", inputs: ["icon", "iconSize", "text", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-error', standalone: true, imports: [NgIf, TranslateModule, PictureInfoMessageComponent], template: "@if (this.message === '') {\n  <ng-content></ng-content>\n} @else {\n  <ta-picture-info-message icon=\"sad\" iconSize=\"lg\" type=\"danger\" text=\"container.error.title\">\n  </ta-picture-info-message>\n  <p>{{ this.message | translate }}</p>\n}\n" }]
        }], ctorParameters: () => [], propDecorators: { message: [{
                type: Input
            }], code: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDekgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVNoRSxNQUFNLE9BQU8sY0FBYztJQU96QjtRQUxBLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBR1Qsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzsrR0FUVSxjQUFjO21HQUFkLGNBQWMsa0hDZjNCLDBQQU9BLHlERE1rQixlQUFlLDRGQUFFLDJCQUEyQjs7NEZBRWpELGNBQWM7a0JBUDFCLFNBQVM7K0JBQ0UsVUFBVSxjQUdSLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsMkJBQTJCLENBQUM7d0RBSTdELE9BQU87c0JBRE4sS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IFBpY3R1cmVJbmZvTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdWkvcGljdHVyZS1pbmZvLW1lc3NhZ2UvcGljdHVyZS1pbmZvLW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25Db250YWluZXIgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtZXJyb3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lcnJvci5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgVHJhbnNsYXRlTW9kdWxlLCBQaWN0dXJlSW5mb01lc3NhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIG1lc3NhZ2UgPSAnJztcblxuICBASW5wdXQoKVxuICBjb2RlID0gMjAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25Db250YWluZXIuZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLm1lc3NhZ2UgPT09ICcnKSB7XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbn0gQGVsc2Uge1xuICA8dGEtcGljdHVyZS1pbmZvLW1lc3NhZ2UgaWNvbj1cInNhZFwiIGljb25TaXplPVwibGdcIiB0eXBlPVwiZGFuZ2VyXCIgdGV4dD1cImNvbnRhaW5lci5lcnJvci50aXRsZVwiPlxuICA8L3RhLXBpY3R1cmUtaW5mby1tZXNzYWdlPlxuICA8cD57eyB0aGlzLm1lc3NhZ2UgfCB0cmFuc2xhdGUgfX08L3A+XG59XG4iXX0=
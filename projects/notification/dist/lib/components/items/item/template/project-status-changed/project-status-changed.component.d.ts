import { AbstractNotificationTemplateComponent } from '../abstract';
import * as i0 from "@angular/core";
export declare class ProjectStatusChangedComponent extends AbstractNotificationTemplateComponent {
    template: import("@angular/core").TemplateRef<any> | null;
    get projectStatus(): number;
    goTo(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProjectStatusChangedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProjectStatusChangedComponent, "ta-notification-project-status-changed", never, {}, {}, never, never, true, never>;
}

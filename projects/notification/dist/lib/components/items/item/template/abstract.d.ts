import { CamNotificationDataService } from '../../../../services/data.service';
import { NotificationDto } from '../../../../services/dto/notification';
import { CamNotificationSharedService } from '../../../../services/shared.service';
import * as i0 from "@angular/core";
export declare abstract class AbstractNotificationTemplateComponent {
    notification: NotificationDto;
    sharedService: CamNotificationSharedService;
    dataService: CamNotificationDataService;
    goTo(): void;
    getTranslation(): {
        [index: string]: string | number;
    };
    extractContext(key: string): string;
    extractredirectContext(key: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractNotificationTemplateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AbstractNotificationTemplateComponent, "ng-component", never, { "notification": { "alias": "notification"; "required": false; }; }, {}, never, never, false, never>;
}

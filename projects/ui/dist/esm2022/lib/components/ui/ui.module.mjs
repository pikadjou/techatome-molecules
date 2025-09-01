import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CamIconsModule, CamIconsService } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamDirectivePipeModule } from '@ta/utils';
import { register } from 'swiper/element/bundle';
import { BadgeComponent } from './badge/badge.component';
import { BulletComponent } from './bullet/bullet.component';
import { ActionButtonComponent } from './button/action/action-button.component';
import { ButtonComponent } from './button/button.component';
import { DualButtonComponent } from './button/dual/dual-button.component';
import { ButtonToolComponent } from './button/tool/tool.component';
import { CivilityComponent } from './civility/civility.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { CriticityComponent } from './criticity/criticity.component';
import { CultureComponent } from './culture/culture.component';
import { DepartmentIconListComponent } from './departments/department-icon-list/department-icon-list.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentProfessionsComponent } from './departments/professions/professions.component';
import { DurationComponent } from './duration/duration.component';
import { ExpandableTextComponent } from './expandable-text/expandable-text.component';
import { CamExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FileImageComponent } from './file-image/file-image.component';
import { HourDateLineComponent } from './hour-date-line/hour-date-line.component';
import { LabelComponent } from './label/label.component';
import { LinkComponent } from './link/link.component';
import { LogoComponent } from './logo/logo.component';
import { MegaoctetComponent } from './megaoctet/megaoctet.component';
import { NewComponent } from './new/new.component';
import { NotificationBadgeContainerComponent } from './notification-badge/notification-badge-container.component';
import { NotificationBadgeComponent } from './notification-badge/notification-badge/notification-badge.component';
import { PictureInfoMessageComponent } from './picture-info-message/picture-info-message.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressCircleComponent } from './progress/circle/progress-circle/progress-circle.component';
import { ProgressBarDataComponent } from './progress/progress-bar-data/progress-bar-data.component';
import { PwaComponent } from './pwa/pwa.component';
import { TextComponent } from './text/text.component';
import { TimeAgoComponent } from './time-ago/time-ago.component';
import { TitleComponent } from './title/title.component';
import { ToastComponent } from './toast/toast.component';
import { CamTranslationUI } from './translation.service';
import { TrigramComponent } from './trigram/trigram.component';
import { TypedMessageComponent } from './typed-message/typed-message.component';
import { UserLogoComponent } from './user-logo/user-logo.component';
import { UsersListComponent } from './users-list/users-list.component';
import * as i0 from "@angular/core";
register();
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamUiModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ActionButtonComponent, BadgeComponent, ButtonComponent } from '@ta/library-name';
 */
export class CamUiModule {
    constructor() {
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, imports: [CommonModule, MatBottomSheetModule, MatIconModule, CamDirectivePipeModule, TranslatePipe, CamIconsModule, MatExpansionModule, MatDialogModule, ActionButtonComponent, BadgeComponent, ButtonComponent, CivilityComponent, ContactInformationComponent, DepartmentIconListComponent, DepartmentProfessionsComponent, DepartmentsComponent, HourDateLineComponent, LinkComponent, LogoComponent, ProgressCircleComponent, TitleComponent, TrigramComponent, UserLogoComponent, TextComponent, ProgressBarDataComponent, ProgressBarComponent, PictureInfoMessageComponent, TypedMessageComponent, CamExpansionPanelComponent, DualButtonComponent, NotificationBadgeContainerComponent, NotificationBadgeComponent, PwaComponent, ExpandableTextComponent, ToastComponent, LabelComponent, NewComponent, BulletComponent, MegaoctetComponent, FileImageComponent, TimeAgoComponent, DurationComponent, UsersListComponent, ButtonToolComponent, CultureComponent, CriticityComponent], exports: [ActionButtonComponent,
            BadgeComponent,
            ButtonComponent,
            CivilityComponent,
            ContactInformationComponent,
            DepartmentIconListComponent,
            DepartmentProfessionsComponent,
            DepartmentsComponent,
            HourDateLineComponent,
            LinkComponent,
            LogoComponent,
            ProgressCircleComponent,
            TitleComponent,
            TrigramComponent,
            UserLogoComponent,
            ProgressBarDataComponent,
            ProgressBarComponent,
            PictureInfoMessageComponent,
            DualButtonComponent,
            CamExpansionPanelComponent,
            NotificationBadgeContainerComponent,
            NotificationBadgeComponent,
            PwaComponent,
            ExpandableTextComponent,
            ToastComponent,
            LabelComponent,
            NewComponent,
            TextComponent,
            BulletComponent,
            MegaoctetComponent,
            FileImageComponent,
            TimeAgoComponent,
            CriticityComponent,
            DurationComponent,
            UsersListComponent,
            ButtonToolComponent,
            CultureComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, providers: [CamIconsService], imports: [CommonModule, MatBottomSheetModule, MatIconModule, CamDirectivePipeModule, CamIconsModule, MatExpansionModule, MatDialogModule, ActionButtonComponent, BadgeComponent, ButtonComponent, CivilityComponent, ContactInformationComponent, DepartmentProfessionsComponent, DepartmentsComponent, LinkComponent, ProgressCircleComponent, UserLogoComponent, ProgressBarDataComponent, PictureInfoMessageComponent, TypedMessageComponent, CamExpansionPanelComponent, DualButtonComponent, PwaComponent, ExpandableTextComponent, MegaoctetComponent, FileImageComponent, TimeAgoComponent, DurationComponent, UsersListComponent, ButtonToolComponent, CultureComponent, CriticityComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, MatBottomSheetModule, MatIconModule, CamDirectivePipeModule, TranslatePipe, CamIconsModule, MatExpansionModule, MatDialogModule, ActionButtonComponent, BadgeComponent, ButtonComponent, CivilityComponent, ContactInformationComponent, DepartmentIconListComponent, DepartmentProfessionsComponent, DepartmentsComponent, HourDateLineComponent, LinkComponent, LogoComponent, ProgressCircleComponent, TitleComponent, TrigramComponent, UserLogoComponent, TextComponent, ProgressBarDataComponent, ProgressBarComponent, PictureInfoMessageComponent, TypedMessageComponent, CamExpansionPanelComponent, DualButtonComponent, NotificationBadgeContainerComponent, NotificationBadgeComponent, PwaComponent, ExpandableTextComponent, ToastComponent, LabelComponent, NewComponent, BulletComponent, MegaoctetComponent, FileImageComponent, TimeAgoComponent, DurationComponent, UsersListComponent, ButtonToolComponent, CultureComponent, CriticityComponent],
                    exports: [
                        ActionButtonComponent,
                        BadgeComponent,
                        ButtonComponent,
                        CivilityComponent,
                        ContactInformationComponent,
                        DepartmentIconListComponent,
                        DepartmentProfessionsComponent,
                        DepartmentsComponent,
                        HourDateLineComponent,
                        LinkComponent,
                        LogoComponent,
                        ProgressCircleComponent,
                        TitleComponent,
                        TrigramComponent,
                        UserLogoComponent,
                        ProgressBarDataComponent,
                        ProgressBarComponent,
                        PictureInfoMessageComponent,
                        DualButtonComponent,
                        CamExpansionPanelComponent,
                        NotificationBadgeContainerComponent,
                        NotificationBadgeComponent,
                        PwaComponent,
                        ExpandableTextComponent,
                        ToastComponent,
                        LabelComponent,
                        NewComponent,
                        TextComponent,
                        BulletComponent,
                        MegaoctetComponent,
                        FileImageComponent,
                        TimeAgoComponent,
                        CriticityComponent,
                        DurationComponent,
                        UsersListComponent,
                        ButtonToolComponent,
                        CultureComponent,
                    ],
                    providers: [CamIconsService],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFB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O3dCQUMzQiwyQkFBMkI7d0JBQzNCLDhCQUE4Qjt3QkFDOUIsb0JBQW9CO3dCQUNwQixxQkFBcUI7d0JBQ3JCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYix1QkFBdUI7d0JBQ3ZCLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsb0JBQW9CO3dCQUNwQiwyQkFBMkI7d0JBQzNCLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3dCQUMxQixtQ0FBbUM7d0JBQ25DLDBCQUEwQjt3QkFDMUIsWUFBWTt3QkFDWix1QkFBdUI7d0JBQ3ZCLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLGdCQUFnQjtxQkFDakI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUU3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0RXhwYW5zaW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgQ2FtSWNvbnNNb2R1bGUsIENhbUljb25zU2VydmljZSB9IGZyb20gJ0B0YS9pY29ucyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyBDYW1EaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSAnQHRhL3V0aWxzJztcclxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICdzd2lwZXIvZWxlbWVudC9idW5kbGUnO1xyXG5cclxuaW1wb3J0IHsgQmFkZ2VDb21wb25lbnQgfSBmcm9tICcuL2JhZGdlL2JhZGdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1bGxldENvbXBvbmVudCB9IGZyb20gJy4vYnVsbGV0L2J1bGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9hY3Rpb24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHVhbEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2R1YWwvZHVhbC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uVG9vbENvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL3Rvb2wvdG9vbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaXZpbGl0eUNvbXBvbmVudCB9IGZyb20gJy4vY2l2aWxpdHkvY2l2aWxpdHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGFjdEluZm9ybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0LWluZm9ybWF0aW9uL2NvbnRhY3QtaW5mb3JtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3JpdGljaXR5Q29tcG9uZW50IH0gZnJvbSAnLi9jcml0aWNpdHkvY3JpdGljaXR5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1bHR1cmVDb21wb25lbnQgfSBmcm9tICcuL2N1bHR1cmUvY3VsdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZXBhcnRtZW50SWNvbkxpc3RDb21wb25lbnQgfSBmcm9tICcuL2RlcGFydG1lbnRzL2RlcGFydG1lbnQtaWNvbi1saXN0L2RlcGFydG1lbnQtaWNvbi1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlcGFydG1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9kZXBhcnRtZW50cy9kZXBhcnRtZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZXBhcnRtZW50UHJvZmVzc2lvbnNDb21wb25lbnQgfSBmcm9tICcuL2RlcGFydG1lbnRzL3Byb2Zlc3Npb25zL3Byb2Zlc3Npb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER1cmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kdXJhdGlvbi9kdXJhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFeHBhbmRhYmxlVGV4dENvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5kYWJsZS10ZXh0L2V4cGFuZGFibGUtdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW1FeHBhbnNpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtaW1hZ2UvZmlsZS1pbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb3VyRGF0ZUxpbmVDb21wb25lbnQgfSBmcm9tICcuL2hvdXItZGF0ZS1saW5lL2hvdXItZGF0ZS1saW5lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9saW5rL2xpbmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lZ2FvY3RldENvbXBvbmVudCB9IGZyb20gJy4vbWVnYW9jdGV0L21lZ2FvY3RldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZXdDb21wb25lbnQgfSBmcm9tICcuL25ldy9uZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQmFkZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1iYWRnZS9ub3RpZmljYXRpb24tYmFkZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkJhZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24tYmFkZ2Uvbm90aWZpY2F0aW9uLWJhZGdlL25vdGlmaWNhdGlvbi1iYWRnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQaWN0dXJlSW5mb01lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BpY3R1cmUtaW5mby1tZXNzYWdlL3BpY3R1cmUtaW5mby1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy9jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhckRhdGFDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzL3Byb2dyZXNzLWJhci1kYXRhL3Byb2dyZXNzLWJhci1kYXRhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFB3YUNvbXBvbmVudCB9IGZyb20gJy4vcHdhL3B3YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0L3RleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZUFnb0NvbXBvbmVudCB9IGZyb20gJy4vdGltZS1hZ28vdGltZS1hZ28uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3RpdGxlL3RpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC90b2FzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvblVJIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJpZ3JhbUNvbXBvbmVudCB9IGZyb20gJy4vdHJpZ3JhbS90cmlncmFtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFR5cGVkTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWQtbWVzc2FnZS90eXBlZC1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5yZWdpc3RlcigpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cclxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxyXG4gKiAvLyBpbXBvcnQgeyBDYW1VaU1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xyXG4gKiBcclxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XHJcbiAqIGltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCwgQmFkZ2VDb21wb25lbnQsIEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuXHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRCb3R0b21TaGVldE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgQ2FtRGlyZWN0aXZlUGlwZU1vZHVsZSwgVHJhbnNsYXRlUGlwZSwgQ2FtSWNvbnNNb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBBY3Rpb25CdXR0b25Db21wb25lbnQsIEJhZGdlQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIENpdmlsaXR5Q29tcG9uZW50LCBDb250YWN0SW5mb3JtYXRpb25Db21wb25lbnQsIERlcGFydG1lbnRJY29uTGlzdENvbXBvbmVudCwgRGVwYXJ0bWVudFByb2Zlc3Npb25zQ29tcG9uZW50LCBEZXBhcnRtZW50c0NvbXBvbmVudCwgSG91ckRhdGVMaW5lQ29tcG9uZW50LCBMaW5rQ29tcG9uZW50LCBMb2dvQ29tcG9uZW50LCBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCwgVGl0bGVDb21wb25lbnQsIFRyaWdyYW1Db21wb25lbnQsIFVzZXJMb2dvQ29tcG9uZW50LCBUZXh0Q29tcG9uZW50LCBQcm9ncmVzc0JhckRhdGFDb21wb25lbnQsIFByb2dyZXNzQmFyQ29tcG9uZW50LCBQaWN0dXJlSW5mb01lc3NhZ2VDb21wb25lbnQsIFR5cGVkTWVzc2FnZUNvbXBvbmVudCwgQ2FtRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsIER1YWxCdXR0b25Db21wb25lbnQsIE5vdGlmaWNhdGlvbkJhZGdlQ29udGFpbmVyQ29tcG9uZW50LCBOb3RpZmljYXRpb25CYWRnZUNvbXBvbmVudCwgUHdhQ29tcG9uZW50LCBFeHBhbmRhYmxlVGV4dENvbXBvbmVudCwgVG9hc3RDb21wb25lbnQsIExhYmVsQ29tcG9uZW50LCBOZXdDb21wb25lbnQsIEJ1bGxldENvbXBvbmVudCwgTWVnYW9jdGV0Q29tcG9uZW50LCBGaWxlSW1hZ2VDb21wb25lbnQsIFRpbWVBZ29Db21wb25lbnQsIER1cmF0aW9uQ29tcG9uZW50LCBVc2Vyc0xpc3RDb21wb25lbnQsIEJ1dHRvblRvb2xDb21wb25lbnQsIEN1bHR1cmVDb21wb25lbnQsIENyaXRpY2l0eUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQWN0aW9uQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQmFkZ2VDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaXZpbGl0eUNvbXBvbmVudCxcclxuICAgIENvbnRhY3RJbmZvcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIERlcGFydG1lbnRJY29uTGlzdENvbXBvbmVudCxcclxuICAgIERlcGFydG1lbnRQcm9mZXNzaW9uc0NvbXBvbmVudCxcclxuICAgIERlcGFydG1lbnRzQ29tcG9uZW50LFxyXG4gICAgSG91ckRhdGVMaW5lQ29tcG9uZW50LFxyXG4gICAgTGlua0NvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCxcclxuICAgIFRpdGxlQ29tcG9uZW50LFxyXG4gICAgVHJpZ3JhbUNvbXBvbmVudCxcclxuICAgIFVzZXJMb2dvQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NCYXJEYXRhQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXHJcbiAgICBQaWN0dXJlSW5mb01lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBEdWFsQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQ2FtRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsXHJcbiAgICBOb3RpZmljYXRpb25CYWRnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIE5vdGlmaWNhdGlvbkJhZGdlQ29tcG9uZW50LFxyXG4gICAgUHdhQ29tcG9uZW50LFxyXG4gICAgRXhwYW5kYWJsZVRleHRDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbXBvbmVudCxcclxuICAgIExhYmVsQ29tcG9uZW50LFxyXG4gICAgTmV3Q29tcG9uZW50LFxyXG4gICAgVGV4dENvbXBvbmVudCxcclxuICAgIEJ1bGxldENvbXBvbmVudCxcclxuICAgIE1lZ2FvY3RldENvbXBvbmVudCxcclxuICAgIEZpbGVJbWFnZUNvbXBvbmVudCxcclxuICAgIFRpbWVBZ29Db21wb25lbnQsXHJcbiAgICBDcml0aWNpdHlDb21wb25lbnQsXHJcbiAgICBEdXJhdGlvbkNvbXBvbmVudCxcclxuICAgIFVzZXJzTGlzdENvbXBvbmVudCxcclxuICAgIEJ1dHRvblRvb2xDb21wb25lbnQsXHJcbiAgICBDdWx0dXJlQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbQ2FtSWNvbnNTZXJ2aWNlXSxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYW1VaU1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBDYW1UcmFuc2xhdGlvblVJLmdldEluc3RhbmNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
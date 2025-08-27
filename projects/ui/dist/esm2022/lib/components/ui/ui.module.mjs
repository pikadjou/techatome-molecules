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
import { HelloUserComponent } from './hello-user/hello-user.component';
import { HourDateLineComponent } from './hour-date-line/hour-date-line.component';
import { LabelComponent } from './label/label.component';
import { LinkComponent } from './link/link.component';
import { LogoComponent } from './logo/logo.component';
import { MegaoctetComponent } from './megaoctet/megaoctet.component';
import { NewComponent } from './new/new.component';
import { NotificationBadgeContainerComponent } from './notification-badge/notification-badge-container.component';
import { NotificationBadgeComponent } from './notification-badge/notification-badge/notification-badge.component';
import { PictureInfoMessageComponent } from './picture-info-message/picture-info-message.component';
import { InlineProfileDataComponent } from './profil-data/inline-profile-data/inline-profile-data.component';
import { ProfileDataComponent } from './profil-data/profile-data.component';
import { UiProfileDisplayComponent } from './profile-display/ui-profile-display.component';
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
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, imports: [CommonModule, MatBottomSheetModule, MatIconModule, CamDirectivePipeModule, TranslatePipe, CamIconsModule, MatExpansionModule, MatDialogModule, ActionButtonComponent, BadgeComponent, ButtonComponent, CivilityComponent, ContactInformationComponent, DepartmentIconListComponent, DepartmentProfessionsComponent, DepartmentsComponent, HelloUserComponent, HourDateLineComponent, LinkComponent, LogoComponent, ProgressCircleComponent, TitleComponent, TrigramComponent, UserLogoComponent, ProfileDataComponent, TextComponent, ProgressBarDataComponent, ProgressBarComponent, PictureInfoMessageComponent, TypedMessageComponent, CamExpansionPanelComponent, DualButtonComponent, NotificationBadgeContainerComponent, NotificationBadgeComponent, PwaComponent, ExpandableTextComponent, InlineProfileDataComponent, UiProfileDisplayComponent, ToastComponent, LabelComponent, NewComponent, BulletComponent, MegaoctetComponent, FileImageComponent, TimeAgoComponent, DurationComponent, UsersListComponent, ButtonToolComponent, CultureComponent, CriticityComponent], exports: [ActionButtonComponent,
            BadgeComponent,
            ButtonComponent,
            CivilityComponent,
            ContactInformationComponent,
            DepartmentIconListComponent,
            DepartmentProfessionsComponent,
            DepartmentsComponent,
            HelloUserComponent,
            HourDateLineComponent,
            LinkComponent,
            LogoComponent,
            ProgressCircleComponent,
            TitleComponent,
            TrigramComponent,
            UserLogoComponent,
            ProfileDataComponent,
            ProgressBarDataComponent,
            ProgressBarComponent,
            PictureInfoMessageComponent,
            DualButtonComponent,
            CamExpansionPanelComponent,
            NotificationBadgeContainerComponent,
            NotificationBadgeComponent,
            PwaComponent,
            ExpandableTextComponent,
            InlineProfileDataComponent,
            UiProfileDisplayComponent,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, providers: [CamIconsService], imports: [CommonModule, MatBottomSheetModule, MatIconModule, CamDirectivePipeModule, CamIconsModule, MatExpansionModule, MatDialogModule, ActionButtonComponent, BadgeComponent, ButtonComponent, CivilityComponent, ContactInformationComponent, DepartmentProfessionsComponent, DepartmentsComponent, HelloUserComponent, LinkComponent, ProgressCircleComponent, UserLogoComponent, ProfileDataComponent, ProgressBarDataComponent, PictureInfoMessageComponent, TypedMessageComponent, CamExpansionPanelComponent, DualButtonComponent, PwaComponent, ExpandableTextComponent, InlineProfileDataComponent, UiProfileDisplayComponent, MegaoctetComponent, FileImageComponent, TimeAgoComponent, DurationComponent, UsersListComponent, ButtonToolComponent, CultureComponent, CriticityComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, MatBottomSheetModule, MatIconModule, CamDirectivePipeModule, TranslatePipe, CamIconsModule, MatExpansionModule, MatDialogModule, ActionButtonComponent, BadgeComponent, ButtonComponent, CivilityComponent, ContactInformationComponent, DepartmentIconListComponent, DepartmentProfessionsComponent, DepartmentsComponent, HelloUserComponent, HourDateLineComponent, LinkComponent, LogoComponent, ProgressCircleComponent, TitleComponent, TrigramComponent, UserLogoComponent, ProfileDataComponent, TextComponent, ProgressBarDataComponent, ProgressBarComponent, PictureInfoMessageComponent, TypedMessageComponent, CamExpansionPanelComponent, DualButtonComponent, NotificationBadgeContainerComponent, NotificationBadgeComponent, PwaComponent, ExpandableTextComponent, InlineProfileDataComponent, UiProfileDisplayComponent, ToastComponent, LabelComponent, NewComponent, BulletComponent, MegaoctetComponent, FileImageComponent, TimeAgoComponent, DurationComponent, UsersListComponent, ButtonToolComponent, CultureComponent, CriticityComponent],
                    exports: [
                        ActionButtonComponent,
                        BadgeComponent,
                        ButtonComponent,
                        CivilityComponent,
                        ContactInformationComponent,
                        DepartmentIconListComponent,
                        DepartmentProfessionsComponent,
                        DepartmentsComponent,
                        HelloUserComponent,
                        HourDateLineComponent,
                        LinkComponent,
                        LogoComponent,
                        ProgressCircleComponent,
                        TitleComponent,
                        TrigramComponent,
                        UserLogoComponent,
                        ProfileDataComponent,
                        ProgressBarDataComponent,
                        ProgressBarComponent,
                        PictureInfoMessageComponent,
                        DualButtonComponent,
                        CamExpansionPanelComponent,
                        NotificationBadgeContainerComponent,
                        NotificationBadgeComponent,
                        PwaComponent,
                        ExpandableTextComponent,
                        InlineProfileDataComponent,
                        UiProfileDisplayComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmltcG9ydCB7IENhbUljb25zTW9kdWxlLCBDYW1JY29uc1NlcnZpY2UgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBDYW1EaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSAnQHRhL3V0aWxzJztcbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnc3dpcGVyL2VsZW1lbnQvYnVuZGxlJztcblxuaW1wb3J0IHsgQmFkZ2VDb21wb25lbnQgfSBmcm9tICcuL2JhZGdlL2JhZGdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdWxsZXRDb21wb25lbnQgfSBmcm9tICcuL2J1bGxldC9idWxsZXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2FjdGlvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IER1YWxCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9kdWFsL2R1YWwtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Ub29sQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vdG9vbC90b29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaXZpbGl0eUNvbXBvbmVudCB9IGZyb20gJy4vY2l2aWxpdHkvY2l2aWxpdHkuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RJbmZvcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC1pbmZvcm1hdGlvbi9jb250YWN0LWluZm9ybWF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDcml0aWNpdHlDb21wb25lbnQgfSBmcm9tICcuL2NyaXRpY2l0eS9jcml0aWNpdHkuY29tcG9uZW50JztcbmltcG9ydCB7IEN1bHR1cmVDb21wb25lbnQgfSBmcm9tICcuL2N1bHR1cmUvY3VsdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVwYXJ0bWVudEljb25MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9kZXBhcnRtZW50cy9kZXBhcnRtZW50LWljb24tbGlzdC9kZXBhcnRtZW50LWljb24tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVwYXJ0bWVudHNDb21wb25lbnQgfSBmcm9tICcuL2RlcGFydG1lbnRzL2RlcGFydG1lbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZXBhcnRtZW50UHJvZmVzc2lvbnNDb21wb25lbnQgfSBmcm9tICcuL2RlcGFydG1lbnRzL3Byb2Zlc3Npb25zL3Byb2Zlc3Npb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEdXJhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZHVyYXRpb24vZHVyYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEV4cGFuZGFibGVUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9leHBhbmRhYmxlLXRleHQvZXhwYW5kYWJsZS10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYW1FeHBhbnNpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsZUltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLWltYWdlL2ZpbGUtaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEhlbGxvVXNlckNvbXBvbmVudCB9IGZyb20gJy4vaGVsbG8tdXNlci9oZWxsby11c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb3VyRGF0ZUxpbmVDb21wb25lbnQgfSBmcm9tICcuL2hvdXItZGF0ZS1saW5lL2hvdXItZGF0ZS1saW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vbGFiZWwvbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmtDb21wb25lbnQgfSBmcm9tICcuL2xpbmsvbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZWdhb2N0ZXRDb21wb25lbnQgfSBmcm9tICcuL21lZ2FvY3RldC9tZWdhb2N0ZXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5ld0NvbXBvbmVudCB9IGZyb20gJy4vbmV3L25ldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQmFkZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1iYWRnZS9ub3RpZmljYXRpb24tYmFkZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25CYWRnZUNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLWJhZGdlL25vdGlmaWNhdGlvbi1iYWRnZS9ub3RpZmljYXRpb24tYmFkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBpY3R1cmVJbmZvTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vcGljdHVyZS1pbmZvLW1lc3NhZ2UvcGljdHVyZS1pbmZvLW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IElubGluZVByb2ZpbGVEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWwtZGF0YS9pbmxpbmUtcHJvZmlsZS1kYXRhL2lubGluZS1wcm9maWxlLWRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWwtZGF0YS9wcm9maWxlLWRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IFVpUHJvZmlsZURpc3BsYXlDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUtZGlzcGxheS91aS1wcm9maWxlLWRpc3BsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MvY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS9wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzQmFyRGF0YUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MvcHJvZ3Jlc3MtYmFyLWRhdGEvcHJvZ3Jlc3MtYmFyLWRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IFB3YUNvbXBvbmVudCB9IGZyb20gJy4vcHdhL3B3YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC90ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lQWdvQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lLWFnby90aW1lLWFnby5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3RpdGxlL3RpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QvdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENhbVRyYW5zbGF0aW9uVUkgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJpZ3JhbUNvbXBvbmVudCB9IGZyb20gJy4vdHJpZ3JhbS90cmlncmFtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUeXBlZE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL3R5cGVkLW1lc3NhZ2UvdHlwZWQtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckxvZ29Db21wb25lbnQgfSBmcm9tICcuL3VzZXItbG9nby91c2VyLWxvZ28uY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudCc7XG5cbnJlZ2lzdGVyKCk7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgQ2FtVWlNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqIFxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQsIEJhZGdlQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcblxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRCb3R0b21TaGVldE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgQ2FtRGlyZWN0aXZlUGlwZU1vZHVsZSwgVHJhbnNsYXRlUGlwZSwgQ2FtSWNvbnNNb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBBY3Rpb25CdXR0b25Db21wb25lbnQsIEJhZGdlQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIENpdmlsaXR5Q29tcG9uZW50LCBDb250YWN0SW5mb3JtYXRpb25Db21wb25lbnQsIERlcGFydG1lbnRJY29uTGlzdENvbXBvbmVudCwgRGVwYXJ0bWVudFByb2Zlc3Npb25zQ29tcG9uZW50LCBEZXBhcnRtZW50c0NvbXBvbmVudCwgSGVsbG9Vc2VyQ29tcG9uZW50LCBIb3VyRGF0ZUxpbmVDb21wb25lbnQsIExpbmtDb21wb25lbnQsIExvZ29Db21wb25lbnQsIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50LCBUaXRsZUNvbXBvbmVudCwgVHJpZ3JhbUNvbXBvbmVudCwgVXNlckxvZ29Db21wb25lbnQsIFByb2ZpbGVEYXRhQ29tcG9uZW50LCBUZXh0Q29tcG9uZW50LCBQcm9ncmVzc0JhckRhdGFDb21wb25lbnQsIFByb2dyZXNzQmFyQ29tcG9uZW50LCBQaWN0dXJlSW5mb01lc3NhZ2VDb21wb25lbnQsIFR5cGVkTWVzc2FnZUNvbXBvbmVudCwgQ2FtRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsIER1YWxCdXR0b25Db21wb25lbnQsIE5vdGlmaWNhdGlvbkJhZGdlQ29udGFpbmVyQ29tcG9uZW50LCBOb3RpZmljYXRpb25CYWRnZUNvbXBvbmVudCwgUHdhQ29tcG9uZW50LCBFeHBhbmRhYmxlVGV4dENvbXBvbmVudCwgSW5saW5lUHJvZmlsZURhdGFDb21wb25lbnQsIFVpUHJvZmlsZURpc3BsYXlDb21wb25lbnQsIFRvYXN0Q29tcG9uZW50LCBMYWJlbENvbXBvbmVudCwgTmV3Q29tcG9uZW50LCBCdWxsZXRDb21wb25lbnQsIE1lZ2FvY3RldENvbXBvbmVudCwgRmlsZUltYWdlQ29tcG9uZW50LCBUaW1lQWdvQ29tcG9uZW50LCBEdXJhdGlvbkNvbXBvbmVudCwgVXNlcnNMaXN0Q29tcG9uZW50LCBCdXR0b25Ub29sQ29tcG9uZW50LCBDdWx0dXJlQ29tcG9uZW50LCBDcml0aWNpdHlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgQWN0aW9uQnV0dG9uQ29tcG9uZW50LFxuICAgIEJhZGdlQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBDaXZpbGl0eUNvbXBvbmVudCxcbiAgICBDb250YWN0SW5mb3JtYXRpb25Db21wb25lbnQsXG4gICAgRGVwYXJ0bWVudEljb25MaXN0Q29tcG9uZW50LFxuICAgIERlcGFydG1lbnRQcm9mZXNzaW9uc0NvbXBvbmVudCxcbiAgICBEZXBhcnRtZW50c0NvbXBvbmVudCxcbiAgICBIZWxsb1VzZXJDb21wb25lbnQsXG4gICAgSG91ckRhdGVMaW5lQ29tcG9uZW50LFxuICAgIExpbmtDb21wb25lbnQsXG4gICAgTG9nb0NvbXBvbmVudCxcbiAgICBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCxcbiAgICBUaXRsZUNvbXBvbmVudCxcbiAgICBUcmlncmFtQ29tcG9uZW50LFxuICAgIFVzZXJMb2dvQ29tcG9uZW50LFxuICAgIFByb2ZpbGVEYXRhQ29tcG9uZW50LFxuICAgIFByb2dyZXNzQmFyRGF0YUNvbXBvbmVudCxcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICBQaWN0dXJlSW5mb01lc3NhZ2VDb21wb25lbnQsXG4gICAgRHVhbEJ1dHRvbkNvbXBvbmVudCxcbiAgICBDYW1FeHBhbnNpb25QYW5lbENvbXBvbmVudCxcbiAgICBOb3RpZmljYXRpb25CYWRnZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBOb3RpZmljYXRpb25CYWRnZUNvbXBvbmVudCxcbiAgICBQd2FDb21wb25lbnQsXG4gICAgRXhwYW5kYWJsZVRleHRDb21wb25lbnQsXG4gICAgSW5saW5lUHJvZmlsZURhdGFDb21wb25lbnQsXG4gICAgVWlQcm9maWxlRGlzcGxheUNvbXBvbmVudCxcbiAgICBUb2FzdENvbXBvbmVudCxcbiAgICBMYWJlbENvbXBvbmVudCxcbiAgICBOZXdDb21wb25lbnQsXG4gICAgVGV4dENvbXBvbmVudCxcbiAgICBCdWxsZXRDb21wb25lbnQsXG4gICAgTWVnYW9jdGV0Q29tcG9uZW50LFxuICAgIEZpbGVJbWFnZUNvbXBvbmVudCxcbiAgICBUaW1lQWdvQ29tcG9uZW50LFxuICAgIENyaXRpY2l0eUNvbXBvbmVudCxcbiAgICBEdXJhdGlvbkNvbXBvbmVudCxcbiAgICBVc2Vyc0xpc3RDb21wb25lbnQsXG4gICAgQnV0dG9uVG9vbENvbXBvbmVudCxcbiAgICBDdWx0dXJlQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtDYW1JY29uc1NlcnZpY2VdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENhbVVpTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgQ2FtVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=
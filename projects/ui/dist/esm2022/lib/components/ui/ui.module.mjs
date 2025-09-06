import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { register } from 'swiper/element/bundle';
import { TaIconsModule, TaIconsService } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TaDirectivePipeModule } from '@ta/utils';
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
import { TaExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
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
import { TaTranslationUI } from './translation.service';
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
 * // import { TaUiModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ActionButtonComponent, BadgeComponent, ButtonComponent } from '@ta/library-name';
 */
export class TaUiModule {
    constructor() {
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaUiModule, imports: [CommonModule,
            MatBottomSheetModule,
            MatIconModule,
            TaDirectivePipeModule,
            TranslatePipe,
            TaIconsModule,
            MatExpansionModule,
            MatDialogModule,
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
            TextComponent,
            ProgressBarDataComponent,
            ProgressBarComponent,
            PictureInfoMessageComponent,
            TypedMessageComponent,
            TaExpansionPanelComponent,
            DualButtonComponent,
            NotificationBadgeContainerComponent,
            NotificationBadgeComponent,
            PwaComponent,
            ExpandableTextComponent,
            ToastComponent,
            LabelComponent,
            NewComponent,
            BulletComponent,
            MegaoctetComponent,
            FileImageComponent,
            TimeAgoComponent,
            DurationComponent,
            UsersListComponent,
            ButtonToolComponent,
            CultureComponent,
            CriticityComponent], exports: [ActionButtonComponent,
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
            TaExpansionPanelComponent,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUiModule, providers: [TaIconsService], imports: [CommonModule,
            MatBottomSheetModule,
            MatIconModule,
            TaDirectivePipeModule,
            TaIconsModule,
            MatExpansionModule,
            MatDialogModule,
            ActionButtonComponent,
            BadgeComponent,
            ButtonComponent,
            CivilityComponent,
            ContactInformationComponent,
            DepartmentProfessionsComponent,
            DepartmentsComponent,
            LinkComponent,
            ProgressCircleComponent,
            UserLogoComponent,
            ProgressBarDataComponent,
            PictureInfoMessageComponent,
            TypedMessageComponent,
            TaExpansionPanelComponent,
            DualButtonComponent,
            PwaComponent,
            ExpandableTextComponent,
            MegaoctetComponent,
            FileImageComponent,
            TimeAgoComponent,
            DurationComponent,
            UsersListComponent,
            ButtonToolComponent,
            CultureComponent,
            CriticityComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        MatBottomSheetModule,
                        MatIconModule,
                        TaDirectivePipeModule,
                        TranslatePipe,
                        TaIconsModule,
                        MatExpansionModule,
                        MatDialogModule,
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
                        TextComponent,
                        ProgressBarDataComponent,
                        ProgressBarComponent,
                        PictureInfoMessageComponent,
                        TypedMessageComponent,
                        TaExpansionPanelComponent,
                        DualButtonComponent,
                        NotificationBadgeContainerComponent,
                        NotificationBadgeComponent,
                        PwaComponent,
                        ExpandableTextComponent,
                        ToastComponent,
                        LabelComponent,
                        NewComponent,
                        BulletComponent,
                        MegaoctetComponent,
                        FileImageComponent,
                        TimeAgoComponent,
                        DurationComponent,
                        UsersListComponent,
                        ButtonToolComponent,
                        CultureComponent,
                        CriticityComponent,
                    ],
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
                        TaExpansionPanelComponent,
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
                    providers: [TaIconsService],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFB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QkFDbkIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3dCQUMzQiw4QkFBOEI7d0JBQzlCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQix3QkFBd0I7d0JBQ3hCLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3dCQUMzQixtQkFBbUI7d0JBQ25CLHlCQUF5Qjt3QkFDekIsbUNBQW1DO3dCQUNuQywwQkFBMEI7d0JBQzFCLFlBQVk7d0JBQ1osdUJBQXVCO3dCQUN2QixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnc3dpcGVyL2VsZW1lbnQvYnVuZGxlJztcclxuXHJcbmltcG9ydCB7IFRhSWNvbnNNb2R1bGUsIFRhSWNvbnNTZXJ2aWNlIH0gZnJvbSAnQHRhL2ljb25zJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XHJcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gJ0B0YS91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBCYWRnZUNvbXBvbmVudCB9IGZyb20gJy4vYmFkZ2UvYmFkZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnVsbGV0Q29tcG9uZW50IH0gZnJvbSAnLi9idWxsZXQvYnVsbGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2FjdGlvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEdWFsQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vZHVhbC9kdWFsLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Ub29sQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vdG9vbC90b29sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENpdmlsaXR5Q29tcG9uZW50IH0gZnJvbSAnLi9jaXZpbGl0eS9jaXZpbGl0eS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250YWN0SW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QtaW5mb3JtYXRpb24vY29udGFjdC1pbmZvcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDcml0aWNpdHlDb21wb25lbnQgfSBmcm9tICcuL2NyaXRpY2l0eS9jcml0aWNpdHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3VsdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vY3VsdHVyZS9jdWx0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlcGFydG1lbnRJY29uTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZGVwYXJ0bWVudHMvZGVwYXJ0bWVudC1pY29uLWxpc3QvZGVwYXJ0bWVudC1pY29uLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVwYXJ0bWVudHNDb21wb25lbnQgfSBmcm9tICcuL2RlcGFydG1lbnRzL2RlcGFydG1lbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlcGFydG1lbnRQcm9mZXNzaW9uc0NvbXBvbmVudCB9IGZyb20gJy4vZGVwYXJ0bWVudHMvcHJvZmVzc2lvbnMvcHJvZmVzc2lvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHVyYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2R1cmF0aW9uL2R1cmF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4cGFuZGFibGVUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9leHBhbmRhYmxlLXRleHQvZXhwYW5kYWJsZS10ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhRXhwYW5zaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsZUltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLWltYWdlL2ZpbGUtaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG91ckRhdGVMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9ob3VyLWRhdGUtbGluZS9ob3VyLWRhdGUtbGluZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vbGFiZWwvbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9IGZyb20gJy4vbGluay9saW5rLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ29Db21wb25lbnQgfSBmcm9tICcuL2xvZ28vbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZWdhb2N0ZXRDb21wb25lbnQgfSBmcm9tICcuL21lZ2FvY3RldC9tZWdhb2N0ZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZXcvbmV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkJhZGdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24tYmFkZ2Uvbm90aWZpY2F0aW9uLWJhZGdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25CYWRnZUNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLWJhZGdlL25vdGlmaWNhdGlvbi1iYWRnZS9ub3RpZmljYXRpb24tYmFkZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGljdHVyZUluZm9NZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9waWN0dXJlLWluZm8tbWVzc2FnZS9waWN0dXJlLWluZm8tbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MvY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS9wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy9wcm9ncmVzcy1iYXItZGF0YS9wcm9ncmVzcy1iYXItZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQd2FDb21wb25lbnQgfSBmcm9tICcuL3B3YS9wd2EuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC90ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVBZ29Db21wb25lbnQgfSBmcm9tICcuL3RpbWUtYWdvL3RpbWUtYWdvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi90aXRsZS90aXRsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QvdG9hc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblVJIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJpZ3JhbUNvbXBvbmVudCB9IGZyb20gJy4vdHJpZ3JhbS90cmlncmFtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFR5cGVkTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWQtbWVzc2FnZS90eXBlZC1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5yZWdpc3RlcigpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cclxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XHJcbiAqIC8vIGltcG9ydCB7IFRhVWlNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcclxuICpcclxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XHJcbiAqIGltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCwgQmFkZ2VDb21wb25lbnQsIEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIFRhRGlyZWN0aXZlUGlwZU1vZHVsZSxcclxuICAgIFRyYW5zbGF0ZVBpcGUsXHJcbiAgICBUYUljb25zTW9kdWxlLFxyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgQWN0aW9uQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQmFkZ2VDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaXZpbGl0eUNvbXBvbmVudCxcclxuICAgIENvbnRhY3RJbmZvcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIERlcGFydG1lbnRJY29uTGlzdENvbXBvbmVudCxcclxuICAgIERlcGFydG1lbnRQcm9mZXNzaW9uc0NvbXBvbmVudCxcclxuICAgIERlcGFydG1lbnRzQ29tcG9uZW50LFxyXG4gICAgSG91ckRhdGVMaW5lQ29tcG9uZW50LFxyXG4gICAgTGlua0NvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCxcclxuICAgIFRpdGxlQ29tcG9uZW50LFxyXG4gICAgVHJpZ3JhbUNvbXBvbmVudCxcclxuICAgIFVzZXJMb2dvQ29tcG9uZW50LFxyXG4gICAgVGV4dENvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQmFyRGF0YUNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQmFyQ29tcG9uZW50LFxyXG4gICAgUGljdHVyZUluZm9NZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgVHlwZWRNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgVGFFeHBhbnNpb25QYW5lbENvbXBvbmVudCxcclxuICAgIER1YWxCdXR0b25Db21wb25lbnQsXHJcbiAgICBOb3RpZmljYXRpb25CYWRnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIE5vdGlmaWNhdGlvbkJhZGdlQ29tcG9uZW50LFxyXG4gICAgUHdhQ29tcG9uZW50LFxyXG4gICAgRXhwYW5kYWJsZVRleHRDb21wb25lbnQsXHJcbiAgICBUb2FzdENvbXBvbmVudCxcclxuICAgIExhYmVsQ29tcG9uZW50LFxyXG4gICAgTmV3Q29tcG9uZW50LFxyXG4gICAgQnVsbGV0Q29tcG9uZW50LFxyXG4gICAgTWVnYW9jdGV0Q29tcG9uZW50LFxyXG4gICAgRmlsZUltYWdlQ29tcG9uZW50LFxyXG4gICAgVGltZUFnb0NvbXBvbmVudCxcclxuICAgIER1cmF0aW9uQ29tcG9uZW50LFxyXG4gICAgVXNlcnNMaXN0Q29tcG9uZW50LFxyXG4gICAgQnV0dG9uVG9vbENvbXBvbmVudCxcclxuICAgIEN1bHR1cmVDb21wb25lbnQsXHJcbiAgICBDcml0aWNpdHlDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBY3Rpb25CdXR0b25Db21wb25lbnQsXHJcbiAgICBCYWRnZUNvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIENpdmlsaXR5Q29tcG9uZW50LFxyXG4gICAgQ29udGFjdEluZm9ybWF0aW9uQ29tcG9uZW50LFxyXG4gICAgRGVwYXJ0bWVudEljb25MaXN0Q29tcG9uZW50LFxyXG4gICAgRGVwYXJ0bWVudFByb2Zlc3Npb25zQ29tcG9uZW50LFxyXG4gICAgRGVwYXJ0bWVudHNDb21wb25lbnQsXHJcbiAgICBIb3VyRGF0ZUxpbmVDb21wb25lbnQsXHJcbiAgICBMaW5rQ29tcG9uZW50LFxyXG4gICAgTG9nb0NvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50LFxyXG4gICAgVGl0bGVDb21wb25lbnQsXHJcbiAgICBUcmlncmFtQ29tcG9uZW50LFxyXG4gICAgVXNlckxvZ29Db21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0JhckRhdGFDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcclxuICAgIFBpY3R1cmVJbmZvTWVzc2FnZUNvbXBvbmVudCxcclxuICAgIER1YWxCdXR0b25Db21wb25lbnQsXHJcbiAgICBUYUV4cGFuc2lvblBhbmVsQ29tcG9uZW50LFxyXG4gICAgTm90aWZpY2F0aW9uQmFkZ2VDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBOb3RpZmljYXRpb25CYWRnZUNvbXBvbmVudCxcclxuICAgIFB3YUNvbXBvbmVudCxcclxuICAgIEV4cGFuZGFibGVUZXh0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RDb21wb25lbnQsXHJcbiAgICBMYWJlbENvbXBvbmVudCxcclxuICAgIE5ld0NvbXBvbmVudCxcclxuICAgIFRleHRDb21wb25lbnQsXHJcbiAgICBCdWxsZXRDb21wb25lbnQsXHJcbiAgICBNZWdhb2N0ZXRDb21wb25lbnQsXHJcbiAgICBGaWxlSW1hZ2VDb21wb25lbnQsXHJcbiAgICBUaW1lQWdvQ29tcG9uZW50LFxyXG4gICAgQ3JpdGljaXR5Q29tcG9uZW50LFxyXG4gICAgRHVyYXRpb25Db21wb25lbnQsXHJcbiAgICBVc2Vyc0xpc3RDb21wb25lbnQsXHJcbiAgICBCdXR0b25Ub29sQ29tcG9uZW50LFxyXG4gICAgQ3VsdHVyZUNvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1RhSWNvbnNTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhVWlNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgVGFUcmFuc2xhdGlvblVJLmdldEluc3RhbmNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
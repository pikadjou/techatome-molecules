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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaUiModule, imports: [CommonModule,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUiModule, providers: [TaIconsService], imports: [CommonModule,
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
            TitleComponent,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUiModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFB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QixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQiwyQkFBMkI7d0JBQzNCLDJCQUEyQjt3QkFDM0IsOEJBQThCO3dCQUM5QixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkIsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLDJCQUEyQjt3QkFDM0IsbUJBQW1CO3dCQUNuQix5QkFBeUI7d0JBQ3pCLG1DQUFtQzt3QkFDbkMsMEJBQTBCO3dCQUMxQixZQUFZO3dCQUNaLHVCQUF1Qjt3QkFDdkIsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJ3N3aXBlci9lbGVtZW50L2J1bmRsZSc7XHJcblxyXG5pbXBvcnQgeyBUYUljb25zTW9kdWxlLCBUYUljb25zU2VydmljZSB9IGZyb20gJ0B0YS9pY29ucyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyBUYURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tICdAdGEvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgQmFkZ2VDb21wb25lbnQgfSBmcm9tICcuL2JhZGdlL2JhZGdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1bGxldENvbXBvbmVudCB9IGZyb20gJy4vYnVsbGV0L2J1bGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9hY3Rpb24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHVhbEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2R1YWwvZHVhbC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uVG9vbENvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL3Rvb2wvdG9vbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaXZpbGl0eUNvbXBvbmVudCB9IGZyb20gJy4vY2l2aWxpdHkvY2l2aWxpdHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGFjdEluZm9ybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0LWluZm9ybWF0aW9uL2NvbnRhY3QtaW5mb3JtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3JpdGljaXR5Q29tcG9uZW50IH0gZnJvbSAnLi9jcml0aWNpdHkvY3JpdGljaXR5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1bHR1cmVDb21wb25lbnQgfSBmcm9tICcuL2N1bHR1cmUvY3VsdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZXBhcnRtZW50SWNvbkxpc3RDb21wb25lbnQgfSBmcm9tICcuL2RlcGFydG1lbnRzL2RlcGFydG1lbnQtaWNvbi1saXN0L2RlcGFydG1lbnQtaWNvbi1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlcGFydG1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9kZXBhcnRtZW50cy9kZXBhcnRtZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZXBhcnRtZW50UHJvZmVzc2lvbnNDb21wb25lbnQgfSBmcm9tICcuL2RlcGFydG1lbnRzL3Byb2Zlc3Npb25zL3Byb2Zlc3Npb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER1cmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kdXJhdGlvbi9kdXJhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFeHBhbmRhYmxlVGV4dENvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5kYWJsZS10ZXh0L2V4cGFuZGFibGUtdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYUV4cGFuc2lvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vZmlsZS1pbWFnZS9maWxlLWltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvdXJEYXRlTGluZUNvbXBvbmVudCB9IGZyb20gJy4vaG91ci1kYXRlLWxpbmUvaG91ci1kYXRlLWxpbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2xhYmVsL2xhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpbmtDb21wb25lbnQgfSBmcm9tICcuL2xpbmsvbGluay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dvL2xvZ28uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVnYW9jdGV0Q29tcG9uZW50IH0gZnJvbSAnLi9tZWdhb2N0ZXQvbWVnYW9jdGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ld0NvbXBvbmVudCB9IGZyb20gJy4vbmV3L25ldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25CYWRnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLWJhZGdlL25vdGlmaWNhdGlvbi1iYWRnZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQmFkZ2VDb21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1iYWRnZS9ub3RpZmljYXRpb24tYmFkZ2Uvbm90aWZpY2F0aW9uLWJhZGdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBpY3R1cmVJbmZvTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vcGljdHVyZS1pbmZvLW1lc3NhZ2UvcGljdHVyZS1pbmZvLW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzL2NpcmNsZS9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyRGF0YUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MvcHJvZ3Jlc3MtYmFyLWRhdGEvcHJvZ3Jlc3MtYmFyLWRhdGEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHdhQ29tcG9uZW50IH0gZnJvbSAnLi9wd2EvcHdhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tICcuL3RleHQvdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaW1lQWdvQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lLWFnby90aW1lLWFnby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vdGl0bGUvdGl0bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFRyaWdyYW1Db21wb25lbnQgfSBmcm9tICcuL3RyaWdyYW0vdHJpZ3JhbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUeXBlZE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL3R5cGVkLW1lc3NhZ2UvdHlwZWQtbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2VyTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vdXNlci1sb2dvL3VzZXItbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2Vyc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQnO1xyXG5cclxucmVnaXN0ZXIoKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXHJcbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxyXG4gKiAvLyBpbXBvcnQgeyBUYVVpTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XHJcbiAqXHJcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxyXG4gKiBpbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQsIEJhZGdlQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBUYURpcmVjdGl2ZVBpcGVNb2R1bGUsXHJcbiAgICBUcmFuc2xhdGVQaXBlLFxyXG4gICAgVGFJY29uc01vZHVsZSxcclxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIEFjdGlvbkJ1dHRvbkNvbXBvbmVudCxcclxuICAgIEJhZGdlQ29tcG9uZW50LFxyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQ2l2aWxpdHlDb21wb25lbnQsXHJcbiAgICBDb250YWN0SW5mb3JtYXRpb25Db21wb25lbnQsXHJcbiAgICBEZXBhcnRtZW50SWNvbkxpc3RDb21wb25lbnQsXHJcbiAgICBEZXBhcnRtZW50UHJvZmVzc2lvbnNDb21wb25lbnQsXHJcbiAgICBEZXBhcnRtZW50c0NvbXBvbmVudCxcclxuICAgIEhvdXJEYXRlTGluZUNvbXBvbmVudCxcclxuICAgIExpbmtDb21wb25lbnQsXHJcbiAgICBMb2dvQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQsXHJcbiAgICBUaXRsZUNvbXBvbmVudCxcclxuICAgIFRyaWdyYW1Db21wb25lbnQsXHJcbiAgICBVc2VyTG9nb0NvbXBvbmVudCxcclxuICAgIFRleHRDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0JhckRhdGFDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcclxuICAgIFBpY3R1cmVJbmZvTWVzc2FnZUNvbXBvbmVudCxcclxuICAgIFR5cGVkTWVzc2FnZUNvbXBvbmVudCxcclxuICAgIFRhRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsXHJcbiAgICBEdWFsQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgTm90aWZpY2F0aW9uQmFkZ2VDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBOb3RpZmljYXRpb25CYWRnZUNvbXBvbmVudCxcclxuICAgIFB3YUNvbXBvbmVudCxcclxuICAgIEV4cGFuZGFibGVUZXh0Q29tcG9uZW50LFxyXG4gICAgVG9hc3RDb21wb25lbnQsXHJcbiAgICBMYWJlbENvbXBvbmVudCxcclxuICAgIE5ld0NvbXBvbmVudCxcclxuICAgIEJ1bGxldENvbXBvbmVudCxcclxuICAgIE1lZ2FvY3RldENvbXBvbmVudCxcclxuICAgIEZpbGVJbWFnZUNvbXBvbmVudCxcclxuICAgIFRpbWVBZ29Db21wb25lbnQsXHJcbiAgICBEdXJhdGlvbkNvbXBvbmVudCxcclxuICAgIFVzZXJzTGlzdENvbXBvbmVudCxcclxuICAgIEJ1dHRvblRvb2xDb21wb25lbnQsXHJcbiAgICBDdWx0dXJlQ29tcG9uZW50LFxyXG4gICAgQ3JpdGljaXR5Q29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQWN0aW9uQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQmFkZ2VDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaXZpbGl0eUNvbXBvbmVudCxcclxuICAgIENvbnRhY3RJbmZvcm1hdGlvbkNvbXBvbmVudCxcclxuICAgIERlcGFydG1lbnRJY29uTGlzdENvbXBvbmVudCxcclxuICAgIERlcGFydG1lbnRQcm9mZXNzaW9uc0NvbXBvbmVudCxcclxuICAgIERlcGFydG1lbnRzQ29tcG9uZW50LFxyXG4gICAgSG91ckRhdGVMaW5lQ29tcG9uZW50LFxyXG4gICAgTGlua0NvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCxcclxuICAgIFRpdGxlQ29tcG9uZW50LFxyXG4gICAgVHJpZ3JhbUNvbXBvbmVudCxcclxuICAgIFVzZXJMb2dvQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NCYXJEYXRhQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXHJcbiAgICBQaWN0dXJlSW5mb01lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBEdWFsQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgVGFFeHBhbnNpb25QYW5lbENvbXBvbmVudCxcclxuICAgIE5vdGlmaWNhdGlvbkJhZGdlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgTm90aWZpY2F0aW9uQmFkZ2VDb21wb25lbnQsXHJcbiAgICBQd2FDb21wb25lbnQsXHJcbiAgICBFeHBhbmRhYmxlVGV4dENvbXBvbmVudCxcclxuICAgIFRvYXN0Q29tcG9uZW50LFxyXG4gICAgTGFiZWxDb21wb25lbnQsXHJcbiAgICBOZXdDb21wb25lbnQsXHJcbiAgICBUZXh0Q29tcG9uZW50LFxyXG4gICAgQnVsbGV0Q29tcG9uZW50LFxyXG4gICAgTWVnYW9jdGV0Q29tcG9uZW50LFxyXG4gICAgRmlsZUltYWdlQ29tcG9uZW50LFxyXG4gICAgVGltZUFnb0NvbXBvbmVudCxcclxuICAgIENyaXRpY2l0eUNvbXBvbmVudCxcclxuICAgIER1cmF0aW9uQ29tcG9uZW50LFxyXG4gICAgVXNlcnNMaXN0Q29tcG9uZW50LFxyXG4gICAgQnV0dG9uVG9vbENvbXBvbmVudCxcclxuICAgIEN1bHR1cmVDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtUYUljb25zU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYVVpTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
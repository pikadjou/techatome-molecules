import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { register } from "swiper/element/bundle";
import { TaIconsModule, TaIconsService } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import { TaDirectivePipeModule } from "@ta/utils";
import { BadgeComponent } from "./badge/badge.component";
import { BulletComponent } from "./bullet/bullet.component";
import { ActionButtonComponent } from "./button/action/action-button.component";
import { ButtonComponent } from "./button/button.component";
import { DualButtonComponent } from "./button/dual/dual-button.component";
import { ButtonToolComponent } from "./button/tool/tool.component";
import { CivilityComponent } from "./civility/civility.component";
import { ContactInformationComponent } from "./contact-information/contact-information.component";
import { CriticityComponent } from "./criticity/criticity.component";
import { CultureComponent } from "./culture/culture.component";
import { DepartmentIconListComponent } from "./departments/department-icon-list/department-icon-list.component";
import { DepartmentsComponent } from "./departments/departments.component";
import { DepartmentProfessionsComponent } from "./departments/professions/professions.component";
import { DurationComponent } from "./duration/duration.component";
import { ExpandableTextComponent } from "./expandable-text/expandable-text.component";
import { TaExpansionPanelComponent } from "./expansion-panel/expansion-panel.component";
import { FileImageComponent } from "./file-image/file-image.component";
import { HourDateLineComponent } from "./hour-date-line/hour-date-line.component";
import { LabelComponent } from "./label/label.component";
import { LinkComponent } from "./link/link.component";
import { LogoComponent } from "./logo/logo.component";
import { MegaoctetComponent } from "./megaoctet/megaoctet.component";
import { NewComponent } from "./new/new.component";
import { NotificationBadgeContainerComponent } from "./notification-badge/notification-badge-container.component";
import { NotificationBadgeComponent } from "./notification-badge/notification-badge/notification-badge.component";
import { PictureInfoMessageComponent } from "./picture-info-message/picture-info-message.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { ProgressCircleComponent } from "./progress/circle/progress-circle/progress-circle.component";
import { ProgressBarDataComponent } from "./progress/progress-bar-data/progress-bar-data.component";
import { PwaComponent } from "./pwa/pwa.component";
import { TextComponent } from "./text/text.component";
import { TimeAgoComponent } from "./time-ago/time-ago.component";
import { TitleComponent } from "./title/title.component";
import { ToastComponent } from "./toast/toast.component";
import { TaTranslationUI } from "../../translation.service";
import { TrigramComponent } from "./trigram/trigram.component";
import { TypedMessageComponent } from "./typed-message/typed-message.component";
import { UserLogoComponent } from "./user-logo/user-logo.component";
import { UsersListComponent } from "./users-list/users-list.component";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFB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QixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQiwyQkFBMkI7d0JBQzNCLDJCQUEyQjt3QkFDM0IsOEJBQThCO3dCQUM5QixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkIsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLDJCQUEyQjt3QkFDM0IsbUJBQW1CO3dCQUNuQix5QkFBeUI7d0JBQ3pCLG1DQUFtQzt3QkFDbkMsMEJBQTBCO3dCQUMxQixZQUFZO3dCQUNaLHVCQUF1Qjt3QkFDdkIsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0XCI7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uXCI7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcblxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwic3dpcGVyL2VsZW1lbnQvYnVuZGxlXCI7XG5cbmltcG9ydCB7IFRhSWNvbnNNb2R1bGUsIFRhSWNvbnNTZXJ2aWNlIH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCJAdGEvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgQmFkZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9iYWRnZS9iYWRnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJ1bGxldENvbXBvbmVudCB9IGZyb20gXCIuL2J1bGxldC9idWxsZXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24vYWN0aW9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRHVhbEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL2J1dHRvbi9kdWFsL2R1YWwtYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uVG9vbENvbXBvbmVudCB9IGZyb20gXCIuL2J1dHRvbi90b29sL3Rvb2wuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaXZpbGl0eUNvbXBvbmVudCB9IGZyb20gXCIuL2NpdmlsaXR5L2NpdmlsaXR5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29udGFjdEluZm9ybWF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdC1pbmZvcm1hdGlvbi9jb250YWN0LWluZm9ybWF0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3JpdGljaXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vY3JpdGljaXR5L2NyaXRpY2l0eS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEN1bHR1cmVDb21wb25lbnQgfSBmcm9tIFwiLi9jdWx0dXJlL2N1bHR1cmUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEZXBhcnRtZW50SWNvbkxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9kZXBhcnRtZW50cy9kZXBhcnRtZW50LWljb24tbGlzdC9kZXBhcnRtZW50LWljb24tbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IERlcGFydG1lbnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEZXBhcnRtZW50UHJvZmVzc2lvbnNDb21wb25lbnQgfSBmcm9tIFwiLi9kZXBhcnRtZW50cy9wcm9mZXNzaW9ucy9wcm9mZXNzaW9ucy5jb21wb25lbnRcIjtcbmltcG9ydCB7IER1cmF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVyYXRpb24vZHVyYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFeHBhbmRhYmxlVGV4dENvbXBvbmVudCB9IGZyb20gXCIuL2V4cGFuZGFibGUtdGV4dC9leHBhbmRhYmxlLXRleHQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYUV4cGFuc2lvblBhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4vZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZpbGVJbWFnZUNvbXBvbmVudCB9IGZyb20gXCIuL2ZpbGUtaW1hZ2UvZmlsZS1pbWFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvdXJEYXRlTGluZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvdXItZGF0ZS1saW5lL2hvdXItZGF0ZS1saW5lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tIFwiLi9sYWJlbC9sYWJlbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpbmtDb21wb25lbnQgfSBmcm9tIFwiLi9saW5rL2xpbmsuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dvQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9nby9sb2dvLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVnYW9jdGV0Q29tcG9uZW50IH0gZnJvbSBcIi4vbWVnYW9jdGV0L21lZ2FvY3RldC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5ld0NvbXBvbmVudCB9IGZyb20gXCIuL25ldy9uZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25CYWRnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL25vdGlmaWNhdGlvbi1iYWRnZS9ub3RpZmljYXRpb24tYmFkZ2UtY29udGFpbmVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQmFkZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb24tYmFkZ2Uvbm90aWZpY2F0aW9uLWJhZGdlL25vdGlmaWNhdGlvbi1iYWRnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBpY3R1cmVJbmZvTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL3BpY3R1cmUtaW5mby1tZXNzYWdlL3BpY3R1cmUtaW5mby1tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9ncmVzcy9jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2dyZXNzQmFyRGF0YUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2dyZXNzL3Byb2dyZXNzLWJhci1kYXRhL3Byb2dyZXNzLWJhci1kYXRhLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHdhQ29tcG9uZW50IH0gZnJvbSBcIi4vcHdhL3B3YS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tIFwiLi90ZXh0L3RleHQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUaW1lQWdvQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZS1hZ28vdGltZS1hZ28uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUaXRsZUNvbXBvbmVudCB9IGZyb20gXCIuL3RpdGxlL3RpdGxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tIFwiLi90b2FzdC90b2FzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gXCIuLi8uLi90cmFuc2xhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmlncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vdHJpZ3JhbS90cmlncmFtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVHlwZWRNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vdHlwZWQtbWVzc2FnZS90eXBlZC1tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXNlckxvZ29Db21wb25lbnQgfSBmcm9tIFwiLi91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXNlcnNMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudFwiO1xuXG5yZWdpc3RlcigpO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgVGFVaU1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50LCBCYWRnZUNvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBUYURpcmVjdGl2ZVBpcGVNb2R1bGUsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBUYUljb25zTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgQWN0aW9uQnV0dG9uQ29tcG9uZW50LFxuICAgIEJhZGdlQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBDaXZpbGl0eUNvbXBvbmVudCxcbiAgICBDb250YWN0SW5mb3JtYXRpb25Db21wb25lbnQsXG4gICAgRGVwYXJ0bWVudEljb25MaXN0Q29tcG9uZW50LFxuICAgIERlcGFydG1lbnRQcm9mZXNzaW9uc0NvbXBvbmVudCxcbiAgICBEZXBhcnRtZW50c0NvbXBvbmVudCxcbiAgICBIb3VyRGF0ZUxpbmVDb21wb25lbnQsXG4gICAgTGlua0NvbXBvbmVudCxcbiAgICBMb2dvQ29tcG9uZW50LFxuICAgIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50LFxuICAgIFRpdGxlQ29tcG9uZW50LFxuICAgIFRyaWdyYW1Db21wb25lbnQsXG4gICAgVXNlckxvZ29Db21wb25lbnQsXG4gICAgVGV4dENvbXBvbmVudCxcbiAgICBQcm9ncmVzc0JhckRhdGFDb21wb25lbnQsXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgUGljdHVyZUluZm9NZXNzYWdlQ29tcG9uZW50LFxuICAgIFR5cGVkTWVzc2FnZUNvbXBvbmVudCxcbiAgICBUYUV4cGFuc2lvblBhbmVsQ29tcG9uZW50LFxuICAgIER1YWxCdXR0b25Db21wb25lbnQsXG4gICAgTm90aWZpY2F0aW9uQmFkZ2VDb250YWluZXJDb21wb25lbnQsXG4gICAgTm90aWZpY2F0aW9uQmFkZ2VDb21wb25lbnQsXG4gICAgUHdhQ29tcG9uZW50LFxuICAgIEV4cGFuZGFibGVUZXh0Q29tcG9uZW50LFxuICAgIFRvYXN0Q29tcG9uZW50LFxuICAgIExhYmVsQ29tcG9uZW50LFxuICAgIE5ld0NvbXBvbmVudCxcbiAgICBCdWxsZXRDb21wb25lbnQsXG4gICAgTWVnYW9jdGV0Q29tcG9uZW50LFxuICAgIEZpbGVJbWFnZUNvbXBvbmVudCxcbiAgICBUaW1lQWdvQ29tcG9uZW50LFxuICAgIER1cmF0aW9uQ29tcG9uZW50LFxuICAgIFVzZXJzTGlzdENvbXBvbmVudCxcbiAgICBCdXR0b25Ub29sQ29tcG9uZW50LFxuICAgIEN1bHR1cmVDb21wb25lbnQsXG4gICAgQ3JpdGljaXR5Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWN0aW9uQnV0dG9uQ29tcG9uZW50LFxuICAgIEJhZGdlQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBDaXZpbGl0eUNvbXBvbmVudCxcbiAgICBDb250YWN0SW5mb3JtYXRpb25Db21wb25lbnQsXG4gICAgRGVwYXJ0bWVudEljb25MaXN0Q29tcG9uZW50LFxuICAgIERlcGFydG1lbnRQcm9mZXNzaW9uc0NvbXBvbmVudCxcbiAgICBEZXBhcnRtZW50c0NvbXBvbmVudCxcbiAgICBIb3VyRGF0ZUxpbmVDb21wb25lbnQsXG4gICAgTGlua0NvbXBvbmVudCxcbiAgICBMb2dvQ29tcG9uZW50LFxuICAgIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50LFxuICAgIFRpdGxlQ29tcG9uZW50LFxuICAgIFRyaWdyYW1Db21wb25lbnQsXG4gICAgVXNlckxvZ29Db21wb25lbnQsXG4gICAgUHJvZ3Jlc3NCYXJEYXRhQ29tcG9uZW50LFxuICAgIFByb2dyZXNzQmFyQ29tcG9uZW50LFxuICAgIFBpY3R1cmVJbmZvTWVzc2FnZUNvbXBvbmVudCxcbiAgICBEdWFsQnV0dG9uQ29tcG9uZW50LFxuICAgIFRhRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsXG4gICAgTm90aWZpY2F0aW9uQmFkZ2VDb250YWluZXJDb21wb25lbnQsXG4gICAgTm90aWZpY2F0aW9uQmFkZ2VDb21wb25lbnQsXG4gICAgUHdhQ29tcG9uZW50LFxuICAgIEV4cGFuZGFibGVUZXh0Q29tcG9uZW50LFxuICAgIFRvYXN0Q29tcG9uZW50LFxuICAgIExhYmVsQ29tcG9uZW50LFxuICAgIE5ld0NvbXBvbmVudCxcbiAgICBUZXh0Q29tcG9uZW50LFxuICAgIEJ1bGxldENvbXBvbmVudCxcbiAgICBNZWdhb2N0ZXRDb21wb25lbnQsXG4gICAgRmlsZUltYWdlQ29tcG9uZW50LFxuICAgIFRpbWVBZ29Db21wb25lbnQsXG4gICAgQ3JpdGljaXR5Q29tcG9uZW50LFxuICAgIER1cmF0aW9uQ29tcG9uZW50LFxuICAgIFVzZXJzTGlzdENvbXBvbmVudCxcbiAgICBCdXR0b25Ub29sQ29tcG9uZW50LFxuICAgIEN1bHR1cmVDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1RhSWNvbnNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFVaU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=
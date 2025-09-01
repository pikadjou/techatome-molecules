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
@NgModule({

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

})
export class CamUiModule {
  constructor() {
    CamTranslationUI.getInstance();
  }
}

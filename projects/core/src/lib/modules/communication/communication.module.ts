import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { CamFilesBasicModule } from '@ta/files-basic';
import { CamFilesExtendedModule } from '@ta/files-extended';
import { CamFormModule } from '@ta/form-basic';
import { CamFormInputsModule } from '@ta/form-input';
import { CamIconsModule } from '@ta/icons';
import { CamMenuModule } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { CamCardModule, CamContainerModule, CamLayoutModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule, SafePipe } from '@ta/utils';
import { CamWysiswygModule } from '@ta/wysiswyg';

import { CamCoreModule } from '../../core.module';
import { CamGridModule } from '../grid/grid.module';
import { AiToolsComponent } from './components/ai-tools/ai-tools.component';
import { AttachmentsComponent } from './components/attachements/attachments.component';
import { AttachmentsModal } from './components/attachements/modal/modal.component';
import { CommunicationStatusComponent } from './components/communication-status/communication-status.component';
import { CommunicationTypeComponent } from './components/communication-type/communication-type.component';
import { ConversationAttachmentsComponent } from './components/conversation-attachments/conversation-attachments.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ListComponent } from './components/list/list.component';
import { InputComponent } from './components/message-box-container/input/input.component';
import { MessageBoxContainerComponent } from './components/message-box-container/message-box-container.component';
import { MessageChatComponent } from './components/message-container/message-chat/message-chat.component';
import { MessageContainerComponent } from './components/message-container/message-container.component';
import { MessageMailComponent } from './components/message-container/message-mail/message-mail.component';
import { ResponseToCommunicationComponent } from './components/message-container/message-mail/response-to-communication/response-to-communication.component';
import { MessageSystemComponent } from './components/message-container/message-system/message-system.component';
import { SwitchCaseBaseComponent } from './components/message-container/message-system/templates/switch-case-base/switch-case-base.component';
import { SwitchCasesAssigneeChangedComponent } from './components/message-container/message-system/templates/switch-cases-assignee-changed/switch-cases-assignee-changed.component';
import { SwitchCasesCriticityChangedComponent } from './components/message-container/message-system/templates/switch-cases-criticity-changed/switch-cases-criticity-changed.component';
import { SwitchCasesSubTaskCreatedComponent } from './components/message-container/message-system/templates/switch-cases-sub-task-created/switch-cases-sub-task-created.component';
import { SwitchCasesSubTypeChangedComponent } from './components/message-container/message-system/templates/switch-cases-sub-type-changed/switch-cases-sub-type-changed.component';
import { SwitchCasesTaskMergedComponent } from './components/message-container/message-system/templates/switch-cases-task-merged/switch-cases-task-merged.component';
import { SwitchCasesTaskStatusChangedComponent } from './components/message-container/message-system/templates/switch-cases-task-status-changed/switch-cases-task-status-changed.component';
import { SwitchCasesTeamChangedComponent } from './components/message-container/message-system/templates/switch-cases-team-changed/switch-cases-team-changed.component';
import { SwitchCasesToDoAddedComponent } from './components/message-container/message-system/templates/switch-cases-to-do-added/switch-cases-to-do-added.component';
import { SwitchCasesToDoClosedComponent } from './components/message-container/message-system/templates/switch-cases-to-do-closed/switch-cases-to-do-closed.component';
import { SwitchCasesTypeChangedComponent } from './components/message-container/message-system/templates/switch-cases-type-changed/switch-cases-type-changed.component';
import { LightComponent } from './components/participant/light/light.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { ParticipantsListComponent } from './components/participants-list/participants-list.component';
import { CommunicationTemplateChoiceDesktopComponent } from './components/templates/choice/choice-desktop/choice-desktop.component';
import { CommunicationTemplateChoiceMobileComponent } from './components/templates/choice/choice-mobile/choice-mobile.component';
import { CommunicationTemplateChoiceComponent } from './components/templates/choice/choice.component';
import { ChoiceDetailComponent } from './components/templates/choice/detail/detail.component';
import { ChoiceListComponent } from './components/templates/choice/list/list.component';
import { CommunicationTemplateEditComponent } from './components/templates/edit/edit.component';
import { VariantEditComponent } from './components/templates/edit/variant-edit/variant-edit.component';
import {
  CommunicationTemplateListComponent,
  CommunicationTypeCellComponent,
  CultureCellComponent,
  VariantsCellComponent,
} from './components/templates/list/list.component';
import { CamTranslationCommunication } from './translation.service';

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 * 
 * @example
 * // Instead of importing the module:
 * // import { CamCommunicationModule } from '@ta/library-name';
 * 
 * // Import the standalone components directly:
 * import { MessageBoxContainerComponent, MessageContainerComponent, ListComponent } from '@ta/library-name';
 */
@NgModule({

  declarations: [],
  imports: [CommonModule, CamIconsModule, CamMenuModule, CamWysiswygModule, CamUiModule, CamContainerModule, CamDirectivePipeModule, CamFormInputsModule, CamFilesBasicModule, CamFilesExtendedModule, CamFormModule, MatBottomSheetModule, CamCardModule, CamLayoutModule, CamGridModule, CamCoreModule, AiToolsComponent, TranslatePipe, SafePipe, ConversationAttachmentsComponent, MessageBoxContainerComponent, MessageContainerComponent, ParticipantComponent, MessageMailComponent, MessageChatComponent, LightComponent, ListComponent, ConversationComponent, InputComponent, AttachmentsComponent, AttachmentsModal, MessageSystemComponent, SwitchCasesTypeChangedComponent, SwitchCasesToDoAddedComponent, SwitchCaseBaseComponent, SwitchCasesAssigneeChangedComponent, SwitchCasesToDoClosedComponent, SwitchCasesSubTaskCreatedComponent, SwitchCasesTaskStatusChangedComponent, SwitchCasesCriticityChangedComponent, SwitchCasesTeamChangedComponent, SwitchCasesSubTypeChangedComponent, FiltersComponent, ParticipantsListComponent, SwitchCasesTaskMergedComponent, CommunicationTemplateListComponent, CommunicationTemplateEditComponent, VariantEditComponent, CommunicationTemplateChoiceComponent, CommunicationTemplateChoiceDesktopComponent, CommunicationTemplateChoiceMobileComponent, ChoiceDetailComponent, ChoiceListComponent, CultureCellComponent, VariantsCellComponent, CommunicationTypeCellComponent, CommunicationTypeComponent, CommunicationStatusComponent, ResponseToCommunicationComponent],
  exports: [
    MessageBoxContainerComponent,
    MessageContainerComponent,
    ListComponent,
    ConversationComponent,
    ParticipantsListComponent,
    CommunicationTemplateListComponent,
    CommunicationTemplateEditComponent,
    CommunicationTemplateChoiceComponent,
  ],

})
export class CamCommunicationModule {
  constructor() {
    CamTranslationCommunication.getInstance();
  }
}

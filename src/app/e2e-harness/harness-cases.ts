import { HarnessCase } from "@ta/testing";

import { ChartsCase } from "./cases/charts.case";
import { CmsCase } from "./cases/cms.case";
import { CoreCase } from "./cases/core.case";
import { DocumentsCase } from "./cases/documents.case";
import { FilesCase } from "./cases/files.case";
import { FilesEditCase } from "./cases/files-edit.case";
import { FilesExtendedCase } from "./cases/files-extended.case";
import { MiscCase } from "./cases/misc.case";
import { WysiwygCase } from "./cases/wysiwyg.case";
import { FormInputsCase } from "./cases/form-inputs.case";
import { FormInputsMediaCase } from "./cases/form-inputs-media.case";
import { MenuBottomSheetsCase } from "./cases/menu-bottom-sheets.case";
import { MenuCase } from "./cases/menu.case";
import { NotificationCase } from "./cases/notification.case";
import { UiBadgeCase } from "./cases/ui-badge.case";
import { UiBasicsCase } from "./cases/ui-basics.case";
import { UiButtonCase } from "./cases/ui-button.case";
import { UiButtonsCase } from "./cases/ui-buttons.case";
import { UiCardCase } from "./cases/ui-card.case";
import { UiContainerCase } from "./cases/ui-container.case";
import { UiDisplayCase } from "./cases/ui-display.case";
import { UiInteractiveCase } from "./cases/ui-interactive.case";
import { UiLayoutCase } from "./cases/ui-layout.case";
import { UiListCase } from "./cases/ui-list.case";
import { UiNotificationCase } from "./cases/ui-notification.case";
import { UiOverlayCase } from "./cases/ui-overlay.case";
import { UiOverlaysCase } from "./cases/ui-overlays.case";
import { UiProgressCase } from "./cases/ui-progress.case";
import { UiTextCase } from "./cases/ui-text.case";
import { UiTitleCase } from "./cases/ui-title.case";
import { UiTreeCase } from "./cases/ui-tree.case";
import { UserCase } from "./cases/user.case";

/**
 * Cas de test harness de l'app showcase. Chaque cas monte un ou plusieurs
 * composants @ta/* en config canonique, adressable via /e2e-harness/:id.
 */
export const HARNESS_CASES: HarnessCase[] = [
  // @ta/ui — composants individuels historiques
  { id: "ui-button", component: UiButtonCase },
  { id: "ui-title", component: UiTitleCase },
  { id: "ui-text", component: UiTextCase },
  { id: "ui-badge", component: UiBadgeCase },
  // @ta/ui — galeries
  { id: "ui-basics", component: UiBasicsCase },
  { id: "ui-buttons", component: UiButtonsCase },
  { id: "ui-display", component: UiDisplayCase },
  { id: "ui-progress", component: UiProgressCase },
  { id: "ui-interactive", component: UiInteractiveCase },
  { id: "ui-notification", component: UiNotificationCase },
  { id: "ui-card", component: UiCardCase },
  { id: "ui-list", component: UiListCase },
  { id: "ui-tree", component: UiTreeCase },
  { id: "ui-layout", component: UiLayoutCase },
  { id: "ui-container", component: UiContainerCase },
  { id: "ui-overlay", component: UiOverlayCase },
  { id: "ui-overlays", component: UiOverlaysCase },
  // @ta/charts
  { id: "charts", component: ChartsCase },
  // @ta/form-input
  { id: "form-inputs", component: FormInputsCase },
  { id: "form-inputs-media", component: FormInputsMediaCase },
  // @ta/menu
  { id: "menu", component: MenuCase },
  { id: "menu-bottom-sheets", component: MenuBottomSheetsCase },
  // @ta/notification
  { id: "notification", component: NotificationCase },
  // @ta/core
  { id: "core", component: CoreCase },
  // @ta/user
  { id: "user", component: UserCase },
  // @ta/files-basic
  { id: "files", component: FilesCase },
  { id: "files-extended", component: FilesExtendedCase },
  { id: "files-edit", component: FilesEditCase },
  { id: "documents", component: DocumentsCase },
  // @ta/wysiswyg
  { id: "wysiwyg", component: WysiwygCase },
  // @ta/cms
  { id: "cms", component: CmsCase },
  // divers (strapi-cms, pwa, google-maps)
  { id: "misc", component: MiscCase },
];

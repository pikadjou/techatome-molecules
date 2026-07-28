import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  ActionButtonComponent,
  ActionButtonData,
  ButtonToolComponent,
  CopyLinkButtonComponent,
  DualButtonComponent,
  DualButtonInput,
  ItsmeButtonComponent,
  MessengerButtonComponent,
  ShareButtonComponent,
  VeriffButtonComponent,
  WhatsappButtonComponent,
} from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « buttons » @ta/ui.
 * Route: /e2e-harness/ui-buttons
 */
@Component({
  standalone: true,
  selector: "app-case-ui-buttons",
  imports: [
    ActionButtonComponent,
    ButtonToolComponent,
    CopyLinkButtonComponent,
    DualButtonComponent,
    ItsmeButtonComponent,
    MessengerButtonComponent,
    ShareButtonComponent,
    VeriffButtonComponent,
    WhatsappButtonComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-action-button taTestId="ta-action-button" [actions]="actions"></ta-action-button>
    <ta-dual-button taTestId="ta-dual-button" [first]="first" [second]="second"></ta-dual-button>
    <ta-button-tool taTestId="ta-button-tool">Outil</ta-button-tool>
    <ta-copy-link-button taTestId="ta-copy-link-button"></ta-copy-link-button>
    <ta-share-button taTestId="ta-share-button"></ta-share-button>
    <ta-messenger-button taTestId="ta-messenger-button"></ta-messenger-button>
    <ta-whatsapp-button taTestId="ta-whatsapp-button"></ta-whatsapp-button>
    <ta-itsme-button taTestId="ta-itsme-button"></ta-itsme-button>
    <ta-veriff-button taTestId="ta-veriff-button"></ta-veriff-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonsCase {
  readonly actions: ActionButtonData[] = [{ icon: "user", label: "Action", callback: () => undefined }];
  readonly first: DualButtonInput = { icon: "user", label: "Premier", callback: () => undefined };
  readonly second: DualButtonInput = { icon: "settings", label: "Second", callback: () => undefined };
}

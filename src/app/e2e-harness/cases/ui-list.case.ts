import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  ListContainerComponent,
  ListElementComponent,
  ListExtraInformationComponent,
  ListSubTitleComponent,
  ListTagComponent,
  ListTitleComponent,
} from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « list » @ta/ui — liste composée.
 * Route: /e2e-harness/ui-list
 */
@Component({
  standalone: true,
  selector: "app-case-ui-list",
  imports: [
    ListContainerComponent,
    ListElementComponent,
    ListExtraInformationComponent,
    ListSubTitleComponent,
    ListTagComponent,
    ListTitleComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-list-container taTestId="ta-list-container">
      <ta-list-element taTestId="ta-list-element">
        <ta-list-title taTestId="ta-list-title">Titre</ta-list-title>
        <ta-list-sub-title taTestId="ta-list-sub-title">Sous-titre</ta-list-sub-title>
        <ta-list-tag taTestId="ta-list-tag">Tag</ta-list-tag>
        <ta-list-extra-information taTestId="ta-list-extra-information">Info</ta-list-extra-information>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiListCase {}

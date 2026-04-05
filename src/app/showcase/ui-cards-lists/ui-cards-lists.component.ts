import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  BadgeComponent,
  ButtonComponent,
  CardComponent,
  CardContentComponent,
  CardCtaComponent,
  CardHeaderComponent,
  CardImageComponent,
  CardSubtitleComponent,
  CardTagComponent,
  CardTitleComponent,
  DashboardCardComponent,
  ListContainerComponent,
  ListElementComponent,
  ListExtraInformationComponent,
  ListSubTitleComponent,
  ListTagComponent,
  ListTitleComponent,
  TextComponent,
  TitleComponent,
  ToggleCardComponent,
} from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    CardContentComponent,
    CardCtaComponent,
    CardHeaderComponent,
    CardImageComponent,
    CardSubtitleComponent,
    CardTagComponent,
    CardTitleComponent,
    DashboardCardComponent,
    ListContainerComponent,
    ListElementComponent,
    ListExtraInformationComponent,
    ListSubTitleComponent,
    ListTagComponent,
    ListTitleComponent,
    PageLayoutComponent,
    TextComponent,
    TitleComponent,
    ToggleCardComponent,
  ],
  templateUrl: "./ui-cards-lists.component.html",
  styleUrl: "./ui-cards-lists.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardsListsPage {
  toggleActive = false;
}

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaIconType } from "@ta/icons";
import {
  ActionButtonComponent,
  ActionButtonData,
  BadgeComponent,
  BannerComponent,
  ButtonComponent,
  ButtonToolComponent,
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardTitleComponent,
  DualButtonComponent,
  TaExpansionPanelComponent,
  ItsmeButtonComponent,
  LabelComponent,
  LinkComponent,
  ProgressComponent,
  ProgressCircleComponent,
  RatingComponent,
  TextComponent,
  TitleComponent,
  ToggleCardComponent,
} from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    ActionButtonComponent,
    BadgeComponent,
    BannerComponent,
    ButtonComponent,
    ButtonToolComponent,
    CardComponent,
    CardContentComponent,
    CardHeaderComponent,
    CardTitleComponent,
    DualButtonComponent,
    TaExpansionPanelComponent,
    ItsmeButtonComponent,
    LabelComponent,
    LinkComponent,
    PageLayoutComponent,
    ProgressCircleComponent,
    ProgressComponent,
    RatingComponent,
    TextComponent,
    TitleComponent,
    ToggleCardComponent,
  ],
  templateUrl: "./ui.component.html",
  styleUrl: "./ui.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPage {
  expansionOpen = false;
  toggleActive = false;
  rating = 3;

  // Action button data
  singleAction: ActionButtonData[] = [
    { icon: TaIconType.Edit, label: "Edit", callback: () => {} },
  ];

  multipleActions: ActionButtonData[] = [
    { icon: TaIconType.Edit, label: "Edit", callback: () => {} },
    { icon: TaIconType.Delete, label: "Delete", callback: () => {} },
    { icon: TaIconType.Download, label: "Download", callback: () => {} },
  ];

  materialActions: ActionButtonData[] = [
    { icon: "settings", label: "Settings", callback: () => {} },
    { icon: "favorite", label: "Favorite", callback: () => {} },
  ];

  // Dual button configs
  dualFirst = { icon: "check", label: "Confirm", callback: () => {} };
  dualSecond = { icon: "close", label: "Cancel", callback: () => {} };
  dualSaveFirst = { icon: "save", label: "Save", callback: () => {} };
  dualSaveSecond = { icon: "delete", label: "Discard", callback: () => {} };
}

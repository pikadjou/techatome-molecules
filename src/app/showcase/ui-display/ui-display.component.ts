import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import {
  BooleanIconComponent,
  CivilityComponent,
  CriticityComponent,
  CultureComponent,
  DurationComponent,
  ExpandableTextComponent,
  MegaoctetComponent,
  TextComponent,
  TimeAgoComponent,
  TitleComponent,
  TrigramComponent,
  UserLogoComponent,
  UsersListComponent,
} from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    BooleanIconComponent,
    CivilityComponent,
    CriticityComponent,
    CultureComponent,
    DurationComponent,
    ExpandableTextComponent,
    MegaoctetComponent,
    PageLayoutComponent,
    TextComponent,
    TimeAgoComponent,
    TitleComponent,
    TrigramComponent,
    UserLogoComponent,
    UsersListComponent,
  ],
  templateUrl: "./ui-display.component.html",
  styleUrl: "./ui-display.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDisplayPage {
  yesterdayDate = new Date(Date.now() - 86400000).toISOString();
  weekAgoDate = new Date(Date.now() - 7 * 86400000).toISOString();

  users$ = of([
    { firstName: "Alice", lastName: "Martin" },
    { firstName: "Bob", lastName: "Dupont" },
    { firstName: "Claire", lastName: "Bernard" },
  ]);
}

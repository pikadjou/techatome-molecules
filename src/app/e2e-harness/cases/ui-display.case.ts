import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Observable, of } from "rxjs";

import {
  Address,
  AddressComponent,
  BooleanIconComponent,
  CivilityComponent,
  ContactInformationComponent,
  CriticityComponent,
  CultureComponent,
  DepartmentIconListComponent,
  DepartmentProfessionsComponent,
  DepartmentsComponent,
  DurationComponent,
  FileImageComponent,
  HourDateLineComponent,
  InlineProfileDataComponent,
  MegaoctetComponent,
  PictureInfoMessageComponent,
  TimeAgoComponent,
  TrigramComponent,
  TypedMessageComponent,
  UserLogoComponent,
  UserLogoData,
  UsersListComponent,
  WrappedIconComponent,
} from "@ta/ui";
import { Culture, TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « display » @ta/ui — composants d'affichage de données.
 * Route: /e2e-harness/ui-display
 */
@Component({
  standalone: true,
  selector: "app-case-ui-display",
  imports: [
    AddressComponent,
    BooleanIconComponent,
    CivilityComponent,
    ContactInformationComponent,
    CriticityComponent,
    CultureComponent,
    DepartmentIconListComponent,
    DepartmentProfessionsComponent,
    DepartmentsComponent,
    DurationComponent,
    FileImageComponent,
    HourDateLineComponent,
    InlineProfileDataComponent,
    MegaoctetComponent,
    PictureInfoMessageComponent,
    TimeAgoComponent,
    TrigramComponent,
    TypedMessageComponent,
    UserLogoComponent,
    UsersListComponent,
    WrappedIconComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-boolean-icon taTestId="ta-boolean-icon"></ta-boolean-icon>
    <ta-civility taTestId="ta-civility" [civility]="null"></ta-civility>
    <ta-criticity taTestId="ta-criticity" [criticity]="1"></ta-criticity>
    <ta-culture taTestId="ta-culture" [cultures]="cultures"></ta-culture>
    <ta-duration taTestId="ta-duration"></ta-duration>
    <ta-time-ago taTestId="ta-time-ago" [date]="isoDate"></ta-time-ago>
    <ta-trigram taTestId="ta-trigram" [value]="'John Doe'"></ta-trigram>
    <ta-user-logo taTestId="ta-user-logo" [user]="user"></ta-user-logo>
    <ta-users-list taTestId="ta-users-list" [users]="users$"></ta-users-list>
    <ta-address taTestId="ta-address" [address]="address"></ta-address>
    <ta-contact-information taTestId="ta-contact-information" [value]="'+32 470 00 00 00'"></ta-contact-information>
    <ta-megaoctet taTestId="ta-megaoctet" [octet]="1048576"></ta-megaoctet>
    <ta-wrapped-icon taTestId="ta-wrapped-icon" [icon]="'user'"></ta-wrapped-icon>
    <ta-file-image taTestId="ta-file-image" [fileName]="'photo.png'"></ta-file-image>
    <ta-hour-date-line taTestId="ta-hour-date-line" [startDate]="start" [endDate]="end"></ta-hour-date-line>
    <ta-typed-message taTestId="ta-typed-message" [text]="'Message'" [type]="'info'"></ta-typed-message>
    <ta-picture-info-message taTestId="ta-picture-info-message" [text]="'Information'" [icon]="'user'"></ta-picture-info-message>
    <ta-inline-profile-data taTestId="ta-inline-profile-data" [profile]="profile"></ta-inline-profile-data>
    <ta-departments taTestId="ta-departments" [departments]="departments" [professions]="professions"></ta-departments>
    <ta-department-icon-list taTestId="ta-department-icon-list" [departments]="departments"></ta-department-icon-list>
    <ta-department-professions taTestId="ta-department-professions" [professions]="professions"></ta-department-professions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDisplayCase {
  readonly cultures: Culture[] = [Culture.FR_BE, Culture.EN_EN];
  readonly isoDate = new Date().toISOString();
  readonly start: Date = new Date("2026-01-01T09:00:00");
  readonly end: Date = new Date("2026-01-01T17:00:00");
  readonly user: UserLogoData = { firstname: "John", lastname: "Doe" };
  readonly users$: Observable<UserLogoData[]> = of([
    { firstname: "John", lastname: "Doe" },
    { firstname: "Jane", lastname: "Roe" },
  ]);
  readonly address: Address = {
    id: "1",
    street: "Rue de la Loi",
    number: "16",
    city: "Bruxelles",
    zipCode: "1000",
    country: "BE",
    floor: "0",
  };
  readonly profile = {
    title: { main: "John Doe", second: "Développeur", sub: "Équipe web" },
    email: "john.doe@example.com",
    phoneNumber: "+32 470 00 00 00",
  };
  readonly departments = [{ id: 1, name: "IT", iconPath: null }];
  readonly professions = ["Développeur", "Designer"];
}

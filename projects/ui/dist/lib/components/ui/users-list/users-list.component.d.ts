import { Observable } from "rxjs";
import { UserLogoData } from "../user-logo/user-logo.component";
import * as i0 from "@angular/core";
export declare class UsersListComponent {
    users: import("@angular/core").InputSignal<Observable<UserLogoData[]>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UsersListComponent, "ta-users-list", never, { "users": { "alias": "users"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

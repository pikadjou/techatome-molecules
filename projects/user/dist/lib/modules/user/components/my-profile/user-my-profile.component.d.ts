import { EventEmitter } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import { CamUsersService } from '../../services/users.service';
import { User } from '../../services/users/dto/user';
import * as i0 from "@angular/core";
export declare class UserMyProfileComponent extends TaBaseComponent {
    private _userService;
    canModify: boolean;
    modifyAction: EventEmitter<any>;
    readonly mailTo: (mail: string) => void;
    ctas: {
        icon: string;
        label: string;
        callback: () => void;
    }[];
    get currentUser$(): import("rxjs").Observable<User | null>;
    constructor(_userService: CamUsersService);
    getFullName(firstName: string, lastName: string): string;
    getUserLogo(user: User): {
        userInfo: {
            profilePictureUrl: string;
            naming: {
                name: string;
                firstName: string;
                trigram: string;
            };
        };
    };
    private _fetch;
    private _modifyProfile;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserMyProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserMyProfileComponent, "ta-user-my-profile", never, { "canModify": { "alias": "canModify"; "required": false; }; }, { "modifyAction": "modifyAction"; }, never, never, true, never>;
}

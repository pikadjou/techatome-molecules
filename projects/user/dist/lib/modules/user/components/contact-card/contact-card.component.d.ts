import { TaBaseComponent } from '@ta/utils';
import { CamUsersService } from '../../services/users.service';
import { User } from '../../services/users/dto/user';
import * as i0 from "@angular/core";
export declare class ContactCardComponent extends TaBaseComponent {
    private _usersService;
    userId: string;
    get user$(): import("rxjs").Observable<User>;
    constructor(_usersService: CamUsersService);
    ngOnInit(): void;
    getUserLogoData(user: User): {
        firstName: string;
        lastName: string;
        trigram: string;
        picture: string;
    };
    private _fetch;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContactCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContactCardComponent, "ta-contact-card", never, { "userId": { "alias": "userId"; "required": false; }; }, {}, never, never, true, never>;
}

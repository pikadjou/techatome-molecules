import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class TenantUrlDisplayerComponent extends TaBaseComponent {
    contactId: string;
    display: 'button' | 'icon';
    get contactTenantRoute$(): import("rxjs").Observable<string | null>;
    private _usersService;
    constructor();
    ngOnInit(): void;
    navigateToTenantContact(url: string): void;
    private _fetch;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantUrlDisplayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantUrlDisplayerComponent, "ta-tenant-url-displayer", never, { "contactId": { "alias": "contactId"; "required": false; }; "display": { "alias": "display"; "required": false; }; }, {}, never, ["*"], true, never>;
}

import { Observable } from 'rxjs';
/** @deprecate */
export interface SegmentedTabItem {
    label: string;
    disabled$?: Observable<boolean>;
    badge$?: Observable<number>;
    action: (data?: any) => void;
}

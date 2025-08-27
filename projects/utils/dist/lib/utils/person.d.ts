import { CamIconType } from '@ta/icons';
import { Civility } from '../types/public-api';
export declare const getCivilityIcon: (civility: Civility | null) => CamIconType | null;
export declare const getCivility: (person: {
    naming: any;
}) => Civility | null;
export declare const fullName: (naming: {
    firstName: string | null;
    name: string;
} | {
    firstName: string | null;
    lastName: string;
}) => string;

import { TaIconType } from "@ta/icons";
import { Civility } from "../types/public-api";
export declare const getCivilityIcon: (civility: Civility | null) => TaIconType | null;
export declare const getCivility: (person: {
    naming: any;
}) => Civility | null;
export declare const fullName: (naming?: {
    firstname: string | null;
    lastname: string;
}) => string;

import { GraphSchema } from '@ta/server';
export interface UserProfile {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    picture: string;
}
export declare const userProfileBrutProps: (keyof UserProfile)[];
export declare const userProfileProps: GraphSchema<UserProfile>;

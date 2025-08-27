import { GraphSchema } from '@ta/server';
import { CurrentUser } from './currentUser';
export interface User extends CurrentUser {
}
export interface UserFunctionPayload {
    userId: string;
    functionId: string;
}
export declare const userProps: GraphSchema<User>;

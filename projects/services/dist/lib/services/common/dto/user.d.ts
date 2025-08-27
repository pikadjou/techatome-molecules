import { Department } from './department';
import { PersonBase } from './personBase';
import { UserNaming } from './userNaming';
export interface User extends PersonBase<UserNaming> {
    departments: Department[] | null;
    profilePictureUrl?: string;
}

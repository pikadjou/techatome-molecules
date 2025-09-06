import { GraphSchema } from '@ta/server';

export interface UserProfile {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  picture: string;
}

export const userProfileBrutProps: (keyof UserProfile)[] = ['id', 'firstname', 'lastname', 'email', 'picture'];

export const userProfileProps = new GraphSchema<UserProfile>(userProfileBrutProps);

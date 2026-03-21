import { UserProfile, userProfileBrutProps, userProfileProps } from './user-profile';

describe('UserProfile DTO', () => {
  it('should have userProfileProps GraphSchema defined', () => {
    expect(userProfileProps).toBeTruthy();
  });

  it('should have all expected brut properties', () => {
    const expectedProps: (keyof UserProfile)[] = [
      'id', 'firstname', 'lastname', 'email', 'picture', 'dateOfBirth',
    ];
    expect(userProfileBrutProps).toEqual(expectedProps);
  });

  it('should include id property in schema', () => {
    expect(userProfileProps.get('id')).toBeDefined();
  });

  it('should include firstname property in schema', () => {
    expect(userProfileProps.get('firstname')).toBeDefined();
  });

  it('should include email property in schema', () => {
    expect(userProfileProps.get('email')).toBeDefined();
  });
});

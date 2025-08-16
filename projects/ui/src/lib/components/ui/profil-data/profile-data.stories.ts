import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamDirectivePipeModule } from '@camelot/utils';

import { ButtonComponent, UserLogoComponent } from '../public-api';
import { ProfileDataComponent } from './profile-data.component';

type StoryType = ProfileDataComponent;

export default {
  title: 'UI/Profil Data',
  component: ProfileDataComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, UserLogoComponent],
      imports: [CamIconsModule, CamDirectivePipeModule, TranslatePipe],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-profile-data [profile]="profile" [userLogo]="userLogo" [sideIcon]="sideIcon"></cam-profile-data>
      `,
    };
  },
  args: {
    profile: {
      title: {
        main: 'VANDERHEYDEN',
        second: 'Jean-François',
        sub: 'client',
      },
      email: 'redpanda@gmail.com',
      phoneNumber: '+472695609',
    },
  },
} as Meta<StoryType>;

export const Basic: StoryObj<ProfileDataComponent> = {};

export const WithSideIcon: StoryObj<ProfileDataComponent> = {
  args: {
    profile: {
      title: {
        main: 'VANDERHEYDEN',
        second: 'Jean-François',
        sub: 'client',
      },
      email: 'redpanda@gmail.com',
      phoneNumber: '+472695609',
    },
    sideIcon: 'home',
  },
};

export const Wrapped: StoryObj<ProfileDataComponent> = {
  args: {
    profile: {
      title: {
        main: 'This name is way too long but it shows the wrapping effect.. Still not long enough so Im sorry for this but i had to..',
        second:
          'This name is way too long but it shows the wrapping effect.. Still not long enough so Im sorry for this but i had to..',
      },
    },
  },
};

export const User: StoryObj<ProfileDataComponent> = {
  args: {
    profile: {
      title: {
        main: 'VANDERHEYDEN',
        second: 'Jean-François',
        sub: 'client',
      },
      email: 'redpanda@gmail.com',
      phoneNumber: '+472695609',
    },
    userLogo: {
      userInfo: {
        profilePictureUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eQMBIoGyHlsmDCKsRwjZpvyRzkr7HA0dIwcrMQtnSxGcNQfQXa_ZQrzUY0NEWcuxyMU&usqp=CAU',
        naming: {
          name: 'Dark',
          firstName: 'Vadehors',
          trigram: 'DVD',
        },
      },
      size: 90,
    },
  },
};

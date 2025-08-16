import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamDirectivePipeModule } from '@camelot/utils';

import { ButtonComponent, UserLogoComponent } from '../../public-api';
import { InlineProfileDataComponent } from './inline-profile-data.component';

type StoryType = InlineProfileDataComponent;

export default {
  title: 'UI/Profil Data/Inline',
  component: InlineProfileDataComponent,
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
        <cam-inline-profile-data [profile]="profile" [userLogo]="userLogo"></cam-inline-profile-data>
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
      size: 'lg',
    },
  },
} as Meta<StoryType>;

export const Basic: StoryObj<InlineProfileDataComponent> = {};

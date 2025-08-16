import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconType, CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamDirectivePipeModule } from '@camelot/utils';

import { TitleComponent } from '../public-api';
import { ContactInformationComponent } from './contact-information.component';

type StoryType = ContactInformationComponent;

export default {
  title: 'UI/Contact Information',
  component: ContactInformationComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [TitleComponent],
      imports: [CamDirectivePipeModule, TranslatePipe, TranslatePipe, CamIconsModule],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-contact-information [value]="value" [icon]="icon">
          My content
        </cam-contact-information>
      `,
    };
  },
  argTypes: {
    value: {
      control: 'text',
    },
    icon: {
      control: 'text',
    },
    localIcon: {
      options: Object.values(CamIconType).filter(x => typeof x === 'string'),
      mapping: CamIconType,
      control: { type: 'select' },
    },
  },
  args: {
    icon: 'mail',
    value: 'Contact information',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

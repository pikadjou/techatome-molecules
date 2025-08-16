import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconType, CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamDirectivePipeModule } from '@ta/utils';

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
        <ta-contact-information [value]="value" [icon]="icon">
          My content
        </ta-contact-information>
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

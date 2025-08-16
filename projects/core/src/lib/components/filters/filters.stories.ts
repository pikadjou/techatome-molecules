import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { CamLayoutModule, CamUiModule } from '@camelot/ui';

import { FiltersComponent } from './filters.component';

type StoryType = FiltersComponent;

export default {
  title: 'UI/Filters',
  component: FiltersComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-filters>
          Mon contenu
        </cam-filters>
      `,
    };
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        BrowserAnimationsModule,
        CamLayoutModule,
        CamUiModule,
        CamIconsModule,
      ],
    }),
  ],
  args: {},
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

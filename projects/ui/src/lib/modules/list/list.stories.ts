import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { DepartmentIconListComponent } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

import { ListElementComponent } from './element/list-element.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListSubTitleComponent } from './sub-title/list-sub-title.component';
import { ListTagComponent } from './tag/list-tag.component';
import { ListTitleComponent } from './title/list-title.component';

type StoryType = { list: any[]; withSeparator: boolean; flexColumn: boolean };

export default {
  title: 'LIST/List',
  component: ListElementComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [
        ListTitleComponent,
        ListSubTitleComponent,
        ListTagComponent,
        DepartmentIconListComponent,
        ListContainerComponent,
      ],
      imports: [CamDirectivePipeModule],
    }),
  ],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <cam-list-container>   
          <ng-container *ngFor="let object of list">
            <cam-list-element [withSeparator]="withSeparator" [flexColumn]="flexColumn">
              <cam-list-title>
                {{object.title}}
              </cam-list-title>
              <cam-list-sub-title>
                {{object.subtitle}}
              </cam-list-sub-title>
              <cam-list-tag>
                {{object.tag}}
              </cam-list-tag>
              <cam-list-extra-information>
                {{object.extra}}
              </cam-list-extra-information>
            </cam-list-element>
          </ng-container>
      </cam-list-container>
      `,
    };
  },
  args: {
    withSeparator: true,
    list: [
      {
        title: 'Title',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tag: 'Tag',
      },
      {
        title: 'Title2',
        subtitle: 'Subtitle2',
        tag: 'Tag2',
      },
      {
        title: 'Titlge3',
        tag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
export const WithoutSeparator: StoryObj<StoryType> = {
  args: {
    withSeparator: false,
  },
};
export const ExtraInformation: StoryObj<StoryType> = {
  args: {
    withSeparator: true,
    flexColumn: true,
    list: [
      {
        title: 'Titlge3',
        extra: 'coucou',
      },
      {
        title: 'Titlge3',
        extra: 'coucou',
      },
      {
        title: 'Titlge3',
        extra: 'coucou',
      },
    ],
  },
};

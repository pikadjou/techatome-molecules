import { Meta, StoryObj } from '@storybook/angular';

import { ListElementComponent } from './element/list-element.component';

type StoryType = { list: any[]; withSeparator: boolean; flexColumn: boolean };

export default {
  title: 'LIST/List',
  component: ListElementComponent,
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
      <ta-list-container>   
          <ng-container *ngFor="let object of list">
            <ta-list-element [withSeparator]="withSeparator" [flexColumn]="flexColumn">
              <ta-list-title>
                {{object.title}}
              </ta-list-title>
              <ta-list-sub-title>
                {{object.subtitle}}
              </ta-list-sub-title>
              <ta-list-tag>
                {{object.tag}}
              </ta-list-tag>
              <ta-list-extra-information>
                {{object.extra}}
              </ta-list-extra-information>
            </ta-list-element>
          </ng-container>
      </ta-list-container>
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

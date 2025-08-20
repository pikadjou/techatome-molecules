import { Meta, StoryObj } from '@storybook/angular';
import { CamExpansionPanelComponent } from './expansion-panel.component';

type StoryType = CamExpansionPanelComponent;

export default {
  title: 'UI/Expansion panel',
  component: CamExpansionPanelComponent,
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-expansion-panel [templates]="[{title: title1, content: content1}, {title: title2, content: content2}]"></ta-expansion-panel>

        <ng-template #title1>
          <div>1. Lorem Ipsum is simply dummy text</div>
        </ng-template>
        <ng-template #content1>
          <div>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </ng-template>

        <ng-template #title2>
          <div>2. Lorem Ipsum is simply dummy text</div>
        </ng-template>
        <ng-template #content2>
          <div>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </ng-template>
      `,
    };
  },
  args: {},
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const WithContext: StoryObj<StoryType> = {
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-expansion-panel [templates]="[{title: title1, content: content1, context: {info: 'this is my context'}}, {title: title2, content: content2}]"></ta-expansion-panel>

        <ng-template #title1 let-info="info">
          <div>1. Lorem Ipsum is simply dummy text - {{ info }}</div>
        </ng-template>
        <ng-template #content1>
          <div>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </ng-template>

        <ng-template #title2>
          <div>2. Lorem Ipsum is simply dummy text</div>
        </ng-template>
        <ng-template #content2>
          <div>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </ng-template>
      `,
    };
  },
};

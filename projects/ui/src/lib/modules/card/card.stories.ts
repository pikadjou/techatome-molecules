import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { Department } from "../../components/ui/departments/interface";
import { CardComponent } from "./card.component";
import {
  CardContentComponent,
  CardCtaComponent,
  CardHeaderComponent,
  CardSubtitleComponent,
  CardTagComponent,
  CardTitleComponent,
} from "./public-api";

type StoryType = CardComponent & {
  departments: Department[];
  startDate: Date;
  endDate: Date;
};

export default {
  title: "CARD/card",
  component: CardComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [
        CardContentComponent,
        CardCtaComponent,
        CardHeaderComponent,
        CardSubtitleComponent,
        CardTagComponent,
        CardTitleComponent,
      ],
    }),
  ],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <div [style.width.px]="320"> 
          <ta-card [highlight]="highlight" [shadow]="shadow" [noContent]="noContent">
            <ta-card-header>
              <ta-card-tag>
                <ta-hour-date-line [startDate]="startDate" [endDate]="endDate"></ta-hour-date-line>
              </ta-card-tag>
              <ta-card-title>Sprl Cabinet Dentaire Eric MASSART</ta-card-title>
            </ta-card-header>
            <ta-card-content>
              Rue Sainte-Walburge 12
              4000 Liège
            </ta-card-content>
            <ta-card-cta>
              <ta-department-icon-list [departments]="departments"></ta-department-icon-list>
            </ta-card-cta>
          </ta-card>
        </div>
      `,
    };
  },
  args: {
    noContent: false,
    shadow: true,
    startDate: new Date(),
    endDate: new Date(),
    departments: [
      {
        id: 0,
        name: "BUREAU",
        iconPath:
          "https://rgroupstorage.blob.core.windows.net/prod/Renoenergy_icones_bic.png",
      },
      {
        id: 0,
        name: "HVAC",
        iconPath:
          "https://rgroupstorage.blob.core.windows.net/prod/Chauffage%20et%20cliu%CC%80.png",
      },
      {
        id: 0,
        name: "PVELEC",
        iconPath: "https://rgroupstorage.blob.core.windows.net/prod/PVO.png",
      },
    ],
  },
} as Meta<StoryType>;

export const Basic: StoryObj<CardComponent> = {};

export const Extends: StoryObj<StoryType> = {
  args: {
    departments: [],
  },
};

export const NoContent: StoryObj<StoryType> = {
  args: {
    noContent: true,
  },
};
export const fullHeight: StoryObj<StoryType> = {
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <div [style.height.px]="500" [style.width.px]="320" class="bd">
          <ta-card [highlight]="highlight" [shadow]="shadow" [fullHeight]="true">
            <ta-card-header>
              <ta-card-tag>
                <ta-hour-date-line [startDate]="startDate" [endDate]="endDate"></ta-hour-date-line>
              </ta-card-tag>
              <ta-card-title>Sprl Cabinet Dentaire Eric MASSART</ta-card-title>
            </ta-card-header>
            <ta-card-content>
              Rue Sainte-Walburge 12
              4000 Liège
            </ta-card-content>
            <ta-card-cta>
              <ta-department-icon-list [departments]="departments"></ta-department-icon-list>
            </ta-card-cta>
          </ta-card>
        </div>
      `,
    };
  },
};

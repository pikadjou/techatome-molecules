import { moduleMetadata } from "@storybook/angular";
import { Meta, StoryObj } from "@storybook/angular";

import { TaIconType } from "@ta/icons";
import { ButtonComponent } from "@ta/ui";

import { EmptyComponent } from "./empty.component";

type StoryType = any;

export default {
  title: "Container/Empty",
  component: EmptyComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <div [style.width.px]="450">
        <ta-empty
         [isEmpty]="isEmpty" [isLight]="isLight"
         [text]="text" [subtitle]="subtitle"         [emptyIcon]="icon" [iconSize]="iconSize"
         [showMessage]="showMessage"
        >
        </ta-empty>
      </div>
      `,
    };
  },
  decorators: [moduleMetadata({ imports: [ButtonComponent] })],
  args: {
    icon: "sentiment_dissatisfied",
    iconSize: "xl",
    text: "Rien ici pour le moment",
    subtitle: "",
    isEmpty: true,
    isLight: false,
    showMessage: true,
  },
  argTypes: {
    iconSize: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Light: StoryObj<StoryType> = {
  args: {
    isEmpty: true,
    isLight: true,
    text: "Aucun élément à afficher",
  },
};

export const WithSubtitle: StoryObj<StoryType> = {
  args: {
    icon: "ghost",
    iconSize: "xl",
    text: "Rien ici pour le moment",
    subtitle: "Ajoutez des éléments pour les voir apparaître ici",
    isEmpty: true,
    isLight: false,
  },
};

export const WithCTA: StoryObj<StoryType> = {
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <div [style.width.px]="450">
        <ta-empty
         [isEmpty]="isEmpty" [isLight]="isLight"
         [text]="text" [subtitle]="subtitle"         [emptyIcon]="icon" [iconSize]="iconSize"
        >
          <div emptyAction class="mt-space-sm">
            <ta-button type="secondary">Ajouter un élément</ta-button>
          </div>
        </ta-empty>
      </div>
      `,
    };
  },
  args: {
    icon: "ghost",
    iconSize: "xl",
    text: "Rien ici pour le moment",
    subtitle: "Commencez par ajouter votre premier élément",
    isEmpty: true,
    isLight: false,
  },
};

export const CustomIcon: StoryObj<StoryType> = {
  args: {
    icon: TaIconType.Search,
    iconSize: "xl",
    text: "Aucun résultat trouvé",
    subtitle: "Essayez avec d'autres mots-clés",
    isEmpty: true,
    isLight: false,
  },
};

export const NotEmpty: StoryObj<StoryType> = {
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <div [style.width.px]="450">
        <ta-empty [isEmpty]="isEmpty">
          <p>Je ne suis pas vide ! Voici du contenu.</p>
        </ta-empty>
      </div>
      `,
    };
  },
  args: {
    isEmpty: false,
  },
};

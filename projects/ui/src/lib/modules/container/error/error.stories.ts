import { Meta, StoryObj } from "@storybook/angular";

import { ErrorComponent } from "./error.component";

type StoryType = ErrorComponent;

export default {
  title: "Container/Error",
  component: ErrorComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <div [style.width.px]="450">
        <ta-error
         [message]="message"
         [code]="code"
         [showRetry]="showRetry"
         [retryLabel]="retryLabel"
         (retry)="onRetry()"
        >
        </ta-error>
      </div>
      `,
    };
  },
  args: {
    message: "Une erreur inattendue s'est produite",
    code: 500,
    showRetry: true,
    retryLabel: "Compris, réessayer",
  },
  argTypes: {
    code: {
      control: { type: "number" },
    },
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const WithCustomMessage: StoryObj<StoryType> = {
  args: {
    message: "Impossible de charger les données. Veuillez vérifier votre connexion.",
    code: 503,
  },
};

export const WithoutRetry: StoryObj<StoryType> = {
  args: {
    message: "Accès refusé. Vous n'avez pas les permissions nécessaires.",
    code: 403,
    showRetry: false,
  },
};

export const CustomRetryLabel: StoryObj<StoryType> = {
  args: {
    message: "La session a expiré",
    code: 401,
    retryLabel: "Se reconnecter",
  },
};

export const Error404: StoryObj<StoryType> = {
  args: {
    message: "La ressource demandée est introuvable",
    code: 404,
    showRetry: true,
    retryLabel: "Retour",
  },
};

export const Error500: StoryObj<StoryType> = {
  args: {
    message: "Erreur interne du serveur. Nos équipes ont été notifiées.",
    code: 500,
  },
};

export const NoError: StoryObj<StoryType> = {
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <div [style.width.px]="450">
        <ta-error [message]="message">
          <p>Pas d'erreur, voici le contenu normal.</p>
        </ta-error>
      </div>
      `,
    };
  },
  args: {
    message: "",
    code: 200,
  },
};

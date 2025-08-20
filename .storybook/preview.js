import { provideHttpClient } from '@angular/common/http';

import { setCompodocJson } from '@storybook/addon-docs/angular';
import { applicationConfig } from '@storybook/angular';
import { BehaviorSubject, Subject, of } from 'rxjs';

import { LAZY_SERVICE_TOKEN } from '../projects/notification/src/lib/services/notification.service';
// Import des providers officiels des librairies
import { provideServer } from '../projects/server/src/lib/provider';
import { provideTranslation } from '../projects/translation/src/lib/provider';
// Import des services nécessaires pour les mocks spécifiques
import { CamTranslationUI } from '../projects/ui/src/lib/components/ui/translation.service';
import { APPLICATION_CONFIG, LOCAL } from '../projects/utils/src/lib/const/environment';

/** @type { import('@storybook/angular').Preview } */
const preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideHttpClient(),

        // Utilisation des providers officiels des librairies
        provideServer({
          graphQlConfig: {
            config: {
              url: 'http://localhost:4000/graphql',
              visitor: 'http://localhost:4000/graphql-visitor',
            },
          },
        }),

        provideTranslation({
          default: 'fr',
          supportedLanguages: ['fr', 'en', 'nl', 'de'],
        }),

        // Mock pour LAZY_SERVICE_TOKEN (notification service)
        {
          provide: LAZY_SERVICE_TOKEN,
          useValue: {
            id: Math.random(),
            newNotification$: new Subject(),
            addNotification: (message, code) => console.log('Mock notification:', message, code),
          },
        },

        // Mock pour APPLICATION_CONFIG
        {
          provide: APPLICATION_CONFIG,
          useValue: {
            isCustomerApplication: false,
          },
        },

        // Mock pour LOCAL config
        {
          provide: LOCAL,
          useValue: {
            isLocal: true,
          },
        },
      ],
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['UI', 'Layout', 'Form', 'Icons', '*'],
      },
    },
  },
};

export default preview;

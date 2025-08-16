import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamDeviceInfoService } from '@camelot/capacitor';
import { CamUiModule } from '@camelot/ui';

import { SwiperLightComponent } from './swiper-light.component';

export default {
  title: 'Container/Swiper Light',
  component: SwiperLightComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, CamUiModule],
      providers: [CamDeviceInfoService],
    }),
  ],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <style>
        :host ::ng-deep {
          .swiper-class {
            color: red;
          }

          .container-class {
            color: green;
          }
          
        }
        .border {
          border: 1px solid red;
        }
        </style>
        <div class="{{mobileClass}} border">
          <cam-swiper-light [items]="items" [template]="template" [swiperClasses]="swiperClasses" [containerClasses]="containerClasses"></cam-swiper-light>

          <ng-template #template let-element="element">
            <div class="col-12 col-sm-6 col-xl-3 m-sm">
              <cam-card>
                <cam-card-content>{{ element.label }}</cam-card-content>
              </cam-card>
            </div>
          </ng-template>
        </div>
      `,
    };
  },
  args: {
    mobileClass: 'mobile-device',
    swiperClasses: 'swiper-class',
    containerClasses: 'row container-class',
    items: [
      {
        label: 'Il',
      },
      {
        label: 'était',
      },
      {
        label: 'un',
      },
      {
        label: 'petit',
      },
      {
        label: 'navire',
      },
      {
        label: 'qui',
      },
      {
        label: "n'",
      },
      {
        label: 'avait',
      },
      {
        label: 'ja...',
      },
      {
        label: 'ja...',
      },
      {
        label: 'jamais',
      },
      {
        label: 'navigué',
      },
      {
        label: '!',
      },
      {
        label: 'Ohé',
      },
      {
        label: '!',
      },
      {
        label: 'Ohééé',
      },
      {
        label: '!!!',
      },
    ],
  },
} as Meta<SwiperLightComponent>;

export const Basic: StoryObj<SwiperLightComponent> = {};

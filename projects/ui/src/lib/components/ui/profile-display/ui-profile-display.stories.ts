import { Meta, StoryObj } from "@storybook/angular";
import { UiProfileDisplayComponent } from "./ui-profile-display.component";

type StoryType = UiProfileDisplayComponent;

export default {
  title: "UI/Profil Display",
  component: UiProfileDisplayComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-ui-profile-display [label]="label" [userLogo]="userLogo" [ctas]="ctas" [sideIcon]="sideIcon">

        <div class="px-big">
            <div style="display: flex; justify-content: center">a.sophielemmens@reno.enegy</div>
            <div style="display: flex; justify-content: center">+32 497 12 34 56</div>
            <div style="display: flex; justify-content: center">Avenue du lorem itpsum 465 - bte 12</div>
            <div style="display: flex; justify-content: center">1000 Bruxelles</div>
        </div>

        </ta-ui-profile-display>
      `,
    };
  },
  args: {
    label: "Jean-François Vanderheyden",
    userLogo: {
      userInfo: {
        profilePictureUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eQMBIoGyHlsmDCKsRwjZpvyRzkr7HA0dIwcrMQtnSxGcNQfQXa_ZQrzUY0NEWcuxyMU&usqp=CAU",
        naming: {
          name: "Dark",
          firstName: "Vadehors",
          trigram: "DVD",
        },
      },
      size: 120,
    },
    ctas: [
      {
        icon: "phone",
        label: "Appelez",
        callback: () => alert("phone"),
      },
      {
        icon: "mail",
        label: "Envoyez",
        callback: () => alert("mail"),
      },
    ],
  },
} as Meta<StoryType>;

export const Basic: StoryObj<UiProfileDisplayComponent> = {};

export const WithoutPicture: StoryObj<UiProfileDisplayComponent> = {
  args: {
    userLogo: {
      userInfo: {
        naming: {
          name: "Dark",
          firstName: "Vadehors",
          trigram: "DVD",
        },
      },
      size: 120,
    },
  },
};

export const WithSideIcon: StoryObj<UiProfileDisplayComponent> = {
  args: {
    sideIcon: {
      icon: "home",
      callback: () => alert("home"),
    },
  },
};

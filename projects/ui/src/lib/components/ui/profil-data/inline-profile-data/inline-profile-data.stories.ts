import { Meta, StoryObj } from "@storybook/angular";
import { InlineProfileDataComponent } from "./inline-profile-data.component";

type StoryType = InlineProfileDataComponent;

export default {
  title: "UI/Profil Data/Inline",
  component: InlineProfileDataComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-inline-profile-data [profile]="profile" [userLogo]="userLogo"></ta-inline-profile-data>
      `,
    };
  },
  args: {
    profile: {
      title: {
        main: "VANDERHEYDEN",
        second: "Jean-François",
        sub: "client",
      },
      email: "redpanda@gmail.com",
      phoneNumber: "+472695609",
    },
    userLogo: {
      user: {
        firstname: "Vadehors",
        lastname: "Dark",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eQMBIoGyHlsmDCKsRwjZpvyRzkr7HA0dIwcrMQtnSxGcNQfQXa_ZQrzUY0NEWcuxyMU&usqp=CAU",
      },
      size: "lg",
    },
  },
} as Meta<StoryType>;

export const Basic: StoryObj<InlineProfileDataComponent> = {};

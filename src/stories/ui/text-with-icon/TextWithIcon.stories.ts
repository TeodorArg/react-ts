import type { Meta, StoryObj } from "@storybook/react";
import TextWithIcon from "./TextWithIcon";
import listOfIconsName from "../../helpers/listOfIconsName";

const meta = {
  title: "UI/Text with Icon",
  component: TextWithIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    iconName: {
      options: listOfIconsName(),
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof TextWithIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GeoDemo: Story = {
  args: {
    viewInMobile: false,
    isItPhone: false,
    textInblock: "Санкт-Петербург",
    iconName: "map-marker",
  },
};

export const PhoneWithIcon: Story = {
  args: {
    viewInMobile: false,
    isItPhone: true,
    textInblock: "+7 (981) 777-00-76",
    phoneNumber: "+79817770076",
    iconName: "phone",
  },
};

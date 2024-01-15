import type { Meta, StoryObj } from "@storybook/react";
import { TextWithIcon } from "./TextWithIcon";
import Fileicons from "../../assets/sprites/fileicons.md";

function listOfIconsName(iconListFile: any) {
  const file = iconListFile
    .replace(/\n/g, "")
    .replace(/^\s+|\s+$/g, "")
    .replace(/[,]$/g, "")
    .split(",");
  return file;
}

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
      options: listOfIconsName(Fileicons),
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

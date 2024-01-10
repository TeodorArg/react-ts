import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    iconName: {
      options: [
        "arrow-slider",
        "arrow-up",
        "arrow",
        "badge",
        "burger",
        "check-mark",
        "close",
        "discount",
        "inst-fill",
        "inst",
        "map-marker-fill",
        "map-marker",
        "money",
        "phone-fill",
        "phone",
        "square-time",
        "telegram-fill",
        "telegram",
        "vk-fill",
        "vk",
        "youtube-fill",
        "youtube",
      ],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconArrow: Story = {
  args: {
    iconName: "arrow",
    iconColor: "#1cf128",
  },
};

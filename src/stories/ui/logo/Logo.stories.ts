import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta = {
  title: "UI/MainLogo",
  component: Logo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoHeader: Story = {
  args: {
    logoSrc: "../../../assets/logo/logo.svg",
    logoInFooter: false,
  },
};

export const LogoFooter: Story = {
  args: {
    logoSrc: "../../../assets/logo/logo.svg",
    logoInFooter: true,
  },
};

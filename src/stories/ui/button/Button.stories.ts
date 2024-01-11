import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Yellow: Story = {
  args: {
    btnLabel: "Button",
    btnStyle: "yellow",
    showIcon: false,
  },
};

export const Black: Story = {
  args: {
    btnLabel: "Button",
    btnStyle: "black",
  },
};

export const Border: Story = {
  args: {
    btnLabel: "Button",
  },
};

export const Small: Story = {
  args: {
    btnLabel: "Button",
    btnStyle: "black",
    btnSize: "small",
  },
};

export const Rounder: Story = {
  args: {
    btnStyle: "yellow",
    btnRounded: true,
    showIcon: true,
    iconName: "arrow",
  },
};

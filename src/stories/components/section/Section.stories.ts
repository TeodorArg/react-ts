import type { Meta, StoryObj } from "@storybook/react";
import Section from "./Section";

const meta = {
  title: "Components/Section",
  component: Section,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionFullScreenImage: Story = {
  args: {
    sectionFullScreen: true,
    sectionImageAlt: "SectionFullScreenImage",
  },
};

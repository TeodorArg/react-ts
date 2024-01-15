import type { Meta, StoryObj } from "@storybook/react";
import { Geo } from "./Geo";

const meta = {
  title: "UI/Geo",
  component: Geo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Geo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GeoDemo: Story = {
  args: {
    geoInFooter: false,
    geoText: "Санкт-Петербург",
  },
};

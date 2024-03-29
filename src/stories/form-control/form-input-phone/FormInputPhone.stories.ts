import type { Meta, StoryObj } from "@storybook/react";

import FormInputPhone from "./FormInputPhone";

const meta = {
  title: "Form Control/InputPhone",
  component: FormInputPhone,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FormInputPhone>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InputPhone: Story = {
  args: {
    inputLabel: "",
    inputPhoneMask: "+7 (###) ###-##-##",
    inputPhoneValue: "9999999999",
  },
};

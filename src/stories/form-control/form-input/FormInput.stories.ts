import type { Meta, StoryObj } from '@storybook/react';

import FormInput from './FormInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form Control/Input',
  component: FormInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InputLabelPlaceholder: Story = {
  args: {
    inputLabel: 'inputLabel',
    inputPlaceholder: 'inputPlaceholder',
    inputType: 'text',
  },
};

export const InputEmail: Story = {
  args: {
    inputLabel: 'inputLabel',
    inputPlaceholder: 'E-mail',
    inputType: 'email',
  },
};

export const InputNumber: Story = {
  args: {
    inputLabel: 'InputNumberPlaceholde',
    inputPlaceholder: '200',
    inputType: 'number',
  },
};

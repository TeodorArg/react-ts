import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import listOfIconsName from '../../helpers/listOfIconsName';

const meta = {
  title: 'UI/Icons',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    iconName: {
      options: listOfIconsName(),
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconArrow: Story = {
  args: {
    iconName: 'arrow',
    iconColor: '#1cf128',
  },
};

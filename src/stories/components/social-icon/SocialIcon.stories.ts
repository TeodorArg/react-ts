import type { Meta, StoryObj } from '@storybook/react';

import SocialIcon from './SocialIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/SocialIcons',
  component: SocialIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SocialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SocialIconDemo: Story = {
  args: {
    iconName: 'youtube',
    socialLink: '',
  },
};

export const SocialIconwhiteColor: Story = {
  args: {
    iconName: 'vk',
    socialLink: '',
    yellowColor: true,
  },
};

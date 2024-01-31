import type { Meta, StoryObj } from '@storybook/react';

import Title from './Title';

const meta = {
  title: 'UI/Title',
  component: Title,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleSection: Story = {
  args: {
    titleType: 'section',
    firstPtTitle: 'First Part of Tite',
  },
};

export const TitleSectionWrap: Story = {
  args: {
    titleType: 'section',
    firstPtTitle: 'First Part of Tite',
    secondPtTitle: 'second part of Title',
  },
};

export const TitleSectionBox: Story = {
  args: {
    titleType: 'box',
    firstPtTitle: 'First Part of Tite',
  },
};

export const TitleSectionBlock: Story = {
  args: {
    titleType: 'block',
    firstPtTitle: 'First Part of Tite',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import Avatar from './avatar';

export default {
  component: Avatar,
  title: 'UI/Avatar',
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'danger', 'success', 'tertiary'],
      control: { type: 'select' },
      defaultValue: "primary"
    },
    round: {
      options: ['circle', 'rounded', 'square'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: 'YK',
    color: 'primary',
    round: 'circle',
  },
};

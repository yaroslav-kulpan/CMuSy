import { Meta, StoryObj } from '@storybook/react';

import Avatar from './avatar';

export default {
  component: Avatar,
  title: 'UI/Avatar',
  tags: ["autodocs"],
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: 'YK',
    color: "primary",
    round: "circle",
  },
};

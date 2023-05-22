import { Meta, StoryObj } from '@storybook/react';

import Avatar from './avatar';

export default {
  component: Avatar,
  title: 'Avatar',
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Defualt: Story = {
  args: {
    children: 'YK',
  },
};

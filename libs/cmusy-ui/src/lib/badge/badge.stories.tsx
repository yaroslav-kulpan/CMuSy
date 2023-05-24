import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

export default {
  component: Badge,
  title: 'Forms/Badge',
  tags: ['autodocs'],
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

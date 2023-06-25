import { Meta, StoryObj } from '@storybook/react';

import { TooltipTrigger } from './tooltip-trigger';

const meta = {
  component: TooltipTrigger,
  title: 'UI/Tooltip',
  tags: ['autodocs'],
} as Meta<typeof TooltipTrigger>;

export default meta;

type Story = StoryObj<typeof TooltipTrigger>;

export const Default: Story = {
  args: {
    tooltip: '64',
    children: 'Data',
  },
};

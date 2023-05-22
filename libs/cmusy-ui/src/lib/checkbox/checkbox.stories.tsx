import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';

export default {
  component: Checkbox,
  title: 'Forms/Checkbox',
  tags: ['autodocs'],
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

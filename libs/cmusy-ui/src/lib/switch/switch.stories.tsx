import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';

export default {
  component: Switch,
  title: 'Forms/Switch',
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'danger', 'success', 'tertiary'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    children: 'Switch',
    isDisabled: true,
  },
};

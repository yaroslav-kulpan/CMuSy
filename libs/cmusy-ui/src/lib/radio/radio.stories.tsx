import { Meta, StoryObj } from '@storybook/react';
import Radio from './radio';

export default {
  component: Radio,
  title: 'Forms/Radio',
  tags: ['autodocs'],
} as Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    checked: true,
    disabled: false,
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'danger', 'success', 'tertiary'],
      control: { type: 'select' },
    },
  },
};

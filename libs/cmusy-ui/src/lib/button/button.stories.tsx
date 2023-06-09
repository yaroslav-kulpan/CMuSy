import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined', 'small'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'danger', 'success', 'tertiary'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Text: Story = {
  args: {
    children: 'Primary',
    variant: 'text',
    color: 'primary',
  },
};

export const Contained: Story = {
  args: {
    children: 'Contained',
    variant: 'contained',
    color: 'primary',
  },
};
export const Outlined: Story = {
  args: {
    children: 'Outlined',
    variant: 'outlined',
    color: 'primary',
  },
};
export const Small: Story = {
  args: {
    children: 'Primary',
    variant: 'small',
    color: 'primary',
  },
};

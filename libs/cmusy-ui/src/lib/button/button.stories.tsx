import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
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

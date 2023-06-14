import { Meta, StoryObj } from '@storybook/react';
import Typography from './typography';

export default {
  component: Typography,
  title: 'UI/Typography',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'danger', 'success', 'tertiary'],
      control: { type: 'select' },
      defaultValue: "primary"
    },
  },
} as Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'H1',
  },
};
export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'H2',
  },
};
export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'H3',
  },
};
export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'H4',
  },
};
export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'H5',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'H6',
  },
};

export const subtitle1: Story = {
  args: {
    variant: 'subtitle-1',
    children: 'subtitle-1',
  },
};
export const subtitle2: Story = {
  args: {
    variant: 'subtitle-2',
    children: 'subtitle-2',
  },
};
export const body1: Story = {
  args: {
    variant: 'body-1',
    children: 'body-1',
  },
};
export const body2: Story = {
  args: {
    variant: 'body-2',
    children: 'body-2',
  },
};
export const body3: Story = {
  args: {
    variant: 'body-3',
    children: 'body-3',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import TextField from './text-field';

export default {
  component: TextField,
  title: 'Forms/TextField',
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    color: "primary",
    fullWidth: false
  },
};

export const Required: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    fullWidth: false,
    required: true
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    error: true,
    errorMessage: 'Error message',
  },
};

export const Clearable: Story = {
  args: {
    label: 'Clearable',
    placeholder: 'Placeholder',
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
  },
};

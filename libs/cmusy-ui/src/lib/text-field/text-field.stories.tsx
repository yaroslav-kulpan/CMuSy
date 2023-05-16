import { Meta, StoryObj } from '@storybook/react';

import { TextField } from './text-field';

export default {
  component: TextField,
  title: 'Forms/TextField',
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    error: true,
    helperText: 'Error message',
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

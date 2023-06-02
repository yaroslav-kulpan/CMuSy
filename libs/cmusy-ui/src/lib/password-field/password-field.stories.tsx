import { Meta, StoryObj } from '@storybook/react';

import PasswordField from './password-field';

export default {
  component: PasswordField,
  title: 'Forms/PasswordField',
} as Meta<typeof PasswordField>;

type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    fullWidth: false,
  },
};

export const Required: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    fullWidth: false,
    required: true,
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

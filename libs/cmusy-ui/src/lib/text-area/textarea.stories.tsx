import { Meta, StoryObj } from '@storybook/react';
import TextArea from "./text-area";


export default {
  component: TextArea,
  title: 'Forms/TextArea',
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
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

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
  },
};

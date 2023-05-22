import { Meta, StoryObj } from '@storybook/react';
import Radio from './radio';

export default {
  component: Radio,
  title: 'Forms/Radio',
} as Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    checked: true,
  },
};

import { Meta, StoryObj } from '@storybook/react';
import { Datepicker } from './datepicker';

export default {
  component: Datepicker,
  title: 'Forms/Datepicker',
  tags: ['autodocs'],
} as Meta<typeof Datepicker>;

type Story = StoryObj<typeof Datepicker>;

export const Default: Story = {
  args: {},
};

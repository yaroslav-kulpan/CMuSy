import { Meta, StoryObj } from '@storybook/react';
import Slider from './Slider';

export default {
  component: Slider,
  title: 'Forms/Slider',
  tags: ['autodocs'],
} as Meta<typeof Slider>;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};
export const MultiThumbs: Story = {
  args: {
    label: 'Price Range',
    maxValue: 500,
    defaultValue: [100, 350],
    step: 10,
    formatOptions: { style: 'currency', currency: 'USD' },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Price Range',
    maxValue: 500,
    defaultValue: [100, 350],
    step: 10,
    formatOptions: { style: 'currency', currency: 'USD' },
    isDisabled: true,
  },
};

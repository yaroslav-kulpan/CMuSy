import { Meta, StoryObj } from '@storybook/react';
import { Rating } from './rating';

const meta = {
  component: Rating,
  title: 'UI/Rating',
  tags: ['autodocs'],
} as Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 4,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Text',
    size: 'md',
  },
};

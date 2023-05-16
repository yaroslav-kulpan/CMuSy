import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const All = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-4">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="danger">
          Danger
        </Button>
        <Button variant="text" color="light">
          Light
        </Button>
      </div>
      <div className="flex gap-x-4">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="danger">
          Danger
        </Button>
        <Button variant="contained" color="light">
          Light
        </Button>
      </div>
      <div className="flex gap-x-4">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="danger">
          Danger
        </Button>
        <Button variant="outlined" color="light">
          Light
        </Button>
      </div>
    </div>
  );
};
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

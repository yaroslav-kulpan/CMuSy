import { Meta, StoryObj } from '@storybook/react';
import Select from './select';
import { Item as Option } from 'react-stately';
import React from 'react';

export default {
  component: Select,
  title: 'Forms/Select',
  argTypes: {
    label: {
      type: 'string',
    },
  },
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select label="Select" {...args}>
      <Option key="ukraine">Ukraine</Option>
      <Option key="uk">The UK</Option>
      <Option key="theusa">The USA</Option>
      <Option key="poland">Poland</Option>
    </Select>
  ),
};

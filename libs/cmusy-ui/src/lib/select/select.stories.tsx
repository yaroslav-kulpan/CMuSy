import { Meta, StoryObj } from '@storybook/react';
import Select from './select';
import { Item as Option } from 'react-stately';

export default {
  component: Select,
  title: 'Forms/Select',
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default = () => {
  return (
    <Select label="Select" fullWidth>
      <Option key="ukraine">Ukraine</Option>
      <Option key="uk">The UK</Option>
      <Option key="theusa">The USA</Option>
      <Option key="poland">Poland</Option>
    </Select>
  );
};

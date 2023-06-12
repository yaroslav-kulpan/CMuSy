import { Meta } from '@storybook/react';
import { Section } from 'react-stately';

import { Dropdown } from './dropdown';
import { DropdownItem } from './index';
import React from 'react';

export default {
  component: Dropdown,
  title: 'UI/Dropdown',
} as Meta<typeof Dropdown>;

// type Story = StoryObj<typeof Dropdown>;

export const Contained = () => {
  return (
    <Dropdown label="Dropdown" onAction={(key) => console.log(key, 'onAction')}>
      <DropdownItem key="edit">Edit…</DropdownItem>
      <DropdownItem key="duplicate">Duplicate</DropdownItem>
      <DropdownItem key="move">Move…</DropdownItem>
      <DropdownItem key="rename">Rename…</DropdownItem>
      <DropdownItem key="archive">Archive</DropdownItem>
      <DropdownItem key="delete">Delete…</DropdownItem>
    </Dropdown>
  );
};

export const Textual = () => {
  return (
    <Dropdown
      variant="textual"
      label="Dropdown"
      onAction={(key) => console.log(key)}
    >
      <Section>
        <DropdownItem key="edit">Edit…</DropdownItem>
        <DropdownItem key="duplicate">Duplicate</DropdownItem>
      </Section>
      <Section>
        <DropdownItem key="move">Move…</DropdownItem>
        <DropdownItem key="rename">Rename…</DropdownItem>
      </Section>
      <Section>
        <DropdownItem key="archive">Archive</DropdownItem>
        <DropdownItem key="delete">Delete…</DropdownItem>
      </Section>
    </Dropdown>
  );
};

export const Selectable = () => {
  const [selected, setSelected] = React.useState(new Set(['edit']));

  return (
    <Dropdown
      label="Dropdown"
      onAction={(key) => console.log(key)}
      selectionMode="single"
      selectedKeys={selected}
      onSelectionChange={setSelected as any}
    >
      <Section>
        <DropdownItem key="edit">Edit…</DropdownItem>
        <DropdownItem key="duplicate">Duplicate</DropdownItem>
      </Section>
      <Section>
        <DropdownItem key="move">Move…</DropdownItem>
        <DropdownItem key="rename">Rename…</DropdownItem>
      </Section>
      <Section>
        <DropdownItem key="archive">Archive</DropdownItem>
        <DropdownItem key="delete">Delete…</DropdownItem>
      </Section>
    </Dropdown>
  );
};
export const DisabledKeys = () => {
  return (
    <Dropdown
      variant="textual"
      label="Dropdown"
      disabledKeys={['edit', 'rename']}
      onAction={(key) => console.log(key)}
    >
      <Section>
        <DropdownItem key="edit">Edit…</DropdownItem>
        <DropdownItem key="duplicate">Duplicate</DropdownItem>
      </Section>
      <Section>
        <DropdownItem key="move">Move…</DropdownItem>
        <DropdownItem key="rename">Rename…</DropdownItem>
      </Section>
      <Section>
        <DropdownItem key="archive">Archive</DropdownItem>
        <DropdownItem key="delete">Delete…</DropdownItem>
      </Section>
    </Dropdown>
  );
};

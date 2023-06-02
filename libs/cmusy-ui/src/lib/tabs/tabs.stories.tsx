import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';
import { TabPanel } from './tab-panel';

export default {
  component: Tabs,
  title: 'UI/Tabs',
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Default = () => (
  <Tabs defaultTab={1}>
    <TabPanel title="First" index={0}>
      First
    </TabPanel>
    <TabPanel title="Second" index={1}>
      Second
    </TabPanel>
  </Tabs>
);

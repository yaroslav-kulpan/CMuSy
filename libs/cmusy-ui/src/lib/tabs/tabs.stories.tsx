import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './tabs';
import { TabItem } from './index';

export default {
  component: Tabs,
  title: 'UI/Tabs',
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Default = () => (
  <Tabs disabledKeys={['2']}>
    <TabItem title="First" key="1">
      First
    </TabItem>
    <TabItem title="Second" key="2">
      Second
    </TabItem>
    <TabItem title="Third" key="3">
      Second
    </TabItem>
  </Tabs>
);

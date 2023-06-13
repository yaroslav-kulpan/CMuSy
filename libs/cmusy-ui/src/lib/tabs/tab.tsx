import React from 'react';
import { useTab } from 'react-aria';

import { tabs } from './tabs.theme';
import { Node } from '@react-types/shared';
import { TabListState } from 'react-stately';

interface TabProps<T> {
  item: Node<T>;
  state: TabListState<T>;
  orientation?: string;
  fullWidth?: boolean;
}

export function Tab<T extends object>({
  item,
  state,
  orientation,
  fullWidth,
}: TabProps<T>) {
  const { key, rendered } = item;
  const ref = React.useRef(null);
  const { tabProps } = useTab({ key }, state, ref);

  const isActiveTab = state.selectedKey === item.key;
  const isDisabled = state.selectionManager.isDisabled(item.key);
  const { tab } = tabs({ activeTab: isActiveTab, fullWidth, isDisabled });

  return (
    <button {...tabProps} ref={ref} className={tab()} disabled={isDisabled}>
      {rendered}
    </button>
  );
}

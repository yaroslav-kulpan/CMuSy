import React from 'react';
import { AriaTabListProps, useTabList } from 'react-aria';
import { useTabListState } from 'react-stately';

import { TabPanel } from './tab-panel';
import { Tab } from './tab';
import { tabs } from './tabs.theme';

interface ITabsProps<T> extends AriaTabListProps<T> {
  ariaLabel?: string;
  fullWidth?: boolean;
}

export function Tabs<T extends object>(
  props: React.PropsWithChildren<ITabsProps<T>>
) {
  const {fullWidth = false} = props;
  const state = useTabListState(props);
  const ref = React.useRef(null);
  const { tabListProps } = useTabList(props, state, ref);
  const { root } = tabs({ fullWidth });

  return (
    <div className={`tabs ${props.orientation || ''}`}>
      <div {...tabListProps} ref={ref} className={root()}>
        {[...state.collection].map((item) => (
          <Tab
            key={item.key}
            item={item}
            state={state}
            orientation={props.orientation}
            fullWidth={fullWidth}
          />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
}

export default React.memo(Tabs);

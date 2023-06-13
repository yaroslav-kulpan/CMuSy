import React from 'react';
import { useTabPanel } from 'react-aria';
import { TabListState } from 'react-stately';

interface TabPanelProps<T> {
  state: TabListState<T>;
}

export function TabPanel<T extends object>({
  state,
  ...props
}: TabPanelProps<T>) {
  const ref = React.useRef(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <div {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  );
}

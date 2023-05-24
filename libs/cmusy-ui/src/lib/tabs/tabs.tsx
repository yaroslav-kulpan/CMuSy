import React from 'react';
import clsx from 'clsx';

import { ITabPanelProps } from './tab-panel';
import { tabs } from './tabs.theme';
import { Typography } from '../typography';

interface ITabsProps {
  defaultTab?: number;
  onHandleChangeTab?: (idx: number) => void;
  ariaLabel?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export function Tabs({
  defaultTab,
  onHandleChangeTab,
  ariaLabel = 'Sample Tabs',
  fullWidth = false,
  children,
}: React.PropsWithChildren<ITabsProps>) {
  const [activeIdx, setActiveIdx] = React.useState(() => defaultTab || 0);
  const { root, tab } = tabs({ fullWidth });
  const handleChangeTab = (idx: number) => {
    setActiveIdx(idx);

    if (onHandleChangeTab) {
      onHandleChangeTab(idx);
    }
  };

  return (
    <div className="tabs">
      <div
        role="tablist"
        className={root()}
        aria-label={ariaLabel}
        aria-orientation="horizontal"
      >
        {React.Children.map(children, (child, idx) => {
          const item = child as React.ReactElement<
            React.PropsWithChildren<ITabPanelProps>
          >;

          const isSelected = item.props.index === activeIdx;

          return (
            <button
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${idx}`}
              className={tab({
                class: clsx({ 'bg-neutral-black text-white': isSelected }),
              })}
              onClick={() => handleChangeTab(idx)}
              id={`tab-${idx}`}
              tabIndex={0}
            >
              <Typography variant="subtitle-1">{item.props.title}</Typography>
            </button>
          );
        })}
      </div>

      {React.Children.toArray(children)[activeIdx]}
    </div>
  );
}

export default React.memo(Tabs);

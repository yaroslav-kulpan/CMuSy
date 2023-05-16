import {
  Children,
  memo,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';
import clsx from 'clsx';

import TabPanel, { ITabPanelProps } from './tab-panel';

interface ITabsProps {
  defaultTab?: number;
  onHandleChangeTab?: (idx: number) => void;
  ariaLabel?: string;
  fullWidth?: boolean;
}

export function Tabs({
  defaultTab,
  onHandleChangeTab,
  ariaLabel = 'Sample Tabs',
  fullWidth = false,
  children,
}: PropsWithChildren<ITabsProps>) {
  const [activeIdx, setActiveIdx] = useState(() => defaultTab || 0);

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
        className={clsx('p-1 bg-neutral-lightest-gray rounded-2xl', {
          flex: fullWidth,
        })}
        aria-label={ariaLabel}
        aria-orientation="horizontal"
      >
        {Children.map(children, (child, idx) => {
          const item = child as ReactElement<PropsWithChildren<ITabPanelProps>>;
          if (item.type === TabPanel) {
            return (
              <button
                role="tab"
                aria-selected={item.props.index === activeIdx}
                aria-controls={`panel-${idx}`}
                className={clsx('text-sm py-3.5 px-7 rounded-2xl', {
                  'bg-neutral-black text-white': item.props.index === activeIdx,
                  'flex-1': fullWidth,
                })}
                onClick={() => handleChangeTab(idx)}
                id={`tab-${idx}`}
                tabIndex={0}
              >
                {item.props.title}
              </button>
            );
          }
          return child;
        })}
      </div>

      {Children.toArray(children)[activeIdx]}
    </div>
  );
}

export default memo(Tabs);

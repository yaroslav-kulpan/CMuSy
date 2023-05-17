import { forwardRef, memo, PropsWithChildren } from 'react';

export interface ITabPanelProps {
  title: string;
  id?: string;
  index: number;
}

export const TabPanel = forwardRef<HTMLDivElement, PropsWithChildren<ITabPanelProps>>(
  function TabPanel({ children, index }, ref) {
    return (
      <div
        ref={ref}
        id={`panel-${index}`}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`panel-${index}`}
      >
        {children}
      </div>
    );
  }
);

export default memo(TabPanel);

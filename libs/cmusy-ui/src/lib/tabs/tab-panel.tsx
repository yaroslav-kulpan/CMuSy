import React from 'react';
export interface ITabPanelProps {
  title: string;
  id?: string;
  index: number;
}

export const TabPanel = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ITabPanelProps>
>(function TabPanel({ children, index }, ref) {
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
});

TabPanel.displayName = 'CMuSyUI.TabPanel';
export default React.memo(TabPanel);

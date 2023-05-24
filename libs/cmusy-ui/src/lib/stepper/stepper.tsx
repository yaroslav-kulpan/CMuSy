import React from 'react';

import { stepper } from './stepper.theme';

export type StepsProps = {
  activeStep: number;
  className?: string;
  unmountOnExit?: boolean;
};

export function Stepper({
  activeStep,
  children,
  className,
  unmountOnExit,
}: React.PropsWithChildren<StepsProps>) {
  const count = React.Children.count(children);
  const stepContent =
    (React.Children.toArray(children)[activeStep] as React.ReactElement).props
      .children || null;

  const itemsSteps = React.Children.map(children, (child, idx) => {
    const hasActive = activeStep === idx;
    const hasCompleted = !hasActive && activeStep > idx;
    return React.cloneElement(child as React.ReactElement, {
      step: idx,
      activeStep,
      count,
      hasActive,
      hasCompleted,
    });
  });

  return (
    <div>
      <div className={stepper({ className })}>{itemsSteps}</div>
      {stepContent}
    </div>
  );
}

export default React.memo(Stepper);

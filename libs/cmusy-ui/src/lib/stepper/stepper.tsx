import React from 'react';

import { stepper, StepperVariants } from './stepper.theme';

export type StepsProps = StepperVariants & {
  activeStep: number;
  className?: string;
  unmountOnExit?: boolean;
};

export function Stepper({
  activeStep,
  children,
  className,
  unmountOnExit,
  variant,
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
    <>
      <div className={stepper({ variant, className })}>{itemsSteps}</div>
      {stepContent}
    </>
  );
}

export default React.memo(Stepper);

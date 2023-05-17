import {
  Children,
  cloneElement,
  memo,
  PropsWithChildren,
  ReactElement,
} from 'react';
import clsx from 'clsx';

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
}: PropsWithChildren<StepsProps>) {
  const count = Children.count(children);
  const stepContent =
    (Children.toArray(children)[activeStep] as ReactElement).props.children ||
    null;

  const itemsSteps = Children.map(children, (child, idx) => {
    const hasActive = activeStep === idx;
    const hasCompleted = !hasActive && activeStep > idx;
    return cloneElement(child as ReactElement, {
      step: idx,
      activeStep,
      count,
      hasActive,
      hasCompleted,
    });
  });

  return (
    <div>
      <div className={clsx('flex gap-x-6', className)}>{itemsSteps}</div>
      {stepContent}
    </div>
  );
}

export default memo(Stepper);

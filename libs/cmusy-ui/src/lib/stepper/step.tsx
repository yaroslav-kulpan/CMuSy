import React from 'react';

import { stepTheme } from './stepper.theme';
import { IconCheck } from './icon-check';

export type StepProps = {
  hasActive?: boolean;
  step?: number;
  activeStep?: number;
  label: string;
  count?: number;
  description?: string;
};

export function Step({
  step = 0,
  hasActive,
  activeStep = 0,
  count: totalChildren = 0,
  label,
  description,
}: React.PropsWithChildren<StepProps>) {
  const normalizedStep = step + 1;
  const hasNextStep = step > activeStep;
  const hasCurrentStep = step === activeStep;
  const hasCompletedStep = activeStep > step;

  const {
    root,
    stepWrapper,
    countWrapper,
    connector,
    label: labelStyles,
    description: descriptionStyles,
    subtitle,
  } = stepTheme({
    hasCurrentStep,
    hasNextStep,
    hasCompletedStep,
  });

  return (
    <div className={root()}>
      <div className={stepWrapper()}>
        <span className={countWrapper()}>
          {step >= activeStep && (
            <span className={subtitle()}>{normalizedStep}</span>
          )}
          {hasCompletedStep && <IconCheck />}
        </span>
        {totalChildren !== normalizedStep && <span className={connector()} />}
      </div>
      <h5 className={labelStyles()}>{label}</h5>
      {description && <p className={descriptionStyles()}>{description}</p>}
    </div>
  );
}

export default React.memo(Step);

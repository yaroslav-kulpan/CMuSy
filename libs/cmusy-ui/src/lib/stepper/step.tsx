import React from 'react';
import clsx from 'clsx';

import { Typography } from '../typography';

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
  count = 0,
  label,
  description,
}: React.PropsWithChildren<StepProps>) {
  const normalizedStep = step + 1;

  return (
    <div className="flex-1">
      <div className="flex items-center gap-x-6 mb-3">
        <span
          className={clsx(
            'flex justify-center items-center h-8 w-8 rounded-full text-white transition duration-150',
            {
              'bg-success': activeStep > step,
              'bg-neutral-light-gray': step > activeStep,
              'bg-primary': step === activeStep,
            }
          )}
        >
          {step >= activeStep && (
            <Typography variant="subtitle-1">{normalizedStep}</Typography>
          )}
          {activeStep > step && <span className="w-5 h-5" />}
        </span>
        {count !== normalizedStep && (
          <span
            className={clsx('flex h-px flex-1', {
              'bg-success': activeStep > step,
              'bg-neutral-light-gray': step > activeStep,
              'bg-primary': step === activeStep,
            })}
          />
        )}
      </div>
      <Typography as="h5" variant="subtitle-1">
        {label}
      </Typography>
      {description && (
        <Typography as="p" variant="body-2">
          {description}
        </Typography>
      )}
    </div>
  );
}

export default React.memo(Step);

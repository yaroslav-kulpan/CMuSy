import { Typography } from '../typography';
import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';
import clsx from 'clsx';

type Colors = 'primary';

type CheckboxProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  label?: string;
  color?: Colors;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ label, className, ...props }, ref) {
    const id = useId();
    return (
      <label className="relative flex items-start cursor-pointer">
        <div className="flex h-5 items-center">
          <input
            id={id}
            aria-describedby={`${id}-description`}
            type="checkbox"
            ref={ref}
            className={clsx(
              'form-checkbox h-5 w-5 rounded border-2 border-neutral-lightest-gray text-primary focus:ring-primary pointer-events-none',
              className
            )}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          <Typography
            variant="body-1"
            as="label"
            htmlFor={id}
            color="font-medium text-neutral-black"
            className="pointer-events-none"
          >
            {label}
          </Typography>
          <span id={`${id}-description`} className="text-gray-500">
            <span className="sr-only">{label}</span>
          </span>
        </div>
      </label>
    );
  }
);

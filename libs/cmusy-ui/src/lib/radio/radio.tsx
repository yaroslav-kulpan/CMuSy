import { HTMLProps, useId } from 'react';
import { Typography } from '../typography';
import clsx from 'clsx';

type Variant = 'primary';

interface RadioProps extends HTMLProps<HTMLInputElement> {
  variant?: Variant;
  label?: string;
  disabled?: boolean;
}

const variants = {
  primary:
    'border-neutral-gray before:bg-primary before:hover:bg-primary-hover unchecked:hover:bg-neutral-lightest-gray checked:hover:border-primary-hover checked:border-primary checked:before:bg-primary checked:before:hover:bg-primary-hover',
  disabled:
    'before:bg-neutral-lightest-gray text-neutral-lightest-gray checked:border-neutral-lightest-gray checked:before:bg-neutral-lightest-gray checked:before:hover:bg-neutral-lightest-gray',
};

export function Radio({ label, variant = 'primary', disabled = false, ...props }: RadioProps) {
  const id = useId();

  const classes = clsx(
    "peer relative appearance-none w-5 h-5 border-2 rounded-full cursor-pointer transition-all before:content['']  before:block  before:w-5 before:h-5 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 before:transition-opacity",
    disabled ? variants.disabled : variants[variant]
  );

  return (
    <div className="inline-flex items-center">
      <label className="relative flex items-center cursor-pointer rounded-full mr-3" htmlFor={id}>
        <input id={id} type="radio" className={classes} disabled={disabled} {...props} />
        <span
          className={clsx(
            'absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity transition-colors',
            {
              'text-primary peer-hover:text-primary-hover': variant === 'primary',
              'text-neutral-lightest-gray': disabled,
            }
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 w-2"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      {label && (
        <Typography
          as="label"
          variant="body-1"
          className={clsx({
            'cursor-pointer': !disabled,
            'cursor-default text-neutral-lightest-gray': disabled,
          })}
          htmlFor={id}
          disabled={disabled}
        >
          {label}
        </Typography>
      )}
    </div>
  );
}

export default Radio;

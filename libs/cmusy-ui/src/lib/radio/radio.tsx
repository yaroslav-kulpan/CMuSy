import React, { useId } from 'react';
import { RadioVariants } from './radio.theme';
import { AriaRadioProps, useFocusRing, mergeProps } from 'react-aria';
import { useDomRef } from '../use-dom-ref/use-dom-ref';

type RadioProps = React.ComponentPropsWithoutRef<'input'> &
  RadioVariants &
  AriaRadioProps & {
    label?: string;
    disabled?: boolean;
  };

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio(props, ref) {
    const { label, color = 'primary', autoFocus, ...rest } = props;
    const id = useId();
    const radioRef = useDomRef(ref);

    const { focusProps } = useFocusRing({ autoFocus });

    return (
      <label
        className="relative -m-0.5 inline-flex cursor-pointer items-center justify-center rounded-full p-1 focus:outline-none ring-2 ring-neutral-gray-light focus-within:ring-primary hover:ring-primary-hover"
        htmlFor={id}
      >
        <input
          {...mergeProps(focusProps, rest)}
          type="radio"
          id={id}
          ref={radioRef}
          className="peer sr-only"
          aria-labelledby="color-choice-1-label"
        />
        <span id="color-choice-1-label" className="sr-only">
          Purple
        </span>
        <span
          aria-hidden="true"
          className="h-2 w-2 peer-checked:bg-primary peer-checked:peer-hover:bg-primary-hover rounded-full border-black border-opacity-10"
        />
      </label>
    );
  }
);

export default Radio;

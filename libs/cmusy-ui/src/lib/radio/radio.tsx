import React from 'react';
import clsx from 'clsx';

import { Typography } from '../typography';
import { radio, RadioVariants } from './radio.theme';
import { mergeProps, useFocusRing } from 'react-aria';
import { IconCircle } from './icon-circle';

type RadioProps = Exclude<React.ComponentPropsWithoutRef<'input'>, 'type'> &
  RadioVariants & {
    label?: string;
    disabled?: boolean;
  };

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio(
    {
      label,
      color = 'primary',
      disabled = false,
      autoFocus,
      className,
      ...props
    }: RadioProps,
    ref
  ) {
    const id = React.useId();
    const { focusProps } = useFocusRing({ autoFocus });

    const {
      input,
      iconWrapper,
      icon,
      root,
      rootLabel,
      label: labelStyles,
    } = radio({
      disabled,
      color,
      className
    });

    return (
      <div className={root()}>
        <label className={rootLabel()} htmlFor={id}>
          <input
            ref={ref}
            id={id}
            type="radio"
            className={input()}
            disabled={disabled}
            {...mergeProps(focusProps, props)}
          />
          <span className={iconWrapper()}>
            <IconCircle className={icon()} />
          </span>
        </label>
        {label && (
          <label className={labelStyles()} htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

export default Radio;

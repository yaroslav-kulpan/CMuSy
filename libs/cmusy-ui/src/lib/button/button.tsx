import React from 'react';
import clsx from 'clsx';
import { AriaButtonProps, useFocusRing, useHover } from 'react-aria';
import { mergeProps } from 'react-aria';
import { useButton } from '@react-aria/button';

import button from './button.theme';
import { ThemeColors } from '../theme/theme.interface';
import { __DEV__ } from '../utils/assert';
import { useDomRef } from '../use-dom-ref/use-dom-ref';
import { AsProp } from '../utils/props';

type Variant = 'text' | 'outlined' | 'contained' | 'small';

type ButtonProps = React.ComponentPropsWithRef<'button'> &
  AriaButtonProps &
  AsProp<'span' | 'a'> & {
    variant?: Variant;
    color?: ThemeColors;
    fullWidth?: boolean;
  };

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(function Button(props, ref) {
  const {
    type = 'button',
    children,
    className,
    variant = 'contained',
    color = 'primary',
    disabled: isDisabled = false,
    fullWidth,
    autoFocus,
    ...restProps
  } = props;
  const buttonRef = useDomRef(ref);
  const { buttonProps } = useButton(props, buttonRef);
  const { hoverProps } = useHover({ isDisabled });
  const { focusProps } = useFocusRing({ autoFocus });

  const classes = clsx(
    button.base,
    variant === 'small' ? button.size.xs : button.size.sm,
    isDisabled
      ? button.variants[variant].disabled
      : button.variants[variant][color],
    {
      'w-full': fullWidth,
    },
    className
  );

  return (
    <button
      {...mergeProps(buttonProps, focusProps, hoverProps, restProps)}
      ref={buttonRef}
      type={type}
      className={classes}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
});

if (__DEV__) {
  Button.displayName = 'CMuSyUI.Button';
}

export default React.memo(Button);

import React from 'react';
import { AriaButtonProps, useFocusRing, useHover } from 'react-aria';
import { mergeProps } from 'react-aria';
import { useButton } from '@react-aria/button';

import button from './button.theme';
import { ThemeColors } from '../theme/theme.interface';
import { __DEV__ } from '../utils/assert';
import { useDomRef } from '../use-dom-ref/use-dom-ref';

type Variant = 'text' | 'outlined' | 'contained' | 'small';

type ButtonProps = React.ComponentPropsWithRef<'button'> &
  AriaButtonProps & {
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
  const { buttonProps, isPressed } = useButton(props, buttonRef);
  const { hoverProps } = useHover({ isDisabled });
  const { focusProps } = useFocusRing({ autoFocus });

  return (
    <button
      {...mergeProps(buttonProps, focusProps, hoverProps, restProps)}
      ref={buttonRef}
      type={type}
      className={button({
        variant,
        color,
        isPressed,
        disabled: isDisabled,
        fullWidth,
        className,
      })}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
});

if (__DEV__) {
  Button.displayName = 'CMuSyUI.Button';
}
export default Button;

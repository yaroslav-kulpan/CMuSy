import React, { useMemo } from 'react';
import { AriaButtonProps, useFocusRing, useHover } from 'react-aria';
import { mergeProps } from 'react-aria';
import { useButton } from '@react-aria/button';
import PropTypes from 'prop-types';

import button, { ButtonVariants } from './button.theme';
import { useDomRef } from '../use-dom-ref';

type ButtonProps = React.ComponentPropsWithRef<'button'> &
  AriaButtonProps &
  Omit<ButtonVariants, 'isPressed'| 'isDisabled'>;

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
    onPressEnd,
    onPress,
    onPressChange,
    onPressStart,
    onPressUp,
  } = props;
  const buttonRef = useDomRef(ref);
  const { buttonProps, isPressed } = useButton(
    { onPressEnd, onPress, onPressChange, onPressStart, onPressUp, ...props },
    buttonRef
  );
  const { hoverProps } = useHover({ isDisabled });
  const { focusProps } = useFocusRing({ autoFocus });

  const classNames = useMemo(
    () =>
      button({
        variant,
        color,
        isPressed,
        disabled: isDisabled,
        fullWidth,
        className,
      }),
    [className, color, fullWidth, isDisabled, isPressed, variant]
  );

  return (
    <button
      {...mergeProps(buttonProps, focusProps, hoverProps)}
      ref={buttonRef}
      type={type}
      className={classNames}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'success',
    'tertiary',
  ]),
};

Button.displayName = 'CMuSyUI.Button';

export default React.memo(Button);

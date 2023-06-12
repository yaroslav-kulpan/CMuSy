import { AriaButtonProps } from '@react-types/button';
import React, { useMemo } from 'react';
import { useButton, useFocusRing, mergeProps } from 'react-aria';

import { useDomRef } from '../use-dom-ref/use-dom-ref';
import { dropdownButton, DropdownVariants } from './dropdown.theme';

interface ButtonProps extends AriaButtonProps, DropdownVariants {
  isPressed: boolean;
}

export const DropdownButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const buttonRef = useDomRef(ref);
    const { buttonProps, isPressed } = useButton(props, buttonRef);
    const { focusProps, isFocusVisible } = useFocusRing();

    const classes = useMemo(
      () =>
        dropdownButton({
          isPressed: isPressed || props.isPressed,
          isDisabled: props.isDisabled,
          isFocusVisible,
          variant: props.variant,
          color: props.color,
        }),
      [
        isFocusVisible,
        isPressed,
        props.color,
        props.isDisabled,
        props.isPressed,
        props.variant,
      ]
    );

    return (
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={buttonRef}
        className={classes}
      >
        {props.children}
      </button>
    );
  }
);

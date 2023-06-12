import { AriaButtonProps } from '@react-types/button';
import React from 'react';
import { useButton, useFocusRing, mergeProps } from 'react-aria';

import { useDomRef } from '../use-dom-ref/use-dom-ref';

interface ButtonProps extends AriaButtonProps {
  // isPressed: boolean;
}

export const DropdownTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const buttonRef = useDomRef(ref);
    const { buttonProps } = useButton(props, buttonRef);
    const { focusProps } = useFocusRing();

    console.log(mergeProps(buttonProps, focusProps, { ref: buttonRef }))

    return React.cloneElement(
      props.children as any,
      mergeProps(buttonProps, focusProps, { ref: buttonRef })
    );
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';

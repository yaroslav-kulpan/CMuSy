import React, { forwardRef } from 'react';
import { AriaMenuProps, MenuTriggerProps } from '@react-types/menu';
import { useMenuTriggerState } from 'react-stately';
import { mergeProps, useMenuTrigger } from 'react-aria';
import { IconChevronDown } from '@cmusy/icons/src/lib/icons/IconChevronDown';

import { DropdownButton } from './dropdown-button';
import { Popover } from '../popover';
import { useDomRef } from '../use-dom-ref/use-dom-ref';
import { Menu } from './dropdown-menu';
import Typography from '../typography';
import { chevronIcon, DropdownVariants } from './dropdown.theme';

interface MenuButtonProps<T extends object>
  extends AriaMenuProps<T>,
    MenuTriggerProps,
    DropdownVariants {
  label: string;
}

export const Dropdown = forwardRef(
  <T extends object>(props: MenuButtonProps<T>, ref: React.Ref<any>) => {
    const { variant, color } = props;
    // Get props for the menu trigger and menu elements
    const dropdownRef = useDomRef(ref);
    // Create state based on the incoming props
    const state = useMenuTriggerState(props);

    const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
      props,
      state,
      dropdownRef
    );

    return (
      <>
        <DropdownButton
          {...menuTriggerProps}
          variant={variant}
          color={color}
          isPressed={state.isOpen}
          ref={dropdownRef}
        >
          <Typography variant="subtitle-2">{props.label}</Typography>
          <IconChevronDown className={chevronIcon({ isOpen: state.isOpen })} />
        </DropdownButton>

        {state.isOpen && (
          <Popover
            state={state}
            triggerRef={dropdownRef}
            placement="bottom start"
          >
            <Menu
              {...(mergeProps(menuProps, props) as any)}
              autoFocus={state.focusStrategy || true}
              onClose={() => state.close()}
            />
          </Popover>
        )}
      </>
    );
  }
);

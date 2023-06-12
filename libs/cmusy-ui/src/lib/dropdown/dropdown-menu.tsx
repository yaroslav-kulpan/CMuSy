import React from 'react';
import { AriaMenuProps } from '@react-types/menu';
import { useTreeState } from 'react-stately';
import { useMenu } from 'react-aria';

import { MenuSection } from './dropdown-section';
import { useDomRef } from '../use-dom-ref/use-dom-ref';
import { MenuItem } from './dropdown-menu-item';
import { PolymorphicRef } from '../utils/props';

type MenuProps<T extends object> = AriaMenuProps<T>;

export const Menu = React.forwardRef(
  <T extends object>(props: MenuProps<T>, ref?: PolymorphicRef<any>) => {
    // Create state based on the incoming props
    const state = useTreeState(props);

    // Get props for the menu element
    const menuRef = useDomRef(ref);
    const { menuProps } = useMenu(props, state, menuRef);

    return (
      <ul
        {...menuProps}
        ref={menuRef as any}
        className="py-2 w-56 rounded-lg bg-white shadow-dropdown focus:outline-none"
      >
        {[...state.collection].map((item) =>
          item.type === 'section' ? (
            <MenuSection key={item.key} section={item} state={state} />
          ) : (
            <MenuItem key={item.key} item={item} state={state} />
          )
        )}
      </ul>
    );
  }
);

import { Node } from '@react-types/shared';
import { TreeState } from 'react-stately';
import React, { useMemo } from 'react';
import { useMenuItem } from 'react-aria';

import { useDomRef } from '../use-dom-ref/use-dom-ref';
import { dropdownItem } from './dropdown-menu-item.theme';
import { PolymorphicRef } from '../utils/props';

interface MenuItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
}

export const MenuItem = React.forwardRef(
  <T extends object>({ item, state }: MenuItemProps<T>, ref?: PolymorphicRef<any>) => {
    // Get props for the menu item element
    const menuItemRef = useDomRef<HTMLLIElement>(ref);
    const { menuItemProps } = useMenuItem(
      {
        key: item.key,
      },
      state,
      menuItemRef
    );

    // Handle focus events so we can apply highlighted
    // style to the focused menu item
    const isFocused = state.selectionManager.focusedKey === item.key;
    const isDisabled = state.disabledKeys.has(item.key);
    const isSelected = state.selectionManager.isSelected(item.key);

    const classes = useMemo(
      () => dropdownItem({ isFocused, isDisabled, isSelected }),
      [isDisabled, isFocused, isSelected]
    );

    return (
      <li {...menuItemProps} ref={menuItemRef} className={classes}>
        {item.rendered}
      </li>
    );
  }
);

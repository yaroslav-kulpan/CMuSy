import { Node } from '@react-types/shared';
import { TreeState } from 'react-stately';
import React from 'react';
import { useMenuSection, useSeparator } from 'react-aria';
import { MenuItem } from './dropdown-menu-item';
import { dropdownSection } from './dropdown.theme';
import Typography from '../typography';

interface MenuSectionProps<T> {
  section: Node<T>;
  state: TreeState<T>;
}

export function MenuSection<T extends object>({
  section,
  state,
}: MenuSectionProps<T>) {
  const { itemProps, groupProps, headingProps } = useMenuSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  const { separatorProps } = useSeparator({
    elementType: 'li',
  });

  const { separator } = dropdownSection();

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li {...separatorProps} className={separator()} />
      )}
      <li {...itemProps}>
        {section.rendered && (
          <Typography
            variant="subtitle-2"
            className="px-4 text-neutral-gray"
            {...headingProps}
          >
            {section.rendered}
          </Typography>
        )}

        <ul {...groupProps}>
          {[...section.childNodes].map((node) => (
            <MenuItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}

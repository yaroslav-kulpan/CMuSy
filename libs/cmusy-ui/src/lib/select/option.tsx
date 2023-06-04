import React from 'react';
import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { ListState } from 'react-stately';
import type { Node } from '@react-types/shared';
import { useListBox, useOption } from 'react-aria';

import Typography from '../typography';
import { option } from './option.theme';

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}

interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

export function ListBox(props: ListBoxProps) {
  const ref = React.useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className="w-full max-h-72 overflow-auto outline-none"
    >
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}

function Option({ item, state }: OptionProps) {
  const ref = React.useRef<HTMLLIElement>(null);
  const { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  const { listItem } = option({
    isFocused,
    isSelected,
    isDisabled,
  });

  return (
    <li {...optionProps} ref={ref} className={listItem()}>
      <Typography variant="body-1">{item.rendered}</Typography>
      {isSelected && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6673 5.83331L7.50065 15L3.33398 10.8333"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </li>
  );
}

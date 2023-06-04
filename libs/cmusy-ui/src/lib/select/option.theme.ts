import {tv} from "tailwind-variants";

export const option = tv({
  slots: {
    listItem:
      'first:rounded-t-md last:rounded-b-md py-2 px-2 outline-none cursor-default flex items-start justify-between',
  },
  variants: {
    color: {
      primary: {
        listItem: 'text-gray-700',
      },
    },
    isSelected: { true: {} },
    isDisabled: { true: {} },
    isFocused: { true: {} },
  },
  compoundSlots: [
    {
      slots: ['listItem'],
      isSelected: true,
      class: 'bg-primary font-bold text-white',
    },
    {
      slots: ['listItem'],
      isFocused: true,
      class: 'bg-primary font-bold text-white',
    },
    {
      slots: ['listItem'],
      isDisabled: true,
      class: 'text-gray-200',
    },
  ],
});

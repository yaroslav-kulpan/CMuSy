import { tv, VariantProps } from 'tailwind-variants';

export const dropdown = tv({
  base: '',
});
export const dropdownButton = tv({
  base: 'group inline-flex justify-between items-center px-3 py-2 rounded-lg transition duration-150',
  variants: {
    variant: {
      contained: 'ring-1.5 ring-inset text-neutral-gray-dark',
      textual: 'text-neutral-gray-dark',
    },
    color: {
      primary: 'hover:ring-primary-hover',
    },
    isPressed: {
      true: '',
    },
    isDisabled: {
      true: '',
    },
    isFocusVisible: {
      true: '',
    },
  },
  compoundVariants: [
    {
      variant: 'contained',
      class: 'ring-neutral-gray-light',
    },
    {
      variant: 'textual',
      color: 'primary',
      class: 'hover:text-primary-hover',
    },
    {
      isFocusVisible: true,
      color: 'primary',
      class: 'ring-primary',
    },
    {
      isPressed: true,
      color: 'primary',
      class: 'ring-primary text-primary',
    },
  ],
  defaultVariants: {
    isFocusVisible: false,
    variant: 'contained',
    color: 'primary',
  },
});

export const chevronIcon = tv({
  base: 'inline -mr-1 ml-3 h-5 w-5 group-hover:text-primary-hover transition duration-150 text-neutral-dark-gray',
  variants: {
    isOpen: {
      true: '',
    },
  },
  compoundVariants: [
    {
      isOpen: true,
      class: 'transform rotate-180 text-primary-hover',
    },
  ],
});

export const dropdownSection = tv({
  slots: {
    separator: 'border-t border-gray-300 mx-2 mt-1 mb-1',
  },
});

export type DropdownVariants = VariantProps<typeof dropdownButton>;
export type DropdownSectionVariants = VariantProps<typeof dropdownSection>;

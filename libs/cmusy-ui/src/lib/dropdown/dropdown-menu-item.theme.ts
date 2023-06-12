import { tv } from 'tailwind-variants';

export const dropdownItem = tv({
  base: ' flex items-center w-full py-2.5 px-4 transition duration-150 !text-body-1 select-none focus:outline-none',
  variants: {
    color: {
      primary: 'text-gray-900',
    },
    isFocused: {
      true: '',
    },
    isDisabled: {
      true: '',
    },
    isSelected: {
      true: {},
    },
  },
  defaultVariants: {
    color: 'primary',
  },
  compoundVariants: [
    {
      color: 'primary',
      isFocused: true,
      class:
        'bg-primary-light text-primary hover:bg-primary-light hover:text-primary',
    },
    {
      color: 'primary',
      isSelected: true,
      class:
        'bg-primary text-white',
    },
    {
      color: 'primary',
      isDisabled: true,
      class: 'bg-neutral-background text-neutral-gray-light',
    },
  ],
});

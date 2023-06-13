import { tv } from 'tailwind-variants';

export const switchStyles = tv({
  base: 'flex items-center gap-x-2',
  slots: {
    input:
      'relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
    circle:
      'translate-x-0 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
  },
  variants: {
    color: {
      primary: {
        input: 'bg-neutral-gray hover:bg-neutral-gray-light',
      },
    },
    isSelected: {
      true: '',
    },
    isFocusVisible: {
      true: '',
    },
    isDisabled: {
      true: '',
    },
  },
  compoundSlots: [
    {
      slots: ['input'],
      color: 'primary',
      isSelected: true,
      class: 'bg-primary hover:bg-primary-hover',
    },
    {
      slots: ['circle'],
      isSelected: true,
      class: 'translate-x-5',
    },
    {
      slots: ['input'],
      isFocusVisible: true,
      class: 'bg-primary-30',
    },
    {
      slots: ['circle'],
      isFocusVisible: true,
      class: 'bg-primary-hover',
    },
    {
      slots: ['input'],
      isDisabled: true,
      class:
        'bg-neutral-gray-lightest hover:bg-neutral-gray-lightest cursor-default',
    },
    {
      slots: ['circle'],
      isDisabled: true,
      class: 'bg-neutral-gray-light',
    },
  ],
  defaultVariants: {
    color: 'primary',
    isDisabled: false,
  },
});

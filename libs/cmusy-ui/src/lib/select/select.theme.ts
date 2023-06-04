import { tv } from 'tailwind-variants';

export const select = tv({
  slots: {
    root: 'inline-flex flex-col relative group w-52',
    select:
      'inline-flex items-center justify-between bg-white px-2.5 outline-none rounded-lg min-h-11 h-fit leading-20 tracking-0.1 w-full text-neutral-gray placeholder:text-neutral-gray placeholder:focus:text-neutral-gray-light text-sm text-left',
    label: 'mb-1',
  },
  variants: {
    color: {
      primary: {
        select:
          'ring-1.5 ring-inset ring-neutral-gray-light focus:ring-1.5 focus:ring-inset focus:ring-primary',
        label: 'group-focus-within:text-primary',
      },
    },
    error: {
      true: {},
    },
    isOpen: {
      true: {},
    },
    isFocusVisible: {
      true: {},
    },
    fullWidth: {
      true: {},
    },
  },
  compoundSlots: [
    {
      slots: ['select'],
      fullWidth: true,
      class: 'w-full',
    },
    {
      slots: ['select'],
      isOpen: true,
      color: 'primary',
      class: 'bg-gray-100 text-neutral-black ring-primary',
    },
    {
      slots: ['label'],
      isFocusVisible: true,
      color: 'primary',
      class: 'text-primary',
    },
    {
      slots: ['label'],
      isOpen: true,
      color: 'primary',
      class: 'text-primary',
    },
    //   Error
    {
      slots: ['label'],
      error: true,
      class: 'text-error group-focus-within:text-error',
    },
  ],
  defaultVariants: {
    color: 'primary',
  },
});

import { tv, VariantProps } from 'tailwind-variants';

export const radio = tv({
  slots: {
    root: 'inline-flex items-center',
    input: [],
  },
  variants: {
    color: {
      primary: {
        input: [],
      },
    },
    disabled: {
      true: {},
    },
  },
  compoundSlots: [
    {
      slots: ['input'],
      disabled: true,
      class:
        'before:bg-neutral-lightest-gray text-neutral-lightest-gray checked:border-neutral-lightest-gray checked:before:bg-neutral-gray-lightest checked:before:hover:bg-neutral-gray-lightest',
    },
  ],
  defaultVariants: {
    color: 'primary',
    disabled: false,
  },
});

export type RadioVariants = VariantProps<typeof radio>;

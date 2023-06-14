import { tv, VariantProps } from 'tailwind-variants';

export const checkbox = tv({
  base: 'relative flex items-start',
  slots: {
    inputWrapper: 'flex h-5 items-center cursor-pointer',
    input:
      'form-checkbox h-5 w-5 rounded border-2 border-neutral-lightest-gray pointer-events-none',
    label:
      'text-body-1 font-normal leading-20 tracking-0.1 font-medium text-neutral-black pointer-events-none',
  },
  variants: {
    color: {
      primary: {
        input: 'text-primary focus:ring-primary',
      },
      secondary: {
        input: 'text-neutral-gray focus:ring-neutral-gray',
      },
      danger: {
        input: 'text-error focus:ring-error',
      },
      success: {
        input: 'text-success focus:ring-success',
      },
      tertiary: {
        input: 'text-tertiary focus:ring-tertiary',
      },
    },
    isDisabled: {
      true: {},
    },
  },
  compoundSlots: [
    {
      slots: ['input'],
      isDisabled: true,
      class:
        'text-neutral-gray-lightest cursor-default focus:ring-0 focus:ring-offset-0',
    },
    {
      slots: ['inputWrapper'],
      isDisabled: true,
      class: 'cursor-default',
    },
    {
      slots: ['label'],
      isDisabled: true,
      class: 'text-neutral-gray-light',
    },
  ],
});

export type CheckboxVariants = VariantProps<typeof checkbox>;

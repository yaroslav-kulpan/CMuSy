import { tv, VariantProps } from 'tailwind-variants';

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
      danger: {
        input: 'bg-neutral-gray hover:bg-neutral-gray-light',
      },
      success: {
        input: 'bg-neutral-gray hover:bg-neutral-gray-light',
      },
      tertiary: {
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
      slots: ['input'],
      color: 'primary',
      isFocusVisible: true,
      class: 'bg-primary-30',
    },
    {
      slots: ['circle'],
      isFocusVisible: true,
      class: 'bg-primary-hover',
    },
    // Danger
    {
      slots: ['input'],
      color: 'danger',
      isSelected: true,
      class: 'bg-error hover:bg-error-hover',
    },
    {
      slots: ['input'],
      color: 'danger',
      isFocusVisible: true,
      class: 'bg-error-light',
    },
    {
      slots: ['circle'],
      color: 'danger',
      isFocusVisible: true,
      class: 'bg-error-hover',
    },
    //  Success
    {
      slots: ['input'],
      color: 'success',
      isSelected: true,
      class: 'bg-success hover:bg-success-hover',
    },
    {
      slots: ['input'],
      color: 'success',
      isFocusVisible: true,
      class: 'bg-success-light hover:bg-success-light',
    },
    {
      slots: ['circle'],
      color: 'success',
      isFocusVisible: true,
      class: 'bg-success-hover',
    },
    //  Tertiary
    {
      slots: ['input'],
      color: 'tertiary',
      isSelected: true,
      class: 'bg-tertiary hover:bg-tertiary-hover',
    },
    {
      slots: ['input'],
      color: 'tertiary',
      isFocusVisible: true,
      class: 'bg-tertiary-lightest hover:bg-tertiary-light',
    },
    {
      slots: ['circle'],
      color: 'tertiary',
      isFocusVisible: true,
      class: 'bg-tertiary-hover',
    },
    // Disabled
    {
      slots: ['circle'],
      isSelected: true,
      class: 'translate-x-5',
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

export type SwitchVariants = VariantProps<typeof switchStyles>;

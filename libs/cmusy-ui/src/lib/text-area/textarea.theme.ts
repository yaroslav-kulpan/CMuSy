import { tv, VariantProps } from 'tailwind-variants';
import { textField } from '../text-field/text-field.theme';

export const textarea = tv({
  extend: textField,
  slots: {
    root: '',
    input: 'align-bottom',
    inputWrapper: '',
    label: '',
    adornment: '',
    startAdornment: '',
    endAdornment: '',
    helperText: '',
    clearableButton: '',
    clearableIcon: '',
  },
  variants: {
    variant: {
      outlined: {
        input: 'rounded-lg',
      },
      filled: {
        input: 'rounded-xl',
      },
    },
    // States
    disabled: {
      true: {},
    },
    error: {
      true: {},
    },
    isRequired: {
      true: {},
    },
    fullWidth: {
      true: {},
    },
    hidden: {
      true: {},
    },
    clearable: {
      true: {},
    },
    startAdornment: {
      true: {},
    },
    endAdornment: {
      true: {},
    },
    disablePointerEvents: {
      true: {},
    },
  },
  compoundSlots: [
    {
      slots: ['input'],
      class: 'form-textarea',
    },
    {
      slots: ['label'],
      isRequired: true,
      class:
        'relative after:absolute after:top-1/2 after:-translate-y-1/2 after:content-["*"] after:ml-px after:text-error',
    },
    {
      slots: ['root'],
      fullWidth: true,
      class: 'w-full',
    },
    {
      slots: ['input'],
      disabled: true,
      class:
        'bg-neutral-background ring-1.5 ring-inset ring-neutral-gray-lightest text-neutral-gray-light placeholder:text-neutral-gray-light',
    },
    {
      slots: ['input'],
      error: true,
      class: 'ring-1.5 ring-inset ring-error focus:ring-error',
    },
    // Label
    {
      slots: ['label'],
      error: true,
      class: 'text-error group-focus-within:text-error',
    },
    {
      slots: ['label'],
      disabled: true,
      class: 'text-neutral-gray-light',
    },
    {
      slots: ['label'],
      hidden: true,
      class: 'hidden',
    },
    //   Start
    {
      slots: ['startAdornment', 'endAdornment'],
      startAdornment: true,
      class: 'pointer-events-none',
    },
  ],
  defaultVariants: {
    variant: 'outlined',
    color: 'primary',
    disabled: false,
    fullWidth: false,
    startAdornment: false,
    endAdornment: false,
    disablePointerEvents: false,
    clearable: false,
    error: false,
    hidden: false,
  },
});

export type TextareaVariants = VariantProps<typeof textarea>;

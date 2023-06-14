import { tv } from 'tailwind-variants';

export const textField = tv({
  slots: {
    root: 'group w-52',
    input:
      'border-none rounded-lg min-h-11 h-fit leading-20 tracking-0.1 w-full text-neutral-black placeholder:text-neutral-gray placeholder:focus:text-neutral-gray-light text-sm',
    inputWrapper: '',
    label: 'inline-block mb-1 text-neutral-gray-dark',
    adornment: 'relative',
    startAdornment: 'absolute inset-y-0 left-0 flex items-center pl-3',
    endAdornment: 'absolute inset-y-0 right-0 flex items-center pr-3',
    helperText: '',
    clearableButton: 'absolute inset-y-0 right-3 flex items-center pl-3',
    clearableIcon: 'h-5 w-5 text-neutral-gray-light',
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
    color: {
      primary: {
        input:
          'ring-1.5 ring-inset ring-neutral-gray-light focus:ring-1.5 focus:ring-inset focus:ring-primary',
        label: 'group-focus-within:text-primary',
      },
      danger: {
        input:
          'ring-1.5 ring-inset ring-neutral-gray-light focus:ring-1.5 focus:ring-inset focus:ring-error',
        label: 'group-focus-within:text-error',
      },
      success: {
        input:
          'ring-1.5 ring-inset ring-neutral-gray-light focus:ring-1.5 focus:ring-inset focus:ring-success',
        label: 'group-focus-within:text-success',
      },
      tertiary: {
        input:
          'ring-1.5 ring-inset ring-neutral-gray-light focus:ring-1.5 focus:ring-inset focus:ring-tertiary',
        label: 'group-focus-within:text-tertiary',
      },
    },
    // States
    disabled: {
      true: {},
    },
    error: {
      true: {},
    },
    fullWidth: {
      true: {},
    },
    isRequired: {
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
      class: 'form-input',
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
    //   Start
    {
      slots: ['endAdornment'],
      endAdornment: true,
      clearable: true,
      class: 'mr-6',
    },
    //   Start
    {
      slots: ['input'],
      endAdornment: true,
      clearable: true,
      class: 'pr-16',
    }, //   Start
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

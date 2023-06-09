import { tv, VariantProps } from 'tailwind-variants';

export const radio = tv({
  slots: {
    root: 'inline-flex items-center',
    rootLabel: 'relative flex items-center rounded-full mr-3',
    input: [
      'peer',
      'relative',
      'appearance-none',
      'outline-none',
      'w-5',
      'h-5',
      'border-2',
      'border-neutral-gray-light',
      'rounded-full',
      'enabled:cursor-pointer',
      'transition-all',
      "before:content['']",
      'before:block',
      'before:w-5',
      'before:h-5',
      'before:rounded-full',
      'before:absolute',
      'before:top-2/4',
      'before:left-2/4',
      'before:-translate-y-2/4',
      'before:-translate-x-2/4',
      'before:opacity-0',
      'before:transition-opacity',
      'checked:focus:border-none',
    ],
    iconWrapper: [
      'absolute',
      'top-2/4',
      'left-2/4',
      '-translate-y-2/4',
      '-translate-x-2/4',
      'pointer-events-none',
      'opacity-0',
      'peer-checked:opacity-100',
      'transition-opacity',
      'transition-colors',
    ],
    icon: 'w-2 h-2',
    label:
      'ml-3 text-body-2 font-normal leading-20 tracking-0.1 cursor-default text-neutral-lightest-gray',
  },
  variants: {
    color: {
      primary: {
        input: [
          'before:bg-primary',
          'before:hover:bg-primary-hover',
          'enabled:hover:bg-neutral-gray-lightest',
          'enabled:hover:border-neutral-gray',
          'enabled:checked:hover:border-primary-hover',
          'checked:border-primary',
          'checked:before:bg-primary',
          'checked:before:hover:bg-primary-hover',
          'focus:bg-primary-30',
          'focus:border-primary-hover',
          'checked:focus:bg-primary-light',
        ],
        iconWrapper: 'text-primary peer-hover:text-primary-hover',
      },
      danger: {
        input: [
          'before:bg-error',
          'before:hover:bg-error-hover',
          'enabled:hover:bg-neutral-gray-lightest',
          'enabled:hover:border-neutral-gray',
          'enabled:checked:hover:border-error-hover',
          'checked:border-error',
          'checked:before:bg-error',
          'checked:before:hover:bg-error-hover',
          'focus:bg-error-light',
          'focus:border-error-hover',
          'checked:focus:bg-error-light',
        ],
        iconWrapper: 'text-error peer-hover:text-error-hover',
      },
      success: {
        input: [
          'before:bg-success',
          'before:hover:bg-success-hover',
          'enabled:hover:bg-neutral-gray-lightest',
          'enabled:hover:border-neutral-gray',
          'enabled:checked:hover:border-success-hover',
          'checked:border-success',
          'checked:before:bg-success',
          'checked:before:hover:bg-success-hover',
          'focus:bg-success-light',
          'focus:border-success-hover',
          'checked:focus:bg-success-light',
        ],
        iconWrapper: 'text-success peer-hover:text-success-hover',
      },
      tertiary: {
        input: [
          'before:bg-tertiary',
          'before:hover:bg-tertiary-hover',
          'enabled:hover:bg-neutral-gray-lightest',
          'enabled:hover:border-neutral-gray',
          'enabled:checked:hover:border-tertiary-hover',
          'checked:border-tertiary',
          'checked:before:bg-tertiary',
          'checked:before:hover:bg-tertiary-hover',
          'focus:bg-tertiary-light',
          'focus:border-tertiary-hover',
          'checked:focus:bg-tertiary-light',
        ],
        iconWrapper: 'text-tertiary peer-hover:text-tertiary-hover',
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
      class: [
        'cursor-default',
        'pointer-events-none',
        'before:bg-neutral-gray-lightest',
        'text-neutral-gray-lightest',
        'checked:border-neutral-gray-lightest',
        'checked:before:bg-neutral-gray-lightest',
        'checked:before:hover:bg-neutral-gray-lightest',
      ],
    },
    {
      slots: ['iconWrapper'],
      disabled: true,
      class: 'text-neutral-gray-lightest peer-hover:text-none',
    },
  ],
  defaultVariants: {
    color: 'primary',
    disabled: false,
  },
});

export type RadioVariants = VariantProps<typeof radio>;

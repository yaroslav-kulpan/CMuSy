import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'inline-flex justify-center items-center tracking-0.3 font-bold focus:outline-none transition duration-150 ease-in-out',
  variants: {
    variant: {
      contained:
        'rounded-lg shadow-button text-white focus:text- border border-transparent',
      outlined: 'rounded-lg border focus:text-white',
      text: 'rounded-lg border border-transparent ',
      small: 'rounded-full border',
    },
    color: {
      primary: '',
      secondary: '',
      light: '',
      danger: '',
      success: '',
      tertiary: '',
    },
    size: {
      xs: 'py-1.5 px-3 text-button-1 font-bold leading-20 tracking-0.4 font-sans',
      sm: 'py-3 px-4 text-sm font-bold leading-20 tracking-0.4 font-sans',
      lg: 'py-4 px-8 text-lg font-bold leading-20 tracking-0.4 font-sans',
    },
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'cursor-default pointer-events-none',
    },
    isPressed: {
      true: '',
    },
  },
  compoundVariants: [
    {
      variant: 'text',
      color: 'primary',
      class:
        'text-primary hover:bg-primary-lightest focus:bg-primary-light focus:ring-2 focus:ring-primary active:ring-primary',
    },
    {
      variant: 'text',
      color: 'secondary',
      class:
        'text-neutral-gray hover:bg-neutral-background focus:bg-neutral-gray-lightest focus:ring-2 focus:ring-neutral-gray active:ring-neutral-gray',
    },
    {
      variant: 'text',
      color: 'danger',
      class:
        'text-error hover:bg-error-lightest focus:bg-error-light focus:ring-2 focus:ring-error active:ring-error',
    },
    {
      variant: 'text',
      color: 'success',
      class:
        'text-success hover:bg-success-light focus:bg-success-light focus:ring-2 focus:ring-success active:ring-success',
    },
    {
      variant: 'text',
      color: 'tertiary',
      class:
        'text-tertiary hover:bg-tertiary-light focus:bg-tertiary-light focus:ring-2 focus:ring-tertiary active:ring-tertiary',
    },
    {
      variant: 'text',
      disabled: true,
      class: 'text-neutral-gray-lightest',
    },
    // Contained variants
    {
      variant: 'contained',
      color: 'primary',
      class:
        'bg-primary hover:bg-primary-hover focus:bg-primary-dark focus:ring-2 focus:ring-primary-hover active:ring-primary-hover',
    },
    {
      variant: 'contained',
      color: 'secondary',
      class:
        'bg-neutral-gray text-white hover:bg-neutral-gray-light hover:text-white focus:bg-neutral-gray-dark active:bg-neutral-gray-dark focus:ring-2 focus:ring-neutral-gray-light active:ring-neutral-gray-light',
    },
    {
      variant: 'contained',
      color: 'danger',
      class:
        'bg-error hover:bg-error-hover focus:bg-error-dark focus:ring-2 focus:ring-error-hover active:ring-error-dark',
    },
    {
      variant: 'contained',
      color: 'success',
      class:
        'bg-success hover:bg-success-hover focus:bg-success-dark focus:ring-2 focus:ring-success-hover active:ring-success-dark',
    },
    {
      variant: 'contained',
      color: 'tertiary',
      class:
        'bg-tertiary hover:bg-tertiary-hover focus:bg-tertiary-dark focus:ring-2 focus:ring-tertiary-hover active:ring-tertiary-dark',
    },
    {
      variant: 'contained',
      disabled: true,
      class: 'bg-neutral-background text-neutral-gray-light shadow-none',
    },
    // Outlined
    {
      variant: 'outlined',
      color: 'primary',
      class:
        'border-primary text-primary hover:bg-primary hover:text-white focus:bg-primary-dark focus:ring-2 focus:ring-primary-hover active:ring-primary-hover',
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class:
        'border-neutral-gray text-neutral-gray hover:bg-neutral-gray hover:text-white focus:bg-neutral-gray-dark active:bg-neutral-gray-dark focus:ring-2 focus:ring-neutral-gray-light active:ring-neutral-gray-light',
    },
    {
      variant: 'outlined',
      color: 'danger',
      class:
        'border-error text-error hover:bg-error hover:text-white focus:ring-2 focus:bg-error-dark focus:ring-error',
    },
    {
      variant: 'outlined',
      color: 'success',
      class:
        'border-success text-success hover:bg-success hover:text-white focus:ring-2 focus:bg-success-dark focus:ring-success active:ring-success',
    },
    {
      variant: 'outlined',
      color: 'tertiary',
      class:
        'border-tertiary text-tertiary hover:bg-tertiary hover:text-white focus:ring-2 focus:bg-tertiary-dark focus:ring-tertiary active:ring-tertiary',
    },
    // Outlined disabled
    {
      variant: 'outlined',
      disabled: true,
      class: 'text-neutral-gray-light border-neutral-gray-light',
    },
    // Small
    {
      variant: 'small',
      class:
        'py-1.5 px-3 text-button-1 font-bold leading-20 tracking-0.4 font-nunito',
    },
    {
      variant: 'small',
      color: 'primary',
      class:
        'border-primary text-primary hover:border-primary-hover hover:text-primary-hover focus:bg-primary-light focus:text-primary',
    },
    {
      variant: 'small',
      color: 'secondary',
      class:
        'border-neutral-gray-dark text-neutral-gray hover:text-neutral-gray-dark focus:bg-neutral-gray-lightest focus:text-neutral-gray-dark',
    },
    {
      variant: 'small',
      color: 'danger',
      class:
        'border-error text-error hover:border-error-hover hover:text-error-hover focus:bg-error-light focus:text-error focus:ring-error active:ring-error active:text-error',
    },
    {
      variant: 'small',
      color: 'success',
      class:
        'border-success text-success hover:border-success-hover hover:text-success-hover focus:bg-success-light focus:text-success focus:ring-success active:ring-success active:text-success',
    },
    {
      variant: 'small',
      color: 'tertiary',
      class:
        'border-tertiary text-tertiary hover:border-tertiary-hover hover:text-tertiary-hover focus:bg-tertiary-light focus:text-tertiary focus:ring-tertiary active:ring-tertiary active:text-tertiary',
    },
    {
      variant: 'small',
      disabled: true,
      class: 'border-neutral-gray-lightest text-neutral-gray-lightest',
    },
  ],
  defaultVariants: {
    variant: 'contained',
    color: 'primary',
    size: 'sm',
    disabled: false,
    fullWidth: false,
  },
});

export type ButtonVariants = VariantProps<typeof button>;

export default button;

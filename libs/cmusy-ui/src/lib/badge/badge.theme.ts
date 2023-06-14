import {tv, VariantProps} from 'tailwind-variants';

export const badge = tv({
  variants: {
    variant: {
      text: 'flex items-center rounded-full transition duration-150',
      outlined: 'rounded-full border transition duration-150',
      dot: 'inline-flex items-center gap-x-2 whitespace-nowrap text-neutral-black text-subtitle2 font-semibold leading-18 transition duration-150',
      sticker:
        'py-2 px-4 rounded-bl-2xl rounded-tr-2xl text-caption text-white font-bold leading-16 tracking-0.6',
      indicator:
        'absolute h-5 w-5 -top-1 -right-1 flex justify-center items-center text-white rounded-lg text-small-3 font-bold leading-14',
    },
    size: {
      xs: 'py-1.5 px-3 !text-small-2 font-semibold leading-16 tracking-0',
      sm: 'py-1.5 px-3 !text-small-2 font-semibold leading-16 tracking-0',
      lg: 'py-1.5 px-3 !text-small-2 font-semibold leading-16 tracking-0',
    },
    color: {
      primary: '',
      secondary: '',
      success: '',
      danger: '',
    },
    disabled: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variant: 'text',
      color: 'primary',
      class:
        'bg-primary text-white hover:bg-primary-hover focus:bg-primary-dark focus:text-white',
    },
    {
      variant: 'text',
      color: 'secondary',
      class:
        'bg-neutral-lightest-gray text-neutral-dark-gray hover:bg-neutral-light-gray focus:bg-neutral-light-gray focus:text-neutral-dark-gray',
    },
    {
      variant: 'text',
      color: 'success',
      class: '',
    },
    {
      variant: 'text',
      color: 'danger',
      class: '',
    },
    {
      variant: 'text',
      disabled: true,
      class: 'bg-neutral-lightest-gray text-neutral-light-gray',
    },
    // Outlined
    {
      variant: 'outlined',
      color: 'primary',
      class:
        'border-primary text-primary hover:bg-primary hover:text-white focus:bg-primary-dark focus:text-white',
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class:
        'border-neutral-gray text-neutral-gray hover:bg-neutral-gray hover:text-white focus:bg-neutral-dark-gray focus:text-white',
    },
    {
      variant: 'outlined',
      color: 'success',
      class:
        'border-success text-success hover:bg-success hover:text-white focus:bg-success focus:text-white',
    },
    {
      variant: 'outlined',
      color: 'danger',
      class:
        'border-error text-error hover:bg-error hover:text-white focus:bg-error focus:text-white',
    },
    // Sticker
    {
      variant: 'sticker',
      color: 'primary',
      class: 'bg-primary',
    },
    {
      variant: 'sticker',
      color: 'secondary',
      class: 'bg-neutral-gray',
    },
    {
      variant: 'sticker',
      color: 'success',
      class: 'bg-success',
    },
    {
      variant: 'sticker',
      color: 'danger',
      class: 'bg-error-dark',
    },
    // Indicator
    {
      variant: 'indicator',
      color: 'primary',
      class: 'bg-primary',
    },
    {
      variant: 'indicator',
      color: 'secondary',
      class: 'bg-neutral-gray',
    },
    {
      variant: 'indicator',
      color: 'success',
      class: 'bg-success',
    },
    {
      variant: 'indicator',
      color: 'danger',
      class: 'bg-error',
    },
  ],
  defaultVariants: {
    variant: 'text',
    color: 'primary',
    size: 'xs',
  },
});

export type BadgeVariants = VariantProps<typeof badge>;

export const dot = tv({
  base: 'inline-block h-1.5 w-1.5 rounded-full text-neutral-black text-subtitle2 font-bold leading-18',
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-neutral-dark-gray',
      success: 'bg-success',
      danger: 'bg-error',
    },
  },
});

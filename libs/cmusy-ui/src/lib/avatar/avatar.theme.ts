import { tv, VariantProps } from 'tailwind-variants';

export const avatar = tv({
  base: 'flex justify-center items-center h-11 w-11',
  variants: {
    src: {
      true: '',
    },
    round: {
      square: '',
      rounded: 'rounded-2xl',
      circle: 'rounded-full',
    },
    color: {
      primary: 'bg-primary text-white',
      secondary: 'bg-neutral-gray text-white',
      danger: 'bg-error text-white',
      success: 'bg-success text-white',
      warning: 'bg-secondary text-white',
      tertiary: 'bg-tertiary text-white',
    },
  },
  compoundVariants: [
    {
      src: true,
      class: 'bg-transparent text-transparent',
    },
  ],
  defaultVariants: {
    color: "primary",
    round: "circle"
  }
});

export type AvatarVariants = VariantProps<typeof avatar>;

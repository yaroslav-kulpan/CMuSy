import { tv, VariantProps } from 'tailwind-variants';

export const card = tv({
  base: 'min-w-0 bg-white border rounded-2xl',
  variants: {
    variant: {
      default: 'border-neutral-light-gray',
      floating: 'border-neutral-lightest-gray shadow-card',
    },
  },
});

export type CardVariants = VariantProps<typeof card>;

export const cardTitle = tv({
  slots: {
    cardContainer: 'flex justify-between items-center',
    cardIcon: 'flex justify-center items-center w-5 h-5 text-neutral-light-gray',
    cardTitle: 'text-h4 font-extrabold leading-32 tracking-0.1',
  },
  variants: {
    children: {
      true: {},
    },
  },
  compoundVariants: [
    {
      children: true,
      class: 'pb-1.5',
    },
  ],
});

export type CardTitleVariants = VariantProps<typeof cardTitle>;

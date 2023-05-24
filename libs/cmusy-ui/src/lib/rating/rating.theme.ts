import { tv, VariantProps } from 'tailwind-variants';

export const ratingStyles = tv({
  slots: {
    starIcon: 'w-3.5 h-3.5',
  },
  variants: {
    color: {
      primary: {
        starIcon: 'text-primary fill-primary cover-fill',
      },
    },
    size: {
      xs: '',
    },
    showEmptyIcon: {
      true: {},
    },
  },
  compoundSlots: [
    {
      slots: ['starIcon'],
      showEmptyIcon: true,
      class: 'text-neutral-gray-light fill-neutral-gray-light',
    },
  ],
});

export const starStyles = tv({
  base: '',
  variants: {
    color: {
      primary: 'text-primary fill-primary cover-fill',
    },
    showEmptyIcon: {
      true: '',
    },
    size: {
      xs: 'w-3.5 h-3.5',
      sm: 'w-5 h-5',
      md: 'w- h-6',
    },
  },
  compoundVariants: [
    {
      showEmptyIcon: true,
      class: 'text-neutral-gray-light fill-neutral-gray-light',
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'xs',
  },
});

export type StarVariants = Omit<
  VariantProps<typeof starStyles>,
  'showEmptyIcon'
>;

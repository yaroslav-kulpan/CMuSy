import {tv} from 'tailwind-variants';

export const typography = tv({
  variants: {
    variant: {
      h1: '!text-h1 font-bold leading-82 tracking-0.1',
      h2: '!text-h2 font-extrabold leading-56 tracking-0.1',
      h3: '!text-h3 font-bold leading-42 tracking-0.1',
      h4: '!text-h4 font-extrabold leading-32 tracking-0.1',
      h5: '!text-h5 font-semibold leading-28 tracking-0.1',
      h6: '!text-h6 font-bold leading-24 tracking-0.1',
      'subtitle-1': '!text-subtitle-1 font-bold leading-20 tracking-0.1',
      'subtitle-2': '!text-subtitle-2 font-normal leading-18 tracking-0',
      'body-1': '!text-body-1 font-normal leading-20 tracking-0.1',
      'body-2': '!text-body-2 font-normal leading-20 tracking-0.1',
      'small-1': '!text-small-1 font-bold leading-18 tracking-0.1',
      'small-2': '!text-small-2 font-semibold leading-16 tracking-0',
      'small-3': '!text-small-3 font-bold leading-14 tracking-0',
      'button-1': '!text-button-1 font-bold leading-20 tracking-0.4',
      'button-2': '!text-button-2 font-extrabold leading-18 tracking-0.6',
      caption: '!text-caption font-bold leading-16 tracking-0.6',
      'nav-link':
        'px-3 py-2 !text-subtitle-1 font-bold leading-20 tracking-0.1 text-neutral-dark hover:text-primary focus:text-primary-dark cursor-pointer transition duration-150',
    },
    color: {
      base: 'text-neutral-dark',
      primary: 'text-primary',
      secondary: 'text-secondary',
      danger: 'text-error',
      success: 'text-success',
      tertiary: 'text-tertiary',
    },
  },
  defaultVariants: {
    variant: 'small-2',
    color: 'base',
  },
});

export type TypographyVariants = keyof typeof typography.variants.variant;
export type TypographyColors = keyof typeof typography.variants.color;

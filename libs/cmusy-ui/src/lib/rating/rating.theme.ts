import { tv, VariantProps } from 'tailwind-variants';

export const ratingStyles = tv({
  base: 'flex items-center gap-x-2',
  slots: {
    label: '!text-neutral-gray text-small-3 font-bold leading-14 tracking-0',
    starButton: 'absolute overflow-hidden',
  },
  variants: {
    size: {
      xs: '',
      sm: '',
      md: '',
    },
    width: '',
    readOnly: {
      true: {},
    },
  },
  compoundSlots: [
    {
      slots: ['starButton'],
      readOnly: true,
      class: 'pointer-events-none',
    },
    {
      slots: ['label'],
      size: 'xs',
      class: 'text-small-3',
    },
    {
      slots: ['label'],
      size: 'sm',
      class: 'text-small-2',
    },
    {
      slots: ['label'],
      size: 'md',
      class: 'text-small-1',
    },
  ],
});

export const starStyles = tv({
  base: '',
  variants: {
    color: {
      primary: 'text-primary fill-primary cover-fill',
      danger: 'text-error fill-error cover-fill',
      success: 'text-success fill-success cover-fill',
      tertiary: 'text-tertiary fill-tertiary cover-fill',
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

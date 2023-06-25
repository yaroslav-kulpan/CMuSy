import { tv, VariantProps } from 'tailwind-variants';

export const slider = tv({
  slots: {
    slider: 'flex flex-col w-[300px]',
    track:
      'h-[30px] w-full before:block before:content-[attr(x)] before:absolute before:bg-neutral-gray-light before:h-1 before:rounded before:w-full before:top-1/2 before:transform before:-translate-y-1/2',
    activeTrack:
      'absolute bg-no-repeat bg-gradient-to-r from-primary to-primary h-1 rounded top-1/2 transform -translate-y-1/2',
    labelContainer: 'flex justify-between',
  },
  variants: {
    isDisabled: {
      true: '',
    },
    orientation: {
      vertical: 'h-[150px]',
      horizontal: 'flex-col h-[300px]',
    },
    color: {
      primary: '',
    },
  },
  compoundSlots: [
    {
      slots: ['track'],
      isDisabled: true,
      class: 'before:bg-neutral-gray-lightest',
    },
    {
      slots: ['activeTrack'],
      isDisabled: true,
      class: 'from-neutral-gray-light to-neutral-gray-light',
    },
  ],
});

export const thumb = tv({
  base: 'top-1/2 h-4 w-4 bg-white border-2 border-primary rounded-full',
  variants: {
    isDragging: {
      true: '',
    },
    isFocusVisible: {
      true: '',
    },
    isHovered: {
      true: '',
    },
    isDisabled: {
      true: '',
    },
  },
  compoundVariants: [
    {
      isHovered: true,
      class: 'ring-4 ring-primary ring-opacity-10',
    },
    {
      isDragging: true,
      class: 'ring-8 ring-primary ring-opacity-20',
    },
    {
      isFocusVisible: true,
      class: 'ring-8 ring-primary ring-opacity-20',
    },
    {
      isDisabled: true,
      class: 'border-neutral-gray-light ring-4 ring-white hover:ring-white',
    },
  ],
});

export type SliderVariants = VariantProps<typeof slider>;
export type ThumbVariants = VariantProps<typeof thumb>;

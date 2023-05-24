import { tv, VariantProps } from 'tailwind-variants';

export const checkbox = tv({
  base: 'relative flex items-start cursor-pointer',
  slots: {
    inputWrapper: 'flex h-5 items-center',
    input:
      'form-checkbox h-5 w-5 rounded border-2 border-neutral-lightest-gray pointer-events-none',
    label:
      'text-body-1 font-normal leading-20 tracking-0.1 font-medium text-neutral-black pointer-events-none',
  },
  variants: {
    color: {
      primary: {
        input: 'text-primary focus:ring-primary',
      },
    },
  },
});

export type CheckboxVariants = VariantProps<typeof checkbox>;

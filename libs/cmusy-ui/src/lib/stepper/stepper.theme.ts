import { tv, VariantProps } from 'tailwind-variants';

export const stepper = tv({
  base: 'flex',
  variants: {
    variant: {
      point: 'gap-x-3',
      'point-numeric': 'gap-x-6',
    },
  },
});

export const stepTheme = tv({
  slots: {
    root: 'flex-1',
    stepWrapper: 'flex items-center gap-x-6 mb-3',
    countWrapper:
      'flex justify-center items-center h-8 w-8 rounded-full text-white transition duration-150',
    connector: 'flex h-px flex-1',
    subtitle: 'text-subtitle-1 font-bold leading-20 tracking-0.1',
    label: 'text-subtitle-1 font-bold leading-20 tracking-0.1',
    description:
      '!text-body-2 font-normal leading-20 tracking-0.1 text-neutral-gray',
  },
  variants: {
    variant: {
      point: {
        stepWrapper: 'flex items-center gap-x-3',
        countWrapper: 'h-4 w-4',
        connector: '',
      },
      'point-numeric': {
        countWrapper: '',
        connector: '',
      },
    },
    hasNextStep: {
      true: {},
    },
    hasCurrentStep: {
      true: {},
    },
    hasCompletedStep: {
      true: {},
    },
  },
  compoundSlots: [
    {
      slots: ['countWrapper', 'connector'],
      hasCompletedStep: true,
      class: 'bg-success',
    },
    {
      slots: ['countWrapper', 'connector'],
      hasCurrentStep: true,
      class:
        'bg-primary cursor-pointer hover:bg-transparent hover:border hover:border-primary hover:text-primary',
    },
    {
      slots: ['countWrapper', 'connector'],
      hasNextStep: true,
      class: 'bg-neutral-gray-light',
    },
  ],
});

export type StepperVariants = VariantProps<typeof stepper>;
export type StepVariants = VariantProps<typeof stepTheme>;

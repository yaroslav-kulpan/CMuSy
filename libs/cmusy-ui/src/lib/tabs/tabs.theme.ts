import { tv } from 'tailwind-variants';

export const tabs = tv({
  variants: {
    fullWidth: {
      true: {},
    },
    activeTab: {
      true: {},
    },
  },
  slots: {
    root: 'p-1 bg-neutral-gray-lightest rounded-2xl',
    tab: 'text-neutral-gray-dark py-3.5 px-7 rounded-2xl',
  },
  compoundSlots: [
    {
      slots: ['root'],
      fullWidth: true,
      class: 'flex',
    },
    {
      slots: ['tab'],
      fullWidth: true,
      class: 'flex-1',
    },
    {
      slots: ['tab'],
      activeTab: true,
      class: 'bg-neutral-black text-white',
    },
  ],
});
